import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {environment} from '@env/environment'
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  img:any="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image";
  constructor() { }
  @Input() name:any;
  @Input() path:string;
  @Input() filename:string;

  @Output() fileUpload: EventEmitter<any> = new EventEmitter<any>();

  onPickFile(type){
    type.click();
  }
  onFilePicked(event){
    var reader = new FileReader();
    let files = event.target.files[0];
    reader.onload = () =>{
      this.img = reader.result;
    };
    this.fileUpload.emit(files);
    reader.readAsDataURL(files);
  }
  ngOnInit() {
    console.log(this.path,this.filename)
    this.img = this.filename ? `${environment}/api/${this.path}${this.filename}?time=${(new Date()).getTime()}`:this.img;
  }

}
