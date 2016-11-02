import { Injectable } from '@angular/core';

import { Turn } from './turn';
import { TURN } from './mock-turn'

@Injectable()
export class TurnService {

    getTurn(): Turn {
        return TURN;
    }
}