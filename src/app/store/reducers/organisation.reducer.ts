import { Organisation } from "@app/models/organisation.model";
import { OrganisationActionType, Action } from "../actions/organisation.action";

export interface OrganisationStore {
  organisation: Organisation;
}
const initialState: OrganisationStore = {
  organisation: null
};
export const organisationReducer: (
  state: OrganisationStore,
  action: Action
) => OrganisationStore = (state = initialState, action: Action) => {
  switch (action.type) {
    case OrganisationActionType.ORGANISATION_FETCH_SUCCESS:
      state.organisation = action.payload[0];
      return { ...state };
    default:
      return state;
  }
};
