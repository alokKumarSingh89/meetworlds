import { Routes } from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component'
import { StoreComponent } from '../dashboard/store/store.component';
import { SaleStoreComponent } from '../sales/store/store.component';
import { SampleFormateComponent } from '../sales/sample-formate/sample-formate.component';
import { AuthenticationGuard } from '@app/auth.guard';
export const routes: Routes = [
    { 
        path: '', 
        loadChildren: '@app/auth/login/login.module#LoginModule' 
    },
    { path: 'dashboard', canActivate:[AuthenticationGuard],component:DashboardComponent,
        children:[
            {path:'',redirectTo:'store',pathMatch:'full'},
            {path:'store',component:StoreComponent},
            {path:'sales/store',component:SaleStoreComponent},
            {path:'sales/sample-formate',component:SampleFormateComponent},

            {
                path:'items',
                loadChildren:'@app/items/items.module#ItemsModule'
            },
            
            // {path:'inventory/stock',component:StockComponent},
            // {path:'inventory/purchases',component:PurchagesComponent},
            // {path:'inventory/transfers',component:TransfersComponent},
            // {path:'inventory/audit-report',component:AuditReportComponent},
            // {path:'accounting/tax-types',component:TaxTypesComponent},
            // {path:'accounting/tax-payable-items',component:TaxPayableItemsComponent},
            // {path:'accounting/discount-items',component:DiscountItemsComponent},
            // {path:'accounting/charges',component:ChargeComponent},
            // {path:'accounting/promotions',component:PromotionsComponent},
            // {path:'vouchers/pretty-cash',component:PrettyCashComponent},
            // {path:'vouchers/credit-line',component:CreditLineComponent},
            // {path:'vouchers/open-close-store',component:OpenCloseStoreComponent},
            // {path:'people/customers',component:CustomersComponent},
            // {path:'people/customers/new',component:NewCustomerComponent},
            // {path:'people/customers/:id/edit',component:EditCustomerComponent},
            // {path:'people/users/new',component:NewUserComponent},
            // {path:'people/users/:id/edit',component:EditUserComponent},
            // {path:'people/users',component:UsersComponent},
            // {path:'people/vendors',component:VendorComponent},
            // {path:'people/vendors/new',component:NewVendorComponent},
            // {path:'people/vendors/:id/edit',component:EditVendorComponent},
            // {path:'reports/sales-report',component:SalesReportComponent},
            // {path:'reports/product-reports',component:ProductReportsComponent},
            // {path:'reports/customer-reports',component:CustomerReportsComponent},
            // {path:'reports/inventory-reports',component:InventoryReportsComponent},
            // {path:'settings/channel-types',component:ChannelTypesComponent},
            // {path:'settings/new-channel',component:NewchannelComponent},
            // {path:'settings/:id/edit',component:EditchannelComponent},

            // {path:'settings/partner/new',component:NewPartnerComponent},
            // {path:'settings/partner/:id',component:PartnerComponent},
            // {path:'settings/partner/:id/edit',component:EditPartnerComponent},
            // {path:'settings/partners',component:PartenersComponent},

            // {path:'settings/branchs',component:BranchesComponent},
            // {path:'settings/branch/new',component:NewBranchComponent},
            // {path:'settings/branch/:id',component:BranchComponent},            
            // {path:'settings/branch/:id/edit',component:EditBranchComponent},

            // {path:'contact-us/help',component:HelpComponent},
            
        ]
    },
]