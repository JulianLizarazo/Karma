import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

import { InvoiceService } from '../../../nucleo/services/factura/factura.service';

import { Invoice } from 'src/app/nucleo/models/factura.model';
import { CampusService } from 'src/app/nucleo/services/sede/sede.service';
import { UserService } from 'src/app/nucleo/services/usuario/user.service';

@Component({
  selector: 'app-factura-formulario',
  templateUrl: './factura-formulario.component.html',
  styleUrls: ['./factura-formulario.component.scss'],
})
export class InvoiceFormComponent implements OnInit {
  addressForm = this.fb.group({
    payment_method: [null, Validators.required],
    date: [null, Validators.required],
    states: [null, Validators.required],
    userStates: [null, Validators.required],
  });

  hasUnitNumber = false;

  userStates: any = [];
  states: any = [];

  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoiceService,
    private campusService: CampusService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.campusService.getAllCampus().subscribe((prueba) => {
      const array = Object.values(prueba);

      for (let i = 0; i < array.length; i++) {
        this.states.push({
          name: array[i].name_campus,
          abbreviation: array[i].id_campus,
        });
      }
    });

    this.userService.getAllUsers().subscribe((prueba) => {
      const array = Object.values(prueba);

      for (let i = 0; i < array.length; i++) {
        this.userStates.push({
          name: `${array[i].id_user}. ${array[i].user_name1} ${array[i].user_lastname1}`,
          abbreviation: array[i].id_user,
        });
      }
    });
  }

  onSubmit(): void {
    const newInvoice: Invoice = {
      payment_method: this.addressForm.controls.payment_method.value,
      VAT: 0.19,
      date: this.addressForm.controls.date.value,
      id_campus: this.addressForm.controls.states.value,
      id_user: this.addressForm.controls.userStates.value,
    };

    console.log(newInvoice);

    alert('Factura agregada exitosamente');

    this.invoiceService.createInvoice(newInvoice).subscribe((prueba) => {
      console.log(prueba);
    });
  }
}
