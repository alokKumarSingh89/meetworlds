import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatGridListModule, MatCardModule, MatFormFieldModule,
  MatInputModule, MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule,
  MatCheckboxModule, MatListModule, MatExpansionModule, MatMenuModule, MatTabsModule,
  MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatTableModule,
  MatPaginatorModule,MatSortModule
} from '@angular/material';
@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, MatGridListModule,
    MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule,
    MatButtonModule, MatSidenavModule, MatToolbarModule, MatCheckboxModule, MatListModule,
    MatExpansionModule, MatMenuModule, FlexLayoutModule, MatTabsModule, MatSelectModule,
    MatDatepickerModule,MatNativeDateModule,MatTableModule,MatPaginatorModule,MatSortModule],
  exports: [BrowserAnimationsModule, MatGridListModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatSidenavModule,
    MatToolbarModule, MatMenuModule, FlexLayoutModule, MatTabsModule,MatDatepickerModule
    , MatCheckboxModule, MatListModule, MatExpansionModule, MatSelectModule,
    MatNativeDateModule,MatTableModule,MatPaginatorModule,MatSortModule],
  declarations: []
})
export class AppMatModule { }
