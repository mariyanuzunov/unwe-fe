import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from '../core/guards/user.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UserGuard],
    data: {
      authenticationRequired: false,
      authenticationFailureRedirectUrl: '/',
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [UserGuard],
    data: {
      authenticationRequired: false,
      authenticationFailureRedirectUrl: '/',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
