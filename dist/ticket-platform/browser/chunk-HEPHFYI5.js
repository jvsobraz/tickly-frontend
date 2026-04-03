import {
  OrderService
} from "./chunk-CSAKOE4J.js";
import {
  MatDividerModule
} from "./chunk-XF4R5RJJ.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-5S3TMEQK.js";
import {
  OrderStatus,
  PaymentMethod
} from "./chunk-HSSDCDHP.js";
import {
  MatCardModule
} from "./chunk-VCT74C64.js";
import "./chunk-KNB5N7WY.js";
import "./chunk-TGBJVICH.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-VZ63OAA3.js";
import {
  ActivatedRoute,
  HttpClient,
  MatAnchor,
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconModule,
  Router,
  RouterLink
} from "./chunk-ZLZN2NNP.js";
import "./chunk-27DC6NBH.js";
import {
  CommonModule,
  CurrencyPipe,
  __async,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QN3GMCAP.js";

// src/app/features/checkout/checkout.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CheckoutComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "mat-progress-spinner", 4);
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "mat-icon");
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Pagamento Confirmado!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Seus ingressos foram gerados e est\xE3o dispon\xEDveis na sua carteira.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 7)(9, "mat-icon");
    \u0275\u0275text(10, "confirmation_number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Ver Meus Ingressos ");
    \u0275\u0275elementEnd()();
  }
}
function CheckoutComponent_Conditional_7_Conditional_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 19)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 20);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r1.quantity, "x ", item_r1.ticketTypeName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.eventTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 4, item_r1.subtotal, "BRL"));
  }
}
function CheckoutComponent_Conditional_7_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "pix");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Pagamento via PIX");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_7_Conditional_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "credit_card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Pagamento com Cart\xE3o");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_7_Conditional_1_Conditional_20_Conditional_0_Conditional_37_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function CheckoutComponent_Conditional_7_Conditional_1_Conditional_20_Conditional_0_Conditional_37_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r3.copyPixCode());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Copiar c\xF3digo PIX ");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_7_Conditional_1_Conditional_20_Conditional_0_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "p", 28);
    \u0275\u0275text(2, "Escaneie o QR Code com seu banco:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 29);
    \u0275\u0275template(4, CheckoutComponent_Conditional_7_Conditional_1_Conditional_20_Conditional_0_Conditional_37_Conditional_4_Template, 4, 0, "button", 30);
    \u0275\u0275elementStart(5, "p", 31);
    \u0275\u0275element(6, "mat-progress-spinner", 32);
    \u0275\u0275text(7, " Aguardando confirma\xE7\xE3o do pagamento... ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r3.pixQrCode, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, ctx_r3.pixCopyPaste ? 4 : -1);
  }
}
function CheckoutComponent_Conditional_7_Conditional_1_Conditional_20_Conditional_0_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 27);
  }
}
function CheckoutComponent_Conditional_7_Conditional_1_Conditional_20_Conditional_0_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "pix");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.pixQrCode ? "J\xE1 paguei" : "Gerar QR Code PIX", " ");
  }
}
function CheckoutComponent_Conditional_7_Conditional_1_Conditional_20_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "mat-icon");
    \u0275\u0275text(3, "pix");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "Pague com PIX");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ul", 23)(7, "li")(8, "mat-icon");
    \u0275\u0275text(9, "looks_one");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, ' Clique em "Gerar QR Code PIX" abaixo');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "li")(12, "mat-icon");
    \u0275\u0275text(13, "looks_two");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Abra o app do seu banco e escaneie o QR Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li")(16, "mat-icon");
    \u0275\u0275text(17, "looks_3");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Confirme o pagamento de ");
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "li")(23, "mat-icon");
    \u0275\u0275text(24, "looks_4");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " Seus ingressos ser\xE3o gerados automaticamente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 24)(27, "span");
    \u0275\u0275text(28, "Valor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "strong");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 24)(33, "span");
    \u0275\u0275text(34, "Validade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "strong");
    \u0275\u0275text(36, "1 hora");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(37, CheckoutComponent_Conditional_7_Conditional_1_Conditional_20_Conditional_0_Conditional_37_Template, 8, 2, "div", 25);
    \u0275\u0275elementStart(38, "button", 26);
    \u0275\u0275listener("click", function CheckoutComponent_Conditional_7_Conditional_1_Conditional_20_Conditional_0_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.confirmPayment());
    });
    \u0275\u0275template(39, CheckoutComponent_Conditional_7_Conditional_1_Conditional_20_Conditional_0_Conditional_39_Template, 1, 0, "mat-progress-spinner", 27)(40, CheckoutComponent_Conditional_7_Conditional_1_Conditional_20_Conditional_0_Conditional_40_Template, 3, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(20);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 5, ctx_r3.order.totalAmount, "BRL"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 8, ctx_r3.order.totalAmount, "BRL"));
    \u0275\u0275advance(7);
    \u0275\u0275conditional(37, ctx_r3.pixQrCode ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.processingPayment || !ctx_r3.stripeReady);
    \u0275\u0275advance();
    \u0275\u0275conditional(39, ctx_r3.processingPayment ? 39 : 40);
  }
}
function CheckoutComponent_Conditional_7_Conditional_1_Conditional_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "PIX confirmado! Gerando seus ingressos...");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "mat-progress-spinner", 4);
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_7_Conditional_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CheckoutComponent_Conditional_7_Conditional_1_Conditional_20_Conditional_0_Template, 41, 11)(1, CheckoutComponent_Conditional_7_Conditional_1_Conditional_20_Conditional_1_Template, 6, 0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(0, !ctx_r3.pixConfirmed ? 0 : 1);
  }
}
function CheckoutComponent_Conditional_7_Conditional_1_Conditional_21_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "mat-icon");
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.stripeError, " ");
  }
}
function CheckoutComponent_Conditional_7_Conditional_1_Conditional_21_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 27);
  }
}
function CheckoutComponent_Conditional_7_Conditional_1_Conditional_21_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Pagar ", \u0275\u0275pipeBind2(3, 1, ctx_r3.order.totalAmount, "BRL"), " ");
  }
}
function CheckoutComponent_Conditional_7_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h3", 35)(1, "mat-icon");
    \u0275\u0275text(2, "credit_card");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Dados do Cart\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 36);
    \u0275\u0275template(5, CheckoutComponent_Conditional_7_Conditional_1_Conditional_21_Conditional_5_Template, 4, 1, "div", 37);
    \u0275\u0275elementStart(6, "button", 26);
    \u0275\u0275listener("click", function CheckoutComponent_Conditional_7_Conditional_1_Conditional_21_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.confirmPayment());
    });
    \u0275\u0275template(7, CheckoutComponent_Conditional_7_Conditional_1_Conditional_21_Conditional_7_Template, 1, 0, "mat-progress-spinner", 27)(8, CheckoutComponent_Conditional_7_Conditional_1_Conditional_21_Conditional_8_Template, 4, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(5, ctx_r3.stripeError ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.processingPayment || !ctx_r3.stripeReady);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, ctx_r3.processingPayment ? 7 : 8);
  }
}
function CheckoutComponent_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "mat-icon");
    \u0275\u0275text(4, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 11);
    \u0275\u0275repeaterCreate(8, CheckoutComponent_Conditional_7_Conditional_1_For_9_Template, 9, 7, "div", 12, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 13)(11, "span");
    \u0275\u0275text(12, "Total a pagar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong", 14);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 15);
    \u0275\u0275template(17, CheckoutComponent_Conditional_7_Conditional_1_Conditional_17_Template, 4, 0)(18, CheckoutComponent_Conditional_7_Conditional_1_Conditional_18_Template, 4, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 16);
    \u0275\u0275template(20, CheckoutComponent_Conditional_7_Conditional_1_Conditional_20_Template, 2, 1)(21, CheckoutComponent_Conditional_7_Conditional_1_Conditional_21_Template, 9, 3);
    \u0275\u0275elementStart(22, "button", 17);
    \u0275\u0275text(23, "Cancelar pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 18)(25, "mat-icon");
    \u0275\u0275text(26, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Pagamento processado com seguran\xE7a pelo Stripe ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Resumo do Pedido #", ctx_r3.order.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.order.items);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 4, ctx_r3.order.totalAmount, "BRL"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(17, ctx_r3.order.paymentMethod === ctx_r3.PaymentMethod.Pix ? 17 : 18);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(20, ctx_r3.order.paymentMethod === ctx_r3.PaymentMethod.Pix ? 20 : 21);
  }
}
function CheckoutComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CheckoutComponent_Conditional_7_Conditional_0_Template, 12, 0, "div", 5)(1, CheckoutComponent_Conditional_7_Conditional_1_Template, 28, 7);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r3.order.status === ctx_r3.OrderStatus.Paid ? 0 : 1);
  }
}
var CheckoutComponent = class _CheckoutComponent {
  constructor() {
    this.orderService = inject(OrderService);
    this.http = inject(HttpClient);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.snackBar = inject(MatSnackBar);
    this.order = null;
    this.loadingOrder = true;
    this.processingPayment = false;
    this.stripeReady = false;
    this.stripeError = "";
    this.pixQrCode = "";
    this.pixCopyPaste = "";
    this.pixConfirmed = false;
    this.OrderStatus = OrderStatus;
    this.PaymentMethod = PaymentMethod;
  }
  ngOnInit() {
    const orderId = Number(this.route.snapshot.params["orderId"]);
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
        this.router.navigate(["/"]);
      }
    });
  }
  ngOnDestroy() {
    if (this.pollInterval)
      clearInterval(this.pollInterval);
  }
  initStripe(clientSecret, paymentMethod) {
    return __async(this, null, function* () {
      try {
        const config = yield this.http.get("/Config/stripe-key").toPromise();
        const publishableKey = config?.publishableKey;
        if (!publishableKey || publishableKey.includes("COLOQUE")) {
          this.stripeError = "Chave do Stripe n\xE3o configurada. Configure Stripe:PublishableKey no appsettings.";
          return;
        }
        if (typeof Stripe === "undefined") {
          yield this.loadStripeScript();
        }
        this.stripe = Stripe(publishableKey);
        this.elements = this.stripe.elements({ clientSecret, locale: "pt-BR" });
        if (paymentMethod === PaymentMethod.Card) {
          const paymentEl = this.elements.create("payment");
          setTimeout(() => {
            paymentEl.mount("#payment-element");
            this.stripeReady = true;
          }, 100);
        } else {
          this.stripeReady = true;
        }
      } catch (err) {
        console.error("Stripe init error:", err);
        this.stripeError = "Erro ao inicializar pagamento.";
      }
    });
  }
  loadStripeScript() {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://js.stripe.com/v3/";
      script.onload = () => resolve();
      script.onerror = () => reject();
      document.head.appendChild(script);
    });
  }
  confirmPayment() {
    return __async(this, null, function* () {
      if (!this.stripe || !this.order)
        return;
      if (this.order.paymentMethod === PaymentMethod.Pix && this.pixQrCode) {
        this.pollForPixConfirmation(true);
        return;
      }
      this.processingPayment = true;
      this.stripeError = "";
      try {
        let result;
        if (this.order.paymentMethod === PaymentMethod.Pix) {
          result = yield this.stripe.confirmPixPayment(this.order.stripeClientSecret, {
            payment_method: { pix: {} }
          });
          if (result.error) {
            this.stripeError = result.error.message || "Erro ao gerar PIX.";
            this.processingPayment = false;
            return;
          }
          const nextAction = result.paymentIntent?.next_action;
          if (nextAction?.type === "pix_display_qr_code") {
            this.pixQrCode = nextAction.pix_display_qr_code?.image_url_png ?? "";
            this.pixCopyPaste = nextAction.pix_display_qr_code?.data ?? "";
          }
          this.processingPayment = false;
          this.pollForPixConfirmation(false);
        } else {
          result = yield this.stripe.confirmPayment({
            elements: this.elements,
            confirmParams: { return_url: `${window.location.origin}/checkout/${this.order.id}` },
            redirect: "if_required"
          });
          if (result.error) {
            this.stripeError = result.error.message || "Erro no pagamento.";
            this.processingPayment = false;
          } else if (result.paymentIntent?.status === "succeeded") {
            this.orderService.confirmOrder(this.order.id).subscribe({
              next: () => {
                this.order.status = OrderStatus.Paid;
                this.processingPayment = false;
                this.snackBar.open("Pagamento realizado com sucesso!", "OK", { duration: 3e3, panelClass: "success-snackbar" });
              },
              error: () => {
                this.order.status = OrderStatus.Paid;
                this.processingPayment = false;
              }
            });
          }
        }
      } catch (err) {
        this.stripeError = "Erro inesperado no pagamento.";
        this.processingPayment = false;
      }
    });
  }
  pollForPixConfirmation(immediate) {
    if (this.pollInterval)
      clearInterval(this.pollInterval);
    const check = () => {
      this.orderService.getOrderById(this.order.id).subscribe({
        next: (o) => {
          if (o.status === OrderStatus.Paid) {
            if (this.pollInterval)
              clearInterval(this.pollInterval);
            this.order = o;
            this.pixConfirmed = true;
            setTimeout(() => this.router.navigate(["/my-tickets"]), 2e3);
          }
        }
      });
    };
    if (immediate) {
      check();
      return;
    }
    this.pollInterval = setInterval(check, 4e3);
  }
  copyPixCode() {
    navigator.clipboard.writeText(this.pixCopyPaste).then(() => this.snackBar.open("C\xF3digo PIX copiado!", "OK", { duration: 2e3 }));
  }
  static {
    this.\u0275fac = function CheckoutComponent_Factory(t) {
      return new (t || _CheckoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [[1, "checkout-page"], [1, "container", "checkout-container"], [1, "checkout-title"], [1, "loading-overlay"], ["mode", "indeterminate"], [1, "success-state", "fade-in"], [1, "success-circle"], ["mat-raised-button", "", "color", "primary", "routerLink", "/my-tickets", 1, "success-btn"], [1, "checkout-layout"], [1, "summary-card"], [1, "card-title-row"], [1, "items-list"], [1, "order-item"], [1, "summary-total"], [1, "total-value"], [1, "payment-badge"], [1, "payment-card"], ["mat-button", "", "routerLink", "/", 1, "cancel-btn"], [1, "security-note"], [1, "item-info"], [1, "item-price"], [1, "pix-instructions"], [1, "pix-icon-wrap"], [1, "pix-steps"], [1, "pix-detail-row"], [1, "qr-section", "fade-in"], ["mat-raised-button", "", "color", "primary", 1, "pay-btn", 3, "click", "disabled"], ["diameter", "20", "mode", "indeterminate"], [1, "qr-label"], ["alt", "PIX QR Code", 1, "pix-qr", 3, "src"], ["mat-stroked-button", "", 1, "copy-btn"], [1, "pix-waiting"], ["diameter", "16", "mode", "indeterminate"], ["mat-stroked-button", "", 1, "copy-btn", 3, "click"], [1, "pix-success"], [1, "payment-title"], ["id", "payment-element", 1, "stripe-element"], [1, "stripe-error-box"]], template: function CheckoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2)(3, "mat-icon");
        \u0275\u0275text(4, "shopping_bag");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Finalizar Compra ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, CheckoutComponent_Conditional_6_Template, 2, 0, "div", 3)(7, CheckoutComponent_Conditional_7_Template, 2, 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.loadingOrder ? 6 : ctx.order ? 7 : -1);
      }
    }, dependencies: [
      CommonModule,
      CurrencyPipe,
      RouterLink,
      MatButtonModule,
      MatAnchor,
      MatButton,
      MatCardModule,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSnackBarModule,
      MatDividerModule
    ], styles: ['@charset "UTF-8";\n\n\n\n.checkout-page[_ngcontent-%COMP%] {\n  padding-top: 64px;\n  min-height: 100vh;\n  background: var(--background);\n}\n.checkout-container[_ngcontent-%COMP%] {\n  padding: 40px 16px 64px;\n  max-width: 960px;\n}\n.checkout-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 32px;\n}\n.checkout-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n}\n.checkout-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 768px) {\n  .checkout-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-sm);\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.card-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.card-title-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.card-title-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n}\n.items-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.order-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--border);\n}\n.item-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.item-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-secondary);\n}\n.item-price[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n  white-space: nowrap;\n}\n.summary-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0 0;\n}\n.summary-total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-secondary);\n}\n.total-value[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--primary);\n}\n.payment-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--surface-2);\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.payment-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--primary);\n}\n.payment-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-sm);\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.payment-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n}\n.payment-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.stripe-element[_ngcontent-%COMP%] {\n  padding: 16px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  min-height: 80px;\n  background: var(--surface-2);\n}\n.stripe-error-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #ffebee;\n  color: #c62828;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 0.88rem;\n}\n.stripe-error-box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.pix-instructions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.pix-icon-wrap[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: #e8f5e9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pix-icon-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n}\n.pix-instructions[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0;\n}\n.pix-steps[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.pix-steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: 0.88rem;\n  color: var(--text-secondary);\n}\n.pix-steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--primary);\n  flex-shrink: 0;\n}\n.pix-detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.9rem;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--border);\n}\n.pix-detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.qr-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.qr-label[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--text-secondary);\n  margin: 0;\n  text-align: center;\n}\n.pix-qr[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: 2px solid var(--border);\n  border-radius: var(--radius-sm);\n}\n.copy-btn[_ngcontent-%COMP%] {\n  border-radius: 8px !important;\n  font-size: 0.82rem !important;\n}\n.pix-waiting[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.82rem;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.pix-success[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 24px;\n  text-align: center;\n}\n.pix-success[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #43a047;\n}\n.pix-success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin: 0;\n}\n.pay-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 52px !important;\n  font-size: 1rem !important;\n  border-radius: 10px !important;\n  font-weight: 700 !important;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  color: var(--text-hint) !important;\n  font-size: 0.85rem !important;\n}\n.security-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  justify-content: center;\n  font-size: 0.75rem;\n  color: var(--text-hint);\n}\n.security-note[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.success-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 80px 24px;\n  gap: 16px;\n}\n.success-circle[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: #e8f5e9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.success-circle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #43a047;\n}\n.success-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  margin: 0;\n}\n.success-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin: 0;\n}\n.success-btn[_ngcontent-%COMP%] {\n  height: 48px !important;\n  font-size: 1rem !important;\n  border-radius: 10px !important;\n}\n/*# sourceMappingURL=checkout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src\\app\\features\\checkout\\checkout.component.ts", lineNumber: 433 });
})();
export {
  CheckoutComponent
};
//# sourceMappingURL=chunk-HEPHFYI5.js.map
