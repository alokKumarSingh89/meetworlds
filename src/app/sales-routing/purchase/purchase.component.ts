import { Component, OnInit } from '@angular/core';
import {ApiService} from '@app/auth/api.service';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  constructor(private _api: ApiService) {}
  organisation: any;
  isAddOrganisation: boolean = true;
  displayedColumns: string[] = ["Branch", "Supplier", "Total Amount", "Date"];
  dataSource: any;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  selection = new SelectionModel<any>(true, []);

  ngOnInit() {
    
  }
}
