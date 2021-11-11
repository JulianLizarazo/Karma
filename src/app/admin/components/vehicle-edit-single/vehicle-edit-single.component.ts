import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { VehicleService } from "../../../core/services/vehicle/vehicle.service";


import { Vehicle } from 'src/app/core/models/vehicle.model';
import { ActivatedRoute, Params } from '@angular/router';
import { VehicleTypeService } from 'src/app/core/services/vehicle-type/vehicle-type.service';

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
    name: "",
    brand: "",
    description: "",
    color: "",
    url: "",
    price: 0,
    id_vehicle_type: 0
  };

  addressForm = this.fb.group({
    statesId: [null, Validators.required],
    id: [null,Validators.required],
    name: [null,Validators.required],
    description: [null,Validators.required],
    color: [null, Validators.required],
    brand: [null, Validators.required],
    image: [null, Validators.required],
    state: [null, Validators.required],
   
  });

  hasUnitNumber = false;

  states: any = [];
  statesId: any = [];

  constructor(private fb: FormBuilder, 
    private vehicleService: VehicleService,
    private activeRoute: ActivatedRoute,
    private vehicleTypeService: VehicleTypeService,
  ) {}
  
  ngOnInit(): void {

    this.vehicleService.getAllVehicles().subscribe(prueba => {
      const array = Object.values(prueba);
      
      for(let i = 0; i<array.length; i++){
        this.statesId.push({
          name: `${array[i].id_vehicle}. ${array[i].name}`,
          abbreviation: array[i].id_vehicle,
        })
      }
    })
    console.log(this.statesId)
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
    
    this.vehicleService.getVehicle(this.addressForm.controls.statesId.value).subscribe(vehicle =>{
      const array = Object.values(vehicle);
      
      this.vehicle = {
        id_vehicle: array[0].id_vehicle,
        name: array[0].name,
        description: array[0].description,
        brand: array[0].brand,
        color: array[0].color,
        url: array[0].url,
        price: array[0].price,
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
              name: array[0].name,
              brand: array[0].brand,
              image: array[0].url,
              price: array[0].price,
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
      name: this.addressForm.controls.name.value,
      color: this.addressForm.controls.color.value,
      description: this.addressForm.controls.description.value,
      brand: this.addressForm.controls.brand.value,
      url: this.addressForm.controls.image.value,
      price: this.addressForm.controls.price.value,
      id_vehicle_type: this.addressForm.controls.state.value,
    }

    
    this.vehicleService.updateVehicle(this.id, newVehicle).subscribe(prueba => {
      console.log(prueba);
      
    });
   
    alert('Vehiculo editado exitosamente');
    
    
    location.href ="http://localhost:4200/admin/vehicle/edit-single";
    
  }

  

}
