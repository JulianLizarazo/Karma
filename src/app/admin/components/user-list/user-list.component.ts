import { Component, OnInit } from '@angular/core';


import { UserService } from "../../../core/services/user/user.service";

import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  displayedColumns: string[] = ['actions', 'id_user', 'user_name1', 'user_name2', 'user_lastname1', 'user_lastname2', 'user_email', 'user_phone'];

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    })
  }

}
