import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { InvoiceService } from "../../../core/services/invoice/invoice.service";


import { Invoice } from 'src/app/core/models/invoice.model';

@Component({
  selector: 'app-invoice-show',
  templateUrl: './invoice-show.component.html',
  styleUrls: ['./invoice-show.component.scss']
})
export class InvoiceShowComponent implements OnInit {

  
  invoice: Invoice = {
    id_invoice: 0,
    VAT: 0.19,
    payment_method: "",
    date: "",
    user_name1: "",
    user_lastname1: "",
    campus: "",
  };

  addressForm = this.fb.group({
    id_invoice: [null,Validators.required],
    payment_method: [null, Validators.required],
    date: [null, Validators.required],
    user_name1: [null, Validators.required],
    user_lastname1: [null, Validators.required],
    campus: [null, Validators.required],
   
  });

  hasUnitNumber = false;

  

  constructor(private fb: FormBuilder, 
    private invoiceService: InvoiceService,
  ) {}
  
  ngOnInit(): void {
    
      
  }

  onSubmit(): void {
    
    this.invoiceService.getInvoice(this.addressForm.controls.id_invoice.value).subscribe(invoice =>{
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

      console.log(this.invoice)

    })

  
  }

}
