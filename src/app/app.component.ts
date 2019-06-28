import { Component } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dogg-app';

  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('#slide-out');
    var instance = M.Sidenav.init(elems, {});
  }
}
