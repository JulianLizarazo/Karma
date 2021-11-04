import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LamborghiniMusclecarRoutingModule } from 
"./lamborghini-musclecar-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { LamborghiniMusclecarComponent } from './lamborghini-musclecar.component';
import { MaterialModule } from '../../../material/material.module';


@NgModule({
  declarations: [
    LamborghiniMusclecarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    LamborghiniMusclecarRoutingModule,
  ]
})
export class LamborghiniMusclecarModule { }
