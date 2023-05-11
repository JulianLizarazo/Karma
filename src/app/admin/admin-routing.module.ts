import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './componentes/navegacion/navegacion.component';


import { VehicleListComponent } from './componentes/moto-listar/moto-listar.component';
import { VehicleEditComponent } from './componentes/moto-editar/moto-editar.component';
import { VehicleShowComponent } from './componentes/moto-mostrar/moto-mostrar.component';
import { VehicleEditSingleComponent } from './componentes/moto-editar-uno/moto-editar-uno.component';
import { VehicleTypeFormComponent } from './componentes/tipo-moto-formulario/tipo-moto-formulario.component';
import { VehicleTypeListComponent } from './componentes/tipo-moto-listar/tipo-moto-listar.component';
import { VehicleTypeEditComponent } from './componentes/tipo-moto-editar/tipo-moto-editar.component';
import { VehicleTypeShowComponent } from './componentes/tipo-moto-mostrar/tipo-moto-mostrar.component';
import { VehicleTypeEditSingleComponent } from './componentes/tipo-moto-editar-uno/tipo-moto-editar-uno.component';
import { InvoiceFormComponent } from './componentes/factura-formulario/factura-formulario.component';
import { InvoiceShowComponent } from './componentes/factura-mostrar/factura-mostrar.component';
import { InvoiceListComponent } from './componentes/factura-listar/factura-listar.component';
import { InvoiceEditComponent } from './componentes/factura-editar/factura-editar.component';
import { InvoiceEditSingleComponent } from './componentes/factura-editar-uno/factura-editar-uno.component';
import { InvoiceDetailFormComponent } from './componentes/factura-detalle-formulario/factura-detalle-formulario.component';
import { InvoiceDetailListComponent } from './componentes/factura-detalle-listar/factura-detalle-listar.component';
import { InvoiceDetailEditComponent } from './componentes/factura-detalle-factura-editar/factura-detalle-editar.component';
import { InvoiceDetailEditSingleComponent } from './componentes/factura-detalle-editar-uno/factura-detalle-editar-uno.component';
import { InvoiceDetailShowComponent } from './componentes/factura-detalle-mostrar/factura-detalle-mostrar.component';
import { UserFormComponent } from './componentes/usuario-formulario/usuario-formulario.component';
import { UserListComponent } from './componentes/usuario-listar/usuario-listar.component';
import { UserEditComponent } from './componentes/usuario-editar/usuario-editar.component';
import { UserEditSingleComponent } from './componentes/usuario-editar-uno/usuario-editar-uno.component';
import { UserShowComponent } from './componentes/usuario-mostrar/usuario-mostrar.component';
import { CampusFormComponent } from './componentes/sede-formulario/sede-formulario.component';
import { CampusListComponent } from './componentes/sede-listar/sede-listar.component';
import { CampusEditComponent } from './componentes/sede-editar/sede-editar.component';
import { CampusEditSingleComponent } from './componentes/sede-editar-uno/sede-editar-uno.component';
import { CampusShowComponent } from './componentes/sede-mostrar/sede-mostrar.component';
import { ReportVehicleTypeComponent } from './componentes/reporte-tipo-moto/reporte-tipo-moto.component';
import { ReportVehicleType2Component } from './componentes/reporte-tipo-moto2/reporte-tipo-moto2.component';
import { VehicleFormComponent } from './componentes/moto-formulario/moto-formulario.component';

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
      {
        path: "campus/create",
        component: CampusFormComponent,
      },
      {
        path: "campus/list",
        component: CampusListComponent,
      },
      {
        path: "campus/list/edit/:id_campus",
        component: CampusEditComponent,
      },
      {
        path: "campus/edit-single",
        component: CampusEditSingleComponent,
      },
      {
        path: "campus/show",
        component: CampusShowComponent,
      },
      {
        path: "reports/vehicle",
        component: ReportVehicleTypeComponent,
      },
      {
        path: "reports/vehicle-type",
        component: ReportVehicleType2Component,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
