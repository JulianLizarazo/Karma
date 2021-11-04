import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LamborghiniMusclecarComponent } from './lamborghini-musclecar.component';

const routes: Routes = [
    {
        path: "",
        component: LamborghiniMusclecarComponent,
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

export class LamborghiniMusclecarRoutingModule{

}