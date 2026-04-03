import {
  HttpClient
} from "./chunk-ZLZN2NNP.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-QN3GMCAP.js";

// src/app/core/services/loyalty.service.ts
var LoyaltyService = class _LoyaltyService {
  constructor(http) {
    this.http = http;
    this.BASE_URL = "/Loyalty";
  }
  getBalance() {
    return this.http.get(`${this.BASE_URL}/balance`);
  }
  getHistory() {
    return this.http.get(`${this.BASE_URL}/history`);
  }
  static {
    this.\u0275fac = function LoyaltyService_Factory(t) {
      return new (t || _LoyaltyService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoyaltyService, factory: _LoyaltyService.\u0275fac, providedIn: "root" });
  }
};

export {
  LoyaltyService
};
//# sourceMappingURL=chunk-QGWOC5CO.js.map
