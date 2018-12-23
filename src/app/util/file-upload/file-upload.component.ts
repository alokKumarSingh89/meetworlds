import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  img:any="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image";
  constructor() { }
  @Input() name:any;
  @Input() id:string;
  @Input() path:string;
  @Input() extention:string;

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
    console.log(this.id,this.path,this.extention)
    this.img = this.extention?`http://localhost:4000/api/${this.path}${this.id}${this.extention}?time=${(new Date()).getTime()}`:this.img;
  }

}
