import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Campus } from '../../models/sede.model';

import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CampusService {
  constructor(private http: HttpClient) {}

  getAllCampus() {
    return this.http.get<Campus[]>(`${environment.url_db}/sede`);
  }

  getCampus(id: number) {
    return this.http.get<Campus>(`${environment.url_db}/sede/${id}`);
  }

  updateCampus(id: number, changes: Partial<Campus>) {
    return this.http.put(`${environment.url_db}/sede/${id}`, changes);
  }

  createCampus(vehicle: Campus) {
    return this.http.post(`${environment.url_db}/sede`, vehicle);
  }
}
