import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerdecezBenzAltasPrestacionesComponent } from './merdecez-benz-altas-prestaciones.component';

const routes: Routes = [
    {
        path: "",
        component: MerdecezBenzAltasPrestacionesComponent,
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

export class MerdecezBenzAltasPrestacionesRoutingModule{

}