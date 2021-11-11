import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from "../../../core/services/user/user.service";


import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  
  addressForm = this.fb.group({
    user_name1: [null,Validators.required],
    user_name2: [null, Validators.required],
    user_lastname1: [null, Validators.required],
    user_lastname2: [null, Validators.required],
    user_email: [null, Validators.required],
    user_phone: [null, Validators.required],
    document: [null, Validators.required],
   
  });

  hasUnitNumber = false;


  constructor(private fb: FormBuilder, 
    private userService: UserService,
  ) {}
  
  ngOnInit(): void {
    
      
  }

  onSubmit(): void {

    const newUser: User = {
      user_name1: this.addressForm.controls.user_name1.value,
      user_name2: this.addressForm.controls.user_name2.value,
      user_lastname1: this.addressForm.controls.user_lastname1.value,
      user_lastname2: this.addressForm.controls.user_lastname2.value,
      user_email: this.addressForm.controls.user_email.value,
      user_phone: this.addressForm.controls.user_phone.value,
      document: this.addressForm.controls.document.value,
    }
   
    alert('Usuario agregado exitosamente');
    
    this.userService.createUser(newUser).subscribe(prueba => {
      console.log(prueba);
    });

    
  }

}
