import { Component, OnInit } from '@angular/core';
import { IfBox } from 'src/app/Models/fbox';
import { IFreshFruit } from 'src/app/Models/fruits';
import { cartService } from 'src/app/services/cart';
import { fruitService } from 'src/app/services/fruit';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  fruits:IFreshFruit[]=[]
    fruitsBox:IfBox[]=[]
  

  constructor(
        private _fresh:fruitService,
        private _cart:cartService
    
  ) { }

  ngOnInit(): void {
// this.getFruit()
this._cart.cart$.subscribe(
  (items)=>{
    this.fruits=items
  }
)


  }

  getbox(){
    
  }


  }
// getFruit(){
//   this.fruits=this._fresh.getfreshfruit();
// }



