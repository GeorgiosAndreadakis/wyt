import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ConfigService } from './config.service';
import { PactService } from './pact/pact.service';
import { TurnService } from './turn/turn.service';
import { AppComponent }   from './app.component';
import { PactComponent }   from './pact/pact.component';
import { TurnComponent }   from './turn/turn.component';

@NgModule({
    imports:      [ BrowserModule, HttpModule, NgbModule.forRoot() ],
    declarations: [ AppComponent, PactComponent, TurnComponent ],
    providers:    [ ConfigService, PactService, TurnService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
