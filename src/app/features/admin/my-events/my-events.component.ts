import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { EventService } from '../../../core/services/event.service';
import { EventListResponse } from '../../../core/models';

@Component({
  selector: 'app-my-events',
  standalone: true,
  imports: [
    CommonModule, RouterLink, ReactiveFormsModule, FormsModule,
    MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule,
    MatSelectModule, MatProgressSpinnerModule, MatSnackBarModule, MatDialogModule
  ],
  template: `
    <div class="my-events-page">
      <!-- Header -->
      <div class="page-hero">
        <div class="container">
          <div class="hero-row">
            <a mat-icon-button routerLink="/admin" class="back-btn">
              <mat-icon>arrow_back</mat-icon>
            </a>
            <div class="hero-text">
              <h1 class="page-title">Meus Eventos</h1>
              <p class="page-subtitle">Gerencie seus eventos e veja métricas</p>
            </div>
            <a mat-raised-button routerLink="/admin/create-event" class="new-btn">
              <mat-icon>add</mat-icon> Novo Evento
            </a>
          </div>
        </div>
      </div>

      <div class="container events-content">
        @if (loading()) {
          <div class="skeleton-list">
            @for (n of [1,2,3]; track n) {
              <div class="skeleton-card skeleton"></div>
            }
          </div>
        } @else if (events().length === 0) {
          <div class="empty-state fade-in">
            <mat-icon class="empty-icon">event_busy</mat-icon>
            <h2>Nenhum evento criado</h2>
            <p>Crie seu primeiro evento e comece a vender ingressos!</p>
            <a mat-raised-button color="primary" routerLink="/admin/create-event">
              <mat-icon>add</mat-icon> Criar Evento
            </a>
          </div>
        } @else {
          <div class="events-list fade-in">
            @for (event of events(); track event.id) {
              <div class="event-row" [class.cancelled]="event.status === 3">
                <!-- Imagem + info -->
                <div class="event-img"
                     [style.background-image]="'url(' + (event.imageUrl || getDefaultImg(event.category)) + ')'">
                  <span class="status-badge" [class]="getStatusClass(event.status)">
                    {{ getStatusLabel(event.status) }}
                  </span>
                </div>

                <div class="event-info">
                  <h3 class="event-title">{{ event.title }}</h3>
                  <div class="event-meta-row">
                    <span><mat-icon>calendar_today</mat-icon>{{ event.dateTime | date:'dd/MM/yyyy HH:mm' }}</span>
                    <span><mat-icon>location_on</mat-icon>{{ event.venue }}, {{ event.city }}/{{ event.state }}</span>
                    @if (event.category) { <span><mat-icon>label</mat-icon>{{ event.category }}</span> }
                  </div>
                  <div class="tickets-info">
                    <span class="tickets-sold">{{ event.totalTicketsAvailable }} vagas disponíveis</span>
                    @if (event.minPrice === 0) {
                      <span class="price-badge free">GRATUITO</span>
                    } @else {
                      <span class="price-badge">A partir de {{ event.minPrice | currency:'BRL' }}</span>
                    }
                  </div>
                </div>

                <!-- Actions -->
                <div class="event-actions">
                  <a mat-icon-button [routerLink]="['/events', event.id]" title="Ver evento">
                    <mat-icon>visibility</mat-icon>
                  </a>
                  <a mat-icon-button [routerLink]="['/admin/analytics']" title="Analytics">
                    <mat-icon>bar_chart</mat-icon>
                  </a>
                  <button mat-icon-button title="Exportar participantes" (click)="exportAttendees(event)">
                    <mat-icon>download</mat-icon>
                  </button>
                  <button mat-icon-button (click)="openEdit(event)" title="Editar evento">
                    <mat-icon>edit</mat-icon>
                  </button>
                  <button mat-icon-button color="warn" (click)="confirmDelete(event)" title="Cancelar evento"
                          [disabled]="event.status === 3">
                    <mat-icon>delete</mat-icon>
                  </button>
                </div>
              </div>
            }
          </div>
        }
      </div>
    </div>

    <!-- Edit modal overlay -->
    @if (editingEvent()) {
      <div class="modal-backdrop" (click)="closeEdit()">
        <div class="modal-box" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <h2>Editar Evento</h2>
            <button mat-icon-button (click)="closeEdit()"><mat-icon>close</mat-icon></button>
          </div>
          <form [formGroup]="editForm" (ngSubmit)="saveEdit()" class="edit-form">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Título</mat-label>
              <input matInput formControlName="title">
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Descrição</mat-label>
              <textarea matInput formControlName="description" rows="3"></textarea>
            </mat-form-field>

            <div class="form-row-2">
              <mat-form-field appearance="outline">
                <mat-label>Local</mat-label>
                <input matInput formControlName="venue">
              </mat-form-field>
              <mat-form-field appearance="outline">
                <mat-label>Cidade</mat-label>
                <input matInput formControlName="city">
              </mat-form-field>
            </div>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>URL da Imagem</mat-label>
              <input matInput formControlName="imageUrl">
            </mat-form-field>

            <div class="modal-actions">
              <button mat-button type="button" (click)="closeEdit()">Cancelar</button>
              <button mat-raised-button color="primary" type="submit"
                      [disabled]="editForm.invalid || saving()">
                @if (saving()) { <mat-progress-spinner diameter="20" mode="indeterminate" /> }
                @else { <mat-icon>save</mat-icon> Salvar }
              </button>
            </div>
          </form>
        </div>
      </div>
    }
  `,
  styles: [`
    .my-events-page { padding-top: 64px; }

    .page-hero {
      background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
      padding: 32px 0 24px;
    }

    .hero-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .back-btn { color: white !important; flex-shrink: 0; }
    .hero-text { flex: 1; }
    .page-title { font-size: clamp(1.3rem, 3vw, 1.8rem); font-weight: 800; color: white; margin: 0 0 4px; }
    .page-subtitle { color: rgba(255,255,255,.75); margin: 0; }

    .new-btn {
      background: rgba(255,255,255,.15) !important;
      color: white !important;
      border-radius: 8px !important;
      flex-shrink: 0;
    }

    .events-content { padding: 28px 16px 64px; }

    /* Event row */
    .events-list { display: flex; flex-direction: column; gap: 16px; }

    .event-row {
      display: flex;
      background: var(--surface);
      border-radius: var(--radius-md);
      border: 1px solid var(--border);
      box-shadow: var(--shadow-sm);
      overflow: hidden;
      transition: box-shadow var(--transition);
      gap: 0;

      &:hover { box-shadow: var(--shadow-md); }
      &.cancelled { opacity: 0.6; }

      @media (max-width: 640px) { flex-direction: column; }
    }

    .event-img {
      width: 140px;
      flex-shrink: 0;
      background-size: cover;
      background-position: center;
      background-color: var(--surface-2);
      position: relative;

      @media (max-width: 640px) { width: 100%; height: 120px; }
    }

    .status-badge {
      position: absolute;
      top: 8px;
      left: 8px;
      padding: 3px 8px;
      border-radius: 12px;
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: .5px;

      &.active    { background: #e8f5e9; color: #2e7d32; }
      &.published { background: #e3f2fd; color: #1565c0; }
      &.draft     { background: #fff8e1; color: #f57f17; }
      &.cancelled { background: #ffebee; color: #c62828; }
    }

    .event-info {
      flex: 1;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .event-title {
      font-size: 1rem;
      font-weight: 700;
      margin: 0;
      color: var(--text-primary);
    }

    .event-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;

      span {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 0.78rem;
        color: var(--text-secondary);
        mat-icon { font-size: 13px; width: 13px; height: 13px; }
      }
    }

    .tickets-info { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-top: 4px; }

    .tickets-sold { font-size: 0.8rem; color: var(--text-hint); }

    .price-badge {
      background: var(--primary);
      color: white;
      padding: 2px 10px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      &.free { background: #43a047; }
    }

    .event-actions {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 8px;
      gap: 0;
      border-left: 1px solid var(--border);
      @media (max-width: 640px) { flex-direction: row; border-left: none; border-top: 1px solid var(--border); }
    }

    /* Skeleton */
    .skeleton-list { display: flex; flex-direction: column; gap: 16px; }
    .skeleton-card { height: 100px; border-radius: var(--radius-md); }

    /* Modal */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,.5);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }

    .modal-box {
      background: var(--surface);
      border-radius: var(--radius-lg);
      width: 100%;
      max-width: 560px;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: var(--shadow-xl);
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 24px 0;
      h2 { font-size: 1.1rem; font-weight: 700; margin: 0; }
    }

    .edit-form { padding: 20px 24px 24px; display: flex; flex-direction: column; gap: 12px; }
    .full-width { width: 100%; }
    .form-row-2 { display: flex; gap: 12px; mat-form-field { flex: 1; } }
    .modal-actions { display: flex; justify-content: flex-end; gap: 8px; margin-top: 8px; }
  `]
})
export class MyEventsComponent implements OnInit {
  private eventService = inject(EventService);
  private snackBar = inject(MatSnackBar);
  private fb = inject(FormBuilder);

