import { Component, OnInit } from '@angular/core';

import { VehicleService } from "../../../core/services/vehicle/vehicle.service";

import { Vehicle } from 'src/app/core/models/vehicle.model';

@Component({
  selector: 'app-bugatti-gran-turismo',
  templateUrl: './bugatti-gran-turismo.component.html',
  styleUrls: ['./bugatti-gran-turismo.component.scss']
})
export class BugattiGranTurismoComponent implements OnInit {

  vehicles: Vehicle[] = [];
  

  constructor(
    private vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
    this.fetchGranTurismoVehicles();
    
  }

  fetchGranTurismoVehicles(){
    this.vehicleService.getAllVehicles().subscribe(vehicle => {
      const array = Object.values(vehicle);
      for(let i = 0; i<array.length; i++){
        if(array[i].brand === "Bugatti" && array[i].id_vehicle_type === 4){
          
          this.vehicles.push(array[i]);
          
        }
      }
      
    })
  }
}
