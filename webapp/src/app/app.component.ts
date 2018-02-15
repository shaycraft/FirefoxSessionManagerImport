import { Component, OnInit } from '@angular/core';
import { LogonService } from './logon/logon.service';

import 'rxjs/add/operator/first';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private isAuthenticated: boolean;

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

  constructor(private logonSerivce: LogonService) {
    this.isAuthenticated = false;
  }

  public ngOnInit(): void {
    this.isAuthenticated = this.logonSerivce.IsAuthorized();
  }

  public Authorize(): void {
    this.logonSerivce.Authorize('PASSWORD')
    .subscribe(x => {
      if (x) {
        this.isAuthenticated = true;
      }
      else {
        console.log('something went bad on authorize');
        this.isAuthenticated = false;
      }
    })
  }
}
