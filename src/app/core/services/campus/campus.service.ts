import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Campus } from "../../models/campus.model"

import { environment } from "../../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class CampusService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllCampus(){
    return this.http.get<Campus[]>(`${environment.url_db}/campus`);
  }

  getCampus(id: number){
    return this.http.get<Campus>(`${environment.url_db}/campus/${id}`);
  }

  updateCampus(id: number, changes: Partial<Campus>){
    return this.http.put(`${environment.url_db}/campus/${id}`, changes);
  }

  createCampus(vehicle: Campus){
    return this.http.post(`${environment.url_db}/campus`, vehicle);
  }
}
