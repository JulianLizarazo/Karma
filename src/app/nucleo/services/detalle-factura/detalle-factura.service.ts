import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { InvoiceDetail } from "../../models/detalleFactura.model"

import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class InvoiceDetailService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllInvoiceDetails(){
    return this.http.get<InvoiceDetail[]>(`${environment.url_db}/detallesFactura`);
  }

  getInvoiceDetail(id: number){
    return this.http.get<InvoiceDetail>(`${environment.url_db}/detallesFactura/${id}`);
  }

  updateInvoiceDetail(id: number, changes: Partial<InvoiceDetail>){
    return this.http.put(`${environment.url_db}/detallesFactura/${id}`, changes);
  }

  createInvoiceDetail(invoiceDetail: InvoiceDetail){
    return this.http.post(`${environment.url_db}/detallesFactura`, invoiceDetail);
  }
}
