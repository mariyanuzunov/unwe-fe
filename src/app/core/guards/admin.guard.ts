import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, skipWhile } from 'rxjs/operators';
import { AuthSelectors } from 'src/app/auth/state';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(AuthSelectors.selectAuthUser).pipe(
      skipWhile((v) => v === undefined),
      map((user) => {
        if (user && user.role == 'admin') {
          return true;
        }

        this.router.navigateByUrl('/login');
        return false;
      })
    );
  }
}
