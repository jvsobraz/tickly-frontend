import {
  HttpClient
} from "./chunk-ZLZN2NNP.js";
import {
  inject,
  ɵɵdefineInjectable
} from "./chunk-QN3GMCAP.js";

// src/app/core/services/payment-link.service.ts
var PaymentLinkService = class _PaymentLinkService {
  constructor() {
    this.http = inject(HttpClient);
    this.BASE = "/PaymentLinks";
  }
  create(request) {
    return this.http.post(this.BASE, request);
  }
  getMyLinks() {
    return this.http.get(`${this.BASE}/my-links`);
  }
  getByToken(token) {
    return this.http.get(`${this.BASE}/token/${token}`);
  }
  deactivate(id) {
    return this.http.delete(`${this.BASE}/${id}`);
  }
  static {
    this.\u0275fac = function PaymentLinkService_Factory(t) {
      return new (t || _PaymentLinkService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentLinkService, factory: _PaymentLinkService.\u0275fac, providedIn: "root" });
  }
};

export {
  PaymentLinkService
};
//# sourceMappingURL=chunk-UMOOKBVV.js.map
