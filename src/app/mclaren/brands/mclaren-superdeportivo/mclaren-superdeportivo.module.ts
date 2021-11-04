import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MclarenSuperdeportivoRoutingModule } from 
"./mclaren-superdeportivo-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { MclarenSuperdeportivoComponent } from './mclaren-superdeportivo.component';
import { MaterialModule } from '../../../material/material.module';


@NgModule({
  declarations: [
    MclarenSuperdeportivoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    MclarenSuperdeportivoRoutingModule,
  ]
})
export class MclarenSuperdeportivoModule { }
