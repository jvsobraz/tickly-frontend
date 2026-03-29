import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CreateEventRequest, EventListResponse, EventResponse,
  PagedResult
} from '../models';

export interface EventSearchParams {
  search?: string;
  city?: string;
  category?: string;
  dateFrom?: string;
  dateTo?: string;
  page?: number;
  pageSize?: number;
}

@Injectable({ providedIn: 'root' })
export class EventService {
  private readonly BASE_URL = '/Events';

  constructor(private http: HttpClient) {}

  getEvents(params: EventSearchParams = {}): Observable<PagedResult<EventListResponse>> {
    let httpParams = new HttpParams();
    if (params.search) httpParams = httpParams.set('search', params.search);
    if (params.city) httpParams = httpParams.set('city', params.city);
    if (params.category) httpParams = httpParams.set('category', params.category);
    if (params.dateFrom) httpParams = httpParams.set('dateFrom', params.dateFrom);
    if (params.dateTo) httpParams = httpParams.set('dateTo', params.dateTo);
    if (params.page) httpParams = httpParams.set('page', params.page);
    if (params.pageSize) httpParams = httpParams.set('pageSize', params.pageSize);

    return this.http.get<PagedResult<EventListResponse>>(this.BASE_URL, { params: httpParams });
  }

  getEventById(id: number): Observable<EventResponse> {
    return this.http.get<EventResponse>(`${this.BASE_URL}/${id}`);
  }

  createEvent(request: CreateEventRequest): Observable<EventResponse> {
    return this.http.post<EventResponse>(this.BASE_URL, request);
  }

  updateEvent(id: number, request: Partial<CreateEventRequest>): Observable<EventResponse> {
    return this.http.put<EventResponse>(`${this.BASE_URL}/${id}`, request);
  }

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }

  getMyEvents(): Observable<EventListResponse[]> {
    return this.http.get<EventListResponse[]>(`${this.BASE_URL}/my-events`);
  }

  readonly categories = [
    'Show / Concerto', 'Festival', 'Teatro', 'Stand-up Comedy',
    'Esportes', 'Conferência', 'Workshop', 'Festa', 'Exposição', 'Outro'
  ];

  readonly brazilianStates = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO',
    'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI',
    'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];
}
