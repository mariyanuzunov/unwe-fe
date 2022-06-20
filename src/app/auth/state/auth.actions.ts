import { createAction, props, union } from '@ngrx/store';
import { IAuthError } from '../../shared/interfaces/auth-error.interface';
import { IUser } from '../../shared/interfaces/user.interface';
import { LoginUserDto } from '../dto/login-user.dto';
import { RegisterUserDto } from '../dto/register-user.dto';

// Auth Status

export const checkAuthStatus = createAction(
  '[AUTH] Check Authentication Status'
);

export const authenticated = createAction(
  '[AUTH] Authenticated',
  props<{ user: IUser }>()
);

export const notAuthenticated = createAction('[AUTH] Not Authenticated');

// Login Actions

export const login = createAction(
  '[AUTH] Login',
  props<{ email: string; password: string }>()
  //   props<{ data: LoginUserDto }>()
);

export const loginSuccess = createAction(
  '[AUTH] Login Success',
  props<{ user: IUser }>()
);

export const loginFailure = createAction(
  '[AUTH] Login Failure',
  props<{ error: IAuthError }>()
);

export const loginRedirect = createAction('[Auth] Login Redirect');

// Register Actions

export const register = createAction(
  '[AUTH] Register',
  props<{ data: RegisterUserDto }>()
);

export const registerSuccess = createAction('[AUTH] Register Success');

export const registerFailure = createAction(
  '[AUTH] Register Failure',
  props<{ error: IAuthError }>()
);

export const registerRedirect = createAction('[Auth] Register Redirect');

// Logout Actions

export const logout = createAction('[AUTH] Logout');

const all = union({
  authenticated,
  login,
  loginSuccess,
  loginFailure,
  loginRedirect,
  register,
  registerSuccess,
  registerFailure,
  registerRedirect,
  logout,
});

export type AuthActionsUnion = typeof all;
