import { Component, OnInit } from "@angular/core";
import { ApiService } from "@app/auth/api.service";
import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-branch",
  templateUrl: "./branch.component.html",
  styleUrls: ["./branch.component.scss"]
})
export class BranchComponent implements OnInit {
  constructor(private _api: ApiService) {}
  branch: any;
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
      `Are you sure, you want to delete '${name} branch'`
    );
    if (isConfirm) {
      this._api.delete("branch/" + id).subscribe(respose => {
        this.fetchBranch();
      });
    }
  }
  fetchBranch() {
    this._api.index("branches").subscribe(data => {
      this.branch = data;
      this.dataSource = new MatTableDataSource<any>(data);
    });
  }
  ngOnInit() {
    this.fetchBranch();
  }
}
