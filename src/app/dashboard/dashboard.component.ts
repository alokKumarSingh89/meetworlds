import { Component, OnInit } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  opened = true;
  over = 'side';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';
  // overlap = false;
  watcher: Subscription;

  constructor(media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.opened = false;
        this.over = 'over';
      } else {
        this.opened = true;
        this.over = 'side';
      }
    });
  }
  cuurentOpenPanel(){
    console.log('')
  }
  sidebarMenu: any[] = [{ name: "Dashboard", icon:'dashboard',child: [{ name: "Store",link:"store" }] }, 
  { name: "Sales", icon:"bar_chart",child: [{ name: "Store",link:"sales/store" },{ name: "Sample Formate",link:"sales/sample-formate" }] }, 
  { name: "Items", icon:"list",child: [{ name: "Items",link:"items" },{ name: "Categories",link:"items/category" }] },
  { name: "Inventory", icon:"business",child: [{ name: "Stock",link:"inventory/stock" },{ name: "Purchases",link:"inventory/purchases" },{ name: "Transfers",link:"inventory/transfers" },{ name: "Audit Report",link:"inventory/audit-report" }] }, 
  { name: "Accounting", icon:"account_balance",child: [{ name: "Tax Types",link:"accounting/tax-types" },{ name: "Tax Payable Items",link:"accounting/tax-payable-items" },{ name: "Discount Items",link:"accounting/discount-items" },{ name: "Charges",link:"accounting/charges" },{ name: "Promotions",link:"accounting/promotions" }] }, 
  { name: "Vouchers", icon:"business_center",child: [{ name: "Pretty cash",link:"vouchers/pretty-cash" },{ name: "Credit Line",link:"vouchers/credit-line" },{ name: "open/close store",link:"vouchers/open-close-store" }] },
  { name: "People", icon:"group_plus",child: [{ name: "Customers",link:"people/customers" },{ name: "Users",link:"people/users" },{ name: "Vendors",link:"people/vendors" }] }, 
  { name: "Reports", icon:"assignment",child: [{ name: "Sales Report",link:"reports/sales-report" },{ name: "Products Report",link:"reports/product-reports" },{ name: "Customers Report",link:"reports/customer-reports" },{ name: "Inventory Report",link:"reports/inventory-reports" }] }, 
  { name: "Settings", icon:"settings",child: [{ name: "Channels Types",link:"settings/channel-types" },{ name: "Partners",link:"settings/partners" },{ name: "Branches",link:"settings/branchs" }] },
  { name: "Contact US", icon:"contacts",child: [{ name: "Help ",link:"contact-us/help" }] }]
  ngOnInit() {

  }
}
