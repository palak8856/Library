import { Injectable } from '@angular/core';
import { users } from '../auth/users.data';
import { Router } from '@angular/router';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User | null = null;

  constructor(private router: Router) {
    const user = localStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
    }
  }

  login({ email, password }: { email: string; password: string }): boolean {
    console.log("demo");
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) {
      return false;
    }
    this.user = user;
    this.saveUserToLocalStorage();
    this.router.navigate(['home'], { replaceUrl: true });
    return true;
  }

  logout(): void {
    this.user = null;
    localStorage.removeItem('user');
    this.router.navigate(['login'], { replaceUrl: true });
  }

  isAdmin(): boolean {
    return this.user?.role === 'Librarian';
  }

  getRole(): string | null {
    return this.user?.role || null;
  }

  saveUserToLocalStorage(): void {
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}
