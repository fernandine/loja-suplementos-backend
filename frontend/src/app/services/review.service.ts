import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Review } from '../common/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private apiUrl =  environment.shopUrl + '/reviews';

  private http = inject(HttpClient);

  getReview(): Observable<Review[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<Review[]>(url);
  }

  createReview(review: Review): Observable<Review> {
    return this.http.post<Review>(`${this.apiUrl}`, review);
  }
}
