import { Component, OnInit } from '@angular/core'
import { User } from '../userlist/user.model'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
    users: User[] = [
        {
          id: '1',
          name: 'Tim',
          email: 'Boeie@ruurd.kurk',
        password: '123'
        },
        {
          id: '2',
          name: 'Wessel',
          email: 'Boeie@ruurd.kurk',
        password: '123'
        },
      ]
      constructor() {}

  ngOnInit() {
   
  }
}
