import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ItemsComponent } from "./items/items.component";
import { AppMatModule } from "@app/app-mat/app-mat.module";
import { NewItemComponent } from "./new-item/new-item.component";
import { DetailItemComponent } from "./detail-item/detail-item.component";
import { CategoryComponent } from "./category/category.component";
import { NbCardModule } from "@nebular/theme";
import { ItemsService } from "./items.service";

const routes: Routes = [
  {
    path: "new",
    component: NewItemComponent
  },
  {
    path: ":id",
    component: DetailItemComponent
  },
  {
    path: "category",
    component: CategoryComponent
  },
  {
    path: "",
    component: ItemsComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), AppMatModule,NbCardModule],
  exports: [RouterModule],
  declarations: [ItemsComponent,NewItemComponent,DetailItemComponent,CategoryComponent],
  providers:[ItemsService]
})
export class ItemsRoutingModule {}
