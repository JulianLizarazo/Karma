import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LamborghiniSuperdeportivoRoutingModule } from 
"./lamborghini-superdeportivo-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { LamborghiniSuperdeportivoComponent } from './lamborghini-superdeportivo.component';
import { MaterialModule } from '../../../material/material.module';


@NgModule({
  declarations: [
    LamborghiniSuperdeportivoComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    LamborghiniSuperdeportivoRoutingModule,
  ]
})
export class LamborghiniSuperdeportivoModule { }
