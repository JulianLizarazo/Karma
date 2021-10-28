import { Component, OnInit } from '@angular/core';

import { VehicleService } from "../../../core/services/vehicle/vehicle.service";

import { Vehicle } from 'src/app/core/models/vehicle.model';

@Component({
  selector: 'app-mclaren-musclecar',
  templateUrl: './mclaren-musclecar.component.html',
  styleUrls: ['./mclaren-musclecar.component.scss']
})
export class MclarenMusclecarComponent implements OnInit {

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
        if(array[i].brand === "McLaren" && array[i].id_vehicle_type === 2){
          
          this.vehicles.push(array[i]);
          
        }
      }
      
    })
  }

}
