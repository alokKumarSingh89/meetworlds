import {PurchaseActionType,Action} from "../actions/purchase.action";

export interface PurchaseStore {
	Purchase: any;
	status: any
}
const initialState: PurchaseStore={
	Purchase: [],
	status: null
};
export const purchaseReducer: (
	state: PurchaseStore,
	action: Action
) => PurchaseStore=(state=initialState,action: Action) => {
	switch (action.type) {
		case PurchaseActionType.PURCHASE_CREATE_SUCCESS:
			state.Purchase.push(action.payload);
			state.status='Success';
			return {...state};
		case PurchaseActionType.PURCHASE_LOAD_SUCCESS:
			state.Purchase  = action.payload;
			return {...state};
		case PurchaseActionType.UPDATE_PURCHASE_STATUS:
			state.status=null;
			return {...state};
		default:
			return state;
	}
};
