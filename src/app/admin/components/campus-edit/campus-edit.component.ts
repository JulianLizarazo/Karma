import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CampusService } from "../../../core/services/campus/campus.service";



import { Campus } from 'src/app/core/models/campus.model';

@Component({
  selector: 'app-campus-edit',
  templateUrl: './campus-edit.component.html',
  styleUrls: ['./campus-edit.component.scss']
})
export class CampusEditComponent implements OnInit {

 
  id: number;
  newId: number;


 
  addressForm = this.fb.group({
    name_campus: [null,Validators.required],
    address: [null, Validators.required],
   
   
  });

  hasUnitNumber = false;

 

  constructor(private fb: FormBuilder, private campusService: CampusService,
 
  private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id_campus.toString();
      console.log(this.id);
      this.campusService.getCampus(this.id).subscribe(campus => {
        const array = Object.values(campus);
        this.newId = array[0].id_campus;
        this.addressForm.patchValue(
          {
            name_campus: array[0].name_campus,
            address: array[0].address,
            
          }
        );
      });
    })
      
  }

  onSubmit(): void {

    const newCampus: Campus = {
      id_campus: this.newId,
      name_campus: this.addressForm.controls.name_campus.value,
      address: this.addressForm.controls.address.value,
      
    }

    
    this.campusService.updateCampus(this.id, newCampus).subscribe(prueba => {
      console.log(prueba);
      
    });
   
    alert('Sede editada exitosamente');
    
    
    location.href ="http://localhost:4200/admin/campus/list";
    
  }

}
