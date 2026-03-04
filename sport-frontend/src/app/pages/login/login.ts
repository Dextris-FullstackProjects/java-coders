import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private router: Router) {}

  loginWithMobile() {
    // ⭐ Just navigate — no API call here
    this.router.navigate(['/mobile-login']);
  }

  loginWithGoogle() {
    window.location.href = "http://localhost:8081/oauth2/authorization/google";
  }

   loginWithEmail() {
    this.router.navigate(['/email-login']);
  }

}