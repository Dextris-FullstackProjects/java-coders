import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-email-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './email-login.html',
  styleUrl: './email-login.css',
})
export class EmailLogin {
  email: string = "";

  constructor(private http: HttpClient, private router: Router) {}

  sendOtp() {

    if (!this.email) {
      alert("Enter email address");
      return;
    }

    this.http.post(
      `http://localhost:8081/app/send/mail?email=${this.email}`,
      {},
      { responseType: 'text' }   // ⭐ important
    ).subscribe({
      next: (res) => {
        alert(res);

        // navigate to verify page
        this.router.navigate(['/verify-otp'], {
          queryParams: { key: this.email }
        });
      },
      error: (err) => {
        console.error(err);
        alert("Failed to send OTP ❌");
      }
    });
  }
}
