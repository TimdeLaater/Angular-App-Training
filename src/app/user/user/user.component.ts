import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core'
import { User } from '../userlist/user.model'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
     users : User[] = []
      constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.get();
  }
}


