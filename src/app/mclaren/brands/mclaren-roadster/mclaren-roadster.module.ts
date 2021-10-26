import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MclarenRoadsterRoutingModule } from 
"./mclaren-roadster-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { MclarenRoadsterComponent } from './mclaren-roadster.component';
import { MaterialModule } from '../../../material/material.module';



@NgModule({
  declarations: [
    MclarenRoadsterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    MclarenRoadsterRoutingModule,

  ]
})
export class MclarenRoadsterModule { }
