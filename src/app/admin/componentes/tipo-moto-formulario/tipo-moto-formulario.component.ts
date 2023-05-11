import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

import { VehicleTypeService } from '../../../nucleo/services/tipo-moto/tipo-moto.service';

import { VehicleType } from 'src/app/nucleo/models/tipoMoto.model';

@Component({
  selector: 'app-tipo-moto-formulario',
  templateUrl: './tipo-moto-formulario.component.html',
  styleUrls: ['./tipo-moto-formulario.component.scss'],
})
export class VehicleTypeFormComponent implements OnInit {
  addressForm = this.fb.group({
    body_type: [null, Validators.required],
    description: [null, Validators.required],
  });

  hasUnitNumber = false;

  constructor(
    private fb: FormBuilder,
    private vehicleTypeService: VehicleTypeService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const newVehicleType: VehicleType = {
      body_type: this.addressForm.controls.body_type.value,
      description: this.addressForm.controls.description.value,
    };
    this.vehicleTypeService
      .createVehicleType(newVehicleType)
      .subscribe((prueba) => {
        console.log(prueba);
      });

    alert('Tipo de Vehiculo agregado exitosamente');
  }
}
