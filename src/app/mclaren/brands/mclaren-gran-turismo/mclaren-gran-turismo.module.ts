import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MclarenGranTurismoRoutingModule } from 
"./mclaren-gran-turismo-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { MclarenGranTurismoComponent } from './mclaren-gran-turismo.component';
import { MaterialModule } from '../../../material/material.module';


@NgModule({
  declarations: [
    MclarenGranTurismoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    MclarenGranTurismoRoutingModule,
  ]
})
export class MclarenGranTurismoModule { }
