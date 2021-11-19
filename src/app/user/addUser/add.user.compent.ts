import { UserService } from './../user/user.service';
import { User } from './../userlist/user.model';
import { Component } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-user',
    templateUrl: './add.user.component.html'
  })
  export class AddUserComponent{
    user!: User;
    userform!: FormGroup



    constructor(private UserService: UserService, private router: Router) {}

ngOnInit() {
  this.userform = new FormGroup({
      name : new FormControl(''),
      email : new FormControl(''),
      password : new FormControl('')
  })

}
onSubmit(){
    this.UserService.add(this.userform.value)
    this.router.navigate(['/user']);
}

  }