import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerdecezBenzSuperdeportivoComponent } from './merdecez-benz-superdeportivo.component';

const routes: Routes = [
    {
        path: "",
        component: MerdecezBenzSuperdeportivoComponent,
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

export class MerdecezBenzSuperdeportivoRoutingModule{

}