import { Component, OnInit } from '@angular/core';
import {ApiService} from '@app/auth/api.service';
import {SelectionModel} from '@angular/cdk/collections';
import {Store, select} from '@ngrx/store';
import {AppState} from '@app/store/app-store.module';
import {GetAllPurchaseRequest} from '@app/store/actions/purchase.action';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

	constructor(private _api: ApiService,private _store: Store<AppState>) {
		this._store.pipe(select(store => store.purchase.Purchase)).subscribe(branch => {
			this.dataSource=branch;
		})
		this._store.pipe(select(store => store.branch.branches.branchList)).subscribe(branch => {
			if (branch) {
				this.branchList=branch;
			}
		})
		this._store.pipe(select(store => store.supplier.supplier)).subscribe(supllier => {
			if (supllier) {
				this.supplier=supllier;
			}
		})
	}
  organisation: any;
  isAddOrganisation: boolean = true;
  displayedColumns: string[] = ["Branch", "Supplier", "Total Amount", "Date","Order Details","Action"];
	dataSource: any;
	branchList: any;
	supplier: any;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  selection = new SelectionModel<any>(true, []);
	getBranch(org){
		return this.branchList.filter(branch=>branch.id == org.branch_id)[0].name
	}
	getSupplier(org){
		return this.supplier.filter(supp=>supp.id == org.supplier_id)[0].name
	}
	ngOnInit() {
		
		
		this._store.pipe(select(store => store.branch.branches.currentBranch)).subscribe(current => {
			if (current) {
				this._store.dispatch(new GetAllPurchaseRequest(current.id));
			}
		})
		
  }
}
