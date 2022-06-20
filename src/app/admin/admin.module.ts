import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { AdminPanelComponent } from './containers/admin-panel/admin-panel.component';
import { AllOrdersComponent } from './containers/all-orders/all-orders.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { AddItemPageComponent } from './containers/add-item-page/add-item-page.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { EditItemPageComponent } from './containers/edit-item-page/edit-item-page.component';
import { OrdersModule } from '../orders/orders.module';
import { CoreModule } from '../core/core.module';
import { AllReviewsComponent } from './containers/all-reviews/all-reviews.component';
import { ReviewsModule } from '../reviews/reviews.module';

@NgModule({
  declarations: [
    AdminPanelComponent,
    AllOrdersComponent,
    AddItemComponent,
    AddItemPageComponent,
    EditItemComponent,
    EditItemPageComponent,
    AllReviewsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    OrdersModule,
    ReviewsModule,
    CoreModule,
  ],
})
export class AdminModule {}
