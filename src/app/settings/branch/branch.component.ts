import { Component, OnInit } from "@angular/core";
import { ApiService } from "@app/auth/api.service";
import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material";
import { AppState } from "@app/store/app-store.module";
import { Store } from "@ngrx/store";
import API_URL from "@app/models/UrlConstant";

@Component({
  selector: "app-branch",
  templateUrl: "./branch.component.html",
  styleUrls: ["./branch.component.scss"]
})
export class BranchComponent implements OnInit {
  constructor(private _api: ApiService, private _store: Store<AppState>) {}
  branch: any;
  isAddBranch: boolean;
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
      this._api.delete(API_URL.BRANCH.DELETE + id).subscribe(respose => {
        this.fetchBranch();
      });
    }
  }
  fetchBranch() {
    this._api.index(API_URL.BRANCH.GETALL).subscribe(data => {
      this.branch = data;
      this.dataSource = new MatTableDataSource<any>(data);
    });
  }
  ngOnInit() {
    this._store.select("organisation").subscribe((org: any) => {
      if (org.organisation.id) {
        this.isAddBranch = true;
      }
    });
    this.fetchBranch();
  }
}
