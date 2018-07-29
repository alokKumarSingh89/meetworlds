import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewPartnerComponent implements OnInit {
  partnerId = new FormControl('', [Validators.required]);
  partnerName = new FormControl('', [Validators.required]);
  status = new FormControl('', [Validators.required]);
  constructor() { }
  getErrorMessage(type) {
    if(type == "partnerId"){
      return this.partnerId.hasError('required') ? 'You must enter a value' :'';
    }else if( type=="partnerName"){
      return this.partnerName.hasError('required') ? 'You must enter a value' :'';
    }else if(type == "status"){
      return this.status.hasError('required') ? 'You must enter a value' :'';
    }
  }
  ngOnInit() {
  }

}
