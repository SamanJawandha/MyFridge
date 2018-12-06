webpackJsonp([1,4],{0:function(t,e,o){t.exports=o("x35b")},"53OA":function(t,e,o){"use strict";var n=o("3j3K"),r=o("fSVq");o.d(e,"a",function(){return d});var i=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var d=t.length-1;d>=0;d--)(r=t[d])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(){function t(t){var e=this;this.foodDataService=t,this.getIndexOfFood=function(t){return e.foods.findIndex(function(e){return e._id===t})},this.deleteFood=function(t,o){var n=e.getIndexOfFood(t);if(+o.quantity>1){var r=+o.quantity-1;o.quantity=""+r,e.ngOnInit(),e.selectFood(o)}else e.foods.splice(n,1),e.selectFood(null),e.ngOnInit();return e.foods},this.addFood=function(t){return""!==t.name&&""!==t.date&&(e.foods.push(t),e.selectFood(t)),e.foods},this.updateFood=function(t){var o=e.getIndexOfFood(t._id);return-1!==o&&(e.foods[o]=t,e.selectFood(t)),e.foods}}return t.prototype.ngOnInit=function(){var t=this;this.foodDataService.getFoods().then(function(e){t.foods=e.map(function(t){return t})})},t.prototype.selectFood=function(t){this.selectedFood=t},t.prototype.createNewFood=function(){var t={name:"",date:"",expiry:"",left_overs:"",quantity:""};this.selectFood(t)},t}();d=i([o.i(n._14)({selector:"app-home-list",template:o("l0FM"),styles:[o("8l0Z")],providers:[r.a]}),a("design:paramtypes",["function"==typeof(c=void 0!==r.a&&r.a)&&c||Object])],d);var c},"8l0Z":function(t,e,o){e=t.exports=o("FZ+f")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},Iksp:function(t,e,o){"use strict";var n=o("Qbdm"),r=o("3j3K"),i=o("NVOs"),a=o("Fzro"),d=o("5oXY"),c=o("53OA"),s=o("zHBK"),f=o("hyQN");o.d(e,"a",function(){return u});var l=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var d=t.length-1;d>=0;d--)(r=t[d])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},u=function(){function t(){}return t}();u=l([o.i(r.b)({declarations:[c.a,s.a,f.a],imports:[n.a,i.a,a.a,d.a.forRoot([{path:"",component:c.a}])],providers:[],bootstrap:[s.a]})],u)},JvNc:function(t,e,o){e=t.exports=o("FZ+f")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},MOVZ:function(t,e){function o(t){throw new Error("Cannot find module '"+t+"'.")}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id="MOVZ"},P321:function(t,e,o){"use strict";o.d(e,"a",function(){return n});var n=function(){function t(){}return t}()},fSVq:function(t,e,o){"use strict";var n=o("3j3K"),r=o("Fzro"),i=o("eErF");o.n(i);o.d(e,"a",function(){return c});var a=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var d=t.length-1;d>=0;d--)(r=t[d])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.http=t,this.apiBaseUrl="http://localhost:3000/api/food"}return t.prototype.getFoods=function(){return this.http.get(this.apiBaseUrl).toPromise().then(function(t){return t.json()}).catch(this.handleError)},t.prototype.createFood=function(t){return this.http.post(this.apiBaseUrl,t).toPromise().then(function(t){return t.json()}).catch(this.handleError)},t.prototype.deleteFood=function(t){return this.http.delete(this.apiBaseUrl+"/"+t).toPromise().then(function(t){return t.json()}).catch(this.handleError)},t.prototype.updateFood=function(t){return this.http.put(this.apiBaseUrl+"/"+t._id,t).toPromise().then(function(t){return t.json()}).catch(this.handleError)},t.prototype.handleError=function(t){return console.error("Something has gone wrong",t),Promise.reject(t.message||t)},t}();c=a([o.i(n.v)(),d("design:paramtypes",["function"==typeof(s=void 0!==r.b&&r.b)&&s||Object])],c);var s},hyQN:function(t,e,o){"use strict";var n=o("3j3K"),r=o("fSVq"),i=o("P321");o.d(e,"a",function(){return c});var a=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var d=t.length-1;d>=0;d--)(r=t[d])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.foodService=t}return t.prototype.createFood=function(t){var e=this;this.foodService.createFood(t).then(function(t){e.createHandler(t)})},t.prototype.deleteFood=function(t){var e=this;this.foodService.deleteFood(t._id).then(function(o){e.deleteHandler(o,t)})},t.prototype.updateFood=function(t){var e=this;this.foodService.updateFood(t).then(function(t){e.updateHandler(t)})},t}();a([o.i(n.m)(),d("design:type","function"==typeof(s=void 0!==i.a&&i.a)&&s||Object)],c.prototype,"food",void 0),a([o.i(n.m)(),d("design:type",Object)],c.prototype,"createHandler",void 0),a([o.i(n.m)(),d("design:type",Object)],c.prototype,"updateHandler",void 0),a([o.i(n.m)(),d("design:type",Object)],c.prototype,"deleteHandler",void 0),c=a([o.i(n._14)({selector:"app-details-page",template:o("r7O3"),styles:[o("zjeM")]}),d("design:paramtypes",["function"==typeof(f=void 0!==r.a&&r.a)&&f||Object])],c);var s,f},kZql:function(t,e,o){"use strict";o.d(e,"a",function(){return n});var n={production:!0}},l0FM:function(t,e){t.exports='<div class="row">\n\t<div class="col-md-5">\n        <button class="btn btn-warning margin" (click)="createNewFood()">Create New</button>\n        <br/>\n    <ul class="list-group">\n    <li class="list-group-item" *ngFor="let food of foods" (click)="selectFood(food)">\n        <a class="text">Name: {{food.name}}</a>\n        <p>Date: {{food.date | date }} </p>\n        <p>Expiry: {{food.expiry |date }}</p>\n        <p>Left-Overs: {{food.left_overs}}</p>\n        <p>Quantity: {{food.quantity}}</p>\n    </li>\n    </ul>\n    \n</div>\n    <div class="col-md-5 col-md-offset-2">\n        <app-details-page\n              [food]="selectedFood"\n              [createHandler]="addFood"\n              [updateHandler]="updateFood"\n              [deleteHandler]="deleteFood">\n        </app-details-page>\n    </div>\n    \n</div>'},p1YF:function(t,e){t.exports='<nav class="navbar fixed-top navbar-toggleable-md navbar-inverse"> \n    <div class="container">\n        <span class="navbar-toggler-icon"></span>\n        <a href="/ " class="navbar-brand">MyFridge</a>\n    </div>\n</nav>\n<div class="container"> \n    <router-outlet></router-outlet>\n    <footer> \n        <div class="row">\n            <div class="col-12"><small>&copy; Samanpreet 2018</small></div>\n        </div>\n    </footer>\n</div>\n'},r7O3:function(t,e){t.exports='<div *ngIf="food" class="row">\n    <div class="col-md-12">\n        <h2 *ngIf="food._id">Food Details</h2>\n        <h2 *ngIf="!food._id">New Food</h2>\n        <div *ngIf="formError" class="alert alert-danger" role="alert">\n            {{ formError }}\n        </div>\n    </div>\n</div>\n<div *ngIf="food" class="row">\n        <form action="">\n            <div class="form-group row">\n                <label for="food-name" class="col-sm-2 col-form-label">Name</label>\n                <div class="col-sm-10">\n                    <input class="form-control" id="food-name" name="food-name" required="required" [(ngModel)]="food.name" placeholder="Name">\n                </div>\n            </div>\n            <div class="form-group row">\n                <label for="food-date" class="col-sm-2 col-form-label">Date</label>\n                <div class="col-sm-10">\n                    <input class="form-control" id="food-date" name="food-date" required="required" [(ngModel)]="food.date" placeholder="Date">\n                </div>\n            </div>\n            <div class="form-group row">\n                <label for="food-expiry" class="col-sm-2 col-form-label">Expiry</label>\n               <div class="col-sm-10">\n                    <input class="form-control" id="food-expiry" name="food-expiry" required="required" [(ngModel)]="food.expiry" placeholder="Expiry">\n                </div>\n            </div>\n            <div class="form-group row">\n                <label for="food-left_over" class="col-sm-2 col-form-label">Left_Over</label>\n                <div class="col-sm-10">\n                    <input class="form-control" id="food-left_over" name="food-left_over" required="required" [(ngModel)]="food.left_overs" placeholder="Left_Over">\n                </div>\n            </div>\n            <div class="form-group row">\n                <label for="food-quantity" class="col-sm-2 col-form-label">Quantity</label>\n                <div class="col-sm-10">\n                    <input class="form-control" id="food-quantity" name="food-quantity" required="required" [(ngModel)]="food.quantity" placeholder="Quantity">\n                </div>\n            </div>\n            \n            <div class="form-group row">\n                <div class="col-12">\n                    <button class="btn btn-primary" *ngIf="!food._id" (click)="createFood(food)">Create</button>\n\t\t            <button class="btn btn-info" *ngIf="food._id" (click)="updateFood(food)">Update</button>\n\t\t            <button class="btn btn-danger" *ngIf="food._id" (click)="deleteFood(food)">Delete</button>\n                </div>\n            </div>\n            <hr>\n        </form>\n    \n</div>'},x35b:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("3j3K"),r=o("O61y"),i=o("Iksp");o("kZql").a.production&&o.i(n.a)(),o.i(r.a)().bootstrapModule(i.a)},zHBK:function(t,e,o){"use strict";var n=o("3j3K");o.d(e,"a",function(){return a});var r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var d=t.length-1;d>=0;d--)(r=t[d])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();a=r([o.i(n._14)({selector:"app-framework",template:o("p1YF"),styles:[o("JvNc")]}),i("design:paramtypes",[])],a)},zjeM:function(t,e,o){e=t.exports=o("FZ+f")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()}},[0]);