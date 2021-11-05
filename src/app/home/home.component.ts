import { Component, OnInit, AfterViewInit } from '@angular/core';

import Swiper from "swiper";

import { Vehicle } from '../core/models/vehicle.model';
import { VehicleService } from '../core/services/vehicle/vehicle.service';

import { Navigation, Pagination } from 'swiper';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  
  mySwiper: Swiper;

  images: String[] = [
    "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5dcb99772c886a0007ec024c%2FMcLaren-Elva%2F960x0.jpg%3Ffit%3Dscale",
    "https://i.ytimg.com/vi/RNXEnyj7Ywk/maxresdefault.jpg",
    

  ];

  vehicles: Vehicle[] = [];
  vehiclesSelect: Vehicle[] = [];


  

  constructor(
    private vehicleService: VehicleService,
  ) {
    
   }

  ngOnInit(): void {
   this.getVehicles();
    
   
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper(".swiper-container", {
    
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        autoplay: {
          delay: 2000,
        }
      }
    
    
    )
    
    
  }

  getVehicles(){
    Swiper.use([Navigation, Pagination]);
    this.vehicleService.getAllVehicles().subscribe(vehicle => {
      this.vehicles = Object.values(vehicle);
      this.vehiclesSelect.push(this.vehicles[2])
      this.vehiclesSelect.push(this.vehicles[5])
      this.vehiclesSelect.push(this.vehicles[39])
      this.vehiclesSelect.push(this.vehicles[59])
      console.log(this.vehiclesSelect);
    })
    
  }

}
