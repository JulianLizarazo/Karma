import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { ReportTypeVehicleService } from '../../../nucleo/services/reporte-tipo-moto/reporte-tipo-moto.service';

import { ReportTypeVehicle } from 'src/app/nucleo/models/reporteTipoMoto.model';
import { VehicleService } from 'src/app/nucleo/services/moto/moto.service';

@Component({
  selector: 'app-reporte-tipo-moto',
  templateUrl: './reporte-tipo-moto.component.html',
  styleUrls: ['./reporte-tipo-moto.component.scss'],
})
export class ReportVehicleTypeComponent implements OnInit {
  report: ReportTypeVehicle = {
    id_invoice_det: 0,
    id_invoice: 0,
    price: 0,
    id_vehicle_detail: 0,
    date: '',
    vehicle: '',
    car_plate: 0,
    engine_num: '',
    chassis_num: '',
    vehicle_model: 0,
  };

  addressForm = this.fb.group({
    states: [null, Validators.required],
    first_date: [null, Validators.required],
    last_date: [null, Validators.required],
  });

  hasUnitNumber = false;

  states: any = [];

  constructor(
    private fb: FormBuilder,
    private reportVehicleTypeService: ReportTypeVehicleService,
    private vehicleService: VehicleService
  ) {}

  ngOnInit(): void {
    this.vehicleService.getAllVehicles().subscribe((prueba) => {
      const array = Object.values(prueba);

      for (let i = 0; i < array.length; i++) {
        this.states.push({
          name: `${array[i].id_vehicle}. Nombre: ${array[i].name} Marca: ${array[i].brand} Tipo: ${array[i].body_type} Color: ${array[i].color}`,
          abbreviation: array[i].id_vehicle_type,
        });
      }
    });
  }

  onSubmit(): void {
    this.reportVehicleTypeService
      .getAllReportTypeVehicles(
        this.addressForm.controls.states.value,
        this.addressForm.controls.first_date.value,
        this.addressForm.controls.last_date.value
      )
      .subscribe((report) => {
        const array = Object.values(report);

        this.report = {
          id_invoice_det: array[0].id_invoice_det,
          id_invoice: array[0].id_invoice,
          price: array[0].price,
          id_vehicle_detail: array[0].id_vehicle_detail,
          date: array[0].date,
          vehicle: array[0].vehicle,
          car_plate: array[0].car_plate,
          engine_num: array[0].engine_num,
          chassis_num: array[0].chassis_num,
          vehicle_model: array[0].vehicle_model,
        };
        console.log(report);
      });
    this.getReports();
  }

  reports: ReportTypeVehicle[] = [];

  displayedColumns: string[] = [
    'id_invoice_det',
    'id_invoice',
    'price',
    'id_vehicle_detail',
    'date',
    'vehicle',
    'car_plate',
    'engine_num',
    'chassis_num',
    'vehicle_model',
  ];

  getReports() {
    this.reportVehicleTypeService
      .getAllReportTypeVehicles(
        this.addressForm.controls.states.value,
        this.addressForm.controls.first_date.value,
        this.addressForm.controls.last_date.value
      )
      .subscribe((reports) => {
        this.reports = reports;
      });
  }
}
