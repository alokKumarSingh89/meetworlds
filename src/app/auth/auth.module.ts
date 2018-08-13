import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component'
import {AppMatModule} from '../app-mat/app-mat.module'
import { FormsModule,ReactiveFormsModule }   from '@angular/forms'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    AppMatModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
