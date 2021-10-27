import { Component, OnInit } from '@angular/core';

import { VehicleService } from "../../../core/services/vehicle.service";

import { Vehicle } from 'src/app/core/models/vehicle.model';

@Component({
  selector: 'app-aston-martin-altas-prestaciones',
  templateUrl: './aston-martin-altas-prestaciones.component.html',
  styleUrls: ['./aston-martin-altas-prestaciones.component.scss']
})
export class AstonMartinAltasPrestacionesComponent implements OnInit {

 

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
        if(array[i].brand === "Aston Martin" && array[i].id_vehicle_type === 5){
          
          this.vehicles.push(array[i]);
          
        }
      }
      
    })
  }

}
