import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InvoiceDetailService } from "../../../core/services/invoice-detail/invoice-detail.service";



import { InvoiceDetail } from 'src/app/core/models/invoiceDetail.model';
@Component({
  selector: 'app-invoice-detail-form',
  templateUrl: './invoice-detail-form.component.html',
  styleUrls: ['./invoice-detail-form.component.scss']
})
export class InvoiceDetailFormComponent implements OnInit {

  
  addressForm = this.fb.group({
    id_invoice: [null,Validators.required],
    price: [null, Validators.required],
    id_vehicle_detail: [null, Validators.required],
   
  });

  hasUnitNumber = false;

 

  constructor(private fb: FormBuilder, private invoiceDetailService: InvoiceDetailService,
) {}
  
  ngOnInit(): void {
    
      
  }

  onSubmit(): void {

    const newInvoiceDetail: InvoiceDetail = {
      amount: 1,
      id_invoice: this.addressForm.controls.id_invoice.value,
      price: this.addressForm.controls.price.value,
      id_vehicle_detail: this.addressForm.controls.id_vehicle_detail.value,
      
    }
   
    alert('Detalle de Factura agregado exitosamente');
    
    this.invoiceDetailService.createInvoiceDetail(newInvoiceDetail).subscribe(prueba => {
      console.log(prueba);
    });

    
  }

}
