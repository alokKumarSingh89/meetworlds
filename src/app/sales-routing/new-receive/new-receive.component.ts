import { Component, OnInit } from '@angular/core';
import { Store, select, _STORE_REDUCERS } from '@ngrx/store';
import { AppState } from '@app/store/app-store.module';
import { Router, ActivatedRoute } from '@angular/router';
import {GetAllReceiveRequest, CreateReceiveRequest, UpdateReceiveStatus} from '@app/store/actions/receive.action';
import {ItemRequest} from '@app/store/actions/items.action';

@Component({
	templateUrl: './new-receive.component.html',
	styleUrls: ['./new-receive.component.css']
})
export class NewReceiveComponent implements OnInit {
	receiveList;
	itemList;
	errorList = [];
	constructor(private _store: Store<AppState>,private _route: ActivatedRoute,private router: Router) {
		this._store.dispatch(new ItemRequest())
		this._store.pipe(select(store => store.items.items)).subscribe(items => {
			this.itemList=items;
		})
		this._store.pipe(select(store => store.receive.Receive)).subscribe(receive => {
			this.receiveList=receive
		});
		this._store.pipe(select(store => store.receive.status)).subscribe(status => {
			console.log(status)
			if (status=="Success") {
				this.router.navigate(["/dashboard/sales/purchases"]);
				this._store.dispatch(new UpdateReceiveStatus());
				
			}
		})
		
	}
	cancle() {
		this.router.navigate(["/dashboard/sales/purchases"]);
	}
	getItem(id) {
		const currentItem=this.itemList.filter(item => item.id==id)[0];
		return currentItem.category.name +" " +currentItem.name
	}
	markAsComplete() {
		let id=this._route.snapshot.paramMap.get("id");
	}
	getReceivedItem(id) {
		return this.receiveList.receivable.filter(rec => rec.purchase_detail_id==id).reduce((sum,current) => sum+current.stock,0)
	}
	getReceurnedItem(id) {
		return this.receiveList.returnable.filter(rec => rec.purchase_detail_id==id).reduce((sum,current) => sum+current.stock,0)
	}
	ngOnInit() {
		let id=this._route.snapshot.paramMap.get("id");
		this._store.dispatch(new GetAllReceiveRequest(id))
	}
	submitRequest() {
		let status=false;
		this.errorList=[];
		this.receiveList.purchase_details.forEach(order => {
			const stock=order.stock;
			const currentReceived=order.received | 0;
			const currentReturned=order.return | 0;
			const totalReceived=this.receiveList.receivable.filter(rec => rec.purchase_detail_id==order.id).reduce((sum,current) => sum+current.stock,0);
			const totalReturen=this.receiveList.returnable.filter(rec => rec.purchase_detail_id==order.id).reduce((sum,current) => sum+current.stock,0);
			console.log(stock,currentReceived,currentReturned,totalReceived,totalReturen)
			if (stock<(currentReceived+currentReturned+totalReceived+totalReturen)) {
				status=true;
				this.errorList.push({name:this.getItem(order.item_id),message:"Received and Return item should not more than stock"})
			}
		});
		if (!status) {
			this._store.dispatch(new CreateReceiveRequest(this.receiveList,this.receiveList.id))
		}
		
	}

}
