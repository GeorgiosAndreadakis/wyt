"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var pact_service_1 = require("./pact.service");
var PactComponent = (function () {
    function PactComponent(pactService) {
        this.pactService = pactService;
    }
    PactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pactService.getPact()
            .subscribe(function (found) {
            console.log('Pact given: ' + found);
            _this.members = found.members;
            _this.title = found.title;
            _this.selectionStrategy = found.selectionStrategy;
            _this.confirmationStrategy = found.confirmationStrategy;
        }, function (error) { return _this.errorMessage = error; });
    };
    PactComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pact',
            templateUrl: './pact.component.html',
            styleUrls: ['./pact.component.css']
        }), 
        __metadata('design:paramtypes', [pact_service_1.PactService])
    ], PactComponent);
    return PactComponent;
}());
exports.PactComponent = PactComponent;
//# sourceMappingURL=pact.component.js.map