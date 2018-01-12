import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { Tabs } from '../models/tab.model';
import { headersToString } from 'selenium-webdriver/http';

@Injectable()
export class TabsessionService {
  private readonly BASE_URL: string = 'http://ffsmi.samhaycraft.net';
  //private readonly BASE_URL: string = 'http://localhost:3000';
  private _headers: Headers;
  private _subject: Subject<Tabs[]>;

  constructor(private http: Http) {
    console.log('DEBUG, in service constructor');
    this._subject = new Subject<Tabs[]>();
    this._headers = new Headers();
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

  public getTabs(): Observable<Tabs[]> {

    if (this._headers.has('x-auth-token')) {
      this.getTabsCall();
    }
    else {
      this.getToken()
        .first()
        .subscribe(x => {
          this._headers.append('x-auth-token', x);
          this.getTabsCall();
        });
    }

    return this._subject.asObservable();
  }

  private getTabsCall(): void {
    this.http.get(`${this.BASE_URL}/tabs`, { headers: this._headers })
      .map((res) => res.json())
      .first()
      .subscribe(x => {
        this._subject.next(x);
      })
  }
}
