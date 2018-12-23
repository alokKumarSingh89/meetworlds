import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store/app-store.module';
import { ItemRequest } from '@app/store/actions/items.action';
import { ItemDTO } from '@app/models/items.model';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private _store:Store<AppState>) { }
  displayedColumns: string[] = ['select','NAME','QUANTITY','UNIT','PRICE','AVALIBLEQ_P']
  dataSource:any;
  selection = new SelectionModel<ItemDTO>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  ngOnInit() {
    this._store.dispatch(new ItemRequest());
    
    this._store.select("items").subscribe((items:any)=>{
      let data:ItemDTO[] = [];
      if(items.items){
        items.items.map((item:ItemDTO)=>{
          data.push(item)
        })
      }
      this.dataSource = new MatTableDataSource<ItemDTO>(data);
     
    })
  }
}
