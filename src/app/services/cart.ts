import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IFreshFruit } from "../Models/fruits";
import { IfBox } from "../Models/fbox";



@Injectable({
    providedIn:'root'
})

export class cartService{
    private cartSubject=new BehaviorSubject<IFreshFruit[]>([]);
cart$=this.cartSubject.asObservable();


addtoCart(product:IFreshFruit){
    const currentCart=this.cartSubject.value;

const alredyexit=currentCart.some(
    item=>item.id===product.id
);
if(!alredyexit){
    this.cartSubject.next([
        ...currentCart,
        product
    ]);
}

}

private count = 0;
  cartCount = new BehaviorSubject<number>(0);

  addCart() {
    this.count++;
    this.cartCount.next(this.count);
  }

  getCartCount() {
    return this.cartCount.asObservable();
  }
}