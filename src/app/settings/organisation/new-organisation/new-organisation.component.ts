import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { validateWhiteSpace } from "@app/util/validators";
import { error_message } from "./error-message";
import { ApiService } from "@app/auth/api.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-new-organisation",
  templateUrl: "./new-organisation.component.html",
  styleUrls: ["./new-organisation.component.css"]
})
export class NewOrganisationComponent implements OnInit {
  formData: FormGroup;
  error: any;
  file: any;
  constructor(
    private fb: FormBuilder,
    private _servie: ApiService,
    private _route: ActivatedRoute,
    private router: Router
  ) {}
  submit() {
    this._servie
      .create("organisation/create", {
        ...this.formData.value,
        file: this.file
      })
      .subscribe(response => {
        window.history.back();
      });
  }
  goToOrganisation() {
    this.router.navigate(["/dashboard/settings/organisation"]);
  }

  setFile(event) {
    this.file = event;
  }
  ngOnInit() {
    this.error = error_message;
    this.formData = this.fb.group({
      name: this.fb.control("", [Validators.required, validateWhiteSpace]),
      address1: this.fb.control("", [Validators.required, validateWhiteSpace]),
      address2: this.fb.control(""),
      address3: this.fb.control(""),
      pincode: this.fb.control("", [
        Validators.required,
        Validators.pattern("^[1-9][0-9]{5}$")
      ]),
      phone: this.fb.control("", [Validators.pattern("^[1-9][0-9]{9}$")]),
      mobile: this.fb.control("", [
        Validators.required,
        Validators.pattern("^[1-9][0-9]{9}$")
      ]),
      email_id: this.fb.control("", [
        Validators.required,
        Validators.email,
        validateWhiteSpace,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ]),
      gstin: this.fb.control("", [
        validateWhiteSpace,
        Validators.pattern(
          "^([0]{1}[1-9]{1}|[1-2]{1}[0-9]{1}|[3]{1}[0-7]{1})([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$"
        )
      ]),
      timing: this.fb.control(""),
      logo_path: this.fb.control("")
    });
  }
}
