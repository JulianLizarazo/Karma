import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleDetailComponent } from './vehicle-detail.component';

const routes: Routes = [
    {
        path: "",
        component: VehicleDetailComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],

    exports: [
        RouterModule
    ]
})

export class VehicleDetailRoutingModule{

}