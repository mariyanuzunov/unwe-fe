import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { orderReducer } from './state/order.reducer';
import { OrderEffects } from './state/order.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { OrderComponent } from './components/order/order.component';
import { OrdersListComponent } from './containers/orders-list/orders-list.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [OrderComponent, OrdersListComponent],
  imports: [
    CommonModule,

    HttpClientModule,
    ReactiveFormsModule,
    CoreModule,
    MaterialModule,
    StoreModule.forFeature({
      name: 'order',
      reducer: orderReducer,
    }),
    EffectsModule.forFeature([OrderEffects]),
  ],
  exports: [OrdersListComponent],
})
export class OrdersModule {}
