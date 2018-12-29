import { Action } from "@ngrx/store";
import { StoreModel } from "@app/models/store.model";

export enum BranchActionType{
    BRANCH_REQUEST="[BRANCH] Load Branch",
    BRANCH_SUCCESS = "[BRANCH] Branch Success",
    UPDATE_BRANCH = "[BRANCH] Select Branch"

}
export class BranchRequest implements Action{
    readonly type=BranchActionType.BRANCH_REQUEST;
    constructor(public url:any){}
}
export class BranchSuceess implements Action{
    readonly type=BranchActionType.BRANCH_SUCCESS;
    constructor(public payload:StoreModel){}
}
export class UpdateBranch implements Action{
    readonly type = BranchActionType.UPDATE_BRANCH;
    constructor(public payload:string){}
}
export type Action = BranchRequest | BranchSuceess | UpdateBranch;