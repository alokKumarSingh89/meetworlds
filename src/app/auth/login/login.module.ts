import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppMatModule } from "@app/app-mat/app-mat.module";
import { LoginRoutingModule } from './login-routing.module';
import {LoginComponent} from './login.component'
@NgModule({
  imports: [
    CommonModule,
    AppMatModule,
    NgbModule,
    LoginRoutingModule,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
