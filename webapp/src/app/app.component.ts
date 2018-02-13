import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private navLinks: Array<object> = [
    {
      path: '/about',
      label: 'About'
    },
    {
      path: '/tabsession',
      label: 'Tabs'
    }
  ];
}
