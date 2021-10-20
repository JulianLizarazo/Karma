import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AstonMartinGranTurismoRoutingModule } from 
"./aston-martin-gran-turismo-routing.module";
import { SharedModule } from '../../../shared/shared.module';
import { AstonMartinGranTurismoComponent } from './aston-martin-gran-turismo.component';
import { MaterialModule } from '../../../material/material.module';

@NgModule({
  declarations: [
    AstonMartinGranTurismoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    AstonMartinGranTurismoRoutingModule,
  ]
})
export class AstonMartinGranTurismoModule { }
