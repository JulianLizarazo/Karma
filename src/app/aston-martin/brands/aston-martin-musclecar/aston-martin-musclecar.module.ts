import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AstonMartinMusclecarRoutingModule } from 
"./aston-martin-musclecar-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { AstonMartinMusclecarComponent } from './aston-martin-musclecar.component';
import { MaterialModule } from '../../../material/material.module';

@NgModule({
  declarations: [
    AstonMartinMusclecarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    AstonMartinMusclecarRoutingModule,
  ]
})
export class AstonMartinMusclecarModule { }
