import { Injectable } from '@angular/core';

import { Pact } from './pact';
import { PACT } from './mock-pact'

@Injectable()
export class PactService {

    getPact(): Pact {
        return PACT;
    }
}