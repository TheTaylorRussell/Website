webpackJsonp(["home.module"],{

/***/ "../../../../../src/app/home/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"contact\">\n  <div class=\"inner-container\">\n    <h5 class=\"text-center\">CONTACT ME</h5>\n\n    <ul class=\"c-list c-list--segmented\">\n      <li class=\"c-list__item\">\n        <a href=\"mailto:the.taylor.russell@gmail.com\">\n          <h4>Email</h4>\n          <p>the.taylor.russell@gmail.com</p>\n        </a>\n      </li>\n      <li class=\"c-list__item\">\n        <a href=\"https://www.linkedin.com/in/taylor-russell-0b042357/\">\n          <h4>LinkedIn</h4>\n          <p>\n            <span>linkedin.com/in/</span>taylor-russell-0b042357</p>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/components/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#contact .inner-container {\n  padding: 0 25%; }\n\n@media (min-width: 300px) {\n  #contact .inner-container {\n    padding: 0; } }\n\n.c-list {\n  padding: 0;\n  list-style: none; }\n\n.c-list .c-list__item {\n  margin-bottom: 1vh;\n  color: #555; }\n\n.c-list--segmented .c-list__item:hover {\n  opacity: 1;\n  background: #dedede;\n  -webkit-transform: scale(1.03);\n  transform: scale(1.03); }\n\n.c-list--segmented .c-list__item {\n  margin-bottom: 2vh;\n  padding: 1.25rem;\n  cursor: pointer;\n  border: 1px solid #dedede;\n  border-radius: 6px;\n  transition: all 0.24s cubic-bezier(0.215, 0.61, 0.355, 1);\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  will-change: auto;\n  text-rendering: auto; }\n\n.c-list--segmented .c-list__item a {\n  display: block;\n  text-decoration: none;\n  color: #555; }\n\n@media (min-width: 680px) {\n  .c-list--segmented .c-list__item {\n    opacity: 0.8; } }\n\n.c-list--segmented .c-list__item h4 {\n  margin-bottom: 1rem;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  line-height: 1.5;\n  text-transform: uppercase;\n  letter-spacing: 0.1rem; }\n\n.c-list--segmented .c-list__item p {\n  margin-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/home/components/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/components/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/components/featured-works/featured-works.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"works\">\n\n  <h5 class=\"text-center\">FEATURED WORK</h5>\n\n  <div class=\"row\">\n    <div class=\"col-md-4 work-card small-text\">\n      <figure class=\"effect-sadie\">\n        <img src=\"assets/img/home/featured-smokeout.png\" class=\"img-fluid\">\n        <figcaption>\n          <h2>Smoke\n            <span>Out</span>\n          </h2>\n          <span class=\"company\">American Cancer Society</span>\n          <p>Anti-smoking campaign</p>\n          <a routerLink=\"/work/smokeout\">View more</a>\n        </figcaption>\n      </figure>\n    </div>\n    <div class=\"col-md-4 work-card small-text\">\n      <figure class=\"effect-sadie\">\n        <img src=\"assets/img/home/featured-yogabba.png\" class=\"img-fluid\">\n        <figcaption>\n          <h2>Yo Gabba\n            <span>Gabba</span>\n          </h2>\n          <span class=\"company\">Nick Jr.</span>\n          <p>Animated short for TV's\n            <br>Yo Gabba Gabba</p>\n          <a routerLink=\"/work/yogabbagabba\">View more</a>\n        </figcaption>\n      </figure>\n    </div>\n    <div class=\"col-md-4 work-card small-text\">\n      <figure class=\"effect-sadie\">\n        <img src=\"assets/img/home/featured-gameicons.png\" class=\"img-fluid\">\n        <figcaption>\n          <h2>App\n            <span>Iconography</span>\n          </h2>\n          <span class=\"company\">FEMA</span>\n          <p>Icons for instructional fire-safety\n            <br> measurements iPhone game.</p>\n          <a routerLink=\"/work/fema\">View more</a>\n        </figcaption>\n      </figure>\n    </div>\n    <div class=\"col-md-4 work-card small-text\">\n      <figure class=\"effect-sadie\">\n        <img src=\"assets/img/home/featured-holidaycards.png\" class=\"img-fluid\">\n        <figcaption>\n          <h2>Holiday\n            <span>Cards</span>\n          </h2>\n          <span class=\"company\">CTEC</span>\n          <p>Customer holiday cards depicting\n            <br>seasonal figures and traditions</p>\n          <a routerLink=\"/work/holidaycards\">View more</a>\n        </figcaption>\n      </figure>\n    </div>\n    <div class=\"col-md-4 work-card small-text\">\n      <figure class=\"effect-sadie\">\n        <img src=\"assets/img/home/featured-dau.png\" class=\"img-fluid\">\n        <figcaption>\n          <h2>Training\n            <span>Campaign</span>\n          </h2>\n          <span class=\"company\">Defense Acquisition University</span>\n          <p>Training material to help veterans\n            <br>build their professional careers</p>\n          <a routerLink=\"/work/dau\">View more</a>\n        </figcaption>\n      </figure>\n    </div>\n    <div class=\"col-md-4 work-card small-text\">\n      <figure class=\"effect-sadie\">\n        <img src=\"assets/img/home/featured-wizardcomp.png\" class=\"img-fluid\">\n        <figcaption>\n          <h2>Comic\n            <span>Cover</span>\n          </h2>\n          <span class=\"company\"></span>\n          <p>Promotional poster for\n            <br>The Happening at Fulton's Chimney</p>\n          <a routerLink=\"/work/comic\">View more</a>\n        </figcaption>\n      </figure>\n    </div>\n  </div>\n  <hr>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/components/featured-works/featured-works.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".work-item img {\n  -webkit-filter: grayscale(0%);\n  -moz-filter: grayscale(0%);\n  filter: grayscale(0%);\n  transition-property: all;\n  transition-duration: 1s;\n  transition-timing-function: ease; }\n\n.work-item:hover img {\n  -webkit-filter: grayscale(0%);\n  -moz-filter: grayscale(0%);\n  filter: grayscale(0%);\n  -webkit-transform: scale(1.1, 1.1);\n          transform: scale(1.1, 1.1); }\n\n.work-section.professional {\n  background-image: linear-gradient(135deg, #feb692 10%, #ea5455 100%); }\n\n.work-section.personal {\n  background-image: linear-gradient(135deg, #43cbff 10%, #9708cc 100%); }\n\n.work-section.commissions {\n  background-image: linear-gradient(135deg, #ffe985 10%, #fa742b 100%); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/featured-works/featured-works.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedWorksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeaturedWorksComponent = (function () {
    function FeaturedWorksComponent() {
    }
    FeaturedWorksComponent.prototype.ngOnInit = function () {
    };
    FeaturedWorksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-featured-works',
            template: __webpack_require__("../../../../../src/app/home/components/featured-works/featured-works.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/components/featured-works/featured-works.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturedWorksComponent);
    return FeaturedWorksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return components; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_contact_component__ = __webpack_require__("../../../../../src/app/home/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__featured_works_featured_works_component__ = __webpack_require__("../../../../../src/app/home/components/featured-works/featured-works.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jumbotron_jumbotron_component__ = __webpack_require__("../../../../../src/app/home/components/jumbotron/jumbotron.component.ts");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */



var components = [
    __WEBPACK_IMPORTED_MODULE_0__contact_contact_component__["a" /* ContactComponent */],
    __WEBPACK_IMPORTED_MODULE_1__featured_works_featured_works_component__["a" /* FeaturedWorksComponent */],
    __WEBPACK_IMPORTED_MODULE_2__jumbotron_jumbotron_component__["a" /* JumbotronComponent */]
];





/***/ }),

/***/ "../../../../../src/app/home/components/jumbotron/jumbotron.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"container about-me\">\n    <p class=\"text-center\">Hello my name is\n      <br>\n      <span class=\"name\">Taylor Russell</span>\n      <br> I'm an Interactive Designer and Animator residing in Northern Virginia.\n    </p>\n  </div>\n  <hr>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/components/jumbotron/jumbotron.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about-me {\n  margin-top: 100px;\n  padding: 35px 0; }\n  .about-me p {\n    margin: 35px auto;\n    width: 50%;\n    font-size: 1.2em;\n    line-height: 1.8em;\n    color: #4a4a4a; }\n\n@media only screen and (max-width: 500px) {\n  .about-me p {\n    width: 85%; } }\n\n.name {\n  margin: 5px 0;\n  font-weight: 800;\n  font-size: 2em;\n  letter-spacing: -1px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/jumbotron/jumbotron.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JumbotronComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JumbotronComponent = (function () {
    function JumbotronComponent() {
    }
    JumbotronComponent.prototype.ngOnInit = function () {
    };
    JumbotronComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-jumbotron',
            template: __webpack_require__("../../../../../src/app/home/components/jumbotron/jumbotron.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/components/jumbotron/jumbotron.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], JumbotronComponent);
    return JumbotronComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/containers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return containers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_main_component__ = __webpack_require__("../../../../../src/app/home/containers/main/main.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__main_main_component__["a"]; });

var containers = [__WEBPACK_IMPORTED_MODULE_0__main_main_component__["a" /* MainComponent */]];



/***/ }),

/***/ "../../../../../src/app/home/containers/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<app-jumbotron></app-jumbotron>\n<app-featured-works></app-featured-works>\n<app-contact></app-contact>\n"

/***/ }),

/***/ "../../../../../src/app/home/containers/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/containers/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations_router_transition__ = __webpack_require__("../../../../../src/app/shared/animations/router.transition.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () { };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/home/containers/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/containers/main/main.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__shared_animations_router_transition__["a" /* routerTransition */]]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__("../../../../../src/app/home/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers__ = __webpack_require__("../../../../../src/app/home/containers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_routing__ = __webpack_require__("../../../../../src/app/home/home.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__home_routing__["a" /* HomeRoutes */]), __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]],
            declarations: __WEBPACK_IMPORTED_MODULE_4__containers__["b" /* containers */].concat(__WEBPACK_IMPORTED_MODULE_3__components__["a" /* components */]),
            exports: __WEBPACK_IMPORTED_MODULE_4__containers__["b" /* containers */].concat(__WEBPACK_IMPORTED_MODULE_3__components__["a" /* components */]),
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__containers__ = __webpack_require__("../../../../../src/app/home/containers/index.ts");

var HomeRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__containers__["a" /* MainComponent */]
    }
];


/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map