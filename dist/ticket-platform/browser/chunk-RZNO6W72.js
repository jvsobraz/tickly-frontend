import {
  HttpClient
} from "./chunk-ZLZN2NNP.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-QN3GMCAP.js";

// src/app/core/services/waitlist.service.ts
var WaitlistService = class _WaitlistService {
  constructor(http) {
    this.http = http;
    this.BASE_URL = "/Waitlist";
  }
  joinWaitlist(request) {
    return this.http.post(`${this.BASE_URL}/join`, request);
  }
  getMyWaitlist() {
    return this.http.get(`${this.BASE_URL}/my`);
  }
  leaveWaitlist(id) {
    return this.http.delete(`${this.BASE_URL}/${id}`);
  }
  checkToken(token) {
    return this.http.get(`${this.BASE_URL}/check-token/${token}`);
  }
  static {
    this.\u0275fac = function WaitlistService_Factory(t) {
      return new (t || _WaitlistService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WaitlistService, factory: _WaitlistService.\u0275fac, providedIn: "root" });
  }
};

export {
  WaitlistService
};
//# sourceMappingURL=chunk-RZNO6W72.js.map
