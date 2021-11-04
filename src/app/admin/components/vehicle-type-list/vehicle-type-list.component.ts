import { Component, OnInit } from '@angular/core';
import { VehicleTypeService } from "../../../core/services/vehicle-type/vehicle-type.service";

import { VehicleType } from 'src/app/core/models/vehicleType.model';

@Component({
  selector: 'app-vehicle-type-list',
  templateUrl: './vehicle-type-list.component.html',
  styleUrls: ['./vehicle-type-list.component.scss']
})
export class VehicleTypeListComponent implements OnInit {
  vehicleTypes: VehicleType[] = [];

  displayedColumns: string[] = ['actions', 'id_vehicle_type', 'body_type', 'description'];

  constructor(
    private vehicleTypeService: VehicleTypeService,
  ) { }

  ngOnInit(): void {
    this.getTypeVehicles();
  }

  getTypeVehicles(){
    this.vehicleTypeService.getAllVehicleTypes().subscribe(vehicleTypes => {
      this.vehicleTypes = vehicleTypes;
    })
  }

}
