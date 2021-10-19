import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FerrariMusclecarRoutingModule } from 
"./ferrari-musclecar-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { FerrariMusclecarComponent } from './ferrari-musclecar.component';
import { MaterialModule } from '../../../material/material.module';


@NgModule({
  declarations: [
    FerrariMusclecarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FerrariMusclecarRoutingModule,
  ]
})
export class FerrariMusclecarModule { }
