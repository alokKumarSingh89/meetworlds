import {Action} from '@ngrx/store';

export enum ErrorActionType {
    ADD_ERROR = '[ERROR] Add Error',
    REMOVE_ERROR = '[ERROR] Remove Error'
}

export class AddError implements Action{
    readonly type = ErrorActionType.ADD_ERROR;
    constructor(public payload:any){}
}
export class RemoveError implements Action{
    readonly type = ErrorActionType.REMOVE_ERROR;
    constructor(){}
}
export type Action = AddError | RemoveError;