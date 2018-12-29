import { StoreModel } from "@app/models/store.model";
import { Action, BranchActionType } from "../actions/branch.action";
export interface BranchState {
  branches: StoreModel;
  status:{
    message:string;
    type:string;
  }
}
const initialState: BranchState = {
  branches: {
    currentBranch: "",
    branchList: []
  },
  status:null
};

export const branchReducer: (
  state: BranchState,
  action: Action
) => BranchState = (state = initialState, action: Action) => {
  switch (action.type) {
    case BranchActionType.BRANCH_SUCCESS:
      let arr = [];
      if (Array.isArray(action.payload)) {
        arr = action.payload;
      } else {
        arr.push(action.payload)
      }
      state.branches.branchList = arr;
      state.branches.currentBranch = arr[0];
      return { ...state,status:null };
    case BranchActionType.UPDATE_BRANCH:
      state.branches.currentBranch = action.payload;
      return { ...state };
    case BranchActionType.DELETE_BRANCH_SUCCESS:
      let currentBranchList = state.branches.branchList.filter(branch => branch.id !== action.id);
      state.branches.branchList = currentBranchList;
      return { ...state }
    case BranchActionType.CREATE_BRANCH_REQUEST:
      return { ...state,status:{message:null,type:'REQUEST'} }
    case BranchActionType.CREATE_BRANCH_SUCCESS:
      state.branches.branchList.push(action.payload)
      return { ...state,status:{message:"Successfully created",type:'SUCCESS'} }
    case BranchActionType.CREATE_BRANCH_FAILURE:
      return { ...state,status:{message:"There is some problem",type:'ERROR'} }
    default:
      return state;
  }
};
