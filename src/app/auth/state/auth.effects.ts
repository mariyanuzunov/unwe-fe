import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthActions } from './';
import { AuthService } from '../auth.service';
import { EMPTY, of, pipe } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  authStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.checkAuthStatus),
      switchMap(() =>
        of(localStorage.getItem('token')).pipe(
          switchMap((token) => {
            if (!token) {
              return of(AuthActions.notAuthenticated());
            }
            const id: any = token?.split(' ')[1];
            return this.authService.getProfile(id).pipe(
              catchError(() => EMPTY),
              map((user) => {
                if (user) {
                  return AuthActions.authenticated({ user });
                } else {
                  return AuthActions.notAuthenticated();
                }
              })
            );
          })
        )
      )
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap((data) =>
        this.authService
          .login({ email: data.email, password: data.password })
          .pipe(
            map((user) => AuthActions.loginSuccess({ user })),
            tap(({ user }) => {
              localStorage.setItem('token', user.accessToken + ' ' + user._id);
              const redirectUrl =
                this.activatedRoute.snapshot.queryParams.redirectUrl || '/';
              this.router.navigate([redirectUrl]);
            }),
            catchError((error) => of(AuthActions.loginFailure(error)))
          )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      switchMap((user) =>
        this.authService.register(user.data).pipe(
          map(() => AuthActions.registerSuccess()),
          tap(() => this.router.navigate(['/login'])),
          catchError((error) => of(AuthActions.registerFailure(error)))
        )
      )
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          localStorage.clear();
          this.router.navigateByUrl('/');
        })
      ),

    { dispatch: false }
  );
}
