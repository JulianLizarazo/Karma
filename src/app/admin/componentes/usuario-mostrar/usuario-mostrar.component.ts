import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../nucleo/services/usuario/user.service';

import { User } from 'src/app/nucleo/models/usuario.model';

@Component({
  selector: 'app-usuario-mostrar',
  templateUrl: './usuario-mostrar.component.html',
  styleUrls: ['./usuario-mostrar.component.scss'],
})
export class UserShowComponent implements OnInit {
  user: User = {
    id_user: 0,
    user_name1: '',
    user_name2: '',
    user_lastname1: '',
    user_lastname2: '',
    user_email: '',
    user_phone: 0,
    document: 0,
  };

  addressForm = this.fb.group({
    statesId: [null, Validators.required],
    id_user: [null, Validators.required],
    user_name1: [null, Validators.required],
    user_name2: [null, Validators.required],
    user_lastname1: [null, Validators.required],
    user_lastname2: [null, Validators.required],
    user_email: [null, Validators.required],
    user_phone: [null, Validators.required],
  });

  hasUnitNumber = false;
  statesId: any = [];

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((prueba) => {
      const array = Object.values(prueba);

      for (let i = 0; i < array.length; i++) {
        this.statesId.push({
          name: `${array[i].id_user}. ${array[i].user_name1} ${array[i].user_name2} ${array[i].user_lastname1} ${array[i].user_lastname2}`,
          abbreviation: array[i].id_user,
        });
      }
    });
  }

  onSubmit(): void {
    this.userService
      .getUser(this.addressForm.controls.statesId.value)
      .subscribe((user) => {
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
      });
  }
}
