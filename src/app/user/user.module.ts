import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserProfilePageComponent } from './containers/user-profile-page/user-profile-page.component';
import { MaterialModule } from '../material.module';
import { OrdersModule } from '../orders/orders.module';
import { ReviewsModule } from '../reviews/reviews.module';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';

@NgModule({
  declarations: [UserProfilePageComponent, ProfileDetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    UserRoutingModule,
    OrdersModule,
    ReviewsModule,
  ],
})
export class UserModule {}
