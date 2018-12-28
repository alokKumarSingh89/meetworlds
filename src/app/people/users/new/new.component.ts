import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store/app-store.module';
import { LoadRole } from '@app/store/actions/role.action';
import { validateWhiteSpace } from '@app/util/validators';
import { error_message } from '@app/constants/user.error';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewUserComponent implements OnInit {
  userForm: FormGroup;
  constructor(private _store: Store<AppState>, private _fb: FormBuilder) { }
  error = error_message;
  ngOnInit() {
    this.userForm = this._fb.group({
      first_name: this._fb.control("", []),
      last_name: this._fb.control("", []),
      user_role: this._fb.control("", [validateWhiteSpace]),
      email: this._fb.control("", [Validators.email, validateWhiteSpace]),
      PASSWORD: this._fb.control("", [validateWhiteSpace]),
      activated: this._fb.control("1", []),
      login: this._fb.control("1", []),
      branch_id: this._fb.control("")
    });
    this._store.dispatch(new LoadRole());
  }
}
