import { Component, OnInit } from '@angular/core';

import { InvoiceService } from "../../../core/services/invoice/invoice.service";

import { Invoice } from 'src/app/core/models/invoice.model';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {

  invoices: Invoice[] = [];

  displayedColumns: string[] = ['actions', 'id_invoice', 'VAT', 'payment_method', 'date', 'user_name1', 'user_lastname1', 'name_campus'];

  constructor(
    private invoiceService: InvoiceService,
  ) { }

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices(){
    this.invoiceService.getAllInvoices().subscribe(invoices => {
      this.invoices = invoices;
    })
  }

}
