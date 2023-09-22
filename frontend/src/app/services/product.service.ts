import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PriceRange } from '../common/price-range';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl =  environment.shopUrl + '/products';

  private likedProducts: Product[] = [];

  private http = inject(HttpClient);

  getLikedProducts(): Product[] {
    return this.likedProducts;
  }

  getBestSellers(limit: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/best-sellers?limit=${limit}`);
  }

  getMostRecents(limit: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/most-recents?limit=${limit}`);
  }

  getProductsByPriceRange(priceRange: PriceRange): Observable<Product[]> {
    const params = {
      minPrice: priceRange.minPrice.toString(),
      maxPrice: priceRange.maxPrice.toString()
    };
    return this.http.get<Product[]>(`${this.apiUrl}/price-range`, { params });
  }

  findByFavorite(favorite: boolean): Observable<Product[]> {
    const url = `${this.apiUrl}/find?notFavorite=${!favorite}`;
    return this.http.get<Product[]>(url).pipe(
      map(products => {
        this.likedProducts = products.filter(p => p.favorite);
        return this.likedProducts;
      })
    );
  }
  findBySale(sale: boolean): Observable<Product[]> {
    const url = `${this.apiUrl}/findBySale?notSale=${!sale}`;
    return this.http.get<Product[]>(url).pipe(
      map(products => {
        this.likedProducts = products.filter(p => p.sale);
        return this.likedProducts;
      })
    );
  }

  findByFeature(feature: boolean): Observable<Product[]> {
    const url = `${this.apiUrl}/findByFeature?notFeature=${!feature}`;
    return this.http.get<Product[]>(url).pipe(
      map(products => {
        this.likedProducts = products.filter(p => p.feature);
        return this.likedProducts;
      })
    );
  }

  toggleFavorite(product: Product): Observable<Product> {
    product.favorite = !product.favorite;
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map(updatedProduct => {
        if (updatedProduct.favorite) {
          this.likedProducts.push(updatedProduct);
        } else {
          const index = this.likedProducts.findIndex(p => p.id === updatedProduct.id);
          this.likedProducts.splice(index, 1);
        }
        return updatedProduct;
      })
    );
  }

  getProduct(): Observable<Product[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<Product[]>(url);
  }

  getProductById(id: number): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  getProductsByFlavors(flavors: string[]): Observable<Product[]> {
    const flavorsString = flavors.join('&');
    const url = `${this.apiUrl}/flavors?flavors=${flavorsString}`;
    return this.http.get<Product[]>(url);
  }


  getProductByCategoryName(categoryName: string): Observable<Product[]> {
    const url = `${this.apiUrl}/categories?name=${categoryName}`;
    return this.http.get<Product[]>(url).pipe(
      tap(data => console.log('Produtos retornados do servidor:', data)),
      catchError(error => {
        console.error('Ocorreu um erro ao obter produtos por categoria:', error);
        return throwError(error);
      })
    );
  }

}
