import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private LoggedIn = false;

  constructor(private router:Router) { }

  isLoggedIn(): boolean {
    return this.LoggedIn || !!localStorage.getItem('token');
  }

  login(user?: string) {
    this.LoggedIn = true;
    localStorage.setItem('token', `User AccessFully Login ${user}`);
  }

  logout() {
    this.LoggedIn = false;
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  } 
}
