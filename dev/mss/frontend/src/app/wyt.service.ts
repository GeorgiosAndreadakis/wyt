import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {ConfigService} from './config.service';
import {ErrorObservable} from "rxjs/observable/ErrorObservable";

@Injectable()
export class WytService {

  constructor(protected http:Http, protected config:ConfigService) {
  }

  protected handleError(error:Response | any): ErrorObservable {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg:string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
