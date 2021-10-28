import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { VehicleType } from "../../models/vehicleType.model"

import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VehicleTypeService {

  constructor(private http: HttpClient,) { }

  getAllVehicleTypes(){
    return this.http.get<VehicleType[]>(`${environment.url_db}/vehicletype`)
  }
}
