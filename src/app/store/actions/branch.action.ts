import { Action } from "@ngrx/store";
import { StoreModel } from "@app/models/store.model";

export enum BranchActionType {
    BRANCH_REQUEST = "[BRANCH] Load Branch",
    BRANCH_SUCCESS = "[BRANCH] Branch Success",
    UPDATE_BRANCH = "[BRANCH] Select Branch",
    DELETE_BRANCH_REQUEST = "[BRANCH] making api call to delete branch",
    DELETE_BRANCH_SUCCESS = "[BRANCH] updating store after deleting branch by api",
    DELETE_BRANCH_FAILURE = "[BRANCH] fail to delete",
    CREATE_BRANCH_REQUEST = "[BRANCH] making api call to create branch",
    CREATE_BRANCH_SUCCESS = "[BRANCH] updating store after branch created by api ",
    CREATE_BRANCH_FAILURE = "[BRANCH] faile to create branch",


}
export class BranchRequest implements Action {
    readonly type = BranchActionType.BRANCH_REQUEST;
    constructor(public url: any) { }
}
export class BranchSuceess implements Action {
    readonly type = BranchActionType.BRANCH_SUCCESS;
    constructor(public payload: StoreModel) { }
}
export class UpdateBranch implements Action {
    readonly type = BranchActionType.UPDATE_BRANCH;
    constructor(public payload: string) { }
}
export class DeleteBranchRequest implements Action {
    readonly type = BranchActionType.DELETE_BRANCH_REQUEST;
    constructor(public url: string, public id: string) { }
}
export class DeleteBranchSuccess implements Action {
    readonly type = BranchActionType.DELETE_BRANCH_SUCCESS;
    constructor(public id: string) { }
}
export class CreateBranchRequest implements Action {
    readonly type = BranchActionType.CREATE_BRANCH_REQUEST;
    constructor(public url: string, public form: any) { }
}
export class CreateBranchSuccess implements Action {
    readonly type = BranchActionType.CREATE_BRANCH_SUCCESS;
    constructor(public payload: any) { }
}
export class DeleteBranchFailure implements Action {
    readonly type = BranchActionType.DELETE_BRANCH_FAILURE;
    constructor(public payload: any) { }
}
export class CreateBranchFailure implements Action {
    readonly type = BranchActionType.CREATE_BRANCH_FAILURE;
    constructor(public payload: any) { }
}
export type Action = CreateBranchFailure | DeleteBranchFailure | CreateBranchRequest | CreateBranchSuccess | BranchRequest | BranchSuceess | UpdateBranch | DeleteBranchRequest | DeleteBranchSuccess;