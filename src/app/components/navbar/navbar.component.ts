import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { cartService } from 'src/app/services/cart';
import { fruitService } from 'src/app/services/fruit';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
cartCount:number=0;
 mobileMenuOpen:boolean=false;
  constructor(
    private _fresh:fruitService,
    private _cart:cartService
  ) { }

  ngOnInit(): void {
    this._cart.getCartCount().subscribe(count=>{
      this.cartCount=count
    })

  }

 toggleMobileMenu():void{
  this.mobileMenuOpen=!this.mobileMenuOpen

  }
  closeMobileMenu():void{
    this.mobileMenuOpen=false

  }

}
