import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../common/user';
import { StorageService } from './storage.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.shopUrl + '/users';

  private http = inject(HttpClient);
  private service = inject(AuthService);

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getAuthenticatedUser(): Observable<User> {
    const authToken = this.service.getToken();
    const headers = {
      Authorization: `Bearer ${authToken}`,
    };
      return this.http.get<User>(`${this.apiUrl}/me`, { headers });
    }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}`, user);
  }

  updateUser(id: string, value: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, value);
  }

  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/${id}`);
  }
}
