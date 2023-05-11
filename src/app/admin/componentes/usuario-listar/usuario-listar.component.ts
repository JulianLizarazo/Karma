import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../nucleo/services/usuario/user.service';

import { User } from 'src/app/nucleo/models/usuario.model';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  displayedColumns: string[] = [
    'actions',
    'id_user',
    'user_document',
    'user_name1',
    'user_name2',
    'user_lastname1',
    'user_lastname2',
    'user_email',
    'user_phone',
  ];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
