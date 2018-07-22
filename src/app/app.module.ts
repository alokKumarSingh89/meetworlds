import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppMatModule} from './app-mat/app-mat.module'
import {routes} from './routers/routers';
import { StoreComponent } from './dashboard/store/store.component';
import {SaleStoreComponent} from './sales/store/store.component';
import { SampleFormateComponent } from './sales/sample-formate/sample-formate.component';
import { ItemsComponent } from './items/items/items.component';
import { CategoryComponent } from './items/category/category.component';
import { StockComponent } from './inventory/stock/stock.component';
import { PurchagesComponent } from './inventory/purchages/purchages.component';
import { TransfersComponent } from './inventory/transfers/transfers.component';
import { AuditReportComponent } from './inventory/autdit-report/autdit-report.component';
import { TaxTypesComponent } from './accounting/tax-types/tax-types.component';
import { TaxPayableItemsComponent } from './accounting/tax-payable-items/tax-payable-items.component';
import { DiscountItemsComponent } from './accounting/discount-items/discount-items.component';
import { ChargeComponent } from './accounting/charge/charge.component';
import { PromotionsComponent } from './accounting/promotions/promotions.component';
import { PrettyCashComponent } from './vouchers/pretty-cash/pretty-cash.component';
import { CreditLineComponent } from './vouchers/credit-line/credit-line.component';
import { OpenCloseStoreComponent } from './vouchers/open-close-store/open-close-store.component';
import { CustomersComponent } from './people/customers/customers.component';
import { UsersComponent } from './people/users/users.component';
import { VendorComponent } from './people/vendor/vendor.component';
import { SalesReportComponent } from './reports/sales-report/sales-report.component';
import { ProductReportsComponent } from './reports/product-reports/product-reports.component';
import { CustomerReportsComponent } from './reports/customer-reports/customer-reports.component';
import { InventoryReportsComponent } from './reports/inventory-reports/inventory-reports.component';
import { ChannelTypesComponent } from './settings/channel-types/channel-types.component';
import { PartenersComponent } from './settings/parteners/parteners.component';
import { BranchesComponent } from './settings/branches/branches.component';
import { HelpComponent } from './contact-us/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    StoreComponent,
    SampleFormateComponent,
    ItemsComponent,
    SaleStoreComponent,
    CategoryComponent,
    StockComponent,
    PurchagesComponent,
    TransfersComponent,
    AuditReportComponent,
    TaxTypesComponent,
    TaxPayableItemsComponent,
    DiscountItemsComponent,
    ChargeComponent,
    PromotionsComponent,
    PrettyCashComponent,
    CreditLineComponent,
    OpenCloseStoreComponent,
    CustomersComponent,
    UsersComponent,
    VendorComponent,
    SalesReportComponent,
    ProductReportsComponent,
    CustomerReportsComponent,
    InventoryReportsComponent,
    ChannelTypesComponent,
    PartenersComponent,
    BranchesComponent,
    HelpComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppMatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
