import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerdecezBenzGranTurismoRoutingModule } from 
"./merdecez-benz-gran-turismo-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { MerdecezBenzGranTurismoComponent } from './merdecez-benz-gran-turismo.component';
import { MaterialModule } from '../../../material/material.module';

@NgModule({
  declarations: [
    MerdecezBenzGranTurismoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    MerdecezBenzGranTurismoRoutingModule,
  ]
})
export class MerdecezBenzGranTurismoModule { }
