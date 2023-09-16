import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../common/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = environment.shopUrl + '/orders';

  private http = inject(HttpClient);

  loadById(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${id}`, { withCredentials: true });
  }

  createOrder(order: Order): Observable<Order> {
    console.log('Enviando solicitação HTTP para criar um pedido:', order);
    return this.http.post<Order>(this.apiUrl, order);
  }

}
