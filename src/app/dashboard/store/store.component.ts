import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { StoreModel } from "../../models/store.model";
import { AppState } from "@app/store/app-store.module";
import { BranchRequest, UpdateBranch } from "@app/store/actions/branch.action";
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079 },
  { position: 2, name: "Helium", weight: 4.0026 },
  { position: 3, name: "Lithium", weight: 6.941 },
  { position: 4, name: "Beryllium", weight: 9.0122 },
  { position: 5, name: "Boron", weight: 10.811 }
];

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.css"]
})
export class StoreComponent implements OnInit {
  stores: StoreModel = {};
  constructor(private _store: Store<AppState>) {}

  displayedColumns: string[] = ["position", "name", "weight"];
  dataSource = ELEMENT_DATA;
  branchChange(value) {
    this._store.dispatch(new UpdateBranch(value));
  }
  ngOnInit() {
    this._store.dispatch(new BranchRequest());
    this._store.select("branch").subscribe(branch => {
      if (branch.branchs)
        this.stores = branch.branchs as any;
      console.log(this.stores)
    });
  }
}
