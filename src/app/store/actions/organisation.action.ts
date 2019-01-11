import {Action} from "@ngrx/store";

export enum OrganisationActionType {
	ORGANISATION_FETCH_REQUEST="[Organisation] Fetch data from server",
	ORGANISATION_FETCH_SUCCESS="[Organisation] Successfuly loaded ORGANISATION",
	ORGANISATION_CREATE_REQUEST="[Organisation] Create ORGANISATION request",
	ORGANISATION_CREATE_SUCCESS="[Organisation] ORGANISATION created successfuly",
	ORGANISATION_STATUS_CHANGE="[Organisation] ORGANISATION status changes"
}
export class LoadOrganisation implements Action {
	readonly type=OrganisationActionType.ORGANISATION_FETCH_REQUEST;
	constructor() {}
}
export class OrganisationLoadedSuccess implements Action {
	readonly type=OrganisationActionType.ORGANISATION_FETCH_SUCCESS;
	constructor(public payload: any) {}
}
export class OrganisationCreateRequest implements Action {
	readonly type=OrganisationActionType.ORGANISATION_CREATE_REQUEST;
	constructor(public data: any,public status: boolean) {}
}
export class OrganisationCreateSucess implements Action {
	readonly type=OrganisationActionType.ORGANISATION_CREATE_SUCCESS;
	constructor(public payload: any) {}
}
export class OrganisationChangeStatus implements Action {
	readonly type=OrganisationActionType.ORGANISATION_STATUS_CHANGE;
	constructor() {}
}
export type Action=OrganisationChangeStatus|OrganisationCreateSucess|OrganisationCreateRequest|LoadOrganisation|OrganisationLoadedSuccess;
