webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home/home.module": [
		"../../../../../src/app/home/home.module.ts",
		"home.module"
	],
	"./work/work.module": [
		"../../../../../src/app/work/work.module.ts",
		"work.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navigation></app-navigation>\n\n<div [@routerTransition]=\"o.isActivated && o.activatedRoute.routeConfig.path\">\n  <router-outlet #o=\"outlet\"></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations_router_transition__ = __webpack_require__("../../../../../src/app/shared/animations/router.transition.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__shared_animations_router_transition__["a" /* routerTransition */]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_service_worker__ = __webpack_require__("../../../service-worker/esm5/service-worker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_service_worker__["a" /* ServiceWorkerModule */].register('/ngsw-worker.js', {
                    enabled: __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].production
                }),
                __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
var AppRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'work',
        loadChildren: './work/work.module#WorkModule'
    },
    { path: '**', redirectTo: '' }
];


/***/ }),

/***/ "../../../../../src/app/shared/animations/router.transition.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ANIMATE_ON_ROUTE_ENTER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routerTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var ANIMATE_ON_ROUTE_ENTER = 'route-enter-staggered';
var routerTransition = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* trigger */])('routerTransition', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])('* <=> *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter, :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ position: 'fixed', width: '100%' }), {
            optional: true
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter .' + ANIMATE_ON_ROUTE_ENTER, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ opacity: 0 }), {
            optional: true
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ transform: 'translateY(-3%)', opacity: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s 0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ transform: 'translateY(0%)', opacity: 1 }))
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ transform: 'translateY(0%)', opacity: 1 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.2s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ transform: 'translateY(-3%)', opacity: 0 }))
            ], { optional: true })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter .' + ANIMATE_ON_ROUTE_ENTER, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* stagger */])(100, [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ transform: 'translateY(15%)', opacity: 0 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ transform: 'translateY(0%)', opacity: 1 }))
        ]), { optional: true })
    ])
]);


/***/ }),

/***/ "../../../../../src/app/shared/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return components; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/shared/components/navigation/navigation.component.ts");
/* unused harmony namespace reexport */

var components = [__WEBPACK_IMPORTED_MODULE_0__navigation_navigation_component__["a" /* NavigationComponent */]];



/***/ }),

