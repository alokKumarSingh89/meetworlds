import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

  constructor() { }
  lists = [{name:"Numbers",value:"080 6535 9769"},{name:"email",value:'test@fff'}]
  ngOnInit() {
  }

}
