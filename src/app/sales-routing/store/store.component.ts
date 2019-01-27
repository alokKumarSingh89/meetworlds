import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store';
import {AppState} from '@app/store/app-store.module';
import {ApiService} from '@app/auth/api.service';
import {SelectionModel} from '@angular/cdk/collections';
import {IndexStockRequest} from '@app/store/actions/item-stock.action';
import {ItemRequest} from '@app/store/actions/items.action';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
	public isAddOrganisation: boolean = true;
	public displayedColumns: string[] = ["Store Id","Item", "Stock", "Price"];
	public dataSource: any;
	public itemList: any;
	constructor(private _api: ApiService,private _store: Store<AppState>) {
		this._store.dispatch(new ItemRequest());
		this._store.pipe(select(store => store.items.items)).subscribe(item => {
			if (item) {
				this.itemList = item;
			}
		})
		this._store.pipe(select(store => store.stock.stock)).subscribe(stock => {
			if (stock) {
				this.dataSource = stock;
			}
		})
	}
	
	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
	getItemName(item_id) {
		let items=this.itemList.filter(item => item.id==item_id)[0]
		return `${items.category.name}-${items.name}`
	}
	selection = new SelectionModel<any>(true, []);
	ngOnInit() {
		this._store.pipe(select(store => store.branch.branches.currentBranch)).subscribe(currentBranch => {
			if (currentBranch) {
				this._store.dispatch(new IndexStockRequest(currentBranch.id))
			}
		})
	}

}
