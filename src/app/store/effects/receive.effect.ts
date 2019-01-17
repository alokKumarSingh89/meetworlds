import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store, Action } from "@ngrx/store";
import { mergeMap, map, catchError, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { AppState } from "../app-store.module";
import { AddError, RemoveError } from "../actions/errors.action";
import { ApiService } from "@app/auth/api.service";
import API_URL from "@app/constants/UrlConstant";
import { CreateReceiveSuccess, CreateReceiveRequest, ReceiveActionType, GetAllReceiveRequest, GetAllReceiveSuccess, UpdateReceiveRequest, UpdateReceiveSuccess } from '@app/store/actions/receive.action'

@Injectable()
export class ReceiveEffect {
    constructor(
        private _action$: Actions,
        private _apiService: ApiService,
        private _store: Store<AppState>
    ) { }

    @Effect()
    createReceive$: Observable<Action> = this._action$.pipe(
        ofType<CreateReceiveRequest>(ReceiveActionType.RECEIVE_CREATE_REQUEST),
        tap(() => this._store.dispatch(new RemoveError())),
        mergeMap((action: CreateReceiveRequest) =>

            this._apiService.create(API_URL.RECEIVE.POST, action.payload, false).pipe(
                map((store: any) => new CreateReceiveSuccess(store)),
                catchError(err => of(new AddError(err)))
            )
        )
    );

    @Effect()
    editReceive$: Observable<Action> = this._action$.pipe(
        ofType<UpdateReceiveRequest>(ReceiveActionType.UPDATE_RECEIVE_REQUEST),
        tap(() => this._store.dispatch(new RemoveError())),
        mergeMap((action: UpdateReceiveRequest) =>

            this._apiService.update(`${API_URL.RECEIVE.PUT}${action.payload.id}`, action.payload, false).pipe(
                map((store: any) => new UpdateReceiveSuccess(store)),
                catchError(err => of(new AddError(err)))
            )
        )
    );

    @Effect()
    loadReceive$: Observable<Action> = this._action$.pipe(
        ofType<GetAllReceiveRequest>(ReceiveActionType.RECEIVE_LOAD_REQUEST),
        tap(() => this._store.dispatch(new RemoveError())),
        mergeMap((action: GetAllReceiveRequest) =>
            this._apiService.index(`${API_URL.RECEIVE.GETALL}${action.branch_id}`).pipe(
                map((store: any) => new GetAllReceiveSuccess(store)),
                catchError(err => of(new AddError(err)))
            )
        )
    );
}
