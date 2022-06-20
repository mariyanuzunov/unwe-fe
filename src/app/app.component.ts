import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthActions, AuthSelectors } from './auth/state';
import { CartSelectors } from './cart/state';
import { IUser } from './shared/interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user$!: Observable<IUser | null | undefined>;
  cartItemsCount$!: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(AuthActions.checkAuthStatus());
    this.user$ = this.store.select(AuthSelectors.selectAuthUser);
    this.cartItemsCount$ = this.store.select(
      CartSelectors.selectCartItemsCount
    );
  }

  logoutHandler() {
    this.store.dispatch(AuthActions.logout());
  }
}
