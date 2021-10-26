import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FerrariMusclecarComponent } from './ferrari-musclecar.component';

const routes: Routes = [
    {
        path: "",
        component: FerrariMusclecarComponent,
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

export class FerrariMusclecarRoutingModule{

}