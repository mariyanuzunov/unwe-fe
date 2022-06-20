import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CataloguePageComponent } from './containers/catalogue-page/catalogue-page.component';
import { ItemDetailsPageComponent } from './containers/item-details-page/item-details-page.component';

const routes: Routes = [
  {
    path: 'catalogue',
    children: [
      { path: '', pathMatch: 'full', component: CataloguePageComponent },
      { path: ':id', component: ItemDetailsPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogueRoutingModule {}
