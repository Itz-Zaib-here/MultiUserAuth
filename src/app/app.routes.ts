import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './auth/display/user/user.component';
import { AdminComponent } from './auth/display/admin/admin.component';
import { SignupComponent } from './auth/signup/signup.component';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    {path: 'signup', component: SignupComponent },
    { path: 'user', component: UserComponent },
    { path: 'admin', component: AdminComponent },
    { path: '**', redirectTo: '' }
  ];
  