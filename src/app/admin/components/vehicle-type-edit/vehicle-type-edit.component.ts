import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { VehicleTypeService } from "../../../core/services/vehicle-type/vehicle-type.service";



import { VehicleType } from 'src/app/core/models/vehicleType.model';
@Component({
  selector: 'app-vehicle-type-edit',
  templateUrl: './vehicle-type-edit.component.html',
  styleUrls: ['./vehicle-type-edit.component.scss']
})
export class VehicleTypeEditComponent implements OnInit {

  
  id: number;
  newId: number;

 

  
 
  addressForm = this.fb.group({
    body_type: [null, Validators.required],
    description: [null,Validators.required],
    
   
  });

  hasUnitNumber = false;

 

  constructor(private fb: FormBuilder, 
  private vehicleTypeService: VehicleTypeService,
  private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      console.log(params);
      this.id = params.id_vehicle_type;
      console.log(this.id);
      this.vehicleTypeService.getVehicleType(this.id).subscribe(vehicleType => {
        const array = Object.values(vehicleType);
        this.newId = array[0].id_vehicle_type;
        
        this.addressForm.patchValue(
          {
            body_type: array[0].body_type,
            description: array[0].description,
            
          }
        );
      });
    })
      
  }

  onSubmit(): void {

    const newVehicleType: VehicleType = {
      id_vehicle_type: this.newId,
      body_type: this.addressForm.controls.body_type.value,
      description: this.addressForm.controls.description.value,
    }

    
    this.vehicleTypeService.updateVehicleType(this.id, newVehicleType).subscribe(prueba => {
      console.log(prueba);
      
    });
   
    alert('Tipo de Vehiculo editado exitosamente');
    
    
    location.href ="http://localhost:4200/admin/vehicle-type/list";
    
  }

}
