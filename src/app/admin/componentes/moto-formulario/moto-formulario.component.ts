import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { VehicleService } from '../../../nucleo/services/moto/moto.service';
import { VehicleTypeService } from '../../../nucleo/services/tipo-moto/tipo-moto.service';

import { Vehicle } from 'src/app/nucleo/models/moto.model';
import { VehicleType } from 'src/app/nucleo/models/tipoMoto.model';

@Component({
  selector: 'app-moto-formulario',
  templateUrl: './moto-formulario.component.html',
  styleUrls: ['./moto-formulario.component.scss'],
})
export class VehicleFormComponent {
  addressForm = this.fb.group({
    description: [null, Validators.required],
    name: [null, Validators.required],
    color: [null, Validators.required],
    brand: [null, Validators.required],
    image: [null, Validators.required],
    price: [null, Validators.required],
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
  constructor(
    private fb: FormBuilder,
    private vehicleService: VehicleService,
    private vehicleTypeService: VehicleTypeService
  ) {}

  ngOnInit(): void {
    this.vehicleTypeService.getAllVehicleTypes().subscribe((prueba) => {
      const array = Object.values(prueba);

      for (let i = 0; i < array.length; i++) {
        this.states.push({
          name: array[i].body_type,
          abbreviation: array[i].id_vehicle_type,
        });
      }
    });
  }

  onSubmit(): void {
    const newVehicle: Vehicle = {
      name: this.addressForm.controls.name.value,
      color: this.addressForm.controls.color.value,
      description: this.addressForm.controls.description.value,
      brand: this.addressForm.controls.brand.value,
      url: this.addressForm.controls.image.value,
      price: this.addressForm.controls.price.value,
      id_vehicle_type: this.addressForm.controls.state.value,
    };

    alert('Vehiculo agregado exitosamente');

    this.vehicleService.createVehicle(newVehicle).subscribe((prueba) => {
      console.log(prueba);
    });
  }
}
