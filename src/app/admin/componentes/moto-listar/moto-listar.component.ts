import { Component, OnInit } from '@angular/core';

import { VehicleService } from '../../../nucleo/services/moto/moto.service';

import { Vehicle } from 'src/app/nucleo/models/moto.model';

@Component({
  selector: 'app-moto-listar',
  templateUrl: './moto-listar.component.html',
  styleUrls: ['./moto-listar.component.scss'],
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[] = [];

  displayedColumns: string[] = [
    'actions',
    'id_vehicle',
    'name',
    'color',
    'brand',
    'description',
    'url',
    'price',
    'body_type',
  ];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles() {
    this.vehicleService.getAllVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
    });
  }
}
