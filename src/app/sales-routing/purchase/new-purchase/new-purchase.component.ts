import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import {Store, select} from '@ngrx/store';
import {AppState} from '@app/store/app-store.module';
import {Router} from '@angular/router';
import {validateWhiteSpace} from '@app/util/validators';
import {GetAllSupplierRequest} from '@app/store/actions/supplier.action';
import {error_message} from '@app/constants/purchages.error';
import {ItemRequest} from '@app/store/actions/items.action';

@Component({
  selector: 'app-new-purchase',
  templateUrl: './new-purchase.component.html',
  styleUrls: ['./new-purchase.component.css']
})
export class NewPurchaseComponent implements OnInit {

  purchaseOrder: FormGroup;
	error: any;
	suppliers;
	ItemList;
	itemList: FormArray;
	constructor(
		private fb: FormBuilder,
		private _store: Store<AppState>,
    private router: Router
	){}
  createOrder() {
    console.log(this.purchaseOrder.value)
  }
  cancel() {
    this.router.navigate(["/dashboard/settings/organisation"]);
  }
	createItem() {
		return this.fb.group({
			item_id: this.fb.control('',[Validators.required]),
			price: this.fb.control('',[Validators.required]),
			stock: this.fb.control('',[Validators.required])
		});
	}
	addItem(): void {
		this.itemList = this.purchaseOrder.get('items') as FormArray;
		this.itemList.push(this.createItem());
	}
	deleteItem(index) {
		console.log(index)
	}
  ngOnInit() {
		this.error = error_message;
		this.purchaseOrder=this.fb.group({
			supplier_id: this.fb.control("",[Validators.required]),
			purchase_order_date: this.fb.control(new Date(),[]),
			branch_id: this.fb.control("",[]),
			items:this.fb.array([this.createItem()])
		});
		this._store.pipe(select(store => store.branch.branches.currentBranch)).subscribe(current => {
			this.purchaseOrder.get('branch_id').setValue(current.id);
			this._store.dispatch(new GetAllSupplierRequest(current.id))
		});
		
		this._store.pipe(select(store => store.supplier.supplier)).subscribe(supplier => {
			this.suppliers = 	supplier
		})
		this._store.pipe(select(store => store.items.items)).subscribe(item => {
			this.ItemList = item
		})
		this._store.dispatch(new ItemRequest());
	}
	ngOnDestroy() {
		
	}

}
