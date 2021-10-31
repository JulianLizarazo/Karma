import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { InvoiceDetailService } from "../../../core/services/invoice-detail/invoice-detail.service";


import { InvoiceDetail } from 'src/app/core/models/invoiceDetail.model';


@Component({
  selector: 'app-invoice-detail-edit',
  templateUrl: './invoice-detail-edit.component.html',
  styleUrls: ['./invoice-detail-edit.component.scss']
})
export class InvoiceDetailEditComponent implements OnInit {

  
  id: number;
  newId: number;

 

  
 
  addressForm = this.fb.group({
    id_invoice: [null,Validators.required],
    price: [null, Validators.required],
    id_vehicle_detail: [null, Validators.required],
    
   
  });

  hasUnitNumber = false;


  constructor(private fb: FormBuilder, private invoiceDetailService: InvoiceDetailService,

  private activeRoute: ActivatedRoute,)
  {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id_invoice_det.toString();
      console.log(this.id);
      this.invoiceDetailService.getInvoiceDetail(this.id).subscribe(invoiceDetail => {
        const array = Object.values(invoiceDetail);
        this.newId = array[0].id_invoice_det;
        this.addressForm.patchValue(
          {
            id_invoice: array[0].id_invoice,
            price: array[0].price,
            id_vehicle_detail: array[0].id_vehicle_detail,
          
          }
        );
      });
    })
      
  }

  onSubmit(): void {

    const newInvoiceDetail: InvoiceDetail = {
      id_invoice_det: this.newId,
      amount: 1,
      id_invoice: this.addressForm.controls.id_invoice.value,
      price: this.addressForm.controls.price.value,
      id_vehicle_detail: this.addressForm.controls.id_vehicle_detail.value,
      
    }

    
    this.invoiceDetailService.updateInvoiceDetail(this.id, newInvoiceDetail).subscribe(prueba => {
      console.log(prueba);
      
    });
   
    alert('Detalle de Factura editado exitosamente');
    
    
    location.href ="http://localhost:4200/admin/invoice-detail/list";
    
  }

}
