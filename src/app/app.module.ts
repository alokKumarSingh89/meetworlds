import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppMatModule} from './app-mat/app-mat.module'
import {routes} from './routers/routers'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppMatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
