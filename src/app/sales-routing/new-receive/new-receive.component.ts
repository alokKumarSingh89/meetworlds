import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from '@app/store/app-store.module';
import { Router } from '@angular/router';
import { validateWhiteSpace } from '@app/util/validators';
import { GetAllSupplierRequest } from '@app/store/actions/supplier.action';
import { error_message } from '@app/constants/purchages.error';
import { ItemRequest } from '@app/store/actions/items.action';
import { ApiService } from '@app/auth/api.service';
import { CreateReceiveRequest, UpdateReceiveStatus } from '@app/store/actions/receive.action';

@Component({
	templateUrl: './new-receive.component.html',
	styleUrls: ['./new-receive.component.css']
})
export class NewReceiveComponent implements OnInit {

	receiveOrder: FormGroup;
	error: any;
	suppliers;
	ItemList;
	itemList: FormArray;
	constructor(
		private fb: FormBuilder,
		private _servie: ApiService,
		private _store: Store<AppState>,
		private router: Router
	) {
		this._store.pipe(select(store => store.receive.status)).subscribe(status => {
			if (status == "Success") {
				this._store.dispatch(new UpdateReceiveStatus());
				window.history.back();
			}
		})
	}
	createOrder() {
		let form = this.receiveOrder.value;
		this._store.dispatch(new CreateReceiveRequest(form));
	}
	cancel() {
		this.router.navigate(["/dashboard/sales/receives"]);
	}
	createItem() {
		return this.fb.group({
			item_id: this.fb.control('', [Validators.required]),
			price: this.fb.control('', [Validators.required]),
			stock: this.fb.control('', [Validators.required])
		});
	}
	addItem(): void {
		this.itemList = this.receiveOrder.get('items') as FormArray;
		this.itemList.push(this.createItem());
	}
	deleteItem(item, index) {
		this.itemList = this.receiveOrder.get('items') as FormArray;
		this.itemList.removeAt(index)
	}
	ngOnInit() {
		this.error = error_message;
		this.receiveOrder = this.fb.group({
			supplier_id: this.fb.control("", [Validators.required]),
			receive_order_date: this.fb.control(new Date(), []),
			branch_id: this.fb.control("", []),
			items: this.fb.array([this.createItem()])
		});
		this._store.pipe(select(store => store.branch.branches.currentBranch)).subscribe(current => {
			this.receiveOrder.get('branch_id').setValue(current.id);
			this._store.dispatch(new GetAllSupplierRequest(current.id))
		});

		this._store.pipe(select(store => store.supplier.supplier)).subscribe(supplier => {
			this.suppliers = supplier
		})
		this._store.pipe(select(store => store.items.items)).subscribe(item => {
			this.ItemList = item
		})
		this._store.dispatch(new ItemRequest());
	}
	ngOnDestroy() {

	}

}
