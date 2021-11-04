import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstonMartinSuperdeportivosComponent } from './aston-martin-superdeportivos.component';

const routes: Routes = [
    {
        path: "",
        component: AstonMartinSuperdeportivosComponent,
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

export class AstonMartinSuperdeportivosRoutingModule{

}