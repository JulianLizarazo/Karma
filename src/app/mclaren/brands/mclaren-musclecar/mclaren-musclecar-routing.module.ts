import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MclarenMusclecarComponent } from './mclaren-musclecar.component';

const routes: Routes = [
    {
        path: "",
        component: MclarenMusclecarComponent,
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

export class MclarenMusclecarRoutingModule{

}