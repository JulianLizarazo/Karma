import { NgModule } from '@angular/core';

import { HomeRoutingModule } from 
"./home-routing.module";

import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        SharedModule,
        HomeRoutingModule,
        MaterialModule,
        CommonModule,
    ],
    
})
export class HomeModule{

}