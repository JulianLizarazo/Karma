import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MercedezBenzRoutingModule } from 
"./mercedez-benz-routing.module";

import { SharedModule } from '../shared/shared.module';
import { MercedezBenzComponent } from './mercedez-benz.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    MercedezBenzComponent,
   
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    MercedezBenzRoutingModule,
  ]
})
export class MercedezBenzModule { }
