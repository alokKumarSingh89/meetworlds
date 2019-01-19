import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from '@app/store/app-store.module';
import { Router, ActivatedRoute } from '@angular/router';
import {GetAllReceiveRequest} from '@app/store/actions/receive.action';

@Component({
	templateUrl: './new-receive.component.html',
	styleUrls: ['./new-receive.component.css']
})
export class NewReceiveComponent implements OnInit {
	receiveList;
	constructor(private _store: Store<AppState>,private _route: ActivatedRoute) {
		this._store.pipe(select(store => store.receive.Receive)).subscribe(receive => {
			console.log(receive)
			this.receiveList = receive
		})
	}
	getReceivedItem(id,receivedItem) {
		return receivedItem.filter(rec=>rec.purchase_detail_id==id).reduce((sum, current) => sum + current.stock, 0)
	}
	getReceurnedItem(id,returnedItem) {
		return returnedItem.filter(rec=>rec.purchase_detail_id==id).reduce((sum, current) => sum + current.stock, 0)
	}
	ngOnInit() {
		let id=this._route.snapshot.paramMap.get("id");
		this._store.dispatch(new GetAllReceiveRequest(id))
	}

}
