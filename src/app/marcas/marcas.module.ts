import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcasRoutingModule } from 
"./marcas-routing.module";

import { SharedModule } from '../shared/shared.module';
import { MarcasComponent } from './marcas.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    MarcasComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MarcasRoutingModule,
  ]
})
export class MarcasModule { }
