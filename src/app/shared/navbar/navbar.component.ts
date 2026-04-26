import { Component, inject, HostListener, signal, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService, AppNotification } from '../../core/services/notification.service';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule, RouterLink, RouterLinkActive,
    MatToolbarModule, MatButtonModule, MatIconModule,
    MatMenuModule, MatDividerModule, MatSidenavModule,
    MatListModule, MatBadgeModule, MatTooltipModule,
    TranslateModule
  ],
  template: `
    <!-- Mobile drawer -->
    <mat-sidenav-container class="sidenav-container" [class.open]="drawerOpen()">
      <mat-sidenav #drawer [(opened)]="drawerOpen" mode="over" position="end" class="mobile-drawer">
        <div class="drawer-header">
          <div class="drawer-brand">
            <mat-icon>confirmation_number</mat-icon>
            <span>Tickly</span>
          </div>
          <button mat-icon-button (click)="drawerOpen.set(false)">
            <mat-icon>close</mat-icon>
          </button>
        </div>

        <mat-nav-list class="drawer-nav">
          <a mat-list-item routerLink="/events" (click)="drawerOpen.set(false)">
            <mat-icon matListItemIcon>event</mat-icon>
            <span matListItemTitle>{{ 'NAV.EVENTS' | translate }}</span>
          </a>
          <a mat-list-item routerLink="/resale" (click)="drawerOpen.set(false)">
            <mat-icon matListItemIcon>swap_horiz</mat-icon>
            <span matListItemTitle>{{ 'NAV.RESALES' | translate }}</span>
          </a>

          @if (authService.isAuthenticated()) {
            <mat-divider />
            <a mat-list-item routerLink="/my-tickets" (click)="drawerOpen.set(false)">
              <mat-icon matListItemIcon>qr_code_2</mat-icon>
              <span matListItemTitle>{{ 'NAV.MY_TICKETS_FULL' | translate }}</span>
            </a>
            <a mat-list-item routerLink="/profile" (click)="drawerOpen.set(false)">
              <mat-icon matListItemIcon>account_circle</mat-icon>
              <span matListItemTitle>{{ 'NAV.PROFILE' | translate }}</span>
            </a>
            <a mat-list-item routerLink="/my-waitlist" (click)="drawerOpen.set(false)">
              <mat-icon matListItemIcon>hourglass_top</mat-icon>
              <span matListItemTitle>{{ 'NAV.WAITLIST' | translate }}</span>
            </a>
            <a mat-list-item routerLink="/loyalty" (click)="drawerOpen.set(false)">
              <mat-icon matListItemIcon>stars</mat-icon>
              <span matListItemTitle>{{ 'NAV.LOYALTY' | translate }}</span>
            </a>
            <a mat-list-item routerLink="/ticket-transfers" (click)="drawerOpen.set(false)">
              <mat-icon matListItemIcon>swap_horiz</mat-icon>
              <span matListItemTitle>{{ 'NAV.TRANSFERS' | translate }}</span>
            </a>

            @if (authService.isOrganizer()) {
              <mat-divider />
              <a mat-list-item routerLink="/admin" (click)="drawerOpen.set(false)">
                <mat-icon matListItemIcon>dashboard</mat-icon>
                <span matListItemTitle>{{ 'NAV.ORGANIZER_PANEL' | translate }}</span>
              </a>
              <a mat-list-item routerLink="/admin/my-events" (click)="drawerOpen.set(false)">
                <mat-icon matListItemIcon>event_note</mat-icon>
                <span matListItemTitle>{{ 'NAV.MY_EVENTS' | translate }}</span>
              </a>
              <a mat-list-item routerLink="/admin/scan" (click)="drawerOpen.set(false)">
                <mat-icon matListItemIcon>qr_code_scanner</mat-icon>
                <span matListItemTitle>{{ 'NAV.VALIDATE_QR' | translate }}</span>
              </a>
              <a mat-list-item routerLink="/admin/payment-links" (click)="drawerOpen.set(false)">
                <mat-icon matListItemIcon>add_link</mat-icon>
                <span matListItemTitle>{{ 'NAV.PAYMENT_LINKS' | translate }}</span>
              </a>
              <a mat-list-item routerLink="/admin/flash-sales" (click)="drawerOpen.set(false)">
                <mat-icon matListItemIcon>bolt</mat-icon>
                <span matListItemTitle>{{ 'NAV.FLASH_SALES' | translate }}</span>
              </a>
            }

            <mat-divider />
            <!-- Language toggle in drawer -->
            <mat-list-item (click)="languageService.toggle()">
              <mat-icon matListItemIcon>translate</mat-icon>
              <span matListItemTitle>{{ languageService.lang() === 'pt' ? 'English' : 'Português' }}</span>
            </mat-list-item>
            <!-- Dark mode toggle in drawer -->
            <mat-list-item (click)="toggleDarkMode()">
              <mat-icon matListItemIcon>{{ darkMode() ? 'light_mode' : 'dark_mode' }}</mat-icon>
              <span matListItemTitle>{{ (darkMode() ? 'NAV.LIGHT_MODE' : 'NAV.DARK_MODE') | translate }}</span>
            </mat-list-item>

            <a mat-list-item (click)="logout(); drawerOpen.set(false)">
              <mat-icon matListItemIcon color="warn">logout</mat-icon>
              <span matListItemTitle>{{ 'NAV.LOGOUT' | translate }}</span>
            </a>
          } @else {
            <mat-divider />
            <!-- Language toggle for unauthenticated -->
            <mat-list-item (click)="languageService.toggle()">
              <mat-icon matListItemIcon>translate</mat-icon>
              <span matListItemTitle>{{ languageService.lang() === 'pt' ? 'English' : 'Português' }}</span>
            </mat-list-item>
            <a mat-list-item routerLink="/login" (click)="drawerOpen.set(false)">
              <mat-icon matListItemIcon>login</mat-icon>
              <span matListItemTitle>{{ 'NAV.LOGIN' | translate }}</span>
            </a>
            <a mat-list-item routerLink="/register" (click)="drawerOpen.set(false)">
              <mat-icon matListItemIcon>person_add</mat-icon>
              <span matListItemTitle>{{ 'NAV.REGISTER' | translate }}</span>
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
            <span class="brand-name">Tickly</span>
          </a>

          <span class="spacer"></span>

          <!-- Desktop nav -->
          <nav class="desktop-nav">
            <a mat-button routerLink="/events" routerLinkActive="active-link">
              <mat-icon>event</mat-icon> {{ 'NAV.EVENTS' | translate }}
            </a>
            <a mat-button routerLink="/resale" routerLinkActive="active-link">
              <mat-icon>sync_alt</mat-icon> {{ 'NAV.RESALES' | translate }}
            </a>
          </nav>

          @if (!authService.isAuthenticated()) {
            <div class="auth-buttons desktop-nav">
              <!-- Language toggle -->
              <button mat-icon-button (click)="languageService.toggle()" class="icon-btn lang-btn"
                      [matTooltip]="languageService.lang() === 'pt' ? 'Switch to English' : 'Mudar para Português'">
                <span class="lang-label">{{ languageService.lang() === 'pt' ? 'EN' : 'PT' }}</span>
              </button>
              <!-- Dark mode toggle -->
              <button mat-icon-button (click)="toggleDarkMode()" class="icon-btn" [matTooltip]="'NAV.TOGGLE_THEME' | translate">
                <mat-icon>{{ darkMode() ? 'light_mode' : 'dark_mode' }}</mat-icon>
              </button>
              <a mat-button routerLink="/login">{{ 'NAV.LOGIN' | translate }}</a>
              <a mat-raised-button color="primary" routerLink="/register" class="register-btn">
                {{ 'NAV.REGISTER' | translate }}
              </a>
            </div>
          } @else {
            <div class="desktop-nav user-actions">
              <a mat-button routerLink="/my-tickets" routerLinkActive="active-link">
                <mat-icon>qr_code_2</mat-icon> {{ 'NAV.MY_TICKETS' | translate }}
              </a>
              @if (authService.isOrganizer()) {
                <a mat-button routerLink="/admin" routerLinkActive="active-link">
                  <mat-icon>dashboard</mat-icon> {{ 'NAV.PANEL' | translate }}
                </a>
              }

              <!-- Language toggle -->
              <button mat-icon-button (click)="languageService.toggle()" class="icon-btn lang-btn"
                      [matTooltip]="languageService.lang() === 'pt' ? 'Switch to English' : 'Mudar para Português'">
                <span class="lang-label">{{ languageService.lang() === 'pt' ? 'EN' : 'PT' }}</span>
              </button>
              <!-- Dark mode toggle -->
              <button mat-icon-button (click)="toggleDarkMode()" class="icon-btn" [matTooltip]="'NAV.TOGGLE_THEME' | translate">
                <mat-icon>{{ darkMode() ? 'light_mode' : 'dark_mode' }}</mat-icon>
              </button>

              <!-- Notification bell -->
              <button mat-icon-button [matMenuTriggerFor]="notifMenu" class="icon-btn notif-btn"
                      (menuOpened)="loadNotifications()">
                <mat-icon
                  [matBadge]="notificationService.unreadCount() || null"
                  matBadgeColor="warn"
                  matBadgeSize="small">
                  notifications
                </mat-icon>
              </button>
              <mat-menu #notifMenu="matMenu" class="notif-menu">
                <div class="notif-header" (click)="$event.stopPropagation()">
                  <span>{{ 'NAV.NOTIFICATIONS' | translate }}</span>
                  @if (notificationService.unreadCount() > 0) {
                    <button mat-button color="primary" (click)="markAllRead()">
                      {{ 'NAV.MARK_ALL_READ' | translate }}
                    </button>
                  }
                </div>
                <mat-divider />
                @if (notifications().length === 0) {
                  <div class="notif-empty">
                    <mat-icon>notifications_none</mat-icon>
                    <p>{{ 'NAV.NO_NOTIFICATIONS' | translate }}</p>
                  </div>
                } @else {
                  @for (n of notifications(); track n.id) {
                    <div class="notif-item" [class.unread]="!n.isRead" (click)="markRead(n)">
                      <mat-icon class="notif-type-icon" [class]="'notif-' + n.type">
                        {{ getNotifIcon(n.type) }}
                      </mat-icon>
                      <div class="notif-content">
                        <strong>{{ n.title }}</strong>
                        <p>{{ n.message }}</p>
                        <small>{{ n.createdAt | date:'dd/MM HH:mm' }}</small>
                      </div>
                      @if (!n.isRead) { <span class="unread-dot"></span> }
                    </div>
                  }
                }
              </mat-menu>

              <!-- Avatar + user menu -->
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
                  <mat-icon>manage_accounts</mat-icon> {{ 'NAV.PROFILE' | translate }}
                </a>
                <a mat-menu-item routerLink="/my-tickets">
                  <mat-icon>qr_code_2</mat-icon> {{ 'NAV.MY_TICKETS_FULL' | translate }}
                </a>
                <a mat-menu-item routerLink="/my-waitlist">
                  <mat-icon>hourglass_top</mat-icon> {{ 'NAV.WAITLIST' | translate }}
                </a>
                <a mat-menu-item routerLink="/loyalty">
                  <mat-icon>stars</mat-icon> {{ 'NAV.LOYALTY' | translate }}
                </a>
                <a mat-menu-item routerLink="/ticket-transfers">
                  <mat-icon>swap_horiz</mat-icon> {{ 'NAV.TRANSFERS' | translate }}
                </a>
                @if (authService.isOrganizer()) {
                  <mat-divider />
                  <a mat-menu-item routerLink="/admin/my-events">
                    <mat-icon>event_note</mat-icon> {{ 'NAV.MY_EVENTS' | translate }}
                  </a>
                  <a mat-menu-item routerLink="/admin/scan">
                    <mat-icon>qr_code_scanner</mat-icon> {{ 'NAV.VALIDATE_QR' | translate }}
                  </a>
                  <a mat-menu-item routerLink="/admin/analytics">
                    <mat-icon>bar_chart</mat-icon> {{ 'NAV.ANALYTICS' | translate }}
                  </a>
                  <a mat-menu-item routerLink="/admin/affiliates">
                    <mat-icon>share</mat-icon> {{ 'NAV.AFFILIATES' | translate }}
                  </a>
                  <a mat-menu-item routerLink="/admin/coupons">
                    <mat-icon>discount</mat-icon> {{ 'NAV.COUPONS' | translate }}
                  </a>
                  <a mat-menu-item routerLink="/admin/payment-links">
                    <mat-icon>add_link</mat-icon> {{ 'NAV.PAYMENT_LINKS' | translate }}
                  </a>
                  <a mat-menu-item routerLink="/admin/flash-sales">
                    <mat-icon>bolt</mat-icon> {{ 'NAV.FLASH_SALES' | translate }}
                  </a>
                }
                <mat-divider />
                <button mat-menu-item (click)="logout()">
                  <mat-icon color="warn">logout</mat-icon> {{ 'NAV.LOGOUT' | translate }}
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

    /* ── Icon buttons (dark mode / notif) ── */
    .icon-btn {
      color: rgba(255,255,255,.9) !important;
    }

    /* ── Notification bell badge ── */
    .notif-btn {
      position: relative;
    }

    /* ── Notification menu ── */
    .notif-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 16px 4px;
      font-weight: 700;
      font-size: 0.9rem;
      min-width: 320px;
    }

    .notif-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px 16px;
      color: var(--text-hint);
      gap: 8px;
      mat-icon { font-size: 40px; width: 40px; height: 40px; }
      p { margin: 0; font-size: 0.85rem; }
    }

    .notif-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 10px 16px;
      cursor: pointer;
      transition: background 0.15s;
      position: relative;
      max-width: 360px;

      &:hover { background: rgba(0,0,0,.04); }
      &.unread { background: rgba(98,0,234,.04); }
    }

    .notif-type-icon {
      font-size: 20px;
      width: 20px;
      height: 20px;
      margin-top: 2px;
      flex-shrink: 0;

      &.notif-info    { color: #0288d1; }
      &.notif-success { color: #43a047; }
      &.notif-warning { color: #f57f17; }
      &.notif-error   { color: #e53935; }
    }

    .notif-content {
      flex: 1;
      min-width: 0;

      strong { display: block; font-size: 0.82rem; font-weight: 700; }
      p      { margin: 2px 0 0; font-size: 0.78rem; color: var(--text-secondary); white-space: normal; line-height: 1.4; }
      small  { color: var(--text-hint); font-size: 0.7rem; }
    }

    .unread-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--primary);
      flex-shrink: 0;
      margin-top: 6px;
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
      small  { display: block; color: var(--text-secondary); font-size: 0.78rem; }
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

    /* ── Language button ── */
    .lang-btn {
      color: rgba(255,255,255,.9) !important;
      width: 36px !important;
      height: 36px !important;
    }
    .lang-label {
      font-size: 0.7rem;
      font-weight: 800;
      letter-spacing: 0.5px;
      color: rgba(255,255,255,.9);
    }
  `]
})
export class NavbarComponent implements OnInit {
  authService = inject(AuthService);
  notificationService = inject(NotificationService);
  languageService = inject(LanguageService);

