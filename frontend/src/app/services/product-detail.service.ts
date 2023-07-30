import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductDetails } from '../common/product-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  private baseUrl =  environment.shopUrl + '/product-details';

  constructor(private http: HttpClient) { }

  getAvailableFlavors(): Observable<string[]> {
    const url = `${this.baseUrl}/flavors`;
    return this.http.get<string[]>(url);
  }
  getProductsByFlavor(flavors: string[]): Observable<ProductDetails[]> {
    const url = `${this.baseUrl}/flavors/${flavors}`;
    return this.http.get<ProductDetails[]>(url);
  }
}
