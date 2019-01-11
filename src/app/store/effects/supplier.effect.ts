import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store, Action } from "@ngrx/store";
import { mergeMap, map, catchError, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { AppState } from "../app-store.module";
import { AddError, RemoveError } from "../actions/errors.action";
import { ApiService } from "@app/auth/api.service";
import API_URL from "@app/constants/UrlConstant";
import {CreateSupplierSuccess, CreateSupplierRequest, SupplierActionType, GetAllSupplierRequest, GetAllSupplierSuccess, UpdateSupplierRequest, UpdateSupplierSuccess} from '@app/store/actions/supplier.action'

@Injectable()
export class SupplierEffect {
  constructor(
    private _action$: Actions,
    private _apiService: ApiService,
    private _store: Store<AppState>
  ) {}

  @Effect()
  createSupplier$: Observable<Action> = this._action$.pipe(
    ofType<CreateSupplierRequest>(SupplierActionType.SUPPLIER_CREATE_REQUEST),
    tap(() => this._store.dispatch(new RemoveError())),
    mergeMap((action: CreateSupplierRequest) =>
      this._apiService.create(API_URL.SUPPLIER.POST,action.payload,false).pipe(
        map((store: any) => new CreateSupplierSuccess(store)),
        catchError(err => of(new AddError(err)))
      )
    )
	);
	@Effect()
  getAllSupplier$: Observable<Action> = this._action$.pipe(
    ofType<GetAllSupplierRequest>(SupplierActionType.SUPPLIER_LOAD_REQUEST),
    tap(() => this._store.dispatch(new RemoveError())),
    mergeMap((action: GetAllSupplierRequest) =>
      this._apiService.index(`${API_URL.SUPPLIER.GETALL}/${action.branch_id}`).pipe(
        map((store: any) => new GetAllSupplierSuccess(store)),
        catchError(err => of(new AddError(err)))
      )
    )
	);
	@Effect()
  updateSupplier$: Observable<Action> = this._action$.pipe(
    ofType<UpdateSupplierRequest>(SupplierActionType.UPDATE_SUPPLIER_REQUEST),
    tap(() => this._store.dispatch(new RemoveError())),
    mergeMap((action: UpdateSupplierRequest) =>
      this._apiService.update(`${API_URL.SUPPLIER.GETALL}/${action.payload.id}`,action.payload,false).pipe(
        map((store: any) => new UpdateSupplierSuccess(action.payload)),
        catchError(err => of(new AddError(err)))
      )
    )
	);
}
