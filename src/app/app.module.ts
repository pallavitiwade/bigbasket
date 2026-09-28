import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewCompComponent } from './components/new-comp/new-comp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComptoComponent } from './components/compto/compto.component';
import { MaterialModule } from './material.module';
import { AccountComponent } from './components/account/account.component';
import { CartComponent } from './components/cart/cart.component';
import { CombosComponent } from './components/combos/combos.component';
import { FruitBoxComponent } from './components/fruit-box/fruit-box.component';
import { JuicesComponent } from './components/juices/juices.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffersComponent } from './components/offers/offers.component';
import { SearchComponent } from './components/search/search.component';
import { CommonModule } from '@angular/common';
import { FreshFruitComponent } from './components/fresh-fruit/fresh-fruit.component';
import { LoginComponent } from './components/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent,
    ComptoComponent,
   AccountComponent,
   CartComponent,
   CombosComponent,
   FruitBoxComponent,
    JuicesComponent,
     NavbarComponent,
     OffersComponent,
     SearchComponent,
     FreshFruitComponent,
      LoginComponent 
     





   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
     MaterialModule,
     CommonModule,
 ReactiveFormsModule,
  MatInputModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
