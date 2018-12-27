import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from "@app/auth/api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { error_message } from "./error-message";
import { validateWhiteSpace } from "@app/util/validators";
import API_URL from "@app/constants/UrlConstant";

@Component({
  selector: "app-new-item",
  templateUrl: "./new-item.component.html",
  styleUrls: ["./new-item.component.css"]
})
export class NewItemComponent implements OnInit {
  formData: FormGroup;
  error: any;
  file: any;
  item_units: any;
  categories: any;
  constructor(
    private fb: FormBuilder,
    private _servie: ApiService,
    private _route: ActivatedRoute,
    private router: Router
  ) {}
  submit() {
    console.log("Form data:::::::");
    console.log(this.formData);
    return;
    this._servie
      .create(
        API_URL.Item.POST,
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
  goToItems() {
    this.router.navigate(["/dashboard/settings/item"]);
  }

  setFile(event) {
    this.file = event;
  }
  ngOnInit() {
    this.error = error_message;
    this.formData = this.fb.group({
      name: this.fb.control("", [Validators.required, validateWhiteSpace]),
      description: this.fb.control(""),
      image_path: this.fb.control(""),
      category_id: this.fb.control(""),
      unit_id: this.fb.control("")
    });
    this._servie.index(API_URL.ItemUnit.GETALL).subscribe(data => {
      this.item_units = data;
      console.log("units::::", this.item_units);
    });
    this._servie.index(API_URL.CATEGORY.GETALL).subscribe(data => {
      this.categories = data;
      console.log("Categories::::::", this.categories);
    });
  }
}
