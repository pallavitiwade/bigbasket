import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComptoComponent } from './components/compto/compto.component';
import { FruitBoxComponent } from './components/fruit-box/fruit-box.component';
import { CombosComponent } from './components/combos/combos.component';
import { JuicesComponent } from './components/juices/juices.component';
import { OffersComponent } from './components/offers/offers.component';
import { SearchComponent } from './components/search/search.component';
import { AccountComponent } from './components/account/account.component';
import { CartComponent } from './components/cart/cart.component';
import { FreshFruitComponent } from './components/fresh-fruit/fresh-fruit.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGaurd } from './services/AuthGaurd';

const routes: Routes = [

   {
    path: '',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
   path:'login',
   component:LoginComponent

  },
  {
    path:'home',
    component:ComptoComponent,
    canActivate:[AuthGaurd]

  },
 

  // {
  //   path:'home',
  //   component:ComptoComponent
  // },
  {
    path:'freshfruit',
    component:FreshFruitComponent
  },

  {
    path:'fruitbox',
    component:FruitBoxComponent
  },
  {
    path:'combos',
    component:CombosComponent
  },
  {
    path:'juices',
    component:JuicesComponent
  },
  {
    path:'offers',
    component:OffersComponent
  },
  {
    path:'search',
    component:FreshFruitComponent
  },
  {
    path:'account',
    component:AccountComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'**',
    redirectTo:'login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
