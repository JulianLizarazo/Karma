import { NgModule } from '@angular/core';

import { MclarenRoutingModule } from 
"./mclaren-routing.module";

import { SharedModule } from '../shared/shared.module';
import { MclarenComponent } from './mclaren.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [
        MclarenComponent,
        
    ],
    imports: [
        SharedModule,
        MclarenRoutingModule,
        MaterialModule,
       
    ],
    
})
export class MclarenModule{

}