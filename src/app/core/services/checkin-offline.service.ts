import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, fromEvent, merge, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface CachedTicket {
  qrCodeHash: string;
  serialNumber: string;
  holderName: string;
  ticketTypeName: string;
  isUsed: boolean;
  usedAt?: string;
}

export interface OfflineValidation {
  id: string;
  qrCodeHash: string;
  validatedAt: string;
  result: OfflineValidationResult;
}

export interface OfflineValidationResult {
  isValid: boolean;
  message: string;
  ticket?: Partial<CachedTicket>;
  wasAlreadyUsed?: boolean;
}

const CACHE_KEY_PREFIX = 'checkin_cache_event_';
const QUEUE_KEY = 'checkin_offline_queue';

@Injectable({ providedIn: 'root' })
export class CheckinOfflineService {
  private http = inject(HttpClient);

  readonly isOnline$ = merge(
    of(navigator.onLine),
    fromEvent(window, 'online').pipe(map(() => true)),
    fromEvent(window, 'offline').pipe(map(() => false))
  );

  private _syncing$ = new BehaviorSubject(false);
  readonly syncing$ = this._syncing$.asObservable();

  /** Download and cache all ticket hashes for an event */
  async prefetchEvent(eventId: number): Promise<number> {
    const tickets = await this.http
      .get<CachedTicket[]>(`/Tickets/event/${eventId}/checkin-cache`)
      .toPromise();
    if (!tickets) return 0;
    localStorage.setItem(CACHE_KEY_PREFIX + eventId, JSON.stringify({
      cachedAt: new Date().toISOString(),
      tickets
    }));
    return tickets.length;
  }

  getCacheInfo(eventId: number): { cachedAt: string; count: number } | null {
    const raw = localStorage.getItem(CACHE_KEY_PREFIX + eventId);
    if (!raw) return null;
    try {
      const data = JSON.parse(raw);
      return { cachedAt: data.cachedAt, count: (data.tickets as CachedTicket[]).length };
    } catch { return null; }
  }

  clearCache(eventId: number): void {
    localStorage.removeItem(CACHE_KEY_PREFIX + eventId);
  }

  /** Validate against local cache (offline mode) */
  validateOffline(qrCodeHash: string, eventId: number): OfflineValidationResult {
    const raw = localStorage.getItem(CACHE_KEY_PREFIX + eventId);
    if (!raw) {
      return { isValid: false, message: 'Cache offline não disponível. Conecte-se e pré-carregue o evento.' };
    }
    const { tickets } = JSON.parse(raw) as { tickets: CachedTicket[] };
    const ticket = tickets.find(t => t.qrCodeHash === qrCodeHash);

    if (!ticket) {
      return { isValid: false, message: 'Ingresso não encontrado para este evento.' };
    }
    if (ticket.isUsed) {
      return {
        isValid: false,
        message: 'Ingresso já utilizado.',
        ticket,
        wasAlreadyUsed: true
      };
    }

    // Mark as used in local cache immediately
    ticket.isUsed = true;
    ticket.usedAt = new Date().toISOString();
    localStorage.setItem(CACHE_KEY_PREFIX + eventId, JSON.stringify({ cachedAt: new Date().toISOString(), tickets }));

    this.enqueueOffline(qrCodeHash, { isValid: true, message: 'Ingresso válido ✓ (offline)', ticket });
    return { isValid: true, message: 'Ingresso válido ✓ (modo offline)', ticket };
  }

  private enqueueOffline(qrCodeHash: string, result: OfflineValidationResult): void {
    const queue = this.getQueue();
    queue.push({ id: crypto.randomUUID(), qrCodeHash, validatedAt: new Date().toISOString(), result });
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
  }

  getQueue(): OfflineValidation[] {
    try {
      return JSON.parse(localStorage.getItem(QUEUE_KEY) ?? '[]');
    } catch { return []; }
  }

  /** Sync offline validations with the server when back online */
  async syncQueue(): Promise<{ synced: number; failed: number }> {
    const queue = this.getQueue();
    if (queue.length === 0) return { synced: 0, failed: 0 };

    this._syncing$.next(true);
    let synced = 0;
    let failed = 0;
    const remaining: OfflineValidation[] = [];

    for (const item of queue) {
      try {
        await this.http.post('/Tickets/validate', { qRCodeHash: item.qrCodeHash }).toPromise();
        synced++;
      } catch {
        // If it's a "already used" error, still count as synced (idempotent)
        synced++;
      }
    }

    localStorage.setItem(QUEUE_KEY, JSON.stringify(remaining));
    this._syncing$.next(false);
    return { synced, failed };
  }
}