/***/ "../../../../../src/app/shared/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"\">\n      <div class=\"logo\">\n        <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"40px\"\n          viewBox=\"0 0 464.667 500\" enable-background=\"new 0 0 464.667 500\" xml:space=\"preserve\">\n          <g id=\"Layer_1\" display=\"none\">\n            <circle display=\"inline\" fill=\"#ff5722\" cx=\"-204.947\" cy=\"-116.502\" r=\"109.538\" />\n            <path display=\"inline\" fill=\"#FFFFFF\" d=\"M-197.27-97.755c2.277,2.277,2.276,5.966,0,8.242l-63.937,63.938\n                            c-2.275,2.274-5.965,2.275-8.242-0.002l-27.254-27.254c-2.276-2.276-2.276-5.967-0.001-8.242l63.937-63.937\n                            c2.276-2.275,5.966-2.275,8.242,0.001L-197.27-97.755z\" />\n            <path display=\"inline\" fill=\"#FFFFFF\" d=\"M-108.823-186.202c2.277,2.277,2.278,5.964,0,8.242l-63.937,63.937\n                            c-2.274,2.274-5.963,2.274-8.24-0.002l-27.254-27.254c-2.276-2.276-2.277-5.966-0.002-8.24l63.937-63.937\n                            c2.277-2.278,5.966-2.276,8.242,0L-108.823-186.202z\" />\n            <path display=\"inline\" fill=\"#FFFFFF\" d=\"M-186.608-136.788c2.908,2.908,4.333,6.188,3.19,7.331l-28.694,28.694\n                            c-1.144,1.144-4.423-0.283-7.331-3.19l0,0c-2.901-2.901-4.33-6.183-3.187-7.326l28.694-28.694\n                            C-192.792-141.117-189.51-139.689-186.608-136.788L-186.608-136.788z\" />\n\n            <text transform=\"matrix(0.9605 0 0 1 -69.2104 -17.999)\" display=\"inline\" fill=\"#ff5722\" font-family=\"'MongolianBaiti'\" font-size=\"260.9138\">ThiccBoi</text>\n            <circle display=\"inline\" fill=\"#ff5722\" cx=\"-204.947\" cy=\"267.498\" r=\"109.538\" />\n            <polygon display=\"inline\" fill=\"#FFFFFF\" points=\"-141,240 -276,240 -276,210.451 -141,189 \t\" />\n            <polygon display=\"inline\" fill=\"#FFFFFF\" points=\"-197,350 -235,342 -235,234 -197,234 \t\" />\n\n            <line display=\"inline\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"5\" stroke-miterlimit=\"10\" x1=\"-109\" y1=\"171\" x2=\"-307\"\n              y2=\"208\" />\n\n            <line display=\"inline\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"5\" stroke-miterlimit=\"10\" x1=\"-310\" y1=\"331\" x2=\"-130\"\n              y2=\"377\" />\n            <circle display=\"inline\" fill=\"#ff5722\" cx=\"-212.982\" cy=\"544.525\" r=\"109.538\" />\n\n            <text transform=\"matrix(1.1154 0 0 1 -254.1475 643.083)\" display=\"inline\" fill=\"#F5F5F5\" font-family=\"'MicrosoftTaiLe-Bold'\"\n              font-size=\"174.1551\">R</text>\n            <rect x=\"-239.035\" y=\"460.361\" display=\"inline\" fill=\"#F5F5F5\" width=\"31\" height=\"183.666\" />\n            <polygon display=\"inline\" fill=\"#F5F5F5\" points=\"-157.035,482.361 -308.368,482.361 -293.035,457.694 -157.035,457.694 \t\" />\n            <circle display=\"inline\" fill=\"#ff5722\" cx=\"-892.947\" cy=\"-483.502\" r=\"109.538\" />\n            <path display=\"inline\" fill=\"#FFFFFF\" d=\"M-947.952-386.149c-2.586,3.01-7.06,3.407-9.992,0.887l-20.73-17.815\n                            c-2.932-2.52-3.212-7.002-0.625-10.012l122.65-142.715c2.587-3.01,7.061-3.407,9.993-0.887l20.73,17.815\n                            c2.932,2.52,3.212,7.002,0.625,10.012L-947.952-386.149z\" />\n            <path display=\"inline\" fill=\"#FFFFFF\" d=\"M-915.662-494.495c-0.976,1.135-2.235,1.652-2.813,1.156l-4.089-3.515\n                            c-0.579-0.497-0.256-1.82,0.719-2.956l46.259-53.826c0.976-1.136,2.235-1.653,2.814-1.156l4.089,3.515\n                            c0.579,0.497,0.256,1.82-0.719,2.955L-915.662-494.495z\" />\n            <g display=\"inline\">\n              <polygon fill=\"#ff5722\" points=\"-973.485,-404.755 -998.346,-394.558 -1010.319,-348.226 -966.045,-366.385 -959.321,-392.401\n                                \" />\n              <path fill=\"#FFFFFF\" d=\"M-982.359-375.719c-1.21,1.387-3.315,1.531-4.703,0.321l0,0c-1.388-1.21-1.531-3.316-0.321-4.704\n                                l25.415-29.139c1.21-1.387,3.316-1.531,4.704-0.321l0,0c1.388,1.21,1.531,3.316,0.321,4.703L-982.359-375.719z\"\n              />\n              <circle fill=\"#FFFFFF\" cx=\"-987.063\" cy=\"-375.398\" r=\"6.333\" />\n            </g>\n\n            <line display=\"inline\" fill=\"none\" stroke=\"#ff5722\" stroke-width=\"5\" stroke-miterlimit=\"10\" x1=\"-875.75\" y1=\"-537.5\" x2=\"-826.75\"\n              y2=\"-496.75\" />\n            <circle display=\"inline\" fill=\"#ff5722\" cx=\"-466.059\" cy=\"361.512\" r=\"109.538\" />\n\n            <text transform=\"matrix(1 0 0 1 -580.7422 517.042)\" display=\"inline\" fill=\"#F5F5F5\" font-family=\"'ToxigenesisRg-Bold'\" font-size=\"306.0409\">T</text>\n\n            <line display=\"inline\" fill=\"#ff5722\" stroke=\"#ff5722\" stroke-width=\"5\" stroke-miterlimit=\"10\" x1=\"-1014\" y1=\"-343\" x2=\"210\"\n              y2=\"-343\" />\n\n            <text transform=\"matrix(1 0 0 1 -198.001 -343.6318)\" display=\"inline\" fill=\"#ff5722\" font-family=\"'CaviarDreams'\" font-size=\"149.25\">Russell</text>\n            <g display=\"inline\">\n              <path fill=\"#ff5722\" d=\"M-742.592-21.859h2.013h46.55c33.007,0,49.511,11.055,49.511,33.164c0,4.252-0.728,8.178-2.181,11.777\n                                c-1.456,3.601-3.509,6.846-6.166,9.737c-2.655,2.891-5.866,5.386-9.627,7.482c-3.763,2.099-7.953,3.742-12.567,4.933v0.34\n                                c2.023,0.567,3.983,1.488,5.881,2.764c1.896,1.275,3.73,2.764,5.501,4.465c1.77,1.7,3.462,3.529,5.074,5.484\n                                c1.613,1.956,3.083,3.869,4.411,5.74l9.304,13.05c6.068-13.612,9.446-28.687,9.446-44.552\n                                c0-60.496-49.042-109.537-109.538-109.537c-40.702,0-76.218,22.201-95.103,55.152H-742.592z\"\n              />\n              <path fill=\"#ff5722\" d=\"M-711.956-1.28v33.929h13.279c6.576,0,16.856-1.7,20.84-5.102c4.045-3.457,6.064-7.738,6.07-12.841\n                                C-671.75,0-683.881-1.28-698.108-1.28H-711.956z\" />\n              <path fill=\"#ff5722\" d=\"M-684.83,68.704c-1.581-2.381-3.099-4.507-4.553-6.377c-1.455-1.871-2.925-3.473-4.41-4.805\n                                c-1.487-1.332-3.035-2.353-4.648-3.062c-1.612-0.708-3.367-1.063-5.264-1.063h-8.251v46.686h-30.636V0.505h-36.78v99.578h-30.731\n                                V0.505h-39.655c-3.092,10.129-4.76,20.879-4.76,32.021c0,60.496,49.042,109.538,109.538,109.538\n                                c33.43,0,63.357-14.98,83.449-38.59L-684.83,68.704z\" />\n            </g>\n          </g>\n          <g id=\"Layer_2\">\n            <circle fill=\"#ff5722\" cx=\"240.986\" cy=\"223.63\" r=\"222.701\" />\n            <path fill=\"#FFFFFF\" d=\"M129.155,421.557c-5.258,6.122-14.354,6.927-20.314,1.806l-42.146-36.222\n                            c-5.961-5.123-6.53-14.235-1.272-20.354L314.781,76.632c5.261-6.119,14.355-6.926,20.318-1.804l42.146,36.221\n                            c5.961,5.124,6.529,14.237,1.27,20.356L129.155,421.557z\" />\n            <path fill=\"#FFFFFF\" d=\"M194.803,201.281c-1.983,2.308-4.543,3.359-5.72,2.35l-8.312-7.146c-1.178-1.01-0.521-3.701,1.46-6.009\n                            l94.05-109.435c1.982-2.31,4.545-3.36,5.722-2.35l8.313,7.146c1.175,1.01,0.52,3.701-1.462,6.008L194.803,201.281z\"\n            />\n            <g>\n              <polygon fill=\"#ff5722\" points=\"77.244,383.729 26.699,404.462 2.356,498.659 92.371,461.742 106.04,408.848 \t\t\" />\n              <path fill=\"#FFFFFF\" d=\"M59.202,442.766c-2.46,2.818-6.74,3.112-9.562,0.65l0,0c-2.823-2.461-3.113-6.741-0.652-9.563\n                                l51.672-59.242c2.459-2.822,6.741-3.114,9.563-0.653l0,0c2.821,2.462,3.112,6.741,0.652,9.563L59.202,442.766z\"\n              />\n              <path fill=\"#FFFFFF\" d=\"M59.342,451.88c-4.674,5.359-12.807,5.915-18.167,1.241c-5.359-4.674-5.915-12.809-1.24-18.167\n                                c4.675-5.36,12.809-5.917,18.167-1.242C63.462,438.389,64.018,446.521,59.342,451.88z\" />\n            </g>\n\n            <line fill=\"none\" stroke=\"#ff5722\" stroke-width=\"5\" stroke-miterlimit=\"10\" x1=\"275.948\" y1=\"113.847\" x2=\"375.571\" y2=\"196.696\"\n            />\n          </g>\n        </svg>\n      </div>\n\n      <span class=\"text\">Taylor Russell</span>\n    </a>\n\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"mailto:the.taylor.russell@gmail.com\">Contact</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
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

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/shared/components/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__("../../../../../src/app/shared/components/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
            exports: __WEBPACK_IMPORTED_MODULE_3__components__["a" /* components */].slice(),
            declarations: __WEBPACK_IMPORTED_MODULE_3__components__["a" /* components */].slice(),
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map