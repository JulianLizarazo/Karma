import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from "../core/models/vehicle.model"

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllProduts(){
    return this.http.get<Vehicle[]>(`${environment.url_db}/vehicle`)
  }
}
