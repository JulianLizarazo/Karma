import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FerrariComponent } from './ferrari.component';

const routes: Routes = [
    {
        path: "",
        component: FerrariComponent,
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

export class FerrariRoutingModule{

}