import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerdecezBenzRoadsterComponent } from './merdecez-benz-roadster.component';

const routes: Routes = [
    {
        path: "",
        component: MerdecezBenzRoadsterComponent,
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

export class MerdecezBenzRoadsterRoutingModule{

}