import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatGridListModule, MatCardModule, MatFormFieldModule,
  MatInputModule, MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule,
  MatCheckboxModule, MatListModule, MatExpansionModule, MatMenuModule, MatTabsModule,
  MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatTableModule,
  MatPaginatorModule,MatSortModule,MatButtonToggleModule,MatRadioModule,MatTreeModule,MatStepperModule
} from '@angular/material';

import { FormsModule,ReactiveFormsModule }   from '@angular/forms'
@NgModule({
  imports: [MatGridListModule,
    MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule,
    MatButtonModule, MatSidenavModule, MatToolbarModule, MatCheckboxModule, MatListModule,
    MatExpansionModule, MatMenuModule, FlexLayoutModule, MatTabsModule, MatSelectModule,
    MatDatepickerModule,MatNativeDateModule,MatTableModule,MatPaginatorModule,MatSortModule,
    MatButtonToggleModule,MatRadioModule,FormsModule,ReactiveFormsModule,MatTreeModule,MatStepperModule],
  exports: [MatGridListModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatSidenavModule,
    MatToolbarModule, MatMenuModule, FlexLayoutModule, MatTabsModule,MatDatepickerModule
    , MatCheckboxModule, MatListModule, MatExpansionModule, MatSelectModule,
    MatNativeDateModule,MatTableModule,MatPaginatorModule,MatSortModule,
    MatButtonToggleModule,MatRadioModule,FormsModule,ReactiveFormsModule,MatTreeModule,MatStepperModule],
  declarations: []
})
export class AppMatModule { }
