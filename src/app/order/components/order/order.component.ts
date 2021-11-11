import { Component, OnInit } from '@angular/core';

import { Vehicle } from 'src/app/core/models/vehicle.model';
import { VehicleService } from 'src/app/core/services/vehicle/vehicle.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from "../../../core/services/user/user.service";
import { User } from 'src/app/core/models/user.model';
import { Invoice } from 'src/app/core/models/invoice.model';
import { InvoiceService } from 'src/app/core/services/invoice/invoice.service';
import { InvoiceDetailService } from "../../../core/services/invoice-detail/invoice-detail.service";
import { InvoiceDetail } from 'src/app/core/models/invoiceDetail.model';
import { Campus } from 'src/app/core/models/campus.model';
import { CampusService } from 'src/app/core/services/campus/campus.service';
import { VehicleDetail } from 'src/app/core/models/vehicleDetail.model';
import { VehicleDetailService } from 'src/app/core/services/vehicle-detail/vehicle-detail.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
 
  addressForm = this.fb.group({
    user_name1: [null,Validators.required],
    user_name2: [null, Validators.required],
    user_lastname1: [null, Validators.required],
    user_lastname2: [null, Validators.required],
    user_email: [null, Validators.required],
    user_phone: [null, Validators.required],
   
  });
  
  
  addressForm2 = this.fb2.group({
    payment_method: [null,Validators.required],
    date: [null, Validators.required],
    states: [null, Validators.required],
   
   
  });


  invoiceDetail: InvoiceDetail = {
    id_invoice_det: 0,
    amount: 1,
    id_invoice: 0,
    price: 0,
    id_vehicle_detail: 0,
    car_plate: "",
    engine_num: "",
    vehicle_model: "",   
    
  };

  addressForm3 = this.fb.group({
    id_invoice_det: [null,Validators.required],
    price: [null, Validators.required],
    id_vehicle_detail: [null, Validators.required],
    car_plate: [null, Validators.required],
    engine_num: [null, Validators.required],
    vehicle_model: [null, Validators.required],
    
   
  });

  vehicle: Vehicle;
  newUser: User = {
    id_user: 0,
    user_name1: "",
    user_name2: "",
    user_lastname1: "",
    user_lastname2: "",
    user_email: "",
    user_phone: 0,
    document: 0,
  };
  
  users: User[];
  idUser: number;

  newInvoice: Invoice = {
    id_invoice: 0,
    VAT: 0.19,
    payment_method: "",
    date: "",
    id_campus: 0,
    id_user:0,
  };

  newInvoiceDetail: InvoiceDetail = {
    id_invoice_det: 0,
    amount: 1,
    id_invoice: 0,
    price: 0,
    id_vehicle_detail: 0,
  };

  campus: Campus = {
    id_campus: 0,
    name_campus: "",
    address: "",
  };

  vehicleDetail: VehicleDetail = {
    id_vehicle_detail: 0,
    car_plate: "",
    engine_num: "",
    chassis_num: "",
    id_vehicle: 0,
  };

  hasUnitNumber = false;
  states: any = [];
  constructor(
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private fb: FormBuilder, 
    private fb2: FormBuilder, 
    private userService: UserService,
    private invoiceService: InvoiceService,
    private invoiceDetailService: InvoiceDetailService,
    private campusService: CampusService,
    private vehicleDetailService: VehicleDetailService,
  ) { }

  ngOnInit(): void {

   
    this.campusService.getAllCampus().subscribe(prueba => {
      const array = Object.values(prueba);

      for(let i = 0; i<array.length; i++){
        this.states.push({
          name: array[i].name_campus,
          abbreviation: array[i].id_campus,
        })
      }
    });
    

    this.route.params.subscribe((params: Params) => {
      const id_vehicle = params.id_vehicle;
      
       this.vehicleService.getVehicle(id_vehicle).subscribe(prueba => {
         const array = Object.values(prueba)
         this.vehicle = array[0];
         
         
       });

       
      
    });

    
    
  }

  onSubmitUser(): void {

    this.newUser = {
      user_name1: this.addressForm.controls.user_name1.value,
      user_name2: this.addressForm.controls.user_name2.value,
      user_lastname1: this.addressForm.controls.user_lastname1.value,
      user_lastname2: this.addressForm.controls.user_lastname2.value,
      user_email: this.addressForm.controls.user_email.value,
      user_phone: this.addressForm.controls.user_phone.value,
      document: this.addressForm.controls.document.value,
    }

   
   
    
    this.userService.createUser(this.newUser).subscribe(prueba => {
      console.log(prueba);
      console.log("agregado ;)")
      
    });

    
  }

  onSubmitInvoice(): void {
    const date = new Date;
   
    const dateConvert = date.toISOString().split('T')[0];
    let prueba: User[] = []; 
    this.userService.getAllUsers().subscribe(users => {
      prueba = Object.values(users);
      for(let i = 0; i<prueba.length; i++){
        if(prueba[i].user_email === this.newUser.user_email && prueba[i].user_name1 === this.newUser.user_name1
          && prueba[i].user_name2 === this.newUser.user_name2 && prueba[i].user_lastname1 === this.newUser.user_lastname1
          && prueba[i].user_phone === this.newUser.user_phone){
            this.newInvoice = {
              
              payment_method: this.addressForm2.controls.payment_method.value,
              VAT: 0.19,
              date: dateConvert,
              id_campus: this.addressForm2.controls.states.value,
              id_user: prueba[i].id_user,
            }
            
            
        
            console.log(this.newInvoice.id_user);
        
            console.log(this.newInvoice)
           
            
            
            this.invoiceService.createInvoice(this.newInvoice).subscribe(prueba => {
              console.log(prueba);
            });
            
            console.log("Usuario encontrado" + this.newInvoice.id_user);
            
          }
      }
    })

    

    let invoices: Invoice[];


    setTimeout(() => {
      
    this.invoiceService.getAllInvoices().subscribe(invoice => {
      invoices = Object.values(invoice);
      
      for(let i = 0; i<invoices.length; i++){
       
        if((invoices[i].id_user as number + 1) === this.newInvoice.id_user as number){
          
            
            this.newInvoiceDetail.id_invoice = invoices[i+1].id_invoice as number;
            this.newInvoiceDetail.amount = 1;
            this.newInvoiceDetail.price = 123456789;
            this.newInvoiceDetail.id_vehicle_detail = 6;

            console.log("Detalle de factura")
            console.log(this.newInvoiceDetail);
            
            this.invoiceDetailService.createInvoiceDetail(this.newInvoiceDetail).subscribe(prueba => {
              console.log(prueba);
            });
          }
      }
    })
    }, 1000);
    


    let campus2: Campus[];

    this.campusService.getAllCampus().subscribe(prueba => {
      campus2 = Object.values(prueba);

      for(let i = 0; i<campus2.length; i++){
        
        if(campus2[i].id_campus as number == this.newInvoice.id_campus as number){
          this.campus.id_campus = campus2[i].id_campus;
          this.campus.name_campus = campus2[i].name_campus;
          this.campus.address = campus2[i].address;
          console.log("campus encontrado")
        }
      }
    })

    let vehicleDetails: VehicleDetail[];
    
    setTimeout(() => {
      this.vehicleDetailService.getAllVehicleDetails().subscribe(prueba => {
        vehicleDetails = Object.values(prueba);
        
        console.log("el id_vehicle de newInvoiceDetail" + this.newInvoiceDetail.id_vehicle_detail)
        for(let i = 0; i<vehicleDetails.length; i++){
          
          if(vehicleDetails[i].id_vehicle_detail as number == this.newInvoiceDetail.id_vehicle_detail as number){
            this.vehicleDetail.id_vehicle_detail = vehicleDetails[i].id_vehicle_detail;
            this.vehicleDetail.car_plate = vehicleDetails[i].car_plate;
            this.vehicleDetail.chassis_num = vehicleDetails[i].chassis_num;
            this.vehicleDetail.engine_num = vehicleDetails[i].engine_num;
            this.vehicleDetail.id_vehicle = vehicleDetails[i].id_vehicle;
  
            console.log("Detalle vehiculo encontrado")
          }
        }
        
      })
  
    }, 1000);
    
    
    
   
    
  }

  
  onSubmitFinal(): void {
    
    location.href ="http://localhost:4200";

  
  }


}
