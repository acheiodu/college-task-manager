import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Injector } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(req, next) {
    let authService = this.injector.get(AuthService);
    let authRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authService.token)
    })
    return next.handle(authRequest);
  }

}
