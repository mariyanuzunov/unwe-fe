import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICartState } from './cart.reducer';

export const selectCartState = createFeatureSelector<ICartState>('cart');

export const selectCartItems = createSelector(
  selectCartState,
  (state: ICartState) => state.products
);

export const selectCartTotalCost = createSelector(
  selectCartState,
  (state: ICartState) => state.totalPrice
);

export const selectCartShippingAddress = createSelector(
  selectCartState,
  (state: ICartState) => state.shippingAddress
);

export const selectCartError = createSelector(
  selectCartState,
  (state: ICartState) => state.error
);

export const selectCartItemsCount = createSelector(
  selectCartState,
  (state: ICartState) => state.products.length
);
