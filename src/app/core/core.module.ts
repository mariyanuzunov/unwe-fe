import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { UserGuard } from './guards/user.guard';
import { AdminGuard } from './guards/admin.guard';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { PriceFilterPipe } from './pipes/price-filter.pipe';
import { CategoryFilterPipe } from './pipes/category-filter.pipe';
import { ManufacturerFilterPipe } from './pipes/manufacturer-filter.pipe';
import { MongooseDatePipe } from './pipes/mongoose-date.pipe';
import { OrderStatusFilterPipe } from './pipes/order-status-filter.pipe';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { PageTitleComponent } from './components/page-title/page-title.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SearchFilterPipe,
    PriceFilterPipe,
    CategoryFilterPipe,
    ManufacturerFilterPipe,
    MongooseDatePipe,
    OrderStatusFilterPipe,
    DialogConfirmComponent,
    PageTitleComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    SearchFilterPipe,
    PriceFilterPipe,
    CategoryFilterPipe,
    ManufacturerFilterPipe,
    MongooseDatePipe,
    OrderStatusFilterPipe,
    PageTitleComponent,
  ],
  providers: [JwtInterceptor, UserGuard, AdminGuard],
})
export class CoreModule {}
