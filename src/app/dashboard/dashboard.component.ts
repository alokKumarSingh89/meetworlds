import { Component, OnInit } from '@angular/core';
import {MENU_ITEMS} from '../layout/menu'
import { StoreModel } from '../models/store.model';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store/app-store.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  menu = MENU_ITEMS;
  stores: StoreModel = {};
  constructor(private _store: Store<AppState>) {}
  branchSelect = false;
  activeEvent = null;
  currentBranch = null;
  ngOnInit() {
    this._store.select("branch").subscribe(branch => {
      if (branch.branchs)
        this.stores = {
          currentBranch: branch.branchs.currentBranch as any
        };
    });
  }
  
}
