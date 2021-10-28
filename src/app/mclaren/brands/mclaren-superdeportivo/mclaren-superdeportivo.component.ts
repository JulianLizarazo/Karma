import { Component, OnInit } from '@angular/core';

import { VehicleService } from "../../../core/services/vehicle/vehicle.service";

import { Vehicle } from 'src/app/core/models/vehicle.model';

@Component({
  selector: 'app-mclaren-superdeportivo',
  templateUrl: './mclaren-superdeportivo.component.html',
  styleUrls: ['./mclaren-superdeportivo.component.scss']
})
export class MclarenSuperdeportivoComponent implements OnInit {

  vehicles: Vehicle[] = [];
  

  constructor(
    private vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
    this.fetchSuperDeportivoVehicles();
    
  }

  fetchSuperDeportivoVehicles(){
    this.vehicleService.getAllVehicles().subscribe(vehicle => {
      const array = Object.values(vehicle);
      for(let i = 0; i<array.length; i++){
        if(array[i].brand === "McLaren" && array[i].id_vehicle_type === 3){
        
          this.vehicles.push(array[i]);
          
        }
      }
      
    })
  }

}
