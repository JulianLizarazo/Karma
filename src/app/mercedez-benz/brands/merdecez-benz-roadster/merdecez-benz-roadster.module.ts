import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerdecezBenzRoadsterRoutingModule } from 
"./mercedez-benz-roadster-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { MerdecezBenzRoadsterComponent } from './merdecez-benz-roadster.component';
import { MaterialModule } from '../../../material/material.module';

@NgModule({
  declarations: [
    MerdecezBenzRoadsterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    MerdecezBenzRoadsterRoutingModule,
  ]
})
export class MerdecezBenzRoadsterModule { }
