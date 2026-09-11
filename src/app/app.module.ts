import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewCompComponent } from './components/new-comp/new-comp.component';
import { FormsModule } from '@angular/forms';
import { ComptoComponent } from './components/compto/compto.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent,
    ComptoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
     MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
