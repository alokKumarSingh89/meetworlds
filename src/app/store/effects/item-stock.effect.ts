import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store, Action } from "@ngrx/store";
import { mergeMap, map, catchError, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { AppState } from "../app-store.module";
import { AddError, RemoveError } from "../actions/errors.action";
import { ApiService } from "@app/auth/api.service";
import API_URL from "@app/constants/UrlConstant";
import {ItemStockCreateRequest, ItemStockType, ItemStockCreateSuccess, IndexStockRequest, IndexStockSuccess} from "../actions/item-stock.action";

@Injectable()
export class ItemStockEffect {
  constructor(
    private _action$: Actions,
    private _apiService:ApiService ,
    private _store: Store<AppState>
  ) {}

  @Effect()
  moveReceivedIntoStock$: Observable<Action> = this._action$.pipe(
    ofType<ItemStockCreateRequest>(ItemStockType.ITEM_STOCK_CREATE_REQUEST),
    tap(()=>this._store.dispatch(new RemoveError())),
    mergeMap((action: ItemStockCreateRequest) => this._apiService.create(API_URL.ITEM_STOCK.POST,action.payload).pipe(
        map((store:any)=>new ItemStockCreateSuccess(store)),
        catchError(err=>of(new AddError(err)))
    ))
	);
	@Effect()
  loadAllStock$: Observable<Action> = this._action$.pipe(
    ofType<IndexStockRequest>(ItemStockType.INDEX_STOCK_REQUEST),
    tap(()=>this._store.dispatch(new RemoveError())),
    mergeMap((action: IndexStockRequest) => this._apiService.index(API_URL.ITEM_STOCK.GETALL+"/"+action.payload).pipe(
        map((store:any)=>new IndexStockSuccess(store)),
        catchError(err=>of(new AddError(err)))
    ))
  );
}
