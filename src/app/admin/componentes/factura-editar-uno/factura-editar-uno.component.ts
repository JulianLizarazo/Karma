import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InvoiceService } from '../../../nucleo/services/factura/factura.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Invoice } from 'src/app/nucleo/models/factura.model';
import { CampusService } from 'src/app/nucleo/services/sede/sede.service';
import { UserService } from 'src/app/nucleo/services/usuario/user.service';

@Component({
  selector: 'app-factura-editar-uno',
  templateUrl: './factura-editar-uno.component.html',
  styleUrls: ['./factura-editar-uno.component.scss'],
})
export class InvoiceEditSingleComponent implements OnInit {
  id: number;
  newId: number;
  invoice: Invoice;

  vehicle: Invoice = {
    id_invoice: 0,
    VAT: 0.19,
    payment_method: '',
    date: '',
    id_campus: 0,
    id_user: 0,
  };

  addressForm = this.fb.group({
    statesId: [null, Validators.required],
    id_invoice: [null, Validators.required],
    payment_method: [null, Validators.required],
    date: [null, Validators.required],
    states: [null, Validators.required],
    userStates: [null, Validators.required],
  });

  hasUnitNumber = false;

  states: any = [];
  userStates: any = [];
  statesId: any = [];

  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoiceService,
    private activeRoute: ActivatedRoute,
    private campusService: CampusService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.invoiceService.getAllInvoices().subscribe((prueba) => {
      const array = Object.values(prueba);

      for (let i = 0; i < array.length; i++) {
        this.statesId.push({
          name: `${array[i].id_invoice}. ${array[i].user_name1} ${array[i].user_lastname1} ${array[i].date}`,
          abbreviation: array[i].id_invoice,
        });
      }
    });

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
    this.invoiceService
      .getInvoice(this.addressForm.controls.statesId.value)
      .subscribe((invoice) => {
        const array = Object.values(invoice);

        this.invoice = {
          id_invoice: array[0].id_invoice,
          payment_method: array[0].payment_method,
          date: array[0].date,
          id_campus: array[0].id_campus,
          id_user: array[0].id_user,
        };

        this.activeRoute.params.subscribe((params: Params) => {
          this.id = this.invoice.id_invoice as number;
          console.log(this.id);
          this.invoiceService.getInvoice(this.id).subscribe((invoice) => {
            const array = Object.values(invoice);
            this.newId = array[0].id_invoice;
            this.addressForm.patchValue({
              payment_method: array[0].payment_method,
              date: array[0].date,
              states: array[0].id_campus,
              userStates: array[0].id_user,
            });
          });
        });

        console.log(this.invoice);
      });
  }

  updateVehicle() {
    const newInvoice: Invoice = {
      id_invoice: this.newId,
      VAT: 0.19,
      payment_method: this.addressForm.controls.payment_method.value,
      date: this.addressForm.controls.date.value,
      id_campus: this.addressForm.controls.states.value,
      id_user: this.addressForm.controls.userStates.value,
    };

    this.invoiceService
      .updateInvoice(this.id, newInvoice)
      .subscribe((prueba) => {
        console.log(prueba);
      });

    alert('Vehiculo editado exitosamente');

    location.href = 'http://localhost:4200/admin/invoice/edit-single';
  }
}
