import { createAction, props, union } from '@ngrx/store';
import { IApiError } from 'src/app/shared/interfaces/api-error.interface';
import { IDoor } from 'src/app/shared/interfaces/door.interface';

const NAMESPACE = '[ CART ]';

export const addToCart = createAction(
  `${NAMESPACE} Add item to the cart`,
  props<{ item: IDoor }>()
);

export const removeItemFromCart = createAction(
  `${NAMESPACE} Remove item from the cart`,
  props<{ id: string }>()
);

export const clearCart = createAction(`${NAMESPACE} Clear cart`);

export const checkout = createAction(
  `${NAMESPACE} Checkout`,
  props<{ shippingAddress: string; products: string[] }>()
);

export const checkoutSuccess = createAction(`${NAMESPACE} Checkout Success`);

export const checkoutFailure = createAction(
  `${NAMESPACE} Checkout Failure`,
  props<{ error: IApiError }>()
);

const all = union({
  addToCart,
  removeItemFromCart,
  clearCart,
  checkout,
  checkoutSuccess,
  checkoutFailure,
});

export type AuthActionsUnion = typeof all;
