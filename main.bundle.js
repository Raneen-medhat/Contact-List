webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-contact/add-contact.component.css":
/***/ (function(module, exports) {

module.exports = "input.hidden {\r\n    position: absolute;\r\n    left: -9999px;\r\n}\r\ninput\r\n{\r\n    margin: 0 auto;\r\n    margin-bottom: 5px;\r\n}"

/***/ }),

/***/ "./src/app/add-contact/add-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\" customBg text-center m-auto \">\n    <div class=\"row\">\n<div class=\"col-sm-12\">\n<h3>Add new contact</h3>\n</div>\n<div class=\"col-sm-6 offset-sm-3\">\n<form name=\"AddForm\" #AddForm=\"ngForm\" (ngSubmit)=\"addContact(AddForm)\" novalidate>\n    <input id=\"profile-image-upload\" name=\"image\"  type=\"file\">\n        <input type=\"text\" class=\"form-control mb-3\"  placeholder=\"First Name\" ngModel name=\"firstName\"  #firstName=\"ngModel\"  required>\n        <div class=\"alert alert-danger mb-2\" role=\"alert\" *ngIf=\"firstName.touched && !firstName.valid\">\n          First Name is required\n        </div>\n\n        <input type=\"text\" class=\"form-control mb-3\"  placeholder=\"Last Name\" ngModel name=\"lastName\"\n          #lastName=\"ngModel\"  required>\n        <div class=\"alert alert-danger mb-2\" role=\"alert\" *ngIf=\"lastName.touched && !lastName.valid\">\n          Last Name is required\n        </div>\n\n        <input type=\"text\" class=\"form-control mb-3\" placeholder=\"Email Address\" ngModel name=\"email\" #email=\"ngModel\" required/>\n        <div class=\"alert alert-danger mb-2\" role=\"alert\" *ngIf=\"email.touched && !email.valid\">\n          Email is required\n        </div>\n        <button [disabled]=\"!AddForm.valid\" type=\"submit\" class=\"d-block w-100 mb-2 p-2 add\">Add Contact</button>\n        <button class=\"d-block w-100 mb-2 p-2 btn-danger \" (click)=\"redirect()\">Cancel</button>\n</form>\n</div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/add-contact/add-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddContactComponent = /** @class */ (function () {
    function AddContactComponent(route, http) {
        this.route = route;
        this.http = http;
        this.formArr = [];
    }
    AddContactComponent.prototype.getData = function (sendD) {
        return this.http.get(sendD);
    };
    AddContactComponent.prototype.redirect = function () {
        this.route.navigate(['//']);
    };
    AddContactComponent.prototype.addContact = function (data) {
        if (!data.valid) {
            console.log("error");
        }
        else {
            console.log("Form Submitted!");
            console.log(data.value);
            this.route.navigate(['//'], { queryParams: data.value, queryParamsHandling: 'merge' });
            this.formArr.push(data.value);
            console.log(this.formArr);
            console.log(this.formArr[0]["firstName"][0]);
        }
        console.log("values" + data.value);
    };
    AddContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-contact',
            template: __webpack_require__("./src/app/add-contact/add-contact.component.html"),
            styles: [__webpack_require__("./src/app/add-contact/add-contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AddContactComponent);
    return AddContactComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filter_pipe__ = __webpack_require__("./src/app/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_contact_add_contact_component__ = __webpack_require__("./src/app/add-contact/add-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__query_service__ = __webpack_require__("./src/app/query.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contactlist_contactlist_component__ = __webpack_require__("./src/app/contactlist/contactlist.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Modules imports




//Components imports






//route
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__contactlist_contactlist_component__["a" /* ContactlistComponent */] },
    { path: 'AddContact', component: __WEBPACK_IMPORTED_MODULE_6__add_contact_add_contact_component__["a" /* AddContactComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_6__add_contact_add_contact_component__["a" /* AddContactComponent */],
                __WEBPACK_IMPORTED_MODULE_9__contactlist_contactlist_component__["a" /* ContactlistComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__query_service__["a" /* QueryService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contactlist/contactlist.component.css":
/***/ (function(module, exports) {

module.exports = "#search{\r\n    margin-bottom: 15px;\r\n    border: 2px solid #00B4CC;\r\n    outline: none;\r\n    color: #9DBFAF;\r\n    }\r\n    #search:focus{\r\n      color: #00B4CC;\r\n    }\r\n    .left-side\r\n    {\r\n      background: #00B4CC;\r\n      text-align: center;\r\n      margin-bottom: 20px;\r\n      position: fixed;\r\n      padding: 20px;\r\n     \r\n    }\r\n    .left-side a{\r\n      color: white;\r\n    }\r\n    .block {\r\n        overflow: hidden;\r\n        -webkit-box-shadow: 1px 1px #ddd;\r\n                box-shadow: 1px 1px #ddd;  }\r\n    .block h6 {\r\n        margin: 0;\r\n      }\r\n    hr{\r\n        margin-top: 0\r\n      }\r\n    .block img {\r\n        width: 50px;\r\n        height: 50px;\r\n        float: left;\r\n        margin: 0 1rem 0 0;\r\n        border-radius: 50%\r\n      }\r\n     \r\n     \r\n    "

/***/ }),

/***/ "./src/app/contactlist/contactlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\" customBg \">\n      <div class=\"row\">\n        <div class=\"col-sm-10\">\n            <input id=\"search\" [(ngModel)]=\"searchText\" placeholder=\"search text goes here\" class=\"p-2 w-100 searchTerm\">\n            <button class=\"add w-100 p-2\" routerLink=\"/AddContact\">Add new contact</button>\n\n            <h3 >Latest Contacts</h3>\n            <div class=\"latest\" *ngFor=\"let latest of recentContactsArr | filter : searchText\">\n              <div class=\"block\" >\n                <img src=\"https://placeimg.com/640/480/people\" alt=\"\">\n                <h6>{{ latest.firstName}} {{ latest.lastName}}</h6>\n                <p>{{ latest.email }} </p>\n              </div>\n              <hr>\n            </div>\n  \n            <div  *ngFor=\"let key of AlphapaticArr\">\n              <h4 class=\"hide\" id=\"{{key}}\">\n                {{key | uppercase}}\n                </h4>\n            <div *ngFor=\"let x of data[key] | filter : searchText \"> \n                <div class=\"block\" >\n                <img src=\"https://placeimg.com/640/480/people\" alt=\"\">\n                <h5>{{ x.firstName}} {{ x.lastName}}</h5>\n                <p>{{ x.email }} </p>\n              </div>\n              <hr>\n          </div>\n          </div>\n        </div>\n        <div class=\"col-sm-2\">\n          <div class=\"left-side\">\n            <div *ngFor=\"let key of AlphapaticArr  \">\n                <a href=\"#{{key}}\"> {{key | uppercase}}</a> \n             </div> \n            </div>     \n        </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/contactlist/contactlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__query_service__ = __webpack_require__("./src/app/query.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactlistComponent = /** @class */ (function () {
    function ContactlistComponent(q, c) {
        var _this = this;
        this.q = q;
        this.c = c;
        this.formAdd = [];
        this.c.queryParams.subscribe(function (params) {
            return _this.formAdd.push(params);
        });
        this.latestContact = {};
        this.data = {};
        this.contactsArr = [];
        this.recentContactsArr = [];
        this.AlphapaticArr = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', ' k', 'l',
            'm', 'n', 'o', ' p', 'q', 'r', 's', ' t', 'u', 'v', 'w', 'x', 'y', 'z'
        ];
        this.getContactData();
        this.getRecentContactData();
    }
    ContactlistComponent.prototype.getContactData = function () {
        var _this = this;
        var path = '././assets/contacts.json';
        this.q.getData(path).subscribe(function (res) {
            _this.contacts = res;
            for (var iterator in _this.contacts) {
                if (_this.contacts[iterator].constructor === Array) {
                    _this.contactsArr = _this.contacts[iterator];
                }
            }
            for (var user = 0; user < _this.contactsArr.length; user++) {
                if (_this.contactsArr[user]['firstName']) {
                    var fChar = _this.contactsArr[user]['firstName'].toLowerCase()[0];
                    if (_this.data[fChar]) {
                        _this.data[fChar].push(_this.contactsArr[user]);
                    }
                    else {
                        _this.data["" + fChar] = [];
                        _this.data[fChar].push(_this.contactsArr[user]);
                    }
                }
            }
            for (var key in _this.data) {
                if (_this.formAdd[0]['firstName'][0].toLowerCase() == key) {
                    _this.data[key].push(_this.formAdd[0]);
                }
            }
        }, function (err) { console.log(err); });
    };
    ContactlistComponent.prototype.getRecentContactData = function () {
        var _this = this;
        var path = '././assets/recent-contact.json';
        this.q.getData(path).subscribe(function (res) {
            _this.latestContact = res;
            for (var iterator in _this.latestContact) {
                if (_this.latestContact[iterator].constructor === Array) {
                    _this.recentContactsArr = _this.latestContact[iterator];
                }
            }
            console.log(_this.recentContactsArr);
        }, function (err) { console.log(err); });
    };
    ContactlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contactlist',
            template: __webpack_require__("./src/app/contactlist/contactlist.component.html"),
            styles: [__webpack_require__("./src/app/contactlist/contactlist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__query_service__["a" /* QueryService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ContactlistComponent);
    return ContactlistComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            var fullName = it.firstName + " " + it.lastName;
            if (fullName != null) {
                return fullName.toLowerCase().includes(searchText);
            }
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/query.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QueryService = /** @class */ (function () {
    function QueryService(http) {
        this.http = http;
    }
    QueryService.prototype.getData = function (path) {
        return this.http.get(path);
    };
    QueryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QueryService);
    return QueryService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map