import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthSelectors } from 'src/app/auth/state';
import { OrderActions, OrderSelectors } from 'src/app/orders/state';
import { ReviewActions, ReviewSelectors } from 'src/app/reviews/state';
import { IOrder } from 'src/app/shared/interfaces/order.interface';
import { IReview } from 'src/app/shared/interfaces/review.interface';
import { IUser } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss'],
})
export class UserProfilePageComponent implements OnInit {
  user$!: IUser | null | undefined;
  orders$!: Observable<IOrder[]>;
  reviews$!: Observable<IReview[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(AuthSelectors.selectAuthUser).subscribe((user) => {
      if (user) {
        this.user$ = user;
        this.store.dispatch(OrderActions.fetchUserOrders());
        this.orders$ = this.store.select(OrderSelectors.selectUserOrders);
        this.store.dispatch(ReviewActions.fetchUserReviews());
        this.reviews$ = this.store.select(ReviewSelectors.selectUserReviews);
      }
    });
  }
}
