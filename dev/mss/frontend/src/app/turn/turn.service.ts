import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

import {ConfigService} from '../config.service';
import {WytService} from '../wyt.service';
import {Turn} from './turn';

@Injectable()
export class TurnService extends WytService {

  constructor(protected httpService:Http, protected configService:ConfigService) {
    super(httpService, configService);
  }

  getTurn(): Observable<Turn> {
    var url = this.config.getTurnUrl();
    return this.http.get(url)
      .map((res:Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }
}
