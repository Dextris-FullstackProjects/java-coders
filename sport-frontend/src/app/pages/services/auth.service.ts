

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = "http://localhost:8081/app/send/mail";
  private loginUrl = "http://localhost:8082/login";

  constructor(private http: HttpClient) {}

  register(email: string) {
    const params = new HttpParams().set('email', email);
    return this.http.post(`${this.registerUrl}/email`, null,
      { params, responseType: 'text' });
  }

  verifyRegister(email: string, otp: string) {
    const params = new HttpParams()
      .set('email', email)
      .set('otp', otp);

    return this.http.post(`${this.registerUrl}/verify-otp`, null,
      { params, responseType: 'text' });
  }

//   sendLoginOtp(email: string) {
//     const params = new HttpParams().set('email', email);
//     return this.http.post(`${this.loginUrl}/request-otp`, null,
//       { params, responseType: 'text' });
//   }

//   verifyLogin(email: string, otp: string) {
//     const params = new HttpParams()
//       .set('email', email)
//       .set('otp', otp);

//     return this.http.post(`${this.loginUrl}/verfiy-otp`, null,
//       { params, responseType: 'text' });
//   }

}