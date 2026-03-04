import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mobile-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mobile-login.html',
})
export class MobileLogin {

  phone: string = "";

  constructor(private http: HttpClient, private router: Router) {}
  

  sendOtp() {

    if (!this.phone) {
      alert("Enter phone number");
      return;
    }

    this.http.post(
      `http://localhost:8081/app/send/sms?phone=${this.phone}`,
      {},
      { responseType: 'text' }
    ).subscribe({
      next: () => {
        alert("OTP Sent ✅");

        this.router.navigate(['/verify-otp'], {
          queryParams: { phone: this.phone }
        });
      },
      error: () => alert("Failed to send OTP ❌")
    });
  }
}