  events = signal<EventListResponse[]>([]);
  loading = signal(true);
  editingEvent = signal<EventListResponse | null>(null);
  saving = signal(false);

  editForm = this.fb.group({
    title:       ['', Validators.required],
    description: ['', Validators.required],
    venue:       ['', Validators.required],
    city:        ['', Validators.required],
    imageUrl:    ['']
  });

  ngOnInit(): void {
    this.eventService.getMyEvents().subscribe({
      next: (evts) => { this.events.set(evts); this.loading.set(false); },
      error: () => this.loading.set(false)
    });
  }

  openEdit(event: EventListResponse): void {
    this.editingEvent.set(event);
    this.editForm.patchValue({
      title: event.title,
      description: event.description,
      venue: event.venue,
      city: event.city,
      imageUrl: event.imageUrl ?? ''
    });
  }

  closeEdit(): void { this.editingEvent.set(null); }

  saveEdit(): void {
    if (this.editForm.invalid || !this.editingEvent()) return;
    this.saving.set(true);
    const ev = this.editingEvent()!;
    this.eventService.updateEvent(ev.id, this.editForm.value as any).subscribe({
      next: () => {
        this.saving.set(false);
        this.closeEdit();
        this.snackBar.open('Evento atualizado!', 'OK', { duration: 3000, panelClass: 'success-snackbar' });
        this.ngOnInit();
      },
      error: (err) => {
        this.saving.set(false);
        this.snackBar.open(err.error?.error || 'Erro ao atualizar.', 'Fechar', { duration: 3000 });
      }
    });
  }

