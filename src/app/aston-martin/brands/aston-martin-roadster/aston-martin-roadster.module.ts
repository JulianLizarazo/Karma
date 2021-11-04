import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AstonMartinRoadsterRoutingModule } from 
"./aston-martin-roadster-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { AstonMartinRoadsterComponent } from './aston-martin-roadster.component';
import { MaterialModule } from '../../../material/material.module';

@NgModule({
  declarations: [
    AstonMartinRoadsterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    AstonMartinRoadsterRoutingModule,
  ]
})
export class AstonMartinRoadsterModule { }
