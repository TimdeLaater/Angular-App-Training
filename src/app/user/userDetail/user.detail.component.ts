import { UserService } from './../user/user.service';
import { User } from './../userlist/user.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user.detail.component.html'
})

export class UserDetailComponent {

    user: User | null = null;
    id: string | null = null;
    constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {

    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.id = params.get('id')
            this.user = this.userService.getByid(Number(this.id))
        });

    }
    public delete() {
        console.log('we zijn hier')
        this.userService.delete(this.id)
        
        this.router.navigate(['/user']);
    }
}