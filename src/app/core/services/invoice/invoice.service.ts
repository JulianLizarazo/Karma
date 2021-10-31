import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Invoice } from "../../models/invoice.model"

import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllInvoices(){
    return this.http.get<Invoice[]>(`${environment.url_db}/invoice`);
  }

  getInvoice(id: number){
    return this.http.get<Invoice>(`${environment.url_db}/invoice/${id}`);
  }

  updateInvoice(id: number, changes: Partial<Invoice>){
    return this.http.put(`${environment.url_db}/invoice/${id}`, changes);
  }

  createInvoice(vehicle: Invoice){
    return this.http.post(`${environment.url_db}/invoice`, vehicle);
  }
}
