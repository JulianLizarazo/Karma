import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InvoiceDetailService } from "../../../core/services/invoice-detail/invoice-detail.service";


import { InvoiceDetail } from 'src/app/core/models/invoiceDetail.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-invoice-detail-edit-single',
  templateUrl: './invoice-detail-edit-single.component.html',
  styleUrls: ['./invoice-detail-edit-single.component.scss']
})
export class InvoiceDetailEditSingleComponent implements OnInit {

  
  id: number;
  newId: number;

  invoiceDetail: InvoiceDetail = {
    id_invoice_det: 0,
    amount: 1,
    id_invoice: 0,
    price: 0,
    id_vehicle_detail: 0,
    
  };

  addressForm = this.fb.group({
    id_invoice_det: [null,Validators.required],
    id_invoice: [null, Validators.required],
    price: [null, Validators.required],
    id_vehicle_detail: [null, Validators.required],
    
   
  });

  hasUnitNumber = false;


  constructor(private fb: FormBuilder, 
    private invoiceDetailService: InvoiceDetailService,
    private activeRoute: ActivatedRoute,
  ) {}
  
  ngOnInit(): void {
    
      
  }

  onSubmit(): void {
    
    this.invoiceDetailService.getInvoiceDetail(this.addressForm.controls.id_invoice_det.value)
    .subscribe(invoiceDetail =>{
      const array = Object.values(invoiceDetail);
      
      this.invoiceDetail = {
        id_invoice_det: array[0].id_invoice_det,
        amount: array[0].amount,
        id_invoice: array[0].id_invoice,
        price: array[0].price,
        id_vehicle_detail: array[0].id_vehicle_detail,

      };

      this.activeRoute.params.subscribe((params: Params) => {
        this.id = this.invoiceDetail.id_invoice_det as number;
        console.log(this.id);
        this.invoiceDetailService.getInvoiceDetail(this.id).subscribe(invoiceDetail => {
          const array = Object.values(invoiceDetail);
          this.newId = array[0].id_invoice_det;
          this.addressForm.patchValue(
            {
              amount: array[0].amount,
              id_invoice: array[0].id_invoice,
              price: array[0].price,
              id_vehicle_detail: array[0].id_vehicle_detail,
              
            }
          );
        });
      })

      console.log(this.invoiceDetail)

    })

    
  

  
  }

  updateInvoiceDetail(){
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
   
    alert('Detalle de factura editado exitosamente');
    
    
    location.href ="http://localhost:4200/admin/invoice-detail/edit-single";
    
  }

}