  drawerOpen = signal(false);
  scrolled = signal(false);
  darkMode = signal(false);
  notifications = signal<AppNotification[]>([]);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  ngOnInit(): void {
    // Restore dark mode preference
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') {
      this.darkMode.set(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Load unread count if authenticated
    if (this.authService.isAuthenticated()) {
      this.notificationService.getUnreadCount().subscribe();
    }
  }

  toggleDarkMode(): void {
    const next = !this.darkMode();
    this.darkMode.set(next);
    if (next) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('darkMode', String(next));
  }

  loadNotifications(): void {
    this.notificationService.getNotifications().subscribe(list => {
      this.notifications.set(list.slice(0, 10));
    });
  }

  markRead(n: AppNotification): void {
    if (n.isRead) return;
    this.notificationService.markAsRead(n.id).subscribe(() => {
      this.notifications.update(list =>
        list.map(item => item.id === n.id ? { ...item, isRead: true } : item)
      );
    });
  }

  markAllRead(): void {
    this.notificationService.markAllAsRead().subscribe(() => {
      this.notifications.update(list => list.map(item => ({ ...item, isRead: true })));
    });
  }

  getNotifIcon(type: string): string {
    const map: Record<string, string> = {
      info: 'info',
      success: 'check_circle',
      warning: 'warning',
      error: 'error'
    };
    return map[type] ?? 'notifications';
  }

  getInitial(): string {
    const name = this.authService.currentUser()?.name ?? 'U';
    return name.charAt(0).toUpperCase();
  }

  logout(): void {
    this.authService.logout();
  }
}
