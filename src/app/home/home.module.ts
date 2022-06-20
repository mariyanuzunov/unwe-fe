import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { MaterialModule } from '../material.module';
import { CatalogueModule } from '../catalogue/catalogue.module';
import { RouterModule } from '@angular/router';
import { FeaturesBoxComponent } from './components/features-box/features-box.component';
import { FeaturedImagesComponent } from './components/featured-images/featured-images.component';

@NgModule({
  declarations: [HomePageComponent, FeaturesBoxComponent, FeaturedImagesComponent],
  imports: [CommonModule, RouterModule, MaterialModule, CatalogueModule],
})
export class HomeModule {}
