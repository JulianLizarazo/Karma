import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FerrariGranTurismoComponent } from './ferrari-gran-turismo.component';

const routes: Routes = [
    {
        path: "",
        component: FerrariGranTurismoComponent,
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

export class FerrariGranTurismoRoutingModule{

}