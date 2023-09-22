import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../common/order';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = environment.shopUrl + '/orders';

  private http = inject(HttpClient);
  private service = inject(AuthService);

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  loadById(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${id}`, { withCredentials: true });
  }

  createOrder(order: Order): Observable<Order> {
    const authToken = this.service.getToken();

    const headers = {
      Authorization: `Bearer ${authToken}`,
    };

    return this.http.post<Order>(this.apiUrl, order, { headers }).pipe(first());
  }
}
