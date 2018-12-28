import { Action } from "@ngrx/store";

export enum OrganisationActionType {
  ORGANISATION_FETCH_REQUEST = "[Organisation] Fetch data from server",
  ORGANISATION_FETCH_SUCCESS = "[Organisation] Successfuly loaded ORGANISATION"
}
export class LoadOrganisation implements Action {
  readonly type = OrganisationActionType.ORGANISATION_FETCH_REQUEST;
  constructor() {}
}
export class OrganisationLoadedSuccess implements Action {
  readonly type = OrganisationActionType.ORGANISATION_FETCH_SUCCESS;
  constructor(public payload: any) {}
}
export type Action = LoadOrganisation | OrganisationLoadedSuccess;
