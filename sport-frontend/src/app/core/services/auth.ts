import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8081';
  private logoutUrl='https://accounts.google.com';

  constructor(private http: HttpClient) {}

  // getUser() {
  //   return this.http.get<any>(`${this.apiUrl}/user`, {
  //     withCredentials: true
  //   });
  // }

  logout() {
    return this.http.post(`${this.apiUrl}/logout`, {}, {
      withCredentials: true
    });
  }


  
}
