import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { VehicleTypeService } from "../../../core/services/vehicle-type/vehicle-type.service";


import { VehicleType } from 'src/app/core/models/vehicleType.model';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-vehicle-type-edit-single',
  templateUrl: './vehicle-type-edit-single.component.html',
  styleUrls: ['./vehicle-type-edit-single.component.scss']
})
export class VehicleTypeEditSingleComponent implements OnInit {

  
  id: number;
  newId: number;

  vehicleType: VehicleType = {
    id_vehicle_type: 0,
    body_type: "",
    description: "",
    
  };

  addressForm = this.fb.group({
    id_vehicle_type: [null,Validators.required],
    body_type: [null, Validators.required],
    description: [null,Validators.required],
   
   
  });

  hasUnitNumber = false;

  

  constructor(private fb: FormBuilder, 
    private vehicleTypeService: VehicleTypeService,
    private activeRoute: ActivatedRoute,
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

      this.activeRoute.params.subscribe((params: Params) => {
        this.id = this.vehicleType.id_vehicle_type as number;
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

      console.log(this.vehicleType)

    })

    
  

  
  }

  updateVehicleType(){
    const newVehicle: VehicleType = {
      id_vehicle_type: this.newId,
      body_type: this.addressForm.controls.body_type.value,
      description: this.addressForm.controls.description.value,
      
    }

    
    this.vehicleTypeService.updateVehicleType(this.id, newVehicle).subscribe(prueba => {
      console.log(prueba);
      
    });
   
    alert('Tipo Vehiculo editado exitosamente');
    
    
    location.href ="http://localhost:4200/admin/vehicle-type/edit-single";
    
  }

  

}
