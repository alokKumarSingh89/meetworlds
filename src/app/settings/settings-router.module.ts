import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { AppMatModule } from '@app/app-mat/app-mat.module';
import { NbCardModule } from '@nebular/theme';
import { OrganisationComponent } from './organisation/organisation.component';
import { NewOrganisationComponent } from './new-organisation/new-organisation.component';
import { FileUploadComponent } from '@app/util/file-upload/file-upload.component';
import { EditOrganisationComponent } from './edit-organisation/edit-organisation.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewCategoryComponent } from './new-category/new-category.component';

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
  }
  
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes), AppMatModule,NbCardModule
  ],
  exports: [RouterModule],
  declarations: [NewCategoryComponent,OrganisationComponent,NewOrganisationComponent,FileUploadComponent, EditOrganisationComponent,CategoriesComponent]
})
export class SettingsRouterModule { }
