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
    name:"",
    brand: "",
    description: "",
    color: "",
    url: "",
    id_vehicle_type: 0,
    price: 0,
    body_type: "",
  };

  addressForm = this.fb.group({
    statesId: [null, Validators.required],
    id: [null, Validators.required],
    name: [null,Validators.required],
    color: [null, Validators.required],
    brand: [null, Validators.required],
    image: [null, Validators.required],
   
   
  });

  hasUnitNumber = false;


  statesId: any = [];

  constructor(private fb: FormBuilder, 
    private vehicleService: VehicleService,
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
        id_vehicle_type: array[0].id_vehicle_type,
        price: array[0].price,
        body_type: array[0].body_type,

      };

    })

  
  }

  


}
