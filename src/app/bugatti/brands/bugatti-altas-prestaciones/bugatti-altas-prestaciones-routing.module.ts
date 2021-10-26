import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugattiAltasPrestacionesComponent } from './bugatti-altas-prestaciones.component';

const routes: Routes = [
    {
        path: "",
        component: BugattiAltasPrestacionesComponent,
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

export class BugattiAltasPrestacionesRoutingModule{

}