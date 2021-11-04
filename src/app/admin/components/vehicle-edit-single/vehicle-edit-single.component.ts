import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { VehicleService } from "../../../core/services/vehicle/vehicle.service";


import { Vehicle } from 'src/app/core/models/vehicle.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-vehicle-edit-single',
  templateUrl: './vehicle-edit-single.component.html',
  styleUrls: ['./vehicle-edit-single.component.scss']
})
export class VehicleEditSingleComponent implements OnInit {

  id: number;
  newId: number;

  vehicle: Vehicle = {
    id_vehicle: 0,
    brand: "",
    description: "",
    color: "",
    url: "",
    id_vehicle_type: 0
  };

  addressForm = this.fb.group({
    id: [null,Validators.required],
    description: [null,Validators.required],
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
    private activeRoute: ActivatedRoute,
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
        id_vehicle_type: array[0].id_vehicle_type

      };

      this.activeRoute.params.subscribe((params: Params) => {
        this.id = this.vehicle.id_vehicle as number;
        console.log(this.id);
        this.vehicleService.getVehicle(this.id).subscribe(vehicle => {
          const array = Object.values(vehicle);
          this.newId = array[0].id_vehicle;
          this.addressForm.patchValue(
            {
              description: array[0].description,
              color: array[0].color,
              brand: array[0].brand,
              image: array[0].url,
              state: array[0].id_vehicle_type,
            }
          );
        });
      })

      console.log(this.vehicle)

    })

    
  

  
  }

  updateVehicle(){
    const newVehicle: Vehicle = {
      id_vehicle: this.newId,
      color: this.addressForm.controls.color.value,
      description: this.addressForm.controls.description.value,
      brand: this.addressForm.controls.brand.value,
      url: this.addressForm.controls.image.value,
      id_vehicle_type: this.addressForm.controls.state.value,
    }

    
    this.vehicleService.updateVehicle(this.id, newVehicle).subscribe(prueba => {
      console.log(prueba);
      
    });
   
    alert('Vehiculo editado exitosamente');
    
    
    location.href ="http://localhost:4200/admin/vehicle/edit-single";
    
  }

  

}
