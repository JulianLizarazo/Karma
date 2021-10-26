import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MclarenComponent } from './mclaren.component';

const routes: Routes = [
    {
        path: "",
        component: MclarenComponent,
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

export class MclarenRoutingModule{

}