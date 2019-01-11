import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Store, select} from '@ngrx/store';
import {AppState} from '@app/store/app-store.module';
import {Router} from '@angular/router';
import {error_message} from '@app/constants/supplier.error';
import {validateWhiteSpace} from '@app/util/validators';
import {CreateSupplierRequest} from '@app/store/actions/supplier.action';

@Component({
  selector: 'app-new-supplier',
  templateUrl: './new-supplier.component.html',
  styleUrls: ['./new-supplier.component.css']
})
export class NewSupplierComponent implements OnInit {
	supplierForm: FormGroup;
  roleList:any;
	branchList: object[];
	branchListSubscription;
	createSupplierSubcription;
  constructor(private _store: Store<AppState>, private _fb: FormBuilder,private router: Router) { }
  error = error_message;
  createSupplier(){
		let form=this.supplierForm.value;
		this._store.dispatch(new CreateSupplierRequest(form));
  }
  ngOnInit() {
    console.log(this.error)
		this.supplierForm=this._fb.group({
			name: this._fb.control("",[Validators.required]),
			email_id: this._fb.control("",[Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
			mobile: this._fb.control("",[Validators.required,Validators.pattern("^[1-9][0-9]{9}$")]),
			branch_id: this._fb.control("",[]),
			pincode: this._fb.control("",[Validators.required,Validators.minLength(6)]),
			address: this._fb.control("",[])
		});
		
		this.branchListSubscription = this._store.pipe(select(store => store.branch.branches.branchList)).subscribe(branch => {
			this.branchList=branch;
			this.supplierForm.get('branch_id').setValue(branch[0].id)
		})
		this.createSupplierSubcription=this._store.pipe(select(store => store.supplier.status)).subscribe(status => {
			if (status=="Success") {
				this.router.navigateByUrl("/dashboard/people/supplier")
			}
		})
	}
	ngOnDestroy() {
		this.branchListSubscription.unsubscribe()
		this.createSupplierSubcription.unsubscribe()
	}
}
