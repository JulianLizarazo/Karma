import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CampusService } from '../../../nucleo/services/sede/sede.service';

import { Campus } from 'src/app/nucleo/models/sede.model';

@Component({
  selector: 'app-sede-editar',
  templateUrl: './sede-editar.component.html',
  styleUrls: ['./sede-editar.component.scss'],
})
export class CampusEditComponent implements OnInit {
  id: number;
  nuevoId: number;

  formularioDireccion = this.fb.group({
    nombre_sede: [null, Validators.required],
    direccion: [null, Validators.required],
  });

  tieneNumeroUnico = false;

  constructor(
    private fb: FormBuilder,
    private sedeServicio: CampusService,

    private rutaActiva: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params: Params) => {
      this.id = params.id_campus.toString();
      console.log(this.id);
      this.sedeServicio.getCampus(this.id).subscribe((campus) => {
        const array = Object.values(campus);
        this.nuevoId = array[0].id_campus;
        this.formularioDireccion.patchValue({
          nombre_sede: array[0].nombre_sede,
          direccion: array[0].direccion,
        });
      });
    });
  }

  onSubmit(): void {
    const newCampus: Campus = {
      id_campus: this.nuevoId,
      name_campus: this.formularioDireccion.controls.nombre_sede.value,
      address: this.formularioDireccion.controls.address.value,
    };

    this.sedeServicio.updateCampus(this.id, newCampus).subscribe((prueba) => {
      console.log(prueba);
    });

    alert('Sede editada exitosamente');

    location.href = 'http://localhost:4200/admin/campus/list';
  }
}
