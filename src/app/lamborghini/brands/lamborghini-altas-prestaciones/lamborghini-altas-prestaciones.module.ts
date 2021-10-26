import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LamborghiniAltasPrestacionesRoutingModule } from 
"./lamborghini-altas-prestaciones-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { LamborghiniAltasPrestacionesComponent } from './lamborghini-altas-prestaciones.component';
import { MaterialModule } from '../../../material/material.module';


@NgModule({
  declarations: [
    LamborghiniAltasPrestacionesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    LamborghiniAltasPrestacionesRoutingModule,
  ]
})
export class LamborghiniAltasPrestacionesModule { }
