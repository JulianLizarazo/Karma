import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AstonMartinAltasPrestacionesRoutingModule } from 
"./aston-martin-altas-prestaciones-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { AstonMartinAltasPrestacionesComponent } from './aston-martin-altas-prestaciones.component';
import { MaterialModule } from '../../../material/material.module';

@NgModule({
  declarations: [
    AstonMartinAltasPrestacionesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    AstonMartinAltasPrestacionesRoutingModule,
  ]
})
export class AstonMartinAltasPrestacionesModule { }
