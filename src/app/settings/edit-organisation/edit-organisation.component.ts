import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from "@app/auth/api.service";
import { validateWhiteSpace } from "@app/util/validators";
import { error_message } from "../new-organisation/error-message";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-edit-organisation",
  templateUrl: "./edit-organisation.component.html",
  styleUrls: ["./edit-organisation.component.css"]
})
export class EditOrganisationComponent implements OnInit {
  formData: FormGroup;
  error: any;
  file: any;
  constructor(
    private fb: FormBuilder,
    private _servie: ApiService,
    private _route: ActivatedRoute,
    private router: Router
  ) {}
  update() {
    this._servie
      .update("organisation/" + this._route.snapshot.paramMap.get("id"), {
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
    let id = this._route.snapshot.paramMap.get("id");
    this.formData = this.fb.group({
      name: this.fb.control("", [Validators.required, validateWhiteSpace]),
      add1: this.fb.control(""),
      add2: this.fb.control(""),
      add3: this.fb.control(""),
      pincode: this.fb.control("", [Validators.pattern("^[1-9][0-9]{5}$")]),
      phone: this.fb.control("", [Validators.pattern("^[1-9][0-9]{9}$")]),
      mobile: this.fb.control("", [Validators.pattern("^[1-9][0-9]{9}$")]),
      email_id: this.fb.control("", [
        Validators.required,
        Validators.email,
        validateWhiteSpace,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ]),
      gst_number: this.fb.control("", [validateWhiteSpace]),
      timing: this.fb.control("", [validateWhiteSpace]),
      logo_path: this.fb.control(""),
      org_id: this.fb.control("")
    });
    this._servie.index("organisation/" + id).subscribe(data => {
      data.timing = "ddd";
      // delete data.org_id;
      delete data.temp1;
      delete data.temp2;
      this.formData.setValue(data);
    });
  }
}
