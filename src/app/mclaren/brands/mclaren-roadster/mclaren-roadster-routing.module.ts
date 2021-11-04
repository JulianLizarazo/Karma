import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MclarenRoadsterComponent } from './mclaren-roadster.component';

const routes: Routes = [
    {
        path: "",
        component: MclarenRoadsterComponent,
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

export class MclarenRoadsterRoutingModule{

}