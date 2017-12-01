import { Component, OnInit } from '@angular/core';
import { TabsessionService } from './tabsession.service';
import { Tabs } from '../models/tab.model';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-tabsession',
  templateUrl: './tabsession.component.html',
  styleUrls: ['./tabsession.component.css']
})
export class TabsessionComponent implements OnInit {

  private tabs: Tabs[];

  constructor(private tabsessionService: TabsessionService) { 
  }

  ngOnInit() {
    this.tabsessionService.getTabs()
    .first()
    .subscribe(data => this.tabs = data)
  }

}
