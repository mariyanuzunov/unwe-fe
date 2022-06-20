import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { OrderActions } from '.';
import { OrderService } from '../order.service';

@Injectable()
export class OrderEffects {
  constructor(private actions$: Actions, private orderSerivce: OrderService) {}

  allOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.fetchAllOrders),
      switchMap(() =>
        this.orderSerivce.getAllOrders().pipe(
          map((orders) => OrderActions.fetchAllOrdersSuccess({ orders })),
          catchError((error) =>
            of(OrderActions.fetchAllOrdersFailure({ error }))
          )
        )
      )
    )
  );

  userOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.fetchUserOrders),
      switchMap(() =>
        this.orderSerivce.getUserOrders().pipe(
          map((orders) => OrderActions.fetchUserOrdersSuccess({ orders })),
          catchError((error) =>
            of(OrderActions.fetchUserOrdersFailure({ error }))
          )
        )
      )
    )
  );

  createOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.createOrder),
      switchMap((action) =>
        this.orderSerivce.createOrder(action.data).pipe(
          map((order) => OrderActions.createOrderSuccess({ order })),
          catchError((error) => of(OrderActions.createOrderFailure({ error })))
        )
      )
    )
  );

  updateOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.updateOrder),
      switchMap((action) =>
        this.orderSerivce.updateOrder(action.id, action.data).pipe(
          map((order) => OrderActions.updateOrderSuccess({ order })),
          catchError((error) => of(OrderActions.updateOrderFailure({ error })))
        )
      )
    )
  );
}
