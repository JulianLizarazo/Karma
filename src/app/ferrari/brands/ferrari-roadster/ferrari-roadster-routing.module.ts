import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FerrariRoadsterComponent } from './ferrari-roadster.component';

const routes: Routes = [
    {
        path: "",
        component: FerrariRoadsterComponent,
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

export class FerrariRoadsterRoutingModule{

}