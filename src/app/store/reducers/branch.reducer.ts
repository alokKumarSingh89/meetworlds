import { StoreModel } from "@app/models/store.model";
import { Action, BranchActionType } from "../actions/branch.action";
export interface BranchState {
  branches: StoreModel;
}
const initialState: BranchState = {
  branches: {
    currentBranch: "",
    branchList: []
  }
};

export const branchReducer: (
  state: BranchState,
  action: Action
) => BranchState = (state = initialState, action: Action) => {
  switch (action.type) {
    case BranchActionType.BRANCH_SUCCESS:
      let arr = [];
      if(Array.isArray(action.payload)){
        arr = action.payload;
      }else{
        arr.push(action.payload)
      }
      state.branches.branchList = arr;
      state.branches.currentBranch = arr[0];
      return { ...state };
    case BranchActionType.UPDATE_BRANCH:
      state.branches.currentBranch = action.payload;
      return { ...state };
    default:
      return state;
  }
};
