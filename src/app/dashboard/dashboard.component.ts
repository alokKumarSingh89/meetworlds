import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbMenuItem } from '@nebular/theme';
import {MENU_ITEMS} from '../layout/menu'
import {Location} from '@angular/common'
import {ActivatedRoute,Router, Params,ChildActivationEnd} from '@angular/router'
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  menu = MENU_ITEMS;
  constructor(private location: Location,private sidebarService: NbSidebarService,private route:Router,private activatedRoute:ActivatedRoute) {}
  branchSelect = false;
  activeEvent = null;
  currentBranch = null;
  ngOnInit() {

    this.route.events.pipe(
      filter(event => event instanceof ChildActivationEnd)
    )
    .subscribe((event) => {
          if(!event['snapshot']['queryParams']['branch'] && this.currentBranch){
          let url = this.location.path().split('?')[0];
          console.log(url)
          this.route.navigate([url], { queryParams: { branch: this.currentBranch } });
        }
    });
    this.activeEvent = this.activatedRoute.queryParams.subscribe((params:Params) =>{
      if(params['branch']){
        this.branchSelect = true;
        this.currentBranch = params['branch'] || ''
      }
    })
    
  }
  ngOnDestroy(): void {
    this.activeEvent.unsubscribe();
  }
}
