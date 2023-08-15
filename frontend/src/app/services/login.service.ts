import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginSubject = new Subject<boolean>();

  login(): void {
    this.loginSubject.next(true);
  }
  getUserFirstname(): string | null {
    return localStorage.getItem('userFirstname');
  }
  getLoginObservable(): Observable<boolean> {
    return this.loginSubject.asObservable();
  }
}
