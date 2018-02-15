import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

@Injectable()
export class LogonService {

  private _token: string;
  private _isAuthorized: boolean;

  //private readonly BASE_URL: string = 'http://ffsmi.samhaycraft.net';
  private readonly BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) {
    this._token = null;
    this._isAuthorized = false;
  }

  public IsAuthorized(): boolean {
    return this._isAuthorized
  }

  public GetToken(): string {
    return this._token;
  }

  // return true if authorization is successful, false if not
  public Authorize(password: string): Observable<boolean> {
    var shit =  Observable.from(this.http.post(`${this.BASE_URL}/authorize`, { password: password})
    //.map(res => res.text()));
    .map(res => {
      this._isAuthorized = true;
      this._token = res.text();
      return true;
    }));

    return shit;
  }

}
