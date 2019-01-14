import {Action} from "@ngrx/store";

export enum PurchaseActionType {
	PURCHASE_CREATE_REQUEST="[PURCHASE] create request",
	PURCHASE_CREATE_SUCCESS="[PURCHASE] created successfuly",
	PURCHASE_LOAD_REQUEST="[PURCHASE] making request to load all PURCHASE",
	PURCHASE_LOAD_SUCCESS="[PURCHASE] All PURCHASE loaded successfully",
	UPDATE_PURCHASE_REQUEST="[PURCHASE] update request",
	UPDATE_PURCHASE_SUCCESS="[PURCHASE] update successfully",
	UPDATE_PURCHASE_STATUS="[PURCHASE] update status"
}
export class CreatePurchaseRequest implements Action {
	readonly type=PurchaseActionType.PURCHASE_CREATE_REQUEST;
	constructor(public payload: any) {}
}
export class CreatePurchaseSuccess implements Action {
	readonly type=PurchaseActionType.PURCHASE_CREATE_SUCCESS;
	constructor(public payload: any) {}
}
export class GetAllPurchaseRequest implements Action {
	readonly type=PurchaseActionType.PURCHASE_LOAD_REQUEST;
	constructor(public branch_id: string) {}
}
export class GetAllPurchaseSuccess implements Action {
	readonly type=PurchaseActionType.PURCHASE_LOAD_SUCCESS;
	constructor(public payload: any) {}
}
export class UpdatePurchaseRequest implements Action {
	readonly type=PurchaseActionType.UPDATE_PURCHASE_REQUEST;
	constructor(public payload: any) {}
}
export class UpdatePurchaseSuccess implements Action {
	readonly type=PurchaseActionType.UPDATE_PURCHASE_SUCCESS;
	constructor(public payload: any) {}
}
export class UpdatePurchaseStatus implements Action {
	readonly type=PurchaseActionType.UPDATE_PURCHASE_STATUS;
	constructor() {}
}


export type Action=UpdatePurchaseStatus|UpdatePurchaseSuccess|UpdatePurchaseRequest|GetAllPurchaseRequest|GetAllPurchaseSuccess|CreatePurchaseRequest|CreatePurchaseSuccess
