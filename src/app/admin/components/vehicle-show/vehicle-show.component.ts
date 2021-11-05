import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { VehicleService } from "../../../core/services/vehicle/vehicle.service";


import { Vehicle } from 'src/app/core/models/vehicle.model';


@Component({
  selector: 'app-vehicle-show',
  templateUrl: './vehicle-show.component.html',
  styleUrls: ['./vehicle-show.component.scss']
})
export class VehicleShowComponent implements OnInit {

  vehicle: Vehicle = {
    id_vehicle: 0,
    brand: "",
    description: "",
    color: "",
    url: "",
    id_vehicle_type: 0,
    body_type: "",
  };

  addressForm = this.fb.group({
    id: [null,Validators.required],
    color: [null, Validators.required],
    brand: [null, Validators.required],
    image: [null, Validators.required],
    state: [null, Validators.required],
   
  });

  hasUnitNumber = false;

  states = [
    {name: "Roadster", abbreviation: 1},
    {name: 'Muscle Car', abbreviation: 2},
    {name: 'Altas Prestaciones', abbreviation: 5},
    {name: 'Superdeportivo', abbreviation: 3},
    {name: 'Gran Turismo', abbreviation: 4},
    
  ];

  constructor(private fb: FormBuilder, 
    private vehicleService: VehicleService,
  ) {}
  
  ngOnInit(): void {
    
      
  }

  onSubmit(): void {
    
    this.vehicleService.getVehicle(this.addressForm.controls.id.value).subscribe(vehicle =>{
      const array = Object.values(vehicle);
      
      this.vehicle = {
        id_vehicle: array[0].id_vehicle,
        description: array[0].description,
        brand: array[0].brand,
        color: array[0].color,
        url: array[0].url,
        id_vehicle_type: array[0].id_vehicle_type,
        body_type: array[0].body_type,

      };

    })

  
  }

  


}
