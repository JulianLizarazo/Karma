import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleEditComponent } from './components/vehicle-edit/vehicle-edit.component';
import { VehicleShowComponent } from './components/vehicle-show/vehicle-show.component';
import { VehicleEditSingleComponent } from './components/vehicle-edit-single/vehicle-edit-single.component';
import { VehicleTypeFormComponent } from './components/vehicle-type-form/vehicle-type-form.component';
import { VehicleTypeListComponent } from './components/vehicle-type-list/vehicle-type-list.component';
import { VehicleTypeEditComponent } from './components/vehicle-type-edit/vehicle-type-edit.component';
import { VehicleTypeShowComponent } from './components/vehicle-type-show/vehicle-type-show.component';
import { VehicleTypeEditSingleComponent } from './components/vehicle-type-edit-single/vehicle-type-edit-single.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { InvoiceShowComponent } from './components/invoice-show/invoice-show.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { InvoiceEditComponent } from './components/invoice-edit/invoice-edit.component';
import { InvoiceEditSingleComponent } from './components/invoice-edit-single/invoice-edit-single.component';
import { InvoiceDetailFormComponent } from './components/invoice-detail-form/invoice-detail-form.component';
import { InvoiceDetailListComponent } from './components/invoice-detail-list/invoice-detail-list.component';
import { InvoiceDetailEditComponent } from './components/invoice-detail-edit/invoice-detail-edit.component';
import { InvoiceDetailEditSingleComponent } from './components/invoice-detail-edit-single/invoice-detail-edit-single.component';
import { InvoiceDetailShowComponent } from './components/invoice-detail-show/invoice-detail-show.component';



@NgModule({
  declarations: [VehicleFormComponent, NavComponent, VehicleListComponent, VehicleEditComponent, VehicleShowComponent, VehicleEditSingleComponent, VehicleTypeFormComponent, VehicleTypeListComponent, VehicleTypeEditComponent, VehicleTypeShowComponent, VehicleTypeEditSingleComponent, InvoiceFormComponent, InvoiceShowComponent, InvoiceListComponent, InvoiceEditComponent, InvoiceEditSingleComponent, InvoiceDetailFormComponent, InvoiceDetailListComponent, InvoiceDetailEditComponent, InvoiceDetailEditSingleComponent, InvoiceDetailShowComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ]
})
export class AdminModule { }
