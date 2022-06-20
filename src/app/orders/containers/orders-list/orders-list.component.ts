import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthSelectors } from 'src/app/auth/state';
import { IOrder } from 'src/app/shared/interfaces/order.interface';
import { OrderActions } from '../../state';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {
  @Input() orders!: IOrder[] | [] | null;

  isAdmin$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isAdmin$ = this.store.select(AuthSelectors.selectAuthIsAdmin);
  }

  cancelOrderHandler(id: string) {
    this.store.dispatch(
      OrderActions.updateOrder({ id, data: { status: 'анулирана' } })
    );
  }

  changeOrderStatusHandler(pl: { id: string; newStatus: string }) {
    this.store.dispatch(
      OrderActions.updateOrder({ id: pl.id, data: { status: pl.newStatus } })
    );
  }
}
