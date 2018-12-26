import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule, ActionReducerMap } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { errorReducer, ErrorState } from "@app/store/reducers/errors.reducer";
import { AuthState, authReducer } from "./reducers/auth.reducer";
import { AuthEffects } from "./effects/auth.effect";
import { BranchState, branchReducer } from "./reducers/branch.reducer";
import { BranchEffect } from "./effects/branch.effect";
import { ItemStore, itemReducer } from "./reducers/items.reducer";
import { ItemEffect } from "./effects/items.effect";
import { organisationReducer, OrganisationStore } from "./reducers/organisation.reducer";

export interface AppState {
  error: ErrorState;
  auth: AuthState;
  branch: BranchState;
  items: ItemStore;
  organisation:OrganisationStore

}
export const reducers: ActionReducerMap<AppState> = {
  error: errorReducer,
  auth: authReducer,
  branch: branchReducer,
  items: itemReducer,
  organisation:organisationReducer
};

export const effects = [AuthEffects, BranchEffect, ItemEffect];
@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument()
  ],
  declarations: []
})
export class AppStoreModule {}
