import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VehicleService } from "../../../core/services/vehicle/vehicle.service";
import { VehicleTypeService } from "../../../core/services/vehicle-type/vehicle-type.service";


import { Vehicle } from 'src/app/core/models/vehicle.model';
import { VehicleType } from 'src/app/core/models/vehicleType.model';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.scss']
})
export class VehicleEditComponent implements OnInit {

  id: number;
  newId: number;

 

  
 
  addressForm = this.fb.group({
    description: [null,Validators.required],
    color: [null, Validators.required],
    brand: [null, Validators.required],
    image: [null, Validators.required],
    state: [null, Validators.required],
   
  });

  hasUnitNumber = false;

  states: any = [];

  constructor(private fb: FormBuilder, private vehicleService: VehicleService,
  private vehicleTypeService: VehicleTypeService,
  private activeRoute: ActivatedRoute,
  private router: Router) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id_vehicle.toString();
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
    
    
    location.href ="http://localhost:4200/admin/vehicle/list";
    
  }

  
}
