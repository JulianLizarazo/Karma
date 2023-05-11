import { Component, OnInit } from '@angular/core';

import { InvoiceService } from '../../../nucleo/services/factura/factura.service';

import { Invoice } from 'src/app/nucleo/models/factura.model';

@Component({
  selector: 'app-factura-listar',
  templateUrl: './factura-listar.component.html',
  styleUrls: ['./factura-listar.component.scss'],
})
export class InvoiceListComponent implements OnInit {
  invoices: Invoice[] = [];

  displayedColumns: string[] = [
    'actions',
    'id_invoice',
    'VAT',
    'payment_method',
    'date',
    'user_name1',
    'user_lastname1',
    'name_campus',
  ];

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices() {
    this.invoiceService.getAllInvoices().subscribe((invoices) => {
      this.invoices = invoices;
    });
  }
}
