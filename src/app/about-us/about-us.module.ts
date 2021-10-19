import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AboutUsRoutingModule } from 
"./about-us-routing.module";

import { SharedModule } from '../shared/shared.module';
import { AboutUsComponent } from './about-us.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    AboutUsRoutingModule,
  ]
})
export class AboutUsModule { }
