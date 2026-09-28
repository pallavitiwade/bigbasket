import { Injectable } from "@angular/core";
import { IFreshFruit } from "../Models/fruits";
import { BehaviorSubject } from "rxjs";



@Injectable({
    providedIn:'root'
})

export class fruitService{

    fruits:Array<IFreshFruit> = [
  {
    id: 1,
    name: 'Apple',
    description: 'Fresh and crunchy red apple',
    price: 120,
    quantity: '1 kg',
    color: 'Red',
    category: 'Fruit',
    origin: 'Kashmir',
    image:"https://media.istockphoto.com/id/2227015609/photo/isolated-red-apple-with-leaf.webp?a=1&b=1&s=612x612&w=0&k=20&c=F3alVhmBqI5Xj823ZZtfd2tPmQIu__0o1zCVu2APU4s="
  },
  {
    id: 2,
    name: 'Banana',
    description: 'Sweet and soft yellow banana',
    price: 60,
    quantity: '1 dozen',
    color: 'Yellow',
    category: 'Fruit',
    origin: 'Maharashtra',
    image:"https://media.istockphoto.com/id/2220908085/photo/isolated-pair-of-fresh-yellow-bananas.webp?a=1&b=1&s=612x612&w=0&k=20&c=E0mOwqTv4l3vxDbOzAx7Y2Z18Lp_49Z44TsSwRUnE5s="
  },
  {
    id: 3,
    name: 'Mango',
    description: 'Sweet and juicy Alphonso mango',
    price: 180,
    quantity: '1 kg',
    color: 'Yellow',
    category: 'Fruit',
    origin: 'Ratnagiri',
    image:"https://media.istockphoto.com/id/2228622527/photo/isolated-ripe-mango-fruit-with-slices-and-green-leaves.webp?a=1&b=1&s=612x612&w=0&k=20&c=i6nqrrqhDqb6RgzGwX5m6C4LtXlIO2y9EcdxLlAhfcg="
  },
  {
    id: 4,
    name: 'Orange',
    description: 'Fresh and juicy orange',
    price: 90,
    quantity: '1 kg',
    color: 'Orange',
    category: 'Citrus',
    origin: 'Nagpur',
    image:"https://media.istockphoto.com/id/2220862027/photo/isolated-bright-orange-with-leaf-vibrant-citrus.webp?a=1&b=1&s=612x612&w=0&k=20&c=3St_cPoJ8XIbgxZa_rBO_Mr95mVuZD0UXSSdeUO8qu0="
  },
  {
    id: 5,
    name: 'Grapes',
    description: 'Sweet and seedless green grapes',
    price: 100,
    quantity: '500 g',
    color: 'Green',
    category: 'Fruit',
    origin: 'Nashik',
    image:"https://media.istockphoto.com/id/2220907690/photo/isolated-green-grapes-bunch-fresh-fruit.webp?a=1&b=1&s=612x612&w=0&k=20&c=ksK17qAXeDcWag34JQQ0tDzRvA71J3xMk68lNJ3DG7g="
  },
  {
    id: 6,
    name: 'Pineapple',
    description: 'Sweet and tangy tropical fruit',
    price: 80,
    quantity: '1 piece',
    color: 'Brown',
    category: 'Tropical',
    origin: 'Kerala',
    image:"https://media.istockphoto.com/id/2231355953/photo/isolated-ripe-and-golden-pineapple-with-green-crown.webp?a=1&b=1&s=612x612&w=0&k=20&c=cP9fEFSuH7ZI2UYuDkDEBSPNZ0dCtSVI6FDFC7cv9E8="
  },
  {
    id: 7,
    name: 'Watermelon',
    description: 'Refreshing and juicy summer fruit',
    price: 50,
    quantity: '1 kg',
    color: 'Green',
    category: 'Melon',
    origin: 'Maharashtra',
    image:"https://media.istockphoto.com/id/1877356517/photo/png-fresh-and-juicy-summer-fruit-watermelon-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=3rImBtiMSLmmNepETbUyKa184EncTH9_A9DjewPr2RA="
  },
  {
    id: 8,
    name: 'Papaya',
    description: 'Soft and naturally sweet papaya',
    price: 70,
    quantity: '1 kg',
    color: 'Orange',
    category: 'Tropical',
    origin: 'Andhra Pradesh',
    image:"https://media.istockphoto.com/id/2211945758/photo/isolated-tropical-papaya-fruit-whole-and-halved.webp?a=1&b=1&s=612x612&w=0&k=20&c=PxGP-1d24Ds3AdCweUX9Lhtwq8TSnr09JYuiHe7bfMs="
  },
  {
    id: 9,
    name: 'Guava',
    description: 'Fresh guava with a sweet taste',
    price: 80,
    quantity: '1 kg',
    color: 'Green',
    category: 'Fruit',
    origin: 'Uttar Pradesh',
    image:"https://media.istockphoto.com/id/801706690/photo/guava-is-a-piece-on-white-background.jpg?s=2048x2048&w=is&k=20&c=caiolCgrha9WlBZIXeiiumZA9VUoc4xc1qkaW7GDrW0="
  },
  {
    id: 10,
    name: 'Pomegranate',
    description: 'Juicy fruit with fresh red seeds',
    price: 160,
    quantity: '1 kg',
    color: 'Red',
    category: 'Fruit',
    origin: 'Maharashtra',
    image:"https://media.istockphoto.com/id/2244393565/photo/pomegranate-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=JcU2qHXjKW2hsoSL8ilYmUUn4msyKrrGZsC29wZqc7Y="
  },
  {
    id: 11,
    name: 'Strawberry',
    description: 'Fresh and sweet red strawberries',
    price: 250,
    quantity: '250 g',
    color: 'Red',
    category: 'Berry',
    origin: 'Maharashtra',
    image:"https://media.istockphoto.com/id/2226030267/photo/isolated-vibrant-red-strawberry-with-tiny-seeds.webp?a=1&b=1&s=612x612&w=0&k=20&c=JGvzwmYir9AoPY0jiTm-GKVTrDCmCz3FmYBRYgX49o4="
  },
  {
    id: 12,
    name: 'Blueberry',
    description: 'Small sweet and juicy blue berries',
    price: 300,
    quantity: '250 g',
    color: 'Blue',
    category: 'Berry',
    origin: 'Himachal Pradesh',
    image:"https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZWJlcnJ5JTIwcG5nfGVufDB8fDB8fHww"
  },
  {
    id: 13,
    name: 'Kiwi',
    description: 'Fresh green kiwi with a tangy taste',
    price: 300,
    quantity: '500 g',
    color: 'Brown',
    category: 'Exotic',
    origin: 'New Zealand',
    image:"https://media.istockphoto.com/id/2282228418/photo/delicious-kiwi-fruits-with-leaves-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=2pIo6xwojOdHRdixfEw1V-UkpyXgkYS1XUQUJKaY5yM="
  },
  {
    id: 14,
    name: 'Pear',
    description: 'Juicy and mildly sweet green pear',
    price: 140,
    quantity: '1 kg',
    color: 'Green',
    category: 'Fruit',
    origin: 'Himachal Pradesh',
    image:"https://media.istockphoto.com/id/2211905550/photo/isolated-ripe-yellow-pear-with-stem-and-green-leaf.webp?a=1&b=1&s=612x612&w=0&k=20&c=T81t1_eodKwp0ANAX7YpIJbee53JZJcwvgmosflrBD4="
  },
  {
    id: 15,
    name: 'Peach',
    description: 'Soft and juicy peach with sweet flavor',
    price: 220,
    quantity: '500 g',
    color: 'Orange',
    category: 'Fruit',
    origin: 'Himachal Pradesh',
    image:"https://media.istockphoto.com/id/2211941872/photo/isolated-juicy-peach-with-green-leaf-and-velvety-skin.webp?a=1&b=1&s=612x612&w=0&k=20&c=ytSriDI_sVsGOcRAAB37_aawg2i8g5F2ea1AMzuaHaQ="
  },
  {
    id: 16,
    name: 'Cherry',
    description: 'Fresh red cherries with sweet taste',
    price: 350,
    quantity: '500 g',
    color: 'Red',
    category: 'Berry',
    origin: 'Kashmir',
    image:"https://media.istockphoto.com/id/2228647846/photo/isolated-pair-of-sparkling-cherries.webp?a=1&b=1&s=612x612&w=0&k=20&c=2si5_WgYXYXmAN0X9jZ-4p6Euet2_rtIp-dnJtQ6V7g="
  },
  {
    id: 17,
    name: 'Dragon Fruit',
    description: 'Exotic fruit with refreshing taste',
    price: 200,
    quantity: '1 kg',
    color: 'Pink',
    category: 'Exotic',
    origin: 'Maharashtra',
    image:"https://media.istockphoto.com/id/2256027554/photo/red-dragon-fruit-isolated-on-white-background-red-pitahaya-dragon-fruit-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=1eFfR48p4koBh62_RiBOCfP95XD0gSB_0nhj8MthEXY="
  },
  {
    id: 18,
    name: 'Coconut',
    description: 'Fresh coconut with refreshing water',
    price: 50,
    quantity: '1 piece',
    color: 'Brown',
    category: 'Tropical',
    origin: 'Kerala',
    image:'https://media.istockphoto.com/id/2294822297/photo/two-halved-broken-coconuts-with-green-leaves-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=tXeihFErWKND883j-QudOkyDBWpqvaQ9QrcJlaaMfTk='
  },
  {
    id: 19,
    name: 'Muskmelon',
    description: 'Sweet and juicy summer melon',
    price: 60,
    quantity: '1 kg',
    color: 'Yellow',
    category: 'Melon',
    origin: 'Maharashtra',
    image:"https://media.istockphoto.com/id/2220886929/photo/isolated-cantaloupe-melon-sliced-with-seeds.webp?a=1&b=1&s=612x612&w=0&k=20&c=8G5xF5PmmJuZKQVFUFpSqV_W9STLsEdffEjDTwaxbrY="
  },
  {
    id: 20,
    name: 'Litchi',
    description: 'Juicy and sweet seasonal litchi',
    price: 180,
    quantity: '1 kg',
    color: 'Red',
    category: 'Tropical',
    origin: 'Bihar',
    image:"https://media.istockphoto.com/id/1496852359/photo/fresh-lychee-or-litchi-fruit-isolated-on-white-background-png.webp?a=1&b=1&s=612x612&w=0&k=20&c=MIn2zT-9pM_2-mdzmDAw5PHY6daFx4Hg2PDvlBI0sA0="
  }
];

getfreshfruit(){
    return this.fruits
}



}