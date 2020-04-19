import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/model/menu.model';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  currentUser: HeenaElectronics.User;
  menu: any[];
  constructor() { }

  ngOnInit() {
    this.getCurrentLoggedInUser();
    this.getAllMenu();
  }

  getCurrentLoggedInUser() {
    this.currentUser = JSON.parse(localStorage.getItem('User'));
  }

  getAllMenu() {
    this.menu = Menu.getAllMenu();
  }
}
