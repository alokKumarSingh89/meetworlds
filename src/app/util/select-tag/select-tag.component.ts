import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-select-tag",
  templateUrl: "./select-tag.component.html",
  styleUrls: ["./select-tag.component.css"]
})
export class SelectTagComponent implements OnInit {
  displayDataArr: any;
  constructor() {}
  @Input() dataArr: any;

  ngOnInit() {
    //this.dataArr.displayDataArr=this.dataArr;
    this.dataArr.displayDataArr = [
      { id: 1, name: "GRMS" },
      { id: 2, name: "KG" },
      { id: 3, name: "NOS" }
    ];
  }
}
