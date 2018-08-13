import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms'
import { NbThemeModule } from '@nebular/theme';
import { AppComponent } from './app.component';
import {AppMatModule} from './app-mat/app-mat.module'
import {routes} from './routers/routers';
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
import { ChannelTypesComponent } from './settings/channel-types/channel-types.component';
import { HelpComponent } from './contact-us/help/help.component';
import { NewchannelComponent } from './settings/channel-types/newchannel/newchannel.component';
import { EditchannelComponent } from './settings/channel-types/editchannel/editchannel.component';
import { NewCustomerComponent } from './people/customers/new/new.component';
import { EditCustomerComponent } from './people/customers/edit/edit.component';
import { NewUserComponent } from './people/users/new/new.component';
import { EditUserComponent } from './people/users/edit/edit.component';
import { NewVendorComponent } from './people/vendor/new/new.component';
import { EditVendorComponent } from './people/vendor/edit/edit.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {AuthModule} from './auth/auth.module'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NewItemComponent } from './items/new-item/new-item.component';
import { EditItemComponent } from './items/edit-item/edit-item.component';
import { DetailItemComponent } from './items/detail-item/detail-item.component';
@NgModule({
  declarations: [
    AppComponent,
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
    ChannelTypesComponent,
    HelpComponent,
    NewchannelComponent,
    EditchannelComponent,
    NewCustomerComponent,
    EditCustomerComponent,
    NewUserComponent,
    EditUserComponent,
    NewVendorComponent,
    EditVendorComponent,
    NewItemComponent,
    EditItemComponent,
    DetailItemComponent
  ],
  imports: [
    RouterModule.forRoot(routes,{ useHash: true }),
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    BrowserModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    AppMatModule,
    DashboardModule,
    AuthModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
