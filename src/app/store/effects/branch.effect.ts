import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { StoreService } from "@app/dashboard/store/store.service";
import { Store, Action } from "@ngrx/store";
import { AppState } from "../app-store.module";
import { Observable, of } from "rxjs";
import { BranchRequest, BranchActionType, BranchSuceess } from "../actions/branch.action";
import { mergeMap, map, catchError, tap } from "rxjs/operators";
import { StoreModel } from "@app/models/store.model";
import { AddError, RemoveError } from "../actions/errors.action";
import { ApiService } from "@app/auth/api.service";

@Injectable()
export class BranchEffect {
  constructor(
    private _action$: Actions,
    private _api: ApiService,
    private _store: Store<AppState>
  ) {}

  @Effect()
  fetchBranch$: Observable<Action> = this._action$.pipe(
    ofType<BranchRequest>(BranchActionType.BRANCH_REQUEST),
    tap(()=>this._store.dispatch(new RemoveError())),
    mergeMap((action: BranchRequest) => this._api.index(action.url).pipe(
        map((store:StoreModel)=>new BranchSuceess(store)),
        catchError(err=>of(new AddError(err)))
    ))
  );
}
