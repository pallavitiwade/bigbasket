import { Injectable } from "@angular/core";
import { IfBox } from "../Models/fbox";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn:'root'
})

export class fruitBoxService{
    fruitsBox:Array<IfBox> = [
  {
    id: 1,
    name: 'Apple',
    information: 'Fresh and juicy red apple',
    quantity: 6,
    price: 120,
    img:'https://media.istockphoto.com/id/2258756676/photo/premium-assorted-apples-arranged-in-a-gift-box-fresh-fruit-packaging-on-white-background.jpg?s=612x612&w=0&k=20&c=abRDngvkSmsAQEMpYbbhDbrQ9s0CZNKUWE5AdcvYoGE='
  },
  {
    id: 2,
    name: 'Banana',
    information: 'Fresh ripe yellow banana',
    quantity: 12,
    price: 60,
    img:'https://media.istockphoto.com/id/513792476/photo/fresh-bananas-in-the-wooden-box-isolated.jpg?s=612x612&w=0&k=20&c=ZQ0TTVHI_7Hi1yUk7u0TKIeVJFW3xhlWlIwvf3uxvQQ='
  },

  {
    id: 3,
    name: 'Mango',
    information: 'Sweet and juicy mango',
    quantity: 8,
    price: 200,
    img:'https://media.istockphoto.com/id/680105666/photo/mango-on-white-background.jpg?s=2048x2048&w=is&k=20&c=gi_60QQj2dIbcKvEGN1gE_54HhI5iQI8hOZd53pJJO8='
  },
  {
    id: 4,
    name: 'Orange',
    information: 'Fresh and juicy orange',
    quantity: 15,
    price: 90,
    img:'https://media.istockphoto.com/id/1039875186/photo/fresh-oranges-in-a-wooden-box-on-a-white-background.jpg?s=612x612&w=0&k=20&c=J2YRgHWFFKVX2SX-NHEIlYVKjcaWDyuaFf5jFprYhhc='
  },
  {
    id: 5,
    name: 'Grapes',
    information: 'Fresh green seedless grapes',
    quantity: 6,
    price: 100,
    img:'https://media.istockphoto.com/id/1051381830/photo/bunch-of-grapes-with-leaves-and-tendrils-in-a-wooden-box.webp?a=1&b=1&s=612x612&w=0&k=20&c=niewRTp0PgXnBL6RAOxwXJ9k0TZw1nbqA6UgQTxCk0I='
  },
  {
    id: 6,
    name: 'Watermelon',
    information: 'Fresh and refreshing watermelon',
    quantity: 5,
    price: 40,
    img:'https://media.istockphoto.com/id/470142000/photo/watermelons-group-of-sweet-watermelon-isolated-on-white.jpg?s=612x612&w=0&k=20&c=-SB9TQsHFmxf6fI7hq7fB0YWQnbWcDXjB1kiE79ONIQ='
  },
  {
    id: 7,
    name: 'Papaya',
    information: 'Soft and sweet papaya',
    quantity:2,
    price: 70,
    img:'https://media.istockphoto.com/id/1130642528/photo/fresh-and-tasty-papaya-on-white-background.jpg?s=612x612&w=0&k=20&c=GmbEjBt6pYRrwgqWqmc_WarznykRAs8_rswb1bbr7tM='
  },
  {
    id: 8,
    name: 'Pineapple',
    information: 'Fresh sweet pineapple',
    quantity: 6,
    price: 80,
    img:'https://media.istockphoto.com/id/1201813319/photo/pineapple-fruits-in-wooden-crate-isolated.jpg?s=612x612&w=0&k=20&c=oiWDL4rdhkIv0_DS4jeErUQaL2K3RqGQ4Zpjux2SKOU='
  },
  {
    id: 9,
    name: 'Strawberry',
    information: 'Fresh and sweet strawberries',
    quantity: 20,
    price: 250,
    img:'https://media.istockphoto.com/id/2278075110/photo/ripe-strawberries-in-a-wooden-box-on-a-white-background-isolated.jpg?s=612x612&w=0&k=20&c=TRPUDQJ6gFqJxlSIGDV8yWWCirlzMaJ4yOjReVNqLqs='
  },
  {
    id: 10,
    name: 'Guava',
    information: 'Fresh and crunchy guava',
    quantity: 5,
    price: 80,
    img:'https://media.istockphoto.com/id/1372139808/photo/fresh-sliced-guava-and-leaves-or-psidium-guajava-isolated-on-white-can-enhance-body-immunity.jpg?s=612x612&w=0&k=20&c=OMufJRNAfN1H-2C6NF1D0vaYVE7sA1M2i3s2WolDfAY='
  }
];

getfruitBox(){
    return this.fruitsBox
}

    private cartSubject=new BehaviorSubject<IfBox[]>([]);
cart$=this.cartSubject.asObservable();


addtoCart(product:IfBox){
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

