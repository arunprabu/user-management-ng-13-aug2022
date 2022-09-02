import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  userList: any[] = [];

  constructor( private usersService: UsersService) { 
    console.log('Inside Constructor');
  }

  ngOnInit(): void { // lifecycle hook
    // whenever the comp comes into view -- this will be called
    // ideal place for us to send async calls
    console.log('Inside ngOnInit');
    this.usersService.getUsers()
      .subscribe( (res: any) => {
        console.log(res);
        this.userList = res;
      });
  }

}
