import { Component, OnInit } from '@angular/core';

import { VehicleService } from "../../../core/services/vehicle.service";

import { Vehicle } from 'src/app/core/models/vehicle.model';

@Component({
  selector: 'app-aston-martin-roadster',
  templateUrl: './aston-martin-roadster.component.html',
  styleUrls: ['./aston-martin-roadster.component.scss']
})
export class AstonMartinRoadsterComponent implements OnInit {

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
        if(array[i].brand === "Aston Martin" && array[i].id_vehicle_type === 1){
          
          this.vehicles.push(array[i]);
          
        }
      }
      
    })
  }

}
