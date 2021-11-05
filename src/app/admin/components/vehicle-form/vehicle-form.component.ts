import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { VehicleService } from "../../../core/services/vehicle/vehicle.service";
import { VehicleTypeService } from "../../../core/services/vehicle-type/vehicle-type.service";


import { Vehicle } from 'src/app/core/models/vehicle.model';
import { VehicleType } from 'src/app/core/models/vehicleType.model';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss']
})
export class VehicleFormComponent {


  addressForm = this.fb.group({
    description: [null,Validators.required],
    color: [null, Validators.required],
    brand: [null, Validators.required],
    image: [null, Validators.required],
    state: [null, Validators.required],
   
  });

  hasUnitNumber = false;
/*
  states = [
    {name: "Roadster", abbreviation: 1},
    {name: 'Muscle Car', abbreviation: 2},
    {name: 'Altas Prestaciones', abbreviation: 5},
    {name: 'Superdeportivo', abbreviation: 3},
    {name: 'Gran Turismo', abbreviation: 4},
    
  ];
*/

  states: any = [];
  constructor(private fb: FormBuilder, private vehicleService: VehicleService,
  private vehicleTypeService: VehicleTypeService) {}
  
  ngOnInit(): void {
    this.vehicleTypeService.getAllVehicleTypes().subscribe(prueba => {
      const array = Object.values(prueba);

      for(let i = 0; i<array.length; i++){
        this.states.push({
          name: array[i].body_type,
          abbreviation: array[i].id_vehicle_type,
        })
      }
    })

    
      
  }

  onSubmit(): void {

    const newVehicle: Vehicle = {
      color: this.addressForm.controls.color.value,
      description: this.addressForm.controls.description.value,
      brand: this.addressForm.controls.brand.value,
      url: this.addressForm.controls.image.value,
      id_vehicle_type: this.addressForm.controls.state.value,
    }
   
    alert('Vehiculo agregado exitosamente');
    
    this.vehicleService.createVehicle(newVehicle).subscribe(prueba => {
      console.log(prueba);
    });

    
  }

  

  



}
