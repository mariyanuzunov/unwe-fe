import { Pipe, PipeTransform } from '@angular/core';
import { IOrder } from 'src/app/shared/interfaces/order.interface';

@Pipe({
  name: 'orderStatusFilter',
})
export class OrderStatusFilterPipe implements PipeTransform {
  transform(orders: IOrder[] | [] | null, status: string | null): any[] {
    if (!orders) {
      return [];
    }
    if (!status) {
      return orders;
    }

    return orders.filter(
      (p) => p.status.toLocaleLowerCase() == status.toLocaleLowerCase()
    );
  }
}
