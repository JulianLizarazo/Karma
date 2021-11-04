import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FerrariSuperdeportivoComponent } from './ferrari-superdeportivo.component';

const routes: Routes = [
    {
        path: "",
        component: FerrariSuperdeportivoComponent,
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

export class FerrariSuperdeportivoRoutingModule{

}