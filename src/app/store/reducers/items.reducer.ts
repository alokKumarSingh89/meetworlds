import { ItemDTO } from "@app/models/items.model";
import { Action, ItemActionType } from "../actions/items.action";

export interface ItemStore {
  items: ItemDTO;
}
const initialState: ItemStore = {
  items: null
};

export const itemReducer: (state: ItemStore, action: Action) => ItemStore = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case ItemActionType.ITEM_SUCCESS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
