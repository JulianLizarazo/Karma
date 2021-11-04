import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

import { Invoice } from 'src/app/core/models/invoice.model';

import { InvoiceService } from 'src/app/core/services/invoice/invoice.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {

  

  addressForm = this.fb.group({
    payment_method: [null,Validators.required],
    date: [null, Validators.required],
    id_campus: [null, Validators.required],
    id_user: [null, Validators.required],
   
  });

  hasUnitNumber = false;

  

  constructor(private fb: FormBuilder, 
    private invoiceService: InvoiceService,
  ) {}
  
  ngOnInit(): void {
    
      
  }

  onSubmit(): void {

    const newInvoice: Invoice = {
      payment_method: this.addressForm.controls.payment_method.value,
      VAT: 0.19,
      date: this.addressForm.controls.date.value,
      id_campus: this.addressForm.controls.id_campus.value,
      id_user: this.addressForm.controls.id_user.value,
    }

    console.log(newInvoice)
   
    alert('Factura agregada exitosamente');
    
    this.invoiceService.createInvoice(newInvoice).subscribe(prueba => {
      console.log(prueba);
    });

    
  }

  

}
