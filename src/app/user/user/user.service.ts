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
          email: 'Boeie@ruurd.kurk',
        password: '123'
        },
        {
          id: 2,
          name: 'Wessel',
          email: 'Boeie@ruurd.kurk',
        password: '123'
        },
      ]

public add(user: User): void{
    user.id = this.users.length+1;
    this.users.push(user);
}
public get(): User[]{
    return this.users;
}
public getByid(id : Number): User{
    return this.users.filter((user)=> user.id == id)[0]
}
}