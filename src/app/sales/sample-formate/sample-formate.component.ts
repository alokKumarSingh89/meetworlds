import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
export interface Food {
  value: string;
  viewValue: string;
}
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
}
/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
@Component({
  selector: 'app-sample-formate',
  templateUrl: './sample-formate.component.html',
  styleUrls: ['./sample-formate.component.css']
})
export class SampleFormateComponent implements OnInit {
  displayedColumns: string[] = ['id', 'invoiceid','salechannel', 'subtotal', 'charges','siscounts','sgst','cgst',
  'total','RoundOff','CustomerName','CustomerPhone','CustomerAddress'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() {
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    this.dataSource = new MatTableDataSource(users);
   }
   foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    color1: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    color2: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    color3: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    color4: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    color5: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    color6: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    color7: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    color8: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    color9: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
  };
}