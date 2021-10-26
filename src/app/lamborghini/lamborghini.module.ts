import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LamborghiniRoutingModule } from 
"./lamborghini-routing.module";

import { SharedModule } from '../shared/shared.module';
import { LamborghiniComponent } from './lamborghini.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LamborghiniComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    LamborghiniRoutingModule,
  ]
})
export class LamborghiniModule { }
