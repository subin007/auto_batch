webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <report></report>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_service__ = __webpack_require__("../../../../../src/app/result.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(titleService, resultService) {
        this.titleService = titleService;
        this.resultService = resultService;
    }
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.setTitle('');
        this.resultService.getMegaThrowReport().subscribe(function (data) {
            _this.metadata = data.metadata;
            _this.setTitle(new Date(_this.metadata.startedAt).toUTCString());
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__result_service__["a" /* ResultService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__result_service__["a" /* ResultService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__result_service__["a" /* ResultService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__result_service__ = __webpack_require__("../../../../../src/app/result.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_report_report_component__ = __webpack_require__("../../../../../src/app/components/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_report_details_report_details_component__ = __webpack_require__("../../../../../src/app/components/report-details/report-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_loader_loader_component__ = __webpack_require__("../../../../../src/app/components/loader/loader.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_report_report_component__["a" /* ReportComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_report_details_report_details_component__["a" /* ReportDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_loader_loader_component__["a" /* LoaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__result_service__["a" /* ResultService */], __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/loader/loader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading {\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 4em;\r\n  height: 4em;\r\n  background-color: transparent;\r\n  border-radius: 100%;\r\n  -webkit-animation: loading-spin 1s infinite linear;\r\n          animation: loading-spin 1s infinite linear;\r\n}\r\n\r\n.loading:after {\r\n  content: '';\r\n  box-sizing: border-box;\r\n  display: inline-block;\r\n  position: absolute;\r\n  width: 110%;\r\n  height: 110%;\r\n  top: -5%;\r\n  left: -5%;\r\n  right: 0;\r\n  bottom: 0;\r\n  border: 5px solid transparent;\r\n  border-radius: 100%;\r\n  box-shadow: 0.16em 0.16em 0.16em #333;\r\n}\r\n\r\n@-webkit-keyframes loading-spin {\r\n  0% {\r\n    -webkit-transform: rotateZ(0deg);\r\n            transform: rotateZ(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotateZ(360deg);\r\n            transform: rotateZ(360deg);\r\n  }\r\n}\r\n\r\n@keyframes loading-spin {\r\n  0% {\r\n    -webkit-transform: rotateZ(0deg);\r\n            transform: rotateZ(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotateZ(360deg);\r\n            transform: rotateZ(360deg);\r\n  }\r\n}\r\n\r\n\r\n/* styling */\r\n\r\n\r\n/* html {\r\n  width: 100%;\r\n  height: 100%;\r\n  background: radial-gradient(circle, #ffffff 0%, #aaaaaa 100%) no-repeat;\r\n  overflow-x: hidden;\r\n  overflow-y: hidden;\r\n} */\r\n\r\n.wrapper {\r\n  text-align: center;\r\n  display: table;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-x: hidden;\r\n  overflow-y: hidden;\r\n  /* background: radial-gradient(circle, #ffffff 0%, #aaaaaa 100%) no-repeat; */\r\n}\r\n\r\n#wrap {\r\n  box-sizing: border-box;\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  padding: 50px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div id=\"wrap\">\n    <div class=\"loading\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    return LoaderComponent;
}());
LoaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'loader',
        template: __webpack_require__("../../../../../src/app/components/loader/loader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/loader/loader.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoaderComponent);

//# sourceMappingURL=loader.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/report-details/report-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".boxer {\r\n  display: inline-block;\r\n  font-weight: 500;\r\n  /* text-align: center; */\r\n  white-space: nowrap;\r\n  vertical-align: baseline;\r\n  border-radius: .25rem;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/report-details/report-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar fixed-at-top navbar-expand-lg navbar-dark bg-niceblue\">\r\n  <span class=\"boxer bg-clouds mr-5 pl-2\">\r\n    <a class=\"navbar-brand\" style=\"color:#2980b9 !important; text-align:center; \" href=\"#\">KVP Automation</a>\r\n  </span>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <span class=\"boxer bg-belize_hole\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link \" href=\"#\">Stated at: {{metadata.startedAt | date: 'EEEE, MMM d, y @ h:mm:ss a'}}\r\n            <br>\r\n            <span *ngIf=\"metadata.finishedAt\">Finished at: {{metadata.finishedAt | date: 'EEEE, MMM d, y @ h:mm:ss a'}}\r\n            </span>\r\n          </a>\r\n        </li>\r\n      </span>\r\n      <span class=\"boxer bg-belize_hole mx-1\">\r\n\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"#\">Initial Conditions: {{initialConditionsVerification()}}</a>\r\n        </li>\r\n      </span>\r\n      <span class=\"boxer bg-belize_hole\" style=\"border-radius: 0.25rem 0 0 0.25rem;\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"#\">Total Specs Ran: {{specSprint.length === 0 ? 0 : specSprint.length}}\r\n            <br> Failed Specs: {{failCount}}</a>\r\n        </li>\r\n      </span>\r\n      <span class=\"boxer bg-belize_hole\" style=\"border-radius: 0 0.25rem 0.25rem 0;\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"#\">Passed Specs: {{passCount}}</a>\r\n        </li>\r\n      </span>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/report-details/report-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_service__ = __webpack_require__("../../../../../src/app/result.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportDetailsComponent = (function () {
    function ReportDetailsComponent(http, resultService) {
        this.http = http;
        this.resultService = resultService;
    }
    ReportDetailsComponent.prototype.initialConditionsVerification = function () {
        if (this.initials.deviceOnline === null) {
            if (this.initials.saidClaimed === null) {
                if (this.initials.loginTwo === null) {
                    if (this.initials.loginOne === null) {
                        return 'Waiting for First Login';
                    }
                    return 'Done Login One';
                }
                return 'Done Login Two';
            }
            return 'Checked SAID Claimed Status';
        }
        return 'Checked Device Online Status';
    };
    ReportDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resultService.getMegaThrowReport().subscribe(function (data) {
            _this.metadata = data.metadata;
            _this.initials = data.initials;
            _this.specSprint = data.specSprint;
        });
    };
    return ReportDetailsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], ReportDetailsComponent.prototype, "passCount", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], ReportDetailsComponent.prototype, "failCount", void 0);
ReportDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'report-details',
        template: __webpack_require__("../../../../../src/app/components/report-details/report-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/report-details/report-details.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__result_service__["a" /* ResultService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__result_service__["a" /* ResultService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__result_service__["a" /* ResultService */]) === "function" && _b || Object])
], ReportDetailsComponent);

var _a, _b;
//# sourceMappingURL=report-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/report/report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  nav {\r\n\r\n  font: 13px/20px \"Lucida Grande\", Tahoma, Verdana, sans-serif;\r\n  color: #404040;\r\n  height: 26px;\r\n  margin-top: 15px;\r\n}\r\n\r\n  nav ul {\r\n\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  border-color: #d5d5d5 #d2d2d2 #cdcdcd;\r\n  border-radius: 3px;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);\r\n}\r\n\r\n  nav li {\r\n\r\n  float: left;\r\n  border-left: 1px solid #d2d2d2;\r\n}\r\n\r\n  nav li:first-child {\r\n\r\n  border-left: 0;\r\n}\r\n\r\n  nav li:first-child a {\r\n\r\n  border-radius: 3px 0 0 3px;\r\n}\r\n\r\n  nav li:last-child a {\r\n\r\n  border-radius: 0 3px 3px 0;\r\n}\r\n\r\n  nav a {\r\n\r\n  display: block;\r\n  position: relative;\r\n  padding: 0 14px;\r\n  height: 26px;\r\n  line-height: 26px;\r\n  font-size: 11px;\r\n  font-weight: bold;\r\n  color: #666;\r\n  text-decoration: none;\r\n  text-shadow: 0 1px white;\r\n  background: #fafafa;\r\n  background-image: _linear-gradient_legacy(top, #fcfcfc, #f0f0f0...);\r\n  box-shadow: inset 0 0 0 1px #fafafa;\r\n}\r\n\r\nnav a:hover {\r\n  color: #333;\r\n  z-index: 2;\r\n  box-shadow: inset 0 0 0 1px #fafafa, 0 0 3px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\nnav li.active a,\r\nnav a:active {\r\n  color: #333;\r\n  background: white;\r\n  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\nnav .badge {\r\n  display: block;\r\n  position: absolute;\r\n  top: -12px;\r\n  right: 3px;\r\n  line-height: 16px;\r\n  height: 16px;\r\n  padding: 0 5px;\r\n  font-family: Arial, sans-serif;\r\n  color: white;\r\n  text-shadow: 0 1px rgba(0, 0, 0, 0.25);\r\n  border: 1px solid;\r\n  border-radius: 10px;\r\n  box-shadow: inset 0 1px rgba(255, 255, 255, 0.3), 0 1px 1px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\nnav .badge {\r\n  background: #007cbb;\r\n  background-image: _linear-gradient_legacy(top, #09acff, #007cbb...);\r\n}\r\n\r\nnav .badge.green {\r\n  background: #318700;\r\n  background-image: _linear-gradient_legacy(top, #4dd400, #318700...);\r\n}\r\n\r\nnav .badge.yellow {\r\n  background: #faba3e;\r\n  background-image: _linear-gradient_legacy(top, #fcd589, #faba3e...);\r\n}\r\n\r\nnav .badge.red {\r\n  background: #d04429;\r\n  background-image: _linear-gradient_legacy(top, #e17965, #d04429...);\r\n}\r\n\r\n.display-4{\r\n  font-size: 2.0rem;\r\n  font-weight: 500;\r\n  color: #5c5c5c;\r\n}\r\n\r\n.mt-7{\r\n  margin-top: 90px;\r\n}\r\n\r\n.failurebox{\r\n  position: relative;\r\n  left: 50%;\r\n  \r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<report-details [passCount]=\"passedResultsCount\" [failCount]=\"failedResultsCount\"></report-details>\n<div class=\"row\">\n  <div class=\"col-12 mt-7 pt-2 px-5\">\n    <table class=\"table table-bordered\">\n      <thead class=\"thead-light\" *ngIf=\"specSprint.length !== 0\">\n        <tr>\n          <th>Test Step No. </th>\n          <th>Test Attribute</th>\n          <th>Operation</th>\n          <th>Result</th>\n          <th>Actual Value Present</th>\n          <th>Failure Reason (if any)</th>\n          <th>Tested at time</th>\n        </tr>\n      </thead>\n      <tbody *ngFor=\"let spec of specSprint; index as i\">\n        <tr class=\"justify-content-center\" *ngIf=\"displayTestcaseName(spec.testcaseName,i)\">\n          <td colspan=\"7\" class=\"bg-silver\">\n            <span class=\"display-4\">{{spec.testcaseName}}</span>\n          </td>\n        </tr>\n        <tr>\n          <th scope=\"row\">{{i + 1}}</th>\n          <td *ngIf=\"(spec.code !== 'mg')&&(spec.code !=='msv')\">{{spec.attributeName}}</td>\n          <td *ngIf=\"(spec.code === 'mg')||(spec.code ==='msv')\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\" *ngFor=\"let singleAttr of spec.attributeName\">{{singleAttr}}</li>\n            </ul>\n          </td>\n          <td>\n            <div class=\"card\">\n              <div class=\"card-body\">{{operationStatements(spec.code,spec.focusedExpectation)}}</div>\n            </div>\n          </td>\n          <td>\n            <img *ngIf=\"(spec.passResults !== 0) && (spec.failResults.length === 0)\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALhSURBVFhH7ZjJbhNBEIYtwZGdN0A8DEskiMFOIsQ9ElwRb0DCIi4sTxAOeCMOhEU+GBHj6R4i5YpxABG5x0EgHgCQmqpOjWS7a4ZZc/Iv/ZLj6ar6MnbVdLsw1VQhEj/FETmUM46SN4USjx1PPEGb1/jeUJzHNbR8f9TW7YPOwJkXnmgJJf8KT+pQK/nH8eQbZ+DOYSylyUdwt0pwZ76wIFGsxLbjOZcoXXaSA3kSCjStgkmtRH3r69YxSp9O3Z3uaUeJz2yhNIa7ibmpTDJhAvgO7bIFsjDkTgwJgScgSd9Kmr37iT5u6LxVJlkuhtHUoLLRhN3KJcrTjucWqXy4zJzLoynI9z7c17VPDe5aP9KchO5aYIIz8bK8o2eeXdSXn88BZN263h3KMmEEC6f+ZGAW9uF8L7y4qjuD9+PrlHhFGLw2f20ejfT4iulJuNm1kq70avZaeCx2fnQOE44t83CfDErpJXccrtgs83BkaJazhGPL7ECYoKSOC2c8FDcIxxZ8Bx6xQSO2vjcBTgQHhpv0kHBsmb0cE+T77c47vdi6ppfkbfa676RwexYrhGMrDNCH84veCoBcdu9acE97VXYt7xDAsI+40V813TdafBIyPRw2iXxAOLb+1yTVXt2GFHuQWcAZhzUJ7HbPsUEjRsjiWnkMZrF1fezv2WYpGRy468kzhGMLDzhRBjUHmQUc7AF+hw5qFDTKay540jUGMg2csRIvCSNYePpigxmPQqaGA+M2jzCChVse+E+2uQScEXJ+/YqufEwHB59cr6IrBwgjXLh55JIEOerTJdRKXKDy0YTbcDZRDobxVqWy0bXxbeM4BO/LoQm3eVQ2nvI+dsJYGWZ0No7eNDHcd3fdU1QmnfDcCpB1pkgyZ/nTx6jwh580dxNHSexujSucVWaYwwEHzxAcyJhxjZLreGKLPOeyEj438QyBOxAAhq2aWDHG1/AeXmt/bx+i5VNNZatQ+AdUhQH1OiH17QAAAABJRU5ErkJggg==\">\n            <img *ngIf=\"spec.failResults.length !== 0 && spec.passResults >= 0\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOsSURBVFhH3VhLTxNRFJ5El/ozfCQm6poNGaZ32qLRhFcCGAF/QKnQ6oZHeGwg4fE73BOXbkraKRskpIImgJCwkUfiTMvCmvF8w4FSvG1n2mmtfMmXNNN7z/l6555XlRuLhBBPk4HA6Foo9NEIBvdSQmSTmpYH8dkIhXbxXVKIkWRb22PeVl8kWlrukvN3aV0/WGtvN7eHhs4OYzH7ZGrKtubm7NzCgkN8xrPDeNzeHhw8WwuHTeyhvfFPra132Jx/IKO3U7oeM4QwM/392aOJCftsack9Fxfto/FxO9PXZ5Edk055BDbZfG1Y1fWHqWDw20ZPj3k6MyMX4IGwsdHZaRq6vpVQ1QfspjqkNO0lGTIPotHfMme1EDbpNK2kqr5gd95A4t7Q5c+eTE5KHfjBY7JNPnLk6zW7dQfn5EicH6+0Ek9nZyEy6/okcefwWo+9BkINhC8EYMU7iciidPC1HneuEveHh/N0kl/KRjdSCaJVZqARXKfopuv1luUUAwmUjvmnq3u3vCx/Xo4u9sA3NEALyyrACATeIwnLNhaRHOUzGTu/uSn/XkKsxR43IjO9vVYqEIixrAIoMA6Q7WWbLsniLuBGJNZcwI1IaKDC8J1lnSOlqk9QW1GSZJuu8qpDoJxIL2svSRpQuw1VfcTyFAVdCYq6dIOEbhxXJY5JWnL0mqMsT1HQFqErkS0uxXICahEHQks6GFxheYqSpt4N7ZFscTnKhNQqDkR5JU07LM95xVlrfl66uBKvC7qKasSB6CfRlrE8EkhdcM5FgJSiTGS14sAsNb10B3+xvP9BYLO/4qYPkqZLM6Oj6BELaaYZEzVpGmZ556UuHQ5bzVLqoKWo1AFUoPcrjpMNaBZ+jI3Z1LjssawC0OJgbpVtKiKLdHUaTKx1Iw5Eu4Urx7IKQJOI0P6XDevJ9HTphhXAxI+hWra57qS7t97RYRYFx3VgYKGhaXs/Emn80BSJOEPTh+7uWyxHDox+mPgbPXbCp6Fp91lGeWCIdgZ3GqplBv2k58H9AvRrBmhjrp4nifmDUkouKcQrdusNq5r2nNKPRUO1v3eSAsK5c0JgDn7G7qoDRdU9XN7PXV3mKaUBqUMPhA1EK51cBrbZTW1AdGPiR45CMnfGUy/9I61FhUAShg2kEthk8/7BSeZCxFGKMBqiqDt/AVN75PwFTEJA5y9geobvtgYGcvwX8C6qVckk7DdQzMlhFNMXcQd3FZ05iM94RldjBWv+Kvw3B4ryBznM9gVFpzaoAAAAAElFTkSuQmCC\">\n            <!-- <img *ngIf=\"(spec.passResults.length !== 0) && (spec.failResults.length !== 0)\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKbSURBVFhH7ZjPaxNBFMcD9ehv/4NSs5tAUWihIIr2pDZioUWtf0goePDktSdt/4CSerC01IO2xYNgtSQbxYsgYutN9NxjU2b8vvEphX07O5mdhh7yhQ9Zkpn3vnmTebuTUl99WaSaQ6dVK74DZlUSL4AlZsG814xrNIaH90b67fUTMDCjWtEbvB7oJNY2VBJ1wKZKKg9oLoc5GulWdA+mfkhGXEBVd2B2msOFEwJfAC+lpD6g+iv686WzHL6Y1KfqEMztSomKYKqJ2JzGT8ZcEv2WEoSAYnubVNvV81iK71LgkJgcPsuNJViTAtrYe1c1SJ/ZQCVXOa2baLdKgWx8aIzoq7W7hu3GqDjGBrrDFKe3y/Q5j03x5NENPXZz0kDX0hgbZqld+qRqxw+lAHlQ1a6hekTz+Yg4Jg/VKt9nG9miri9NdsH3N/gPLPM625ClPw6ecbl9HRUoTke9j06xnbTo5i5N7CUqKd9mO2lhc8xKk1zYWhzVi3NXDHQtjXEBVayznbSwk+alSS48ro//38V0LY1xAR6esZ208Ptbkia5EMxgEjfYTlrH3+DxWOKnbCetIpskXAVtm6RdmZAmuRCuguVbbCctcwjybNQhDGJ5962NmgSDG9LkPMIYjF+zjWyZ05cwOY8QBukxj21kix+3dsQAFooaxOb4pl+UBtiGXVjmKSmIjcIG2+VJTu8mfKNVKVAWPzeH9de1ywa6lsZkgRVb5rTu0lvD57CrenNowmMep+1OPTh2/gpzNvbYNHn8XZ2Lg5ymmOjcioArUiIfTKxQf30cFpZkukg1qZV0vVu7FfUqauZoRetI2JGMHIbGoGKv6MTm3OdCie6bdIaAiTpMzNOznMFc4z18pr9UT/LwvvpKq1T6AzUGR24Nov/ZAAAAAElFTkSuQmCC\"> -->\n          </td>\n          <td>\n            <ul class=\"list-group\" *ngIf=\"spec.currentValues\">\n              <li class=\"list-group-item\" *ngIf=\"spec.currentValues._activeValue\">Active Value: {{spec.currentValues._activeValue}}</li>\n              <li class=\"list-group-item\" *ngIf=\"spec.currentValues._valueType\">Value Type: {{spec.currentValues._valueType}}</li>\n              <li class=\"list-group-item\" *ngIf=\"spec.currentValues._activeTime\">@Time: {{spec.currentValues._activeTime}}</li>\n              <li class=\"list-group-item\" *ngIf=\"spec.currentValues._nameAlias\">Name Alias: {{spec.currentValues._nameAlias}}</li>\n              <li class=\"list-group-item\" *ngIf=\"spec.currentValues._history\">History Value: {{spec.currentValues._history}}</li>\n            </ul>\n          </td>\n          <td>\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\" *ngFor=\"let failure of spec.failResults\">{{operationFailureStatements(spec.code, spec.attributeName, failure.matcherName, failure.actual, failure.expected)}}\n              </li>\n            </ul>\n          </td>\n          <td>{{spec.atTime | date:'hh:mm:ss a'}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div *ngIf=\"metadata.running ==='forcefully_closed'\">\n  <h1 class=\"d-flex justify-content-center\"><i>\"{{failureReason[0]}}{{failureReasonGeneration()}}\"</i></h1>\n  <h3 class=\"d-flex justify-content-center\">- Please Do a restart</h3>\n  <h5 class=\"d-flex justify-content-center\"><i>with the necessary corrections</i></h5>\n</div>\n<loader *ngIf=\"(!metadata.finishedAt) && (metadata.running !=='forcefully_closed')\"></loader>\n"

