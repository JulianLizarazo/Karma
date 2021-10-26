import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugattiRoadsterRoutingModule } from 
"./bugatti-roadster-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { BugattiRoadsterComponent } from './bugatti-roadster.component';
import { MaterialModule } from '../../../material/material.module';



@NgModule({
  declarations: [
    BugattiRoadsterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    BugattiRoadsterRoutingModule,
  ]
})
export class BugattiRoadsterModule { }
