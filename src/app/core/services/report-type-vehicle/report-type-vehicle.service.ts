import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ReportTypeVehicle } from "../../models/reportTypeVehicle.model"

import { environment } from "../../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ReportTypeVehicleService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllReportTypeVehicles(id_invoicedet: number, first_date: string, last_date: string){
    return this.http.get<ReportTypeVehicle[]>(`${environment.url_db}/invoicedet/reportv/${id_invoicedet}/${first_date}/${last_date}`);
  }

  
}
