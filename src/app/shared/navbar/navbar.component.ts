import { Component, inject, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule, RouterLink, RouterLinkActive,
    MatToolbarModule, MatButtonModule, MatIconModule,
    MatMenuModule, MatDividerModule, MatSidenavModule, MatListModule
  ],
  template: `
    <!-- Mobile drawer -->
    <mat-sidenav-container class="sidenav-container" [class.open]="drawerOpen()">
      <mat-sidenav #drawer [(opened)]="drawerOpen" mode="over" position="end" class="mobile-drawer">
        <div class="drawer-header">
          <div class="drawer-brand">
            <mat-icon>confirmation_number</mat-icon>
            <span>TicketPlatform</span>
          </div>
          <button mat-icon-button (click)="drawerOpen.set(false)">
            <mat-icon>close</mat-icon>
          </button>
        </div>

        <mat-nav-list class="drawer-nav">
          <a mat-list-item routerLink="/events" (click)="drawerOpen.set(false)">
            <mat-icon matListItemIcon>event</mat-icon>
            <span matListItemTitle>Eventos</span>
          </a>
          <a mat-list-item routerLink="/resale" (click)="drawerOpen.set(false)">
            <mat-icon matListItemIcon>swap_horiz</mat-icon>
            <span matListItemTitle>Revendas</span>
          </a>

          @if (authService.isAuthenticated()) {
            <mat-divider />
            <a mat-list-item routerLink="/my-tickets" (click)="drawerOpen.set(false)">
              <mat-icon matListItemIcon>qr_code_2</mat-icon>
              <span matListItemTitle>Meus Ingressos</span>
            </a>
            <a mat-list-item routerLink="/profile" (click)="drawerOpen.set(false)">
              <mat-icon matListItemIcon>account_circle</mat-icon>
              <span matListItemTitle>Meu Perfil</span>
            </a>
            <a mat-list-item routerLink="/my-waitlist" (click)="drawerOpen.set(false)">
              <mat-icon matListItemIcon>hourglass_top</mat-icon>
              <span matListItemTitle>Lista de Espera</span>
            </a>
            <a mat-list-item routerLink="/loyalty" (click)="drawerOpen.set(false)">
              <mat-icon matListItemIcon>stars</mat-icon>
              <span matListItemTitle>Pontos de Fidelidade</span>
            </a>
            <a mat-list-item routerLink="/ticket-transfers" (click)="drawerOpen.set(false)">
              <mat-icon matListItemIcon>swap_horiz</mat-icon>
              <span matListItemTitle>Transferir Ingresso</span>
            </a>

            @if (authService.isOrganizer()) {
              <mat-divider />
              <a mat-list-item routerLink="/admin" (click)="drawerOpen.set(false)">
                <mat-icon matListItemIcon>dashboard</mat-icon>
                <span matListItemTitle>Painel do Organizador</span>
              </a>
              <a mat-list-item routerLink="/admin/payment-links" (click)="drawerOpen.set(false)">
                <mat-icon matListItemIcon>add_link</mat-icon>
                <span matListItemTitle>Links de Pagamento</span>
              </a>
              <a mat-list-item routerLink="/admin/flash-sales" (click)="drawerOpen.set(false)">
                <mat-icon matListItemIcon>bolt</mat-icon>
                <span matListItemTitle>Promoções Flash</span>
              </a>
            }

            <mat-divider />
            <a mat-list-item (click)="logout(); drawerOpen.set(false)">
              <mat-icon matListItemIcon color="warn">logout</mat-icon>
              <span matListItemTitle>Sair</span>
            </a>
          } @else {
            <mat-divider />
            <a mat-list-item routerLink="/login" (click)="drawerOpen.set(false)">
              <mat-icon matListItemIcon>login</mat-icon>
              <span matListItemTitle>Entrar</span>
            </a>
            <a mat-list-item routerLink="/register" (click)="drawerOpen.set(false)">
              <mat-icon matListItemIcon>person_add</mat-icon>
              <span matListItemTitle>Criar Conta</span>
            </a>
          }
        </mat-nav-list>
      </mat-sidenav>

      <!-- Actual toolbar -->
      <mat-sidenav-content>
        <mat-toolbar class="navbar" [class.scrolled]="scrolled()">
          <a routerLink="/" class="brand">
            <div class="brand-icon">
              <mat-icon>confirmation_number</mat-icon>
            </div>
            <span class="brand-name">TicketPlatform</span>
          </a>

          <span class="spacer"></span>

          <!-- Desktop nav -->
          <nav class="desktop-nav">
            <a mat-button routerLink="/events" routerLinkActive="active-link">
              <mat-icon>event</mat-icon> Eventos
            </a>
            <a mat-button routerLink="/resale" routerLinkActive="active-link">
              <mat-icon>sync_alt</mat-icon> Revendas
            </a>
          </nav>

          @if (!authService.isAuthenticated()) {
            <div class="auth-buttons desktop-nav">
              <a mat-button routerLink="/login">Entrar</a>
              <a mat-raised-button color="primary" routerLink="/register" class="register-btn">
                Criar Conta
              </a>
            </div>
          } @else {
            <div class="desktop-nav user-actions">
              <a mat-button routerLink="/my-tickets" routerLinkActive="active-link">
                <mat-icon>qr_code_2</mat-icon> Ingressos
              </a>
              @if (authService.isOrganizer()) {
                <a mat-button routerLink="/admin" routerLinkActive="active-link">
                  <mat-icon>dashboard</mat-icon> Painel
                </a>
              }
              <button mat-icon-button [matMenuTriggerFor]="userMenu" class="avatar-btn">
                <div class="avatar">{{ getInitial() }}</div>
              </button>
              <mat-menu #userMenu="matMenu" class="user-menu">
                <div class="menu-user-info">
                  <div class="menu-avatar">{{ getInitial() }}</div>
                  <div>
                    <strong>{{ authService.currentUser()?.name }}</strong>
                    <small>{{ authService.currentUser()?.email }}</small>
                  </div>
                </div>
                <mat-divider />
                <a mat-menu-item routerLink="/profile">
                  <mat-icon>manage_accounts</mat-icon> Meu Perfil
                </a>
                <a mat-menu-item routerLink="/my-tickets">
                  <mat-icon>qr_code_2</mat-icon> Meus Ingressos
                </a>
                <a mat-menu-item routerLink="/my-waitlist">
                  <mat-icon>hourglass_top</mat-icon> Lista de Espera
                </a>
                <a mat-menu-item routerLink="/loyalty">
                  <mat-icon>stars</mat-icon> Pontos de Fidelidade
                </a>
                <a mat-menu-item routerLink="/ticket-transfers">
                  <mat-icon>swap_horiz</mat-icon> Transferir Ingresso
                </a>
                @if (authService.isOrganizer()) {
                  <mat-divider />
                  <a mat-menu-item routerLink="/admin/analytics">
                    <mat-icon>bar_chart</mat-icon> Analytics
                  </a>
                  <a mat-menu-item routerLink="/admin/affiliates">
                    <mat-icon>share</mat-icon> Afiliados
                  </a>
                  <a mat-menu-item routerLink="/admin/coupons">
                    <mat-icon>discount</mat-icon> Cupons
                  </a>
                  <a mat-menu-item routerLink="/admin/payment-links">
                    <mat-icon>add_link</mat-icon> Links de Pagamento
                  </a>
                  <a mat-menu-item routerLink="/admin/flash-sales">
                    <mat-icon>bolt</mat-icon> Promoções Flash
                  </a>
                }
                <mat-divider />
                <button mat-menu-item (click)="logout()">
                  <mat-icon color="warn">logout</mat-icon> Sair
                </button>
              </mat-menu>
            </div>
          }

          <!-- Mobile hamburger -->
          <button mat-icon-button class="mobile-menu-btn" (click)="drawerOpen.set(true)">
            <mat-icon>menu</mat-icon>
          </button>
        </mat-toolbar>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    :host { display: block; }

    .sidenav-container {
      position: fixed;
      top: 0; left: 0; right: 0;
      height: 0;
      z-index: 1001;
      overflow: visible;
    }

    /* ── Toolbar ── */
    .navbar {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      height: 64px;
      padding: 0 16px;
      background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
      transition: background 0.3s, box-shadow 0.3s;
      display: flex;
      align-items: center;

      &.scrolled {
        background: rgba(32, 0, 120, 0.97);
        backdrop-filter: blur(12px);
        box-shadow: 0 2px 20px rgba(0,0,0,.25);
      }
    }

    /* ── Brand ── */
    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
      color: white;
      text-decoration: none;
      font-weight: 800;
      font-size: 1.15rem;
      letter-spacing: -0.3px;

      .brand-icon {
        background: rgba(255,255,255,.15);
        border-radius: 10px;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        mat-icon { font-size: 20px; width: 20px; height: 20px; }
      }

      .brand-name { @media (max-width: 400px) { display: none; } }
    }

    /* ── Desktop nav ── */
    .desktop-nav {
      display: flex;
      align-items: center;
      gap: 4px;

      @media (max-width: 768px) { display: none; }

      a[mat-button], a[mat-raised-button] {
        color: rgba(255,255,255,.9);
        font-weight: 500;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 4px;
        mat-icon { font-size: 18px; width: 18px; height: 18px; }
      }

      .active-link {
        background: rgba(255,255,255,.15) !important;
        color: white !important;
      }
    }

    .register-btn {
      background: white !important;
      color: var(--primary) !important;
      font-weight: 700 !important;
      border-radius: 8px !important;
      margin-left: 4px !important;
    }

    /* ── Avatar button ── */
    .avatar-btn { padding: 0 !important; }

    .avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(255,255,255,.2);
      border: 2px solid rgba(255,255,255,.4);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.9rem;
    }

    /* ── User menu ── */
    .menu-user-info {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;

      .menu-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--primary);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        flex-shrink: 0;
      }

      strong { display: block; font-size: 0.9rem; }
      small  { display: block; color: #757575; font-size: 0.78rem; }
    }

    /* ── Mobile ── */
    .mobile-menu-btn {
      color: white;
      display: none !important;
      @media (max-width: 768px) { display: flex !important; }
    }

    /* ── Drawer ── */
    .mobile-drawer {
      width: 300px;
      background: var(--surface);
    }

    .drawer-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
      color: white;
    }

    .drawer-brand {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 700;
      font-size: 1.1rem;
    }

    .drawer-nav { padding-top: 8px; }
  `]
})
export class NavbarComponent {
  authService = inject(AuthService);
  drawerOpen = signal(false);
  scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  getInitial(): string {
    const name = this.authService.currentUser()?.name ?? 'U';
    return name.charAt(0).toUpperCase();
  }

  logout(): void {
    this.authService.logout();
  }
}
