import { Component, OnInit } from '@angular/core';
import { VehicleTypeService } from '../../../nucleo/services/tipo-moto/tipo-moto.service';

import { VehicleType } from 'src/app/nucleo/models/tipoMoto.model';

@Component({
  selector: 'app-tipo-moto-listar',
  templateUrl: './tipo-moto-listar.component.html',
  styleUrls: ['./tipo-moto-listar.component.scss'],
})
export class VehicleTypeListComponent implements OnInit {
  vehicleTypes: VehicleType[] = [];

  displayedColumns: string[] = [
    'actions',
    'id_vehicle_type',
    'body_type',
    'description',
  ];

  constructor(private vehicleTypeService: VehicleTypeService) {}

  ngOnInit(): void {
    this.getTypeVehicles();
  }

  getTypeVehicles() {
    this.vehicleTypeService.getAllVehicleTypes().subscribe((vehicleTypes) => {
      this.vehicleTypes = vehicleTypes;
    });
  }
}
