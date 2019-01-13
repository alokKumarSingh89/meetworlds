import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store, Action } from "@ngrx/store";
import { mergeMap, map, catchError, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { AppState } from "../app-store.module";
import { AddError, RemoveError } from "../actions/errors.action";
import { ApiService } from "@app/auth/api.service";
import API_URL from "@app/constants/UrlConstant";
import { CreatePurchaseSuccess, CreatePurchaseRequest, PurchaseActionType, GetAllPurchaseRequest, GetAllPurchaseSuccess, UpdatePurchaseRequest, UpdatePurchaseSuccess } from '@app/store/actions/purchase.action'

@Injectable()
export class PurchaseEffect {
    constructor(
        private _action$: Actions,
        private _apiService: ApiService,
        private _store: Store<AppState>
    ) { }

    @Effect()
    createPurchase$: Observable<Action> = this._action$.pipe(
        ofType<CreatePurchaseRequest>(PurchaseActionType.PURCHASE_CREATE_REQUEST),
        tap(() => this._store.dispatch(new RemoveError())),
        mergeMap((action: CreatePurchaseRequest) =>

            this._apiService.create(API_URL.PURCHASE.POST, action.payload, false).pipe(
                map((store: any) => new CreatePurchaseSuccess(store)),
                catchError(err => of(new AddError(err)))
            )
        )
    );
    @Effect()
    getAllPurchase$: Observable<Action> = this._action$.pipe(
        ofType<GetAllPurchaseRequest>(PurchaseActionType.PURCHASE_LOAD_REQUEST),
        tap(() => this._store.dispatch(new RemoveError())),
        mergeMap((action: GetAllPurchaseRequest) =>
            this._apiService.index(`${API_URL.PURCHASE.GETALL}/${action.branch_id}`).pipe(
                map((store: any) => new GetAllPurchaseSuccess(store)),
                catchError(err => of(new AddError(err)))
            )
        )
    );
    @Effect()
    updatePurchase$: Observable<Action> = this._action$.pipe(
        ofType<UpdatePurchaseRequest>(PurchaseActionType.UPDATE_PURCHASE_REQUEST),
        tap(() => this._store.dispatch(new RemoveError())),
        mergeMap((action: UpdatePurchaseRequest) =>
            this._apiService.update(`${API_URL.PURCHASE.GETALL}/${action.payload.id}`, action.payload, false).pipe(
                map((store: any) => new UpdatePurchaseSuccess(action.payload)),
                catchError(err => of(new AddError(err)))
            )
        )
    );
}
