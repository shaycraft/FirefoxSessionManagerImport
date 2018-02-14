import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class LogonService {

  constructor() { }

  public isLoggedIn(): Observable<boolean> {
    return Observable.of(false);
  }

}
