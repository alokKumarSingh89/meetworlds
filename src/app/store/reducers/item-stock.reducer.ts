import {ItemStockAction,ItemStockType} from "../actions/item-stock.action";

export interface ItemStockStore {
	stock: object;
	status:string
}
const initialState: ItemStockStore = {
	stock: null,
	status:null
};

export const itemStockReducer: (state: ItemStockStore, action: ItemStockAction) => ItemStockStore = (
  state = initialState,
  action: ItemStockAction
) => {
  switch (action.type) {
    case ItemStockType.ITEM_STOCK_CREATE_SUCCESS:
			return {...state,status: "Success"};
		case ItemStockType.INDEX_STOCK_SUCCESS:
			return {...state,stock: action.payload};
		case ItemStockType.ITEM_STOCK_STATUS_UPDATE:
      return { ...state, status:null};
    default:
      return state;
  }
};
