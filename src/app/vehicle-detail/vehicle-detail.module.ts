import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleDetailRoutingModule } from 
"./vehicle-detail-routing.module";

import { SharedModule } from '../shared/shared.module';
import { VehicleDetailComponent } from './vehicle-detail.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    VehicleDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    VehicleDetailRoutingModule,
    MaterialModule
  ]
})
export class VehicleDetailModule { }
