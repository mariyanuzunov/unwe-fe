import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IOrder } from 'src/app/shared/interfaces/order.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  @Input() order!: IOrder;
  @Input() isAdmin!: boolean | null;
  @Output() cancelOrder = new EventEmitter();
  @Output() changeOrderStatus = new EventEmitter();

  totalCost!: number;
  statusControl = new FormControl('');
  statusOptions = [
    { value: 'регистрирана', viewValue: 'Регистрирана' },
    { value: 'обработена', viewValue: 'Обработена' },
    { value: 'изпълнена', viewValue: 'Изпълнена' },
    { value: 'анулирана', viewValue: 'Анулирана' },
  ];

  ngOnInit() {
    this.totalCost = this.order.products.reduce(
      (acc, curr) => acc + curr.price,
      0
    );
  }
}
