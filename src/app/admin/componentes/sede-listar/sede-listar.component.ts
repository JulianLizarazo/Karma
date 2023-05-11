import { Component, OnInit } from '@angular/core';
import { CampusService } from '../../../nucleo/services/sede/sede.service';

import { Campus } from 'src/app/nucleo/models/sede.model';

@Component({
  selector: 'app-sede-listar',
  templateUrl: './sede-listar.component.html',
  styleUrls: ['./sede-listar.component.scss'],
})
export class CampusListComponent implements OnInit {
  campus: Campus[] = [];

  displayedColumns: string[] = [
    'actions',
    'id_campus',
    'name_campus',
    'address',
  ];

  constructor(private campusService: CampusService) {}

  ngOnInit(): void {
    this.getCampus();
  }

  getCampus() {
    this.campusService.getAllCampus().subscribe((campus) => {
      this.campus = campus;
    });
  }
}
