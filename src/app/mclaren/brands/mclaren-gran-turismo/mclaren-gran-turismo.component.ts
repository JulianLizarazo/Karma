import { Component, OnInit } from '@angular/core';

import { VehicleService } from "../../../core/services/vehicle.service";

import { Vehicle } from 'src/app/core/models/vehicle.model';
@Component({
  selector: 'app-mclaren-gran-turismo',
  templateUrl: './mclaren-gran-turismo.component.html',
  styleUrls: ['./mclaren-gran-turismo.component.scss']
})
export class MclarenGranTurismoComponent implements OnInit {

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
        if(array[i].brand === "McLaren" && array[i].id_vehicle_type === 4){
          
          this.vehicles.push(array[i]);
          
        }
      }
      
    })
  }

}
