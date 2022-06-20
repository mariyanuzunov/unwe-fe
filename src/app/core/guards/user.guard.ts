import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, skipWhile } from 'rxjs/operators';
import { AuthSelectors } from 'src/app/auth/state';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private router: Router, private store: Store) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): boolean | Observable<boolean | UrlTree> {
    const { authenticationRequired, authenticationFailureRedirectUrl } =
      route.data;

    return this.store.pipe(
      select(AuthSelectors.selectAuthUser),
      skipWhile((v) => v === undefined),
      map((user) => {
        const isLoggedIn = !!user;
        if (
          typeof authenticationRequired === 'boolean' &&
          authenticationRequired === isLoggedIn
        ) {
          return true;
        }
        let authRedirectUrl = authenticationFailureRedirectUrl;
        if (authenticationRequired) {
          const loginRedirectUrl = route.url.reduce(
            (acc, s) => `${acc}/${s.path}`,
            ''
          );
          authRedirectUrl += `?redirectUrl=${loginRedirectUrl}`;
        }

        return this.router.parseUrl(authRedirectUrl || '/');
      })
    );
  }
}
