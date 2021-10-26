import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugattiMusclecarComponent } from './bugatti-musclecar.component';

const routes: Routes = [
    {
        path: "",
        component: BugattiMusclecarComponent,
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

export class BugattiMusclecarRoutingModule{

}