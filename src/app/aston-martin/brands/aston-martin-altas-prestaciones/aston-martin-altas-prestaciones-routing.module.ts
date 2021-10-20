import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstonMartinAltasPrestacionesComponent } from './aston-martin-altas-prestaciones.component';

const routes: Routes = [
    {
        path: "",
        component: AstonMartinAltasPrestacionesComponent,
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

export class AstonMartinAltasPrestacionesRoutingModule{

}