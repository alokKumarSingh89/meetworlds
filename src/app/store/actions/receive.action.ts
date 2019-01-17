import { Action } from "@ngrx/store";

export enum ReceiveActionType {
    RECEIVE_CREATE_REQUEST = "[RECEIVE] create request",
    RECEIVE_CREATE_SUCCESS = "[RECEIVE] created successfuly",
    RECEIVE_LOAD_REQUEST = "[RECEIVE] making request to load all RECEIVE",
    RECEIVE_LOAD_SUCCESS = "[RECEIVE] All RECEIVE loaded successfully",
    UPDATE_RECEIVE_REQUEST = "[RECEIVE] update request",
    UPDATE_RECEIVE_SUCCESS = "[RECEIVE] update successfully",
    UPDATE_RECEIVE_STATUS = "[RECEIVE] update status"
}
export class CreateReceiveRequest implements Action {
    readonly type = ReceiveActionType.RECEIVE_CREATE_REQUEST;
    constructor(public payload: any) { }
}
export class CreateReceiveSuccess implements Action {
    readonly type = ReceiveActionType.RECEIVE_CREATE_SUCCESS;
    constructor(public payload: any) { }
}
export class GetAllReceiveRequest implements Action {
    readonly type = ReceiveActionType.RECEIVE_LOAD_REQUEST;
    constructor(public branch_id: string) { }
}
export class GetAllReceiveSuccess implements Action {
    readonly type = ReceiveActionType.RECEIVE_LOAD_SUCCESS;
    constructor(public payload: any) { }
}
export class UpdateReceiveRequest implements Action {
    readonly type = ReceiveActionType.UPDATE_RECEIVE_REQUEST;
    constructor(public payload: any) { }
}
export class UpdateReceiveSuccess implements Action {
    readonly type = ReceiveActionType.UPDATE_RECEIVE_SUCCESS;
    constructor(public payload: any) { }
}
export class UpdateReceiveStatus implements Action {
    readonly type = ReceiveActionType.UPDATE_RECEIVE_STATUS;
    constructor() { }
}


export type Action = UpdateReceiveStatus | UpdateReceiveSuccess | UpdateReceiveRequest | GetAllReceiveRequest | GetAllReceiveSuccess | CreateReceiveRequest | CreateReceiveSuccess
