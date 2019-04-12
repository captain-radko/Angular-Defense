import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  private readonly loginUrl = 'http://localhost:5000/auth/user/login';
  private readonly registerUrl = 'http://localhost:5000/auth/user/register';

  constructor(
    private http: HttpClient
  ) { }

  register(body) {
    return this.http.post(this.registerUrl, body);
  }

  login(body) {
    return this.http.post(this.loginUrl, body);
  }

  logout() {
    localStorage.clear();
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  getToken() {
    let token = localStorage.getItem('token');
    return token;
  }

  isAdmin() {
    let user = localStorage.getItem('isAdmin')
    if (user === "true") {
      return true;
    }
    return false;
  }
}