/***/ }),

/***/ "../../../../../src/app/components/report/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_service__ = __webpack_require__("../../../../../src/app/result.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportComponent = (function () {
    function ReportComponent(http, resultService) {
        this.http = http;
        this.resultService = resultService;
        this.testcaseprev = null;
        this.failedResultsCount = 0;
        this.passedResultsCount = 0;
        this.displayCaseName = true;
        this.actualValueArray = [];
        this.failureReason = [];
    }
    ReportComponent.prototype.ngOnChanges = function () {
        // this.failureReasonGeneration();
    };
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.failedResultsCount = 0;
        this.passedResultsCount = 0;
        this.testcaseprev = null;
        this.resultService.getMegaThrowReport().subscribe(function (data) {
            _this.metadata = data.metadata;
            _this.initials = data.initials;
            _this.specSprint = data.specSprint;
            _this.specSprint.forEach(function (spec) {
                if ((spec.failResults.length === 0) && (spec.passResults.length !== 0)) {
                    _this.passedResultsCount++;
                }
                if (spec.failResults.length !== 0) {
                    _this.failedResultsCount++;
                }
            });
        });
    };
    ReportComponent.prototype.failureReasonGeneration = function () {
        if (this.initials.loginOne === false && this.initials.loginTwo === false && this.initials.saidClaimed === false && this.initials.deviceOnline === false) {
            this.failureReason = [];
            this.failureReason.push('The site is not accessible');
        }
        if (this.initials.loginOne === false && (this.initials.loginTwo === null || this.initials.saidClaimed === null || this.initials.deviceOnline === null)) {
            this.failureReason.push('For First Login, User ID or Password might be wrong');
        }
        if (this.initials.loginTwo === false && (this.initials.saidClaimed === null || this.initials.deviceOnline === null)) {
            this.failureReason.push('For Second Login, User ID or Password might be wrong');
        }
        if (this.initials.saidClaimed === false && (this.initials.deviceOnline === null)) {
            this.failureReason.push('SAID is UNCLAIMED');
        }
        if (this.initials.deviceOnline === false && (this.initials.loginOne === true || this.initials.loginTwo === true || this.initials.saidClaimed === true || this.initials.deviceOnline === true)) {
            this.failureReason.push('Device is OFFLINE');
        }
        console.log('failureReason' + this.failureReason);
    };
    ReportComponent.prototype.resultStatus = function (failResults, passResults) {
        if (failResults.length === 0) {
            return 'Pass';
        }
        if (failResults.length > 0) {
            return 'Fail';
        }
    };
    ReportComponent.prototype.displayTestcaseName = function (testcaseName, index) {
        if (index === 0) {
            this.testcaseprev = testcaseName;
            return true;
        }
        if (this.testcaseprev !== testcaseName) {
            this.testcaseprev = testcaseName;
            return true;
        }
        if (this.testcaseprev === testcaseName) {
            return false;
        }
    };
    ReportComponent.prototype.operationFailureStatements = function (code, attributeName, matcherName, actual, expected) {
        switch (code) {
            case 'sgv':
                return "Get Current value of " + attributeName + ", where expected value was " + expected + ", but value present was " + actual;
            case 'ssv':
                return "Set Value of " + attributeName + " to " + expected + ", where updation was not successfull, value reverted to " + actual;
            case 'sgr':
                var statementS = matcherName === 'toBeGreaterThanOrEqual' ? 'is lesser than lower range' : 'is greater than upper range';
                return "Get value of " + attributeName + " inside specified range, where " + actual + " " + statementS + " " + expected;
            case 'sgh':
                return "Check the history value of " + attributeName + ", where expected value was  " + expected + ", but value present was " + actual;
            case 'mg':
                return "Not able to push(GET) the attributes in Multi Attribute Tab";
            case 'msv':
                return "Not able to SET the attributes in Multi Attribute Tab";
            case 'dgv':
                return "Dependent Attribute " + attributeName + ", value expected was " + expected + ", but value present " + actual;
            case 'dgt':
                return "Dependent Attribute " + attributeName + ", updation time expected was " + expected + ", but value present " + actual;
            case 'dgr':
                var statementD = matcherName === 'toBeGreaterThanOrEqual' ? 'is lesser than lower range' : 'is greater than upper range';
                return "Dependent Attribute " + attributeName + " inside specified range, where " + actual + " " + statementD + " " + expected;
        }
    };
    ReportComponent.prototype.operationStatements = function (code, expected) {
        switch (code) {
            case 'sgv':
                return "GET (Current value), Expected: " + expected;
            case 'ssv':
                return "SET (Current value) to " + expected;
            case 'sgr':
                return "GET (value within range), Expected Range: " + expected;
            case 'sgh':
                return "GET/Verify (History value)";
            case 'mg':
                return "Multi GET";
            case 'msv':
                return "Multi SET";
            case 'dgv':
                return "Dependent Attribute: GET/Verify (Current value), Expected: " + expected;
            case 'dgt':
                return "Dependent Attribute: GET/Verify (Updation Time), Expected: " + expected;
            case 'dgr':
                return "Dependent Attribute: GET/Verify (value in range), Expected Range: " + expected;
        }
    };
    ReportComponent.prototype.actualValueArrayFunc = function (failResults, passResults) {
        var _this = this;
        this.actualValueArray = [];
        if (failResults.length >= 0 && passResults.length === 0) {
            failResults.forEach(function (result) {
                _this.actualValueArray.push(result.expected);
            });
        }
        if (passResults.length >= 0 && failResults.length === 0) {
            passResults.forEach(function (result) {
                _this.actualValueArray.push(result.expected);
            });
        }
        if (passResults.length >= 0 && failResults.length >= 0) {
            failResults.forEach(function (result) {
                _this.actualValueArray.push(result.expected);
            });
            passResults.forEach(function (result) {
                _this.actualValueArray.push(result.expected);
            });
        }
        return this.actualValueArray;
    };
    return ReportComponent;
}());
ReportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'report',
        template: __webpack_require__("../../../../../src/app/components/report/report.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/report/report.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__result_service__["a" /* ResultService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__result_service__["a" /* ResultService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__result_service__["a" /* ResultService */]) === "function" && _b || Object])
], ReportComponent);

