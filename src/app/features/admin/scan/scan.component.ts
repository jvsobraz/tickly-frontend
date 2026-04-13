import { Component, OnDestroy, inject, signal, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

interface ValidateResult {
  isValid: boolean;
  message: string;
  ticket?: {
    ticketId: number;
    serialNumber: string;
    eventTitle: string;
    ticketTypeName: string;
    holderName: string;
    wasAlreadyUsed: boolean;
    usedAt?: string;
  };
}

@Component({
  selector: 'app-scan',
  standalone: true,
  imports: [
    CommonModule, FormsModule, RouterLink,
    MatButtonModule, MatIconModule, MatInputModule,
    MatFormFieldModule, MatProgressSpinnerModule
  ],
  template: `
    <div class="scan-page">
      <div class="page-hero">
        <div class="container">
          <div class="hero-row">
            <a mat-icon-button routerLink="/admin" class="back-btn">
              <mat-icon>arrow_back</mat-icon>
            </a>
            <div>
              <h1 class="page-title">Validar Ingressos</h1>
              <p class="page-subtitle">Escaneie ou insira o código do ingresso</p>
            </div>
          </div>
        </div>
      </div>

      <div class="container scan-content">
        <!-- Stats -->
        <div class="stats-row">
          <div class="stat-chip success">
            <mat-icon>check_circle</mat-icon>
            <span>{{ validatedToday() }} validados hoje</span>
          </div>
          <div class="stat-chip warn" *ngIf="lastResult() && !lastResult()!.isValid">
            <mat-icon>warning</mat-icon>
            <span>Último: inválido</span>
          </div>
        </div>

        <!-- Camera scanner -->
        <div class="scanner-card">
          <div class="camera-wrap" [class.active]="cameraActive()">
            <video #videoEl autoplay playsinline class="camera-feed" [hidden]="!cameraActive()"></video>
            <canvas #canvasEl class="camera-canvas" hidden></canvas>

            @if (!cameraActive()) {
              <div class="camera-placeholder">
                <mat-icon>qr_code_scanner</mat-icon>
                <p>Câmera inativa</p>
              </div>
            }

            @if (cameraActive()) {
              <div class="scan-overlay">
                <div class="scan-frame"></div>
                <p class="scan-hint">Aponte para o QR Code do ingresso</p>
              </div>
            }
          </div>

          <div class="camera-actions">
            @if (!cameraActive()) {
              <button mat-raised-button color="primary" (click)="startCamera()" class="camera-btn">
                <mat-icon>videocam</mat-icon> Ativar Câmera
              </button>
            } @else {
              <button mat-stroked-button color="warn" (click)="stopCamera()" class="camera-btn">
                <mat-icon>videocam_off</mat-icon> Desativar
              </button>
            }
          </div>
        </div>

        <!-- Manual input -->
        <div class="manual-card">
          <h3><mat-icon>keyboard</mat-icon> Entrada Manual</h3>
          <p class="manual-hint">Use com leitor USB de QR Code ou digite o código</p>
          <div class="manual-row">
            <mat-form-field appearance="outline" class="manual-input">
              <mat-label>Código do ingresso (serial ou QR hash)</mat-label>
              <mat-icon matPrefix>confirmation_number</mat-icon>
              <input matInput [(ngModel)]="manualCode" (keydown.enter)="validateManual()"
                     placeholder="TP-XXXXXXXX ou hash do QR..." #manualInputEl>
            </mat-form-field>
            <button mat-raised-button color="primary" (click)="validateManual()"
                    [disabled]="!manualCode.trim() || validating()" class="validate-btn">
              @if (validating()) { <mat-progress-spinner diameter="20" mode="indeterminate" /> }
              @else { <mat-icon>check</mat-icon> Validar }
            </button>
          </div>
        </div>

        <!-- Result -->
        @if (lastResult()) {
          <div class="result-card fade-in" [class.result-valid]="lastResult()!.isValid"
               [class.result-invalid]="!lastResult()!.isValid"
               [class.result-warn]="lastResult()!.ticket?.wasAlreadyUsed">

            <div class="result-icon">
              @if (lastResult()!.isValid && !lastResult()!.ticket?.wasAlreadyUsed) {
                <mat-icon>check_circle</mat-icon>
              } @else if (lastResult()!.ticket?.wasAlreadyUsed) {
                <mat-icon>warning</mat-icon>
              } @else {
                <mat-icon>cancel</mat-icon>
              }
            </div>

            <div class="result-body">
              <h3>{{ lastResult()!.message }}</h3>
              @if (lastResult()!.ticket) {
                <div class="ticket-info-grid">
                  <div class="info-item">
                    <span class="label">Evento</span>
                    <span class="value">{{ lastResult()!.ticket!.eventTitle }}</span>
                  </div>
                  <div class="info-item">
                    <span class="label">Tipo</span>
                    <span class="value">{{ lastResult()!.ticket!.ticketTypeName }}</span>
                  </div>
                  <div class="info-item">
                    <span class="label">Portador</span>
                    <span class="value">{{ lastResult()!.ticket!.holderName }}</span>
                  </div>
                  <div class="info-item">
                    <span class="label">Serial</span>
                    <span class="value mono">{{ lastResult()!.ticket!.serialNumber }}</span>
                  </div>
                  @if (lastResult()!.ticket!.wasAlreadyUsed && lastResult()!.ticket!.usedAt) {
                    <div class="info-item full">
                      <span class="label">Usado em</span>
                      <span class="value">{{ lastResult()!.ticket!.usedAt | date:'dd/MM/yyyy HH:mm' }}</span>
                    </div>
                  }
                </div>
              }
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .scan-page { padding-top: 64px; }

    .page-hero {
      background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
      padding: 32px 0 24px;
    }

    .hero-row { display: flex; align-items: center; gap: 12px; }
    .back-btn { color: white !important; }
    .page-title { font-size: 1.6rem; font-weight: 800; color: white; margin: 0 0 4px; }
    .page-subtitle { color: rgba(255,255,255,.75); margin: 0; }

    .scan-content { padding: 28px 16px 64px; max-width: 680px; display: flex; flex-direction: column; gap: 20px; }

    /* Stats */
    .stats-row { display: flex; gap: 10px; flex-wrap: wrap; }
    .stat-chip {
      display: flex; align-items: center; gap: 6px; padding: 6px 14px;
      border-radius: 20px; font-size: 0.82rem; font-weight: 600;
      mat-icon { font-size: 16px; width: 16px; height: 16px; }
      &.success { background: #e8f5e9; color: #2e7d32; }
      &.warn    { background: #fff8e1; color: #f57f17; }
    }

    /* Camera */
    .scanner-card {
      background: var(--surface);
      border-radius: var(--radius-md);
      border: 1px solid var(--border);
      box-shadow: var(--shadow-sm);
      overflow: hidden;
    }

    .camera-wrap {
      position: relative;
      width: 100%;
      aspect-ratio: 4/3;
      background: #0a0a0a;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .camera-feed { width: 100%; height: 100%; object-fit: cover; }

    .camera-placeholder {
      display: flex; flex-direction: column; align-items: center; gap: 8px; color: #666;
      mat-icon { font-size: 64px; width: 64px; height: 64px; color: #333; }
    }

    .scan-overlay {
      position: absolute; inset: 0;
      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px;
    }

    .scan-frame {
      width: 220px; height: 220px;
      border: 3px solid var(--primary);
      border-radius: 12px;
      box-shadow: 0 0 0 4000px rgba(0,0,0,.5);
      animation: scan-pulse 2s ease-in-out infinite;
    }

    @keyframes scan-pulse {
      0%, 100% { border-color: var(--primary); }
      50% { border-color: #a78bfa; box-shadow: 0 0 0 4000px rgba(0,0,0,.5), 0 0 20px var(--primary); }
    }

    .scan-hint {
      color: white; font-size: 0.82rem; background: rgba(0,0,0,.5);
      padding: 4px 12px; border-radius: 20px; margin: 0;
    }

    .camera-actions { padding: 16px; display: flex; justify-content: center; }
    .camera-btn { height: 44px !important; border-radius: 8px !important; }

    /* Manual */
    .manual-card {
      background: var(--surface);
      border-radius: var(--radius-md);
      border: 1px solid var(--border);
      box-shadow: var(--shadow-sm);
      padding: 20px;

      h3 { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; margin: 0 0 4px;
           mat-icon { color: var(--primary); font-size: 20px; width: 20px; height: 20px; } }
    }

    .manual-hint { font-size: 0.82rem; color: var(--text-hint); margin: 0 0 16px; }

    .manual-row { display: flex; gap: 10px; align-items: flex-start; flex-wrap: wrap; }
    .manual-input { flex: 1 1 240px; }
    .validate-btn { height: 56px !important; border-radius: 8px !important; white-space: nowrap; }

    /* Result */
    .result-card {
      border-radius: var(--radius-md);
      border: 2px solid;
      padding: 20px;
      display: flex;
      gap: 16px;
      align-items: flex-start;

      &.result-valid  { background: #e8f5e9; border-color: #4caf50; .result-icon mat-icon { color: #2e7d32; } }
      &.result-invalid { background: #ffebee; border-color: #f44336; .result-icon mat-icon { color: #c62828; } }
      &.result-warn   { background: #fff8e1; border-color: #ff9800; .result-icon mat-icon { color: #e65100; } }
    }

    .result-icon mat-icon { font-size: 40px; width: 40px; height: 40px; }

    .result-body { flex: 1; h3 { margin: 0 0 12px; font-size: 1rem; } }

    .ticket-info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      @media (max-width: 480px) { grid-template-columns: 1fr; }
    }

    .info-item { display: flex; flex-direction: column; gap: 2px; &.full { grid-column: 1 / -1; } }
    .label { font-size: 0.72rem; color: var(--text-hint); text-transform: uppercase; letter-spacing: .5px; }
    .value { font-size: 0.88rem; font-weight: 600; &.mono { font-family: monospace; } }
  `]
})
export class ScanComponent implements OnDestroy {
  @ViewChild('videoEl') videoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvasEl') canvasRef!: ElementRef<HTMLCanvasElement>;

