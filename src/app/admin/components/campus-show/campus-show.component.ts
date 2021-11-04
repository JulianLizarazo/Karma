import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CampusService } from "../../../core/services/campus/campus.service";


import { Campus } from 'src/app/core/models/campus.model';

@Component({
  selector: 'app-campus-show',
  templateUrl: './campus-show.component.html',
  styleUrls: ['./campus-show.component.scss']
})
export class CampusShowComponent implements OnInit {

  campus: Campus = {
    id_campus: 0,
    name_campus: "",
    address: "",
  };

  addressForm = this.fb.group({
    id_campus: [null,Validators.required],
    name_campus: [null, Validators.required],
    address: [null, Validators.required],
    
   
  });

  hasUnitNumber = false;


  constructor(private fb: FormBuilder, 
    private campusService: CampusService,
  ) {}
  
  ngOnInit(): void {
    
      
  }

  onSubmit(): void {
    
    this.campusService.getCampus(this.addressForm.controls.id_campus.value).subscribe(campus =>{
      const array = Object.values(campus);
      
      this.campus = {
        id_campus: array[0].id_campus,
        name_campus: array[0].name_campus,
        address: array[0].address,
        

      };

    })

  
  }

}
