import { Component, OnInit } from '@angular/core';

import { VehicleService } from "../../../core/services/vehicle/vehicle.service";

import { Vehicle } from 'src/app/core/models/vehicle.model';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  vehicles: Vehicle[] = [];

  displayedColumns: string[] = ['id_vehicle', 'color', 'brand', 'description', 'id_vehicle_type', 'actions'];

  constructor(
    private vehicleService: VehicleService,
  ) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles(){
    this.vehicleService.getAllVehicles().subscribe(vehicles => {
      this.vehicles = vehicles;
    })
  }


}