  private http = inject(HttpClient);

  cameraActive = signal(false);
  validating   = signal(false);
  lastResult   = signal<ValidateResult | null>(null);
  validatedToday = signal(0);

  manualCode = '';
  private stream?: MediaStream;
  private scanInterval?: ReturnType<typeof setInterval>;

  async startCamera(): Promise<void> {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } }
      });
      this.cameraActive.set(true);
      setTimeout(() => {
        this.videoRef.nativeElement.srcObject = this.stream!;
        this.startScanning();
      }, 100);
    } catch {
      alert('Não foi possível acessar a câmera. Use a entrada manual.');
    }
  }

  stopCamera(): void {
    this.stream?.getTracks().forEach(t => t.stop());
    if (this.scanInterval) clearInterval(this.scanInterval);
    this.cameraActive.set(false);
  }

  private startScanning(): void {
    if (!('BarcodeDetector' in window)) return; // fallback to manual only

    const detector = new (window as any).BarcodeDetector({ formats: ['qr_code'] });

    this.scanInterval = setInterval(async () => {
      if (!this.videoRef?.nativeElement) return;
      try {
        const barcodes = await detector.detect(this.videoRef.nativeElement);
        if (barcodes.length > 0) {
          const code = barcodes[0].rawValue as string;
          this.stopCamera();
          await this.validate(code);
        }
      } catch { /* ignore */ }
    }, 500);
  }

  validateManual(): void {
    if (!this.manualCode.trim()) return;
    this.validate(this.manualCode.trim()).then(() => { this.manualCode = ''; });
  }

  private async validate(code: string): Promise<void> {
    this.validating.set(true);
    this.http.post<ValidateResult>('/Tickets/validate', { qRCodeHash: code }).subscribe({
      next: (result) => {
        this.lastResult.set(result);
        if (result.isValid && !result.ticket?.wasAlreadyUsed) {
          this.validatedToday.update(n => n + 1);
          this.playBeep(true);
        } else {
          this.playBeep(false);
        }
        this.validating.set(false);
      },
      error: (err) => {
        this.lastResult.set({ isValid: false, message: err.error?.error || 'Ingresso inválido ou não encontrado.' });
        this.playBeep(false);
        this.validating.set(false);
      }
    });
  }

  private playBeep(success: boolean): void {
    const ctx = new AudioContext();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.frequency.value = success ? 880 : 220;
    oscillator.type = 'sine';
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.3);
  }

  ngOnDestroy(): void { this.stopCamera(); }
}
