import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ReviewActions } from '.';
import { ReviewService } from '../review.service';

@Injectable()
export class ReviewEffects {
  constructor(
    private actions$: Actions,
    private reviewService: ReviewService
  ) {}

  itemReviews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReviewActions.fetchItemReviews),
      switchMap((action) =>
        this.reviewService.getItemReviews(action.itemId).pipe(
          map((reviews) => ReviewActions.fetchItemReviewsSuccess({ reviews })),
          catchError((error) =>
            of(ReviewActions.fetchItemReviewsFailure({ error }))
          )
        )
      )
    )
  );

  userReviews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReviewActions.fetchUserReviews),
      switchMap(() =>
        this.reviewService.getUserReviews().pipe(
          map((reviews) => ReviewActions.fetchUserReviewsSuccess({ reviews })),
          catchError((error) =>
            of(ReviewActions.fetchUserReviewsFailure({ error }))
          )
        )
      )
    )
  );

  allReviews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReviewActions.fetchAllReviews),
      switchMap(() =>
        this.reviewService.getAllReviews().pipe(
          map((reviews) => ReviewActions.fetchAllReviewsSuccess({ reviews })),
          catchError((error) =>
            of(ReviewActions.fetchAllReviewsFailure({ error }))
          )
        )
      )
    )
  );

  createReview$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReviewActions.createReview),
      switchMap((action) =>
        this.reviewService.createReview(action.data).pipe(
          map((review) => ReviewActions.createReviewSuccess({ review })),
          catchError((error) =>
            of(ReviewActions.createReviewFailure({ error }))
          )
        )
      )
    )
  );

  deleteReview$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReviewActions.deleteReview),
      switchMap((action) =>
        this.reviewService.deleteReview(action.reviewId).pipe(
          map(
            (review) =>
              ReviewActions.deleteReviewSuccess({
                deletedId: String(review._id),
              }),
            catchError((error) =>
              of(ReviewActions.deleteReviewFailure({ error }))
            )
          )
        )
      )
    )
  );
}
