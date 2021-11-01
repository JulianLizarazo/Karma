import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { InvoiceDetailService } from "../../../core/services/invoice-detail/invoice-detail.service";


import { InvoiceDetail } from 'src/app/core/models/invoiceDetail.model';

@Component({
  selector: 'app-invoice-detail-show',
  templateUrl: './invoice-detail-show.component.html',
  styleUrls: ['./invoice-detail-show.component.scss']
})
export class InvoiceDetailShowComponent implements OnInit {

  
  invoiceDetail: InvoiceDetail = {
    id_invoice_det: 0,
    amount: 1,
    id_invoice: 0,
    price: 0,
    id_vehicle_detail: 0,
    car_plate: "",
    engine_num: "",
    vehicle_model: "",   
    
  };

  addressForm = this.fb.group({
    id_invoice_det: [null,Validators.required],
    price: [null, Validators.required],
    id_vehicle_detail: [null, Validators.required],
    car_plate: [null, Validators.required],
    engine_num: [null, Validators.required],
    vehicle_model: [null, Validators.required],
    
   
  });

  hasUnitNumber = false;

  

  constructor(private fb: FormBuilder, 
    private invoiceDetailService: InvoiceDetailService,
  ) {}
  
  ngOnInit(): void {
    
      
  }

  onSubmit(): void {
    
    this.invoiceDetailService.getInvoiceDetail(this.addressForm.controls.id_invoice_det.value).subscribe(invoiceDetail =>{
      const array = Object.values(invoiceDetail);
      
      this.invoiceDetail = {
        id_invoice_det: array[0].id_invoice_det,
        amount: 1,
        id_invoice: array[0].id_invoice,
        price: array[0].price,
        id_vehicle_detail: array[0].id_vehicle_detail,
        car_plate: array[0].car_plate,
        engine_num: array[0].engine_num,
        vehicle_model: array[0].vehicle_model,

      };

    })

  
  }

}
