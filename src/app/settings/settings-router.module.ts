import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AppMatModule } from "@app/app-mat/app-mat.module";
import { NbCardModule } from "@nebular/theme";
import { OrganisationComponent } from "./organisation/organisation.component";
import { NewOrganisationComponent } from "./organisation/new-organisation/new-organisation.component";
import { FileUploadComponent } from "@app/util/file-upload/file-upload.component";
import { EditOrganisationComponent } from "./organisation/edit-organisation/edit-organisation.component";
import { CategoriesComponent } from "./categories/categories.component";
import { NewCategoryComponent } from "./categories/new-category/new-category.component";
import { BranchComponent } from "./branch/branch.component";
import { NewBranchComponent } from "./branch/new-branch/new-branch.component";
import { EditBranchComponent } from "./branch/edit-branch/edit-branch.component";

const routes: Routes = [
  {
    path: "organisation/new",
    component: NewOrganisationComponent
  },
  {
    path: "organisation/:id/edit",
    component: EditOrganisationComponent
  },
  {
    path: "organisation",
    component: OrganisationComponent
  },
  {
    path: "categories",
    component: CategoriesComponent
  },
  {
    path: "categories/new",
    component: NewCategoryComponent
  },
  {
    path: "branch/new",
    component: NewBranchComponent
  },
  {
    path: "branch/:id/edit",
    component: EditBranchComponent
  },
  {
    path: "branch",
    component: BranchComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppMatModule,
    NbCardModule
  ],
  exports: [RouterModule],
  declarations: [
    NewCategoryComponent,
    OrganisationComponent,
    NewOrganisationComponent,
    FileUploadComponent,
    EditOrganisationComponent,
    CategoriesComponent,
    BranchComponent,
    NewBranchComponent,
    EditBranchComponent
  ]
})
export class SettingsRouterModule {}
