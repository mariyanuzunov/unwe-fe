import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ReviewActions, ReviewSelectors } from 'src/app/reviews/state';
import { IReview } from 'src/app/shared/interfaces/review.interface';

@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.scss'],
})
export class AllReviewsComponent implements OnInit {
  reviews$!: Observable<IReview[]>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ReviewActions.fetchAllReviews());
    this.reviews$ = this.store.select(ReviewSelectors.selectAllReviews);
  }
}
