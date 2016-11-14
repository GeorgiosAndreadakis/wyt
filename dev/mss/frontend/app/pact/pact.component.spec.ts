import {async, ComponentFixture, ComponentFixtureAutoDetect, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {HttpModule}     from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {PACT} from './mock-pact'

import {PactComponent} from './pact.component';
import {PactService} from "./pact.service";
import Spy = jasmine.Spy;

let fixture:ComponentFixture<PactComponent>;
let comp:PactComponent;

let de:DebugElement;
let el:HTMLElement;

let pactService:PactService;
let spy:Spy;

describe('PactConmponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [PactComponent],
      providers: [
        PactService,
        {provide: ComponentFixtureAutoDetect, useValue: true}
      ]
    })
      .compileComponents(); // compile template and css
  }));

  beforeEach(() => {
    // create component and test fixture
    fixture = TestBed.createComponent(PactComponent);

    pactService = fixture.debugElement.injector.get(PactService);

    // Setup spy on the `getPact` method
    spy = spyOn(pactService, 'getPactObservable')
      .and.returnValue(Observable.create(function (observer) {
        PACT
      }));

    // get test component from the fixture
    comp = fixture.componentInstance;
  });

  it('should display a title', () => {
    fixture.whenStable().then(() => { // wait for async getQuote
      fixture.detectChanges();        // update view with quote
      // query for the title <h1> by CSS element selector
      de = fixture.debugElement.query(By.css('legend'));
      // confirm the element's content
      expect(de.nativeElement.textContent).not.toBe(null);
    });
  });
});
