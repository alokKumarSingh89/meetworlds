import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router"; // we also need angular router for Nebular to function properly
import {
  NbSidebarModule,
  NbLayoutModule,
  NbSidebarService,
  NbContextMenuModule,
  NbUserModule,
  NbActionsModule,
  NbCardModule,
  NbMenuModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbTabsetModule,
  NbCheckboxModule,
  NbPopoverModule
} from "@nebular/theme";
import { NbSecurityModule, NbRoleProvider } from "@nebular/security";

import { of as observableOf } from "rxjs";
import { DashboardComponent } from "./dashboard.component";
import { HeaderComponent } from "../layout/header/header.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { StoreComponent } from "./store/store.component";

import { AppMatModule } from "../app-mat/app-mat.module";

const NB_MODULES = [
  CommonModule,
  NbCardModule,
  NbLayoutModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbMenuModule.forRoot(),
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NgbModule,
  AppMatModule,
  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: "*"
      },
      user: {
        parent: "guest",
        create: "*",
        edit: "*",
        remove: "*"
      }
    }
  })
];
import { StoreService } from "./store/store.service";
@NgModule({
  imports: [RouterModule, ...NB_MODULES],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    StoreComponent
  ],
  providers: [
    NbSidebarService,
    StoreService,
    {
      provide: NbRoleProvider,
      useValue: {
        getRole: () => {
          return observableOf("guest");
        }
      }
    }
  ]
})
export class DashboardModule {}
