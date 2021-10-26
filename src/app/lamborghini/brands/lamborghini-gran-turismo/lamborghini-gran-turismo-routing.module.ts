import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LamborghiniGranTurismoComponent } from './lamborghini-gran-turismo.component';

const routes: Routes = [
    {
        path: "",
        component: LamborghiniGranTurismoComponent,
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

export class LamborghiniGranTurismoRoutingModule{

}