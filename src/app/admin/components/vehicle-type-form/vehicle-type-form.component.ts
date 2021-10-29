import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

import { VehicleTypeService } from "../../../core/services/vehicle-type/vehicle-type.service";


import { VehicleType } from 'src/app/core/models/vehicleType.model';

@Component({
  selector: 'app-vehicle-type-form',
  templateUrl: './vehicle-type-form.component.html',
  styleUrls: ['./vehicle-type-form.component.scss']
})
export class VehicleTypeFormComponent implements OnInit {


  addressForm = this.fb.group({
    body_type: [null,Validators.required],
    description: [null, Validators.required],
    
   
  });

  hasUnitNumber = false;


  

  constructor(private fb: FormBuilder, 
  private vehicleTypeService: VehicleTypeService) {}
  
  ngOnInit(): void {
    
      
  }

  onSubmit(): void {
    
    const newVehicleType: VehicleType = {
      body_type: this.addressForm.controls.body_type.value,
      description: this.addressForm.controls.description.value,
    }
    this.vehicleTypeService.createVehicleType(newVehicleType).subscribe(prueba => {
      console.log(prueba);
    });
   
    alert('Tipo de Vehiculo agregado exitosamente');
    
    
    
  }

}
