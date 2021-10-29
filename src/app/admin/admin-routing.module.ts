import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';

import { VehicleFormComponent } from "./components/vehicle-form/vehicle-form.component";
import { VehicleListComponent } from "./components/vehicle-list/vehicle-list.component";
import { VehicleEditComponent } from "./components/vehicle-edit/vehicle-edit.component";
import { VehicleShowComponent } from "./components/vehicle-show/vehicle-show.component";
import { VehicleEditSingleComponent } from "./components/vehicle-edit-single/vehicle-edit-single.component";
import { VehicleTypeFormComponent } from "./components/vehicle-type-form/vehicle-type-form.component";
import { VehicleTypeListComponent } from "./components/vehicle-type-list/vehicle-type-list.component";
import { VehicleTypeEditComponent } from "./components/vehicle-type-edit/vehicle-type-edit.component";
import { VehicleTypeShowComponent } from "./components/vehicle-type-show/vehicle-type-show.component";

const routes: Routes = [
 
  {
    path: "",
    component: NavComponent,
    children: [
      {
        path: "vehicle/create",
        component: VehicleFormComponent
      },
      {
        path: "vehicle/show",
        component: VehicleShowComponent
      },
      {
        path: "vehicle/list",
        component: VehicleListComponent,
      },
      {
        path: "vehicle/edit-single",
        component: VehicleEditSingleComponent,
      },
      {
        path: "vehicle/list/edit/:id_vehicle",
        component: VehicleEditComponent,
      },
      {
        path: "vehicle-type/create",
        component: VehicleTypeFormComponent,
      },
      {
        path: "vehicle-type/show",
        component: VehicleTypeShowComponent,
      },
      {
        path: "vehicle-type/list",
        component: VehicleTypeListComponent,
      },
      {
        path: "vehicle-type/list/edit/:id_vehicle_type",
        component: VehicleTypeEditComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
