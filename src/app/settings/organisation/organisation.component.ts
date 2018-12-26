import { Component, OnInit } from "@angular/core";
import { ApiService } from "@app/auth/api.service";
import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material";
import API_URL from "@app/models/UrlConstant";

@Component({
  selector: "app-organisation",
  templateUrl: "./organisation.component.html",
  styleUrls: ["./organisation.component.css"]
})
export class OrganisationComponent implements OnInit {
  constructor(private _api: ApiService) {}
  organization: any;
  displayedColumns: string[] = [
    "NAME",
    "EMAIL",
    "MOBILE",
    "GSTIN",
    "PINCODE",
    "ACTION"
  ];
  dataSource: any;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  selection = new SelectionModel<any>(true, []);
  removeOrganisation(id: string, name: string) {
    let isConfirm = window.confirm(
      `Are you sure, you want to delete '${name}'`
    );
    if (isConfirm) {
      this._api.delete("organisation/" + id).subscribe(respose => {
        this.fetchOrganisation();
      });
    }
  }
  fetchOrganisation() {
    this._api.index(API_URL.ORGANISATION.INDEX).subscribe(data => {
      this.organization = data;
      this.dataSource = new MatTableDataSource<any>(data);
    });
  }
  ngOnInit() {
    this.fetchOrganisation();
  }
}
