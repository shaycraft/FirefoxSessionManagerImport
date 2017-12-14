import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Tabs } from '../models/tab.model';

@Injectable()
export class TabsessionService {
  private readonly BASE_URL: string = 'http://ffsmi.samhaycraft.net';
  private _headers: any;

  constructor(private http: Http) {
    console.log('DEBUG, in service constructor');

  }

  private getToken(): Observable<string> {
    return this.http.post(`${this.BASE_URL}/authorize`, { password: 'PASSWORD' })
      .map(res => res.text());
    /*
      console.log('DEBUG, authorize called, result = ');
      this._headers = [{ 'x-auth-token': res.text() }];
      console.log(res.text());
    })
    .first()
    .subscribe();*/
  }

  public getTabs(): Observable<Tabs[] {
    if (this._headers) {
      return this.getTabsCall();
    }
    else {
       this.getToken()
        .first()
        .subscribe(x => {
          this._headers = [{'x-auth-token': x }];
          return this.getTabsCall();
        });
    }
  }

  private getTabsCall(): Observable<Tabs[]> {
    console.log('Debug, headers = ');
    console.log(this._headers);
    return this.http.get(`${this.BASE_URL}/tabs`, { headers: this._headers })
      .map((res) => res.json());
  }
}
