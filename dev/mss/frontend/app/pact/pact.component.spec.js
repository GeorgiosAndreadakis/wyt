"use strict";
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/http/testing');
var config_service_1 = require('../config.service');
var pact_service_1 = require("./pact.service");
var pact_component_1 = require('./pact.component');
var fixture;
var comp;
var de;
var el;
describe('PactConmponent', function () {
    var subject = null;
    var backend = null;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [pact_component_1.PactComponent],
            providers: [
                testing_2.MockBackend,
                http_1.BaseRequestOptions,
                {
                    provide: http_1.Http,
                    useFactory: function (backendInstance, defaultOptions) {
                        return new http_1.Http(backendInstance, defaultOptions);
                    },
                    deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
                },
                config_service_1.ConfigService,
                pact_service_1.PactService
            ]
        })
            .compileComponents(); //compile template and css
    }));
    beforeEach(testing_1.inject([pact_service_1.PactService, testing_2.MockBackend], function (pactService, mockBackend) {
        subject = pactService;
        backend = mockBackend;
        backend.connections.subscribe(function (connection) {
            var options = new http_1.ResponseOptions({
                body: JSON.stringify({
                    id: 1,
                    title: '[DUMMY] Who gets the receipt for the entertainment expenses?',
                    members: ['Carsten', 'Georgios'],
                    selectionStrategy: 'Fixed Order, starting with Georgios',
                    confirmationStrategy: 'On a confidential basis'
                })
            });
            connection.mockRespond(new http_1.Response(options));
        });
        fixture = testing_1.TestBed.createComponent(pact_component_1.PactComponent);
        comp = fixture.componentInstance;
    }));
    it('should display a title', testing_1.async(function () {
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            fixture.detectChanges();
            de = fixture.debugElement.query(platform_browser_1.By.css('#title'));
            expect(de.nativeElement.value).toBe('[DUMMY] Who gets the receipt for the entertainment expenses?');
        });
    }));
});
//# sourceMappingURL=pact.component.spec.js.map