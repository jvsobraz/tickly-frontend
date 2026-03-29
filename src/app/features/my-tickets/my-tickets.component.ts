import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { TicketService } from '../../core/services/ticket.service';
import { TicketResponse } from '../../core/models';

@Component({
  selector: 'app-my-tickets',
  standalone: true,
  imports: [
    CommonModule, MatButtonModule, MatCardModule, MatIconModule,
    MatProgressSpinnerModule, MatChipsModule, MatDialogModule, MatDividerModule
  ],
  template: `
    <div class="container page-container">
      <h1 class="section-title">Meus Ingressos</h1>

      @if (loading) {
        <div class="loading-overlay"><mat-progress-spinner mode="indeterminate" /></div>
      } @else if (tickets.length === 0) {
        <div class="empty-state">
          <mat-icon>confirmation_number</mat-icon>
          <h2>Nenhum ingresso encontrado</h2>
          <p>Você ainda não comprou ingressos. Que tal explorar os eventos disponíveis?</p>
          <a mat-raised-button color="primary" routerLink="/events">Ver Eventos</a>
        </div>
      } @else {
        <div class="tickets-grid">
          @for (ticket of tickets; track ticket.id) {
            <mat-card class="ticket-card" [class.used-ticket]="ticket.isUsed">
              <mat-card-header>
                <mat-card-title>{{ ticket.eventTitle }}</mat-card-title>
                <mat-card-subtitle>{{ ticket.ticketTypeName }}</mat-card-subtitle>
                <mat-chip-set>
                  @if (ticket.isUsed) {
                    <mat-chip color="warn">Utilizado</mat-chip>
                  } @else {
                    <mat-chip color="primary">Válido</mat-chip>
                  }
                </mat-chip-set>
              </mat-card-header>

              <mat-card-content>
                <!-- QR Code -->
                <div class="qr-code-container">
                  <img [src]="'data:image/png;base64,' + ticket.qrCodeBase64"
                       [alt]="'QR Code ' + ticket.serialNumber"
                       class="qr-code-image"
                       [class.qr-used]="ticket.isUsed">
                  @if (ticket.isUsed) {
                    <div class="used-overlay">
                      <mat-icon>check_circle</mat-icon>
                      <span>UTILIZADO</span>
                    </div>
                  }
                </div>

                <mat-divider />

                <div class="ticket-details">
                  <div class="detail-row">
                    <mat-icon>calendar_today</mat-icon>
                    <span>{{ ticket.eventDateTime | date:'dd/MM/yyyy - HH:mm' }}</span>
                  </div>
                  <div class="detail-row">
                    <mat-icon>location_on</mat-icon>
                    <span>{{ ticket.eventVenue }}, {{ ticket.eventCity }}</span>
                  </div>
                  <div class="detail-row">
                    <mat-icon>confirmation_number</mat-icon>
                    <span class="serial">{{ ticket.serialNumber }}</span>
                  </div>
                  <div class="detail-row">
                    <mat-icon>attach_money</mat-icon>
                    <span>{{ ticket.unitPrice | currency:'BRL' }}</span>
                  </div>
                </div>

                @if (ticket.isUsed && ticket.usedAt) {
                  <p class="used-info">Utilizado em {{ ticket.usedAt | date:'dd/MM/yyyy HH:mm' }}</p>
                }
              </mat-card-content>

              <mat-card-actions>
                <button mat-button (click)="downloadQRCode(ticket)">
                  <mat-icon>download</mat-icon> Salvar QR Code
                </button>
              </mat-card-actions>
            </mat-card>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .page-container { padding: 32px 16px; }
    .tickets-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; }
    .ticket-card { position: relative; }
    .used-ticket { opacity: 0.7; }
    .qr-code-container { position: relative; display: flex; justify-content: center; padding: 16px 0; }
    .qr-code-image { width: 220px; height: 220px; border: 2px solid #e0e0e0; border-radius: 8px; }
    .qr-used { filter: grayscale(80%); }
    .used-overlay { position: absolute; inset: 0; display: flex; flex-direction: column;
      align-items: center; justify-content: center; background: rgba(0,0,0,0.4); border-radius: 8px; color: white;
      mat-icon { font-size: 48px; width: 48px; height: 48px; color: #43a047; }
      span { font-weight: 700; font-size: 1.2rem; } }
    .ticket-details { padding: 16px 0; }
    .detail-row { display: flex; align-items: center; gap: 8px; margin: 8px 0; color: #616161;
      mat-icon { font-size: 18px; width: 18px; height: 18px; color: #9e9e9e; } }
    .serial { font-family: monospace; font-size: 0.85rem; }
    .used-info { color: #e53935; font-size: 0.85rem; text-align: center; }
    .empty-state { text-align: center; padding: 64px;
      mat-icon { font-size: 80px; width: 80px; height: 80px; color: #bdbdbd; display: block; margin: 0 auto 16px; }
      h2 { margin-bottom: 8px; } p { color: #757575; margin-bottom: 24px; } }
  `]
})
export class MyTicketsComponent implements OnInit {
  private ticketService = inject(TicketService);

  tickets: TicketResponse[] = [];
  loading = true;

  ngOnInit(): void {
    this.ticketService.getMyTickets().subscribe({
      next: (tickets) => {
        this.tickets = tickets;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  downloadQRCode(ticket: TicketResponse): void {
    const link = document.createElement('a');
    link.href = `data:image/png;base64,${ticket.qrCodeBase64}`;
    link.download = `ingresso-${ticket.serialNumber}.png`;
    link.click();
  }
}
