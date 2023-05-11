import { Component, OnInit } from '@angular/core';

import { InvoiceDetailService } from '../../../nucleo/services/detalle-factura/detalle-factura.service';

import { InvoiceDetail } from 'src/app/nucleo/models/detalleFactura.model';

@Component({
  selector: 'app-factura-detalle-listar',
  templateUrl: './factura-detalle-listar.component.html',
  styleUrls: ['./factura-detalle-listar.component.scss'],
})
export class InvoiceDetailListComponent implements OnInit {
  invoiceDetails: InvoiceDetail[] = [];

  displayedColumns: string[] = [
    'actions',
    'id_invoice_det',
    'id_invoice',
    'price',
    'id_vehicle_detail',
    'car_plate',
    'engine_num',
    'chassis_num',
    'vehicle_model',
  ];

  constructor(private invoiceDetailService: InvoiceDetailService) {}

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles() {
    this.invoiceDetailService
      .getAllInvoiceDetails()
      .subscribe((invoiceDetails) => {
        this.invoiceDetails = invoiceDetails;
      });
  }
}
