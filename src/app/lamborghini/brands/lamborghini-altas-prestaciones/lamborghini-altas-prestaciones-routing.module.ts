import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LamborghiniAltasPrestacionesComponent } from './lamborghini-altas-prestaciones.component';

const routes: Routes = [
    {
        path: "",
        component: LamborghiniAltasPrestacionesComponent,
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

export class LamborghiniAltasPrestacionesRoutingModule{

}