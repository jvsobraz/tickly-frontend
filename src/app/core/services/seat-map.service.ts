import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SeatSection {
  id: number;
  name: string;
  color: string;
  ticketTypeId: number;
  ticketTypeName: string;
  price: number;
  availableCount: number;
}

export interface SeatDto {
  id: number;
  row: string;
  number: number;
  seatCode: string;
  status: number; // 0=Available, 1=Reserved, 2=Sold, 3=Unavailable
  isAvailable: boolean;
  sectionId: number;
  sectionName: string;
  sectionColor: string;
  ticketTypeId: number;
  price: number;
}

export interface SeatRow {
  row: string;
  seats: SeatDto[];
}

export interface SeatMap {
  id: number;
  eventId: number;
  name: string;
  sections: SeatSection[];
  rows: SeatRow[];
  totalSeats: number;
  availableSeats: number;
  soldSeats: number;
}

export interface SeatReservation {
  reservedSeats: SeatDto[];
  expiresAt: string;
  secondsUntilExpiry: number;
}

@Injectable({ providedIn: 'root' })
export class SeatMapService {
  constructor(private http: HttpClient) {}

  getByEvent(eventId: number): Observable<SeatMap> {
    return this.http.get<SeatMap>(`/seat-maps/events/${eventId}`);
  }

  reserve(eventId: number, seatIds: number[]): Observable<SeatReservation> {
    return this.http.post<SeatReservation>(`/seat-maps/events/${eventId}/reserve`, { seatIds });
  }

  release(eventId: number): Observable<void> {
    return this.http.delete<void>(`/seat-maps/events/${eventId}/reserve`);
  }
}
