import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { IApiError } from 'src/app/shared/interfaces/api-error.interface';
import { IReview } from 'src/app/shared/interfaces/review.interface';
import { ReviewActions } from '.';

export interface IReviewState {
  reviews: IReview[] | [];
  error: IApiError | null;
  loading: boolean;
}

export const initalState: IReviewState = {
  reviews: [],
  error: null,
  loading: false,
};

export const reviewReducer = createReducer(
  initalState,

  // Create Review Reducers

  on(ReviewActions.createReview, (state) => ({ ...state, loading: true })),

  on(ReviewActions.createReviewSuccess, (state, { review }) => ({
    ...state,
    reviews: [...state.reviews, review],
    error: null,
    loading: false,
  })),

  on(ReviewActions.createReviewFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Fetch Item Reviews Reducers

  on(ReviewActions.fetchItemReviews, (state) => ({
    ...state,
    loading: true,
  })),

  on(ReviewActions.fetchItemReviewsSuccess, (state, { reviews }) => ({
    ...state,
    reviews,
    loading: false,
  })),

  on(ReviewActions.fetchItemReviewsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Fetch User Reviews Reducers
  // TODO

  on(ReviewActions.fetchUserReviews, (state) => ({
    ...state,
    loading: true,
  })),

  on(ReviewActions.fetchUserReviewsSuccess, (state, { reviews }) => ({
    ...state,
    reviews,
    loading: false,
  })),

  on(ReviewActions.fetchUserReviewsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Fetch All Reviews Reducers
  // TODO

  on(ReviewActions.fetchAllReviews, (state) => ({
    ...state,
    loading: true,
  })),

  on(ReviewActions.fetchAllReviewsSuccess, (state, { reviews }) => ({
    ...state,
    reviews,
    loading: false,
  })),

  on(ReviewActions.fetchAllReviewsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Delete Item Review Reducers

  on(ReviewActions.deleteReview, (state) => ({
    ...state,
    loading: true,
  })),

  on(ReviewActions.deleteReviewSuccess, (state, { deletedId }) => ({
    ...state,
    reviews: state.reviews.filter((x) => x._id != deletedId),
    loading: false,
  })),

  on(ReviewActions.deleteReviewFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
