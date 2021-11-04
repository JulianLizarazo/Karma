import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FerrariGranTurismoRoutingModule } from 
"./ferrari-gran-turismo-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { FerrariGranTurismoComponent } from './ferrari-gran-turismo.component';
import { MaterialModule } from '../../../material/material.module';


@NgModule({
  declarations: [
    FerrariGranTurismoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FerrariGranTurismoRoutingModule,
  ]
})
export class FerrariGranTurismoModule { }
