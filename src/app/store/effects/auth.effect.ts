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
  RegisterUser,
  GetWhoIm,
  CreateUser,
  CreateUserSuccess,
  FetchAllUser,
  FetchAllUserSuccess
} from "../actions/auth.action";
import { User } from "@app/models/user.model";
import { AuthService } from "@app/auth/auth.service";
import { AddError, RemoveError } from "@app/store/actions/errors.action";
import { AppState } from "../app-store.module";
import { ApiService } from "@app/auth/api.service";

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private _authService: AuthService,
    private _api:ApiService,
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
  @Effect()
  whoIam$: Observable<Action> = this.action$.pipe(
    ofType<GetWhoIm>(AuthActionType.GET_WHO_IM),
    tap(() => this._store.dispatch(new RemoveError())),
    mergeMap((action: GetWhoIm) =>
      this._authService.whoami().pipe(
        map((user: User) => new SetCurrentUser(user)),
        catchError(err => of(new AddError(err)))
      )
    )
  );
  @Effect()
  createUser$: Observable<Action> = this.action$.pipe(
    ofType<CreateUser>(AuthActionType.CREATE_USER),
    tap(() => this._store.dispatch(new RemoveError())),
    mergeMap((action: CreateUser) =>
      this._api.create(action.url,action.formData).pipe(
        map((store:any)=>new CreateUserSuccess(store)),
        catchError(err => of(new AddError(err)))
      )
    )
  );
  @Effect()
  loadUser$: Observable<Action> = this.action$.pipe(
    ofType<FetchAllUser>(AuthActionType.LOAD_ALL_USER),
    tap(() => this._store.dispatch(new RemoveError())),
    mergeMap((action: FetchAllUser) =>
      this._api.index(action.url).pipe(
        map((store:any)=>new FetchAllUserSuccess(store)),
        catchError(err => of(new AddError(err)))
      )
    )
  );
}
