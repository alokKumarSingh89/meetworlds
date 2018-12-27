import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from "@app/auth/api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { error_message } from "./error-message";
import { validateWhiteSpace } from "@app/util/validators";
import API_URL from "@app/models/UrlConstant";

@Component({
  selector: "app-edit-category",
  templateUrl: "./edit-category.component.html",
  styleUrls: ["./edit-category.component.css"]
})
export class EditCategoryComponent implements OnInit {
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
      .update(
        API_URL.CATEGORY.PUT + this._route.snapshot.paramMap.get("id"),
        {
          ...this.formData.value,
          file: this.file
        },
        true
      )
      .subscribe(response => {
        window.history.back();
      });
  }
  goToCategories() {
    this.router.navigate(["/dashboard/settings/categories"]);
  }

  setFile(event) {
    this.file = event;
  }
  ngOnInit() {
    this.error = error_message;
    let id = this._route.snapshot.paramMap.get("id");
    this.formData = this.fb.group({
      id: this.fb.control(""),
      name: this.fb.control("", [Validators.required, validateWhiteSpace]),
      description: this.fb.control(""),
      image_path: this.fb.control("")
    });
    this._servie.index(API_URL.CATEGORY.GETONE + id).subscribe(data => {
      this.formData.setValue(data);
    });
  }
}
