import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerdecezBenzSuperdeportivoRoutingModule } from 
"./merdecez-benz-superdeportivo-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { MerdecezBenzSuperdeportivoComponent } from './merdecez-benz-superdeportivo.component';
import { MaterialModule } from '../../../material/material.module';

@NgModule({
  declarations: [
    MerdecezBenzSuperdeportivoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    MerdecezBenzSuperdeportivoRoutingModule,
  ]
})
export class MerdecezBenzSuperdeportivoModule { }
