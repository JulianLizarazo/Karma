import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FerrariComponent } from './ferrari/ferrari.component';
import { LamborghiniComponent } from './lamborghini/lamborghini.component';
import { BugattiComponent } from './bugatti/bugatti.component';
import { AstonMartinComponent } from './aston-martin/aston-martin.component';
import { MercedezBenzComponent } from './mercedez-benz/mercedez-benz.component';





@NgModule({
  declarations: [
    AppComponent,
    FerrariComponent,
    LamborghiniComponent,
    BugattiComponent,
    AstonMartinComponent,
    MercedezBenzComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
