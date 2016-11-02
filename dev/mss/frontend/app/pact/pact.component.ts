import { Component, OnInit } from '@angular/core';

import { Pact } from './pact';
import { PactService } from './pact.service';

@Component({
    moduleId: module.id,
    selector: 'pact',
    templateUrl: './pact.component.html',
    styleUrls: [ './pact.component.css' ]
})
export class PactComponent implements OnInit {

    pact: Pact;
    members: string[];

    constructor(private pactService: PactService) { }

    ngOnInit(): void {
        this.pact = this.pactService.getPact();
        this.members = this.pact.members;
    }
}