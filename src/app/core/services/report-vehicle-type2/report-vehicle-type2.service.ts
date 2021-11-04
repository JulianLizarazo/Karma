import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehicleType2 } from "../../models/vehicleType2.model"

import { environment } from "../../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ReportVehicleType2Service {

  constructor(
    private http: HttpClient,
  ) { }

  getAllReportTypeVehicles(id_invoicedet: number, first_date: string, last_date: string){
    return this.http.get<VehicleType2[]>(`${environment.url_db}/invoicedet/reportvt/${id_invoicedet}/${first_date}/${last_date}`);
  }

}
