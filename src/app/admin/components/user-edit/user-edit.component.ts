import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from "../../../core/services/user/user.service";


import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  
  id: number;
  newId: number;


 
  addressForm = this.fb.group({
    document: [null, Validators.required],
    user_name1: [null,Validators.required],
    user_name2: [null, Validators.required],
    user_lastname1: [null, Validators.required],
    user_lastname2: [null, Validators.required],
    user_email: [null, Validators.required],
    user_phone: [null, Validators.required],
   
  });

  hasUnitNumber = false;

  

  constructor(private fb: FormBuilder, private userService: UserService,
  private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id_user.toString();
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
      
  }

  onSubmit(): void {

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

    console.log(newUser);
    this.userService.updateUser(this.id, newUser).subscribe(user => {
      console.log(user);
      
    });
   
    alert('Usuario editado exitosamente');
    
    
    location.href ="http://localhost:4200/admin/user/list";
    
  }

  

}
