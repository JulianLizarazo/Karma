import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerdecezBenzGranTurismoComponent } from './merdecez-benz-gran-turismo.component';

const routes: Routes = [
    {
        path: "",
        component: MerdecezBenzGranTurismoComponent,
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

export class MerdecezBenzGranTurismoRoutingModule{

}