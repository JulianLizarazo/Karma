import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugattiGranTurismoRoutingModule } from 
"./bugatti-gran-turismo-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { BugattiGranTurismoComponent } from './bugatti-gran-turismo.component';
import { MaterialModule } from '../../../material/material.module';



@NgModule({
  declarations: [
    BugattiGranTurismoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    BugattiGranTurismoRoutingModule
  ]
})
export class BugattiGranTurismoModule { }
