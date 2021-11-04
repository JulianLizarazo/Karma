import { Component, OnInit } from '@angular/core';
import { CampusService } from "../../../core/services/campus/campus.service";

import { Campus } from 'src/app/core/models/campus.model';

@Component({
  selector: 'app-campus-list',
  templateUrl: './campus-list.component.html',
  styleUrls: ['./campus-list.component.scss']
})
export class CampusListComponent implements OnInit {

  campus: Campus[] = [];

  displayedColumns: string[] = ['actions', 'id_campus', 'name_campus', 'address',];

  constructor(
    private campusService: CampusService,
  ) { }

  ngOnInit(): void {
    this.getCampus();
  }

  getCampus(){
    this.campusService.getAllCampus().subscribe(campus => {
      this.campus = campus;
    })
  }

}
