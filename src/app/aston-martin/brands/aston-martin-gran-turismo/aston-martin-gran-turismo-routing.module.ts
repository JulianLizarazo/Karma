import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstonMartinGranTurismoComponent } from './aston-martin-gran-turismo.component';

const routes: Routes = [
    {
        path: "",
        component: AstonMartinGranTurismoComponent,
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

export class AstonMartinGranTurismoRoutingModule{

}