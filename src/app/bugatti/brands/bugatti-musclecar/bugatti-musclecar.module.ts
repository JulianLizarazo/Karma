import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugattiMusclecarRoutingModule } from 
"./bugatti-musclecar-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { BugattiMusclecarComponent } from './bugatti-musclecar.component';
import { MaterialModule } from '../../../material/material.module';

@NgModule({
  declarations: [
    BugattiMusclecarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    BugattiMusclecarRoutingModule,
  ]
})
export class BugattiMusclecarModule { }
