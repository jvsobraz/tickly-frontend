import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '../../../core/services/auth.service';
import { UserRole } from '../../../core/models';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule, RouterLink, ReactiveFormsModule,
    MatButtonModule, MatCardModule, MatIconModule,
    MatInputModule, MatFormFieldModule, MatSelectModule,
    MatProgressSpinnerModule, MatSnackBarModule
  ],
  template: `
    <div class="auth-container">
      <mat-card class="auth-card">
        <mat-card-header>
          <mat-icon mat-card-avatar style="font-size:40px;width:40px;height:40px;color:#6200ea">person_add</mat-icon>
          <mat-card-title>Criar Conta</mat-card-title>
          <mat-card-subtitle>Junte-se ao TicketPlatform</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <form [formGroup]="form" (ngSubmit)="onSubmit()">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Nome completo</mat-label>
              <mat-icon matPrefix>person</mat-icon>
              <input matInput formControlName="name">
              @if (form.get('name')?.hasError('required')) {
                <mat-error>Nome é obrigatório</mat-error>
              }
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>E-mail</mat-label>
              <mat-icon matPrefix>email</mat-icon>
              <input matInput type="email" formControlName="email" autocomplete="email">
              @if (form.get('email')?.hasError('required')) { <mat-error>E-mail é obrigatório</mat-error> }
              @if (form.get('email')?.hasError('email')) { <mat-error>E-mail inválido</mat-error> }
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Senha</mat-label>
              <mat-icon matPrefix>lock</mat-icon>
              <input matInput [type]="hidePassword ? 'password' : 'text'" formControlName="password">
              <button mat-icon-button matSuffix type="button" (click)="hidePassword = !hidePassword">
                <mat-icon>{{ hidePassword ? 'visibility' : 'visibility_off' }}</mat-icon>
              </button>
              @if (form.get('password')?.hasError('required')) { <mat-error>Senha é obrigatória</mat-error> }
              @if (form.get('password')?.hasError('minlength')) { <mat-error>Mínimo 6 caracteres</mat-error> }
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Telefone (opcional)</mat-label>
              <mat-icon matPrefix>phone</mat-icon>
              <input matInput formControlName="phone" placeholder="(11) 99999-9999">
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Tipo de conta</mat-label>
              <mat-select formControlName="role">
                <mat-option [value]="UserRole.Customer">Comprador de Ingressos</mat-option>
                <mat-option [value]="UserRole.Organizer">Organizador de Eventos</mat-option>
              </mat-select>
            </mat-form-field>

            <button mat-raised-button color="primary" type="submit"
                    class="full-width submit-btn" [disabled]="loading">
              @if (loading) { <mat-progress-spinner diameter="20" mode="indeterminate" /> }
              @else { Criar Conta }
            </button>
          </form>
        </mat-card-content>

        <mat-card-actions>
          <p class="auth-link">Já tem conta? <a routerLink="/login">Entrar</a></p>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    .auth-container { display: flex; justify-content: center; align-items: center; min-height: calc(100vh - 128px); padding: 32px 16px; }
    .auth-card { width: 100%; max-width: 480px; padding: 16px; }
    mat-form-field { margin-bottom: 8px; }
    .submit-btn { height: 48px; font-size: 1rem; margin-top: 8px; }
    .auth-link { text-align: center; color: #757575; a { color: #6200ea; } }
  `]
})
export class RegisterComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private fb = inject(FormBuilder);

  loading = false;
  hidePassword = true;
  UserRole = UserRole;

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    phone: [''],
    role: [UserRole.Customer]
  });

  onSubmit(): void {
    if (this.form.invalid) return;
    this.loading = true;
    this.authService.register(this.form.value as any).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => {
        this.loading = false;
        this.snackBar.open(err.error?.error || 'Erro ao criar conta', 'Fechar',
          { duration: 4000, panelClass: 'error-snackbar' });
      }
    });
  }
}
