import { ExercisesComponent } from './exercises/exercises/exercises.component';
import { UserEditComponent } from './user/user.edit/user.edit.component';
import { UserDetailComponent } from './user/userDetail/user.detail.component';
import { AddUserComponent } from './user/addUser/add.user.compent';
import { UserComponent } from './user/user/user.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DashboardComponent } from './core/dashboard/dashboard.component'
import { LayoutComponent } from './core/layout/layout.component'
import { AboutComponent } from './pages/about/about.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'about', component: AboutComponent },
      { path: 'user', component: UserComponent },
      { path: 'user/add', component: AddUserComponent },
      { path: 'user/detail/:id', component: UserDetailComponent },
      { path: 'user/detail/:id/edit', component: UserEditComponent },
      { path: 'exercises', component: ExercisesComponent },



    ]
  },
  { path: '**', redirectTo: '/' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
