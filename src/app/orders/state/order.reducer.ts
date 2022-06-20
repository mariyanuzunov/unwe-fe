import { createReducer, on } from '@ngrx/store';
import { IApiError } from 'src/app/shared/interfaces/api-error.interface';
import { IOrder } from 'src/app/shared/interfaces/order.interface';
import { OrderActions } from '.';

export interface IOrderState {
  orders: IOrder[] | [];
  error: IApiError | null;
  loading: boolean;
}

export const initialState: IOrderState = {
  orders: [],
  error: null,
  loading: false,
};

export const orderReducer = createReducer(
  initialState,

  // Create Order Reducers

  on(OrderActions.createOrder, (state) => ({ ...state, loading: true })),

  on(OrderActions.createOrderSuccess, (state, { order }) => ({
    ...state,
    orders: [...state.orders, order],
    loading: false,
  })),

  on(OrderActions.createOrderFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Fetch All Orders Reducers

  on(OrderActions.fetchAllOrders, (state) => ({ ...state, loading: true })),

  on(OrderActions.fetchAllOrdersSuccess, (state, { orders }) => ({
    ...state,
    orders,
    loading: false,
  })),

  on(OrderActions.fetchAllOrdersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Fetch User Orders Reducers

  on(OrderActions.fetchUserOrders, (state) => ({ ...state, loading: true })),

  on(OrderActions.fetchUserOrdersSuccess, (state, { orders }) => ({
    ...state,
    orders,
    loading: false,
  })),

  on(OrderActions.fetchUserOrdersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Update Order Reducers

  on(OrderActions.updateOrder, (state) => ({ ...state, loading: true })),

  on(OrderActions.updateOrderSuccess, (state, { order }) => ({
    ...state,
    orders: [...state.orders, order],
    loading: false,
  })),

  on(OrderActions.updateOrderFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
