import { Component, OnInit } from '@angular/core';
import { VehicleService } from "../../../core/services/vehicle/vehicle.service";

import { Vehicle } from 'src/app/core/models/vehicle.model';


@Component({
  selector: 'app-aston-martin-musclecar',
  templateUrl: './aston-martin-musclecar.component.html',
  styleUrls: ['./aston-martin-musclecar.component.scss']
})
export class AstonMartinMusclecarComponent implements OnInit {

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
        if(array[i].brand === "Aston Martin" && array[i].id_vehicle_type === 2){
          
          this.vehicles.push(array[i]);
          
        }
      }
      
    })
  }

}
