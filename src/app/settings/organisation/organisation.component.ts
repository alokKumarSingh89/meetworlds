import { Component, OnInit } from "@angular/core";
import { ApiService } from "@app/auth/api.service";
import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material";
import API_URL from "@app/constants/UrlConstant";

@Component({
  selector: "app-organisation",
  templateUrl: "./organisation.component.html",
  styleUrls: ["./organisation.component.css"]
})
export class OrganisationComponent implements OnInit {
  constructor(private _api: ApiService) {}
  organisation: any;
  isAddOrganisation: boolean = true;
  displayedColumns: string[] = ["NAME", "EMAIL", "MOBILE", "GSTIN", "PINCODE"];
  dataSource: any;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  selection = new SelectionModel<any>(true, []);
  fetchOrganisation() {
    this._api.index(API_URL.ORGANISATION.GETALL).subscribe(data => {
      this.organisation = data;
      if (this.organisation.length > 0) {
        this.isAddOrganisation = false;
      }
      this.dataSource = new MatTableDataSource<any>(data);
    });
  }
  ngOnInit() {
    this.fetchOrganisation();
  }
}
