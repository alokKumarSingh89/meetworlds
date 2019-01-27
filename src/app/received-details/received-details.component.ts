import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store';
import {AppState} from '@app/store/app-store.module';
import {GetAllReceiveRequest} from '@app/store/actions/receive.action';
import {ItemRequest} from '@app/store/actions/items.action';
import {ActivatedRoute} from '@angular/router';
import {ItemStockCreateRequest} from '@app/store/actions/item-stock.action';

@Component({
  selector: 'app-received-details',
  templateUrl: './received-details.component.html',
  styleUrls: ['./received-details.component.css']
})
export class ReceivedDetailsComponent implements OnInit {
	receivedList;
	completedReceivedList;
	UncompletedReceivedList
	itemList;
	constructor(private _store: Store<AppState>,private _route: ActivatedRoute) { 
		
	}
	getItemName(id) {
		if (this.itemList) {
			const itemId=this.receivedList.purchase_details.filter(details => details.id==id)[0]
		const currentItem=this.itemList.filter(item => item.id==itemId.item_id)[0];
		return currentItem.category.name +" " +currentItem.name
		}
		
	}
	markAsReceived(receive) {
		let isConform = window.confirm("Are you sure to move in stock")
		if (isConform) {
			const item_id=this.receivedList.purchase_details.filter(details => details.id==receive.purchase_detail_id)[0];
			receive["item_id"]=item_id.item_id;
			receive["priority"]=1;
			receive["is_active"]=1;
			this._store.dispatch(new ItemStockCreateRequest(receive));
			let id = this._route.snapshot.paramMap.get("id");
			this._store.dispatch(new GetAllReceiveRequest(id));
		}
	}
	ngOnInit() {
		this._store.dispatch(new ItemRequest())

		let id = this._route.snapshot.paramMap.get("id");
		this._store.dispatch(new GetAllReceiveRequest(id));	
		
		this._store.pipe(select(store => store.receive.Receive)).subscribe(receive => {
			console.log(receive)
			if (receive&&receive.receivable) {
				this.receivedList=receive;
				this.UncompletedReceivedList=receive.receivable.filter(rec => rec.is_approved==null);
				this.completedReceivedList=receive.receivable.filter(rec => rec.is_approved!=null);
			}
			
		})
		this._store.pipe(select(store => store.items.items)).subscribe(items => {
			this.itemList=items;
		})
  }

}
