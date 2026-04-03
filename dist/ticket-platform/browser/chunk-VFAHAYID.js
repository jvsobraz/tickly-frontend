import {
  TicketService
} from "./chunk-BQSHM6HP.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-5S3TMEQK.js";
import "./chunk-KNB5N7WY.js";
import "./chunk-TGBJVICH.js";
import {
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
  DatePipe,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QN3GMCAP.js";

// src/app/features/my-tickets/my-tickets.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => [1, 2, 3];
function MyTicketsComponent_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9)(2, "div", 10);
    \u0275\u0275elementEnd();
  }
}
function MyTicketsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, MyTicketsComponent_Conditional_14_For_2_Template, 3, 0, "div", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function MyTicketsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "mat-icon", 12);
    \u0275\u0275text(2, "confirmation_number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Carteira vazia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Voc\xEA ainda n\xE3o comprou ingressos. Explore os eventos dispon\xEDveis!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 13)(8, "mat-icon");
    \u0275\u0275text(9, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Ver Eventos ");
    \u0275\u0275elementEnd()();
  }
}
function MyTicketsComponent_Conditional_16_For_7_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "USADO");
    \u0275\u0275elementEnd()();
  }
}
function MyTicketsComponent_Conditional_16_For_7_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 41);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ticket_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, ticket_r4.usedAt, "dd/MM/yy HH:mm"));
  }
}
function MyTicketsComponent_Conditional_16_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275element(2, "div", 20)(3, "div", 21)(4, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 23);
    \u0275\u0275element(6, "div", 24);
    \u0275\u0275elementStart(7, "div", 25)(8, "span", 26);
    \u0275\u0275text(9, "INGRESSO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3", 27);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 28);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 29)(15, "div", 30)(16, "mat-icon");
    \u0275\u0275text(17, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 30)(22, "mat-icon");
    \u0275\u0275text(23, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 30)(28, "mat-icon");
    \u0275\u0275text(29, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 31)(33, "button", 32);
    \u0275\u0275listener("click", function MyTicketsComponent_Conditional_16_For_7_Template_button_click_33_listener() {
      const ticket_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadQRCode(ticket_r4));
    });
    \u0275\u0275elementStart(34, "mat-icon");
    \u0275\u0275text(35, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Salvar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "a", 33)(38, "mat-icon");
    \u0275\u0275text(39, "swap_horiz");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Transferir ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 34);
    \u0275\u0275listener("click", function MyTicketsComponent_Conditional_16_For_7_Template_button_click_41_listener() {
      const ticket_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.shareTicket(ticket_r4));
    });
    \u0275\u0275elementStart(42, "mat-icon");
    \u0275\u0275text(43, "share");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(44, "div", 35)(45, "div", 36);
    \u0275\u0275element(46, "img", 37);
    \u0275\u0275template(47, MyTicketsComponent_Conditional_16_For_7_Conditional_47_Template, 5, 0, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p", 39);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 40);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275template(53, MyTicketsComponent_Conditional_16_For_7_Conditional_53_Template, 3, 4, "p", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ticket_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("used", ticket_r4.isUsed);
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("background", ctx_r1.getCategoryColor(ticket_r4.eventTitle));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ticket_r4.eventTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ticket_r4.ticketTypeName);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(20, 18, ticket_r4.eventDateTime, "EEE, dd MMM yyyy", "", "pt-BR"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 23, ticket_r4.eventDateTime, "HH:mm"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ticket_r4.eventVenue, ", ", ticket_r4.eventCity, "");
    \u0275\u0275advance(15);
    \u0275\u0275classProp("qr-used", ticket_r4.isUsed);
    \u0275\u0275property("src", "data:image/png;base64," + ticket_r4.qrCodeBase64, \u0275\u0275sanitizeUrl)("alt", ticket_r4.serialNumber);
    \u0275\u0275advance();
    \u0275\u0275conditional(47, ticket_r4.isUsed ? 47 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ticket_r4.serialNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 26, ticket_r4.unitPrice, "BRL"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(53, ticket_r4.isUsed && ticket_r4.usedAt ? 53 : -1);
  }
}
function MyTicketsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 15);
    \u0275\u0275listener("click", function MyTicketsComponent_Conditional_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "valid");
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 15);
    \u0275\u0275listener("click", function MyTicketsComponent_Conditional_16_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "used");
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 16);
    \u0275\u0275repeaterCreate(6, MyTicketsComponent_Conditional_16_For_7_Template, 54, 29, "div", 17, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeTab === "valid");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" V\xE1lidos (", ctx_r1.validTickets.length, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeTab === "used");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Utilizados (", ctx_r1.usedTickets.length, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.displayedTickets);
  }
}
var MyTicketsComponent = class _MyTicketsComponent {
  constructor() {
    this.ticketService = inject(TicketService);
    this.snackBar = inject(MatSnackBar);
    this.tickets = [];
    this.loading = true;
    this.activeTab = "valid";
  }
  get validTickets() {
    return this.tickets.filter((t) => !t.isUsed);
  }
  get usedTickets() {
    return this.tickets.filter((t) => t.isUsed);
  }
  get displayedTickets() {
    return this.activeTab === "valid" ? this.validTickets : this.usedTickets;
  }
  ngOnInit() {
    this.ticketService.getMyTickets().subscribe({
      next: (tickets) => {
        this.tickets = tickets;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  downloadQRCode(ticket) {
    const link = document.createElement("a");
    link.href = `data:image/png;base64,${ticket.qrCodeBase64}`;
    link.download = `ingresso-${ticket.serialNumber}.png`;
    link.click();
  }
  shareTicket(ticket) {
    const text = `Meu ingresso para ${ticket.eventTitle} \u2014 ${ticket.serialNumber}`;
    if (navigator.share) {
      navigator.share({ title: ticket.eventTitle, text });
    } else {
      navigator.clipboard.writeText(text).then(() => this.snackBar.open("Informa\xE7\xF5es copiadas!", "OK", { duration: 2e3 }));
    }
  }
  getCategoryColor(title) {
    const colors = ["#6200ea", "#e91e63", "#ff6d00", "#00bcd4", "#43a047", "#f44336"];
    let hash = 0;
    for (let i = 0; i < title.length; i++)
      hash = title.charCodeAt(i) + ((hash << 5) - hash);
    return colors[Math.abs(hash) % colors.length];
  }
  static {
    this.\u0275fac = function MyTicketsComponent_Factory(t) {
      return new (t || _MyTicketsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyTicketsComponent, selectors: [["app-my-tickets"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 3, consts: [[1, "tickets-page"], [1, "page-hero"], [1, "container"], [1, "hero-content"], [1, "page-title"], [1, "page-subtitle"], ["mat-stroked-button", "", "routerLink", "/events", 1, "browse-btn"], [1, "skeleton-list"], [1, "skeleton-ticket"], [1, "sk-left"], [1, "sk-right"], [1, "empty-state", "fade-in"], [1, "empty-icon"], ["mat-raised-button", "", "color", "primary", "routerLink", "/events"], [1, "tab-row"], [1, "tab-btn", 3, "click"], [1, "tickets-list", "fade-in"], [1, "wallet-card", 3, "used"], [1, "wallet-card"], [1, "tear-line"], [1, "tear-circle", "left"], [1, "tear-dots"], [1, "tear-circle", "right"], [1, "card-left"], [1, "event-color-bar"], [1, "card-left-content"], [1, "event-category-label"], [1, "event-title-card"], [1, "ticket-type-name"], [1, "info-rows"], [1, "info-row"], [1, "card-actions"], ["mat-stroked-button", "", 1, "action-btn", 3, "click"], ["mat-stroked-button", "", "routerLink", "/ticket-transfers", 1, "action-btn"], ["mat-icon-button", "", "title", "Compartilhar", 1, "share-btn", 3, "click"], [1, "card-right"], [1, "qr-wrap"], [1, "qr-img", 3, "src", "alt"], [1, "used-stamp"], [1, "serial-number"], [1, "price-tag"], [1, "used-date"]], template: function MyTicketsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "h1", 4);
        \u0275\u0275text(6, "Meus Ingressos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "a", 6)(10, "mat-icon");
        \u0275\u0275text(11, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Comprar mais ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(13, "div", 2);
        \u0275\u0275template(14, MyTicketsComponent_Conditional_14_Template, 3, 1, "div", 7)(15, MyTicketsComponent_Conditional_15_Template, 11, 0)(16, MyTicketsComponent_Conditional_16_Template, 8, 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate2("", ctx.tickets.length, " ingresso", ctx.tickets.length !== 1 ? "s" : "", " na sua carteira");
        \u0275\u0275advance(6);
        \u0275\u0275conditional(14, ctx.loading ? 14 : ctx.tickets.length === 0 ? 15 : 16);
      }
    }, dependencies: [
      CommonModule,
      CurrencyPipe,
      DatePipe,
      RouterLink,
      MatButtonModule,
      MatAnchor,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatSnackBarModule
    ], styles: ['@charset "UTF-8";\n\n\n\n.tickets-page[_ngcontent-%COMP%] {\n  padding-top: 64px;\n}\n.page-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary) 100%);\n  padding: 40px 0 32px;\n}\n.hero-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: clamp(1.6rem, 4vw, 2.2rem);\n  font-weight: 800;\n  color: white;\n  margin: 0 0 4px;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n  margin: 0;\n}\n.browse-btn[_ngcontent-%COMP%] {\n  color: white !important;\n  border-color: rgba(255, 255, 255, 0.5) !important;\n  border-radius: 8px !important;\n}\n.tab-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin: 28px 0 20px;\n  background: var(--surface-2);\n  border-radius: var(--radius-sm);\n  padding: 4px;\n  width: fit-content;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 8px 20px;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all var(--transition);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: var(--surface);\n  color: var(--primary);\n  font-weight: 700;\n  box-shadow: var(--shadow-sm);\n}\n.tickets-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding-bottom: 48px;\n}\n.wallet-card[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--border);\n  background: var(--surface);\n  position: relative;\n  transition: box-shadow var(--transition), transform var(--transition);\n  min-height: 200px;\n}\n.wallet-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-lg);\n  transform: translateY(-2px);\n}\n.wallet-card.used[_ngcontent-%COMP%] {\n  opacity: 0.75;\n}\n@media (max-width: 580px) {\n  .wallet-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.tear-line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 200px;\n  width: 1px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 2;\n  pointer-events: none;\n}\n@media (max-width: 580px) {\n  .tear-line[_ngcontent-%COMP%] {\n    top: auto;\n    bottom: 220px;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 1px;\n    flex-direction: row;\n  }\n}\n.tear-circle[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: var(--background);\n  border: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.tear-circle.left[_ngcontent-%COMP%] {\n  margin-left: -10px;\n}\n@media (max-width: 580px) {\n  .tear-circle.left[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: -10px;\n  }\n}\n.tear-circle.right[_ngcontent-%COMP%] {\n  margin-left: -10px;\n}\n@media (max-width: 580px) {\n  .tear-circle.right[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: -10px;\n  }\n}\n.tear-dots[_ngcontent-%COMP%] {\n  flex: 1;\n  border-left: 2px dashed var(--border);\n}\n@media (max-width: 580px) {\n  .tear-dots[_ngcontent-%COMP%] {\n    border-left: none;\n    border-top: 2px dashed var(--border);\n    width: 100%;\n    height: 0;\n    flex: 1;\n  }\n}\n.card-left[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  overflow: hidden;\n}\n.event-color-bar[_ngcontent-%COMP%] {\n  width: 6px;\n  flex-shrink: 0;\n}\n.card-left-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex: 1;\n}\n.event-category-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  letter-spacing: 1.2px;\n  color: var(--text-hint);\n  text-transform: uppercase;\n}\n.event-title-card[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0;\n  line-height: 1.25;\n}\n.ticket-type-name[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--primary);\n  font-weight: 600;\n  margin: 0;\n}\n.info-rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-top: 4px;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.82rem;\n  color: var(--text-secondary);\n}\n.info-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: var(--text-hint);\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 12px;\n  flex-wrap: wrap;\n}\n.action-btn[_ngcontent-%COMP%] {\n  height: 32px !important;\n  font-size: 0.78rem !important;\n  padding: 0 10px !important;\n  border-radius: 6px !important;\n  line-height: 30px !important;\n}\n.share-btn[_ngcontent-%COMP%] {\n  width: 32px !important;\n  height: 32px !important;\n}\n.card-right[_ngcontent-%COMP%] {\n  width: 200px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 20px 16px;\n  background: var(--surface-2);\n}\n@media (max-width: 580px) {\n  .card-right[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 20px;\n  }\n}\n.qr-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.qr-img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 8px;\n  border: 2px solid var(--border);\n  object-fit: contain;\n}\n.qr-used[_ngcontent-%COMP%] {\n  filter: grayscale(80%);\n}\n.used-stamp[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  gap: 2px;\n}\n.used-stamp[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  color: #69f0ae;\n}\n.used-stamp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.serial-number[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 0.7rem;\n  color: var(--text-hint);\n  margin: 0;\n  text-align: center;\n  word-break: break-all;\n}\n.price-tag[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  padding: 3px 12px;\n  border-radius: 20px;\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n.used-date[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-hint);\n  margin: 0;\n  text-align: center;\n}\n.skeleton-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-top: 28px;\n}\n.skeleton-ticket[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  height: 200px;\n  border: 1px solid var(--border);\n}\n.sk-left[_ngcontent-%COMP%] {\n  flex: 1;\n  background:\n    linear-gradient(\n      90deg,\n      #e0e0e0 25%,\n      #f0f0f0 50%,\n      #e0e0e0 75%);\n  background-size: 400% 100%;\n  animation: skeleton-shimmer 1.4s ease infinite;\n}\n.sk-right[_ngcontent-%COMP%] {\n  width: 200px;\n  background:\n    linear-gradient(\n      90deg,\n      #ebebeb 25%,\n      #f5f5f5 50%,\n      #ebebeb 75%);\n  background-size: 400% 100%;\n  animation: skeleton-shimmer 1.4s 0.2s ease infinite;\n}\n/*# sourceMappingURL=my-tickets.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyTicketsComponent, { className: "MyTicketsComponent", filePath: "src\\app\\features\\my-tickets\\my-tickets.component.ts", lineNumber: 444 });
})();
export {
  MyTicketsComponent
};
//# sourceMappingURL=chunk-VFAHAYID.js.map
