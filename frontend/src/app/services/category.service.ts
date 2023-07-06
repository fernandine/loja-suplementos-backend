import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../common/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private selectedCategory: BehaviorSubject<Category | null> =
  new BehaviorSubject<Category | null>(null);

private baseUrl = environment.shopUrl + '/categories';

constructor(private http: HttpClient) {}

getCategory(): Observable<Category[]> {
  return this.http
    .get<Category[]>(this.baseUrl)
    .pipe(map((response) => response));
}

getCategoryById(id: number): Observable<Category> {
  return this.http
    .get<Category>(`${this.baseUrl}/${id}`)
    .pipe(map((response) => response));
}

createCategory(user: Category): Observable<any> {
  return this.http.post(`${this.baseUrl}`, user);
}

updateCategory(id: number, value: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/${id}`, value);
}

deleteCategory(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`);
}

setSelectedCategory(category: Category) {
  this.selectedCategory.next(category);
}
getSelectedCategory(): Observable<Category | null> {
  return this.selectedCategory.asObservable();
}
}
