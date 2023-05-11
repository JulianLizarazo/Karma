import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './inicio-routing.module';

import { CommonModule } from '@angular/common';

import { SharedModule } from '../compartido/shared.module';
import { HomeComponent } from './inicio.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule, MaterialModule, CommonModule],
})
export class HomeModule {}
