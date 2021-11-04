import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugattiAltasPrestacionesRoutingModule } from 
"./bugatti-altas-prestaciones-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { BugattiAltasPrestacionesComponent } from './bugatti-altas-prestaciones.component';
import { MaterialModule } from '../../../material/material.module';

@NgModule({
  declarations: [
    BugattiAltasPrestacionesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    BugattiAltasPrestacionesRoutingModule,
  ]
})
export class BugattiAltasPrestacionesModule { }
