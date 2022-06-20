import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IOrderState } from './order.reducer';

export const selectOrderState = createFeatureSelector<IOrderState>('order');

export const selectAllOrders = createSelector(
  selectOrderState,
  (state: IOrderState) => state.orders
);

export const selectUserOrders = createSelector(
  selectOrderState,
  (state: IOrderState) => state.orders
);
