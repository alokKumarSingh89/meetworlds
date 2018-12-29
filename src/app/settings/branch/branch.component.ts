import { Component, OnInit } from "@angular/core";
import { ApiService } from "@app/auth/api.service";
import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material";
import { AppState } from "@app/store/app-store.module";
import { Store, select } from "@ngrx/store";
import API_URL from "@app/constants/UrlConstant";
import { BranchRequest, DeleteBranchRequest } from "@app/store/actions/branch.action";

@Component({
  selector: "app-branch",
  templateUrl: "./branch.component.html",
  styleUrls: ["./branch.component.scss"]
})
export class BranchComponent implements OnInit {
  constructor(private _api: ApiService, private _store: Store<AppState>) {}
  branch: any;
  
  isAddBranch: boolean = false;
  displayedColumns: string[] = [
    "NAME",
    "PINCODE",
    "MOBILE",
    "DELIVERY CHARGE",
    "Min. Order Amount",
    "ACTION"
  ];
  dataSource: any;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  selection = new SelectionModel<any>(true, []);
  removeBranch(id: string, name: string) {
    let isConfirm = window.confirm(
      `Are you sure, you want to delete '${name}'`
    );
    if (isConfirm) {
      this._store.dispatch(new DeleteBranchRequest(API_URL.BRANCH.DELETE + id,id));
    }
  }
  ngOnInit() {
    this._store
      .pipe(select(store => store.organisation.organisation))
      .subscribe((organisation: any) => {
        if (organisation) {
          this.isAddBranch = true;
        }
      });
    
    this._store
      .pipe(select(store => store.branch.branches.branchList))
      .subscribe(list => {
        this.dataSource = new MatTableDataSource<any>(list);
      });
  }
}
