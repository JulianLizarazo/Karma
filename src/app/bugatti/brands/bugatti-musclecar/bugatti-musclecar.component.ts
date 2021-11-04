import { Component, OnInit } from '@angular/core';

import { VehicleService } from "../../../core/services/vehicle/vehicle.service";

import { Vehicle } from 'src/app/core/models/vehicle.model';

@Component({
  selector: 'app-bugatti-musclecar',
  templateUrl: './bugatti-musclecar.component.html',
  styleUrls: ['./bugatti-musclecar.component.scss']
})
export class BugattiMusclecarComponent implements OnInit {

  vehicles: Vehicle[] = [];
  

  constructor(
    private vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
    this.fetchMuscleCarVehicles();
    
  }

  fetchMuscleCarVehicles(){
    this.vehicleService.getAllVehicles().subscribe(vehicle => {
      const array = Object.values(vehicle);
      for(let i = 0; i<array.length; i++){
        if(array[i].brand === "Bugatti" && array[i].id_vehicle_type === 2){
          
          this.vehicles.push(array[i]);
          
        }
      }
      
    })
  }
}
