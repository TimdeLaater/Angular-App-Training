import { User } from './../userlist/user.model';
import { Injectable } from "@angular/core";


@Injectable({

  providedIn: 'root'

})
export class UserService {


  users: User[] = [
    {
      id: 1,
      name: 'Tim',
      email: 'avan@mail.com',
      password: '123',
      birthday: '15/01/2002'
    },
    {
      id: 2,
      name: 'Wessel',
      email: 'mail@mail.test',
      password: '123',
      birthday: '15/01/2002'

    },
  ]

  public add(user: User): void {
    user.id = this.users.length + 1;
    this.users.push(user);
  }
  public get(): User[] {
    return this.users;
  }
  public getByid(id: Number): User {
    return this.users.filter((user) => user.id == id)[0]
  }
  public delete(id: any): void {
    console.log(id)
    console.log('we zijn wel hier')
    this.users.splice(id - 1);
  }
}