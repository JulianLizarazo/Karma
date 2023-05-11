import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { InvoiceDetailService } from '../../../nucleo/services/detalle-factura/detalle-factura.service';

import { InvoiceDetail } from 'src/app/nucleo/models/detalleFactura.model';

import { InvoiceService } from 'src/app/nucleo/services/factura/factura.service';
import { VehicleDetailService } from 'src/app/nucleo/services/detalle-moto/detalle-moto.service';

@Component({
  selector: 'app-factura-detalle-editar',
  templateUrl: './factura-detalle-editar.component.html',
  styleUrls: ['./factura-detalle-editar.component.scss'],
})
export class InvoiceDetailEditComponent implements OnInit {
  id: number;
  newId: number;

  addressForm = this.fb.group({
    states: [null, Validators.required],
    price: [null, Validators.required],
    vehicleStates: [null, Validators.required],
  });

  hasUnitNumber = false;

  states: any = [];
  vehicleStates: any = [];

  constructor(
    private fb: FormBuilder,
    private invoiceDetailService: InvoiceDetailService,
    private invoiceService: InvoiceService,
    private vehicleDetailService: VehicleDetailService,

    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.invoiceService.getAllInvoices().subscribe((prueba) => {
      const array = Object.values(prueba);

      for (let i = 0; i < array.length; i++) {
        this.states.push({
          name: `${array[i].id_invoice}. MP:${array[i].payment_method} Fecha: ${array[i].date} Nombre:${array[i].user_name1} ${array[i].user_lastname1}`,
          abbreviation: array[i].id_invoice,
        });
      }
    });

    this.vehicleDetailService.getAllVehicleDetails().subscribe((prueba) => {
      const array = Object.values(prueba);

      for (let i = 0; i < array.length; i++) {
        this.vehicleStates.push({
          name: `${array[i].id_vehicle_detail}. Vehiculo: ${array[i].id_vehicle} Placa: ${array[i].car_plate}`,
          abbreviation: array[i].id_vehicle_detail,
        });
      }
    });

    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id_invoice_det.toString();
      console.log(this.id);
      this.invoiceDetailService
        .getInvoiceDetail(this.id)
        .subscribe((invoiceDetail) => {
          const array = Object.values(invoiceDetail);
          this.newId = array[0].id_invoice_det;
          this.addressForm.patchValue({
            states: array[0].id_invoice,
            price: array[0].price,
            vehicleStates: array[0].id_vehicle_detail,
          });
        });
    });
  }

  onSubmit(): void {
    const newInvoiceDetail: InvoiceDetail = {
      id_invoice_det: this.newId,
      amount: 1,
      id_invoice: this.addressForm.controls.states.value,
      price: this.addressForm.controls.price.value,
      id_vehicle_detail: this.addressForm.controls.vehicleStates.value,
    };

    this.invoiceDetailService
      .updateInvoiceDetail(this.id, newInvoiceDetail)
      .subscribe((prueba) => {
        console.log(prueba);
      });

    alert('Detalle de Factura editado exitosamente');

    location.href = 'http://localhost:4200/admin/invoice-detail/list';
  }
}
