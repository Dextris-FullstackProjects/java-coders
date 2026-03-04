import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Register } from './pages/register/register';
import { VerifyOtp } from './pages/verify-otp/verify-otp';
import { MobileLogin } from './pages/mobile-login/mobile-login';
import { EmailLogin } from './pages/email-login/email-login';
export const routes: Routes = [
    {path:'',component:Login },
     {path:'register',component:Register},
    {path:'home',component:Home},
     { path: 'mobile-login', component: MobileLogin },
     { path: 'verify-otp', component: VerifyOtp }, 
     { path: 'email-login', component: EmailLogin }


];
