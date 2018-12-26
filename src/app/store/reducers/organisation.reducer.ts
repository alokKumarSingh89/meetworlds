import { Organisation } from "@app/models/organisation.model";
import { Action, ItemActionType } from "../actions/items.action";

export interface OrganisationStore {
  organisation: Organisation;
}
const initialState: OrganisationStore = {
  organisation: {
    id: 11,
    name: "Meatmart",
    address1: "Bangalore",
    address2: null,
    address3: null,
    pincode: "560022",
    phone: null,
    mobile: "9898777744",
    email_id: "meatmart@gmail.com",
    gstin: "22AAAAA0000A1Z6",
    timing: "9am to 9pm",
    logo_path: "11.jpeg"
  }
};

export const organisationReducer: (state: OrganisationStore, action: Action) => OrganisationStore = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
