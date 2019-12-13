import { Component, HostBinding } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: []
})
export class AppComponent {
  title = 'millennial';

  display: boolean = false;
  displayNav: boolean = false;
  buttonDisplay: boolean = true;

  showNav() {
    this.displayNav = true;
  }

  showMore() {
    this.display = true;
    this.buttonDisplay = false;
  }
}
