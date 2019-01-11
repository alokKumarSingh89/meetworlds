import {SupplierActionType,Action} from "../actions/supplier.action";

export interface SupplierStore {
	supplier: any;
	status: any
}
const initialState: SupplierStore={
	supplier: [],
	status: null
};
export const supplierReducer: (
	state: SupplierStore,
	action: Action
) => SupplierStore=(state=initialState,action: Action) => {
	switch (action.type) {
		case SupplierActionType.SUPPLIER_CREATE_SUCCESS:
			state.supplier.push(action.payload);
			state.status='Success';
			return {...state};
		case SupplierActionType.SUPPLIER_LOAD_SUCCESS:
			state.supplier = action.payload;
			state.status=null;
			return {...state};
		case SupplierActionType.UPDATE_SUPPLIER_SUCCESS:
		 let index = state.supplier.findIndex(x => x.id==action.payload.id);
			state.supplier[index] = action.payload;
			state.status=null;
			return {...state};
		default:
			state.status=null;
			return state;
	}
};
