import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from "../../../core/services/user/user.service";


import { User } from 'src/app/core/models/user.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-edit-single',
  templateUrl: './user-edit-single.component.html',
  styleUrls: ['./user-edit-single.component.scss']
})
export class UserEditSingleComponent implements OnInit {

  
  id: number;
  newId: number;

  user: User = {
    id_user: 0,
    user_name1: "",
    user_name2: "",
    user_lastname1: "",
    user_lastname2: "",
    user_email: "",
    user_phone: 0,
    document: 0,
  };

  addressForm = this.fb.group({
    statesId: [null, Validators.required],
    id_user: [null,Validators.required],
    user_name1: [null,Validators.required],
    user_name2: [null, Validators.required],
    user_lastname1: [null, Validators.required],
    user_lastname2: [null, Validators.required],
    user_email: [null, Validators.required],
    user_phone: [null, Validators.required],
    document: [null, Validators.required],
   
  });

  hasUnitNumber = false;

  statesId: any = [];

  constructor(private fb: FormBuilder, 
    private userService: UserService,
    private activeRoute: ActivatedRoute,
  ) {}
  
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(prueba => {
      const array = Object.values(prueba);
      
      for(let i = 0; i<array.length; i++){
        this.statesId.push({
          name: `${array[i].id_user}. ${array[i].user_name1} ${array[i].user_name2} ${array[i].user_lastname1} ${array[i].user_lastname2}`,
          abbreviation: array[i].id_user,
        })
      }
    })
      
  }

  onSubmit(): void {
    
    this.userService.getUser(this.addressForm.controls.statesId.value).subscribe(user =>{
      const array = Object.values(user);
      
      this.user = {
        id_user: array[0].id_user,
        user_name1: array[0].user_name1,
        user_name2: array[0].user_name2,
        user_lastname1: array[0].user_lastname1,
        user_lastname2: array[0].user_lastname2,
        user_email: array[0].user_email,
        user_phone: array[0].user_phone,
        document: array[0].document,

      };

      this.activeRoute.params.subscribe((params: Params) => {
        this.id = this.user.id_user as number;
        console.log(this.id);
        this.userService.getUser(this.id).subscribe(user => {
          const array = Object.values(user);
          this.newId = array[0].id_user;
          this.addressForm.patchValue(
            {
              user_name1: array[0].user_name1,
              user_name2: array[0].user_name2,
              user_lastname1: array[0].user_lastname1,
              user_lastname2: array[0].user_lastname2,
              user_email: array[0].user_email,
              user_phone: array[0].user_phone,
              document: array[0].document,
            }
          );
        });
      })

      console.log(this.user);

    })

    
  

  
  }

  updateVehicle(){
    const newUser: User = {
      id_user: this.newId,
      user_name1: this.addressForm.controls.user_name1.value,
      user_name2: this.addressForm.controls.user_name2.value,
      user_lastname1: this.addressForm.controls.user_lastname1.value,
      user_lastname2: this.addressForm.controls.user_lastname2.value,
      user_email: this.addressForm.controls.user_email.value,
      user_phone: this.addressForm.controls.user_phone.value,
      document: this.addressForm.controls.document.value,
    }

    
    this.userService.updateUser(this.id, newUser).subscribe(prueba => {
      console.log(prueba);
      
    });
   
    alert('Cliente editado exitosamente');
    
    
    location.href ="http://localhost:4200/admin/user/edit-single";
    
  }


}
