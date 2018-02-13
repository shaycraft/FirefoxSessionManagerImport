import { Component, OnInit } from '@angular/core';
import { TabsessionService } from './tabsession.service';
import { Tabs } from '../models/tab.model';
import 'rxjs/add/operator/first';

import {TabsessionDataSource} from './tabsession.datasource';

@Component({
  selector: 'app-tabsession',
  templateUrl: './tabsession.component.html',
  styleUrls: ['./tabsession.component.css']
})
export class TabsessionComponent implements OnInit {

  private tabs: Tabs[];
  private displayedColumns: string[] = ['tab_id', 'window_id', 'title', 'url', 'referrer', 'last_accessed'];
  
  public dataSource: TabsessionDataSource;

  constructor(private tabsessionService: TabsessionService) { 
  }

  ngOnInit() {
    this.dataSource = new TabsessionDataSource(this.tabsessionService);
  }

}
