import { User } from './user.model';
import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-userlist',
  template: `
    <table class="table table-sm table-bordered">
      <tbody>
        <tr class="table-primary">
          <th scope="row" style="width: 16.66%">Naam</th>
          <th scope="row" style="width: 16.66%">Email</th>
          <th scope="row" style="width: 16.66%">Id</th>
          <td>
            <strong>{{ user?.name }}</strong>
          </td>
          <td>
            <strong>{{ user?.email }}</strong>
          </td>
        </tr>
      </tbody>
    </table>
  `
})
export class UserListComponent implements OnInit {
  @Input() user: User | undefined

  constructor() {}

  ngOnInit() {}
}
