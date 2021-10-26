import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MclarenGranTurismoComponent } from './mclaren-gran-turismo.component';

const routes: Routes = [
    {
        path: "",
        component: MclarenGranTurismoComponent,
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

export class MclarenGranTurismoRoutingModule{

}