import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-newchannel',
  templateUrl: './newchannel.component.html',
  styleUrls: ['./newchannel.component.css']
})
export class NewchannelComponent implements OnInit {
  
  
  channelId = new FormControl('', [Validators.required]);
  channelName = new FormControl('', [Validators.required]);
  status = new FormControl('', [Validators.required]);
  getErrorMessage(type) {
    if(type == "channelId"){
      return this.channelId.hasError('required') ? 'You must enter a value' :'';
    }else if( type=="channelName"){
      return this.channelName.hasError('required') ? 'You must enter a value' :'';
    }else if(type == "status"){
      return this.status.hasError('required') ? 'You must enter a value' :'';
    }
  }
  constructor() { }

  ngOnInit() {
   
  }
  

}
