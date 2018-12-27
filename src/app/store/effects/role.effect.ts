import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store, Action } from "@ngrx/store";
import { mergeMap, map, catchError, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { StoreModel } from "@app/models/store.model";
import { AppState } from "../app-store.module";
import { LoadRole, RoleActionType, RoleLoadedSuccess } from "../actions/role.action";
import { AddError, RemoveError } from "../actions/errors.action";
import { ApiService } from "@app/auth/api.service";
import API_URL from "@app/constants/UrlConstant";

@Injectable()
export class RoleEffect {
  constructor(
    private _action$: Actions,
    private _apiService:ApiService ,
    private _store: Store<AppState>
  ) {}

  @Effect()
  fetchRole$: Observable<Action> = this._action$.pipe(
    ofType<LoadRole>(RoleActionType.ROLE_LIST),
    tap(()=>this._store.dispatch(new RemoveError())),
    mergeMap((action: LoadRole) => this._apiService.index(API_URL.USER.ROLE).pipe(
        map((store:any)=>new RoleLoadedSuccess(store)),
        catchError(err=>of(new AddError(err)))
    ))
  );
}
