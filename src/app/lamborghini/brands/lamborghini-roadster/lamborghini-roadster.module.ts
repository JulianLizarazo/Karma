import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LamborghiniRoadsterRoutingModule } from 
"./lamborghini-roadster-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { LamborghiniRoadsterComponent } from './lamborghini-roadster.component';
import { MaterialModule } from '../../../material/material.module';


@NgModule({
  declarations: [
    LamborghiniRoadsterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    LamborghiniRoadsterRoutingModule,
  ]
})
export class LamborghiniRoadsterModule { }
