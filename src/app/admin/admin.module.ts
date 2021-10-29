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


@NgModule({
  declarations: [VehicleFormComponent, NavComponent, VehicleListComponent, VehicleEditComponent, VehicleShowComponent, VehicleEditSingleComponent],
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
