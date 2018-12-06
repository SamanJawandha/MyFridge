webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__food_data_service__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeListComponent = (function () {
    function HomeListComponent(foodDataService) {
        var _this = this;
        this.foodDataService = foodDataService;
        this.getIndexOfFood = function (foodId) {
            return _this.foods.findIndex(function (food) {
                return food._id === foodId;
            });
        };
        this.deleteFood = function (foodId) {
            var idx = _this.getIndexOfFood(foodId);
            if (idx !== -1) {
                _this.foods.splice(idx, 1);
                _this.selectFood(null);
            }
            return _this.foods;
        };
        this.addFood = function (food) {
            if (food.name !== "" && food.date !== "") {
                _this.foods.push(food);
                _this.selectFood(food);
            }
            return _this.foods;
        };
        this.updateFood = function (food) {
            var idx = _this.getIndexOfFood(food._id);
            if (idx !== -1) {
                _this.foods[idx] = food;
                _this.selectFood(food);
            }
            return _this.foods;
        };
    }
    HomeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.foodDataService
            .getFoods()
            .then(function (foods) {
            _this.foods = foods.map(function (food) {
                return food;
            });
        });
    };
    HomeListComponent.prototype.selectFood = function (food) {
        this.selectedFood = food;
    };
    HomeListComponent.prototype.createNewFood = function () {
        var food = {
            name: '',
            date: '',
            expiry: '',
            left_overs: '',
            quantity: ''
        };
        this.selectFood(food);
    };
    return HomeListComponent;
}());
HomeListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home-list',
        template: __webpack_require__(159),
        styles: [__webpack_require__(156)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__food_data_service__["a" /* FoodDataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__food_data_service__["a" /* FoodDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__food_data_service__["a" /* FoodDataService */]) === "function" && _a || Object])
], HomeListComponent);

var _a;
//# sourceMappingURL=home-list.component.js.map

/***/ }),

