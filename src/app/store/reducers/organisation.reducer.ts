import {Organisation} from "@app/models/organisation.model";
import {OrganisationActionType,Action} from "../actions/organisation.action";

export interface OrganisationStore {
	organisation: Organisation;
	status: any
}
const initialState: OrganisationStore={
	organisation: null,
	status: null
};
export const organisationReducer: (
	state: OrganisationStore,
	action: Action
) => OrganisationStore=(state=initialState,action: Action) => {
	switch (action.type) {
		case OrganisationActionType.ORGANISATION_FETCH_SUCCESS:
			state.organisation=action.payload[0];
			return {...state};
		case OrganisationActionType.ORGANISATION_CREATE_SUCCESS:
			state.organisation=action.payload;
			state.status="Success";
			return {...state};
		case OrganisationActionType.ORGANISATION_STATUS_CHANGE:
			state.status=null;
			return {...state};
		default:
			return state;
	}
};
