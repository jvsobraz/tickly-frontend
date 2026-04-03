import {
  HttpClient
} from "./chunk-ZLZN2NNP.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-QN3GMCAP.js";

// src/app/core/services/ticket.service.ts
var TicketService = class _TicketService {
  constructor(http) {
    this.http = http;
    this.BASE_URL = "/Tickets";
  }
  getMyTickets() {
    return this.http.get(`${this.BASE_URL}/my-tickets`);
  }
  getTicketById(id) {
    return this.http.get(`${this.BASE_URL}/${id}`);
  }
  validateTicket(request) {
    return this.http.post(`${this.BASE_URL}/validate`, request);
  }
  static {
    this.\u0275fac = function TicketService_Factory(t) {
      return new (t || _TicketService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TicketService, factory: _TicketService.\u0275fac, providedIn: "root" });
  }
};

export {
  TicketService
};
//# sourceMappingURL=chunk-BQSHM6HP.js.map
