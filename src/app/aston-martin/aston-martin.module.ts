import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AstonMartinRoutingModule } from 
"./aston-martin-routing.module";

import { SharedModule } from '../shared/shared.module';
import { AstonMartinComponent } from './aston-martin.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    AstonMartinComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    AstonMartinRoutingModule,
  ]
})
export class AstonMartinModule { }
