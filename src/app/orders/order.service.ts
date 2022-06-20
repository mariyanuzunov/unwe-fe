import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IOrder } from '../shared/interfaces/order.interface';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

const RESOURCE_URL = environment.API_URL + 'orders';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getAllOrders() {
    return this.http.get<IOrder[]>(RESOURCE_URL);
  }

  getUserOrders() {
    return this.http.get<IOrder[]>(`${RESOURCE_URL}/my-orders`);
  }

  createOrder(data: CreateOrderDto) {
    return this.http.post<IOrder>(RESOURCE_URL, data);
  }

  updateOrder(id: string, data: UpdateOrderDto) {
    console.log(data);
    return this.http.patch<IOrder>(`${RESOURCE_URL}/${id}`, data);
  }
}
