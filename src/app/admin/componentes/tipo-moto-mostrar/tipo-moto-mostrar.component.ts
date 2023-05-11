import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { VehicleTypeService } from '../../../nucleo/services/tipo-moto/tipo-moto.service';

import { VehicleType } from 'src/app/nucleo/models/tipoMoto.model';

@Component({
  selector: 'app-tipo-moto-mostrar',
  templateUrl: './tipo-moto-mostrar.component.html',
  styleUrls: ['./tipo-moto-mostrar.component.scss'],
})
export class VehicleTypeShowComponent implements OnInit {
  vehicleType: VehicleType = {
    id_vehicle_type: 0,
    body_type: '',
    description: '',
  };

  addressForm = this.fb.group({
    statesId: [null, Validators.required],
    id_vehicle_type: [null, Validators.required],
    color: [null, Validators.required],
    brand: [null, Validators.required],
    image: [null, Validators.required],
  });

  hasUnitNumber = false;

  statesId: any = [];

  constructor(
    private fb: FormBuilder,
    private vehicleTypeService: VehicleTypeService
  ) {}

  ngOnInit(): void {
    this.vehicleTypeService.getAllVehicleTypes().subscribe((prueba) => {
      const array = Object.values(prueba);

      for (let i = 0; i < array.length; i++) {
        this.statesId.push({
          name: `${array[i].id_vehicle_type}. ${array[i].body_type}`,
          abbreviation: array[i].id_vehicle_type,
        });
      }
    });
  }

  onSubmit(): void {
    this.vehicleTypeService
      .getVehicleType(this.addressForm.controls.statesId.value)
      .subscribe((vehicleType) => {
        const array = Object.values(vehicleType);

        this.vehicleType = {
          id_vehicle_type: array[0].id_vehicle_type,
          body_type: array[0].body_type,
          description: array[0].description,
        };
      });
  }
}
