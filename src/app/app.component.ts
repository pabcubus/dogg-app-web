import { Component } from '@angular/core';
// import * as M from 'materialize-css';

import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dogg-app';

  user: any = null;

  constructor(private auth: AuthService) {
  }

  ngAfterViewInit(): void {
    /*
    var elems = document.querySelectorAll('#slide-out');
    var instance = M.Sidenav.init(elems, {});
    */
  }

  ngOnInit(): void {
    this.user = this.auth.getUserByToken();
  }
}