/***/ 101:
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

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"food\" class=\"row\">\n    <div class=\"col-md-12\">\n        <h2 *ngIf=\"food._id\">Food Details</h2>\n        <h2 *ngIf=\"!food._id\">New Food</h2>\n    </div>\n</div>\n<div *ngIf=\"food\" class=\"row\">\n        <form action=\"\">\n            <div class=\"form-group row\">\n                <label for=\"food-name\" class=\"col-sm-2 col-form-label\">Name</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" id=\"food-name\" name=\"food-name\" required=\"required\" [(ngModel)]=\"food.name\" placeholder=\"Name\">\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"food-date\" class=\"col-sm-2 col-form-label\">Date</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" id=\"food-date\" name=\"food-date\" required=\"required\" [(ngModel)]=\"food.date\" placeholder=\"Date\">\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"food-expiry\" class=\"col-sm-2 col-form-label\">Expiry</label>\n               <div class=\"col-sm-10\">\n                    <input class=\"form-control\" id=\"food-expiry\" name=\"food-expiry\" required=\"required\" [(ngModel)]=\"food.expiry\" placeholder=\"Expiry\">\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"food-left_over\" class=\"col-sm-2 col-form-label\">Left_Over</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" id=\"food-left_over\" name=\"food-left_over\" required=\"required\" [(ngModel)]=\"food.left_overs\" placeholder=\"Left_Over\">\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"food-quantity\" class=\"col-sm-2 col-form-label\">Quantity</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" id=\"food-quantity\" name=\"food-quantity\" required=\"required\" [(ngModel)]=\"food.quantity\" placeholder=\"Quantity\">\n                </div>\n            </div>\n            \n            <div class=\"form-group row\">\n                <div class=\"col-12\">\n                    <button class=\"btn btn-primary\" *ngIf=\"!food._id\" (click)=\"createFood(food)\">Create</button>\n\t\t            <button class=\"btn btn-info\" *ngIf=\"food._id\" (click)=\"updateFood(food)\">Update</button>\n\t\t            <button class=\"btn btn-danger\" *ngIf=\"food._id\" (click)=\"deleteFood(food._id)\">Delete</button>\n                </div>\n            </div>\n            <hr>\n        </form>\n    \n</div>"

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-toggleable-md navbar-inverse\"> \n    <div class=\"container\">\n        <span class=\"navbar-toggler-icon\"></span>\n        <a href=\"/ \" class=\"navbar-brand center\">MyFridge</a>\n    </div>\n</nav>\n<div class=\"container\"> \n    <router-outlet></router-outlet>\n    <footer> \n        <div class=\"row\">\n            <div class=\"col-12\"><small>&copy; Samanpreet 2018</small></div>\n        </div>\n    </footer>\n</div>\n"

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-5\">\n        <button class=\"btn btn-warning margin\" (click)=\"createNewFood()\">Create New</button>\n        <br/>\n    <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let food of foods\" (click)=\"selectFood(food)\">\n        <a class=\"text\">Name: {{food.name}}</a>\n        <p>Date: {{food.date | date }} </p>\n        <p>Expiry: {{food.expiry |date }}</p>\n        <p>Left-Overs: {{food.left_overs}}</p>\n        <p>Quantity: {{food.quantity}}</p>\n    </li>\n    </ul>\n    \n</div>\n    <div class=\"col-md-5 col-md-offset-2\">\n        <app-details-page\n              [food]=\"selectedFood\"\n              [createHandler]=\"addFood\"\n              [updateHandler]=\"updateFood\"\n              [deleteHandler]=\"deleteFood\">\n        </app-details-page>\n    </div>\n    \n</div>"

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(89);


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FoodDataService = (function () {
    function FoodDataService(http) {
        this.http = http;
        this.apiBaseUrl = 'http://localhost:3000/api/food';
    }
    FoodDataService.prototype.getFoods = function () {
        return this.http
            .get(this.apiBaseUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FoodDataService.prototype.createFood = function (newFood) {
        return this.http
            .post(this.apiBaseUrl, newFood)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FoodDataService.prototype.deleteFood = function (delFoodId) {
        return this.http
            .delete(this.apiBaseUrl + '/' + delFoodId)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FoodDataService.prototype.updateFood = function (putFood) {
        return this.http
            .put(this.apiBaseUrl + '/' + putFood._id, putFood)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FoodDataService.prototype.handleError = function (error) {
        console.error('Something has gone wrong', error);
        return Promise.reject(error.message || error);
    };
    return FoodDataService;
}());
FoodDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FoodDataService);

var _a;
//# sourceMappingURL=food-data.service.js.map

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 88;


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(101);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_list_home_list_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_framework_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__details_page_details_page_component__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__home_list_home_list_component__["a" /* HomeListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__framework_framework_component__["a" /* FrameworkComponent */],
            __WEBPACK_IMPORTED_MODULE_7__details_page_details_page_component__["a" /* DetailsPageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_5__home_list_home_list_component__["a" /* HomeListComponent */]
                }
            ])
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__framework_framework_component__["a" /* FrameworkComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__food_data_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__food__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsPageComponent = (function () {
    function DetailsPageComponent(foodService) {
        this.foodService = foodService;
    }
    DetailsPageComponent.prototype.createFood = function (food) {
        var _this = this;
        this.foodService.createFood(food)
            .then(function (newFood) {
            _this.createHandler(newFood);
        });
    };
    DetailsPageComponent.prototype.updateFood = function (food) {
        var _this = this;
        this.foodService.updateFood(food)
            .then(function (updatedFood) {
            _this.updateHandler(updatedFood);
        });
    };
    DetailsPageComponent.prototype.deleteFood = function (foodId) {
        var _this = this;
        this.foodService.deleteFood(foodId)
            .then(function (deletedFoodId) {
            _this.deleteHandler(deletedFoodId);
        });
    };
    return DetailsPageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__food__["a" /* Food */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__food__["a" /* Food */]) === "function" && _a || Object)
], DetailsPageComponent.prototype, "food", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], DetailsPageComponent.prototype, "createHandler", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], DetailsPageComponent.prototype, "updateHandler", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], DetailsPageComponent.prototype, "deleteHandler", void 0);
DetailsPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-details-page',
        template: __webpack_require__(157),
        styles: [__webpack_require__(154)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__food_data_service__["a" /* FoodDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__food_data_service__["a" /* FoodDataService */]) === "function" && _b || Object])
], DetailsPageComponent);

var _a, _b;
//# sourceMappingURL=details-page.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Food; });
var Food = (function () {
    function Food() {
    }
    return Food;
}());

//# sourceMappingURL=food.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrameworkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FrameworkComponent = (function () {
    function FrameworkComponent() {
    }
    FrameworkComponent.prototype.ngOnInit = function () { };
    return FrameworkComponent;
}());
FrameworkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-framework',
        template: __webpack_require__(158),
        styles: [__webpack_require__(155)]
    }),
    __metadata("design:paramtypes", [])
], FrameworkComponent);

//# sourceMappingURL=framework.component.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.bundle.js.map