import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MclarenAltasPrestacionesComponent } from './mclaren-altas-prestaciones.component';

const routes: Routes = [
    {
        path: "",
        component: MclarenAltasPrestacionesComponent,
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

export class MclarenAltasPrestacionesRoutingModule{

}