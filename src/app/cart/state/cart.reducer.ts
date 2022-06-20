import { createReducer, on } from '@ngrx/store';
import { IApiError } from 'src/app/shared/interfaces/api-error.interface';
import { IDoor } from 'src/app/shared/interfaces/door.interface';
import { CartActions } from '.';

export interface ICartState {
  products: IDoor[] | [];
  shippingAddress: string | null;
  totalPrice: number;
  error: IApiError | null;
  loading: boolean;
}

export const initialState: ICartState = {
  products: [],
  shippingAddress: null,
  totalPrice: 0,
  error: null,
  loading: false,
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addToCart, (state, { item }) => ({
    ...state,
    products: [...state.products, item],
    totalPrice: state.totalPrice + item.price,
  })),

  on(CartActions.removeItemFromCart, (state, { id }) => {
    const removedProductPrice = state.products.find((p) => p._id == id)!.price;
    const filteredProducts = state.products.filter((p) => p._id !== id);

    return {
      ...state,
      totalPrice: state.totalPrice - removedProductPrice,
      products: filteredProducts,
    };
  }),

  on(CartActions.clearCart, () => initialState),

  on(CartActions.checkout, (state) => ({ ...state, loading: true })),

  on(CartActions.checkoutSuccess, () => initialState),

  on(CartActions.checkoutFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
