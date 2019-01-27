import {ReceiveActionType,Action} from "../actions/receive.action";

export interface ReceiveStore {
	Receive: any;
	status: any
}
const initialState: ReceiveStore={
	Receive: [],
	status: null
};
export const receiveReducer: (
	state: ReceiveStore,
	action: Action
) => ReceiveStore=(state=initialState,action: Action) => {
	switch (action.type) {
		case ReceiveActionType.RECEIVE_CREATE_SUCCESS:
			state.status='Success';
			return {...state};
		case ReceiveActionType.RECEIVE_LOAD_SUCCESS:
			state.Receive=action.payload;
			return {...state};
		case ReceiveActionType.RECEIVE_LOAD_REQUEST:
			state.Receive=null;
			return {...state};
		case ReceiveActionType.UPDATE_RECEIVE_STATUS:
			state.status=null;
			return {...state};
		default:
			return state;
	}
};
