import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { validateWhiteSpace } from "@app/util/validators";
import { error_message } from "./error-message";
import { ApiService } from "@app/auth/api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AppState } from "@app/store/app-store.module";
import { Store } from "@ngrx/store";
import { Organisation } from "@app/models/organisation.model";
@Component({
  selector: "app-new-branch",
  templateUrl: "./new-branch.component.html",
  styleUrls: ["./new-branch.component.css"]
})
export class NewBranchComponent implements OnInit {
  formData: FormGroup;
  error: any;
  org_id: number;
  constructor(
    private fb: FormBuilder,
    private _servie: ApiService,
    private _route: ActivatedRoute,
    private router: Router,
    private _store: Store<AppState>
  ) {}
  submit() {
    console.log("org_idorg_idorg_id:::::::::;;;", this.org_id);
    this._servie
      .create("branch/create", {
        ...this.formData.value,
        org_id: this.org_id
      })
      .subscribe(response => {
        window.history.back();
      });
  }
  goTobranch() {
    this.router.navigate(["/dashboard/settings/branch"]);
  }
  ngOnInit() {
    this.error = error_message;
    this.formData = this.fb.group({
      name: this.fb.control("", [Validators.required, validateWhiteSpace]),
      address: this.fb.control("", [Validators.required, validateWhiteSpace]),
      pincode: this.fb.control("", [
        Validators.required,
        validateWhiteSpace,
        Validators.pattern("^[1-9][0-9]{5}$")
      ]),
      mobile: this.fb.control("", [
        Validators.required,
        validateWhiteSpace,
        Validators.pattern("^[1-9][0-9]{9}$")
      ]),
      delivery_charge: this.fb.control("", [
        Validators.required,
        validateWhiteSpace,
        Validators.pattern("^[0-9]\\d{0,7}(\\.\\d{1,2})?%?$")
      ]),
      min_order_amount: this.fb.control("", [
        Validators.required,
        validateWhiteSpace,
        Validators.pattern("^[0-9]\\d{0,7}(\\.\\d{1,2})?%?$")
      ]),
      message: this.fb.control("")
    });
    this._store.select("organisation").subscribe((organisation: any) => {
      
      this.org_id = organisation.id;
    });
  }
}
