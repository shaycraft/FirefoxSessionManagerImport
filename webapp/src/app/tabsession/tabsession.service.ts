import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Tabs } from '../models/tab.model';

@Injectable()
export class TabsessionService {
  private readonly BASE_URL: string = 'http://ffsmi.samhaycraft.net';

  constructor(private http: Http) {
    console.log('DEBUG< in service constructor');
    this.http.post(`${this.BASE_URL}/authorize`, { password: 'PASSWORD' })
      .map(res => {
        console.log('DEBUG, authorize called, result = ');
        console.log(res);
      })
      .first()
      .subscribe(data => {
        console.log(data);
      })
  }

  public getTabs(): Observable<Tabs[]> {
    return this.http.get(`${this.BASE_URL}/tabs`)
      .map((res) => res.json());
  }
}
