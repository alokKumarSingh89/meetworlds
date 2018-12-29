import { User } from "@app/models/user.model";
import { Action, AuthActionType } from "@app/store/actions/auth.action";

export interface AuthState {
  user: User;
  userList: any;
}
const initialState: AuthState = {
  user: null,
  userList: null
};
export const authReducer: (state: AuthState, action: Action) => AuthState = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case AuthActionType.SET_CURRENT_USER:
      return { ...state, user: action.payload };
    case AuthActionType.CREATE_USER_SUCCESS:
      state.userList.push(action.payload);
      return { ...state }
    case AuthActionType.LOAD_ALL_USER_SUCCESS:
      return { ...state,userList:action.payload }
    default:
      return state;
  }
};
