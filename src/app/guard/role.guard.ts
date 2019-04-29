import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { map, take, tap } from 'rxjs/operators';
import { AppState } from '@app/store/app-store.module';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private _store: Store<AppState>,private _router : Router) { }
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
          this._router.navigate(['/dashboard']);
        }
      })
    )

  }
}
