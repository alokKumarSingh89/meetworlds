import { Component, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService, NbMenuItem } from '@nebular/theme';
import {Router} from '@angular/router'
import { Store } from '@ngrx/store';
import { AppState } from '@app/store/app-store.module';
import { GetWhoIm } from '@app/store/actions/auth.action';
import { User } from '@app/models/user.model';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user:User;
  constructor(private sidebarService: NbSidebarService,private route:Router,private _store:Store<AppState>,private _menuService:NbMenuService) { }
  toggleSidebar():boolean{
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }
  goToHome(){
    this.route.navigateByUrl('/dashboard')
  }
  userMenu = [{ title: 'Profile',data:{id:'profile'} }, { title: 'Log out',data:{id:'logout'} }];
  ngOnInit() {
    this._store.dispatch(new GetWhoIm());
    this._menuService.onItemClick()
    // .pipe(filter(({tag})=>tag === 'my-context-menu'))
    .subscribe((item:any)=>{
      console.log(item)
      return item;
    })
  }
  ngAfterViewInit(){
    this._store.select('auth').subscribe((obj:any)=>{
      if(obj.user){
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
