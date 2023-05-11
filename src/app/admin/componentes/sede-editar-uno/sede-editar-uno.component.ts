import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { CampusService } from '../../../nucleo/services/sede/sede.service';

import { Campus } from 'src/app/nucleo/models/sede.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sede-editar-uno',
  templateUrl: './sede-editar-uno.component.html',
  styleUrls: ['./sede-editar-uno.component.scss'],
})
export class CampusEditSingleComponent implements OnInit {
  id: number;
  newId: number;

  campus: Campus = {
    id_campus: 0,
    name_campus: '',
    address: '',
  };

  addressForm = this.fb.group({
    estadosId: [null, Validators.required],
    id_sede: [null, Validators.required],
    nombre_sede: [null, Validators.required],
    direccion: [null, Validators.required],
  });

  hasUnitNumber = false;
  statesId: any = [];

  constructor(
    private fb: FormBuilder,
    private campusService: CampusService,
    private activeRoute: ActivatedRoute
  ) {}

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

        this.activeRoute.params.subscribe((params: Params) => {
          this.id = this.campus.id_campus as number;
          console.log(this.id);
          this.campusService.getCampus(this.id).subscribe((campus) => {
            const array = Object.values(campus);
            this.newId = array[0].id_campus;
            this.addressForm.patchValue({
              name_campus: array[0].name_campus,
              address: array[0].address,
            });
          });
        });

        console.log(this.campus);
      });
  }

  updateVehicle() {
    const newCampus: Campus = {
      id_campus: this.newId,
      name_campus: this.addressForm.controls.name_campus.value,
      address: this.addressForm.controls.address.value,
    };

    this.campusService.updateCampus(this.id, newCampus).subscribe((prueba) => {
      console.log(prueba);
    });

    alert('Sede editada exitosamente');

    location.href = 'http://localhost:4200/admin/campus/edit-single';
  }
}
