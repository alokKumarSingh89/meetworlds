import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { validateWhiteSpace } from "@app/util/validators";
import { error_message } from "./error-message";
import { ApiService } from "@app/auth/api.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-new-branch",
  templateUrl: "./new-branch.component.html",
  styleUrls: ["./new-branch.component.css"]
})
export class NewBranchComponent implements OnInit {
  formData: FormGroup;
  error: any;
  constructor(
    private fb: FormBuilder,
    private _servie: ApiService,
    private _route: ActivatedRoute,
    private router: Router
  ) {}
  submit() {
    this._servie
      .create("branch/create", {
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
    this.formData = this.fb.group({
      name: this.fb.control("", [Validators.required, validateWhiteSpace]),
      address: this.fb.control(""),
      pincode: this.fb.control("", [Validators.pattern("^[1-9][0-9]{5}$")]),
      mobile: this.fb.control("", [
        Validators.required,
        Validators.pattern("^[1-9][0-9]{9}$")
      ])
    });
  }
}
