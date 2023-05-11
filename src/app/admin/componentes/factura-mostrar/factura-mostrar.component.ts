import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { InvoiceService } from '../../../nucleo/services/factura/factura.service';

import { Invoice } from 'src/app/nucleo/models/factura.model';

@Component({
  selector: 'app-factura-mostrar',
  templateUrl: './factura-mostrar.component.html',
  styleUrls: ['./factura-mostrar.component.scss'],
})
export class InvoiceShowComponent implements OnInit {
  invoice: Invoice = {
    id_invoice: 0,
    VAT: 0.19,
    payment_method: '',
    date: '',
    user_name1: '',
    user_lastname1: '',
    campus: '',
  };

  addressForm = this.fb.group({
    statesId: [null, Validators.required],
    id_invoice: [null, Validators.required],
    payment_method: [null, Validators.required],
    date: [null, Validators.required],
    user_name1: [null, Validators.required],
    user_lastname1: [null, Validators.required],
    campus: [null, Validators.required],
  });

  hasUnitNumber = false;

  statesId: any = [];

  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoiceService
  ) {}

  ngOnInit(): void {
    this.invoiceService.getAllInvoices().subscribe((prueba) => {
      const array = Object.values(prueba);

      for (let i = 0; i < array.length; i++) {
        this.statesId.push({
          name: `${array[i].id_invoice}. ${array[i].user_name1} ${array[i].user_lastname1} ${array[i].date}`,
          abbreviation: array[i].id_invoice,
        });
      }
    });
  }

  onSubmit(): void {
    this.invoiceService
      .getInvoice(this.addressForm.controls.statesId.value)
      .subscribe((invoice) => {
        const array = Object.values(invoice);

        this.invoice = {
          id_invoice: array[0].id_invoice,
          VAT: array[0].VAT,
          payment_method: array[0].payment_method,
          date: array[0].date,
          user_name1: array[0].user_name1,
          user_lastname1: array[0].user_lastname1,
          campus: array[0].name_campus,
        };

        console.log(this.invoice);
      });
  }
}
