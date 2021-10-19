import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FerrariSuperdeportivoRoutingModule } from 
"./ferrari-superdeportivo-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { FerrariSuperdeportivoComponent } from './ferrari-superdeportivo.component';
import { MaterialModule } from '../../../material/material.module';


@NgModule({
  declarations: [
    FerrariSuperdeportivoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FerrariSuperdeportivoRoutingModule,
  ]
})
export class FerrariSuperdeportivoModule { }
