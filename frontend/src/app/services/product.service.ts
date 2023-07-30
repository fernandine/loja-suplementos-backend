import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../common/Category';
import { PriceRange } from '../common/price-range';
import { Product } from '../common/product';
import { ProductDetails } from '../common/product-details';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl =  environment.shopUrl + '/products';

  private likedProducts: Product[] = [];

  constructor(private http: HttpClient) { }

  getLikedProducts(): Product[] {
    return this.likedProducts;
  }

  getBestSellers(limit: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/best-sellers?limit=${limit}`);
  }

  getMostRecents(limit: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/most-recents?limit=${limit}`);
  }

  getProductsByPriceRange(priceRange: PriceRange): Observable<Product[]> {
    const params = {
      minPrice: priceRange.minPrice.toString(),
      maxPrice: priceRange.maxPrice.toString()
    };
    return this.http.get<Product[]>(`${this.baseUrl}/price-range`, { params });
  }

  findByFavorite(favorite: boolean): Observable<Product[]> {
    const url = `${this.baseUrl}/findByFavorite?notFavorite=${!favorite}`;
    return this.http.get<Product[]>(url).pipe(
      map(products => {
        this.likedProducts = products.filter(p => p.favorite);
        return this.likedProducts;
      })
    );
  }
  findBySale(sale: boolean): Observable<Product[]> {
    const url = `${this.baseUrl}/findBySale?notSale=${!sale}`;
    return this.http.get<Product[]>(url).pipe(
      map(products => {
        this.likedProducts = products.filter(p => p.sale);
        return this.likedProducts;
      })
    );
  }

  findByFeature(feature: boolean): Observable<Product[]> {
    const url = `${this.baseUrl}/findByFeature?notFeature=${!feature}`;
    return this.http.get<Product[]>(url).pipe(
      map(products => {
        this.likedProducts = products.filter(p => p.feature);
        return this.likedProducts;
      })
    );
  }

  toggleFavorite(product: Product): Observable<Product> {
    product.favorite = !product.favorite;
    const url = `${this.baseUrl}/${product.id}`;
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
    const url = `${this.baseUrl}`;
    return this.http.get<Product[]>(url);
  }

  getProductById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  getProductList(currentCategoryName: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/categories?name=${currentCategoryName}`;
    return this.getProductSearch(searchUrl).pipe(
      tap(data => console.log('Produtos retornados do servidor:', data)),
      catchError(error => {
        console.error('Ocorreu um erro ao obter produtos por categoria:', error);
        return throwError(error);
      })
      );
  }

  getProductsByFilters(flavorFilter: string[], category: Category[]): Observable<Product[]> {
    const url = `${this.baseUrl}/flavors/${flavorFilter}`;
    return this.http.get<Product[]>(url);
  }



  getProductSearch(searchUrl: string): Observable<Product[]> {
    return this.http.get<Product[]>(searchUrl)
      .pipe(map(response => response));
  }

  getProductByCategoryName(categoryName: string): Observable<Product[]> {
    const url = `${this.baseUrl}/categories?name=${categoryName}`;
    return this.http.get<Product[]>(url).pipe(
      tap(data => console.log('Produtos retornados do servidor:', data)),
      catchError(error => {
        console.error('Ocorreu um erro ao obter produtos por categoria:', error);
        return throwError(error);
      })
    );
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post(`${this.baseUrl}`, product);
  }

  updateProduct(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
