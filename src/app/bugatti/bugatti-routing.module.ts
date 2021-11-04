import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugattiComponent } from './bugatti.component';

const routes: Routes = [
    {
        path: "",
        component: BugattiComponent,
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

export class BugattiRoutingModule{

}