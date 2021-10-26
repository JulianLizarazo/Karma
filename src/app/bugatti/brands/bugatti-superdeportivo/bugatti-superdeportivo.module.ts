import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugattiSuperdeportivoRoutingModule } from 
"./bugatti-superdeportivo-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { BugattiSuperdeportivoComponent } from './bugatti-superdeportivo.component';
import { MaterialModule } from '../../../material/material.module';

@NgModule({
  declarations: [
    BugattiSuperdeportivoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    BugattiSuperdeportivoRoutingModule,
  ]
})
export class BugattiSuperdeportivoModule { }
