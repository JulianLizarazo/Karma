import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerdecezBenzAltasPrestacionesRoutingModule } from 
"./merdecez-benz-altas-prestaciones-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { MerdecezBenzAltasPrestacionesComponent } from './merdecez-benz-altas-prestaciones.component';
import { MaterialModule } from '../../../material/material.module';


@NgModule({
  declarations: [
    MerdecezBenzAltasPrestacionesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    MerdecezBenzAltasPrestacionesRoutingModule,
  ]
})
export class MerdecezBenzAltasPrestacionesModule { }
