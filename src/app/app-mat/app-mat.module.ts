import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule,MatCardModule,MatFormFieldModule,
  MatInputModule,MatIconModule,MatButtonModule} from '@angular/material';
@NgModule({
  imports: [CommonModule,BrowserAnimationsModule,MatGridListModule,
    MatCardModule,MatFormFieldModule,MatInputModule,MatIconModule,
    MatButtonModule],
  exports:[BrowserAnimationsModule,MatGridListModule,MatCardModule,
    MatFormFieldModule,MatInputModule,MatIconModule,MatButtonModule],
  declarations: []
})
export class AppMatModule { }
