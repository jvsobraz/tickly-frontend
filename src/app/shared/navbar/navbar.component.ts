import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule, RouterLink, RouterLinkActive,
    MatToolbarModule, MatButtonModule, MatIconModule,
    MatMenuModule, MatDividerModule
  ],
  template: `
    <mat-toolbar color="primary" class="navbar">
      <a routerLink="/" class="brand">
        <mat-icon>confirmation_number</mat-icon>
        <span>TicketPlatform</span>
      </a>

      <span class="spacer"></span>

      <a mat-button routerLink="/events" routerLinkActive="active">Eventos</a>

      @if (!authService.isAuthenticated()) {
        <a mat-button routerLink="/login">Entrar</a>
        <a mat-raised-button routerLink="/register">Criar Conta</a>
      } @else {
        <a mat-button routerLink="/my-tickets">
          <mat-icon>qr_code_2</mat-icon> Meus Ingressos
        </a>

        @if (authService.isOrganizer()) {
          <a mat-button routerLink="/admin">
            <mat-icon>dashboard</mat-icon> Painel
          </a>
        }

        <button mat-icon-button [matMenuTriggerFor]="userMenu">
          <mat-icon>account_circle</mat-icon>
        </button>
        <mat-menu #userMenu="matMenu">
          <div class="user-info">
            <strong>{{ authService.currentUser()?.name }}</strong>
            <small>{{ authService.currentUser()?.email }}</small>
          </div>
          <mat-divider />
          <button mat-menu-item (click)="logout()">
            <mat-icon>logout</mat-icon> Sair
          </button>
        </mat-menu>
      }
    </mat-toolbar>
  `,
  styles: [`
    .navbar { position: fixed; top: 0; z-index: 1000; width: 100%; }
    .brand { display: flex; align-items: center; gap: 8px; color: white;
             text-decoration: none; font-size: 1.2rem; font-weight: 700; }
    .spacer { flex: 1 1 auto; }
    .active { background: rgba(255,255,255,0.15) !important; border-radius: 4px; }
    .user-info { padding: 12px 16px; display: flex; flex-direction: column; }
    small { color: #757575; font-size: 0.8rem; }
  `]
})
export class NavbarComponent {
  authService = inject(AuthService);

  logout(): void {
    this.authService.logout();
  }
}
