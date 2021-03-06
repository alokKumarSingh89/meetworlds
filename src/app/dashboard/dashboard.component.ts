import {Component,OnInit} from "@angular/core";
import {getMenuList} from "../layout/menu";
import {StoreModel} from "../models/store.model";
import {Store,select} from "@ngrx/store";
import {AppState} from "@app/store/app-store.module";
import {LoadOrganisation} from "@app/store/actions/organisation.action";
import {BranchRequest} from "@app/store/actions/branch.action";
import API_URL from "@app/constants/UrlConstant";
import {Router} from "@angular/router";
import {GetAllSupplierRequest} from "@app/store/actions/supplier.action";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
	constructor(private _store: Store<AppState>,private _router:Router) {}
	menu;
	orgaization: any;
	branchSelect=false;
	activeEvent=null;
	currentBranch=null;
	ngOnInit() {
		this._store.pipe(select(store => store.auth.user)).subscribe(user => {
			if (user) {
				let role=user.user_role;
				this.menu=getMenuList(role);
				if (user.user_role=="SuperAdmin") {
					this._store.dispatch(new BranchRequest(API_URL.BRANCH.GETALL))
				} else {
					this._store.dispatch(new BranchRequest(API_URL.BRANCH.GETONE+""+user.branch_id))
				}
			}
		})
		this._store.dispatch(new LoadOrganisation());
		this._store.pipe(select(store => store.branch.branches.currentBranch)).subscribe(currentBranch => {
			if (currentBranch) {
				this._store.dispatch(new GetAllSupplierRequest(currentBranch.id))
			}
    })
	}
}
