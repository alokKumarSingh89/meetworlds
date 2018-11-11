import { StoreModel } from "@app/models/store.model";
import { Action, BranchActionType } from "../actions/branch.action";
export interface BranchState {
  branchs: StoreModel;
}
const initialState: BranchState = {
  branchs: {
    store: [{ value: "Meat World", id: 1 }],
    currentStore: { value: "Meat World", id: 1 },
    branchs: [],
    currentBranch: "" as any
  }
};

export const branchReducer: (
  state: BranchState,
  action: Action
) => BranchState = (state = initialState, action: Action) => {
  switch (action.type) {
    case BranchActionType.BRANCH_SUCCESS:
      state.branchs.branchs = action.payload as any;
      return { ...state};
    case BranchActionType.UPDATE_BRANCH:
      return {...state};
    default:
      return state;
  }
};
