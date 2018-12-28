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
      category_id: this.fb.control(""),
      name: this.fb.control("", [Validators.required, validateWhiteSpace]),
      quantity: this.fb.control(""),
      unit_id: this.fb.control(""),
      price: this.fb.control(""),
      available_q_p: this.fb.control(""),
      description: this.fb.control(""),
      cut_type: this.fb.control(""),
      image_path: this.fb.control(""),
      spec: this.fb.control("")
    });
    this._servie.index(API_URL.ItemUnit.GETALL).subscribe(data => {
      this.item_units = data;
    });
    this._servie.index(API_URL.CATEGORY.GETALL).subscribe(data => {
      this.categories = data;
    });
  }
}
