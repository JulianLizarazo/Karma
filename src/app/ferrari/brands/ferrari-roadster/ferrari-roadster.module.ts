import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FerrariRoadsterRoutingModule } from 
"./ferrari-roadster-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { FerrariRoadsterComponent } from './ferrari-roadster.component';
import { MaterialModule } from '../../../material/material.module';


@NgModule({
  declarations: [
    FerrariRoadsterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FerrariRoadsterRoutingModule,
  ]
})
export class FerrariRoadsterModule { }
