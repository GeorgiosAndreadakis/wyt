import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { PactService } from './pact/pact.service';
import { TurnService } from './turn/turn.service';
import { AppComponent }   from './app.component';
import { PactComponent }   from './pact/pact.component';
import { TurnComponent }   from './turn/turn.component';

@NgModule({
    imports:      [ BrowserModule, NgbModule.forRoot() ],
    declarations: [ AppComponent, PactComponent, TurnComponent ],
    providers:    [ PactService, TurnService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }