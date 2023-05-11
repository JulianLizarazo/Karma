import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { VehicleDetail } from "../../models/detalleMoto.model"

import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VehicleDetailService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllVehicleDetails(){
    return this.http.get<VehicleDetail[]>(`${environment.url_db}/detallesMoto`);
  }

  getVehicleDetail(id: number){
    return this.http.get<VehicleDetail>(`${environment.url_db}/detallesMoto/${id}`);
  }

  updateVehicleDetail(id: number, changes: Partial<VehicleDetail>){
    return this.http.put(`${environment.url_db}/detallesMoto/${id}`, changes);
  }

  createVehicleDetail(vehicleDetail: VehicleDetail){
    return this.http.post(`${environment.url_db}/detallesMoto`, vehicleDetail);
  }
}
