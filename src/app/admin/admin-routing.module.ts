import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { AllOrdersComponent } from './containers/all-orders/all-orders.component';
import { AddItemPageComponent } from './containers/add-item-page/add-item-page.component';
import { AdminPanelComponent } from './containers/admin-panel/admin-panel.component';
import { EditItemPageComponent } from './containers/edit-item-page/edit-item-page.component';
import { AllReviewsComponent } from './containers/all-reviews/all-reviews.component';

const routes: Routes = [
  {
    path: 'admin-panel',
    canActivate: [AdminGuard],
    component: AdminPanelComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'admin-panel/all-orders' },
      { path: 'add-item', component: AddItemPageComponent },
      { path: 'edit-item/:id', component: EditItemPageComponent },
      { path: 'all-orders', component: AllOrdersComponent },
      { path: 'all-reviews', component: AllReviewsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
