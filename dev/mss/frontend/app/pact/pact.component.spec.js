"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var mock_pact_1 = require('./mock-pact');
var pact_component_1 = require('./pact.component');
var pact_service_1 = require("./pact.service");
var fixture;
var comp;
var de;
var el;
var pactService;
var spy;
describe('PactConmponent', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [http_1.HttpModule],
            declarations: [pact_component_1.PactComponent],
            providers: [pact_service_1.PactService]
        })
            .compileComponents(); // compile template and css
    }));
    beforeEach(function () {
        // create component and test fixture
        fixture = testing_1.TestBed.createComponent(pact_component_1.PactComponent);
        pactService = fixture.debugElement.injector.get(pact_service_1.PactService);
        // Setup spy on the `getQuote` method
        spy = spyOn(pactService, 'getPactObservable')
            .and.returnValue(Observable_1.Observable.create(function (observer) { mock_pact_1.PACT; }));
        // get test component from the fixture
        comp = fixture.componentInstance;
    });
    it('should display a title', function () {
        // trigger change detection to update the view
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            fixture.detectChanges(); // update view with quote
            // query for the title <h1> by CSS element selector
            de = fixture.debugElement.query(platform_browser_1.By.css('legend'));
            // confirm the element's content
            expect(de.nativeElement.textContent).not.toBe(null);
        });
    });
});
//# sourceMappingURL=pact.component.spec.js.map