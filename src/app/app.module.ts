import { UserDetailComponent } from './user/userDetail/user.detail.component';
import { AddUserComponent } from './user/addUser/add.user.compent';

import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DashboardComponent } from './core/dashboard/dashboard.component'
import { NavbarComponent } from './core/navbar/navbar.component'
import { LayoutComponent } from './core/layout/layout.component'
import { FooterComponent } from './core/footer/footer.component'
import { AboutComponent } from './pages/about/about.component'

import { UserListComponent } from './user/userlist/userlist.component';
import { UserComponent } from './user/user/user.component'
import { ReactiveFormsModule } from '@angular/forms';
import { UserEditComponent } from './user/user.edit/user.edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent,
    DashboardComponent,
    FooterComponent,
    AboutComponent,
    UserListComponent,
    UserComponent,
    AddUserComponent,
    UserDetailComponent,
    UserEditComponent

  ],
  imports: [BrowserModule, RouterModule, NgbModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
