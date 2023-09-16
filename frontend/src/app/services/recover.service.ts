import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Email } from '../common/email';

@Injectable({
  providedIn: 'root'
})
export class RecoverService {

  private apiUrl = environment.shopUrl + '/auth';

  private http = inject(HttpClient);

  createRecoverToken(email: Email): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/recover-token`, email);
  }

  saveNewPassword(token: string, newPassword: string): Observable<void> {
    const resetData = { token, password: newPassword };
    return this.http.put<void>(`${this.apiUrl}/new-password`, resetData);
  }

}
