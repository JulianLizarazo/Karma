import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FerrariAltasPrestacionesRoutingModule } from 
"./ferrari-altas-prestaciones-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { FerrariAltasPrestacionesComponent } from './ferrari-altas-prestaciones.component';
import { MaterialModule } from '../../../material/material.module';


@NgModule({
  declarations: [
    FerrariAltasPrestacionesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FerrariAltasPrestacionesRoutingModule,
  ]
})
export class FerrariAltasPrestacionesModule { }
