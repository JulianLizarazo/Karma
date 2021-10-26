import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MclarenMusclecarRoutingModule } from 
"./mclaren-musclecar-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { MclarenMusclecarComponent } from './mclaren-musclecar.component';
import { MaterialModule } from '../../../material/material.module';


@NgModule({
  declarations: [
    MclarenMusclecarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    MclarenMusclecarRoutingModule,
  ]
})
export class MclarenMusclecarModule { }
