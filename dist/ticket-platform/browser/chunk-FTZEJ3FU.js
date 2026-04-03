import {
  TicketService
} from "./chunk-BQSHM6HP.js";
import {
  LoyaltyService
} from "./chunk-QGWOC5CO.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-U4Q77IAY.js";
import {
  AuthService
} from "./chunk-A2OQRZ4M.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-TVTX5DCA.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-SCN3YP5A.js";
import {
  OrderService
} from "./chunk-CSAKOE4J.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-XF4R5RJJ.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-5S3TMEQK.js";
import {
  UserRole
} from "./chunk-HSSDCDHP.js";
import "./chunk-KNB5N7WY.js";
import "./chunk-TGBJVICH.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-VZ63OAA3.js";
import {
  MatAnchor,
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  RouterLink
} from "./chunk-ZLZN2NNP.js";
import "./chunk-27DC6NBH.js";
import {
  CommonModule,
  CurrencyPipe,
  forkJoin,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QN3GMCAP.js";

// src/app/features/profile/profile.component.ts
var _c0 = () => [1, 2, 3, 4];
function ProfileComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 36)(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 38);
    \u0275\u0275text(5, "Ingressos");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "div", 39);
    \u0275\u0275elementStart(7, "div", 36)(8, "span", 37);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 38);
    \u0275\u0275text(11, "Pedidos");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "div", 39);
    \u0275\u0275elementStart(13, "div", 36)(14, "span", 37);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 38);
    \u0275\u0275text(17, "Pontos");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "div", 39);
    \u0275\u0275elementStart(19, "div", 36)(20, "span", 37);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 38);
    \u0275\u0275text(24, "Total gasto");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.ticketCount);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.orderCount);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.loyaltyPoints);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(22, 4, ctx_r0.totalSpent, "BRL", "symbol", "1.0-0"));
  }
}
function ProfileComponent_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 41);
  }
}
function ProfileComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275repeaterCreate(1, ProfileComponent_Conditional_15_For_2_Template, 1, 0, "div", 41, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function ProfileComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Nome \xE9 obrigat\xF3rio");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 22);
  }
}
function ProfileComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Salvar altera\xE7\xF5es ");
  }
}
function ProfileComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Senha atual obrigat\xF3ria");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "M\xEDnimo 6 caracteres");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Senhas n\xE3o coincidem");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 22);
  }
}
function ProfileComponent_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "key");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Alterar senha ");
  }
}
var ProfileComponent = class _ProfileComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.ticketService = inject(TicketService);
    this.orderService = inject(OrderService);
    this.loyaltyService = inject(LoyaltyService);
    this.fb = inject(FormBuilder);
    this.snackBar = inject(MatSnackBar);
    this.statsLoaded = signal(false);
    this.ticketCount = 0;
    this.orderCount = 0;
    this.loyaltyPoints = 0;
    this.totalSpent = 0;
    this.savingProfile = false;
    this.changingPassword = false;
    this.showCurrent = false;
    this.showNew = false;
    this.showConfirm = false;
    this.profileForm = this.fb.group({
      name: [this.authService.currentUser()?.name ?? "", Validators.required],
      phone: [this.authService.currentUser()?.phone ?? ""],
      cpf: [""]
    });
    this.passwordForm = this.fb.group({
      currentPassword: ["", Validators.required],
      newPassword: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", Validators.required]
    }, { validators: this.passwordMatchValidator });
  }
  ngOnInit() {
    forkJoin({
      tickets: this.ticketService.getMyTickets(),
      orders: this.orderService.getMyOrders(),
      loyalty: this.loyaltyService.getBalance()
    }).subscribe({
      next: ({ tickets, orders, loyalty }) => {
        this.ticketCount = tickets.length;
        this.orderCount = orders.length;
        this.loyaltyPoints = loyalty.points ?? 0;
        this.totalSpent = orders.reduce((sum, o) => sum + (o.totalAmount ?? 0), 0);
        this.statsLoaded.set(true);
      },
      error: () => this.statsLoaded.set(true)
    });
  }
  saveProfile() {
    if (this.profileForm.invalid)
      return;
    this.savingProfile = true;
    const req = {
      name: this.profileForm.value.name ?? void 0,
      phone: this.profileForm.value.phone ?? void 0,
      cpf: this.profileForm.value.cpf ?? void 0
    };
    this.authService.updateProfile(req).subscribe({
      next: () => {
        this.savingProfile = false;
        this.authService.getProfile().subscribe();
        this.snackBar.open("Perfil atualizado com sucesso!", "OK", { duration: 3e3, panelClass: "success-snackbar" });
      },
      error: () => {
        this.savingProfile = false;
        this.snackBar.open("Erro ao atualizar perfil.", "OK", { duration: 3e3, panelClass: "error-snackbar" });
      }
    });
  }
  changePassword() {
    if (this.passwordForm.invalid)
      return;
    this.changingPassword = true;
    const req = {
      currentPassword: this.passwordForm.value.currentPassword,
      newPassword: this.passwordForm.value.newPassword
    };
    this.authService.changePassword(req).subscribe({
      next: () => {
        this.changingPassword = false;
        this.passwordForm.reset();
        this.snackBar.open("Senha alterada com sucesso!", "OK", { duration: 3e3, panelClass: "success-snackbar" });
      },
      error: () => {
        this.changingPassword = false;
        this.snackBar.open("Senha atual incorreta.", "OK", { duration: 3e3, panelClass: "error-snackbar" });
      }
    });
  }
  getInitial() {
    return (this.authService.currentUser()?.name ?? "U").charAt(0).toUpperCase();
  }
  getRoleLabel() {
    const role = this.authService.currentUser()?.role;
    return role === UserRole.Admin ? "Admin" : role === UserRole.Organizer ? "Organizador" : "Comprador";
  }
  getRoleClass() {
    const role = this.authService.currentUser()?.role;
    return role === UserRole.Admin ? "role-admin" : role === UserRole.Organizer ? "role-organizer" : "role-customer";
  }
  passwordMatchValidator(control) {
    const p = control.get("newPassword")?.value;
    const c = control.get("confirmPassword")?.value;
    return p && c && p !== c ? { mismatch: true } : null;
  }
  static {
    this.\u0275fac = function ProfileComponent_Factory(t) {
      return new (t || _ProfileComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 112, vars: 24, consts: [[1, "profile-page"], [1, "page-hero"], [1, "container"], [1, "hero-row"], [1, "avatar-circle"], [1, "hero-info"], [1, "page-title"], [1, "page-subtitle"], [1, "role-badge"], [1, "container", "profile-content"], [1, "stats-row", "fade-in"], [1, "sections-grid"], [1, "profile-section", "fade-in"], [1, "section-header"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matPrefix", ""], ["matInput", "", "formControlName", "name", "placeholder", "Seu nome"], ["matInput", "", "disabled", "", 3, "value"], ["matInput", "", "formControlName", "phone", "placeholder", "(11) 99999-9999"], ["matInput", "", "formControlName", "cpf", "placeholder", "000.000.000-00"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "full-width", 3, "disabled"], ["diameter", "20", "mode", "indeterminate"], [1, "profile-section", "fade-in-delay-1"], ["matInput", "", "formControlName", "currentPassword", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["matInput", "", "formControlName", "newPassword", 3, "type"], ["matInput", "", "formControlName", "confirmPassword", 3, "type"], ["mat-raised-button", "", "color", "accent", "type", "submit", 1, "full-width", 3, "disabled"], [2, "margin", "24px 0"], [1, "quick-links-title"], [1, "quick-links"], ["mat-stroked-button", "", "routerLink", "/my-tickets", 1, "quick-link"], ["mat-stroked-button", "", "routerLink", "/my-waitlist", 1, "quick-link"], ["mat-stroked-button", "", "routerLink", "/loyalty", 1, "quick-link"], ["mat-stroked-button", "", "routerLink", "/ticket-transfers", 1, "quick-link"], [1, "stat-item"], [1, "stat-value"], [1, "stat-label"], [1, "stat-divider"], [1, "stats-skeleton"], [1, "sk-stat", "skeleton"]], template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5)(7, "h1", 6);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 7);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 8);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(13, "div", 9);
        \u0275\u0275template(14, ProfileComponent_Conditional_14_Template, 25, 9, "div", 10)(15, ProfileComponent_Conditional_15_Template, 3, 1);
        \u0275\u0275elementStart(16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "mat-icon");
        \u0275\u0275text(20, "manage_accounts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "h2");
        \u0275\u0275text(22, "Dados Pessoais");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "form", 14);
        \u0275\u0275listener("ngSubmit", function ProfileComponent_Template_form_ngSubmit_23_listener() {
          return ctx.saveProfile();
        });
        \u0275\u0275elementStart(24, "mat-form-field", 15)(25, "mat-label");
        \u0275\u0275text(26, "Nome completo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "mat-icon", 16);
        \u0275\u0275text(28, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "input", 17);
        \u0275\u0275template(30, ProfileComponent_Conditional_30_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "mat-form-field", 15)(32, "mat-label");
        \u0275\u0275text(33, "E-mail");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "mat-icon", 16);
        \u0275\u0275text(35, "email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "input", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "mat-form-field", 15)(38, "mat-label");
        \u0275\u0275text(39, "Telefone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "mat-icon", 16);
        \u0275\u0275text(41, "phone");
        \u0275\u0275elementEnd();
        \u0275\u0275element(42, "input", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "mat-form-field", 15)(44, "mat-label");
        \u0275\u0275text(45, "CPF");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "mat-icon", 16);
        \u0275\u0275text(47, "badge");
        \u0275\u0275elementEnd();
        \u0275\u0275element(48, "input", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "button", 21);
        \u0275\u0275template(50, ProfileComponent_Conditional_50_Template, 1, 0, "mat-progress-spinner", 22)(51, ProfileComponent_Conditional_51_Template, 3, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(52, "div", 23)(53, "div", 13)(54, "mat-icon");
        \u0275\u0275text(55, "lock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "h2");
        \u0275\u0275text(57, "Seguran\xE7a");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "form", 14);
        \u0275\u0275listener("ngSubmit", function ProfileComponent_Template_form_ngSubmit_58_listener() {
          return ctx.changePassword();
        });
        \u0275\u0275elementStart(59, "mat-form-field", 15)(60, "mat-label");
        \u0275\u0275text(61, "Senha atual");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "mat-icon", 16);
        \u0275\u0275text(63, "lock_outline");
        \u0275\u0275elementEnd();
        \u0275\u0275element(64, "input", 24);
        \u0275\u0275elementStart(65, "button", 25);
        \u0275\u0275listener("click", function ProfileComponent_Template_button_click_65_listener() {
          return ctx.showCurrent = !ctx.showCurrent;
        });
        \u0275\u0275elementStart(66, "mat-icon");
        \u0275\u0275text(67);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(68, ProfileComponent_Conditional_68_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "mat-form-field", 15)(70, "mat-label");
        \u0275\u0275text(71, "Nova senha");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "mat-icon", 16);
        \u0275\u0275text(73, "lock");
        \u0275\u0275elementEnd();
        \u0275\u0275element(74, "input", 26);
        \u0275\u0275elementStart(75, "button", 25);
        \u0275\u0275listener("click", function ProfileComponent_Template_button_click_75_listener() {
          return ctx.showNew = !ctx.showNew;
        });
        \u0275\u0275elementStart(76, "mat-icon");
        \u0275\u0275text(77);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(78, ProfileComponent_Conditional_78_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "mat-form-field", 15)(80, "mat-label");
        \u0275\u0275text(81, "Confirmar nova senha");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "mat-icon", 16);
        \u0275\u0275text(83, "lock");
        \u0275\u0275elementEnd();
        \u0275\u0275element(84, "input", 27);
        \u0275\u0275elementStart(85, "button", 25);
        \u0275\u0275listener("click", function ProfileComponent_Template_button_click_85_listener() {
          return ctx.showConfirm = !ctx.showConfirm;
        });
        \u0275\u0275elementStart(86, "mat-icon");
        \u0275\u0275text(87);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(88, ProfileComponent_Conditional_88_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "button", 28);
        \u0275\u0275template(90, ProfileComponent_Conditional_90_Template, 1, 0, "mat-progress-spinner", 22)(91, ProfileComponent_Conditional_91_Template, 3, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(92, "mat-divider", 29);
        \u0275\u0275elementStart(93, "h3", 30);
        \u0275\u0275text(94, "Acesso r\xE1pido");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "div", 31)(96, "a", 32)(97, "mat-icon");
        \u0275\u0275text(98, "confirmation_number");
        \u0275\u0275elementEnd();
        \u0275\u0275text(99, " Meus Ingressos ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "a", 33)(101, "mat-icon");
        \u0275\u0275text(102, "hourglass_top");
        \u0275\u0275elementEnd();
        \u0275\u0275text(103, " Lista de Espera ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "a", 34)(105, "mat-icon");
        \u0275\u0275text(106, "stars");
        \u0275\u0275elementEnd();
        \u0275\u0275text(107, " Pontos de Fidelidade ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "a", 35)(109, "mat-icon");
        \u0275\u0275text(110, "swap_horiz");
        \u0275\u0275elementEnd();
        \u0275\u0275text(111, " Transfer\xEAncias ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_14_0;
        let tmp_17_0;
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.getInitial());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate((tmp_1_0 = ctx.authService.currentUser()) == null ? null : tmp_1_0.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((tmp_2_0 = ctx.authService.currentUser()) == null ? null : tmp_2_0.email);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.getRoleClass());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.getRoleLabel());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(14, ctx.statsLoaded() ? 14 : 15);
        \u0275\u0275advance(9);
        \u0275\u0275property("formGroup", ctx.profileForm);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(30, ((tmp_7_0 = ctx.profileForm.get("name")) == null ? null : tmp_7_0.hasError("required")) ? 30 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275property("value", (tmp_8_0 = ctx.authService.currentUser()) == null ? null : tmp_8_0.email);
        \u0275\u0275advance(13);
        \u0275\u0275property("disabled", ctx.profileForm.invalid || ctx.savingProfile);
        \u0275\u0275advance();
        \u0275\u0275conditional(50, ctx.savingProfile ? 50 : 51);
        \u0275\u0275advance(8);
        \u0275\u0275property("formGroup", ctx.passwordForm);
        \u0275\u0275advance(6);
        \u0275\u0275property("type", ctx.showCurrent ? "text" : "password");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.showCurrent ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275conditional(68, ((tmp_14_0 = ctx.passwordForm.get("currentPassword")) == null ? null : tmp_14_0.hasError("required")) ? 68 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275property("type", ctx.showNew ? "text" : "password");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.showNew ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275conditional(78, ((tmp_17_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_17_0.hasError("minlength")) ? 78 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275property("type", ctx.showConfirm ? "text" : "password");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.showConfirm ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275conditional(88, ctx.passwordForm.hasError("mismatch") ? 88 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.passwordForm.invalid || ctx.changingPassword);
        \u0275\u0275advance();
        \u0275\u0275conditional(90, ctx.changingPassword ? 90 : 91);
      }
    }, dependencies: [
      CommonModule,
      CurrencyPipe,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      RouterLink,
      MatButtonModule,
      MatAnchor,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatError,
      MatPrefix,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSnackBarModule,
      MatDividerModule,
      MatDivider
    ], styles: ['@charset "UTF-8";\n\n\n\n.profile-page[_ngcontent-%COMP%] {\n  padding-top: 64px;\n}\n.page-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary) 100%);\n  padding: 40px 0 32px;\n}\n.hero-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.avatar-circle[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  border: 3px solid rgba(255, 255, 255, 0.5);\n  color: white;\n  font-size: 2rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.hero-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: clamp(1.4rem, 3vw, 2rem);\n  font-weight: 800;\n  color: white;\n  margin: 0;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n  margin: 0;\n  font-size: 0.9rem;\n}\n.role-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  width: fit-content;\n}\n.role-badge.role-customer[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: rgba(255, 255, 255, 0.9);\n}\n.role-badge.role-organizer[_ngcontent-%COMP%] {\n  background: rgba(255, 165, 0, 0.3);\n  color: #ffd580;\n}\n.role-badge.role-admin[_ngcontent-%COMP%] {\n  background: rgba(255, 80, 80, 0.3);\n  color: #ffb3b3;\n}\n.profile-content[_ngcontent-%COMP%] {\n  padding: 32px 16px 48px;\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: var(--surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-sm);\n  padding: 20px;\n  margin-bottom: 32px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.stat-item[_ngcontent-%COMP%] {\n  flex: 1 1 80px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: var(--primary);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n.stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 40px;\n  background: var(--border);\n  flex-shrink: 0;\n}\n@media (max-width: 480px) {\n  .stat-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.stats-skeleton[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 32px;\n}\n.sk-stat[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 72px;\n  border-radius: var(--radius-sm);\n}\n.sections-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n@media (max-width: 800px) {\n  .sections-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.profile-section[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-sm);\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.section-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.quick-links-title[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin: 0 0 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.quick-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.quick-link[_ngcontent-%COMP%] {\n  justify-content: flex-start !important;\n  border-radius: 8px !important;\n  text-align: left;\n}\n/*# sourceMappingURL=profile.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src\\app\\features\\profile\\profile.component.ts", lineNumber: 358 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-FTZEJ3FU.js.map
