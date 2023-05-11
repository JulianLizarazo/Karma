import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CampusService } from '../../../nucleo/services/sede/sede.service';

import { Campus } from 'src/app/nucleo/models/sede.model';

@Component({
  selector: 'app-sede-mostrar',
  templateUrl: './sede-mostrar.component.html',
  styleUrls: ['./sede-mostrar.component.scss'],
})
export class CampusShowComponent implements OnInit {
  campus: Campus = {
    id_campus: 0,
    name_campus: '',
    address: '',
  };

  addressForm = this.fb.group({
    statesId: [null, Validators.required],
    id_campus: [null, Validators.required],
    name_campus: [null, Validators.required],
    address: [null, Validators.required],
  });

  hasUnitNumber = false;
  statesId: any = [];

  constructor(private fb: FormBuilder, private campusService: CampusService) {}

  ngOnInit(): void {
    this.campusService.getAllCampus().subscribe((prueba) => {
      const array = Object.values(prueba);

      for (let i = 0; i < array.length; i++) {
        this.statesId.push({
          name: `${array[i].id_campus}. ${array[i].name_campus}`,
          abbreviation: array[i].id_campus,
        });
      }
    });
  }

  onSubmit(): void {
    this.campusService
      .getCampus(this.addressForm.controls.statesId.value)
      .subscribe((campus) => {
        const array = Object.values(campus);

        this.campus = {
          id_campus: array[0].id_campus,
          name_campus: array[0].name_campus,
          address: array[0].address,
        };
      });
  }
}
