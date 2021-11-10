import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InvoiceDetailService } from "../../../core/services/invoice-detail/invoice-detail.service";


import { InvoiceDetail } from 'src/app/core/models/invoiceDetail.model';
import { ActivatedRoute, Params } from '@angular/router';
import { InvoiceService } from 'src/app/core/services/invoice/invoice.service';
import { VehicleDetailService } from 'src/app/core/services/vehicle-detail/vehicle-detail.service';

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
    statesId: [null, Validators.required],
    id_invoice_det: [null,Validators.required],
    states: [null, Validators.required],
    price: [null, Validators.required],
    vehicleStates: [null, Validators.required],
    
   
  });

  hasUnitNumber = false;

  states: any = [];
  vehicleStates: any = [];
  statesId: any = [];

  constructor(private fb: FormBuilder, 
    private invoiceDetailService: InvoiceDetailService,
    private activeRoute: ActivatedRoute,
    private invoiceService: InvoiceService,
    private vehicleDetailService: VehicleDetailService,
  ) {}
  
  ngOnInit(): void {
    this.invoiceDetailService.getAllInvoiceDetails().subscribe(prueba => {
      const array = Object.values(prueba);
      
      for(let i = 0; i<array.length; i++){
        this.statesId.push({
          name: `${array[i].id_invoice_det}. Factura número: ${array[i].id_invoice}, $${array[i].price}, ${array[i].vehicle_model}`,
          abbreviation: array[i].id_invoice_det,
        })
      }
    })

    this.invoiceService.getAllInvoices().subscribe(prueba => {
      const array = Object.values(prueba);

      for(let i = 0; i<array.length; i++){
        this.states.push({
          name: `${array[i].id_invoice}. MP:${array[i].payment_method} Fecha: ${array[i].date} Nombre:${array[i].user_name1} ${array[i].user_lastname1}`,
          abbreviation: array[i].id_invoice,
        })
      }
    })

    this.vehicleDetailService.getAllVehicleDetails().subscribe(prueba => {
      const array = Object.values(prueba);

      for(let i = 0; i<array.length; i++){
        this.vehicleStates.push({
          name: `${array[i].id_vehicle_detail}. Vehiculo: ${array[i].id_vehicle} Placa: ${array[i].car_plate}`,
          abbreviation: array[i].id_vehicle_detail,
        })
      }
    })
      
  }

  onSubmit(): void {
    
    this.invoiceDetailService.getInvoiceDetail(this.addressForm.controls.statesId.value)
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
              states: array[0].id_invoice,
              price: array[0].price,
              vehicleStates: array[0].id_vehicle_detail,
              
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
      id_invoice: this.addressForm.controls.states.value,
      price: this.addressForm.controls.price.value,
      id_vehicle_detail: this.addressForm.controls.vehicleStates.value,
      
    }

    
    this.invoiceDetailService.updateInvoiceDetail(this.id, newInvoiceDetail).subscribe(prueba => {
      console.log(prueba);
      
    });
   
    alert('Detalle de factura editado exitosamente');
    
    
    location.href ="http://localhost:4200/admin/invoice-detail/edit-single";
    
  }

}
