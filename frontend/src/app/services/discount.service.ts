import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import Decimal from 'decimal.js';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Discount } from '../common/discount';

@Injectable({
  providedIn: 'root',
})
export class DiscountService {
  private apiUrl = environment.shopUrl + '/discounts';

  private http = inject(HttpClient);

  getDiscount(): Observable<Discount[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<Discount[]>(url);
  }

  getDiscountByCode(code: string, totalPrice: Decimal): Observable<Discount> {
    return this.http
      .get<Discount>(
        `${this.apiUrl}/apply?code=${code}&totalPrice=${totalPrice}`
      )
      .pipe(map((response) => response));
  }

  getExpiringDiscounts(date: Date): Observable<Discount> {
    return this.http
      .get<Discount>(
        `${this.apiUrl}/expiring?date=${date.toISOString().split('T')[0]}`
      )
      .pipe(map((response) => response));
  }

  insert(discount: Discount): Observable<Discount> {
    return this.http.post<Discount>(`${this.apiUrl}`, discount);
  }
}
