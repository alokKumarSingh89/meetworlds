import { Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079},
  {position: 2, name: 'Helium', weight: 4.0026},
  {position: 3, name: 'Lithium', weight: 6.941},
  {position: 4, name: 'Beryllium', weight: 9.0122},
  {position: 5, name: 'Boron', weight: 10.811}
];
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }
  selectedStore = 'meat-mert';
  selectedBranch = ''
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;
  stores: any[] = [
    {value: 'meat-mert', viewValue: 'Meat Mert'}
  ];
  branches: any[] = [
    {value: 'marathali-meat-mart', viewValue: 'Marathali Meat Mart'},
    {value: 'bellendur-meat-mart', viewValue: 'Bellendur Meat Mart'}
  ];
  branchChange(value){
    this.router.navigate(['/dashboard'], { queryParams: { branch: value } });
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params=>{
      if(params['branch']){
        this.selectedBranch = params['branch'];
      }
    })
  }

}
