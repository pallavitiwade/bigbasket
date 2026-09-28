import { Component, OnInit } from '@angular/core';
import { Ifruit } from 'src/app/Models/fruits';
import { cartService } from 'src/app/services/cart';
import { SearchService } from 'src/app/services/search';

@Component({
  selector: 'app-compto',
  templateUrl: './compto.component.html',
  styleUrls: ['./compto.component.scss']
})
export class ComptoComponent implements OnInit {
  bestProducts: Ifruit[]= [
  {
    image: 'https://images.unsplash.com/photo-1630563451961-ac2ff27616ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBmcnVpdHxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Apple',
    price: 120,
    kg: 1
  },
  {
    image: 'https://images.unsplash.com/photo-1640958900081-7b069dd23e9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFuYW5hJTIwZnJ1aXR8ZW58MHx8MHx8fDA%3D',
    name: 'Banana',
    price: 60,
    kg: 1
  },
  {
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJ1aXRzfGVufDB8fDB8fHww',
    name: 'pineapple',
    price: 150,
    kg: 1
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1671622674209-9fe5cbef0444?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',
    name: 'stawberry',
    price: 80,
    kg: 1
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1724849308705-12f66797cf44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
    name: 'Grapes',
    price: 100,
    kg: 1
  }
];
cartCount:number=0
mobileMenuOpen:boolean=false


  constructor(
        private _cart:cartService
    
  ){}

ngOnInit(): void {
  //  this.cartService.cart$.subscribe(items => {

  //     this.cartCount = items.reduce(
  //       (total, item) => total + item.quantity,
  //       0
  //     );

  //   });

   this._cart.getCartCount().subscribe(count=>{
      this.cartCount=count
   })






  }
  addToCart(){

}

}


