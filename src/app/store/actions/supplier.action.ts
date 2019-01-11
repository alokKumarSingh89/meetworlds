import {Action} from "@ngrx/store";

export enum SupplierActionType {
	SUPPLIER_CREATE_REQUEST="[SUPPLIER] create request",
	SUPPLIER_CREATE_SUCCESS="[SUPPLIER] created successfuly",
	SUPPLIER_LOAD_REQUEST="[SUPPLIER] making request to load all supplier",
	SUPPLIER_LOAD_SUCCESS="[SUPPLIER] All supplier loaded successfully",
	UPDATE_SUPPLIER_REQUEST="[SUPPLIER] update request",
	UPDATE_SUPPLIER_SUCCESS="[SUPPLIER] update successfully"
}
export class CreateSupplierRequest implements Action {
	readonly type=SupplierActionType.SUPPLIER_CREATE_REQUEST;
	constructor(public payload: any) {}
}
export class CreateSupplierSuccess implements Action {
	readonly type=SupplierActionType.SUPPLIER_CREATE_SUCCESS;
	constructor(public payload:any) {}
}
export class GetAllSupplierRequest implements Action {
	readonly type=SupplierActionType.SUPPLIER_LOAD_REQUEST;
	constructor(public branch_id:string) {}
}
export class GetAllSupplierSuccess implements Action {
	readonly type=SupplierActionType.SUPPLIER_LOAD_SUCCESS;
	constructor(public payload:any) {}
}
export class UpdateSupplierRequest implements Action {
	readonly type=SupplierActionType.UPDATE_SUPPLIER_REQUEST;
	constructor(public payload:any) {}
}
export class UpdateSupplierSuccess implements Action {
	readonly type=SupplierActionType.UPDATE_SUPPLIER_SUCCESS;
	constructor(public payload:any) {}
}


export type Action=UpdateSupplierSuccess|UpdateSupplierRequest|GetAllSupplierRequest|GetAllSupplierSuccess|CreateSupplierRequest|CreateSupplierSuccess
