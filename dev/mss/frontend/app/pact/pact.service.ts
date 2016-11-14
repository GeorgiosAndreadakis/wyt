import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {Observable} from 'rxjs/Observable';

import {Pact} from './pact';

@Injectable()
export class PactService {

  private url:string = 'http://pact.int.skysail.io/pact/v1?media=json';

  constructor(private http:Http) {}

  getPact():Observable<Pact> {
    let obs:Observable<Pact> = this.http.get(this.url)
      .map((res:Response) => {
        return res.json();
      })
      .catch(this.handleError);
    return obs;
  }

  private handleError(error:Response | any) {
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
