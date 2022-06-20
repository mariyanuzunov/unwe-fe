import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './containers/cart-page/cart-page.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './state/cart.reducer';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [CartPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    CoreModule,
    StoreModule.forFeature({
      name: 'cart',
      reducer: cartReducer,
    }),
  ],
})
export class CartModule {}
