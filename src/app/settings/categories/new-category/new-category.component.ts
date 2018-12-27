import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '@app/auth/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error_message } from '@app/constants/category.error';
import { validateWhiteSpace } from '@app/util/validators';
@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {
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
      .create("category/create",{ ...this.formData.value, file: this.file })
      .subscribe(response => {
        window.history.back();
      });
  }
  goToOrganisation() {
    this.router.navigate(["/dashboard/settings/categories"]);
  }

  setFile(event) {
    this.file = event;
  }
  ngOnInit() {
    this.error = error_message;
    this.formData = this.fb.group({
      name: this.fb.control("", [Validators.required, validateWhiteSpace]),
      description: this.fb.control(""),
      image_path: this.fb.control("")
    });
  }

}
