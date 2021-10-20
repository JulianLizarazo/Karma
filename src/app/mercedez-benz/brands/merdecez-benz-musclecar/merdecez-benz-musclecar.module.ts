import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MerdecezBenzMusclecarRoutingModule } from 
"./merdecez-benz-musclecar-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { MerdecezBenzMusclecarComponent } from './merdecez-benz-musclecar.component';
import { MaterialModule } from '../../../material/material.module';

@NgModule({
  declarations: [
    MerdecezBenzMusclecarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    MerdecezBenzMusclecarRoutingModule,
  ]
})
export class MerdecezBenzMusclecarModule { }
