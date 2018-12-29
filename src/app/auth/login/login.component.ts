import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Store, select } from "@ngrx/store";
import { AppState } from "@app/store/app-store.module";
import { validateWhiteSpace } from "@app/util/validators";
import { error_message } from "./error-message";
import { LoginUser } from "@app/store/actions/auth.action";
import { Route, ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private _store: Store<AppState>,
    private route: ActivatedRoute,
    private router:Router,
    private _auth:AuthService
  ) {}

  loginForm: FormGroup;
  returnUrl: string = "";
  error: any;

  login() {
    let val = this.loginForm.getRawValue();
    this._store.dispatch(new LoginUser({...val,user_role:0,activated:1}));
    
  }
  ngOnInit() {
    this.route.queryParams.subscribe(
      params => (this.returnUrl = params["returnUrl"] || "/dashboard")
    );
    this.error = error_message;
    this.loginForm = this.fb.group({
      email: this.fb.control("", [
        Validators.required,
        Validators.email,
        validateWhiteSpace,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ]),
      PASSWORD: this.fb.control("", [
        Validators.required,
        Validators.minLength(5),
        validateWhiteSpace
      ])
    });
    this._store.pipe(select(store=>store.auth.user)).subscribe(user=>{
      this._auth.token = user?user.token:null;
      if(this._auth.token){
        this.router.navigate([this.returnUrl]);
      }
    })
  }
}
