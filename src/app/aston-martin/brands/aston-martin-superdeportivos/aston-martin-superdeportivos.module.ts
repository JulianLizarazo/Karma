import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AstonMartinSuperdeportivosRoutingModule } from 
"./aston-martin-superdeportivo-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { AstonMartinSuperdeportivosComponent } from './aston-martin-superdeportivos.component';
import { MaterialModule } from '../../../material/material.module';

@NgModule({
  declarations: [
    AstonMartinSuperdeportivosComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    AstonMartinSuperdeportivosRoutingModule,
  ]
})
export class AstonMartinSuperdeportivosModule { }
