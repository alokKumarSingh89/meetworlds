import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { validateWhiteSpace } from "@app/util/validators";
import { error_message } from "./error-message";
import { ApiService } from "@app/auth/api.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-edit-branch",
  templateUrl: "./edit-branch.component.html",
  styleUrls: ["./edit-branch.component.css"]
})
export class EditBranchComponent implements OnInit {
  formData: FormGroup;
  error: any;
  constructor(
    private fb: FormBuilder,
    private _servie: ApiService,
    private _route: ActivatedRoute,
    private router: Router
  ) {}
  update() {
    this._servie
      .update("branch/" + this._route.snapshot.paramMap.get("id"), {
        ...this.formData.value
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
    let id = this._route.snapshot.paramMap.get("id");
    this.formData = this.fb.group({
      id: this.fb.control(""),
      org_id: this.fb.control(""),
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
    this._servie.index("branch/" + id).subscribe(data => {
      this.formData.setValue(data);
    });
  }
}
