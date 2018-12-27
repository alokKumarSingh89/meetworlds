import { Organisation } from "@app/models/organisation.model";
import { Action, ItemActionType } from "../actions/items.action";

export interface OrganisationStore {
  organisation: Organisation;
}
const initialState: OrganisationStore = {
  organisation: {
    id: 14,
    name: "Meatmart",
    address1: "Building No-18",
    address2: "Bangalore",
    address3: "Karnataka",
    pincode: "560026",
    phone: null,
    mobile: "9999000015",
    email_id: "meatmart@gmail.com",
    gstin: "22AAAAA0000A1Z5",
    timing: "9am to 9pm",
    logo_path: "14.jpeg"
  }
};
export const organisationReducer: (
  state: OrganisationStore,
  action: Action
) => OrganisationStore = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
