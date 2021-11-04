import { Component, OnInit } from '@angular/core';
import { VehicleService } from "../../../core/services/vehicle/vehicle.service";

import { Vehicle } from 'src/app/core/models/vehicle.model';

@Component({
  selector: 'app-bugatti-roadster',
  templateUrl: './bugatti-roadster.component.html',
  styleUrls: ['./bugatti-roadster.component.scss']
})
export class BugattiRoadsterComponent implements OnInit {

  vehicles: Vehicle[] = [];
  

  constructor(
    private vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
    this.fetchRoadsterVehicles();
    
  }

  fetchRoadsterVehicles(){
    this.vehicleService.getAllVehicles().subscribe(vehicle => {
      const array = Object.values(vehicle);
      for(let i = 0; i<array.length; i++){
        if(array[i].brand === "Bugatti" && array[i].id_vehicle_type === 1){
          
          this.vehicles.push(array[i]);
          
        }
      }
      
    })
  }

}
