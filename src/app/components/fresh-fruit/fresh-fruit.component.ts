import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFreshFruit } from 'src/app/Models/fruits';
import { cartService } from 'src/app/services/cart';
import { fruitService } from 'src/app/services/fruit';

@Component({
  selector: 'app-fresh-fruit',
  templateUrl: './fresh-fruit.component.html',
  styleUrls: ['./fresh-fruit.component.scss']
})
export class FreshFruitComponent implements OnInit {

  fruits:IFreshFruit[]=[]
  filter:IFreshFruit[]=[]
  searchValue:string='';

  constructor(
    private _fresh:fruitService,
        private router:Router,
            private _cart:cartService
        

  ) { }

  ngOnInit(): void {
    // this.getFruits()
    this.fruits=this._fresh.getfreshfruit()
    this.filter=this.fruits
    console.log(this.fruits)


  }

// getFruits(){
//   this.fruits=this._fresh.getfreshfruit();
// }

AddToCart(fru:IFreshFruit){

  this._cart.addtoCart(fru);
  this.router.navigate(['/cart'])
  this._cart.addCart()


}

searchCard(event:any):void{
const searchValue=event.target.value.toLowerCase().trim()

console.log(searchValue)

if(searchValue===''){
  this.filter=this.fruits;
  return;
}
this.filter=this.fruits.filter(f=>f.name.toLowerCase().includes(searchValue))
console.log(this.filter)
}

}
