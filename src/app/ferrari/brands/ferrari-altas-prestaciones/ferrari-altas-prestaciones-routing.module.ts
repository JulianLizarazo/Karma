import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FerrariAltasPrestacionesComponent } from './ferrari-altas-prestaciones.component';

const routes: Routes = [
    {
        path: "",
        component: FerrariAltasPrestacionesComponent,
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

export class FerrariAltasPrestacionesRoutingModule{

}