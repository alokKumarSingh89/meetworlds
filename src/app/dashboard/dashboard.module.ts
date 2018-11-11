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

import { SaleStoreComponent } from "../sales/store/store.component";
import { SampleFormateComponent } from "../sales/sample-formate/sample-formate.component";


import {
  FileDatabase
} from "../items/category/category.component";

import { AppMatModule } from "../app-mat/app-mat.module";

import {
  EditBranchComponent,
  NewBranchComponent,
  BranchesComponent,
  BranchComponent,
  PartenersComponent,
  EditPartnerComponent,
  NewPartnerComponent,
  PartnerComponent
} from "../settings";

import { SalesReportComponent } from "../reports/sales-report/sales-report.component";
import { ProductReportsComponent } from "../reports/product-reports/product-reports.component";
import { CustomerReportsComponent } from "../reports/customer-reports/customer-reports.component";
import { InventoryReportsComponent } from "../reports/inventory-reports/inventory-reports.component";
const COMPONENT = [
  BranchesComponent,
  NewBranchComponent,
  EditBranchComponent,
  BranchComponent,
  PartenersComponent,
  EditPartnerComponent,
  NewPartnerComponent,
  PartnerComponent,
  SalesReportComponent,
  ProductReportsComponent,
  CustomerReportsComponent,
  InventoryReportsComponent
];
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
import {StoreService} from './store/store.service'
@NgModule({
  imports: [RouterModule, ...NB_MODULES],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    StoreComponent,
    SaleStoreComponent,
    SampleFormateComponent,
    ...COMPONENT
  ],
  providers: [
    FileDatabase,
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
