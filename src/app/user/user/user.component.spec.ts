import { UserListComponent } from '../userlist/userlist.component'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { UserComponent } from './user.component'

describe('DashboardComponent', () => {
  let component: UserComponent
  let fixture: ComponentFixture<UserComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent, 
    UserListComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
