import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../core/services/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  user$!: Observable<any>;

  constructor(private router:Router) { 
    //  this.user$= this.authService.getUser();
  }

  ngOnInit() {

  }

  logout() {
    // this.authService.logout().subscribe(() => {
    //   this.router.navigate(['/']);
    // });

     window.location.href =
    'https://accounts.google.com/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:4200';
    

  }


}