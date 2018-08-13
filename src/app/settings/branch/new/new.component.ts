import { Component, OnInit } from '@angular/core';

import {FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewBranchComponent implements OnInit {


  branchId = new FormControl('', [Validators.required]);
  branchName = new FormControl('', [Validators.required]);
  status = new FormControl('', [Validators.required]);
  constructor() { }
  getErrorMessage(type) {
    if(type == "branchId"){
      return this.branchId.hasError('required') ? 'You must enter a value' :'';
    }else if( type=="branchName"){
      return this.branchName.hasError('required') ? 'You must enter a value' :'';
    }else if(type == "status"){
      return this.status.hasError('required') ? 'You must enter a value' :'';
    }
  }
  ngOnInit() {
  }

}
