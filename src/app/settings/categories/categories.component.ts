import { Component, OnInit } from "@angular/core";
import { ApiService } from "@app/auth/api.service";
import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material";
import { environment } from "@env/environment";
import API_URL from "@app/constants/UrlConstant";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})
export class CategoriesComponent implements OnInit {
  constructor(private _api: ApiService) {}
  displayedColumns: string[] = ["NAME", "DESCRIPTION", "ACTION"];
  dataSource: any;
  path: string = environment.api_server;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  selection = new SelectionModel<any>(true, []);
  removeCategory(id: string, name: string) {
    let isConfirm = window.confirm(
      `Are you sure, you want to delete '${name}'`
    );
    if (isConfirm) {
      this._api.delete(API_URL.CATEGORY.DELETE + id).subscribe(respose => {
        this.fetchCategory();
      });
    }
  }
  fetchCategory() {
    this._api.index(API_URL.CATEGORY.GETALL).subscribe(data => {
      this.dataSource = new MatTableDataSource<any>(data);
    });
  }
  ngOnInit() {
    this.fetchCategory();
  }
}
