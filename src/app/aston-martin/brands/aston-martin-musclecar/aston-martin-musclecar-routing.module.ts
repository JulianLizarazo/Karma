import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstonMartinMusclecarComponent } from './aston-martin-musclecar.component';

const routes: Routes = [
    {
        path: "",
        component: AstonMartinMusclecarComponent,
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

export class AstonMartinMusclecarRoutingModule{

}