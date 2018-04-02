import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  getUserUrl = environment.path + '/user/find';
  loginUrl = environment.path + '/auth/login';
  redirectUrl = '';

  TOKEN_KEY = 'token';

  constructor(private http: HttpClient, private router: Router) {}

  get isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  get token(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get userId() {
    return this.http.get<any>(this.getUserUrl);
  }

  loginUser(loginData: any) {
    this.http.post<any>(this.loginUrl, loginData)
    .subscribe((res) => {
      localStorage.setItem(this.TOKEN_KEY, res.token);
      this.router.navigate([this.redirectUrl], {queryParams: {id: res.id}});
    })
  }

  logout() {
    this.redirectUrl = '';
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['login']);
  }

}
