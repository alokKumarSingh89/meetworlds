import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewVendorComponent implements OnInit {
  vendorId = new FormControl('', [Validators.required]);
  vendorName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required,Validators.email]);
  phone = new FormControl('', [Validators.required]);
  role = new FormControl('', [Validators.required]);
  status = new FormControl('', [Validators.required]);
  constructor() { }
  getErrorMessage(type) {
    if(type == "vendorId"){
      return this.vendorId.hasError('required') ? 'You must enter a value' :'';
    }else if( type=="vendorName"){
      return this.vendorName.hasError('required') ? 'You must enter a value' :'';
    }else if(type == "email"){
      return this.email.hasError('required') ? 'You must enter a value' :this.email.hasError('email')?'Please enter valid email id':'';
    }else if(type == "phone"){
      return this.phone.hasError('required') ? 'You must enter a value' :'';
    }else if(type == "role"){
      return this.role.hasError('required') ? 'You must enter a value' :'';
    }else if(type == "status"){
      return this.status.hasError('required') ? 'You must enter a value' :'';
    }
  }
  ngOnInit() {
  }   

}
