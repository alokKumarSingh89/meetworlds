import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {User,displayHeader} from '../../interface/user';
import { ROUTE_URL } from '@app/constants/client.url';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store/app-store.module';
import { LoadRole } from '@app/store/actions/role.action';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = displayHeader;
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // routing
  addNewUser:string = `/${ROUTE_URL.DASHBOARD.INDEX}/${ROUTE_URL.PEOPLE.INDEX}/${ROUTE_URL.PEOPLE.USER.NEW}`;
  editUrl(id):string{
    return `/${ROUTE_URL.DASHBOARD.INDEX}/${ROUTE_URL.PEOPLE.INDEX}/${id}/${ROUTE_URL.PEOPLE.USER.NEW}`;
  }
  constructor(private _store:Store<AppState>) { 
    // this.dataSource = new MatTableDataSource(users);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit() {
    this._store.dispatch(new LoadRole());
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

}
