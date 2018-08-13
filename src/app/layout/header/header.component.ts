import { Component, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import {Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService,private route:Router) { }
  toggleSidebar():boolean{
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }
  goToHome(){
    this.route.navigateByUrl('/dashboard')
  }
  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
  ngOnInit() {
  }

}
