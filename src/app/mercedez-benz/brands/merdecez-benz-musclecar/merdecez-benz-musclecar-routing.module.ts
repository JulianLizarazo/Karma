import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerdecezBenzMusclecarComponent } from './merdecez-benz-musclecar.component';

const routes: Routes = [
    {
        path: "",
        component: MerdecezBenzMusclecarComponent,
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

export class MerdecezBenzMusclecarRoutingModule{

}