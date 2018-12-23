import { NbMenuItem } from '@nebular/theme';
export const MENU_ITEMS: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'nb-home',
      link: '/dashboard',
      children:[{title: 'Store',link: 'store',}]
    },
    {
      title: 'Sales',
      icon: 'nb-keypad',
      link: '/dashboard',
      children: [{ title: "Store", link: "sales/store" },{ title: "Sample Formate", link: "sales/sample-formate" }],
    },
    {
      title: 'CATALOGUE',
      icon: 'nb-compose',
      children: [{ title: "Items", link: "items" }, { title: "Categories", link: "items/category" }],
    },
    {
      title: 'Inventory',
      icon: 'nb-gear',
      children: [{ title: "Stock", link: "inventory/stock" }, { title: "Purchases", link: "inventory/purchases" }, { title: "Transfers", link: "inventory/transfers" }, { title: "Audit Report", link: "inventory/audit-report" }],
    },
    {
      title: 'Accounting',
      icon: 'nb-location',
      children: [{ title: "Tax Types", link: "accounting/tax-types" }, { title: "Tax Payable Items", link: "accounting/tax-payable-items" }, { title: "Discount Items", link: "accounting/discount-items" }, { title: "Charges", link: "accounting/charges" }, { title: "Promotions", link: "accounting/promotions" }],
    },
    {
      title: 'Vouchers',
      icon: 'nb-bar-chart',
      children: [{ title: "Pretty cash", link: "vouchers/pretty-cash" }, { title: "Credit Line", link: "vouchers/credit-line" }, { title: "open/close store", link: "vouchers/open-close-store" }],
    },
    {
      title: 'People',
      icon: 'nb-title',
      children: [{ title: "Customers", link: "people/customers" }, { title: "Users", link: "people/users" }, { title: "Vendors", link: "people/vendors" }],
    },
    {
      title: 'Reports',
      icon: 'nb-tables',
      children: [{ title: "Sales Report", link: "reports/sales-report" }, { title: "Products Report", link: "reports/product-reports" }, { title: "Customers Report", link: "reports/customer-reports" }, { title: "Inventory Report", link: "reports/inventory-reports" }],
    },
    {
      title: 'Settings',
      icon: 'fa fa-cog',
      children: [
        { title: "Channels Types", link: "settings/channel-types" }, 
        { title: "Partners", link: "settings/partners" }, 
        { title: "Branches", link: "settings/branchs" },
        { title: "Organisation", link: "settings/organisation" },
        { title: "Category", link: "settings/categories" }
      ],
    },
    {
      title: 'Contact US',
      icon: 'fa fa-question',
      children: [{ title: "Help ", link: "contact-us/help" }],
    },
  ]
