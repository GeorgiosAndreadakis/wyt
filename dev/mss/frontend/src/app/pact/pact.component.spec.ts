import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {Http, BaseRequestOptions, Response, ResponseOptions} from '@angular/http';
import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';

import {ConfigService} from '../config.service';
import {PactService} from "./pact.service";
import {PactComponent} from './pact.component';

let fixture:ComponentFixture<PactComponent>;
let comp:PactComponent;

let de:DebugElement;
let el:HTMLElement;

describe('PactConmponent', () => {

  let subject: PactService = null;
  let backend: MockBackend = null;

  beforeEach( async(() => {

    TestBed.configureTestingModule({
      declarations: [PactComponent],
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        ConfigService,
        PactService
      ]
    })
    .compileComponents();//compile template and css
  }));

  beforeEach(inject([PactService, MockBackend], (pactService: PactService, mockBackend: MockBackend) => {

    subject = pactService;
    backend = mockBackend;
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify(
          {
            id:1,
            title: '[DUMMY] Who gets the receipt for the entertainment expenses?',
            members: ['Carsten', 'Georgios'],
            selectionStrategy: 'Fixed Order, starting with Georgios',
            confirmationStrategy: 'On a confidential basis'
          })
      });
      connection.mockRespond(new Response(options));
    });

    fixture = TestBed.createComponent(PactComponent);
    comp = fixture.componentInstance;
  }));

  it('should display the correct title', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('#idTitle'));
      expect(de.nativeElement.value).toBe('[DUMMY] Who gets the receipt for the entertainment expenses?');
    });
  }));

  it('should display the correct confirmation strategy', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('#idConfirmationStrategy'));
      expect(de.nativeElement.value).toBe('On a confidential basis');
    });
  }));
});
