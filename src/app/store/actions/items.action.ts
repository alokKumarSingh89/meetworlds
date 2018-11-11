import { Action } from "@ngrx/store";
import { ItemDTO } from "@app/models/items.model";
import { CategoryDTO } from "@app/models/category.model";

export enum ItemActionType{
    ITEM_REQUEST="[ITEM] Item Request",
    ITEM_SUCCESS="[ITEM] Item Loaded",
    CATEGORY_REQUEST = "[CATEGORY] Fetch Category",
    CATEGORY_SUCCESS = "[CATEGORY] Category Fetch Error"
}

export class ItemRequest implements Action{
    readonly type=ItemActionType.ITEM_REQUEST;
    constructor(){}
}
export class ItemSuccess implements Action{
    readonly type=ItemActionType.ITEM_SUCCESS;
    constructor(public payload:ItemDTO){}
}
export class CategoryRequest implements Action{
    readonly type = ItemActionType.CATEGORY_REQUEST;
    constructor(){};
}
export class CategorySuccess implements Action{
    readonly type=ItemActionType.CATEGORY_SUCCESS;
    constructor(public payload:CategoryDTO){}
}
export type Action = ItemRequest | ItemSuccess | CategoryRequest |CategorySuccess;