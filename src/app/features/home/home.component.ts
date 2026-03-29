import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EventService } from '../../core/services/event.service';
import { EventListResponse, EventStatus } from '../../core/models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, RouterLink, FormsModule,
    MatButtonModule, MatCardModule, MatIconModule,
    MatInputModule, MatFormFieldModule, MatChipsModule,
    MatProgressSpinnerModule
  ],
  template: `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Encontre os Melhores Eventos</h1>
        <p>Shows, festivais, teatro, stand-up e muito mais. Compre seu ingresso com segurança.</p>
        <div class="search-bar">
          <mat-form-field appearance="fill" class="search-input">
            <mat-icon matPrefix>search</mat-icon>
            <input matInput placeholder="Buscar eventos..." [(ngModel)]="searchQuery"
                   (keyup.enter)="searchEvents()">
          </mat-form-field>
          <button mat-raised-button color="accent" (click)="searchEvents()">Buscar</button>
        </div>
        <div class="categories">
          @for (cat of featuredCategories; track cat) {
            <button mat-stroked-button class="category-chip" (click)="filterByCategory(cat)">{{ cat }}</button>
          }
        </div>
      </div>
    </section>

    <!-- Events Section -->
    <section class="container events-section">
      <div class="section-header">
        <h2 class="section-title">Próximos Eventos</h2>
        <a mat-button routerLink="/events">Ver todos <mat-icon>arrow_forward</mat-icon></a>
      </div>

      @if (loading) {
        <div class="loading-overlay">
          <mat-progress-spinner mode="indeterminate" diameter="50" />
        </div>
      } @else if (events.length === 0) {
        <div class="empty-state">
          <mat-icon>event_busy</mat-icon>
          <p>Nenhum evento disponível no momento.</p>
        </div>
      } @else {
        <div class="events-grid">
          @for (event of events; track event.id) {
            <mat-card class="event-card" [routerLink]="['/events', event.id]">
              <img mat-card-image [src]="event.imageUrl || 'assets/default-event.jpg'"
                   [alt]="event.title" class="event-image">
              <mat-card-content>
                <div class="event-category" *ngIf="event.category">
                  <span class="category-badge">{{ event.category }}</span>
                </div>
                <h3>{{ event.title }}</h3>
                <p class="event-meta">
                  <mat-icon>calendar_today</mat-icon>
                  {{ event.dateTime | date:'dd/MM/yyyy' }}
                </p>
                <p class="event-meta">
                  <mat-icon>location_on</mat-icon>
                  {{ event.venue }} · {{ event.city }}/{{ event.state }}
                </p>
              </mat-card-content>
              <mat-card-actions>
                <div class="event-price">
                  @if (event.minPrice === 0) {
                    <span class="price-free">GRATUITO</span>
                  } @else {
                    <span class="price">A partir de {{ event.minPrice | currency:'BRL' }}</span>
                  }
                </div>
                <button mat-raised-button color="primary" [routerLink]="['/events', event.id]">
                  Comprar
                </button>
              </mat-card-actions>
            </mat-card>
          }
        </div>
      }
    </section>

    <!-- How it works -->
    <section class="how-it-works">
      <div class="container">
        <h2 class="section-title" style="text-align:center">Como Funciona</h2>
        <div class="steps">
          <div class="step">
            <mat-icon>search</mat-icon>
            <h3>1. Encontre</h3>
            <p>Busque eventos por cidade, data ou categoria</p>
          </div>
          <div class="step">
            <mat-icon>shopping_cart</mat-icon>
            <h3>2. Compre</h3>
            <p>Pague com cartão ou PIX de forma segura</p>
          </div>
          <div class="step">
            <mat-icon>qr_code_2</mat-icon>
            <h3>3. Aproveite</h3>
            <p>Receba seu QR Code e entre no evento</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background: linear-gradient(135deg, #6200ea 0%, #9c27b0 100%);
      color: white; padding: 80px 16px; text-align: center;
      h1 { font-size: 2.5rem; font-weight: 700; margin-bottom: 16px; }
      p { font-size: 1.2rem; opacity: 0.9; margin-bottom: 32px; }
    }
    .search-bar { display: flex; gap: 8px; justify-content: center; max-width: 600px; margin: 0 auto 24px; }
    .search-input { flex: 1; background: white; border-radius: 4px; }
    .categories { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
    .category-chip { color: white !important; border-color: rgba(255,255,255,0.5) !important; }
    .events-section { padding: 48px 16px; }
    .section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; }
    .event-image { height: 200px; object-fit: cover; }
    .event-meta { display: flex; align-items: center; gap: 4px; color: #757575; font-size: 0.9rem; margin: 4px 0; mat-icon { font-size: 16px; width: 16px; height: 16px; } }
    .event-price { flex: 1; }
    .category-badge { background: #ede7f6; color: #6200ea; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem; }
    .empty-state { text-align: center; padding: 48px; color: #757575; mat-icon { font-size: 64px; width: 64px; height: 64px; display: block; margin: 0 auto 16px; } }
    .how-it-works { background: white; padding: 64px 16px; }
    .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-top: 32px;
      @media (max-width: 768px) { grid-template-columns: 1fr; } }
    .step { text-align: center; mat-icon { font-size: 48px; width: 48px; height: 48px; color: #6200ea; } h3 { margin: 16px 0 8px; } }
  `]
})
export class HomeComponent implements OnInit {
  private eventService = inject(EventService);

  events: EventListResponse[] = [];
  loading = true;
  searchQuery = '';

  featuredCategories = ['Show / Concerto', 'Festival', 'Teatro', 'Stand-up Comedy', 'Esportes'];

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.loading = true;
    this.eventService.getEvents({ page: 1, pageSize: 6 }).subscribe({
      next: (result) => {
        this.events = result.items;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  searchEvents(): void {
    if (this.searchQuery.trim()) {
      window.location.href = `/events?search=${encodeURIComponent(this.searchQuery)}`;
    }
  }

  filterByCategory(category: string): void {
    window.location.href = `/events?category=${encodeURIComponent(category)}`;
  }
}
