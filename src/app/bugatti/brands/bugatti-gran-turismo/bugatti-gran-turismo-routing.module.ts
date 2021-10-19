import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugattiGranTurismoComponent } from './bugatti-gran-turismo.component';

const routes: Routes = [
    {
        path: "",
        component: BugattiGranTurismoComponent,
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

export class BugattiGranTurismoRoutingModule{

}