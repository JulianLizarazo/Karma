import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReportVehicleType2Service } from "../../../core/services/report-vehicle-type2/report-vehicle-type2.service";


import { VehicleType2} from 'src/app/core/models/vehicleType2.model';
import { VehicleTypeService } from 'src/app/core/services/vehicle-type/vehicle-type.service';

@Component({
  selector: 'app-report-vehicle-type2',
  templateUrl: './report-vehicle-type2.component.html',
  styleUrls: ['./report-vehicle-type2.component.scss']
})
export class ReportVehicleType2Component implements OnInit {

  report: VehicleType2= {
    id_invoice_det: 0,
    id_invoice: 0,
    price: 0,
    id_vehicle_detail: 0,
    date: "",
    vehicle: "",
    vehicle_model: 0,
    body_type: "",
  };

  addressForm = this.fb.group({
    states: [null,Validators.required],
    first_date: [null, Validators.required],
    last_date: [null, Validators.required],
   
  });

  hasUnitNumber = false;
  states: any = [];
  

  constructor(private fb: FormBuilder, 
    private reportVehicleType2Service: ReportVehicleType2Service,
    private vehicleTypeService: VehicleTypeService
  ) {}
  
  ngOnInit(): void {
    this.vehicleTypeService.getAllVehicleTypes().subscribe(prueba => {
      const array = Object.values(prueba);

      for(let i = 0; i<array.length; i++){
        this.states.push({
          name: array[i].body_type,
          abbreviation: array[i].id_vehicle_type,
        })
      }
    })

      
  }

  onSubmit(): void {
    
    this.reportVehicleType2Service.getAllReportTypeVehicles(this.addressForm.controls.states.value,
      this.addressForm.controls.first_date.value, this.addressForm.controls.last_date.value,)
      .subscribe(report =>{
      const array = Object.values(report);
      
      this.report = {
        id_invoice_det: array[0].id_invoice_det,
        id_invoice: array[0].id_invoice,
        price: array[0].price,
        id_vehicle_detail: array[0].id_vehicle_detail,
        date: array[0].date,
        vehicle: array[0].vehicle,
        vehicle_model: array[0].vehicle_model,
        body_type: array[0].body_type,

      };
      console.log(report);

    })
    this.getReports();
  
  }

  reports: VehicleType2[] = [];

  displayedColumns: string[] = ['id_invoice_det', 'id_invoice', 'price', 'id_vehicle_detail', 'date', 'vehicle', 
  'vehicle_model', 'body_type'];


 

  getReports(){
    this.reportVehicleType2Service.getAllReportTypeVehicles(
      this.addressForm.controls.states.value,
      this.addressForm.controls.first_date.value, 
      this.addressForm.controls.last_date.value,
    ).subscribe(reports => {
      this.reports = reports;
    })
  }

}
