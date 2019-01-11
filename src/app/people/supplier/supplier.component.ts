import { Component, OnInit, ViewChild } from '@angular/core';
import {displayHeader} from '@app/interface/supplier';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import {ROUTE_URL} from '@app/constants/client.url';
import {Store, select} from '@ngrx/store';
import {AppState} from '@app/store/app-store.module';
import {GetAllSupplierRequest} from '@app/store/actions/supplier.action';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
	displayedColumns: string[] = displayHeader;
  dataSource: MatTableDataSource<any>;
  branchList: any[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // routing
  addNewUser: string = `/${ROUTE_URL.DASHBOARD.INDEX}/${ROUTE_URL.PEOPLE.INDEX}/${ROUTE_URL.PEOPLE.SUPPLIER.NEW}`;
  constructor(private _store: Store<AppState>) { }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit() {
		this._store.pipe(select(store => store.supplier.supplier)).subscribe(list => {
			this.dataSource=list;
		})
    this._store.pipe(select(store => store.branch.branches)).subscribe(data => {
			this.branchList=data.branchList;
			if (data.currentBranch) {
				this._store.dispatch(new GetAllSupplierRequest(data.currentBranch.id))
			}
    })
    
  }

}
