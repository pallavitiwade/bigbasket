import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IfBox } from 'src/app/Models/fbox';
import { cartService } from 'src/app/services/cart';
import { fruitBoxService } from 'src/app/services/fruitbox';

@Component({
  selector: 'app-fruit-box',
  templateUrl: './fruit-box.component.html',
  styleUrls: ['./fruit-box.component.scss']
})
export class FruitBoxComponent implements OnInit {

  fruitsBox:IfBox[]=[]
  constructor(
    private _fbox:fruitBoxService,
     private router:Router,
      private _cart:cartService

  ) { }

  ngOnInit(): void {
    this.getfreshFruitBox()
  }

  getfreshFruitBox(){
this.fruitsBox=this._fbox.getfruitBox()
console.log(this.fruitsBox)
  }



  

}