var _a, _b;
//# sourceMappingURL=report.component.js.map

/***/ }),

/***/ "../../../../../src/app/result.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ResultService = (function () {
    function ResultService(http) {
        this.http = http;
        this.heroesUrl = 'assets/data.json';
        this.resultsUrl = 'assets/result.json';
        this.testRunResult = 'assets/result.json';
        this.megaThrowReport = 'assets/mega-throw.v2.json';
        this.failedResultsCount = 0;
        this.passedResultsCount = 0;
    }
    ResultService.prototype.getResults = function () {
        return this.http.get(this.testRunResult).pipe(
        // tap(heroes => this.log('fetched heroes')),
        // catchError(this.handleError('getHeroes', []))
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (data) { return data; }));
    };
    ResultService.prototype.getMegaThrowReport = function () {
        return this.http.get(this.megaThrowReport).pipe(
        // tap(heroes => this.log('fetched heroes')),
        // catchError(this.handleError('getHeroes', []))
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (data) { return data; }));
    };
    ResultService.prototype.failedResultsCountIncrement = function () {
        return ++this.failedResultsCount;
    };
    ResultService.prototype.passedResultsCountIncrement = function () {
        return ++this.passedResultsCount;
    };
    return ResultService;
}());
ResultService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ResultService);

var _a;
//# sourceMappingURL=result.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map