import { User } from './user.model';
import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-userlist',
  template: `
    <table class="table table-sm table-bordered" >
      <tbody style="color: black;">
        <tr class="table-primary">
          <th scope="row" style="width: 16.66%">Naam</th>
          <th scope="row" style="width: 16.66%">Email</th>
          <th scope="row" style="width: 16.66%">Id</th>
          </tr>
          <tr style="color: #00ffab;">
          <td>
            <a routerLink="detail/{{user?.id}}"><strong>{{ user?.name }}</strong></a>
            
          </td>
          <td>
            <strong>{{ user?.email }}</strong>
          </td>
          <td>
            <strong>{{ user?.id }}</strong>
          </td>
        </tr>
        
      </tbody>
    </table>
  `
})
export class UserListComponent implements OnInit {
  @Input() user: User | undefined

  constructor() { }

  ngOnInit() { }

}
