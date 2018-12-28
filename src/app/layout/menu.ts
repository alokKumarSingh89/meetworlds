import { NbMenuItem } from "@nebular/theme";
let menuList:NbMenuItem[] = [];

const MENU_ITEMS = [
  {
    title: "Dashboard",
    icon: "nb-home",
    link: "/dashboard",
    role:["SuperAdmin","StoreManager","Manager"],
    children: [{ title: "Store", link: "store" }]
  },
  {
    title: "Sales",
    icon: "nb-keypad",
    link: "/dashboard",
    role:["SuperAdmin","StoreManager","Manager"],
    children: [
      { title: "Store", link: "sales/store" },
      { title: "Sample Formate", link: "sales/sample-formate" }
    ]
  },
  {
    title: "CATALOGUE",
    icon: "nb-compose",
    role:["SuperAdmin","StoreManager","Manager"],
    children: [
      { title: "Items", link: "items" },
      { title: "Categories", link: "items/category" }
    ]
  },
  {
    title: "Inventory",
    icon: "nb-gear",
    role:["SuperAdmin","StoreManager","Manager"],
    children: [
      { title: "Stock", link: "inventory/stock" },
      { title: "Purchases", link: "inventory/purchases" },
      { title: "Transfers", link: "inventory/transfers" },
      { title: "Audit Report", link: "inventory/audit-report" }
    ]
  },
  {
    title: "Accounting",
    icon: "nb-location",
    role:["SuperAdmin","StoreManager","Manager"],
    children: [
      { title: "Tax Types", link: "accounting/tax-types" },
      { title: "Tax Payable Items", link: "accounting/tax-payable-items" },
      { title: "Discount Items", link: "accounting/discount-items" },
      { title: "Charges", link: "accounting/charges" },
      { title: "Promotions", link: "accounting/promotions" }
    ]
  },
  {
    title: "Vouchers",
    icon: "nb-bar-chart",
    role:["SuperAdmin","StoreManager","Manager"],
    children: [
      { title: "Pretty cash", link: "vouchers/pretty-cash" },
      { title: "Credit Line", link: "vouchers/credit-line" },
      { title: "open/close store", link: "vouchers/open-close-store" }
    ]
  },
  {
    title: "People",
    icon: "nb-title",
    role:["SuperAdmin"],
    children: [
      { title: "Customers", link: "people/customers" },
      { title: "Users", link: "people/users" },
      { title: "Vendors", link: "people/vendors" }
    ]
  },
  {
    title: "Reports",
    icon: "nb-tables",
    role:["SuperAdmin","StoreManager","Manager"],
    children: [
      { title: "Sales Report", link: "reports/sales-report" },
      { title: "Products Report", link: "reports/product-reports" },
      { title: "Customers Report", link: "reports/customer-reports" },
      { title: "Inventory Report", link: "reports/inventory-reports" }
    ]
  },
  {
    title: "Settings",
    icon: "fa fa-cog",
    role:["SuperAdmin"],
    children: [
      { title: "Channels Types", link: "settings/channel-types" },
      { title: "Partners", link: "settings/partners" },
      { title: "Branch", link: "settings/branch" },
      { title: "Organisation", link: "settings/organisation" },
      { title: "Category", link: "settings/categories" },
      { title: "Item", link: "settings/item" }
    ]
  },
  {
    title: "Contact US",
    icon: "fa fa-question",
    role:["SuperAdmin","StoreManager","Manager"],
    children: [{ title: "Help ", link: "contact-us/help" }]
  }
];
export const getMenuList = (role:string) => {
  let menu =  MENU_ITEMS.filter(menu=>menu.role.includes(role));
   menuList = menu;
  return menuList;
}