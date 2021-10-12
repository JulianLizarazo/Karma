import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LamborghiniComponent } from './lamborghini.component';

const routes: Routes = [
    {
        path: "",
        component: LamborghiniComponent,
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

export class LamborghiniRoutingModule{

}