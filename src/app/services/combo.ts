import { Injectable } from "@angular/core";
import { Ifruitcombo } from "../Models/combos";



@Injectable({
    providedIn:'root'
})
export class comboService{
    fruitsJuices:Array<Ifruitcombo> = [
  {
    id: 1,
    fruitName: 'Apple',
    fruitImage: 'https://media.istockphoto.com/id/2270215175/photo/group-of-red-apples-sliced-apples-and-green-leaves-isolated-on-white.jpg?s=612x612&w=0&k=20&c=4DQf6-U7g0Zvxt5QDCLqKsUIRipyjYhBC3sWNnAhYj8=',
    juiceName: 'Apple Juice',
    juiceImage: 'https://media.istockphoto.com/id/122746333/photo/red-apple-with-juice.jpg?s=612x612&w=0&k=20&c=bnvEUi3C1SEjush7qmxcZxmPvTFQgljZXAnUQtanwEQ=',
    description: 'Fresh and naturally sweet apple juice.',
    quantity: '1 Kg',
    totalPrice: 180,
    category: 'Fruit & Juice'
  },
  {
    id: 2,
    fruitName: 'Mango',
    fruitImage: 'https://images.unsplash.com/photo-1669207334420-66d0e3450283?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuZ298ZW58MHx8MHx8fDA%3D',
    juiceName: 'Mango Juice',
    juiceImage: 'https://media.istockphoto.com/id/1417819957/photo/fresh-beautiful-delicious-mango-juice-smoothie-in-glass-cup-on-gray-table-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=dJ7ZM9JqoC7HziM-41SvFbqozDN7SlTKX6wcHH6iP1A=',
    description: 'Refreshing and delicious tropical mango juice.',
    quantity: '1 Kg',
    totalPrice: 150,
    category: 'Fruit & Juice'
  },
  {
    id: 3,
    fruitName: 'Orange',
    fruitImage: 'https://media.istockphoto.com/id/98127371/photo/three-ripe-oranges-on-white.jpg?s=612x612&w=0&k=20&c=R3fxANusIxjGRKcs_Kf4pt3Ogl0Ev7CU5pKWHJZTAHc=',
    juiceName: 'Orange Juice',
    juiceImage: 'https://images.unsplash.com/photo-1607690506833-498e04ab3ffa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D',
    description: 'Fresh citrus juice rich in natural vitamin C.',
    quantity: '1 Kg',
    totalPrice: 100,
    category: 'Fruit & Juice'
  },
  {
    id: 4,
    fruitName: 'Pineapple',
    fruitImage: 'https://media.istockphoto.com/id/1217479737/photo/pineapple-with-slices-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=KYxsZ-Bv1tEgjrOmH9qxak06iTK9S5betgteqTuDzhU=',
    juiceName: 'Pineapple Juice',
    juiceImage: 'https://images.unsplash.com/photo-1596392301391-e8622b210bd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGluZWFwcGxlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D',
    description: 'Sweet and tangy pineapple juice.',
    quantity: '1 Kg',
    totalPrice: 120,
    category: 'Fruit & Juice'
  },
  {
    id: 5,
    fruitName: 'Watermelon',
    fruitImage: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
    juiceName: 'Watermelon Juice',
    juiceImage: 'https://images.unsplash.com/photo-1680954464671-6191ab264214?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0ZXJtZWxvbiUyMGp1aWNlfGVufDB8fDB8fHww',
    description: 'Cool and refreshing watermelon juice.',
    quantity: '1 Kg',
    totalPrice: 90,
    category: 'Fruit & Juice'
  },
  {
    id: 6,
    fruitName: 'Papaya',
    fruitImage: 'https://plus.unsplash.com/premium_photo-1723369637264-bc294eb5a355?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8',
    juiceName: 'Papaya Juice',
    juiceImage: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
    description: 'Smooth and nutritious papaya juice.',
    quantity: '1 Kg',
    totalPrice: 100,
    category: 'Fruit & Juice'
  },
  {
    id: 7,
    fruitName: 'Grapes',
    fruitImage: 'https://plus.unsplash.com/premium_photo-1692809723059-a70874355d1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
    juiceName: 'Grape Juice',
    juiceImage: 'https://plus.unsplash.com/premium_photo-1701886274546-3924f4591eef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8',
    description: 'Naturally sweet and refreshing grape juice.',
    quantity: '1 Kg',
    totalPrice: 140,
    category: 'Fruit & Juice'
  },
  {
    id: 8,
    fruitName: 'Guava',
    fruitImage: 'https://media.istockphoto.com/id/1283004368/photo/delicious-guava-fruit-set-on-white-wooden-table-background-with-copy-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=R-Rqa4JDLTyU0HFDPW-a_86r7ap6RNRNb5n5Qi5naSM=',
    juiceName: 'Guava Juice',
    juiceImage: 'https://media.istockphoto.com/id/1342003796/photo/refreshing-cocktail-rose-with-grape-syrup-and-mint-rose-flowers-next-to-the-glass-on-grey.jpg?s=612x612&w=0&k=20&c=1OXfcG_SzqpMLwjHEsDE6FleYdpvnYYnOON9wMZ-HsM=',
    description: 'Fresh guava juice with a delicious tropical taste.',
    quantity: '1 Kg',
    totalPrice: 110,
    category: 'Fruit & Juice'
  },
  {
    id: 9,
    fruitName: 'Strawberry',
    fruitImage: 'https://media.istockphoto.com/id/174691212/photo/strawberry.jpg?s=612x612&w=0&k=20&c=Ej7icAkOixg4N2osKje8-lCx2Z82sOKkFn21maNkLA4=',
    juiceName: 'Strawberry Juice',
    juiceImage: 'https://media.istockphoto.com/id/2168059528/photo/strawberry-smoothie-or-milkshake-drink.jpg?s=612x612&w=0&k=20&c=wFQ2o0UkXOjm6WnUW-zbZh8vuK9TPuDQWLKaM2Zpy0g=',
    description: 'Sweet and refreshing strawberry juice.',
    quantity: '500 g',
    totalPrice: 220,
    category: 'Fruit & Juice'
  },
  {
    id: 10,
    fruitName: 'Pomegranate',
    fruitImage: 'https://media.istockphoto.com/id/502821330/photo/ripe-pomegranates-with-leaves.jpg?s=612x612&w=0&k=20&c=tT_Rvz7VFXI2NuE8yxM3KimTQDAvfvr8QxFR8zjyL28=',
    juiceName: 'Pomegranate Juice',
    juiceImage: 'https://media.istockphoto.com/id/1252823381/photo/pomegranate-and-a-glass-of-pomegranate-juice-on-a-white-wooden-background.jpg?s=612x612&w=0&k=20&c=w0dw0gVf55zBvjHnea4dxPLxohR5CTo5IznDnBZAfa0=',
    description: 'Fresh pomegranate juice with a rich fruity flavor.',
    quantity: '1 Kg',
    totalPrice: 200,
    category: 'Fruit & Juice'
  }
];

getcombo(){
    return this.fruitsJuices
}
}