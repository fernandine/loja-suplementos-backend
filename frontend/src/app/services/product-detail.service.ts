import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductDetails } from '../common/product-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  private apiUrl =  environment.shopUrl + '/product-details';

  private http = inject(HttpClient);

  getProduct(): Observable<ProductDetails[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<ProductDetails[]>(url);
  }
  getProductById(id: number): Observable<ProductDetails> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ProductDetails>(url);
  }
  createProduct(product: ProductDetails): Observable<any> {
    return this.http.post(`${this.apiUrl}`, product);
  }
  updateProduct(id: number, value: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, value);
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
