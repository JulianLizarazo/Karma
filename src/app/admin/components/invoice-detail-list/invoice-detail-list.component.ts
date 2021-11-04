import { Component, OnInit } from '@angular/core';

import { InvoiceDetailService } from "../../../core/services/invoice-detail/invoice-detail.service";

import { InvoiceDetail } from 'src/app/core/models/invoiceDetail.model';

@Component({
  selector: 'app-invoice-detail-list',
  templateUrl: './invoice-detail-list.component.html',
  styleUrls: ['./invoice-detail-list.component.scss']
})
export class InvoiceDetailListComponent implements OnInit {

  invoiceDetails: InvoiceDetail[] = [];

  displayedColumns: string[] = ['actions', 'id_invoice_det', 'id_invoice', 'price', 'id_vehicle_detail', 'car_plate', 'engine_num', 'chassis_num', 'vehicle_model'];

  constructor(
    private invoiceDetailService: InvoiceDetailService,
  ) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles(){
    this.invoiceDetailService.getAllInvoiceDetails().subscribe(invoiceDetails => {
      this.invoiceDetails = invoiceDetails;
    })
  }


}
