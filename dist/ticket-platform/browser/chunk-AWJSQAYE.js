import {
  HttpClient
} from "./chunk-ZLZN2NNP.js";
import {
  inject,
  ɵɵdefineInjectable
} from "./chunk-QN3GMCAP.js";

// src/app/core/services/flash-sale.service.ts
var FlashSaleService = class _FlashSaleService {
  constructor() {
    this.http = inject(HttpClient);
    this.BASE = "/FlashSales";
  }
  create(request) {
    return this.http.post(this.BASE, request);
  }
  getMySales() {
    return this.http.get(`${this.BASE}/my-sales`);
  }
  getByEvent(eventId) {
    return this.http.get(`${this.BASE}/event/${eventId}`);
  }
  getByTicketType(ticketTypeId) {
    return this.http.get(`${this.BASE}/ticket-type/${ticketTypeId}`);
  }
  cancel(id) {
    return this.http.delete(`${this.BASE}/${id}`);
  }
  static {
    this.\u0275fac = function FlashSaleService_Factory(t) {
      return new (t || _FlashSaleService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FlashSaleService, factory: _FlashSaleService.\u0275fac, providedIn: "root" });
  }
};

export {
  FlashSaleService
};
//# sourceMappingURL=chunk-AWJSQAYE.js.map
