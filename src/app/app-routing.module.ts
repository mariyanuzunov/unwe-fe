import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart/containers/cart-page/cart-page.component';
import { UserGuard } from './core/guards/user.guard';
import { HomePageComponent } from './home/containers/home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserProfilePageComponent } from './user/containers/user-profile-page/user-profile-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomePageComponent },
  {
    path: 'profile',
    component: UserProfilePageComponent,
    canActivate: [UserGuard],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: '/login',
    },
  },
  {
    path: 'cart',
    component: CartPageComponent,
    canActivate: [UserGuard],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: '/login',
    },
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
