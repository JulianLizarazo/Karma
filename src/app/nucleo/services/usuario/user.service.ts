import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { User } from "../../models/usuario.model"

import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllUsers(){
    return this.http.get<User[]>(`${environment.url_db}/usuario`);
  }

  getUser(id: number){
    return this.http.get<User>(`${environment.url_db}/usuario/${id}`);
  }

  updateUser(id: number, changes: Partial<User>){
    return this.http.put(`${environment.url_db}/usuario/${id}`, changes);
  }

  createUser(user: User){
    return this.http.post(`${environment.url_db}/usuario`, user);
  }
}
