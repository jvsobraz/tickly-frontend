import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '../../../core/services/auth.service';

function passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
  const pw = group.get('newPassword')?.value;
  const confirm = group.get('confirmPassword')?.value;
  return pw && confirm && pw !== confirm ? { passwordMismatch: true } : null;
}

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    CommonModule, RouterLink, ReactiveFormsModule,
    MatButtonModule, MatCardModule, MatIconModule,
    MatInputModule, MatFormFieldModule,
    MatProgressSpinnerModule, MatSnackBarModule
  ],
  template: `
    <div class="auth-container">
      <mat-card class="auth-card">
        <mat-card-header>
          <mat-icon mat-card-avatar class="header-icon">lock_reset</mat-icon>
          <mat-card-title>Nova Senha</mat-card-title>
          <mat-card-subtitle>Defina uma senha forte para sua conta</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          @if (!token) {
            <div class="error-box">
              <mat-icon>error_outline</mat-icon>
              <p>Link inválido. Solicite um novo <a routerLink="/forgot-password">clicando aqui</a>.</p>
            </div>
          } @else if (done) {
            <div class="success-box">
              <mat-icon class="success-icon">check_circle</mat-icon>
              <h3>Senha redefinida!</h3>
              <p>Sua senha foi alterada com sucesso. Você pode fazer login agora.</p>
              <a mat-raised-button color="primary" routerLink="/login">Fazer Login</a>
            </div>
          } @else {
            <form [formGroup]="form" (ngSubmit)="onSubmit()">
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Nova senha</mat-label>
                <mat-icon matPrefix>lock</mat-icon>
                <input matInput [type]="hidePw ? 'password' : 'text'"
                       formControlName="newPassword" autocomplete="new-password">
                <button mat-icon-button matSuffix type="button" (click)="hidePw = !hidePw">
                  <mat-icon>{{ hidePw ? 'visibility' : 'visibility_off' }}</mat-icon>
                </button>
                @if (form.get('newPassword')?.hasError('required') && form.get('newPassword')?.touched) {
                  <mat-error>Senha é obrigatória</mat-error>
                }
                @if (form.get('newPassword')?.hasError('minlength') && form.get('newPassword')?.touched) {
                  <mat-error>Mínimo 8 caracteres</mat-error>
                }
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Confirmar nova senha</mat-label>
                <mat-icon matPrefix>lock_outline</mat-icon>
                <input matInput [type]="hideConfirm ? 'password' : 'text'"
                       formControlName="confirmPassword" autocomplete="new-password">
                <button mat-icon-button matSuffix type="button" (click)="hideConfirm = !hideConfirm">
                  <mat-icon>{{ hideConfirm ? 'visibility' : 'visibility_off' }}</mat-icon>
                </button>
                @if (form.hasError('passwordMismatch') && form.get('confirmPassword')?.touched) {
                  <mat-error>As senhas não coincidem</mat-error>
                }
              </mat-form-field>

              <button mat-raised-button color="primary" type="submit"
                      class="full-width submit-btn" [disabled]="loading || form.invalid">
                @if (loading) { <mat-progress-spinner diameter="20" mode="indeterminate" /> }
                @else { Redefinir Senha }
              </button>
            </form>
          }
        </mat-card-content>

        @if (!done) {
          <mat-card-actions>
            <p class="auth-link"><a routerLink="/login">← Voltar ao login</a></p>
          </mat-card-actions>
        }
      </mat-card>
    </div>
  `,
  styles: [`
    .auth-container { display: flex; justify-content: center; align-items: center; min-height: calc(100vh - 128px); padding: 32px 16px; }
    .auth-card { width: 100%; max-width: 440px; padding: 16px; }
    .header-icon { font-size: 40px; width: 40px; height: 40px; color: #6200ea; }
    mat-form-field { margin-bottom: 4px; }
    .submit-btn { height: 48px; font-size: 1rem; margin-top: 8px; }
    .auth-link { text-align: center; a { color: #6200ea; text-decoration: none; } }
    .success-box, .error-box { text-align: center; padding: 16px 0; }
    .success-icon { font-size: 64px; width: 64px; height: 64px; color: #43a047; }
    .error-box mat-icon { font-size: 48px; width: 48px; height: 48px; color: #f44336; }
    h3 { margin: 8px 0; color: #333; }
    p { color: #666; line-height: 1.6; a { color: #6200ea; } }
  `]
})
export class ResetPasswordComponent implements OnInit {
  private authService = inject(AuthService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private fb = inject(FormBuilder);

  loading = false;
  done = false;
  hidePw = true;
  hideConfirm = true;
  token: string | null = null;

  form = this.fb.group({
    newPassword: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required]
  }, { validators: passwordMatchValidator });

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token');
  }

  onSubmit(): void {
    if (this.form.invalid || !this.token) return;
    this.loading = true;
    this.authService.resetPassword({ token: this.token, newPassword: this.form.value.newPassword! }).subscribe({
      next: () => {
        this.loading = false;
        this.done = true;
      },
      error: (err) => {
        this.loading = false;
        this.snackBar.open(err.error?.error || 'Token inválido ou expirado. Solicite um novo link.', 'Fechar',
          { duration: 6000, panelClass: 'error-snackbar' });
      }
    });
  }
}
