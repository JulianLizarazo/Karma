import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MclarenService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllProduts(){

    const prueba = this.http.get(`${environment.url_db}/vehicle`);

    
    
  }
}
