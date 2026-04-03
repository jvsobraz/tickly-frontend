import {
  MatChipsModule
} from "./chunk-3MSVPL7J.js";
import {
  EventService
} from "./chunk-HJ3MXOFI.js";
import {
  MatInputModule
} from "./chunk-U4Q77IAY.js";
import {
  MatFormFieldModule
} from "./chunk-TVTX5DCA.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-SCN3YP5A.js";
import {
  MatCardModule
} from "./chunk-VCT74C64.js";
import {
  MatProgressSpinnerModule
} from "./chunk-VZ63OAA3.js";
import {
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
  DatePipe,
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
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QN3GMCAP.js";

// src/app/features/home/home.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.label;
var _forTrack2 = ($index, $item) => $item.num;
var _forTrack3 = ($index, $item) => $item.title;
var _forTrack4 = ($index, $item) => $item.id;
var _c0 = () => [1, 2, 3, 4, 5, 6];
var _c1 = (a0) => ["/events", a0];
function HomeComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function HomeComponent_For_23_Template_button_click_0_listener() {
      const cat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goCategory(cat_r2.value));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r2.label, " ");
  }
}
function HomeComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "strong", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r4.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r4.label);
  }
}
function HomeComponent_Conditional_39_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "div", 42);
    \u0275\u0275elementStart(2, "div", 43);
    \u0275\u0275element(3, "div", 44)(4, "div", 45)(5, "div", 46);
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_39_For_2_Template, 6, 0, "div", 41, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function HomeComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "mat-icon", 48);
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Nenhum evento dispon\xEDvel no momento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Volte em breve para conferir novidades!");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_Conditional_41_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r5.category);
  }
}
function HomeComponent_Conditional_41_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1, "GRATUITO");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_Conditional_41_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("A partir de ", \u0275\u0275pipeBind4(2, 1, event_r5.minPrice, "BRL", "symbol", "1.0-0"), "");
  }
}
function HomeComponent_Conditional_41_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51);
    \u0275\u0275template(2, HomeComponent_Conditional_41_For_2_Conditional_2_Template, 2, 1, "span", 52);
    \u0275\u0275element(3, "div", 53);
    \u0275\u0275elementStart(4, "div", 54);
    \u0275\u0275template(5, HomeComponent_Conditional_41_For_2_Conditional_5_Template, 2, 0, "span", 55)(6, HomeComponent_Conditional_41_For_2_Conditional_6_Template, 3, 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 56)(8, "h3", 57);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 58)(11, "span")(12, "mat-icon");
    \u0275\u0275text(13, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span")(17, "mat-icon");
    \u0275\u0275text(18, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 59)(21, "mat-icon");
    \u0275\u0275text(22, "confirmation_number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Comprar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c1, event_r5.id));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + (event_r5.imageUrl || ctx_r2.getDefaultImg(event_r5.category)) + ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(2, event_r5.category ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(5, event_r5.minPrice === 0 ? 5 : 6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r5.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(15, 9, event_r5.dateTime, "dd MMM yyyy", "", "pt"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", event_r5.city, "/", event_r5.state, "");
  }
}
function HomeComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_41_For_2_Template, 24, 16, "div", 50, _forTrack4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.events);
  }
}
function HomeComponent_For_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275listener("click", function HomeComponent_For_50_Template_div_click_0_listener() {
      const cat_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goCategory(cat_r7.value));
    });
    \u0275\u0275elementStart(1, "div", 62)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cat_r7.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r7.label);
  }
}
function HomeComponent_For_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 64)(4, "mat-icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r8.num);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(step_r8.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r8.desc);
  }
}
function HomeComponent_For_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 65)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r9.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.desc);
  }
}
var CATEGORIES = [
  { label: "Shows", icon: "music_note", value: "Show / Concerto" },
  { label: "Festival", icon: "festival", value: "Festival" },
  { label: "Teatro", icon: "theater_comedy", value: "Teatro" },
  { label: "Stand-up", icon: "mic", value: "Stand-up Comedy" },
  { label: "Esportes", icon: "sports_soccer", value: "Esportes" },
  { label: "Cultura", icon: "palette", value: "Cultura" }
];
var HomeComponent = class _HomeComponent {
  constructor() {
    this.eventService = inject(EventService);
    this.router = inject(Router);
    this.events = [];
    this.loading = true;
    this.searchQuery = "";
    this.categories = CATEGORIES;
    this.stats = [
      { value: "500+", label: "Eventos Realizados" },
      { value: "50K+", label: "Ingressos Vendidos" },
      { value: "120+", label: "Cidades" },
      { value: "4.9 \u2605", label: "Avalia\xE7\xE3o M\xE9dia" }
    ];
    this.steps = [
      { num: "1", icon: "search", title: "Encontre", desc: "Busque por cidade, data ou categoria e descubra eventos incr\xEDveis" },
      { num: "2", icon: "credit_card", title: "Compre", desc: "Pague com cart\xE3o em at\xE9 12x ou via PIX. 100% seguro." },
      { num: "3", icon: "qr_code_scanner", title: "Aproveite", desc: "Receba seu QR Code instantaneamente e entre no evento sem filas" }
    ];
    this.whyUs = [
      { icon: "security", title: "Pagamento Seguro", desc: "Transa\xE7\xF5es protegidas com criptografia SSL e Stripe" },
      { icon: "bolt", title: "Entrega Instant\xE2nea", desc: "QR Code gerado imediatamente ap\xF3s a confirma\xE7\xE3o do pagamento" },
      { icon: "pix", title: "PIX e Cart\xE3o", desc: "Aceite PIX com QR Code din\xE2mico ou cart\xE3o em at\xE9 12x" },
      { icon: "support_agent", title: "Suporte Dedicado", desc: "Equipe pronta para ajudar antes, durante e ap\xF3s o evento" }
    ];
  }
  ngOnInit() {
    this.eventService.getEvents({ page: 1, pageSize: 6 }).subscribe({
      next: (result) => {
        this.events = result.items;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  goSearch() {
    if (this.searchQuery.trim()) {
      this.router.navigate(["/events"], { queryParams: { search: this.searchQuery } });
    } else {
      this.router.navigate(["/events"]);
    }
  }
  goCategory(category) {
    this.router.navigate(["/events"], { queryParams: { category } });
  }
  getDefaultImg(category) {
    const map = {
      "Show / Concerto": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
      "Festival": "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80",
      "Teatro": "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600&q=80",
      "Stand-up Comedy": "https://images.unsplash.com/photo-1527224538127-2104bb71c51b?w=600&q=80",
      "Esportes": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80"
    };
    return map[category ?? ""] ?? "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80";
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(t) {
      return new (t || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 75, vars: 2, consts: [[1, "hero"], [1, "hero-bg"], [1, "hero-content", "container"], [1, "hero-text", "fade-in"], [1, "hero-eyebrow"], [1, "gradient-text"], [1, "search-card", "fade-in-delay-1"], [1, "search-row"], [1, "search-field"], ["placeholder", "Buscar eventos, artistas, locais...", 1, "search-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["mat-raised-button", "", "color", "accent", 1, "search-btn", 3, "click"], [1, "quick-cats"], [1, "cat-pill"], [1, "stats-bar"], [1, "container", "stats-inner"], [1, "stat-item"], [1, "container", "events-section"], [1, "section-header"], [1, "section-title"], [1, "section-subtitle"], ["mat-stroked-button", "", "color", "primary", "routerLink", "/events"], [1, "skeleton-grid"], [1, "cat-section"], [1, "container"], [1, "section-title", "text-center"], [1, "section-subtitle", "text-center"], [1, "cat-grid"], [1, "cat-card"], [1, "how-section"], [1, "steps-grid"], [1, "step-card"], [1, "why-section", "container"], [1, "why-grid"], [1, "why-card"], [1, "cta-section"], [1, "container", "cta-inner"], [1, "cta-text"], ["mat-raised-button", "", "routerLink", "/register", 1, "cta-btn"], [1, "cat-pill", 3, "click"], [1, "stat-num"], [1, "stat-lbl"], [1, "skeleton-card"], [1, "skeleton-img"], [1, "skeleton-body"], [1, "skeleton-title"], [1, "skeleton-text"], [1, "skeleton-text-sm"], [1, "empty-state"], [1, "empty-icon"], [1, "events-grid"], [1, "event-card-wrap", "fade-in", 3, "routerLink"], [1, "ec-image"], [1, "ec-badge"], [1, "ec-overlay"], [1, "ec-price-tag"], [1, "tag-free"], [1, "ec-body"], [1, "ec-title"], [1, "ec-meta"], ["mat-raised-button", "", "color", "primary", 1, "ec-btn"], [1, "tag-price"], [1, "cat-card", 3, "click"], [1, "cat-icon-wrap"], [1, "step-num"], [1, "step-icon"], [1, "why-icon"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "span", 4);
        \u0275\u0275text(5, "\u{1F3AB} A maior plataforma de ingressos do Brasil");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1");
        \u0275\u0275text(7, "Encontre os Melhores ");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "Eventos");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Perto de Voc\xEA");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p");
        \u0275\u0275text(12, "Shows, festivais, teatro, stand-up e muito mais. Compre com seguran\xE7a e receba na hora.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 6)(14, "div", 7)(15, "div", 8)(16, "mat-icon");
        \u0275\u0275text(17, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function HomeComponent_Template_input_keyup_enter_18_listener() {
          return ctx.goSearch();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "button", 10);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_19_listener() {
          return ctx.goSearch();
        });
        \u0275\u0275text(20, " Buscar ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 11);
        \u0275\u0275repeaterCreate(22, HomeComponent_For_23_Template, 4, 2, "button", 12, _forTrack0);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(24, "section", 13)(25, "div", 14);
        \u0275\u0275repeaterCreate(26, HomeComponent_For_27_Template, 5, 2, "div", 15, _forTrack1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "section", 16)(29, "div", 17)(30, "div")(31, "h2", 18);
        \u0275\u0275text(32, "Pr\xF3ximos Eventos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "p", 19);
        \u0275\u0275text(34, "Garanta seu ingresso antes que esgote");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "a", 20);
        \u0275\u0275text(36, " Ver todos ");
        \u0275\u0275elementStart(37, "mat-icon");
        \u0275\u0275text(38, "arrow_forward");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(39, HomeComponent_Conditional_39_Template, 3, 1, "div", 21)(40, HomeComponent_Conditional_40_Template, 7, 0)(41, HomeComponent_Conditional_41_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "section", 22)(43, "div", 23)(44, "h2", 24);
        \u0275\u0275text(45, "Explore por Categoria");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "p", 25);
        \u0275\u0275text(47, "Encontre o evento perfeito para voc\xEA");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 26);
        \u0275\u0275repeaterCreate(49, HomeComponent_For_50_Template, 6, 2, "div", 27, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "section", 28)(52, "div", 23)(53, "h2", 24);
        \u0275\u0275text(54, "Como Funciona");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "p", 25);
        \u0275\u0275text(56, "Em 3 passos simples voc\xEA garante seu ingresso");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 29);
        \u0275\u0275repeaterCreate(58, HomeComponent_For_59_Template, 10, 4, "div", 30, _forTrack2);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(60, "section", 31)(61, "div", 32);
        \u0275\u0275repeaterCreate(62, HomeComponent_For_63_Template, 8, 3, "div", 33, _forTrack3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "section", 34)(65, "div", 35)(66, "div", 36)(67, "h2");
        \u0275\u0275text(68, "Organize seu Evento Conosco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "p");
        \u0275\u0275text(70, "Crie e venda ingressos em minutos. Sem mensalidade \u2014 pagamos quando voc\xEA vende.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "a", 37);
        \u0275\u0275text(72, " Come\xE7ar Agora ");
        \u0275\u0275elementStart(73, "mat-icon");
        \u0275\u0275text(74, "arrow_forward");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(18);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.categories);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.stats);
        \u0275\u0275advance(13);
        \u0275\u0275conditional(39, ctx.loading ? 39 : ctx.events.length === 0 ? 40 : 41);
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.categories);
        \u0275\u0275advance(9);
        \u0275\u0275repeater(ctx.steps);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.whyUs);
      }
    }, dependencies: [
      CommonModule,
      CurrencyPipe,
      DatePipe,
      RouterLink,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatButtonModule,
      MatAnchor,
      MatButton,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatFormFieldModule,
      MatChipsModule,
      MatProgressSpinnerModule,
      MatCardModule
    ], styles: [`@charset "UTF-8";



.hero[_ngcontent-%COMP%] {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 64px;
}
.hero-bg[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      135deg,
      #200080 0%,
      #6200ea 45%,
      #9c27b0 100%);
  z-index: 0;
}
.hero-bg[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.hero-content[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
  color: white;
  padding: 48px 20px;
  max-width: 760px;
}
.hero-eyebrow[_ngcontent-%COMP%] {
  display: inline-block;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 4px 14px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 20px;
}
h1[_ngcontent-%COMP%] {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  line-height: 1.15;
  margin: 0 0 16px;
  letter-spacing: -1px;
}
.hero-content[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  opacity: 0.85;
  margin-bottom: 32px;
  max-width: 560px;
}
.gradient-text[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #e040fb 0%,
      #ff6d00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.search-card[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.12);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 20px;
  max-width: 680px;
}
.search-row[_ngcontent-%COMP%] {
  display: flex;
  gap: 10px;
  margin-bottom: 14px;
}
@media (max-width: 480px) {
  .search-row[_ngcontent-%COMP%] {
    flex-direction: column;
  }
}
.search-field[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  border-radius: 10px;
  padding: 0 14px;
}
.search-field[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  color: #9e9e9e;
  flex-shrink: 0;
}
.search-input[_ngcontent-%COMP%] {
  flex: 1;
  border: none;
  outline: none;
  font-size: 0.95rem;
  height: 46px;
  background: transparent;
  font-family: "Inter", sans-serif;
  color: var(--text-primary);
}
.search-btn[_ngcontent-%COMP%] {
  height: 46px;
  padding: 0 24px;
  border-radius: 10px !important;
  font-weight: 600;
  white-space: nowrap;
}
.quick-cats[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.cat-pill[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  font-family: "Inter", sans-serif;
}
.cat-pill[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 14px;
  width: 14px;
  height: 14px;
}
.cat-pill[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.25);
}
.stats-bar[_ngcontent-%COMP%] {
  background: white;
  border-bottom: 1px solid var(--border);
  padding: 20px 0;
  box-shadow: var(--shadow-sm);
}
.stats-inner[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  gap: 48px;
  flex-wrap: wrap;
}
@media (max-width: 480px) {
  .stats-inner[_ngcontent-%COMP%] {
    gap: 24px;
  }
}
.stat-item[_ngcontent-%COMP%] {
  text-align: center;
}
.stat-num[_ngcontent-%COMP%] {
  display: block;
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--primary);
}
.stat-lbl[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-weight: 500;
}
.events-section[_ngcontent-%COMP%] {
  padding: 56px 20px;
}
.section-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
  gap: 16px;
  flex-wrap: wrap;
}
.skeleton-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}
@media (max-width: 600px) {
  .skeleton-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.event-card-wrap[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid var(--border);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
}
.event-card-wrap[_ngcontent-%COMP%]:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(98, 0, 234, 0.15) !important;
}
.event-card-wrap[_ngcontent-%COMP%]:hover   .ec-btn[_ngcontent-%COMP%] {
  opacity: 1;
  transform: translateY(0);
}
.ec-image[_ngcontent-%COMP%] {
  position: relative;
  height: 210px;
  background-size: cover;
  background-position: center;
}
.ec-overlay[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      to top,
      rgba(0, 0, 0, 0.6) 0%,
      transparent 60%);
}
.ec-badge[_ngcontent-%COMP%] {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(255, 255, 255, 0.95);
  color: var(--primary);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 3px 10px;
  border-radius: 20px;
}
.ec-price-tag[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 12px;
  right: 12px;
}
.tag-price[_ngcontent-%COMP%], .tag-free[_ngcontent-%COMP%] {
  background: var(--primary);
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
}
.tag-free[_ngcontent-%COMP%] {
  background: var(--success);
}
.ec-body[_ngcontent-%COMP%] {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}
.ec-title[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.ec-meta[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: var(--text-secondary);
  font-size: 0.82rem;
  flex: 1;
}
.ec-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 4px;
}
.ec-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 14px;
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}
.ec-btn[_ngcontent-%COMP%] {
  width: 100%;
  height: 40px;
  border-radius: 8px !important;
  font-weight: 600;
  margin-top: 8px;
  opacity: 0.9;
  transform: translateY(2px);
  transition: opacity 0.2s, transform 0.2s;
}
.cat-section[_ngcontent-%COMP%] {
  background: var(--surface-2);
  padding: 56px 0;
}
.cat-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  margin-top: 32px;
}
@media (max-width: 900px) {
  .cat-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 480px) {
  .cat-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
}
.cat-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: var(--radius-md);
  padding: 24px 12px;
  text-align: center;
  cursor: pointer;
  border: 1px solid var(--border);
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--text-primary);
}
.cat-card[_ngcontent-%COMP%]:hover {
  border-color: var(--primary);
  color: var(--primary);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}
.cat-card[_ngcontent-%COMP%]:hover   .cat-icon-wrap[_ngcontent-%COMP%] {
  background: var(--primary);
}
.cat-card[_ngcontent-%COMP%]:hover   .cat-icon-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  color: white;
}
.cat-icon-wrap[_ngcontent-%COMP%] {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #ede7f6;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}
.cat-icon-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  color: var(--primary);
  font-size: 24px;
  width: 24px;
  height: 24px;
  transition: color 0.2s;
}
.how-section[_ngcontent-%COMP%] {
  padding: 64px 0;
  background: white;
}
.steps-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 40px;
}
@media (max-width: 768px) {
  .steps-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
.step-card[_ngcontent-%COMP%] {
  text-align: center;
  padding: 32px 24px;
  border-radius: var(--radius-lg);
  background: var(--background);
  border: 1px solid var(--border);
  position: relative;
}
.step-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 12px 0 8px;
}
.step-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.5;
}
.step-num[_ngcontent-%COMP%] {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--primary);
  color: white;
  font-size: 0.8rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}
.step-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 42px;
  width: 42px;
  height: 42px;
  color: var(--primary);
}
.why-section[_ngcontent-%COMP%] {
  padding: 56px 20px;
}
.why-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
@media (max-width: 900px) {
  .why-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .why-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.why-card[_ngcontent-%COMP%] {
  padding: 24px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  background: white;
  transition: box-shadow 0.2s;
}
.why-card[_ngcontent-%COMP%]:hover {
  box-shadow: var(--shadow-md);
}
.why-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 0.95rem;
  font-weight: 700;
  margin: 12px 0 6px;
}
.why-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.5;
}
.why-icon[_ngcontent-%COMP%] {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #ede7f6;
  display: flex;
  align-items: center;
  justify-content: center;
}
.why-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  color: var(--primary);
  font-size: 22px;
  width: 22px;
  height: 22px;
}
.cta-section[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      var(--primary-dark) 0%,
      var(--primary) 60%,
      #e040fb 100%);
  padding: 56px 0;
  margin-top: 48px;
}
.cta-inner[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}
.cta-text[_ngcontent-%COMP%] {
  color: white;
}
.cta-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 1.6rem;
  font-weight: 800;
  margin: 0 0 8px;
}
.cta-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  opacity: 0.85;
  margin: 0;
  font-size: 1rem;
}
.cta-btn[_ngcontent-%COMP%] {
  background: white !important;
  color: var(--primary) !important;
  font-weight: 700 !important;
  padding: 0 28px !important;
  height: 48px !important;
  border-radius: 12px !important;
  font-size: 1rem !important;
  white-space: nowrap;
}
/*# sourceMappingURL=home.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\features\\home\\home.component.ts", lineNumber: 676 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-LCZ2WN2C.js.map
