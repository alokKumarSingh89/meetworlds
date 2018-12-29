import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { map, take, tap } from 'rxjs/operators';
import { AppState } from '@app/store/app-store.module';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private _store: Store<AppState>) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let user$ = this._store.pipe(select(state => state.auth.user));
    return combineLatest(user$).pipe(
      map((data) => {
        if (data && data[0]) {
          let user = data[0]
          return user.user_role === next.data.role;
        }else{
          return false;
        }
      })
    )

  }
}
