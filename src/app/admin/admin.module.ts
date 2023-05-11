import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
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

@NgModule({
  declarations: [
    VehicleFormComponent,
    NavComponent,
    VehicleListComponent,
    VehicleEditComponent,
    VehicleShowComponent,
    VehicleEditSingleComponent,
    VehicleTypeFormComponent,
    VehicleTypeListComponent,
    VehicleTypeEditComponent,
    VehicleTypeShowComponent,
    VehicleTypeEditSingleComponent,
    InvoiceFormComponent,
    InvoiceShowComponent,
    InvoiceListComponent,
    InvoiceEditComponent,
    InvoiceEditSingleComponent,
    InvoiceDetailFormComponent,
    InvoiceDetailListComponent,
    InvoiceDetailEditComponent,
    InvoiceDetailEditSingleComponent,
    InvoiceDetailShowComponent,
    UserFormComponent,
    UserListComponent,
    UserEditComponent,
    UserEditSingleComponent,
    UserShowComponent,
    CampusFormComponent,
    CampusListComponent,
    CampusEditComponent,
    CampusEditSingleComponent,
    CampusShowComponent,
    ReportVehicleTypeComponent,
    ReportVehicleType2Component,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
})
export class AdminModule {}
