import { Routes } from '@angular/router';
import {LoginComponent} from '../users/login/login.component';
import {DashboardComponent} from '../dashboard/dashboard.component'
import { StoreComponent } from '../dashboard/store/store.component';
import { SaleStoreComponent } from '../sales/store/store.component';
import { SampleFormateComponent } from '../sales/sample-formate/sample-formate.component';
import { ItemsComponent } from '../items/items/items.component';
import { CategoryComponent } from '../items/category/category.component';
import { StockComponent } from '../inventory/stock/stock.component';
import { PurchagesComponent } from '../inventory/purchages/purchages.component';
import { TransfersComponent } from '../inventory/transfers/transfers.component';
import { AuditReportComponent } from '../inventory/autdit-report/autdit-report.component';
import { TaxTypesComponent } from '../accounting/tax-types/tax-types.component';
import { TaxPayableItemsComponent } from '../accounting/tax-payable-items/tax-payable-items.component';
import { DiscountItemsComponent } from '../accounting/discount-items/discount-items.component';
import { ChargeComponent } from '../accounting/charge/charge.component';
import { PromotionsComponent } from '../accounting/promotions/promotions.component';
import { PrettyCashComponent } from '../vouchers/pretty-cash/pretty-cash.component';
import { CreditLineComponent } from '../vouchers/credit-line/credit-line.component';
import { OpenCloseStoreComponent } from '../vouchers/open-close-store/open-close-store.component';
import { CustomersComponent } from '../people/customers/customers.component';
import { UsersComponent } from '../people/users/users.component';
import { VendorComponent } from '../people/vendor/vendor.component';
import { SalesReportComponent } from '../reports/sales-report/sales-report.component';
import { ProductReportsComponent } from '../reports/product-reports/product-reports.component';
import { CustomerReportsComponent } from '../reports/customer-reports/customer-reports.component';
import { InventoryReportsComponent } from '../reports/inventory-reports/inventory-reports.component';
import { ChannelTypesComponent } from '../settings/channel-types/channel-types.component';
import { PartenersComponent } from '../settings/parteners/parteners.component';
import { BranchesComponent } from '../settings/branches/branches.component';
import { HelpComponent } from '../contact-us/help/help.component';
export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component:DashboardComponent,
        children:[
            {path:'',redirectTo:'store',pathMatch:'full'},
            {path:'store',component:StoreComponent},
            {path:'sales/store',component:SaleStoreComponent},
            {path:'sales/sample-formate',component:SampleFormateComponent},
            {path:'items',component:ItemsComponent},
            {path:'items/category',component:CategoryComponent},
            {path:'inventory/stock',component:StockComponent},
            {path:'inventory/purchases',component:PurchagesComponent},
            {path:'inventory/transfers',component:TransfersComponent},
            {path:'inventory/audit-report',component:AuditReportComponent},
            {path:'accounting/tax-types',component:TaxTypesComponent},
            {path:'accounting/tax-payable-items',component:TaxPayableItemsComponent},
            {path:'accounting/discount-items',component:DiscountItemsComponent},
            {path:'accounting/charges',component:ChargeComponent},
            {path:'accounting/promotions',component:PromotionsComponent},
            {path:'vouchers/pretty-cash',component:PrettyCashComponent},
            {path:'vouchers/credit-line',component:CreditLineComponent},
            {path:'vouchers/open-close-store',component:OpenCloseStoreComponent},
            {path:'people/customers',component:CustomersComponent},
            {path:'people/users',component:UsersComponent},
            {path:'people/vendors',component:VendorComponent},
            {path:'reports/sales-report',component:SalesReportComponent},
            {path:'reports/product-reports',component:ProductReportsComponent},
            {path:'reports/customer-reports',component:CustomerReportsComponent},
            {path:'reports/inventory-reports',component:InventoryReportsComponent},
            {path:'settings/channel-types',component:ChannelTypesComponent},
            {path:'settings/partners',component:PartenersComponent},
            {path:'settings/branchs',component:BranchesComponent},
            {path:'contact-us/help',component:HelpComponent},
            
        ]
    },
]