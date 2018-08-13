import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormControl, Validators, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditBranchComponent implements OnInit {
  private sub:any;
  branchId = new FormControl('', [Validators.required]);
  branchName = new FormControl('', [Validators.required]);
  status = new FormControl('', [Validators.required]);
  getErrorMessage(type) {
    if(type == "branchId"){
      return this.branchId.hasError('required') ? 'You must enter a value' :'';
    }else if( type=="branchName"){
      return this.branchName.hasError('required') ? 'You must enter a value' :'';
    }else if(type == "status"){
      return this.status.hasError('required') ? 'You must enter a value' :'';
    }
  }
  constructor(private route: ActivatedRoute) { }
  lists = [{name:"Numbers",value:"080 6535 9769"},{name:"email",value:'test@fff'}]
  ngOnInit() {
    this.sub = this.route.params.subscribe(params=>{
      this.branchId.setValue(params['id']);
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    
  }

}
