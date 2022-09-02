import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  userData: any;

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // reading URL Param
    const userId = this.route.snapshot.paramMap.get('id');
    console.log(userId);
    this.usersService.getUserById(userId)
      .subscribe( (res: any) => {
        console.log(res);
        this.userData = res;
      });
  }


}
