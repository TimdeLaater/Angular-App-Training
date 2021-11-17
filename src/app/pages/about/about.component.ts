import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  readonly PLAIN_USER = 'Reguliere gebruiker'
  readonly ADMIN_USER = 'Administrator'


  constructor() {}

  ngOnInit() {}
}
