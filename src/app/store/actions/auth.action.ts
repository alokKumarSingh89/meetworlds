import { Action } from '@ngrx/store';

import { UserDTO } from '@app/models/auth.model';
import { User } from '@app/models/user.model';
export enum AuthActionType {
    LOGIN_USER = '[Auth] Login User',
    REGISTER_USER = '[AUTH] Register User',
    SET_CURRENT_USER = '[Auth] Set Current User',
    SET_INTIAL_USER = '[Auth] Set Initial User',
    GET_WHO_IM = '[Auth] GET_WHO_IM',
    CREATE_USER = '[USER] create new user',
    CREATE_USER_SUCCESS = '[USER] new user created',
    LOAD_ALL_USER = '[USER] make request to load all users',
    LOAD_ALL_USER_SUCCESS = '[USER] all users loaded'
}

export class LoginUser implements Action {
    readonly type = AuthActionType.LOGIN_USER;
    constructor(public payload: UserDTO) { };
}
export class RegisterUser implements Action {
    readonly type = AuthActionType.REGISTER_USER;
    constructor(public payload: UserDTO) { };
}
export class SetInitialUser implements Action {
    readonly type = AuthActionType.SET_INTIAL_USER;
    constructor(public payload: UserDTO) { };
}
export class SetCurrentUser implements Action {
    readonly type = AuthActionType.SET_CURRENT_USER;
    constructor(public payload: User) { };
}
export class GetWhoIm implements Action {
    readonly type = AuthActionType.GET_WHO_IM;
    constructor() { };
}
export class CreateUser implements Action {
    readonly type = AuthActionType.CREATE_USER;
    constructor(public url: string, public formData: any) { }
}
export class CreateUserSuccess implements Action {
    readonly type = AuthActionType.CREATE_USER_SUCCESS;
    constructor(public payload: any) { }
}
export class FetchAllUser implements Action {
    readonly type = AuthActionType.LOAD_ALL_USER;
    constructor(public url: string) { }
}
export class FetchAllUserSuccess implements Action {
    readonly type = AuthActionType.LOAD_ALL_USER_SUCCESS;
    constructor(public payload: any) { }
}
export type Action = FetchAllUserSuccess | LoginUser | FetchAllUser | RegisterUser | SetCurrentUser | SetInitialUser | GetWhoIm | CreateUser | CreateUserSuccess;
