import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { VehicleTypeService } from "../../../core/services/vehicle-type/vehicle-type.service";


import { VehicleType } from 'src/app/core/models/vehicleType.model';

@Component({
  selector: 'app-vehicle-type-show',
  templateUrl: './vehicle-type-show.component.html',
  styleUrls: ['./vehicle-type-show.component.scss']
})
export class VehicleTypeShowComponent implements OnInit {

  
  vehicleType: VehicleType = {
    id_vehicle_type: 0,
    body_type: "",
    description: "",
   
  };

  addressForm = this.fb.group({
    id_vehicle_type: [null,Validators.required],
    color: [null, Validators.required],
    brand: [null, Validators.required],
    image: [null, Validators.required],
   
   
  });

  hasUnitNumber = false;

  

  constructor(private fb: FormBuilder, 
    private vehicleTypeService: VehicleTypeService,
  ) {}
  
  ngOnInit(): void {
    
      
  }

  onSubmit(): void {
    
    this.vehicleTypeService.getVehicleType(this.addressForm.controls.id_vehicle_type.value)
    .subscribe(vehicleType =>{
      const array = Object.values(vehicleType);
      
      this.vehicleType = {
        id_vehicle_type: array[0].id_vehicle_type,
        body_type: array[0].body_type,
        description: array[0].description,
        

      };

    })

  
  }


}
