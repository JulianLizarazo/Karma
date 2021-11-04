import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { InvoiceService } from "../../../core/services/invoice/invoice.service";

import { Invoice } from 'src/app/core/models/invoice.model';


@Component({
  selector: 'app-invoice-edit',
  templateUrl: './invoice-edit.component.html',
  styleUrls: ['./invoice-edit.component.scss']
})
export class InvoiceEditComponent implements OnInit {

  
  id: number;
  newId: number;
  
 

  
 
  addressForm = this.fb.group({
    payment_method: [null,Validators.required],
    date: [null, Validators.required],
    id_campus: [null, Validators.required],
    id_user: [null, Validators.required],
   
   
  });

  hasUnitNumber = false;

 

  constructor(private fb: FormBuilder, 
    private invoiceService: InvoiceService,
  private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id_invoice.toString();
      console.log(this.id);
      this.invoiceService.getInvoice(this.id).subscribe(invoice => {
        const array = Object.values(invoice);
        console.log(array);
       
        this.newId = array[0].id_invoice;
        this.addressForm.patchValue(
          {
            VAT: array[0].VAT,
            payment_method: array[0].payment_method,
            date: array[0].date,
            id_campus: array[0].id_campus,
            id_user: array[0].id_user,
          }
        );
      });
    })
      
  }

  onSubmit(): void {

    const newInvoice: Invoice = {
      id_invoice: this.newId,
      VAT: 0.19,
      payment_method: this.addressForm.controls.payment_method.value,
      date: this.addressForm.controls.date.value,
      id_campus: this.addressForm.controls.id_campus.value,
      id_user: this.addressForm.controls.id_user.value,
      
    }
    console.log(newInvoice)
    
    this.invoiceService.updateInvoice(this.id, newInvoice).subscribe(prueba => {
      console.log(prueba);
      
    });
   
    alert('Vehiculo editado exitosamente');
    
    
    location.href ="http://localhost:4200/admin/invoice/list";
    
  }

}
