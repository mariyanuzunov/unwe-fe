import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthSelectors } from 'src/app/auth/state';
import { CreateOrderDto } from 'src/app/orders/dto/create-order.dto';
import { OrderActions } from 'src/app/orders/state';
import { IDoor } from 'src/app/shared/interfaces/door.interface';
import { IUser } from 'src/app/shared/interfaces/user.interface';
import { CartActions, CartSelectors } from '../../state';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  items!: IDoor[] | [];
  totalCost$!: Observable<number>;
  user!: IUser | null | undefined;
  checkoutForm!: FormGroup;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.store
      .select(CartSelectors.selectCartItems)
      .subscribe((v) => (this.items = v));
    this.totalCost$ = this.store.select(CartSelectors.selectCartTotalCost);
    this.store
      .select(AuthSelectors.selectAuthUser)
      .subscribe((v) => (this.user = v));

    this.checkoutForm = this.fb.group({
      shippingAddress: ['', [Validators.required]],
    });
  }

  removeItemHandler(id: string) {
    this.store.dispatch(CartActions.removeItemFromCart({ id }));
  }

  checkoutHandler() {
    const shippingAddress = this.checkoutForm.value.shippingAddress;
    const products = this.items.map((p) => p._id);
    if (this.user) {
      const data: CreateOrderDto = {
        customer: this.user._id,
        products,
        shippingAddress,
      };
      this.store.dispatch(OrderActions.createOrder({ data }));

      const notificationRef = this._snackBar.open(
        'Вашата поръчкава е изпратена успешно!',
        '',
        {
          duration: 2500,
        }
      );

      notificationRef.afterDismissed().subscribe(() => {
        this.router.navigateByUrl('/');
      });
    }
  }
}
