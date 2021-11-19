import { UserService } from './../user/user.service';
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../userlist/user.model";
import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user.edit.component.html'
})
export class UserEditComponent {
  user!: User;
  userform!: FormGroup
  id: string | null = null;


  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')
      this.user = this.userService.getByid(Number(this.id))
    });
    this.userform = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      birthday: new FormControl('')
    })

  }
  onEdit() {
    this.userService.edit(this.id, this.userform.value)
    this.router.navigate(['/user']);
  }
}