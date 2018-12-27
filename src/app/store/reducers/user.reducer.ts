
import { Action, RoleActionType } from "../actions/role.action";
export interface RoleState {
  roles: any;
}
const initialState: RoleState = {
  roles:[]
};

export const roleReducer: (
  state: RoleState,
  action: Action
) => RoleState = (state = initialState, action: Action) => {
  switch (action.type) {
    case RoleActionType.ROLE_LIST_SUCCESS:
      state.roles = action.payload;
      return { ...state};
    default:
      return state;
  }
};
