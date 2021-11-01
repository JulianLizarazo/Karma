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
import { VehicleTypeEditSingleComponent } from "./components/vehicle-type-edit-single/vehicle-type-edit-single.component";
import { InvoiceFormComponent } from "./components/invoice-form/invoice-form.component";
import { InvoiceShowComponent } from "./components/invoice-show/invoice-show.component";
import { InvoiceListComponent } from "./components/invoice-list/invoice-list.component";
import { InvoiceEditComponent } from "./components/invoice-edit/invoice-edit.component";
import { InvoiceEditSingleComponent } from "./components/invoice-edit-single/invoice-edit-single.component";
import { InvoiceDetailFormComponent } from "./components/invoice-detail-form/invoice-detail-form.component";
import { InvoiceDetailListComponent } from "./components/invoice-detail-list/invoice-detail-list.component";
import { InvoiceDetailEditComponent } from "./components/invoice-detail-edit/invoice-detail-edit.component";
import { InvoiceDetailEditSingleComponent } from "./components/invoice-detail-edit-single/invoice-detail-edit-single.component";
import { InvoiceDetailShowComponent } from "./components/invoice-detail-show/invoice-detail-show.component";
import { UserFormComponent } from "./components/user-form/user-form.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserEditComponent } from "./components/user-edit/user-edit.component";
import { UserEditSingleComponent } from "./components/user-edit-single/user-edit-single.component";
import { UserShowComponent } from "./components/user-show/user-show.component";

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
        path: "vehicle-type/edit-single",
        component: VehicleTypeEditSingleComponent,
      },
      {
        path: "vehicle-type/list/edit/:id_vehicle_type",
        component: VehicleTypeEditComponent,
      },
      {
        path: "invoice/create",
        component: InvoiceFormComponent,
      },
      {
        path: "invoice/show",
        component: InvoiceShowComponent,
      },
      {
        path: "invoice/list",
        component: InvoiceListComponent,
      },
      {
        path: "invoice/edit-single",
        component: InvoiceEditSingleComponent,
      },
      {
        path: "invoice/list/edit/:id_invoice",
        component: InvoiceEditComponent,
      },
      {
        path: "invoice-detail/create",
        component: InvoiceDetailFormComponent,
      },
      {
        path: "invoice-detail/list",
        component: InvoiceDetailListComponent,
      },
      {
        path: "invoice-detail/list/edit/:id_invoice_det",
        component: InvoiceDetailEditComponent,
      },
      {
        path: "invoice-detail/edit-single",
        component: InvoiceDetailEditSingleComponent,
      },
      {
        path: "invoice-detail/show",
        component: InvoiceDetailShowComponent,
      },
      {
        path: "user/create",
        component: UserFormComponent,
      },
      {
        path: "user/list",
        component: UserListComponent,
      },
      {
        path: "user/list/edit/:id_user",
        component: UserEditComponent,
      },
      {
        path: "user/edit-single",
        component: UserEditSingleComponent,
      },
      {
        path: "user/show",
        component: UserShowComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
