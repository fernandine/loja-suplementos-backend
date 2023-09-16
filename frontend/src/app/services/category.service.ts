import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../common/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  private selectedCategory: BehaviorSubject<Category | null> =
    new BehaviorSubject<Category | null>(null);

  private apiUrl = environment.shopUrl + '/categories';

  private http = inject(HttpClient);

  getCategory(): Observable<Category[]> {
    return this.http
      .get<Category[]>(this.apiUrl)
      .pipe(map((response) => response));
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http
      .get<Category>(`${this.apiUrl}/${id}`)
      .pipe(map((response) => response));
  }

  createCategory(user: Category): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }

  updateCategory(id: number, value: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, value);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  setSelectedCategory(category: Category) {
    this.selectedCategory.next(category);
  }
  getSelectedCategory(): Observable<Category | null> {
    return this.selectedCategory.asObservable();
  }
}
