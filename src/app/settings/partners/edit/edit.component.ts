import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormControl, Validators, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditPartnerComponent implements OnInit {
  private sub:any;
  partnerId = new FormControl('', [Validators.required]);
  partnerName = new FormControl('', [Validators.required]);
  status = new FormControl('', [Validators.required]);
  getErrorMessage(type) {
    if(type == "partnerId"){
      return this.partnerId.hasError('required') ? 'You must enter a value' :'';
    }else if( type=="partnerName"){
      return this.partnerName.hasError('required') ? 'You must enter a value' :'';
    }else if(type == "status"){
      return this.status.hasError('required') ? 'You must enter a value' :'';
    }
  }
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params=>{
      this.partnerId.setValue(params['id']);
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    
  }

}
