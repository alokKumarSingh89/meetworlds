import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { User, displayHeader } from '../../interface/user';
import { ROUTE_URL } from '@app/constants/client.url';
import { Store, select } from '@ngrx/store';
import { AppState } from '@app/store/app-store.module';
import { LoadRole } from '@app/store/actions/role.action';
import { FetchAllUser } from '@app/store/actions/auth.action';
import API_URL from '@app/constants/UrlConstant';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = displayHeader;
  dataSource: MatTableDataSource<User>;
  branchList: any[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // routing
  addNewUser: string = `/${ROUTE_URL.DASHBOARD.INDEX}/${ROUTE_URL.PEOPLE.INDEX}/${ROUTE_URL.PEOPLE.USER.NEW}`;
  editUrl(id): string {
    return `/${ROUTE_URL.DASHBOARD.INDEX}/${ROUTE_URL.PEOPLE.INDEX}/${id}/${ROUTE_URL.PEOPLE.USER.NEW}`;
  }
  makeVisiable(activated){
    console.log(activated);
  }
  constructor(private _store: Store<AppState>) { }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getBranch(id) {
    if(!id){
      return "";
    }
    let branch = this.branchList.filter(branch => branch.id == id)[0];
    return branch.name;
  }
  ngOnInit() {
    this._store.pipe(select(store => store.branch.branches.branchList)).subscribe(data => {
      this.branchList = data;
    })
    this._store.pipe(select(store => store.roles.roles)).subscribe(roles => {
      console.log(roles)
      if (!roles) this._store.dispatch(new LoadRole());
    })
    this._store.pipe(select(store => store.auth)).subscribe(auth => {
      let user = auth.user;
      if (auth.userList) {
        let userlist = auth.userList.filter(users=>users.email !== user.email)
        this.dataSource = new MatTableDataSource(userlist);
      } else {
        this._store.dispatch(new FetchAllUser(API_URL.USER.GETALL))
      }
    })
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

}
