import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <mat-icon>confirmation_number</mat-icon>
            <span>TicketPlatform</span>
          </div>
          <div class="footer-links">
            <a routerLink="/events">Eventos</a>
            <a routerLink="/register">Seja um Organizador</a>
          </div>
          <p class="footer-copy">© {{ year }} TicketPlatform. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer { background: #212121; color: #bdbdbd; padding: 32px 0; margin-top: 48px; }
    .footer-content { display: flex; flex-direction: column; align-items: center; gap: 16px; }
    .footer-brand { display: flex; align-items: center; gap: 8px; color: white; font-size: 1.2rem; font-weight: 700; }
    .footer-links { display: flex; gap: 24px; }
    .footer-links a { color: #bdbdbd; text-decoration: none; &:hover { color: white; } }
    .footer-copy { font-size: 0.85rem; margin: 0; }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
