import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MclarenAltasPrestacionesRoutingModule } from 
"./mclaren-altas-prestaciones-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { MclarenAltasPrestacionesComponent } from './mclaren-altas-prestaciones.component';
import { MaterialModule } from '../../../material/material.module';

@NgModule({
  declarations: [
    MclarenAltasPrestacionesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    MclarenAltasPrestacionesRoutingModule,
  ]
})
export class MclarenAltasPrestacionesModule { }
