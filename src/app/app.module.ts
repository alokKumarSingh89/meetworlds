import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NbThemeModule } from "@nebular/theme";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppComponent } from "./app.component";
import { AppMatModule } from "./app-mat/app-mat.module";
import { routes } from "./routers/routers";
import { DashboardModule } from "./dashboard/dashboard.module";
import { AuthModule } from "@app/auth/auth.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppStoreModule } from "@app/store/app-store.module";
import { AuthService } from "./auth/auth.service";
import {TokenInterceptor} from './auth/token.interceptor'
import {JWTInterceptor} from './auth/jwt.interceptor'
import { ItemsService } from "./items/items.service";
@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    NbThemeModule.forRoot({ name: "corporate" }),
    AppMatModule,
    DashboardModule,
    AuthModule,
    AppStoreModule
  ],
  providers: [AuthService,ItemsService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  },
  {
    provide:HTTP_INTERCEPTORS,
    useClass:JWTInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
