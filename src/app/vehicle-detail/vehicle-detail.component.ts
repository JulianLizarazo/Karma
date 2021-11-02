import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { VehicleService } from '../core/services/vehicle/vehicle.service';
import { Vehicle } from "../core/models/vehicle.model";
@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {

  vehicle: Vehicle;

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id_vehicle = params.id_vehicle;
       this.vehicleService.getVehicle(id_vehicle).subscribe(prueba => {
         const array = Object.values(prueba)
         this.vehicle = array[0];
         
       });
      
    });
  }

}
