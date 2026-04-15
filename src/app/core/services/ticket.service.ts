import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TicketResponse, ValidateTicketRequest, ValidateTicketResponse } from '../models';

export interface LiveQrResponse {
  token: string;
  expiresAt: string;
  secondsRemaining: number;
}

@Injectable({ providedIn: 'root' })
export class TicketService {
  private readonly BASE_URL = '/Tickets';

  constructor(private http: HttpClient) {}

  getMyTickets(): Observable<TicketResponse[]> {
    return this.http.get<TicketResponse[]>(`${this.BASE_URL}/my-tickets`);
  }

  getTicketById(id: number): Observable<TicketResponse> {
    return this.http.get<TicketResponse>(`${this.BASE_URL}/${id}`);
  }

  validateTicket(request: ValidateTicketRequest): Observable<ValidateTicketResponse> {
    return this.http.post<ValidateTicketResponse>(`${this.BASE_URL}/validate`, request);
  }

  getLiveQrToken(id: number): Observable<LiveQrResponse> {
    return this.http.get<LiveQrResponse>(`${this.BASE_URL}/${id}/qr-live`);
  }
}
