import { createAction, props, union } from '@ngrx/store';
import { IApiError } from 'src/app/shared/interfaces/api-error.interface';
import { IOrder } from 'src/app/shared/interfaces/order.interface';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';

const NAMESPACE = '[ ORDER ]';

export const createOrder = createAction(
  `${NAMESPACE} Create Order`,
  props<{ data: CreateOrderDto }>()
);

export const createOrderSuccess = createAction(
  `${NAMESPACE} Create Order Success`,
  props<{ order: IOrder }>()
);

export const createOrderFailure = createAction(
  `${NAMESPACE} Create Order Failure`,
  props<{ error: IApiError }>()
);

export const fetchAllOrders = createAction(`${NAMESPACE} Fetch All Orders`);

export const fetchAllOrdersSuccess = createAction(
  `${NAMESPACE} Fetch All Orders Success`,
  props<{ orders: IOrder[] }>()
);

export const fetchAllOrdersFailure = createAction(
  `${NAMESPACE} Fetch All Orders Failure`,
  props<{ error: IApiError }>()
);

export const fetchUserOrders = createAction(`${NAMESPACE} Fetch User Orders`);

export const fetchUserOrdersSuccess = createAction(
  `${NAMESPACE} Fetch User Orders Success`,
  props<{ orders: IOrder[] }>()
);

export const fetchUserOrdersFailure = createAction(
  `${NAMESPACE} Fetch User Orders Failure`,
  props<{ error: IApiError }>()
);

export const fetchMyOrders = createAction(`${NAMESPACE} Fetch My Orders`);

export const fetchMyOrdersSuccess = createAction(
  `${NAMESPACE} Fetch My Orders Success`,
  props<{ orders: IOrder[] }>()
);

export const fetchMyOrdersFailure = createAction(
  `${NAMESPACE} Fetch My Orders Failure`,
  props<{ error: IApiError }>()
);

export const updateOrder = createAction(
  `${NAMESPACE} Update Order`,
  props<{ id: string; data: UpdateOrderDto }>()
);

export const updateOrderSuccess = createAction(
  `${NAMESPACE} Update Order Success`,
  props<{ order: IOrder }>()
);

export const updateOrderFailure = createAction(
  `${NAMESPACE} Update Order Failure`,
  props<{ error: IApiError }>()
);

const all = union({
  createOrder,
  createOrderSuccess,
  createOrderFailure,
  fetchAllOrders,
  fetchAllOrdersSuccess,
  fetchAllOrdersFailure,
  fetchUserOrders,
  fetchUserOrdersSuccess,
  fetchUserOrdersFailure,
  fetchMyOrders,
  fetchMyOrdersSuccess,
  fetchMyOrdersFailure,
  updateOrder,
  updateOrderSuccess,
  updateOrderFailure,
});

export type OrderActionsUnion = typeof all;
