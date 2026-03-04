import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './verify-otp.html',
})
export class VerifyOtp implements OnInit {

  key: string = "";  // phone OR email
  otp: string = "";

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.key = params['key'] || params['phone'];
    });
  }

  verifyOtp() {

  const url = `http://localhost:8081/app/verify?key=${this.key}&otp=${this.otp}`;

  this.http.post<any>(url, {}).subscribe({
    next: (response) => {
      console.log("Backend Response:", response);

      if (response.success) {
        alert(response.message);
      } else {
        alert("Invalid OTP");
      }
    },
    error: (error) => {
      console.error("HTTP Error:", error);
      alert("Server error");
    }
  });
}
}