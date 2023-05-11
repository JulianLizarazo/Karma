import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CampusService } from '../../../nucleo/services/sede/sede.service';

import { Campus } from 'src/app/nucleo/models/sede.model';

@Component({
  selector: 'app-sede-formulario',
  templateUrl: './sede-formulario.component.html',
  styleUrls: ['./sede-formulario.component.scss'],
})
export class CampusFormComponent implements OnInit {
  addressForm = this.fb.group({
    name_campus: [null, Validators.required],
    address: [null, Validators.required],
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private campusService: CampusService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const newCampus: Campus = {
      name_campus: this.addressForm.controls.name_campus.value,
      address: this.addressForm.controls.address.value,
    };

    alert('Sede agregada exitosamente');

    this.campusService.createCampus(newCampus).subscribe((prueba) => {
      console.log(prueba);
    });
  }
}
