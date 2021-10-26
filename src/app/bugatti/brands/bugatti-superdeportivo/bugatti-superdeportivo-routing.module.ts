import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugattiSuperdeportivoComponent } from './bugatti-superdeportivo.component';

const routes: Routes = [
    {
        path: "",
        component: BugattiSuperdeportivoComponent,
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

export class BugattiSuperdeportivoRoutingModule{

}