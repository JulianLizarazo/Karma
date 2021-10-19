import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugattiRoutingModule } from 
"./bugatti-routing.module";

import { SharedModule } from '../shared/shared.module';
import { BugattiComponent } from './bugatti.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    BugattiComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    BugattiRoutingModule,
  ]
})
export class BugattiModule { }
