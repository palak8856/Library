import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userRole!: string;

  constructor(private authService:AuthService, private router:Router) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userRole = user.role || ''; 
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(["login"]);
  }
}
