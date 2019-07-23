import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agGrid';
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private sortingOrder;
  constructor(private http:HttpClient){
    this.columnDefs=[
      {
        headerName:"Athlete",
        field:"athlete",
        width:150,
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"Age",
        field:"age",
        width:150,
        sortingOrder:["desc","asc"]


      },
      {
        headerName:"Country",
        field:"country",
        width:150,
        sortingOrder:["desc",null]


      },
      {
        headerName:"Year",
        field:"year",
        width:150,
        sortingOrder:["asc"]


      },
      {
        headerName:"Gold",
        field:"gold",
        width:100,


      },
      {
        headerName:"Silver",
        field:"silver",
        width:100,


      },
      {
        headerName:"Bronze",
        field:"bronze",
        width:100,


      },
      {
        headerName:"Total",
        field:"total",
        width:100,


      }
    ];
    this.sortingOrder=["asc","desc",null]
  }
onGridReady(params){
  this.gridApi=params.api;
  this.gridColumnApi=params.columnApi;
  this.http
  .get("http://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json")
 // let dataValue=[{"firstName":"Vara","age":21},{"firstName":"Suni","age":22}]
 .subscribe(data=>{
 params.api.setRowData(data);
 })
}

}
