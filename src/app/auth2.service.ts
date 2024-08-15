import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth2Service {

  constructor() { }

  login() {
    localStorage.setItem('access', 'true');
  }

  logout() {
    localStorage.removeItem('access');
  }

  isLoggedIn() {
    return localStorage.getItem('access') === 'true';
  }
}
