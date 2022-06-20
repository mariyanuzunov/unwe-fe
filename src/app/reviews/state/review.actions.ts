import { createAction, props, union } from '@ngrx/store';
import { IApiError } from 'src/app/shared/interfaces/api-error.interface';
import { IReview } from 'src/app/shared/interfaces/review.interface';
import { CreateReviewDto } from '../CreateReviewDto';

const NAMESPACE = '[ REVIEW ]';

// Create review

export const createReview = createAction(
  `${NAMESPACE} Create new review`,
  props<{ data: CreateReviewDto }>()
);

export const createReviewSuccess = createAction(
  `${NAMESPACE} Create review Success`,
  props<{ review: IReview }>()
);

export const createReviewFailure = createAction(
  `${NAMESPACE} Create review Failure`,
  props<{ error: IApiError }>()
);

// Fetch ALL reviews

export const fetchAllReviews = createAction(`${NAMESPACE} Fetch all reviews`);

export const fetchAllReviewsSuccess = createAction(
  `${NAMESPACE} Fetch all reviews Success`,
  props<{ reviews: IReview[] }>()
);

export const fetchAllReviewsFailure = createAction(
  `${NAMESPACE} Fetch all reviews Failure`,
  props<{ error: IApiError }>()
);

// Fetch ITEM reviews

export const fetchItemReviews = createAction(
  `${NAMESPACE} Fetch item reviews`,
  props<{ itemId: string }>()
);

export const fetchItemReviewsSuccess = createAction(
  `${NAMESPACE} Fetch item reviews Success`,
  props<{ reviews: IReview[] }>()
);

export const fetchItemReviewsFailure = createAction(
  `${NAMESPACE} Fetch item reviews Failure`,
  props<{ error: IApiError }>()
);

// Fetch USER reviews

export const fetchUserReviews = createAction(`${NAMESPACE} Fetch user reviews`);

export const fetchUserReviewsSuccess = createAction(
  `${NAMESPACE} Fetch User reviews Success`,
  props<{ reviews: IReview[] }>()
);

export const fetchUserReviewsFailure = createAction(
  `${NAMESPACE} Fetch User reviews Failure`,
  props<{ error: IApiError }>()
);

// Delete review

export const deleteReview = createAction(
  `${NAMESPACE} Delete new review`,
  props<{ reviewId: string }>()
);

export const deleteReviewSuccess = createAction(
  `${NAMESPACE} Delete review Success`,
  props<{ deletedId: string }>()
);

export const deleteReviewFailure = createAction(
  `${NAMESPACE} Delete review Failure`,
  props<{ error: IApiError }>()
);

const all = union({
  createReview,
  createReviewSuccess,
  createReviewFailure,
  fetchAllReviews,
  fetchAllReviewsSuccess,
  fetchAllReviewsFailure,
  fetchItemReviews,
  fetchItemReviewsSuccess,
  fetchItemReviewsFailure,
  fetchUserReviews,
  fetchUserReviewsSuccess,
  fetchUserReviewsFailure,
  deleteReview,
  deleteReviewSuccess,
  deleteReviewFailure,
});

export type ReviewActionsUnion = typeof all;
