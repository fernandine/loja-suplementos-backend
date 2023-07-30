import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../common/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.shopUrl + '/oauth2/token';

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  login(username: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa('ecommerce:ecommerce123')
    });

    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('grant_type', 'password');

    return this.http.post<any>(this.apiUrl, body.toString(), { headers: headers }).pipe(
      map(response => {
        const token = response.access_token;
        const id = response.id;
        if (token) {
          const currentUser = { username, token, id };
          this.storageService.setItem('currentUser', currentUser);
          return true;
        } else {
          return false;
        }
      })
    );
  }

  getCurrentUser(): {
    username: string;
    token: string;
    id: string
  } | null {
    const currentUser = this.storageService.getItem('currentUser');
    if (currentUser && currentUser.token) {
      return {
        username: currentUser.username || '',
        token: currentUser.token || '',
        id: currentUser.id || '',

      };
    } else {
      return null;
    }
  }

  logout(): void {
    this.storageService.removeItem('currentUser');
  }

  isAuthenticated(): boolean {
    const currentUser = this.storageService.getItem('currentUser');
    return !!currentUser && !!currentUser.token;
  }

}
