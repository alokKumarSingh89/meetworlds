import { Action } from "@ngrx/store";

export enum RoleActionType{
    ROLE_LIST="[USER] LOAD ROLE",
    ROLE_LIST_SUCCESS="[USER] Successfuly role LOADed"
}
export class LoadRole implements Action{
    readonly type = RoleActionType.ROLE_LIST;
    constructor(){}
}
export class RoleLoadedSuccess implements Action{
    readonly type = RoleActionType.ROLE_LIST_SUCCESS;
    constructor(public payload:any){}
}
export type Action = LoadRole | RoleLoadedSuccess;