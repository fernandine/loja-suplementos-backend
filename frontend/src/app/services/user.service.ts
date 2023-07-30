import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = environment.shopUrl + '/users';

  constructor(private http: HttpClient) {}

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.userUrl}/${id}`);
  }

  createUser(user: User): Observable<any> {
    return this.http.post(`${this.userUrl}`, user);
  }

  updateUser(id: number, value: any): Observable<any> {
    return this.http.put(`${this.userUrl}/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.userUrl}/${id}`);
  }
}
