import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from './alert.service';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  loginUrl = environment.path + '/auth/login';
  redirectUrl = '';

  TOKEN_KEY = 'token';

  constructor(private alertService: AlertService, private http: HttpClient, private router: Router) {}

  get isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  get token(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  loginUser(loginData: any) {
    this.http.post<any>(this.loginUrl, loginData, {observe: 'response'})
    .subscribe((res) => {
      localStorage.setItem(this.TOKEN_KEY, res.body.token);
      this.router.navigate([this.redirectUrl]);
    },
    (err) => {
      if (err.error && err.error.message) {
        this.alertService.error(err.error.message);
      }
      else {
        this.alertService.error('Unknown error.');
      }
    })
  }

  logout() {
    this.redirectUrl = '';
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['login']);
  }

}
