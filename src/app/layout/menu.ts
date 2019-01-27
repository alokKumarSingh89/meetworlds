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
    role:["SuperAdmin","Manager"],
    children: [
			{title: "Sales",link: "sales/store"},
			{ title: "Item", link: "settings/item" },
			{ title: "Category", link: "settings/categories" },
			{title: "Purchases",link: "sales/purchases"},
			
      { title: "Users", link: "people/users" },
      { title: "Supplier", link: "people/supplier" }
    ]
	},
	{
    title: "Store",
    icon: "fa fa-question",
    role:["SuperAdmin","StoreManager","Manager"],
    children: [{ title: "Store ", link: "sales/store" }]
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
      // { title: "Partners", link: "settings/partners" },
      { title: "Branch", link: "settings/branch" },
      { title: "Organisation", link: "settings/organisation" }
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