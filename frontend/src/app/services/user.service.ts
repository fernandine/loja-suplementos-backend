import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../common/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.shopUrl + '/users';

  private http = inject(HttpClient);
  private storage = inject(StorageService);

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getAuthenticatedUser(): Observable<User> {
    const token = this.getTokenFromLocalStorage();
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      return this.http.get<User>(`${this.apiUrl}/me`, { headers });
    } else {
      return new Observable<User>();
    }
  }


  private getTokenFromLocalStorage(): string | null {
    const currentUser = this.storage.getItem('currentUser');
    return currentUser ? currentUser.token : null;
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  createUser(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }

  updateUser(id: string, value: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, value);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
