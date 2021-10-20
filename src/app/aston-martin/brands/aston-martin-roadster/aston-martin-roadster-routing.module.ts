import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstonMartinRoadsterComponent } from './aston-martin-roadster.component';

const routes: Routes = [
    {
        path: "",
        component: AstonMartinRoadsterComponent,
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

export class AstonMartinRoadsterRoutingModule{

}