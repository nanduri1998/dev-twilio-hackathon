import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService, private rotuer: Router) { }

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    if (!token) {
      return false;
    } else {
      return !this.jwtHelper.isTokenExpired(token);
    }
  }
}
