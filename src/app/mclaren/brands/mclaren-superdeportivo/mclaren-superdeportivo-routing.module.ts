import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MclarenSuperdeportivoComponent } from './mclaren-superdeportivo.component';

const routes: Routes = [
    {
        path: "",
        component: MclarenSuperdeportivoComponent,
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

export class MclarenSuperdeportivoRoutingModule{

}