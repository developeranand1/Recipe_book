import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

interface UserData {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8000/api/auth';
  private tokenSubject = new BehaviorSubject<string | null>(null);
  private userSubject = new BehaviorSubject<UserData | null>(null);

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}'); // Default to empty object if 'user' is null

    this.tokenSubject.next(token);
    this.userSubject.next(user);
  }

  get token(): string | null {
    return this.tokenSubject.value;
  }

  get user(): UserData | null {
    return this.userSubject.value;
  }

  login(email: string, password: string): Observable<any> {
    const returnValue = this.http
      .post<any>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap((data) => {
          const token = data.token;
          const user = { name: data.name, email: data.email };
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          this.tokenSubject.next(token);
          this.userSubject.next(user);
        })
      );
    return returnValue;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.tokenSubject.next(null);
    this.userSubject.next(null);
    this.router.navigate(['/user-login']);
  }

  registerUser(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  userlogin(data: any) {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  onLogout() {
    localStorage.removeItem('userData');
    this.router.navigate(['/user-login']);
  }
}
