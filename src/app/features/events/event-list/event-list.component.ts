import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { EventService } from '../../../core/services/event.service';
import { EventListResponse } from '../../../core/models';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [
    CommonModule, RouterLink, FormsModule, ReactiveFormsModule,
    MatButtonModule, MatCardModule, MatIconModule, MatInputModule,
    MatFormFieldModule, MatSelectModule, MatDatepickerModule,
    MatNativeDateModule, MatProgressSpinnerModule, MatPaginatorModule
  ],
  template: `
    <div class="container page-container">
      <h1 class="section-title">Todos os Eventos</h1>

      <!-- Filtros -->
      <form [formGroup]="filterForm" class="filters" (ngSubmit)="applyFilters()">
        <mat-form-field appearance="outline">
          <mat-label>Buscar</mat-label>
          <mat-icon matPrefix>search</mat-icon>
          <input matInput formControlName="search" placeholder="Título, local...">
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Cidade</mat-label>
          <mat-icon matPrefix>location_on</mat-icon>
          <input matInput formControlName="city" placeholder="São Paulo, Rio...">
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Categoria</mat-label>
          <mat-select formControlName="category">
            <mat-option value="">Todas</mat-option>
            @for (cat of eventService.categories; track cat) {
              <mat-option [value]="cat">{{ cat }}</mat-option>
            }
          </mat-select>
        </mat-form-field>

        <button mat-raised-button color="primary" type="submit">
          <mat-icon>filter_list</mat-icon> Filtrar
        </button>
        <button mat-button type="button" (click)="clearFilters()">Limpar</button>
      </form>

      <!-- Resultados -->
      @if (loading) {
        <div class="loading-overlay"><mat-progress-spinner mode="indeterminate" /></div>
      } @else if (events.length === 0) {
        <div class="empty-state">
          <mat-icon>search_off</mat-icon>
          <p>Nenhum evento encontrado com os filtros selecionados.</p>
          <button mat-raised-button (click)="clearFilters()">Ver todos os eventos</button>
        </div>
      } @else {
        <p class="results-count">{{ total }} evento(s) encontrado(s)</p>
        <div class="events-grid">
          @for (event of events; track event.id) {
            <mat-card class="event-card" [routerLink]="['/events', event.id]">
              <img mat-card-image [src]="event.imageUrl || 'assets/default-event.jpg'"
                   [alt]="event.title" class="event-image">
              <mat-card-content>
                @if (event.category) {
                  <span class="category-badge">{{ event.category }}</span>
                }
                <h3>{{ event.title }}</h3>
                <p class="event-meta"><mat-icon>calendar_today</mat-icon> {{ event.dateTime | date:'dd/MM/yyyy - HH:mm' }}</p>
                <p class="event-meta"><mat-icon>location_on</mat-icon> {{ event.venue }}, {{ event.city }}/{{ event.state }}</p>
                <p class="event-description">{{ event.description | slice:0:100 }}...</p>
              </mat-card-content>
              <mat-card-actions>
                <div class="event-footer">
                  @if (event.minPrice === 0) {
                    <span class="price-free">GRATUITO</span>
                  } @else {
                    <span class="price">A partir de {{ event.minPrice | currency:'BRL' }}</span>
                  }
                  <button mat-raised-button color="primary">Ver Detalhes</button>
                </div>
              </mat-card-actions>
            </mat-card>
          }
        </div>

        <mat-paginator
          [length]="total"
          [pageSize]="pageSize"
          [pageIndex]="page - 1"
          [pageSizeOptions]="[8, 12, 24]"
          (page)="onPageChange($event)"
          showFirstLastButtons />
      }
    </div>
  `,
  styles: [`
    .page-container { padding: 32px 16px; }
    .filters { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 32px; align-items: flex-start;
      mat-form-field { min-width: 200px; } }
    .results-count { color: #757575; margin-bottom: 16px; }
    .event-image { height: 180px; object-fit: cover; }
    .category-badge { background: #ede7f6; color: #6200ea; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem; }
    .event-meta { display: flex; align-items: center; gap: 4px; color: #757575; font-size: 0.9rem; mat-icon { font-size: 16px; width: 16px; height: 16px; } }
    .event-description { color: #616161; font-size: 0.9rem; }
    .event-footer { display: flex; justify-content: space-between; align-items: center; width: 100%; }
    .empty-state { text-align: center; padding: 64px; color: #757575; mat-icon { font-size: 64px; width: 64px; height: 64px; display: block; margin: 0 auto 16px; } }
    mat-paginator { margin-top: 32px; }
  `]
})
export class EventListComponent implements OnInit {
  eventService = inject(EventService);
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);

  events: EventListResponse[] = [];
  loading = true;
  total = 0;
  page = 1;
  pageSize = 12;

  filterForm: FormGroup = this.fb.group({
    search: [''],
    city: [''],
    category: ['']
  });

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['search']) this.filterForm.patchValue({ search: params['search'] });
      if (params['category']) this.filterForm.patchValue({ category: params['category'] });
      this.loadEvents();
    });
  }

  loadEvents(): void {
    this.loading = true;
    const { search, city, category } = this.filterForm.value;
    this.eventService.getEvents({ search, city, category, page: this.page, pageSize: this.pageSize }).subscribe({
      next: (result) => {
        this.events = result.items;
        this.total = result.total;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  applyFilters(): void {
    this.page = 1;
    this.loadEvents();
  }

  clearFilters(): void {
    this.filterForm.reset({ search: '', city: '', category: '' });
    this.page = 1;
    this.loadEvents();
  }

  onPageChange(event: PageEvent): void {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadEvents();
  }
}
