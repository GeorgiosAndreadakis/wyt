import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

import {ConfigService} from '../config.service';
import {WytService} from '../wyt.service';
import {Pact} from './pact';

@Injectable()
export class PactService extends WytService {

  constructor(protected httpService:Http, protected configService:ConfigService) {
    super(httpService, configService);
  }

  getPact():Observable<Pact> {
    var pactUrl = this.config.getPactUrl();
    return this.http.get(pactUrl)
      .map((res:Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }
}
