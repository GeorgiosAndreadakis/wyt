import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {ConfigService} from '../config.service';
import {WytService} from '../wyt.service';
import {Turn} from './turn';
import {TURN} from './mock-turn'

@Injectable()
export class TurnService extends WytService {

  constructor(protected httpService:Http, protected configService:ConfigService) {
    super(httpService, configService);
  }

  getTurn():Turn {
    return TURN;
  }
}
