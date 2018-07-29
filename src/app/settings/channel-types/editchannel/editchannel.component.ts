import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormControl, Validators, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-editchannel',
  templateUrl: './editchannel.component.html',
  styleUrls: ['./editchannel.component.css']
})
export class EditchannelComponent implements OnInit {
  private sub:any;
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
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params=>{
      this.channelId.setValue(params['id']);
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
