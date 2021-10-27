import { Component, OnInit } from '@angular/core';

import { VehicleService } from "../../../core/services/vehicle.service";

import { Vehicle } from 'src/app/core/models/vehicle.model';


@Component({
  selector: 'app-mclaren-roadster',
  templateUrl: './mclaren-roadster.component.html',
  styleUrls: ['./mclaren-roadster.component.scss']
})
export class MclarenRoadsterComponent implements OnInit {

  vehicles: Vehicle[] = [];
  

  constructor(
    private vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
    this.fetchAltasPrestacionesVehicles();
    
  }

  fetchAltasPrestacionesVehicles(){
    this.vehicleService.getAllVehicles().subscribe(vehicle => {
      const array = Object.values(vehicle);
      for(let i = 0; i<array.length; i++){
        if(array[i].brand === "McLaren" && array[i].id_vehicle_type === 1){
          
          this.vehicles.push(array[i]);
          
        }
      }
      
    })
  }
}
