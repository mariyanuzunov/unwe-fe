import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { JwtInterceptorProvider } from './core/interceptors/jwt.interceptor';
import { CatalogueModule } from './catalogue/catalogue.module';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { EntityStoreModule } from './entity-store.module';
import { PluralHttpUrlGeneratorProvider } from './plural-http-url-generator';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { CartModule } from './cart/cart.module';
import { ReviewsModule } from './reviews/reviews.module';
import { OrdersModule } from './orders/orders.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    EntityDataModule.forRoot(entityConfig),
    EntityStoreModule,
    CoreModule,
    AuthModule,
    SharedModule,
    CatalogueModule,
    AdminModule,
    UserModule,
    CartModule,
    ReviewsModule,
    OrdersModule,
    HomeModule,
    AppRoutingModule,
  ],
  providers: [JwtInterceptorProvider, PluralHttpUrlGeneratorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
