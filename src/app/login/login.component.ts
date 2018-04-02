import { Component } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.less']})

export class LoginComponent {

  loginData: any = {};

  constructor(private authService: AuthService) {}

  loginUser() {
    this.authService.loginUser(this.loginData);
  }

}
