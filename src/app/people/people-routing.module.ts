import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ROUTE_URL } from "@app/constants/client.url";
import { EditUserComponent } from "./users/edit/edit.component";
import { NewUserComponent } from "./users/new/new.component";
import { UsersComponent } from "./users/users.component";
import { AppMatModule } from "@app/app-mat/app-mat.module";
import { NbCardModule } from "@nebular/theme";

const routes: Routes = [
  {
    path: ROUTE_URL.PEOPLE.USER.EDIT,
    component: EditUserComponent
  },
  {
    path: ROUTE_URL.PEOPLE.USER.NEW,
    component: NewUserComponent
  },
  {
    path: ROUTE_URL.PEOPLE.USER.INDEX,
    component: UsersComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppMatModule,
    NbCardModule
  ],
  declarations: [EditUserComponent, NewUserComponent, UsersComponent],
  exports: [RouterModule]
})
export class PeopleRoutingModule {}
