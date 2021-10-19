import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LamborghiniGranTurismoRoutingModule } from 
"./lamborghini-gran-turismo-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { LamborghiniGranTurismoComponent } from './lamborghini-gran-turismo.component';
import { MaterialModule } from '../../../material/material.module';


@NgModule({
  declarations: [
    LamborghiniGranTurismoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    LamborghiniGranTurismoRoutingModule,
  ]
})
export class LamborghiniGranTurismoModule { }
