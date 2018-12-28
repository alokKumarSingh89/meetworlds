import { Component, OnInit } from '@angular/core';
import { getMenuList } from '../layout/menu'
import { StoreModel } from '../models/store.model';
import { Store ,select} from '@ngrx/store';
import { AppState } from '@app/store/app-store.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  menu;
  stores: StoreModel = {};
  constructor(private _store: Store<AppState>) { }
  branchSelect = false;
  activeEvent = null;
  currentBranch = null;
  ngOnInit() {
    
    this._store.pipe(select(store=>store.auth.user)).subscribe(user=>{
      if(user)
        this.menu = getMenuList(user.user_role)
    })
    this._store.select("branch").subscribe(branch => {
      if (branch.branchs)
        this.stores = {
          currentBranch: branch.branchs.currentBranch as any
        };
    });
  }

}
