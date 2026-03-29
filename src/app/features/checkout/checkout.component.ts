import { Component, OnInit, inject, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { OrderService } from '../../core/services/order.service';
import { OrderResponse, OrderStatus, PaymentMethod } from '../../core/models';

declare var Stripe: any;

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule, RouterLink,
    MatButtonModule, MatCardModule, MatIconModule,
    MatProgressSpinnerModule, MatSnackBarModule,
    MatDividerModule, MatStepperModule
  ],
  template: `
    <div class="container checkout-container">
      <h1 class="section-title">Finalizar Compra</h1>

      @if (loadingOrder) {
        <div class="loading-overlay"><mat-progress-spinner mode="indeterminate" /></div>
      } @else if (order) {

        @if (order.status === OrderStatus.Paid) {
          <!-- Success state -->
          <div class="success-state">
            <mat-icon class="success-icon">check_circle</mat-icon>
            <h2>Pagamento Confirmado!</h2>
            <p>Seus ingressos foram gerados. Acesse <strong>Meus Ingressos</strong> para visualizá-los.</p>
            <button mat-raised-button color="primary" routerLink="/my-tickets">
              <mat-icon>qr_code_2</mat-icon> Ver Meus Ingressos
            </button>
          </div>
        } @else {
          <div class="checkout-layout">
            <!-- Order Summary -->
            <mat-card class="order-summary-card">
              <mat-card-header>
                <mat-card-title>Resumo do Pedido #{{ order.id }}</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                @for (item of order.items; track item.id) {
                  <div class="order-item">
                    <div>
                      <strong>{{ item.quantity }}x {{ item.ticketTypeName }}</strong>
                      <p>{{ item.eventTitle }}</p>
                    </div>
                    <span>{{ item.subtotal | currency:'BRL' }}</span>
                  </div>
                  <mat-divider />
                }
                <div class="order-total">
                  <strong>Total a pagar:</strong>
                  <strong class="price">{{ order.totalAmount | currency:'BRL' }}</strong>
                </div>
              </mat-card-content>
            </mat-card>

            <!-- Payment -->
            <mat-card class="payment-card">
              <mat-card-header>
                <mat-card-title>
                  @if (order.paymentMethod === PaymentMethod.Pix) {
                    <mat-icon>pix</mat-icon> Pagamento via PIX
                  } @else {
                    <mat-icon>credit_card</mat-icon> Pagamento com Cartão
                  }
                </mat-card-title>
              </mat-card-header>
              <mat-card-content>
                @if (order.paymentMethod === PaymentMethod.Pix) {
                  <div class="pix-info">
                    <p>Após confirmar, você receberá o QR Code PIX para pagamento.</p>
                    <p><strong>Validade:</strong> 1 hora</p>
                    <p><strong>Valor:</strong> {{ order.totalAmount | currency:'BRL' }}</p>
                  </div>
                }

                <!-- Stripe Payment Element -->
                @if (order.paymentMethod === PaymentMethod.Card) {
                  <div id="payment-element" class="stripe-element"></div>
                  @if (stripeError) {
                    <p class="stripe-error">{{ stripeError }}</p>
                  }
                }
              </mat-card-content>
              <mat-card-actions>
                <button mat-raised-button color="primary" class="full-width pay-btn"
                        (click)="confirmPayment()" [disabled]="processingPayment || !stripeReady">
                  @if (processingPayment) {
                    <mat-progress-spinner diameter="20" mode="indeterminate" />
                  } @else {
                    <mat-icon>lock</mat-icon>
                    Pagar {{ order.totalAmount | currency:'BRL' }}
                  }
                </button>
                <button mat-button routerLink="/" class="full-width" style="margin-top:8px">Cancelar</button>
              </mat-card-actions>
            </mat-card>
          </div>
        }
      }
    </div>

    <!-- Load Stripe.js -->
    <script src="https://js.stripe.com/v3/"></script>
  `,
  styles: [`
    .checkout-container { padding: 32px 16px; max-width: 900px; }
    .checkout-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 24px;
      @media (max-width: 768px) { grid-template-columns: 1fr; } }
    .order-item { display: flex; justify-content: space-between; padding: 12px 0; p { color: #757575; font-size: 0.9rem; margin: 4px 0; } }
    .order-total { display: flex; justify-content: space-between; padding: 16px 0; font-size: 1.1rem; }
    .stripe-element { padding: 16px; border: 1px solid #e0e0e0; border-radius: 4px; min-height: 100px; }
    .stripe-error { color: #e53935; font-size: 0.9rem; margin-top: 8px; }
    .pay-btn { height: 52px; font-size: 1rem; }
    .success-state { text-align: center; padding: 64px; }
    .success-icon { font-size: 80px; width: 80px; height: 80px; color: #43a047; display: block; margin: 0 auto 24px; }
    .pix-info { background: #f3e5f5; padding: 16px; border-radius: 8px; }
  `]
})
export class CheckoutComponent implements OnInit {
  private orderService = inject(OrderService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  order: OrderResponse | null = null;
  loadingOrder = true;
  processingPayment = false;
  stripeReady = false;
  stripeError = '';

  OrderStatus = OrderStatus;
  PaymentMethod = PaymentMethod;

  private stripe: any;
  private elements: any;
  private paymentElement: any;

  // Stripe publishable key - replace with your key
  private readonly STRIPE_PK = 'pk_test_SUA_CHAVE_PUBLICA_STRIPE_AQUI';

  ngOnInit(): void {
    const orderId = Number(this.route.snapshot.params['orderId']);
    this.orderService.getOrderById(orderId).subscribe({
      next: (order) => {
        this.order = order;
        this.loadingOrder = false;
        if (order.status === OrderStatus.Pending && order.stripeClientSecret) {
          this.initStripe(order.stripeClientSecret, order.paymentMethod);
        }
      },
      error: () => {
        this.loadingOrder = false;
        this.router.navigate(['/']);
      }
    });
  }

  private async initStripe(clientSecret: string, paymentMethod: PaymentMethod): Promise<void> {
    try {
      // Load Stripe dynamically
      if (typeof Stripe === 'undefined') {
        await this.loadStripeScript();
      }

      this.stripe = Stripe(this.STRIPE_PK);

      this.elements = this.stripe.elements({
        clientSecret,
        locale: 'pt-BR'
      });

      if (paymentMethod === PaymentMethod.Card) {
        this.paymentElement = this.elements.create('payment');
        setTimeout(() => {
          this.paymentElement.mount('#payment-element');
          this.stripeReady = true;
        }, 100);
      } else {
        // PIX is handled differently
        this.stripeReady = true;
      }
    } catch (err) {
      console.error('Stripe init error:', err);
    }
  }

  private loadStripeScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/';
      script.onload = () => resolve();
      script.onerror = () => reject();
      document.head.appendChild(script);
    });
  }

  async confirmPayment(): Promise<void> {
    if (!this.stripe || !this.order) return;

    this.processingPayment = true;
    this.stripeError = '';

    try {
      let result: any;

      if (this.order.paymentMethod === PaymentMethod.Pix) {
        result = await this.stripe.confirmPixPayment(this.order.stripeClientSecret, {
          payment_method: { pix: {} }
        });
      } else {
        result = await this.stripe.confirmPayment({
          elements: this.elements,
          confirmParams: {
            return_url: `${window.location.origin}/checkout/${this.order.id}`
          },
          redirect: 'if_required'
        });
      }

      if (result.error) {
        this.stripeError = result.error.message || 'Erro no pagamento.';
        this.processingPayment = false;
      } else if (result.paymentIntent?.status === 'succeeded') {
        this.snackBar.open('Pagamento realizado com sucesso!', 'OK', { duration: 3000, panelClass: 'success-snackbar' });
        this.order!.status = OrderStatus.Paid;
        this.processingPayment = false;
      }
    } catch (err: any) {
      this.stripeError = 'Erro inesperado no pagamento.';
      this.processingPayment = false;
    }
  }
}
