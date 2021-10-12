import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FerrariRoutingModule } from 
"./ferrari-routing.module";

import { SharedModule } from '../shared/shared.module';
import { FerrariComponent } from './ferrari.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    FerrariComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FerrariRoutingModule,
  ]
})
export class FerrariModule { }
