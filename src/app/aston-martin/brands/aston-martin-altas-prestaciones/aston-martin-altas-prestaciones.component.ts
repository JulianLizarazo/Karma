import { Component, OnInit } from '@angular/core';

import { PruebaService } from "../../../core/prueba.service";

import { Vehicle } from 'src/app/core/models/vehicle.model';

@Component({
  selector: 'app-aston-martin-altas-prestaciones',
  templateUrl: './aston-martin-altas-prestaciones.component.html',
  styleUrls: ['./aston-martin-altas-prestaciones.component.scss']
})
export class AstonMartinAltasPrestacionesComponent implements OnInit {

  vehicles: Vehicle[] = [];

  constructor(
    private pruebaService: PruebaService
  ) { }

  ngOnInit(): void {
    this.fetchPrueba();
    
  }

  fetchPrueba(){
    this.pruebaService.getAllProduts().subscribe(prueba => {
      const array = Object.values(prueba);
      for(let i = 0; i<array.length; i++){
        if(array[i].brand === "McLaren"){
          
          this.vehicles.push(array[i]);
        }
      }
      console.log(this.vehicles);
    })
  }

}
