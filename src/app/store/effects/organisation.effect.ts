import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store, Action } from "@ngrx/store";
import { mergeMap, map, catchError, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { AppState } from "../app-store.module";
import { AddError, RemoveError } from "../actions/errors.action";
import { ApiService } from "@app/auth/api.service";
import API_URL from "@app/constants/UrlConstant";
import {
  LoadOrganisation,
  OrganisationActionType,
  OrganisationLoadedSuccess,
	OrganisationCreateRequest,
	OrganisationCreateSucess
} from "../actions/organisation.action";

@Injectable()
export class OrganisationEffect {
  constructor(
    private _action$: Actions,
    private _apiService: ApiService,
    private _store: Store<AppState>
  ) {}

  @Effect()
  fetchOrganisation$: Observable<Action> = this._action$.pipe(
    ofType<LoadOrganisation>(OrganisationActionType.ORGANISATION_FETCH_REQUEST),
    tap(() => this._store.dispatch(new RemoveError())),
    mergeMap((action: LoadOrganisation) =>
      this._apiService.index(API_URL.ORGANISATION.GETALL).pipe(
        map((store: any) => new OrganisationLoadedSuccess(store)),
        catchError(err => of(new AddError(err)))
      )
    )
	);
	@Effect()
  createOrganisation$: Observable<Action> = this._action$.pipe(
    ofType<OrganisationCreateRequest>(OrganisationActionType.ORGANISATION_CREATE_REQUEST),
    tap(() => this._store.dispatch(new RemoveError())),
    mergeMap((action: OrganisationCreateRequest) =>
      this._apiService.create(API_URL.ORGANISATION.POST,action.data,action.status).pipe(
        map((store: any) => new OrganisationCreateSucess(store)),
        catchError(err => of(new AddError(err)))
      )
    )
  );
}
