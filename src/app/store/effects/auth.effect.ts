import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { mergeMap, map, catchError, tap } from "rxjs/operators";
import {
  SetInitialUser,
  AuthActionType,
  SetCurrentUser,
  LoginUser,
  RegisterUser
} from "../actions/auth.action";
import { User } from "@app/models/user.model";
import { AuthService } from "@app/auth/auth.service";
import { AddError, RemoveError } from "@app/store/actions/errors.action";
import { AppState } from "../app-store.module";

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private _authService: AuthService,
    private _store: Store<AppState>
  ) {}
  @Effect()
  setInitialUser$: Observable<Action> = this.action$.pipe(
    ofType<SetInitialUser>(AuthActionType.SET_INTIAL_USER),
    tap(() => this._store.dispatch(new RemoveError())), //remove the error for new request
    mergeMap((action: SetInitialUser) =>
      this._authService.whoami().pipe(
        map((user: User) => new SetCurrentUser(user)),
        catchError(error => of(new AddError(error)))
      )
    )
  );

  @Effect()
  loginUser$: Observable<Action> = this.action$.pipe(
    ofType<LoginUser>(AuthActionType.LOGIN_USER),
    tap(() => this._store.dispatch(new RemoveError())),
    mergeMap((action: LoginUser) =>
      this._authService.login(action.payload).pipe(
        map((user: User) => new SetCurrentUser(user)),
        catchError(err => of(new AddError(err)))
      )
    )
  );

  @Effect()
  registerUser$: Observable<Action> = this.action$.pipe(
    ofType<RegisterUser>(AuthActionType.REGISTER_USER),
    tap(() => this._store.dispatch(new RemoveError())),
    mergeMap((action: RegisterUser) =>
      this._authService.registration(action.payload).pipe(
        map((user: User) => new SetCurrentUser(user)),
        catchError(err => of(new AddError(err)))
      )
    )
  );
}
