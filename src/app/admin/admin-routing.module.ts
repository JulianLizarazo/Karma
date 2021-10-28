import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';

import { VehicleFormComponent } from "./components/vehicle-form/vehicle-form.component";
const routes: Routes = [
 
  {
    path: "",
    component: NavComponent,
    children: [
      {
        path: "vehicle",
        component: VehicleFormComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
