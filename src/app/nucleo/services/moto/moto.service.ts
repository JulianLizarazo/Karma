import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../../models/moto.model';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private http: HttpClient) {}

  getAllVehicles() {
    return this.http.get<Vehicle[]>(`${environment.url_db}/moto`);
  }

  getVehicle(id: number) {
    return this.http.get<Vehicle>(`${environment.url_db}/moto/${id}`);
  }

  updateVehicle(id: number, changes: Partial<Vehicle>) {
    return this.http.put(`${environment.url_db}/moto/${id}`, changes);
  }

  createVehicle(vehicle: Vehicle) {
    return this.http.post(`${environment.url_db}/moto`, vehicle);
  }
}
