import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { users } from '../users-list';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor() { }

  ngOnInit() {
    this.users = users;
  }

}
