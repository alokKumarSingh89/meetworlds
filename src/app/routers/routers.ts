import { Routes } from "@angular/router";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { StoreComponent } from "../dashboard/store/store.component";
import { AuthenticationGuard } from "@app/guard/auth.guard";
import { ROUTE_URL } from "@app/constants/client.url";
import { RoleGuard } from "@app/guard/role.guard";
export const routes: Routes = [
  {
    path: "dashboard",
    canActivate: [AuthenticationGuard],
    component: DashboardComponent,
    children: [
      { path: "", redirectTo: "store", pathMatch: "full" },
      { path: "store", component: StoreComponent },
			{
        path: "sales",
        loadChildren: "@app/sales-routing/sales-routing.module#SalesRoutingModule"
      },
      {
        path: "settings",
        data:{
          role:'SuperAdmin'
        },
        canActivate:[RoleGuard],
        loadChildren: "@app/settings/settings.module#SettingsModule"
      },
      {
        path: ROUTE_URL.PEOPLE.INDEX,
        data:{
          role:'SuperAdmin'
        },
        loadChildren: "@app/people/people-routing.module#PeopleRoutingModule",
        canActivate:[RoleGuard]
      }
    ]
  },
  {
    path: "",
    loadChildren: "@app/auth/login/login.module#LoginModule"
  }
];
