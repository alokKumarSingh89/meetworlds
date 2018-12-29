const API_URL = {
  ORGANISATION: {
    GETALL: "organisations",
    GETONE: "organisation/",
    POST: "organisation/create",
    PUT: "organisation/",
    DELETE: "organisation/"
  },
  BRANCH: {
    GETALL: "branches",
    GETONE: "branch/",
    POST: "branch/create",
    PUT: "branch/",
    DELETE: "branch/"
  },
  CATEGORY: {
    GETALL: "categories",
    GETONE: "category/",
    POST: "category/create",
    PUT: "category/",
    DELETE: "category/"
  },
  Item: {
    GETALL: "items",
    GETONE: "item/",
    POST: "item/create",
    PUT: "item/",
    DELETE: "item/"
  },
  ItemUnit: {
    GETALL: "item_units",
    GETONE: "item_unit/",
    POST: "item_unit/create",
    PUT: "item_unit/",
    DELETE: "item_unit/"
  },
  USER: {
    ROLE: "roles",
    POST: "users/create",
    GETALL: "users",
  }
};
export default API_URL;
