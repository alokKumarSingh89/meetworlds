import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from '@app/store/app-store.module';
import { LoadRole } from '@app/store/actions/role.action';
import { validateWhiteSpace } from '@app/util/validators';
import { error_message } from '@app/constants/user.error';
import API_URL from '@app/constants/UrlConstant';
import { CreateUser } from '@app/store/actions/auth.action';
import { Router } from '@angular/router';
import { ROUTE_URL } from '@app/constants/client.url';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewUserComponent implements OnInit {
  userForm: FormGroup;
  roleList:any;
  branchList:object[];
  constructor(private _store: Store<AppState>, private _fb: FormBuilder,private router: Router) { }
  error = error_message;
  createUser(){
    let form = this.userForm.value;
    form.login = form.email;
    this._store.dispatch(new CreateUser(API_URL.USER.POST,form));
    this.router.navigate([`/${ROUTE_URL.DASHBOARD.INDEX}/${ROUTE_URL.PEOPLE.INDEX}/${ROUTE_URL.PEOPLE.USER.INDEX}`]);
  }
  ngOnInit() {
    console.log(this.error)
    this.userForm = this._fb.group({
      first_name: this._fb.control("", []),
      last_name: this._fb.control("", []),
      user_role: this._fb.control("", [Validators.required]),
      email: this._fb.control("", [Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),Validators.required, validateWhiteSpace]),
      PASSWORD: this._fb.control("", [Validators.required,validateWhiteSpace,Validators.minLength(5)]),
      activated: this._fb.control("1", []),
      login: this._fb.control("", []),
      branch_id: this._fb.control("",[Validators.required])
    });
    this._store.pipe(select(store=>store.roles.roles)).subscribe(data=>{
      if(data){
        this.roleList = data;
      }
    })
    this._store.pipe(select(store=>store.branch.branches.branchList)).subscribe(data=>{
      this.branchList = data;
    })
    this._store.dispatch(new LoadRole());
  }
}
