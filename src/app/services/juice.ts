import { Injectable } from "@angular/core";
import { Ijuices } from "../Models/juices";



@Injectable({
    providedIn:'root'
})

export class juiceService{
    juices:Array<Ijuices> = [
  {
    id: 1,
    name: 'Mango Juice',
    information: 'Fresh and sweet mango juice made from ripe mangoes.',
    quantity: '250 ml',
    price: 80,
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuZ28lMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 2,
    name: 'Orange Juice',
    information: 'Refreshing orange juice rich in natural vitamin C.',
    quantity: '250 ml',
    price:90,
    image:'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D'
  },
    {
    id: 3,
    name: 'Apple Juice',
    information: 'Fresh apple juice with a naturally sweet and smooth taste.',
    quantity: '250 ml',
    price: 75,
    image: 'https://media.istockphoto.com/id/471478645/photo/cocktail.jpg?s=612x612&w=0&k=20&c=KwZnA3CvLDFvbQajB3A60fuE54Y0po8r0zyozDi67as='
  },
  {
    id: 4,
    name: 'Pineapple Juice',
    information: 'Tropical pineapple juice with a refreshing sweet and tangy flavor.',
    quantity: '250 ml',
    price: 85,
    image: 'https://images.unsplash.com/photo-1676159435353-aee4c30e420a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D'
  },
  {
    id: 5,
    name: 'Watermelon Juice',
    information: 'Cool and hydrating watermelon juice perfect for summer.',
    quantity: '300 ml',
    price: 65,
    image: 'https://images.unsplash.com/photo-1746203103061-14e500f01b6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8'
  },
  {
    id: 6,
    name: 'Grape Juice',
    information: 'Sweet grape juice prepared from fresh and juicy grapes.',
    quantity: '250 ml',
    price: 80,
    image:'https://media.istockphoto.com/id/620730576/photo/green-smoothie-with-cucumber-mint-parsley-healthy-summer-drink.jpg?s=612x612&w=0&k=20&c=HcOrG0hjGZ6Ez-Jg6_K3UpL84j4pZVfg4eBngsKgsOI='
  },
  {
    id: 7,
    name: 'Pomegranate Juice',
    information: 'Fresh pomegranate juice with a rich fruity flavor.',
    quantity: '250 ml',
    price: 110,
    image: 'https://media.istockphoto.com/id/1333278312/photo/alcoholic-cocktail-drink-pomegranate-juice-and-lemon-juice-based-alcoholic-drink.webp?a=1&b=1&s=612x612&w=0&k=20&c=u7wcYkosq-FxtddkY-smaoQA5dEB9R_H2NGSzyyKDG8='
  },
  {
    id: 8,
    name: 'Guava Juice',
    information: 'Creamy and flavorful guava juice made from fresh guavas.',
    quantity: '250 ml',
    price: 75,
    image:'https://images.unsplash.com/photo-1662959486986-b97be12e607e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D'
  },
  {
    id: 9,
    name: 'Papaya Juice',
    information: 'Smooth and naturally sweet papaya juice.',
    quantity: '250 ml',
    price: 70,
    image:'https://media.istockphoto.com/id/1633508947/photo/papaya-smoothie-in-glass.jpg?s=612x612&w=0&k=20&c=UwlZDTXkTC8dh5-3hldwB5wvNWZID4NbKKUt-B9A6FE='
  },
  {
    id: 10,
    name: 'Strawberry Juice',
    information: 'Fresh strawberry juice with a delicious sweet and fruity taste.',
    quantity: '250 ml',
    price: 95,
    image: 'https://images.unsplash.com/photo-1589734575451-8ddc34c5752b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3Rhd2JlcnJ5JTIwanVpY2V8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 11,
    name: 'Litchi Juice',
    information: 'Refreshing litchi juice with a naturally sweet aroma.',
    quantity: '250 ml',
    price: 90,
    image:'https://plus.unsplash.com/premium_photo-1722019977396-0002e8be9b01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8'
  },
  {
    id: 12,
    name: 'Kiwi Juice',
    information: 'Fresh kiwi juice with a unique sweet and tangy flavor.',
    quantity: '250 ml',
    price: 100,
    image:'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l3aSUyMGp1aWNlfGVufDB8fDB8fHww'
  },
  {
    id: 13,
    name: 'Mixed Fruit Juice',
    information: 'A delicious combination of fresh seasonal fruits.',
    quantity: '300 ml',
    price: 120,
    image: 'https://media.istockphoto.com/id/1142967696/photo/assorted-fruit-juice-smoothie-on-wood-background.jpg?s=612x612&w=0&k=20&c=jY77a5XEm-lI6bnYJWrmYI3GYJjhiq4ODKT9di70LxU='
  },
  {
    id: 14,
    name: 'Carrot Juice',
    information: 'Fresh carrot juice with a naturally sweet and earthy taste.',
    quantity: '250 ml',
    price: 70,
    image:'https://images.unsplash.com/photo-1528556860752-2a6a19a285a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90JTIwanVpY2V8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 15,
    name: 'Beetroot Juice',
    information: 'Fresh beetroot juice with a rich earthy and refreshing flavor.',
    quantity: '250 ml',
    price: 85,
    image: 'https://media.istockphoto.com/id/1003676096/photo/fresh-organic-beetroot-juice-detox-drink-in-modern-design-glass.webp?a=1&b=1&s=612x612&w=0&k=20&c=gwOY7ApjivlGIsqkEHyhbW963139cSu4AVM0_7VrCYY='
  }
];

getjuice(){
    return this.juices
}
}