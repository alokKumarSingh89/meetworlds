import { Action } from '@ngrx/store';

import { UserDTO } from '@app/models/auth.model';
import { User } from '@app/models/user.model';
export enum AuthActionType {
    LOGIN_USER = '[Auth] Login User',
    REGISTER_USER = '[AUTH] Register User',
    SET_CURRENT_USER = '[Auth] Set Current User',
    SET_INTIAL_USER = '[Auth] Set Initial User',
    GET_WHO_IM = '[Auth] GET_WHO_IM'
}

export class LoginUser implements Action{
    readonly type = AuthActionType.LOGIN_USER;
    constructor(public payload:UserDTO){};
}
export class RegisterUser implements Action{
    readonly type = AuthActionType.REGISTER_USER;
    constructor(public payload:UserDTO){};
}
export class SetInitialUser implements Action{
    readonly type = AuthActionType.SET_INTIAL_USER;
    constructor(public payload:UserDTO){};
}
export class SetCurrentUser implements Action{
    readonly type = AuthActionType.SET_CURRENT_USER;
    constructor(public payload:User){};
}
export class GetWhoIm implements Action{
    readonly type = AuthActionType.GET_WHO_IM;
    constructor(){};
}
export type Action = LoginUser | RegisterUser | SetCurrentUser | SetInitialUser|GetWhoIm;
