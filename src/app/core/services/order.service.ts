import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateOrderRequest, OrderResponse } from '../models';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private readonly BASE_URL = '/Orders';

  constructor(private http: HttpClient) {}

  createOrder(request: CreateOrderRequest): Observable<OrderResponse> {
    return this.http.post<OrderResponse>(this.BASE_URL, request);
  }

  getOrderById(id: number): Observable<OrderResponse> {
    return this.http.get<OrderResponse>(`${this.BASE_URL}/${id}`);
  }

  getMyOrders(): Observable<OrderResponse[]> {
    return this.http.get<OrderResponse[]>(`${this.BASE_URL}/my-orders`);
  }

  cancelOrder(id: number): Observable<void> {
    return this.http.post<void>(`${this.BASE_URL}/${id}/cancel`, {});
  }

  confirmOrder(id: number): Observable<void> {
    return this.http.post<void>(`${this.BASE_URL}/${id}/confirm`, {});
  }
}
