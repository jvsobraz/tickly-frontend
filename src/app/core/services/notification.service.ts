import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

export interface AppNotification {
  id: number;
  title: string;
  message: string;
  isRead: boolean;
  actionUrl?: string;
  type: 'info' | 'success' | 'warning' | 'error';
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly BASE = '/AppNotifications';

  unreadCount = signal(0);

  constructor(private http: HttpClient) {}

  getNotifications() {
    return this.http.get<AppNotification[]>(this.BASE);
  }

  getUnreadCount() {
    return this.http.get<number>(`${this.BASE}/unread-count`).pipe(
      tap(n => this.unreadCount.set(n))
    );
  }

  markAsRead(id: number) {
    return this.http.post<void>(`${this.BASE}/${id}/read`, {}).pipe(
      tap(() => this.unreadCount.update(n => Math.max(0, n - 1)))
    );
  }

  markAllAsRead() {
    return this.http.post<void>(`${this.BASE}/read-all`, {}).pipe(
      tap(() => this.unreadCount.set(0))
    );
  }
}
