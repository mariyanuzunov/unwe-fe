import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<IAuthState>('auth');

export const selectAuthUser = createSelector(
  selectAuthState,
  (state: IAuthState) => state.user
);

export const selectAuthLoggedIn = createSelector(
  selectAuthState,
  (state: IAuthState) => !!state.user
);

export const selectAuthIsAdmin = createSelector(
  selectAuthState,
  (state: IAuthState) => state.user?.role == 'admin'
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state: IAuthState) => state.error
);

export const selectAuthLoading = createSelector(
  selectAuthState,
  (state: IAuthState) => state.loading
);
