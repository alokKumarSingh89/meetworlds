import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store, Action } from "@ngrx/store";
import { AppState } from "../app-store.module";
import { Observable,of } from "rxjs";
import { ItemRequest, ItemActionType, ItemSuccess } from "../actions/items.action";
import { tap, mergeMap, map, catchError, } from "rxjs/operators";
import { RemoveError } from "../actions/errors.action";
import { ItemDTO } from "@app/models/items.model";
import {AddError} from '@app/store/actions/errors.action'
import {ApiService} from "@app/auth/api.service";
import API_URL from "@app/constants/UrlConstant";
@Injectable()
export class ItemEffect {
  constructor(
    private _action: Actions,
    private _service: ApiService,
    private _store: Store<AppState>
  ) {}

  @Effect()
  fetchItem:Observable<Action> = this._action.pipe(
      ofType<ItemRequest>(ItemActionType.ITEM_REQUEST),
      tap(()=>this._store.dispatch(new RemoveError())),
      mergeMap((action:ItemRequest)=>this._service.index(API_URL.Item.GETALL).pipe(
          map((item:ItemDTO)=>new ItemSuccess(item)),
          catchError(err=>of(new AddError(err)))
      ))
  )
}
