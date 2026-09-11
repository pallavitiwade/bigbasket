import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.scss']
})
export class NewCompComponent implements OnInit {

  // coffees = [
  //   {
  //     id: 1,
  //     name: 'Iced Caramel Latte',
  //     price: 199
  //   },
  //   {
  //     id: 2,
  //     name: 'Cappuccino',
  //     price: 169
  //   },
  //   {
  //     id: 3,
  //     name: 'Mocha',
  //     price: 189
  //   },
  //   {
  //     id: 4,
  //     name: 'Cold Coffee',
  //     price: 159
  //   }
  // ];

searchText:string=''
  constructor(
    private _search:SearchService
  ) { }

  ngOnInit(): void {
  }

  // filteredCoffees=this.coffees;

  // searchCoffee(){
  //   const search=this.searchText.toLowerCase().trim();

  //   if(search===''){
  //     this.filteredCoffees=this.coffees;
  //     return;
  //   }
  //   this.filteredCoffees=this.coffees.filter(c=>
  //     c.name.toLowerCase().includes(search)
  //   );
  // }

searchCoffee(){
  this._search.sendSearchValue(this.searchText)
}






}
