import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EventReviewResponse {
  id: number;
  eventId: number;
  userId: number;
  userName: string;
  rating: number;
  comment?: string;
  createdAt: string;
}

export interface EventReviewSummary {
  averageRating: number;
  totalReviews: number;
  ratingDistribution: Record<number, number>;
  reviews: EventReviewResponse[];
}

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private readonly BASE = '/EventReviews';
  constructor(private http: HttpClient) {}

  getReviews(eventId: number): Observable<EventReviewSummary> {
    return this.http.get<EventReviewSummary>(`${this.BASE}/event/${eventId}`);
  }

  createReview(eventId: number, rating: number, comment?: string): Observable<EventReviewResponse> {
    return this.http.post<EventReviewResponse>(this.BASE, { eventId, rating, comment });
  }
}
