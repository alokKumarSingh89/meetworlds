import { Action } from "@ngrx/store";

export enum ItemStockType{
    ITEM_STOCK_CREATE_REQUEST="[ITEM_STOCK] make request to stock api for new stock",
    ITEM_STOCK_CREATE_SUCCESS="[ITEM_STOCK] new stock created",
    ITEM_STOCK_STATUS_UPDATE="[ITEM_STOCK] new stock created",
    INDEX_STOCK_REQUEST="[ITEM_STOCK] pull all stock request",
    INDEX_STOCK_SUCCESS="[ITEM_STOCK] got add stock",
}
export class ItemStockCreateRequest implements Action{
    readonly type = ItemStockType.ITEM_STOCK_CREATE_REQUEST;
    constructor(public payload:any){}
}
export class ItemStockCreateSuccess implements Action{
    readonly type = ItemStockType.ITEM_STOCK_CREATE_SUCCESS;
    constructor(public payload:any){}
}
export class ItemStockStatus implements Action{
	readonly type = ItemStockType.ITEM_STOCK_STATUS_UPDATE;
	constructor(){}
}
export class IndexStockRequest implements Action{
	readonly type = ItemStockType.INDEX_STOCK_REQUEST;
	constructor(public payload:string){}
}
export class IndexStockSuccess implements Action{
	readonly type = ItemStockType.INDEX_STOCK_SUCCESS;
	constructor(public payload:any){}
}
export type ItemStockAction = IndexStockRequest| IndexStockSuccess| ItemStockCreateRequest | ItemStockCreateSuccess|ItemStockStatus;