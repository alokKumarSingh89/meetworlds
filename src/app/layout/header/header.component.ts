import { Component, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService, NbMenuItem } from '@nebular/theme';
import { Router } from '@angular/router'
import { Store, select } from '@ngrx/store';
import { AppState } from '@app/store/app-store.module';
import { GetWhoIm } from '@app/store/actions/auth.action';
import { User } from '@app/models/user.model';
import { filter } from 'rxjs/operators';
import { AuthService } from '@app/auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;
  organisationName: string;
  branches: any = {
    currentBranch: "",
    branchList: []
  };
  constructor(private _auth: AuthService, private sidebarService: NbSidebarService, private route: Router, private _store: Store<AppState>, private _menuService: NbMenuService) { }
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }
  goToHome() {
    this.route.navigateByUrl('/dashboard')
  }
  userMenu = [{ title: 'Profile', data: { id: 'profile' } }, { title: 'Log out', data: { id: 'logout' } }];
  ngOnInit() {
    this._store.dispatch(new GetWhoIm());
    this._store.pipe(select(store => store.error.error)).subscribe(error => {
      if (error && error.tokenStatus) {
        this._auth.logOut();
        window.location.reload()
      }
    })
    this._store.pipe(select(store => store.organisation.organisation)).subscribe(org => {
      if (org)
        this.organisationName = org.name;
    })
    this._store.pipe(select(store => store.branch.branches.currentBranch)).subscribe(currentBranch => {
      if (currentBranch) {
        this.branches.currentBranch = currentBranch;
      }
    })
    this._store.pipe(select(store => store.branch.branches.branchList)).subscribe(branchList => {
      if (branchList) {
        this.branches.branchList = branchList;
      }
      console.log(this.branches)
    })
    this._menuService.onItemClick()
      .subscribe((item: any) => {
        if (item.item.data.id === "logout") {
          this._auth.logOut();
          window.location.reload()
        }

      })
  }
  ngAfterViewInit() {
    this._store.select('auth').subscribe((obj: any) => {
      if (obj.user) {
        let userDto = {} as User;
        userDto.first_name = obj.user.first_name;
        userDto.last_name = obj.user.last_name;
        userDto.email = obj.user.email;
        userDto.token = obj.user.token;
        userDto.user_role = obj.user.user_role;
        userDto.activated = obj.user.activated;
        this.user = userDto;
      }
    })
  }

}