  confirmDelete(event: EventListResponse): void {
    if (!confirm(`Cancelar o evento "${event.title}"? Esta ação não pode ser desfeita.`)) return;
    this.eventService.deleteEvent(event.id).subscribe({
      next: () => {
        this.snackBar.open('Evento cancelado.', 'OK', { duration: 3000 });
        this.ngOnInit();
      },
      error: (err) => this.snackBar.open(err.error?.error || 'Erro ao cancelar.', 'Fechar', { duration: 3000 })
    });
  }

  exportAttendees(event: EventListResponse): void {
    const url = `/Events/${event.id}/attendees?csv=true`;
    const a = document.createElement('a');
    a.href = url;
    a.download = `participantes-${event.id}.csv`;
    a.click();
  }

  getStatusLabel(status: number): string {
    return ['Rascunho', 'Publicado', 'Ativo', 'Cancelado'][status] ?? 'Desconhecido';
  }

  getStatusClass(status: number): string {
    return ['draft', 'published', 'active', 'cancelled'][status] ?? '';
  }

  getDefaultImg(category?: string): string {
    const map: Record<string, string> = {
      'Música': 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=70',
      'Esportes': 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=70',
      'Teatro': 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=400&q=70',
      'Tecnologia': 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=70',
    };
    return map[category ?? ''] ?? 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=70';
  }
}
