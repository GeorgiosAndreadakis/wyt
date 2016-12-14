import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {Http, BaseRequestOptions, Response, ResponseOptions} from '@angular/http';
import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';

import {ConfigService} from '../config.service';
import {TurnService} from "../turn/turn.service";
import {TurnComponent} from '../turn/turn.component';

let fixture: ComponentFixture<TurnComponent>;
let comp: TurnComponent;

let de:DebugElement;
let el:HTMLElement;

describe('TurnConmponent', () => {

  let subject: TurnService = null;
  let backend: MockBackend = null;

  beforeEach( async(() => {

    TestBed.configureTestingModule({
      declarations: [TurnComponent],
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
        TurnService
      ]
    })
    .compileComponents();//compile template and css
  }));

  beforeEach(inject([TurnService, MockBackend], (pactService: TurnService, mockBackend: MockBackend) => {

    subject = pactService;
    backend = mockBackend;
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify(
          {
            id: 1,
            name: 'Georgios',
            lastConfirmation: 'Nov 23th, 2016'
          })
      });
      connection.mockRespond(new Response(options));
    });

    fixture = TestBed.createComponent(TurnComponent);
    comp = fixture.componentInstance;
  }));

  it('should display the correct name', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('#idCurrent'));
      expect(de.nativeElement.value).toBe('Georgios');
    });
  }));
});
