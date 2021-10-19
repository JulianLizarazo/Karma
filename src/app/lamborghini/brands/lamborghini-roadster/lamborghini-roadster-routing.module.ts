import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LamborghiniRoadsterComponent } from './lamborghini-roadster.component';

const routes: Routes = [
    {
        path: "",
        component: LamborghiniRoadsterComponent,
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

export class LamborghiniRoadsterRoutingModule{

}