import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from '@app/store/app-store.module';
import { Router, ActivatedRoute } from '@angular/router';
import { validateWhiteSpace } from '@app/util/validators';
import { GetAllSupplierRequest } from '@app/store/actions/supplier.action';
import { error_message } from '@app/constants/purchages.error';
import { ItemRequest } from '@app/store/actions/items.action';
import { ApiService } from '@app/auth/api.service';
import { UpdatePurchaseStatus, UpdatePurchaseRequest } from '@app/store/actions/purchase.action';
import API_URL from '@app/constants/UrlConstant';

@Component({
  selector: 'app-edit-purchase',
  templateUrl: './edit-purchase.component.html',
  styleUrls: ['./edit-purchase.component.css']
})
export class EditPurchaseComponent implements OnInit {

  purchaseOrder: FormGroup;
  error: any;
  suppliers;
  ItemList;
  itemList: FormArray;
  purchase_details;
  constructor(
    private fb: FormBuilder,
    private _servie: ApiService,
    private _store: Store<AppState>,
    private _route: ActivatedRoute,
    private router: Router
  ) {
    // this._store.pipe(select(store => store.purchase.status)).subscribe(status => {
    //   if (status == "Success") {
    //     this._store.dispatch(new UpdatePurchaseStatus());
    //   }
    // })
  }
  editOrder() {
    let form = this.purchaseOrder.value;
    this._store.dispatch(new UpdatePurchaseRequest(form));
    window.history.back();
  }
  cancel() {
    this.router.navigate(["/dashboard/sales/purchases"]);
  }
  createItem() {
    return this.fb.group({
      item_id: this.fb.control('', [Validators.required]),
      id: this.fb.control(''),
      branch_id: this.fb.control(''),
      purchase_order_id: this.fb.control(''),
      price: this.fb.control('', [Validators.required]),
      stock: this.fb.control('', [Validators.required])
    });
  }
  addItem(): void {
    this.itemList = this.purchaseOrder.get('purchase_details') as FormArray;
    this.itemList.push(this.createItem());
  }
  deleteItem(item, index) {
    this.itemList = this.purchaseOrder.get('purchase_details') as FormArray;
    this.itemList.removeAt(index)
  }
  ngOnInit() {
    this.error = error_message;
    let id = this._route.snapshot.paramMap.get("id");
    this.purchaseOrder = this.fb.group({
      id: this.fb.control("", [Validators.required]),
      supplier_id: this.fb.control("", [Validators.required]),
      purchase_order_date: this.fb.control(new Date(), []),
      branch_id: this.fb.control("", []),
      purchase_details: this.fb.array([]),
      amount: this.fb.control(""),
      status: this.fb.control(""),
      remark: this.fb.control(""),
    });
    this._store.pipe(select(store => store.branch.branches.currentBranch)).subscribe(current => {
      this.purchaseOrder.get('branch_id').setValue(current.id);
      this._store.dispatch(new GetAllSupplierRequest(current.id))
    });
    this._store.pipe(select(store => store.supplier.supplier)).subscribe(supplier => {
      this.suppliers = supplier
    })
    this._store.pipe(select(store => store.items.items)).subscribe(item => {
      this.ItemList = item
    })
    this._store.dispatch(new ItemRequest());
    this._servie.index(API_URL.PURCHASE.GETONE + id).subscribe(data => {
      data.purchase_details.forEach(element => {
        this.addItem()
      });
      this.purchaseOrder.setValue(data);
    });
  }
  ngOnDestroy() {
  }
}