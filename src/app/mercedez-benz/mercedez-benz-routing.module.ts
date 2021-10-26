import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MercedezBenzComponent } from './mercedez-benz.component';

const routes: Routes = [
    {
        path: "",
        component: MercedezBenzComponent,
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

export class MercedezBenzRoutingModule{

}