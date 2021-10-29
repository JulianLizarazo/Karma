import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from "../../models/vehicle.model"

import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllVehicles(){
    return this.http.get<Vehicle[]>(`${environment.url_db}/vehicle`);
  }

  getVehicle(id: number){
    return this.http.get<Vehicle>(`${environment.url_db}/vehicle/${id}`);
  }

  updateVehicle(id: number, changes: Partial<Vehicle>){
    return this.http.put(`${environment.url_db}/vehicle/${id}`, changes);
  }

  createVehicle(vehicle: Vehicle){
    return this.http.post(`${environment.url_db}/vehicle`, vehicle);
  }
}

