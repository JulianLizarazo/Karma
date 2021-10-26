import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstonMartinComponent } from './aston-martin.component';

const routes: Routes = [
    {
        path: "",
        component: AstonMartinComponent,
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

export class AstonMartinRoutingModule{

}