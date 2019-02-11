(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/chap-admin/chap-admin.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/chap-admin/chap-admin.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <app-chap-nav>\n\n        <div class=\"grid-container\">\n            <nav aria-label=\"breadcrumb\" class=\"mt-2 mr-2\">\n                <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item active mat-h1\" aria-current=\"page\"> Admin </li>\n                </ol>\n            </nav>\n\n            <mat-tab-group mat-stretch-tabs=\"always\">\n                <mat-tab >\n                    <ng-template mat-tab-label>\n                        <mat-icon class=\"mr-2 chap-red\">person</mat-icon> \n                            <span class=\"toolbar-icon chap-red\" > \n                                PROFILE \n                            </span>\n                    </ng-template>\n                    \n                        <app-chapchapadmin-main ></app-chapchapadmin-main> \n\n                </mat-tab>\n                <mat-tab>\n                    <ng-template mat-tab-label>\n                        <mat-icon class=\"toolbar-icon chap-red\">people</mat-icon> \n                            <span class=\"toolbar-icon chap-red\" >\n                                EMPLOYEES ON SYSTEM \n                            </span>\n                    </ng-template>\n            \n                         <app-chapchapadmin-emplist></app-chapchapadmin-emplist> \n            \n                </mat-tab>\n\n            </mat-tab-group>\n\n        </div>\n\n    </app-chap-nav>"

/***/ }),

/***/ "./src/app/admin/chap-admin/chap-admin.component.scss":
/*!************************************************************!*\
  !*** ./src/app/admin/chap-admin/chap-admin.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin-top: 60px;\n  height: 100vh; }\n\n.admin-set {\n  overflow-x: hidden; }\n"

/***/ }),

/***/ "./src/app/admin/chap-admin/chap-admin.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/chap-admin/chap-admin.component.ts ***!
  \**********************************************************/
/*! exports provided: ChapAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapAdminComponent", function() { return ChapAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChapAdminComponent = /** @class */ (function () {
    function ChapAdminComponent() {
    }
    ChapAdminComponent.prototype.ngOnInit = function () {
    };
    ChapAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chap-admin',
            template: __webpack_require__(/*! ./chap-admin.component.html */ "./src/app/admin/chap-admin/chap-admin.component.html"),
            styles: [__webpack_require__(/*! ./chap-admin.component.scss */ "./src/app/admin/chap-admin/chap-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChapAdminComponent);
    return ChapAdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/chapchapadmin-adduser/chapchapadmin-adduser.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/chapchapadmin-adduser/chapchapadmin-adduser.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-card-title>\n  <mat-icon class=\"toolbar-icon\">\n    <span class=\"chap-red\">\n      person_add\n    </span>\n  </mat-icon> \n    <span class=\"chap-red\"> \n      ADD MEMBER\n    </span>\n</mat-card-title>\n\n<!-- Form to add employees to the system -->\n<mat-card-content>\n  <form #addUserForm = ngForm >\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group \">\n          <label for=\"FormControlPhoto\">Add profile photo</label>\n          <img [src]=\"profileImage\" class=\"add-person\">\n          <input type=\"file\" class=\"form-control-file\" \n            #Image accept=\"image/*\" (change)=\"handleImageInput($event.target.files)\"\n            id=\"FormControlPhoto\" placeholder=\"Name\">\n        </div>\n        \n        <mat-form-field >\n          <input matInput placeholder=\"First Name\" required>\n        </mat-form-field>\n\n        <mat-form-field >\n          <input matInput placeholder=\"Last Name\" required>\n        </mat-form-field>\n\n    \n      </div>\n\n      <div class=\"col-md-6\"> \n        <mat-form-field>\n          <input matInput placeholder=\"Enter email\" required>\n          <mat-error *ngIf=\"email.invalid\"> {{getErrorMessage()}} </mat-error>\n        </mat-form-field>\n        \n        <mat-radio-group>\n          <mat-radio-button value=\"M\" class=\"mr-4\"> Male</mat-radio-button>\n          <mat-radio-button value=\"F\"> Female</mat-radio-button>\n        </mat-radio-group>\n\n        <mat-form-field >\n          <mat-select placeholder=\"Job Title:\">\n            <mat-option *ngFor=\"let role of job_description\" [value]=\"role.value\">\n              {{role.viewValue}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field >\n          <input matInput placeholder=\"Phone number\" required>\n          <mat-icon matSuffix class=\"chap-red\" >phone</mat-icon>\n          <mat-hint> Include area code </mat-hint>\n        </mat-form-field>\n\n        <mat-form-field >\n          <input matInput placeholder=\"Enter password\" [type]=\"hide ? 'password' : 'text'\">\n          <mat-icon matSuffix class=\"chap-red\" (click)=\"hide = !hide\"> {{ hide ? 'visibility' : 'visibility_off' }} </mat-icon>\n        </mat-form-field>\n\n        <mat-form-field >\n          <input matInput placeholder=\"Confirm password\" [type]=\"rehide ? 'password' : 'text'\">\n          <mat-icon matSuffix class=\"chap-red\" (click)=\"rehide = !rehide\"> {{ hide ? 'visibility' : 'visibility_off' }} </mat-icon>\n        </mat-form-field>\n\n        <button class=\"mr-4\" mat-raised-button (click)=\"onAdd()\"> <span class=\"chap-red\" > ADD </span> </button>\n        <button type=\"reset\" mat-button> <span class=\"color-green\" (click)=\"onReset()\" > RESET </span> </button>\n      </div>\n    </div>\n  </form>\n</mat-card-content>"

/***/ }),

/***/ "./src/app/admin/chapchapadmin-adduser/chapchapadmin-adduser.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/chapchapadmin-adduser/chapchapadmin-adduser.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/chapchapadmin-adduser/chapchapadmin-adduser.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin/chapchapadmin-adduser/chapchapadmin-adduser.component.ts ***!
  \********************************************************************************/
/*! exports provided: ChapchapadminAdduserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapadminAdduserComponent", function() { return ChapchapadminAdduserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_chapchap_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/chapchap-notifications.service */ "./src/app/shared/chapchap-notifications.service.ts");
/* harmony import */ var _model_companyroles_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../model/companyroles.model */ "./src/app/model/companyroles.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChapchapadminAdduserComponent = /** @class */ (function () {
    function ChapchapadminAdduserComponent(notificationService) {
        this.notificationService = notificationService;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.hide = true;
        this.rehide = true;
        this.job_description = _model_companyroles_model__WEBPACK_IMPORTED_MODULE_3__["roles"];
        this.profileImage = '../assets/img/avatar.gif';
        this.imageToUpload = null;
    }
    ChapchapadminAdduserComponent.prototype.ngOnInit = function () {
    };
    ChapchapadminAdduserComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' : '';
    };
    ChapchapadminAdduserComponent.prototype.onAdd = function () {
        this.notificationService.success(':: Submitted successfully');
    };
    ChapchapadminAdduserComponent.prototype.handleImageInput = function (file) {
        var _this = this;
        this.imageToUpload = file.item(0);
        // show image preview
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.profileImage = event.target.result;
        };
        reader.readAsDataURL(this.imageToUpload);
    };
    ChapchapadminAdduserComponent.prototype.onReset = function () {
        this.profileImage = '../assets/img/avatar.gif';
    };
    ChapchapadminAdduserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchapadmin-adduser',
            template: __webpack_require__(/*! ./chapchapadmin-adduser.component.html */ "./src/app/admin/chapchapadmin-adduser/chapchapadmin-adduser.component.html"),
            styles: [__webpack_require__(/*! ./chapchapadmin-adduser.component.scss */ "./src/app/admin/chapchapadmin-adduser/chapchapadmin-adduser.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_chapchap_notifications_service__WEBPACK_IMPORTED_MODULE_2__["ChapchapNotificationsService"]])
    ], ChapchapadminAdduserComponent);
    return ChapchapadminAdduserComponent;
}());



/***/ }),

/***/ "./src/app/admin/chapchapadmin-distributorslist/chapchapadmin-distributorslist.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/admin/chapchapadmin-distributorslist/chapchapadmin-distributorslist.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card class=\"mb-2 person-card-content\" *ngFor=\"let distributor of distributors\">\n  <mat-card-content>\n    <img src=\"{{ distributor.card_img }}\" class=\"img-round\" height=\"\" width=\"\">\n    <mat-card-title-group class=\"person-card-content ml-5\">\n      <mat-card-title>\n        {{ distributor.card_name }}\n      </mat-card-title>\n      <mat-card-subtitle>\n\n        {{ distributor.card_location }}\n\n        <br>\n\n        {{ distributor.card_phone }}\n\n      </mat-card-subtitle>\n    </mat-card-title-group>\n  </mat-card-content>\n  <mat-card-footer>\n    <button type=\"button\" mat-icon-button class=\"toolbar-icon\">\n      <fa-icon [icon]=\"['fab', 'twitter']\" size=\"2x\"></fa-icon>\n    </button>\n    <button type=\"button\" mat-icon-button class=\"toolbar-icon\">\n      <fa-icon [icon]=\"['fab', 'facebook']\" size=\"2x\"></fa-icon>\n    </button>\n    <button type=\"button\" mat-icon-button class=\"toolbar-icon\">\n      <fa-icon [icon]=\"['fab', 'whatsapp']\" size=\"2x\"></fa-icon>\n    </button>\n    <button type=\"button\" mat-icon-button class=\"toolbar-icon\">\n      <fa-icon [icon]=\"['fab', 'linkedin']\" size=\"2x\"></fa-icon>\n    </button>\n    <button type=\"button\" mat-icon-button class=\"toolbar-icon\">\n      <fa-icon [icon]=\"['far', 'envelope']\" size=\"2x\"></fa-icon>\n    </button>\n  </mat-card-footer>\n</mat-card>"

/***/ }),

/***/ "./src/app/admin/chapchapadmin-distributorslist/chapchapadmin-distributorslist.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/admin/chapchapadmin-distributorslist/chapchapadmin-distributorslist.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/chapchapadmin-distributorslist/chapchapadmin-distributorslist.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/chapchapadmin-distributorslist/chapchapadmin-distributorslist.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ChapchapadminDistributorslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapadminDistributorslistComponent", function() { return ChapchapadminDistributorslistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChapchapadminDistributorslistComponent = /** @class */ (function () {
    function ChapchapadminDistributorslistComponent() {
        this.distributors = [
            {
                card_img: '../../assets/img/team3.jpg',
                card_name: 'Opio James',
                card_location: 'Gulu',
                card_phone: '+256.752.000000'
            }, {
                card_img: '../../assets/img/team1.jpg',
                card_name: 'Aine Thomas',
                card_location: 'Mbarara',
                card_phone: '+256.752.000000'
            }, {
                card_img: '../../assets/img/team2.jpg',
                card_name: 'Anebakyo Quin',
                card_location: 'Mayuge',
                card_phone: '+256.752.000000'
            }, {
                card_img: '../../assets/img/team4.jpg',
                card_name: 'Sekitto Andre',
                card_location: 'Masaka',
                card_phone: '+256.752.000000'
            }, {
                card_img: '../../assets/img/team5.jpg',
                card_name: 'Ocen Peter',
                card_location: 'Amoro',
                card_phone: '+256.752.000000'
            }, {
                card_img: '../../assets/img/team6.jpg',
                card_name: 'Ongwen Federer',
                card_location: 'Kotido',
                card_phone: '+256.752.000000'
            }
        ];
    }
    ChapchapadminDistributorslistComponent.prototype.ngOnInit = function () {
    };
    ChapchapadminDistributorslistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchapadmin-distributorslist',
            template: __webpack_require__(/*! ./chapchapadmin-distributorslist.component.html */ "./src/app/admin/chapchapadmin-distributorslist/chapchapadmin-distributorslist.component.html"),
            styles: [__webpack_require__(/*! ./chapchapadmin-distributorslist.component.scss */ "./src/app/admin/chapchapadmin-distributorslist/chapchapadmin-distributorslist.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChapchapadminDistributorslistComponent);
    return ChapchapadminDistributorslistComponent;
}());



/***/ }),

/***/ "./src/app/admin/chapchapadmin-emplist/chapchapadmin-emplist.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/chapchapadmin-emplist/chapchapadmin-emplist.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-3\">\n  \n  <mat-grid-list cols=\"3\" rows=\"2\" >\n    \n      <mat-card class=\"mb-2 text-center \" *ngFor=\"let employee of employees\">\n        <mat-card-content>\n          <img src=\"{{ employee.card_img }}\" class=\"img-round\" height=\"\" width=\"\">\n          <mat-card-title-group class=\"person-card-content ml-5\">\n            <mat-card-title>\n              {{ employee.card_name }}\n            </mat-card-title>\n            <mat-card-subtitle>\n      \n              {{ employee.card_location }}\n      \n              <br>\n      \n              {{ employee.card_phone }}\n      \n            </mat-card-subtitle>\n          </mat-card-title-group>\n        </mat-card-content>\n      </mat-card>\n\n    \n  </mat-grid-list>\n  \n</div>\n\n    "

/***/ }),

/***/ "./src/app/admin/chapchapadmin-emplist/chapchapadmin-emplist.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/chapchapadmin-emplist/chapchapadmin-emplist.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/chapchapadmin-emplist/chapchapadmin-emplist.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin/chapchapadmin-emplist/chapchapadmin-emplist.component.ts ***!
  \********************************************************************************/
/*! exports provided: ChapchapadminEmplistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapadminEmplistComponent", function() { return ChapchapadminEmplistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChapchapadminEmplistComponent = /** @class */ (function () {
    function ChapchapadminEmplistComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.employees = [
            {
                card_img: '../../assets/img/team3.jpg',
                card_name: 'Opio James',
                card_location: 'Gulu',
                card_phone: '+256.752.000000'
            }, {
                card_img: '../../assets/img/team1.jpg',
                card_name: 'Aine Thomas',
                card_location: 'Mbarara',
                card_phone: '+256.752.000000'
            }, {
                card_img: '../../assets/img/team2.jpg',
                card_name: 'Anebakyo Quin',
                card_location: 'Mayuge',
                card_phone: '+256.752.000000'
            }, {
                card_img: '../../assets/img/team4.jpg',
                card_name: 'Sekitto Andre',
                card_location: 'Masaka',
                card_phone: '+256.752.000000'
            }, {
                card_img: '../../assets/img/team5.jpg',
                card_name: 'Ocen Peter',
                card_location: 'Amoro',
                card_phone: '+256.752.000000'
            }, {
                card_img: '../../assets/img/team6.jpg',
                card_name: 'Ongwen Federer',
                card_location: 'Kotido',
                card_phone: '+256.752.000000'
            }
        ];
    }
    ChapchapadminEmplistComponent.prototype.ngOnInit = function () {
    };
    ChapchapadminEmplistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchapadmin-emplist',
            template: __webpack_require__(/*! ./chapchapadmin-emplist.component.html */ "./src/app/admin/chapchapadmin-emplist/chapchapadmin-emplist.component.html"),
            styles: [__webpack_require__(/*! ./chapchapadmin-emplist.component.scss */ "./src/app/admin/chapchapadmin-emplist/chapchapadmin-emplist.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], ChapchapadminEmplistComponent);
    return ChapchapadminEmplistComponent;
}());



/***/ }),

/***/ "./src/app/admin/chapchapadmin-main/chapchapadmin-main.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin/chapchapadmin-main/chapchapadmin-main.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row m-3\">\n  <div class=\"col-md-4 \">\n    <!-- Admin profile -->\n    <mat-card >\n      <img mat-card-image src=\"../../assets/img/user.png\">\n      <mat-card-header>\n        <mat-card-title-group>\n          <mat-card-title>\n            John Doe\n          </mat-card-title>\n          <mat-card-subtitle>\n            General Manager\n          </mat-card-subtitle>\n        </mat-card-title-group>\n      </mat-card-header>\n\n      <mat-card-content>\n        <p>\n          Company: Uniliver (U) Ltd\n        </p>\n        <p>\n          Kampala,Uganda\n        </p>\n\n      </mat-card-content>\n      \n    </mat-card>\n  </div>\n  \n  <div class=\"col-md-7\">\n    <!-- Add user -->\n    <!-- Add company user-->\n      <mat-card class=\" \">\n          <app-chapchapadmin-adduser></app-chapchapadmin-adduser>\n      </mat-card>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/chapchapadmin-main/chapchapadmin-main.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/admin/chapchapadmin-main/chapchapadmin-main.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/chapchapadmin-main/chapchapadmin-main.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/chapchapadmin-main/chapchapadmin-main.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChapchapadminMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapadminMainComponent", function() { return ChapchapadminMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChapchapadminMainComponent = /** @class */ (function () {
    function ChapchapadminMainComponent() {
    }
    ChapchapadminMainComponent.prototype.ngOnInit = function () {
    };
    ChapchapadminMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchapadmin-main',
            template: __webpack_require__(/*! ./chapchapadmin-main.component.html */ "./src/app/admin/chapchapadmin-main/chapchapadmin-main.component.html"),
            styles: [__webpack_require__(/*! ./chapchapadmin-main.component.scss */ "./src/app/admin/chapchapadmin-main/chapchapadmin-main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChapchapadminMainComponent);
    return ChapchapadminMainComponent;
}());



/***/ }),

/***/ "./src/app/app-material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app-material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"]
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _help_chapchap_help_chapchap_help_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help/chapchap-help/chapchap-help.component */ "./src/app/help/chapchap-help/chapchap-help.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chapchap_login_chapchap_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chapchap-login/chapchap-login.component */ "./src/app/chapchap-login/chapchap-login.component.ts");
/* harmony import */ var _shared_chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/chap-nav/chap-nav.component */ "./src/app/shared/chap-nav/chap-nav.component.ts");
/* harmony import */ var _chap_dashboard_chap_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chap-dashboard/chap-dashboard.component */ "./src/app/chap-dashboard/chap-dashboard.component.ts");
/* harmony import */ var _stats_chapchap_statistics_chapchap_statistics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stats/chapchap-statistics/chapchap-statistics.component */ "./src/app/stats/chapchap-statistics/chapchap-statistics.component.ts");
/* harmony import */ var _admin_chap_admin_chap_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/chap-admin/chap-admin.component */ "./src/app/admin/chap-admin/chap-admin.component.ts");
/* harmony import */ var _monitor_chapchap_monitor_panel_chapchap_monitor_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./monitor/chapchap-monitor-panel/chapchap-monitor-panel.component */ "./src/app/monitor/chapchap-monitor-panel/chapchap-monitor-panel.component.ts");
/* harmony import */ var _model_chapchap_revenue_table_chapchap_revenue_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./model/chapchap-revenue-table/chapchap-revenue-table.component */ "./src/app/model/chapchap-revenue-table/chapchap-revenue-table.component.ts");
/* harmony import */ var _model_chapchap_sales_table_chapchap_sales_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model/chapchap-sales-table/chapchap-sales-table.component */ "./src/app/model/chapchap-sales-table/chapchap-sales-table.component.ts");
/* harmony import */ var _chapchap_settings_chapchap_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chapchap-settings/chapchap-settings.component */ "./src/app/chapchap-settings/chapchap-settings.component.ts");
/* harmony import */ var _model_chapchap_distributor_list_chapchap_distributor_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./model/chapchap-distributor-list/chapchap-distributor-list.component */ "./src/app/model/chapchap-distributor-list/chapchap-distributor-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _chapchap_login_chapchap_login_component__WEBPACK_IMPORTED_MODULE_3__["ChapchapLoginComponent"]
    },
    {
        path: 'nav',
        component: _shared_chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_4__["ChapNavComponent"]
    },
    {
        path: 'dashboard',
        component: _chap_dashboard_chap_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["ChapDashboardComponent"]
    },
    {
        path: 'stats',
        component: _stats_chapchap_statistics_chapchap_statistics_component__WEBPACK_IMPORTED_MODULE_6__["ChapchapStatisticsComponent"]
    },
    {
        path: 'admin',
        component: _admin_chap_admin_chap_admin_component__WEBPACK_IMPORTED_MODULE_7__["ChapAdminComponent"]
    },
    {
        path: 'help',
        component: _help_chapchap_help_chapchap_help_component__WEBPACK_IMPORTED_MODULE_0__["ChapchapHelpComponent"]
    },
    {
        path: 'monitor',
        component: _monitor_chapchap_monitor_panel_chapchap_monitor_panel_component__WEBPACK_IMPORTED_MODULE_8__["ChapchapMonitorPanelComponent"]
    },
    {
        path: 'revenue',
        component: _model_chapchap_revenue_table_chapchap_revenue_table_component__WEBPACK_IMPORTED_MODULE_9__["ChapchapRevenueTableComponent"]
    },
    {
        path: 'sales',
        component: _model_chapchap_sales_table_chapchap_sales_table_component__WEBPACK_IMPORTED_MODULE_10__["ChapchapSalesTableComponent"]
    },
    {
        path: 'distributors',
        component: _model_chapchap_distributor_list_chapchap_distributor_list_component__WEBPACK_IMPORTED_MODULE_12__["ChapchapDistributorListComponent"]
    },
    {
        path: 'settings',
        component: _chapchap_settings_chapchap_settings_component__WEBPACK_IMPORTED_MODULE_11__["ChapchapSettingsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Show when loading -->\n<div [hidden]=\"!this.loading\" class=\"loader spin-round\">\n  <h2> Loading...... </h2>\n  <mat-spinner></mat-spinner>\n</div>\n<div [hidden]=\"this.loading\" class=\"loader\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spin-round {\n  margin: 250px 600px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'ChapChap manufacturer';
        this.loading = true;
    }
    // Loading method
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.loading = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
                _this.loading = false;
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _shared_alerts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/alerts.service */ "./src/app/shared/alerts.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm5/highcharts-angular.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chapchap_login_chapchap_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./chapchap-login/chapchap-login.component */ "./src/app/chapchap-login/chapchap-login.component.ts");
/* harmony import */ var _shared_chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/chap-nav/chap-nav.component */ "./src/app/shared/chap-nav/chap-nav.component.ts");
/* harmony import */ var _admin_chap_admin_chap_admin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/chap-admin/chap-admin.component */ "./src/app/admin/chap-admin/chap-admin.component.ts");
/* harmony import */ var _chap_dashboard_chap_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./chap-dashboard/chap-dashboard.component */ "./src/app/chap-dashboard/chap-dashboard.component.ts");
/* harmony import */ var _stats_chapchap_statistics_chapchap_statistics_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./stats/chapchap-statistics/chapchap-statistics.component */ "./src/app/stats/chapchap-statistics/chapchap-statistics.component.ts");
/* harmony import */ var _help_chapchap_help_chapchap_help_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./help/chapchap-help/chapchap-help.component */ "./src/app/help/chapchap-help/chapchap-help.component.ts");
/* harmony import */ var _monitor_chapchap_monitor_panel_chapchap_monitor_panel_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./monitor/chapchap-monitor-panel/chapchap-monitor-panel.component */ "./src/app/monitor/chapchap-monitor-panel/chapchap-monitor-panel.component.ts");
/* harmony import */ var _monitor_chapchap_monitor_map_chapchap_monitor_map_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./monitor/chapchap-monitor-map/chapchap-monitor-map.component */ "./src/app/monitor/chapchap-monitor-map/chapchap-monitor-map.component.ts");
/* harmony import */ var _monitor_chapchap_monitor_transact_chapchap_monitor_transact_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./monitor/chapchap-monitor-transact/chapchap-monitor-transact.component */ "./src/app/monitor/chapchap-monitor-transact/chapchap-monitor-transact.component.ts");
/* harmony import */ var _shared_chapchap_contact_chapchap_contact_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/chapchap-contact/chapchap-contact.component */ "./src/app/shared/chapchap-contact/chapchap-contact.component.ts");
/* harmony import */ var _shared_chapchap_distributor_chat_chapchap_distributor_chat_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/chapchap-distributor-chat/chapchap-distributor-chat.component */ "./src/app/shared/chapchap-distributor-chat/chapchap-distributor-chat.component.ts");
/* harmony import */ var _shared_chapchap_distributor_chatlist_chapchap_distributor_chatlist_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/chapchap-distributor-chatlist/chapchap-distributor-chatlist.component */ "./src/app/shared/chapchap-distributor-chatlist/chapchap-distributor-chatlist.component.ts");
/* harmony import */ var _stats_chapchap_productsales_chapchap_productsales_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./stats/chapchap-productsales/chapchap-productsales.component */ "./src/app/stats/chapchap-productsales/chapchap-productsales.component.ts");
/* harmony import */ var _stats_chapchap_productsalesgrowth_chapchap_productsalesgrowth_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./stats/chapchap-productsalesgrowth/chapchap-productsalesgrowth.component */ "./src/app/stats/chapchap-productsalesgrowth/chapchap-productsalesgrowth.component.ts");
/* harmony import */ var _stats_chapchap_productsalespie_chapchap_productsalespie_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./stats/chapchap-productsalespie/chapchap-productsalespie.component */ "./src/app/stats/chapchap-productsalespie/chapchap-productsalespie.component.ts");
/* harmony import */ var _model_chapchap_revenue_table_chapchap_revenue_table_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./model/chapchap-revenue-table/chapchap-revenue-table.component */ "./src/app/model/chapchap-revenue-table/chapchap-revenue-table.component.ts");
/* harmony import */ var _model_chapchap_sales_table_chapchap_sales_table_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./model/chapchap-sales-table/chapchap-sales-table.component */ "./src/app/model/chapchap-sales-table/chapchap-sales-table.component.ts");
/* harmony import */ var _admin_chapchapadmin_main_chapchapadmin_main_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin/chapchapadmin-main/chapchapadmin-main.component */ "./src/app/admin/chapchapadmin-main/chapchapadmin-main.component.ts");
/* harmony import */ var _admin_chapchapadmin_emplist_chapchapadmin_emplist_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin/chapchapadmin-emplist/chapchapadmin-emplist.component */ "./src/app/admin/chapchapadmin-emplist/chapchapadmin-emplist.component.ts");
/* harmony import */ var _admin_chapchapadmin_distributorslist_chapchapadmin_distributorslist_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./admin/chapchapadmin-distributorslist/chapchapadmin-distributorslist.component */ "./src/app/admin/chapchapadmin-distributorslist/chapchapadmin-distributorslist.component.ts");
/* harmony import */ var _admin_chapchapadmin_adduser_chapchapadmin_adduser_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./admin/chapchapadmin-adduser/chapchapadmin-adduser.component */ "./src/app/admin/chapchapadmin-adduser/chapchapadmin-adduser.component.ts");
/* harmony import */ var _chapchap_settings_chapchap_settings_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./chapchap-settings/chapchap-settings.component */ "./src/app/chapchap-settings/chapchap-settings.component.ts");
/* harmony import */ var _shared_chapchap_distributor_addnew_chapchap_distributor_addnew_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./shared/chapchap-distributor-addnew/chapchap-distributor-addnew.component */ "./src/app/shared/chapchap-distributor-addnew/chapchap-distributor-addnew.component.ts");
/* harmony import */ var _shared_chapchap_messages_chapchap_messages_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./shared/chapchap-messages/chapchap-messages.component */ "./src/app/shared/chapchap-messages/chapchap-messages.component.ts");
/* harmony import */ var _shared_chapchap_dialog_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./shared/chapchap-dialog.service */ "./src/app/shared/chapchap-dialog.service.ts");
/* harmony import */ var _chapchap_confirm_dialog_chapchap_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./chapchap-confirm-dialog/chapchap-confirm-dialog.component */ "./src/app/chapchap-confirm-dialog/chapchap-confirm-dialog.component.ts");
/* harmony import */ var _shared_chapchap_notifications_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./shared/chapchap-notifications.service */ "./src/app/shared/chapchap-notifications.service.ts");
/* harmony import */ var _shared_chapchap_distributor_detail_chapchap_distributor_detail_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./shared/chapchap-distributor-detail/chapchap-distributor-detail.component */ "./src/app/shared/chapchap-distributor-detail/chapchap-distributor-detail.component.ts");
/* harmony import */ var _model_chapchap_distributor_list_chapchap_distributor_list_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./model/chapchap-distributor-list/chapchap-distributor-list.component */ "./src/app/model/chapchap-distributor-list/chapchap-distributor-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














































// added icons to library for all access in all components
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faFacebook"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faTwitter"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faWhatsapp"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faLinkedin"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faEnvelope"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["fas"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faMapMarkedAlt"]);
var AppModule = /** @class */ (function () {
    function AppModule(overlayContainer) {
        overlayContainer.getContainerElement().classList.add('chapchap-light-theme');
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _chapchap_login_chapchap_login_component__WEBPACK_IMPORTED_MODULE_16__["ChapchapLoginComponent"],
                _shared_chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_17__["ChapNavComponent"],
                _chap_dashboard_chap_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["ChapDashboardComponent"],
                _stats_chapchap_statistics_chapchap_statistics_component__WEBPACK_IMPORTED_MODULE_20__["ChapchapStatisticsComponent"],
                _admin_chap_admin_chap_admin_component__WEBPACK_IMPORTED_MODULE_18__["ChapAdminComponent"],
                _help_chapchap_help_chapchap_help_component__WEBPACK_IMPORTED_MODULE_21__["ChapchapHelpComponent"],
                _monitor_chapchap_monitor_panel_chapchap_monitor_panel_component__WEBPACK_IMPORTED_MODULE_22__["ChapchapMonitorPanelComponent"],
                _monitor_chapchap_monitor_map_chapchap_monitor_map_component__WEBPACK_IMPORTED_MODULE_23__["ChapchapMonitorMapComponent"],
                _monitor_chapchap_monitor_transact_chapchap_monitor_transact_component__WEBPACK_IMPORTED_MODULE_24__["ChapchapMonitorTransactComponent"],
                _shared_chapchap_contact_chapchap_contact_component__WEBPACK_IMPORTED_MODULE_25__["ChapchapContactComponent"],
                _shared_chapchap_distributor_chat_chapchap_distributor_chat_component__WEBPACK_IMPORTED_MODULE_26__["ChapchapDistributorChatComponent"],
                _shared_chapchap_distributor_chatlist_chapchap_distributor_chatlist_component__WEBPACK_IMPORTED_MODULE_27__["ChapchapDistributorChatlistComponent"],
                _stats_chapchap_productsales_chapchap_productsales_component__WEBPACK_IMPORTED_MODULE_28__["ChapchapProductsalesComponent"],
                _stats_chapchap_productsalesgrowth_chapchap_productsalesgrowth_component__WEBPACK_IMPORTED_MODULE_29__["ChapchapProductsalesgrowthComponent"],
                _stats_chapchap_productsalespie_chapchap_productsalespie_component__WEBPACK_IMPORTED_MODULE_30__["ChapchapProductsalespieComponent"],
                _model_chapchap_revenue_table_chapchap_revenue_table_component__WEBPACK_IMPORTED_MODULE_31__["ChapchapRevenueTableComponent"],
                _model_chapchap_sales_table_chapchap_sales_table_component__WEBPACK_IMPORTED_MODULE_32__["ChapchapSalesTableComponent"],
                _admin_chapchapadmin_main_chapchapadmin_main_component__WEBPACK_IMPORTED_MODULE_33__["ChapchapadminMainComponent"],
                _admin_chapchapadmin_emplist_chapchapadmin_emplist_component__WEBPACK_IMPORTED_MODULE_34__["ChapchapadminEmplistComponent"],
                _admin_chapchapadmin_distributorslist_chapchapadmin_distributorslist_component__WEBPACK_IMPORTED_MODULE_35__["ChapchapadminDistributorslistComponent"],
                _admin_chapchapadmin_adduser_chapchapadmin_adduser_component__WEBPACK_IMPORTED_MODULE_36__["ChapchapadminAdduserComponent"],
                _chapchap_settings_chapchap_settings_component__WEBPACK_IMPORTED_MODULE_37__["ChapchapSettingsComponent"],
                _shared_chapchap_distributor_addnew_chapchap_distributor_addnew_component__WEBPACK_IMPORTED_MODULE_38__["ChapchapDistributorAddnewComponent"],
                _shared_chapchap_messages_chapchap_messages_component__WEBPACK_IMPORTED_MODULE_39__["ChapchapMessagesComponent"],
                _chapchap_confirm_dialog_chapchap_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_41__["ChapchapConfirmDialogComponent"],
                _shared_chapchap_distributor_detail_chapchap_distributor_detail_component__WEBPACK_IMPORTED_MODULE_43__["ChapchapDistributorDetailComponent"],
                _model_chapchap_distributor_list_chapchap_distributor_list_component__WEBPACK_IMPORTED_MODULE_44__["ChapchapDistributorListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_7__["AppMaterialModule"],
                highcharts_angular__WEBPACK_IMPORTED_MODULE_9__["HighchartsChartModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [
                _shared_alerts_service__WEBPACK_IMPORTED_MODULE_0__["AlertsService"],
                _shared_chapchap_dialog_service__WEBPACK_IMPORTED_MODULE_40__["ChapchapDialogService"],
                _shared_chapchap_notifications_service__WEBPACK_IMPORTED_MODULE_42__["ChapchapNotificationsService"]
            ],
            entryComponents: [
                _shared_chapchap_distributor_chatlist_chapchap_distributor_chatlist_component__WEBPACK_IMPORTED_MODULE_27__["ChapchapDistributorChatlistComponent"],
                _shared_chapchap_distributor_addnew_chapchap_distributor_addnew_component__WEBPACK_IMPORTED_MODULE_38__["ChapchapDistributorAddnewComponent"],
                _chapchap_confirm_dialog_chapchap_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_41__["ChapchapConfirmDialogComponent"],
                _shared_chapchap_distributor_detail_chapchap_distributor_detail_component__WEBPACK_IMPORTED_MODULE_43__["ChapchapDistributorDetailComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayContainer"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chap-dashboard/chap-dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/chap-dashboard/chap-dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-chap-nav>\n\n   <div class=\"grid-container\">\n\n    <nav aria-label=\"breadcrumb\" class=\"mt-2 mr-2\">\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item active mat-h1\" aria-current=\"page\">Dashboard</li>\n      </ol>\n    </nav>\n    <mat-grid-list cols=\"{{(isHandset$ | async) ? 1 : 2}}\" rowHeight=\"240px\">\n      <mat-grid-tile *ngFor=\"let card of cards | async\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\n        <mat-card matTooltip=\"{{ card.tool_tip }}\" matTooltipClass=\"tooltip-red\" aria-label=\"shows a red tooltip\" class=\"dashboard-card\">\n          <mat-card-header>\n            <mat-card-title>\n              <mat-icon> {{ card.card_icon }} </mat-icon>\n              <span class=\"font-weight-bold pt-1\"> {{card.title}} </span>\n              <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n                <span class=\"font-weight-normal\">\n                  <mat-icon>more_vert</mat-icon>\n                </span>\n              </button>\n              <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n                <button mat-menu-item routerLink=\"{{ card.card_link }}\">\n                  <mat-icon>launch</mat-icon> Expand\n                </button>\n                <button mat-menu-item>\n                  <mat-icon>visibility_off</mat-icon> Hide\n                </button>\n              </mat-menu>\n            </mat-card-title>\n          </mat-card-header>\n          <mat-card-content class=\"dashboard-card-content\">\n            <p>\n              <span class=\"display-4 font-weight-bold chap-red\">\n                {{ card.cvalue }}\n              </span>\n              <br>\n              <small class=\"text-muted\"> {{ card.cunit }} </small>\n            </p>\n          </mat-card-content>\n          <mat-card-footer class=\"text-center\">\n            <mat-icon > <span class=\" {{( card.trend > 50.0 ) ? 'color-green' : 'chap-red'}}\"> {{card.trend_icon }} </span> </mat-icon> {{card.trend}}%\n          </mat-card-footer>\n        </mat-card>\n      </mat-grid-tile>\n    </mat-grid-list>\n    \n    </div>\n\n</app-chap-nav>"

/***/ }),

/***/ "./src/app/chap-dashboard/chap-dashboard.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/chap-dashboard/chap-dashboard.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 60px;\n  height: 100vh; }\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px; }\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\n.dashboard-card-content {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/chap-dashboard/chap-dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/chap-dashboard/chap-dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: ChapDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapDashboardComponent", function() { return ChapDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChapDashboardComponent = /** @class */ (function () {
    function ChapDashboardComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) { return result.matches; }));
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                return [
                    {
                        title: 'Total Revenue', cols: 1, rows: 1, card_icon: 'business_center', cvalue: '335BN', cunit: 'UGX',
                        trend_icon: 'trending_up', trend: 80.0, trend_color: 'primary',
                        tool_tip: 'The total revenue got from sales', card_link: '/revenue'
                    },
                    {
                        title: 'Total Sales', cols: 1, rows: 1, card_icon: 'attach_money', cvalue: '586BN', cunit: 'UGX',
                        trend_icon: 'trending_down', trend: 26.4, trend_color: 'warn',
                        tool_tip: 'The total sales up to now', card_link: '/sales'
                    }
                ];
            }
            return [
                {
                    title: 'Total Revenue', cols: 1, rows: 1, card_icon: 'monetization_on', cvalue: '335BN', cunit: 'UGX',
                    trend_icon: 'trending_up', trend: 80.5, trend_color: 'primary',
                    tool_tip: 'The total revenue got from sales', card_link: '/revenue'
                },
                {
                    title: 'Total Sales', cols: 1, rows: 1, card_icon: 'attach_money', cvalue: '586BN', cunit: 'UGX',
                    trend_icon: 'trending_down', trend: 26.4, trend_color: 'warn',
                    tool_tip: 'The total sales up to now', card_link: '/sales'
                }
            ];
        }));
    }
    ChapDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chap-dashboard',
            template: __webpack_require__(/*! ./chap-dashboard.component.html */ "./src/app/chap-dashboard/chap-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./chap-dashboard.component.scss */ "./src/app/chap-dashboard/chap-dashboard.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], ChapDashboardComponent);
    return ChapDashboardComponent;
}());



/***/ }),

/***/ "./src/app/chapchap-confirm-dialog/chapchap-confirm-dialog.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/chapchap-confirm-dialog/chapchap-confirm-dialog.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div mat-dialog-content>\n    <p>\n      {{ data.message }}\n    </p>\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"false\" (click)=\"onNoClick()\" class=\"back-red\"> No </button>\n    <button mat-raised-button [mat-dialog-close]=\"true\" cdkFocusInitial class=\"back-green\"> Yes </button>\n  </div>\n"

/***/ }),

/***/ "./src/app/chapchap-confirm-dialog/chapchap-confirm-dialog.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/chapchap-confirm-dialog/chapchap-confirm-dialog.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chapchap-confirm-dialog/chapchap-confirm-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/chapchap-confirm-dialog/chapchap-confirm-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChapchapConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapConfirmDialogComponent", function() { return ChapchapConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ChapchapConfirmDialogComponent = /** @class */ (function () {
    function ChapchapConfirmDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ChapchapConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ChapchapConfirmDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close(false);
    };
    ChapchapConfirmDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchap-confirm-dialog',
            template: __webpack_require__(/*! ./chapchap-confirm-dialog.component.html */ "./src/app/chapchap-confirm-dialog/chapchap-confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./chapchap-confirm-dialog.component.scss */ "./src/app/chapchap-confirm-dialog/chapchap-confirm-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ChapchapConfirmDialogComponent);
    return ChapchapConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/chapchap-login/chapchap-login.component.html":
/*!**************************************************************!*\
  !*** ./src/app/chapchap-login/chapchap-login.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"login-box text-center\">\n  <mat-card class=\"login-card mt-2\">\n    <form class=\"form-signin pt-3 mat-typography\">\n      <h2 class=\"mat-display-1 font-weight-bold chap-red mb-0 chapbanner\"> Chapchap Manufacturer </h2>\n      <img class=\"mb-1\" src=\"../../assets/img/chapchaplogo.png\" alt=\"\" width=\"80\" height=\"80\">\n      <h1 class=\"h3 font-weight-normal \">\n        <span class=\"chap-red\"> \n          Please sign in\n        </span>\n        </h1>\n      <mat-form-field class=\"w-100\">\n        <input matInput placeholder=\"Phone number\" required >\n        <!-- <span matPrefix> +256 </span> -->\n        <mat-icon matSuffix class=\"chap-red\" >phone</mat-icon>\n      </mat-form-field>\n\n      <mat-form-field class=\"w-100\">\n        <input matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" required >\n        <mat-icon matSuffix class=\"chap-red\" (click)=\"hide = !hide\"> {{ hide ? 'visibility' : 'visibility_off' }} </mat-icon>\n      </mat-form-field>\n\n      <section class=\" mb-1\">\n        <mat-checkbox class=\"chap-red\" > Remember me </mat-checkbox>\n      </section>\n\n      <a [routerLink]=\"['/dashboard']\">\n        <button mat-raised-button class=\"btn btn-lg btn-danger chap-red btn-block mb-1\" type=\"submit\">Sign in</button>\n      </a>\n      \n      <a [routerLink]=\"['/dashboard']\">\n        <button mat-raised-button class=\"btn btn-lg btn-danger chap-red btn-block\" type=\"submit\">Register</button>\n      </a>\n\n      <p class=\"m-3 text-muted \"> © {{ current_year }} </p>\n    </form>\n  </mat-card>\n</mat-card>"

/***/ }),

/***/ "./src/app/chapchap-login/chapchap-login.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/chapchap-login/chapchap-login.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-box {\n  height: 100vh;\n  background-color: red !important; }\n\n.login-card {\n  height: 34rem;\n  background-color: #f5f5f5;\n  width: 20rem;\n  margin: 0 auto;\n  border-radius: 10px; }\n\n.form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto; }\n\n.form-signin .checkbox {\n  font-weight: 400; }\n\n.form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px; }\n\n.form-signin .form-control:focus {\n  z-index: 2; }\n\n#signin:hover {\n  background-color: #F73233 !important; }\n\n#signin {\n  border-radius: 20px !important; }\n\n.chapbanner {\n  font-family: 'Lobster', cursive; }\n"

/***/ }),

/***/ "./src/app/chapchap-login/chapchap-login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/chapchap-login/chapchap-login.component.ts ***!
  \************************************************************/
/*! exports provided: ChapchapLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapLoginComponent", function() { return ChapchapLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChapchapLoginComponent = /** @class */ (function () {
    function ChapchapLoginComponent() {
        this.hide = true;
        this.current_year = new Date().getFullYear();
    }
    ChapchapLoginComponent.prototype.ngOnInit = function () {
    };
    ChapchapLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchap-login',
            template: __webpack_require__(/*! ./chapchap-login.component.html */ "./src/app/chapchap-login/chapchap-login.component.html"),
            styles: [__webpack_require__(/*! ./chapchap-login.component.scss */ "./src/app/chapchap-login/chapchap-login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChapchapLoginComponent);
    return ChapchapLoginComponent;
}());



/***/ }),

/***/ "./src/app/chapchap-settings/chapchap-settings.component.html":
/*!********************************************************************!*\
  !*** ./src/app/chapchap-settings/chapchap-settings.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card>\n  <div class=\"grid-container\">\n    <nav aria-label=\"breadcrumb\" class=\"mt-2 mr-2\">\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item active mat-h1\" aria-current=\"page\"> Settings </li>\n      </ol>\n    </nav>\n\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <button [routerLink]=\"['/dashboard']\" mat-raised-button class=\"p-2\">\n          <mat-icon>keyboard_backspace</mat-icon>\n          <span class=\"chap-red\"> Dashboard </span>\n        </button>\n      </div>\n      <div class=\"col\">\n        <mat-button-toggle  (click)=\"changeTheme()\" class=\"m-2\">\n              <span class=\"chap-red \">\n                Change theme\n              </span>\n            <mat-icon> format_color_fill </mat-icon>\n        </mat-button-toggle>\n      </div>\n      \n    </div>\n\n    <div class=\"row card-body\">\n\n      <!-- Various settings of the app -->\n      <div class=\"col-md-6\">\n\n        <mat-card class=\" card my-2 mx-5 py-4 px-4\" *ngFor=\"let item of first\">\n          <div class=\"row\">\n            <div class=\"col-md-2 text-center pl-4 pt-2\">\n              <mat-icon mat-list-icon> {{ item.icon }} </mat-icon>\n            </div>\n            <div class=\"col-md-9\">\n              <h5 class=\"mt-0 chap-red font-weight-bold\"> {{ item.title }} </h5>\n              <p class=\"card-text\">\n                {{ item.sub }}\n              </p>\n\n            </div>\n          </div>\n        </mat-card>\n      </div>\n      <div class=\"col-md-6\">\n        <mat-card class=\" card my-2 mx-2 py-4 px-4\" *ngFor=\"let item of second\">\n          <div class=\"row\">\n            <div class=\"col-md-2 text-center pl-4 pt-2\">\n              <mat-icon mat-list-icon> {{ item.icon }} </mat-icon>\n            </div>\n            <div class=\"col-md-6 \">\n\n              <h5 class=\"mt-0 chap-red font-weight-bold\"> {{ item.title }} </h5>\n              <p class=\"card-text color-green\">\n                {{ item.sub }}\n              </p>\n\n            </div>\n          </div>\n        </mat-card>\n      </div>\n    </div>\n\n  </div>>\n</mat-card>"

/***/ }),

/***/ "./src/app/chapchap-settings/chapchap-settings.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/chapchap-settings/chapchap-settings.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chapchap-settings/chapchap-settings.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/chapchap-settings/chapchap-settings.component.ts ***!
  \******************************************************************/
/*! exports provided: ChapchapSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapSettingsComponent", function() { return ChapchapSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChapchapSettingsComponent = /** @class */ (function () {
    function ChapchapSettingsComponent() {
        this.first = [
            {
                title: 'Manufacturer Number',
                sub: 'CCM00001',
                icon: 'account_circle'
            },
            {
                title: 'Full Name',
                sub: 'John Doe',
                icon: 'person_outline'
            },
            {
                title: 'Phone Number',
                sub: '+256752000000',
                icon: 'call'
            },
            {
                title: 'Email Address',
                sub: 'johndoe@example.com',
                icon: 'mail_outline'
            }
        ];
        this.second = [
            {
                title: 'Password',
                sub: 'Reset your password',
                icon: 'vpn_key'
            },
            {
                title: 'Tin Number',
                sub: 'TIN4567893',
                icon: 'donut_large'
            },
            {
                title: 'Phone number',
                sub: '+25641235678',
                icon: 'stay_current_portrait'
            },
            {
                title: 'Physical Location',
                sub: '6th Street Industrial Area, Kampala',
                icon: 'place'
            }
        ];
    }
    ChapchapSettingsComponent.prototype.changeTheme = function () {
        if (document.body.classList.contains('chapchap-light-theme')) {
            document.body.classList.remove('chapchap-light-theme');
            document.body.classList.add('chapchap-dark-theme');
        }
        else {
            document.body.classList.remove('chapchap-dark-theme');
            document.body.classList.add('chapchap-light-theme');
        }
    };
    ChapchapSettingsComponent.prototype.ngOnInit = function () {
    };
    ChapchapSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchap-settings',
            template: __webpack_require__(/*! ./chapchap-settings.component.html */ "./src/app/chapchap-settings/chapchap-settings.component.html"),
            styles: [__webpack_require__(/*! ./chapchap-settings.component.scss */ "./src/app/chapchap-settings/chapchap-settings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChapchapSettingsComponent);
    return ChapchapSettingsComponent;
}());



/***/ }),

/***/ "./src/app/help/chapchap-help/chapchap-help.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/help/chapchap-help/chapchap-help.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-chap-nav>\n    <div class=\"grid-container\">\n        <nav aria-label=\"breadcrumb\" class=\"mt-2 mr-2\">\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item active mat-h1\" aria-current=\"page\"> Help </li>\n            </ol>\n        </nav>\n        <mat-tab-group mat-stretch-tabs=\"always\">\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <mat-icon class=\"mr-2 chap-red\">help_outline</mat-icon> <span class=\"toolbar-icon chap-red\" color=\"primary\"> HELP </span>\n                </ng-template>\n                <h1>Customer care Chat content goes here</h1>\n                <p>...</p>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <mat-icon class=\"toolbar-icon chap-red\">chat_bubble_outline</mat-icon> <span class=\"toolbar-icon chap-red\" color=\"primary\">\n                        CONTACT US </span>\n                </ng-template>\n\n                <app-chapchap-contact></app-chapchap-contact>\n    \n            </mat-tab>\n        </mat-tab-group>\n    </div>\n\n</app-chap-nav>"

/***/ }),

/***/ "./src/app/help/chapchap-help/chapchap-help.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/help/chapchap-help/chapchap-help.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 60px;\n  height: 100vh; }\n"

/***/ }),

/***/ "./src/app/help/chapchap-help/chapchap-help.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/help/chapchap-help/chapchap-help.component.ts ***!
  \***************************************************************/
/*! exports provided: ChapchapHelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapHelpComponent", function() { return ChapchapHelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChapchapHelpComponent = /** @class */ (function () {
    function ChapchapHelpComponent() {
    }
    ChapchapHelpComponent.prototype.ngOnInit = function () {
    };
    ChapchapHelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchap-help',
            template: __webpack_require__(/*! ./chapchap-help.component.html */ "./src/app/help/chapchap-help/chapchap-help.component.html"),
            styles: [__webpack_require__(/*! ./chapchap-help.component.scss */ "./src/app/help/chapchap-help/chapchap-help.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChapchapHelpComponent);
    return ChapchapHelpComponent;
}());



/***/ }),

/***/ "./src/app/model/chapchap-distributor-list/chapchap-distributor-list.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/model/chapchap-distributor-list/chapchap-distributor-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chap-nav>\n\n  <div class=\"grid-container\">\n    <nav aria-label=\"breadcrumb\" class=\"mt-2 mr-2\">\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item active mat-h1\" aria-current=\"page\"> Distributors </li>\n      </ol>\n    </nav>\n\n    <app-chapchap-messages class=\"chap-alert\"></app-chapchap-messages>\n  <div class=\"\">\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"searchKey\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n      <mat-icon matPrefix class=\"chap-red\">search</mat-icon>\n      <mat-icon matSuffix class=\"chap-red\" *ngIf=\"searchKey\" (click)=\"searchClear()\" >close_circle</mat-icon>\n    </mat-form-field>\n\n    <button mat-raised-button matTooltip=\"Add distributor\" matTooltipClass=\"tooltip-red\" class=\" float-right\" (click)=\"onCreate()\">\n      <mat-icon>\n        <span class=\"chap-red\">\n          person_add\n        </span>\n      </mat-icon>\n      <span class=\"chap-red\"> Add distributor </span>\n    </button>\n    </div>\n\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n\n      <!-- ID Column -->\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n      </ng-container>\n\n      <!-- Location Column -->\n      <ng-container matColumnDef=\"location\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Location </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.location}} </td>\n      </ng-container>\n\n      <!-- actions Column -->\n      <ng-container matColumnDef=\"actions\">\n        <th mat-header-cell *matHeaderCellDef> Actions </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <button mat-icon-button (click)=\"onView(row)\">\n            <mat-icon> launch</mat-icon>\n          </button>\n          <button mat-icon-button color=\"primary\" (click)=\"onDelete(row.id)\">\n            <mat-icon> delete_outline </mat-icon>\n          </button>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n\n  </div>\n</app-chap-nav>"

/***/ }),

/***/ "./src/app/model/chapchap-distributor-list/chapchap-distributor-list.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/model/chapchap-distributor-list/chapchap-distributor-list.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 60px; }\n\n.spin-round {\n  margin: 150px 300px; }\n\n.hide {\n  display: none; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 75%; }\n"

/***/ }),

/***/ "./src/app/model/chapchap-distributor-list/chapchap-distributor-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/model/chapchap-distributor-list/chapchap-distributor-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ChapchapDistributorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapDistributorListComponent", function() { return ChapchapDistributorListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_chapchap_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/chapchap-dialog.service */ "./src/app/shared/chapchap-dialog.service.ts");
/* harmony import */ var _shared_chapchap_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/chapchap-notifications.service */ "./src/app/shared/chapchap-notifications.service.ts");
/* harmony import */ var _shared_chapchap_distributor_addnew_chapchap_distributor_addnew_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/chapchap-distributor-addnew/chapchap-distributor-addnew.component */ "./src/app/shared/chapchap-distributor-addnew/chapchap-distributor-addnew.component.ts");
/* harmony import */ var _shared_chapchap_distributor_detail_chapchap_distributor_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/chapchap-distributor-detail/chapchap-distributor-detail.component */ "./src/app/shared/chapchap-distributor-detail/chapchap-distributor-detail.component.ts");
/* harmony import */ var _chapchap_distributor_table_datasource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chapchap-distributor-table-datasource */ "./src/app/model/chapchap-distributor-list/chapchap-distributor-table-datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChapchapDistributorListComponent = /** @class */ (function () {
    function ChapchapDistributorListComponent(dialog, dialogService, 
    //        private messageService: AlertsService,
    notificationService) {
        this.dialog = dialog;
        this.dialogService = dialogService;
        this.notificationService = notificationService;
        this.displayedColumns = ['id', 'name', 'location', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_chapchap_distributor_table_datasource__WEBPACK_IMPORTED_MODULE_6__["EXAMPLE_DATA"]);
    }
    ChapchapDistributorListComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    // Filter the table
    ChapchapDistributorListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    // Clear search input
    ChapchapDistributorListComponent.prototype.searchClear = function () {
        this.searchKey = '';
    };
    // create distributor
    ChapchapDistributorListComponent.prototype.onCreate = function () {
        var dialogRef = this.dialog.open(_shared_chapchap_distributor_addnew_chapchap_distributor_addnew_component__WEBPACK_IMPORTED_MODULE_4__["ChapchapDistributorAddnewComponent"], {
            width: '600px',
            height: '400px',
            autoFocus: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            //  this.animal = result;
        });
    };
    ChapchapDistributorListComponent.prototype.onView = function (row) {
        var dialogRef = this.dialog.open(_shared_chapchap_distributor_detail_chapchap_distributor_detail_component__WEBPACK_IMPORTED_MODULE_5__["ChapchapDistributorDetailComponent"], {
            width: '600px',
            height: '320px',
            autoFocus: true,
            data: {
                obj: row
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            //  this.animal = result;
        });
    };
    // Delete specified distributor
    ChapchapDistributorListComponent.prototype.onDelete = function (id) {
        var _this = this;
        console.log(id);
        this.dialogService.openConfirmDialog('Are you sure you want to delete this record?')
            .afterClosed().subscribe(function (res) {
            if (res) {
                // this.dataSource.deleteData(this.dataSource.data, id);
                //  this.messageService.add('Record deleted!');
                _this.notificationService.warn('! Deleted successfully');
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ChapchapDistributorListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ChapchapDistributorListComponent.prototype, "sort", void 0);
    ChapchapDistributorListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchap-distributor-list',
            template: __webpack_require__(/*! ./chapchap-distributor-list.component.html */ "./src/app/model/chapchap-distributor-list/chapchap-distributor-list.component.html"),
            styles: [__webpack_require__(/*! ./chapchap-distributor-list.component.scss */ "./src/app/model/chapchap-distributor-list/chapchap-distributor-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _shared_chapchap_dialog_service__WEBPACK_IMPORTED_MODULE_2__["ChapchapDialogService"],
            _shared_chapchap_notifications_service__WEBPACK_IMPORTED_MODULE_3__["ChapchapNotificationsService"]])
    ], ChapchapDistributorListComponent);
    return ChapchapDistributorListComponent;
}());



/***/ }),

/***/ "./src/app/model/chapchap-distributor-list/chapchap-distributor-table-datasource.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/model/chapchap-distributor-list/chapchap-distributor-table-datasource.ts ***!
  \******************************************************************************************/
/*! exports provided: EXAMPLE_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXAMPLE_DATA", function() { return EXAMPLE_DATA; });
var EXAMPLE_DATA = [
    { id: 1, name: 'Ali Kabuye', location: 'Kampala' },
    { id: 2, name: 'Mwiru Amos', location: 'Jinja' },
    { id: 3, name: 'Atim Patricia', location: 'Arua' },
    { id: 4, name: 'Kahunde Brenda', location: 'Masindi' },
    { id: 5, name: 'Ofwono Janet', location: 'Tororo' },
    { id: 6, name: 'Nakachwa Betty', location: 'Rakai' },
    { id: 7, name: 'Opio Jimmy', location: 'Soroti' },
    { id: 8, name: 'Batte Morris', location: 'Buikwe' },
    { id: 9, name: 'Assimwe Gift', location: 'Fort Portal' },
    { id: 10, name: 'Agaba Edward', location: 'Kampala' },
    { id: 11, name: 'Kigozi Daniel', location: 'Mpigi' },
    { id: 12, name: 'Atugonza Edith', location: 'Gulu' },
    { id: 13, name: 'Ocen Mark Jones', location: 'Nebbi' },
    { id: 14, name: 'Onyango Rooney', location: 'Kampala' },
    { id: 15, name: 'Nakaggwa Annet', location: 'Masaka' },
    { id: 16, name: 'Apio Mercy', location: 'Omoro' },
    { id: 17, name: 'Owori Fletcher', location: 'Busia' },
    { id: 18, name: 'Ssebweteme Kizito', location: 'Nakaseke' },
    { id: 19, name: 'Ainebyona Mark', location: 'Mbarara' },
    { id: 20, name: 'Ongwen Lokeris', location: 'Kotido' },
];


/***/ }),

/***/ "./src/app/model/chapchap-revenue-table/chapchap-revenue-table-datasource.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/model/chapchap-revenue-table/chapchap-revenue-table-datasource.ts ***!
  \***********************************************************************************/
/*! exports provided: EXAMPLE_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXAMPLE_DATA", function() { return EXAMPLE_DATA; });
// TODO: replace this with real data from your application
var EXAMPLE_DATA = [
    { id: 1, name: 'Ali Kabuye', date: new Date().toLocaleString(), revenue_yesterday: 150000, revenue_today: 150000, change: 18 },
    { id: 2, name: 'Mwiru Amos', date: new Date().toLocaleString(), revenue_yesterday: 6000000, revenue_today: 150000, change: 23 },
    { id: 3, name: 'Atim Patricia', date: new Date().toLocaleString(), revenue_yesterday: 741000, revenue_today: 150000, change: 27 },
    { id: 4, name: 'Kahunde Brenda', date: new Date().toLocaleString(), revenue_yesterday: 456000, revenue_today: 150000, change: 15 },
    { id: 5, name: 'Ofwono Janet', date: new Date().toLocaleString(), revenue_yesterday: 123000, revenue_today: 150000, change: 0 },
    { id: 6, name: 'Nakachwa Betty', date: new Date().toLocaleString(), revenue_yesterday: 7050000, revenue_today: 150000, change: 2 },
    { id: 7, name: 'Opio Jimmy', date: new Date().toLocaleString(), revenue_yesterday: 780000, revenue_today: 150000, change: 9 },
    { id: 8, name: 'Batte Morris', date: new Date().toLocaleString(), revenue_yesterday: 9510000, revenue_today: 150000, change: 38 },
    { id: 9, name: 'Assimwe Gift', date: new Date().toLocaleString(), revenue_yesterday: 8000000, revenue_today: 150000, change: 78 },
    { id: 10, name: 'Agaba Edward', date: new Date().toLocaleString(), revenue_yesterday: 51500000, revenue_today: 150000, change: 91 },
    { id: 11, name: 'Kigozi Daniel', date: new Date().toLocaleString(), revenue_yesterday: 4150000, revenue_today: 150000, change: 80 },
    { id: 12, name: 'Atugonza Edith', date: new Date().toLocaleString(), revenue_yesterday: 6150000, revenue_today: 150000, change: 73 },
    { id: 13, name: 'Ocen Mark Jones', date: new Date().toLocaleString(), revenue_yesterday: 8150000, revenue_today: 150000, change: 64 },
    { id: 14, name: 'Onyango Rooney', date: new Date().toLocaleString(), revenue_yesterday: 2500000, revenue_today: 150000, change: 87 },
    { id: 15, name: 'Nakaggwa Annet', date: new Date().toLocaleString(), revenue_yesterday: 4000000, revenue_today: 150000, change: 59 },
    { id: 16, name: 'Apio Mercy', date: new Date().toLocaleString(), revenue_yesterday: 3000000, revenue_today: 150000, change: 48 },
    { id: 17, name: 'Owori Fletcher', date: new Date().toLocaleString(), revenue_yesterday: 800000, revenue_today: 150000, change: 45 },
    { id: 18, name: 'Ssebweteme Kizito', date: new Date().toLocaleString(), revenue_yesterday: 900000, revenue_today: 150000, change: 5 },
    { id: 19, name: 'Ainebyona Mark', date: new Date().toLocaleString(), revenue_yesterday: 5780000, revenue_today: 150000, change: 31 },
    { id: 20, name: 'Ongwen Lokeris', date: new Date().toLocaleString(), revenue_yesterday: 200000, revenue_today: 150000, change: 25 },
];


/***/ }),

/***/ "./src/app/model/chapchap-revenue-table/chapchap-revenue-table.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/model/chapchap-revenue-table/chapchap-revenue-table.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chap-nav>\n  <div class=\"grid-container\">\n    <nav aria-label=\"breadcrumb\" class=\"mt-2 mr-2\">\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item active mat-h1\" aria-current=\"page\"> Revenue Summary </li>\n      </ol>\n    </nav>\n\n    <div class=\"\">\n      <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n        <mat-icon matSuffix class=\"chap-red\">search</mat-icon>\n      </mat-form-field>\n    </div>\n\n    <div class=\"mat-elevation-z8\">\n      <table mat-table #table [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n        <!-- Id Column -->\n        <ng-container matColumnDef=\"id\" >\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\n          <td mat-cell *matCellDef=\"let row\" class=\"m-2\">{{row.id}}</td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\" >\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n          <td mat-cell *matCellDef=\"let row\" class=\"m-2\">{{row.name}}</td>\n        </ng-container>\n\n        <!-- Date Column -->\n        <ng-container matColumnDef=\"date\" >\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Date</th>\n          <td mat-cell *matCellDef=\"let row\" class=\"m-2\">{{row.date}}</td>\n        </ng-container>\n\n        <!-- Revenue for yesterday Column -->\n        <ng-container matColumnDef=\"revenue_yesterday\" >\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Revenue <br> (Yesterday) </th>\n          <td mat-cell *matCellDef=\"let row\" class=\"m-4\">{{row.revenue_yesterday}}</td>\n        </ng-container>\n\n        <!-- Revenue for today Column -->\n        <ng-container matColumnDef=\"revenue_today\" class=\"m-4\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Revenue <br> (Today) </th>\n          <td mat-cell *matCellDef=\"let row\">{{row.revenue_today}}</td>\n        </ng-container>\n\n        <!-- Date Column -->\n        <ng-container matColumnDef=\"change\" >\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Change </th>\n          <td mat-cell *matCellDef=\"let row\" class=\"m-4\">\n            <span class=\" {{( row.change > 50.0 ) ? 'color-green' : 'chap-red'}}\">\n              {{row.change}}\n            </span>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n\n      <mat-paginator #paginator\n        [length]=\"dataSource.data.length\"\n        [pageIndex]=\"0\"\n        [pageSize]=\"10\"\n        [pageSizeOptions]=\"[10, 25, 50, 100, 250]\">\n      </mat-paginator>\n    </div>\n  </div>\n\n</app-chap-nav>"

/***/ }),

/***/ "./src/app/model/chapchap-revenue-table/chapchap-revenue-table.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/model/chapchap-revenue-table/chapchap-revenue-table.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 60px; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/model/chapchap-revenue-table/chapchap-revenue-table.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/model/chapchap-revenue-table/chapchap-revenue-table.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ChapchapRevenueTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapRevenueTableComponent", function() { return ChapchapRevenueTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _chapchap_revenue_table_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chapchap-revenue-table-datasource */ "./src/app/model/chapchap-revenue-table/chapchap-revenue-table-datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChapchapRevenueTableComponent = /** @class */ (function () {
    function ChapchapRevenueTableComponent() {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_chapchap_revenue_table_datasource__WEBPACK_IMPORTED_MODULE_2__["EXAMPLE_DATA"]);
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name', 'date', 'revenue_yesterday', 'revenue_today', 'change'];
    }
    ChapchapRevenueTableComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    // Filter the table
    ChapchapRevenueTableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ChapchapRevenueTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ChapchapRevenueTableComponent.prototype, "sort", void 0);
    ChapchapRevenueTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchap-revenue-table',
            template: __webpack_require__(/*! ./chapchap-revenue-table.component.html */ "./src/app/model/chapchap-revenue-table/chapchap-revenue-table.component.html"),
            styles: [__webpack_require__(/*! ./chapchap-revenue-table.component.scss */ "./src/app/model/chapchap-revenue-table/chapchap-revenue-table.component.scss")]
        })
    ], ChapchapRevenueTableComponent);
    return ChapchapRevenueTableComponent;
}());



/***/ }),

/***/ "./src/app/model/chapchap-sales-table/chapchap-sales-table-datasource.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/model/chapchap-sales-table/chapchap-sales-table-datasource.ts ***!
  \*******************************************************************************/
/*! exports provided: EXAMPLE_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXAMPLE_DATA", function() { return EXAMPLE_DATA; });
// TODO: replace this with real data from your application
var EXAMPLE_DATA = [
    { id: 1, name: 'Ali Kabuye', date: new Date(), sales: 150000 },
    { id: 2, name: 'Mwiru Amos', date: new Date(), sales: 6000000 },
    { id: 3, name: 'Atim Patricia', date: new Date(), sales: 741000 },
    { id: 4, name: 'Kahunde Brenda', date: new Date(), sales: 456000 },
    { id: 5, name: 'Ofwono Janet', date: new Date(), sales: 123000 },
    { id: 6, name: 'Nakachwa Betty', date: new Date(), sales: 7050000 },
    { id: 7, name: 'Opio Jimmy', date: new Date(), sales: 780000 },
    { id: 8, name: 'Batte Morris', date: new Date(), sales: 9510000 },
    { id: 9, name: 'Assimwe Gift', date: new Date(), sales: 8000000 },
    { id: 10, name: 'Agaba Edward', date: new Date(), sales: 51500000 },
    { id: 11, name: 'Kigozi Daniel', date: new Date(), sales: 4150000 },
    { id: 12, name: 'Atugonza Edith', date: new Date(), sales: 6150000 },
    { id: 13, name: 'Ocen Mark Jones', date: new Date(), sales: 8150000 },
    { id: 14, name: 'Onyango Rooney', date: new Date(), sales: 2500000 },
    { id: 15, name: 'Nakaggwa Annet', date: new Date(), sales: 4000000 },
    { id: 16, name: 'Apio Mercy', date: new Date(), sales: 3000000 },
    { id: 17, name: 'Owori Fletcher', date: new Date(), sales: 800000 },
    { id: 18, name: 'Ssebweteme Kizito', date: new Date(), sales: 900000 },
    { id: 19, name: 'Ainebyona Mark', date: new Date(), sales: 5780000 },
    { id: 20, name: 'Ongwen Lokeris', date: new Date(), sales: 200000 },
];


/***/ }),

/***/ "./src/app/model/chapchap-sales-table/chapchap-sales-table.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/model/chapchap-sales-table/chapchap-sales-table.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chap-nav>\n  <div class=\"grid-container\">\n    <nav aria-label=\"breadcrumb\" class=\"mt-2 mr-2\">\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item active mat-h1\" aria-current=\"page\"> Sales Summary </li>\n      </ol>\n    </nav>\n\n    <div class=\"\">\n      <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n        <mat-icon matSuffix class=\"chap-red\">search</mat-icon>\n      </mat-form-field>\n    </div>\n\n    <div class=\"mat-elevation-z8\">\n      <table mat-table #table [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n        <!-- Id Column -->\n        <ng-container matColumnDef=\"id\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n        </ng-container>\n\n        <!-- Sales Column -->\n        <ng-container matColumnDef=\"sales\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Sales (UGX)</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.sales}}</td>\n        </ng-container> \n\n        <!-- Date Column -->\n        <ng-container matColumnDef=\"date\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Date</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.date}}</td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n\n      <mat-paginator #paginator\n        [length]=\"dataSource.data.length\"\n        [pageIndex]=\"0\"\n        [pageSize]=\"10\"\n        [pageSizeOptions]=\"[ 10, 20, 25, 50, 100, 250]\">\n      </mat-paginator>\n    </div>\n  </div>\n</app-chap-nav>"

/***/ }),

/***/ "./src/app/model/chapchap-sales-table/chapchap-sales-table.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/model/chapchap-sales-table/chapchap-sales-table.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 60px; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/model/chapchap-sales-table/chapchap-sales-table.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/model/chapchap-sales-table/chapchap-sales-table.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChapchapSalesTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapSalesTableComponent", function() { return ChapchapSalesTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _chapchap_sales_table_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chapchap-sales-table-datasource */ "./src/app/model/chapchap-sales-table/chapchap-sales-table-datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChapchapSalesTableComponent = /** @class */ (function () {
    function ChapchapSalesTableComponent() {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_chapchap_sales_table_datasource__WEBPACK_IMPORTED_MODULE_2__["EXAMPLE_DATA"]);
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name', 'sales', 'date'];
    }
    ChapchapSalesTableComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    // Filter the table
    ChapchapSalesTableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ChapchapSalesTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ChapchapSalesTableComponent.prototype, "sort", void 0);
    ChapchapSalesTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchap-sales-table',
            template: __webpack_require__(/*! ./chapchap-sales-table.component.html */ "./src/app/model/chapchap-sales-table/chapchap-sales-table.component.html"),
            styles: [__webpack_require__(/*! ./chapchap-sales-table.component.scss */ "./src/app/model/chapchap-sales-table/chapchap-sales-table.component.scss")]
        })
    ], ChapchapSalesTableComponent);
    return ChapchapSalesTableComponent;
}());



/***/ }),

/***/ "./src/app/model/companyroles.model.ts":
/*!*********************************************!*\
  !*** ./src/app/model/companyroles.model.ts ***!
  \*********************************************/
/*! exports provided: roles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roles", function() { return roles; });
var roles = [
    { value: 'ceo-0', viewValue: 'Chief executive officer' },
    { value: 'cfo-1', viewValue: 'Chief Finance Officer' },
    { value: 'coo-2', viewValue: 'Chief Operations Officer' },
    { value: 'cmo-3', viewValue: 'Chief manufacturing Officer' },
    { value: 'gmo-4', viewValue: 'General Manager Operations' },
    { value: 'gmf-5', viewValue: 'General Manager Finance' },
    { value: 'gms-6', viewValue: 'General Manager System' },
    { value: 'msm-7', viewValue: 'Marketing and Sales Manager' },
    { value: 'im-8', viewValue: 'Inventory Manager' },
    { value: 'hrm-0', viewValue: 'Human Resource Manager' },
    { value: 'rdm-0', viewValue: 'Research and Development Manager' },
    { value: 'om-0', viewValue: 'Operations Manager' },
    { value: 'sa-0', viewValue: 'Senior Accountant' },
    { value: 'aa-0', viewValue: 'Assistant Accountant' },
    { value: 'asm-0', viewValue: 'Area Sales Manager' },
    { value: 'hra-0', viewValue: 'Human Resource Assistant' },
    { value: 's-0', viewValue: 'Sales' },
    { value: 'm-0', viewValue: 'Marketing' },
];


/***/ }),

/***/ "./src/app/monitor/chapchap-monitor-map/chapchap-monitor-map.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/monitor/chapchap-monitor-map/chapchap-monitor-map.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<highcharts-chart \n                  [Highcharts]=\"Highcharts\" \n                  [constructorType]=\"'mapChart'\" \n                  [options]=chartOptions style=\"width: 100%; height: 480px; display: block;\">\n</highcharts-chart>"

/***/ }),

/***/ "./src/app/monitor/chapchap-monitor-map/chapchap-monitor-map.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/monitor/chapchap-monitor-map/chapchap-monitor-map.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/monitor/chapchap-monitor-map/chapchap-monitor-map.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/monitor/chapchap-monitor-map/chapchap-monitor-map.component.ts ***!
  \********************************************************************************/
/*! exports provided: ChapchapMonitorMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapMonitorMapComponent", function() { return ChapchapMonitorMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/highmaps */ "./node_modules/highcharts/highmaps.js");
/* harmony import */ var highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


__webpack_require__(/*! ../../../assets/js/ug-all */ "./src/assets/js/ug-all.js")(highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1__);
var HC_exporting = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
var HC_exportdata = __webpack_require__(/*! highcharts/modules/export-data */ "./node_modules/highcharts/modules/export-data.js");
HC_exporting(highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1__);
HC_exportdata(highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1__);
var ChapchapMonitorMapComponent = /** @class */ (function () {
    function ChapchapMonitorMapComponent() {
        this.data = [
            ['ug-2595', 0],
            ['ug-7073', 1],
            ['ug-7074', 2],
            ['ug-7075', 3],
            ['ug-2785', 4],
            ['ug-2791', 5],
            ['ug-3385', 6],
            ['ug-3388', 7],
            ['ug-2786', 8],
            ['ug-7056', 9],
            ['ug-7083', 10],
            ['ug-7084', 11],
            ['ug-7058', 12],
            ['ug-1678', 13],
            ['ug-1682', 14],
            ['ug-1683', 15],
            ['ug-1685', 16],
            ['ug-7051', 17],
            ['ug-2762', 18],
            ['ug-2767', 19],
            ['ug-2777', 20],
            ['ug-2778', 21],
            ['ug-2780', 22],
            ['ug-2781', 23],
            ['ug-2782', 24],
            ['ug-2783', 25],
            ['ug-2779', 26],
            ['ug-2784', 27],
            ['ug-3382', 28],
            ['ug-3384', 29],
            ['ug-3389', 30],
            ['ug-3383', 31],
            ['ug-3390', 32],
            ['ug-3386', 33],
            ['ug-3391', 34],
            ['ug-3392', 35],
            ['ug-3394', 36],
            ['ug-2750', 37],
            ['ug-7048', 38],
            ['ug-7080', 39],
            ['ug-7081', 40],
            ['ug-1684', 41],
            ['ug-7082', 42],
            ['ug-1688', 43],
            ['ug-7079', 44],
            ['ug-7068', 45],
            ['ug-7070', 46],
            ['ug-7049', 47],
            ['ug-2787', 48],
            ['ug-7055', 49],
            ['ug-2769', 50],
            ['ug-7052', 51],
            ['ug-2774', 52],
            ['ug-7059', 53],
            ['ug-7060', 54],
            ['ug-7057', 55],
            ['ug-2790', 56],
            ['ug-2776', 57],
            ['ug-7067', 58],
            ['ug-7065', 59],
            ['ug-7066', 60],
            ['ug-7069', 61],
            ['ug-7061', 62],
            ['ug-7063', 63],
            ['ug-7062', 64],
            ['ug-7064', 65],
            ['ug-7086', 66],
            ['ug-2744', 67],
            ['ug-1679', 68],
            ['ug-1680', 69],
            ['ug-7054', 70],
            ['ug-1686', 71],
            ['ug-7078', 72],
            ['ug-1677', 73],
            ['ug-1690', 74],
            ['ug-2745', 75],
            ['ug-2752', 76],
            ['ug-2754', 77],
            ['ug-1687', 78],
            ['ug-2757', 79],
            ['ug-1689', 80],
            ['ug-2760', 81],
            ['ug-2761', 82],
            ['ug-2766', 83],
            ['ug-2765', 84],
            ['ug-2764', 85],
            ['ug-2749', 86],
            ['ug-2768', 87],
            ['ug-2763', 88],
            ['ug-2748', 89],
            ['ug-2771', 90],
            ['ug-2772', 91],
            ['ug-2775', 92],
            ['ug-2788', 93],
            ['ug-2789', 94],
            ['ug-3381', 95],
            ['ug-3387', 96],
            ['ug-3393', 97],
            ['ug-7076', 98],
            ['ug-1681', 99],
            ['ug-2746', 100],
            ['ug-2747', 90],
            ['ug-2751', 92],
            ['ug-2758', 93],
            ['ug-2759', 94],
            ['ug-2756', 95],
            ['ug-2770', 96],
            ['ug-7072', 97],
            ['ug-7053', 98],
            ['ug-2753', 99],
            ['ug-2755', 50],
            ['ug-2773', 40]
        ];
        this.Highcharts = highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1__;
        this.chartConstructor = 'mapChart';
        this.chartOptions = {
            chart: {
                map: 'countries/ug/ug-all',
                backgroundColor: '#eee'
            },
            title: {
                text: 'Real time Stock of district Distributors in %',
                style: {
                    color: '#F73233'
                }
            },
            subtitle: {
                text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/ug/ug-all.js">Uganda</a>'
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
            colorAxis: {
                min: 0,
                maxColor: '#00FF00',
                minColor: '#FF0000'
            },
            series: [{
                    data: this.data,
                    name: 'Stock of Distributors',
                    states: {
                        hover: {
                            color: '#0000FF'
                        }
                    }
                }]
        };
    }
    ChapchapMonitorMapComponent.prototype.ngOnInit = function () {
    };
    ChapchapMonitorMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchap-monitor-map',
            template: __webpack_require__(/*! ./chapchap-monitor-map.component.html */ "./src/app/monitor/chapchap-monitor-map/chapchap-monitor-map.component.html"),
            styles: [__webpack_require__(/*! ./chapchap-monitor-map.component.scss */ "./src/app/monitor/chapchap-monitor-map/chapchap-monitor-map.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChapchapMonitorMapComponent);
    return ChapchapMonitorMapComponent;
}());



/***/ }),

/***/ "./src/app/monitor/chapchap-monitor-panel/chapchap-monitor-panel.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/monitor/chapchap-monitor-panel/chapchap-monitor-panel.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card class=\"monitor-panel \">\n  <div class=\"row my-0 chap-header\">\n    <div class=\"col-md-2\">\n          <button [routerLink]=\"['/dashboard']\" mat-raised-button> \n              <mat-icon>keyboard_backspace</mat-icon>\n                <span class=\"chap-red\"> Dashboard </span> \n          </button>\n\n    </div>\n    <div class=\"media mx-auto\">\n            <img class=\"mr-3\" src=\"../../assets/img/chapchaplogo.png\" alt=\"chapchap logo\"\n                    width=\"50\"  height=\"50\">\n        <div class=\"media-body\">\n              <h4 class=\" chap-red mat-display-1 font-weight-bold\"> ChapChap Monitoring Panel </h4>\n        </div>\n    </div>\n  </div>\n  <mat-card class=\"mt-0\">\n    <div class=\"row mt-0\">\n      <!-- Monitoring map -->\n      <div class=\"col-md-8\">\n          <app-chapchap-monitor-map></app-chapchap-monitor-map>\n      </div>\n\n      <!-- Online stats -->\n      <div class=\"col-md-4\">\n        \n            <app-chapchap-monitor-transact></app-chapchap-monitor-transact>\n\n\n      </div>\n    </div>\n  </mat-card>\n\n    <app-chapchap-distributor-chat class=\"chat-head p-4 \"></app-chapchap-distributor-chat>\n\n\n</mat-card>"

/***/ }),

/***/ "./src/app/monitor/chapchap-monitor-panel/chapchap-monitor-panel.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/monitor/chapchap-monitor-panel/chapchap-monitor-panel.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chap-header {\n  max-height: 49px;\n  margin-top: 0px; }\n\n@media (max-width: 544px) {\n  .chap-header {\n    max-height: 7rem;\n    margin-top: 5rem; } }\n"

/***/ }),

/***/ "./src/app/monitor/chapchap-monitor-panel/chapchap-monitor-panel.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/monitor/chapchap-monitor-panel/chapchap-monitor-panel.component.ts ***!
  \************************************************************************************/
/*! exports provided: ChapchapMonitorPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapMonitorPanelComponent", function() { return ChapchapMonitorPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChapchapMonitorPanelComponent = /** @class */ (function () {
    function ChapchapMonitorPanelComponent() {
    }
    ChapchapMonitorPanelComponent.prototype.ngOnInit = function () {
    };
    ChapchapMonitorPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchap-monitor-panel',
            template: __webpack_require__(/*! ./chapchap-monitor-panel.component.html */ "./src/app/monitor/chapchap-monitor-panel/chapchap-monitor-panel.component.html"),
            styles: [__webpack_require__(/*! ./chapchap-monitor-panel.component.scss */ "./src/app/monitor/chapchap-monitor-panel/chapchap-monitor-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChapchapMonitorPanelComponent);
    return ChapchapMonitorPanelComponent;
}());



/***/ }),

/***/ "./src/app/monitor/chapchap-monitor-transact/chapchap-monitor-transact.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/monitor/chapchap-monitor-transact/chapchap-monitor-transact.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card class=\"dashboard-card back-smoke\">\n  <mat-card-title class=\"text-center\">\n    <mat-icon color=\"warn\"> zoom_out_map </mat-icon>\n    <span class=\"chap-red font-weight-bold pt-1 h4 \"> Number of Transactions </span>\n  </mat-card-title>\n  <mat-card-content class=\"text-center\">\n    <!-- Datepicker to show history of transactions -->\n    <mat-form-field>\n      <mat-label> When: </mat-label>\n      <input matInput [matDatepicker]=\"transDatepicker\">\n      <mat-datepicker-toggle matSuffix [for]=\"transDatepicker\"></mat-datepicker-toggle>\n      <mat-datepicker #transDatepicker></mat-datepicker>\n    </mat-form-field>\n\n    <br>\n    <div>\n      <!-- Display of transactions -->\n      <button type=\"button\" *ngFor=\"let item of chapTransactions\" class=\"btn back-red btn-lg mr-1 mb-1 text-white\"> {{ item }} </button>\n\n    </div>\n\n  </mat-card-content>\n  <mat-card-footer class=\"text-center mb-2\">\n    <!-- Online distributors -->\n    <mat-icon color=\"warn\"> wifi_tethering </mat-icon>\n    <span> Online Distributors </span>\n    <br>\n    <button type=\"button\" class=\"btn btn-primary btn-lg my-1 text-white\"> <span class=\"display-4\"> {{ chapOnline }}\n      </span> </button>\n  </mat-card-footer>\n</mat-card>"

/***/ }),

/***/ "./src/app/monitor/chapchap-monitor-transact/chapchap-monitor-transact.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/monitor/chapchap-monitor-transact/chapchap-monitor-transact.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/monitor/chapchap-monitor-transact/chapchap-monitor-transact.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/monitor/chapchap-monitor-transact/chapchap-monitor-transact.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ChapchapMonitorTransactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapMonitorTransactComponent", function() { return ChapchapMonitorTransactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var N = 100000;
var single_digit = N.toString().split('').map(Number);
var ChapchapMonitorTransactComponent = /** @class */ (function () {
    function ChapchapMonitorTransactComponent() {
        this.chapTransactions = single_digit;
        this.chapOnline = 1044;
    }
    ChapchapMonitorTransactComponent.prototype.ngOnInit = function () {
    };
    ChapchapMonitorTransactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchap-monitor-transact',
            template: __webpack_require__(/*! ./chapchap-monitor-transact.component.html */ "./src/app/monitor/chapchap-monitor-transact/chapchap-monitor-transact.component.html"),
            styles: [__webpack_require__(/*! ./chapchap-monitor-transact.component.scss */ "./src/app/monitor/chapchap-monitor-transact/chapchap-monitor-transact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChapchapMonitorTransactComponent);
    return ChapchapMonitorTransactComponent;
}());



/***/ }),

/***/ "./src/app/shared/alerts.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/alerts.service.ts ***!
  \******************************************/
/*! exports provided: AlertsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsService", function() { return AlertsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Message } from './../model/message.model';
var AlertsService = /** @class */ (function () {
    function AlertsService() {
        this.messages = [];
    }
    AlertsService.prototype.add = function (message) {
        this.messages.push(message);
    };
    AlertsService.prototype.clear = function () {
        this.messages = [];
    };
    AlertsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AlertsService);
    return AlertsService;
}());



/***/ }),

/***/ "./src/app/shared/chap-nav/chap-nav.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/chap-nav/chap-nav.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar color=\"primary\">\n  <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\" *ngIf=\"isHandset$ | async\">\n    <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n  </button>\n  <img matListAvatar src=\"../../assets/img/uniliver_logo.png\" class=\"ml-2\" height=\"50px\" width=\"50px\" alt=\"logo\">\n  <span class=\"toolbar-icon {{(isHandset$ | async) ? 'hidden' : ''}}\"> {{ company.company_name }} </span>\n  <span class=\"toolbar-spacer\"></span>\n\n  <button type=\"button\" mat-icon-button class=\"toolbar-icon\" [matMenuTriggerFor]=\"msgmenu\">\n    <mat-icon matBadge=\"25\" matBadgeColor=\"warn\">mail_outline</mat-icon>\n  </button>\n\n  <button type=\"button\" mat-icon-button class=\"toolbar-icon\" [matMenuTriggerFor]=\"alertsmenu\">\n    <mat-icon matBadge=\"64\" matBadgeColor=\"warn\"> map </mat-icon>\n    <!-- <fa-icon [icon]=\"['fas', 'MapMarkedAlt']\"  ></fa-icon> -->\n  </button>\n\n  <button type=\"button\" mat-icon-button class=\"toolbar-icon\" [matMenuTriggerFor]=\"accountmenu\">\n    <img class=\"img-circle\" src=\"../../assets/img/team1.jpg\" class=\"img-round\" height=\"40px\" width=\"40px\" alt=\"logo\">\n  </button>\n</mat-toolbar>\n\n\n<mat-sidenav-container class=\"sidenav-container\">\n\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\" [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" [opened]=\"!(isHandset$ | async)\">\n    \n    <mat-nav-list>\n      <a [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\" mat-list-item matTooltip=\"Shows a summary of key statistics\"\n        matTooltipClass=\"tooltip-red\" aria-label=\"shows a red tooltip\">\n        <span class=\"\">\n          <mat-icon>home</mat-icon>\n          Dashboard\n        </span>\n      </a>\n\n      <a [routerLink]=\"['/stats']\" routerLinkActive=\"active\" mat-list-item matTooltip=\"Shows vital statistics in graphically\"\n        matTooltipClass=\"tooltip-red\" aria-label=\"shows a red tooltip\">\n        <span class=\"\">\n          <mat-icon>insert_chart_outlined</mat-icon>\n          Statistics\n        </span>\n      </a>\n\n      <a [routerLink]=\"['/distributors']\" routerLinkActive=\"active\" mat-list-item matTooltip=\"Shows current list of distributors\"\n        matTooltipClass=\"tooltip-red\" aria-label=\"shows a red tooltip\">\n        <span class=\"\">\n          <mat-icon>assignment</mat-icon>\n          Distributors\n        </span>\n      </a>\n\n      <a [routerLink]=\"['/admin']\" routerLinkActive=\"active\" mat-list-item matTooltip=\"Manage your application\"\n        matTooltipClass=\"tooltip-red\" aria-label=\"shows a red tooltip\">\n        <span class=\"\">\n          <mat-icon>account_circle</mat-icon>\n          Admin\n        </span>\n      </a>\n\n      <a [routerLink]=\"['/help']\" routerLinkActive=\"active\" mat-list-item matTooltip=\"When stuck click here\"\n        matTooltipClass=\"tooltip-red\" aria-label=\"shows a red tooltip\">\n        <span class=\"\">\n          <mat-icon>help_outline</mat-icon>\n          Help\n        </span>\n      </a>\n\n      <a [routerLink]=\"['/monitor']\" routerLinkActive=\"active\" mat-list-item matTooltip=\"Shows real time interaction \"\n        matTooltipClass=\"tooltip-red\" aria-label=\"shows a red tooltip\">\n        <span class=\"\">\n          <mat-icon>visibility</mat-icon>\n          Monitoring Panel\n        </span>\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n  \n    <!-- Add Content Here -->\n    <ng-content>\n              \n    </ng-content>\n\n\n    <app-chapchap-distributor-chat class=\"chat-head p-4 \"></app-chapchap-distributor-chat>\n\n  </mat-sidenav-content>\n\n  <mat-menu #alertsmenu=\"matMenu\">\n    <button mat-menu-item>\n      <mat-icon>dialpad</mat-icon>\n      <span>Redial</span>\n    </button>\n    <button mat-menu-item disabled>\n      <mat-icon>voicemail</mat-icon>\n      <span>Check voicemail</span>\n    </button>\n    <button mat-menu-item>\n      <mat-icon>notifications_off</mat-icon>\n      <span>Disable alerts</span>\n    </button>\n  </mat-menu>\n\n  <mat-menu #msgmenu=\"matMenu\">\n    <button mat-menu-item>\n      <mat-icon>sync</mat-icon>\n      <span>Recent</span>\n    </button>\n    <button mat-menu-item>\n      <mat-icon>fiber_new</mat-icon>\n      <span>New messages</span>\n    </button>\n    <button mat-menu-item>\n      <mat-icon>group_add</mat-icon>\n      <span>New group</span>\n    </button>\n  </mat-menu>\n\n  <mat-menu #chatsmenu=\"matMenu\">\n    <button mat-menu-item>\n      <mat-icon>sync</mat-icon>\n      <span>Recent</span>\n    </button>\n    <button mat-menu-item>\n      <mat-icon>fiber_new</mat-icon>\n      <span>New messages</span>\n    </button>\n    <button mat-menu-item>\n      <mat-icon>person_add</mat-icon>\n      <span>New chat</span>\n    </button>\n  </mat-menu>\n\n  <mat-menu #accountmenu=\"matMenu\">\n    <button mat-menu-item>\n      <mat-icon>radio_button_checked</mat-icon>\n      <span>Status: Online</span>\n    </button>\n    <button mat-menu-item [routerLink]=\"['/settings']\">\n      <mat-icon>settings</mat-icon>\n      <span> Account setting </span>\n    </button>\n    <button mat-menu-item>\n        <mat-icon>feedback</mat-icon>\n        <span> Feedback </span>\n    </button>\n    <button mat-menu-item>\n      <mat-icon>power_settings_new</mat-icon>\n      <span> Logout </span>\n    </button>\n  </mat-menu>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/shared/chap-nav/chap-nav.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/chap-nav/chap-nav.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 200px;\n  overflow-x: hidden;\n  margin-top: 3.5rem;\n  position: -webkit-sticky;\n  position: sticky; }\n\n.mat-toolbar.mat-primary {\n  position: fixed;\n  height: 3.5rem;\n  z-index: 54;\n  /*\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      z-index: 2; */ }\n\n.toolbar-icon {\n  padding: 0 50px; }\n\n.toolbar-spacer {\n  flex: 1 1 auto; }\n\n.badgecolor {\n  color: #FFC06A; }\n\n.mat-nav-list a.active {\n  background: #eaf0ee;\n  color: #F73233 !important; }\n\n.hidden {\n  display: none; }\n\n.tooltip-red {\n  color: #F73233; }\n"

/***/ }),

/***/ "./src/app/shared/chap-nav/chap-nav.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/chap-nav/chap-nav.component.ts ***!
  \*******************************************************/
/*! exports provided: ChapNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapNavComponent", function() { return ChapNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChapNavComponent = /** @class */ (function () {
    function ChapNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
        this.company = {
            company_name: 'Unilever'
        };
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/19'),
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/19'),
            },
            {
                name: 'Work',
                updated: new Date('1/28/19'),
            }
        ];
    }
    ChapNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chap-nav',
            template: __webpack_require__(/*! ./chap-nav.component.html */ "./src/app/shared/chap-nav/chap-nav.component.html"),
            styles: [__webpack_require__(/*! ./chap-nav.component.scss */ "./src/app/shared/chap-nav/chap-nav.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], ChapNavComponent);
    return ChapNavComponent;
}());



/***/ }),

/***/ "./src/app/shared/chapchap-contact/chapchap-contact.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/shared/chapchap-contact/chapchap-contact.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card class=\" my-2 mx-2 py-4 px-4\" *ngFor=\"let item of ChapAddress\" style=\"width: 36rem;\">\n  <div class=\"row card-body\">\n    <div class=\"col-md-2 text-center pl-4 pt-2\">\n      <mat-icon mat-list-icon> {{ item.icon }} </mat-icon>\n    </div>\n    <div class=\"col-md-8\">\n      <h5 class=\"mt-0 chap-red font-weight-bold card-title\"> {{ item.title }} </h5>\n    </div>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/shared/chapchap-contact/chapchap-contact.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/shared/chapchap-contact/chapchap-contact.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/chapchap-contact/chapchap-contact.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/chapchap-contact/chapchap-contact.component.ts ***!
  \***********************************************************************/
/*! exports provided: ChapchapContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapContactComponent", function() { return ChapchapContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChapchapContactComponent = /** @class */ (function () {
    function ChapchapContactComponent() {
        this.ChapAddress = [
            {
                title: 'Plot 1234, Block 185, Namugongo',
                icon: 'place'
            },
            {
                title: '+256 392 002 221 / +256 706 741 388',
                icon: 'stay_current_portrait'
            },
            {
                title: 'support@chachap.co',
                icon: 'mail_outline'
            },
            {
                title: 'www.chapchap.co',
                icon: 'language'
            }
        ];
    }
    ChapchapContactComponent.prototype.ngOnInit = function () {
    };
    ChapchapContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchap-contact',
            template: __webpack_require__(/*! ./chapchap-contact.component.html */ "./src/app/shared/chapchap-contact/chapchap-contact.component.html"),
            styles: [__webpack_require__(/*! ./chapchap-contact.component.scss */ "./src/app/shared/chapchap-contact/chapchap-contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChapchapContactComponent);
    return ChapchapContactComponent;
}());



/***/ }),

/***/ "./src/app/shared/chapchap-dialog.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/chapchap-dialog.service.ts ***!
  \***************************************************/
/*! exports provided: ChapchapDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapDialogService", function() { return ChapchapDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _chapchap_confirm_dialog_chapchap_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../chapchap-confirm-dialog/chapchap-confirm-dialog.component */ "./src/app/chapchap-confirm-dialog/chapchap-confirm-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChapchapDialogService = /** @class */ (function () {
    function ChapchapDialogService(dialog) {
        this.dialog = dialog;
    }
    ChapchapDialogService.prototype.openConfirmDialog = function (msg) {
        return this.dialog.open(_chapchap_confirm_dialog_chapchap_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ChapchapConfirmDialogComponent"], {
            width: '250px',
            height: '150px',
            disableClose: true,
            data: {
                message: msg
            }
        });
    };
    ChapchapDialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ChapchapDialogService);
    return ChapchapDialogService;
}());



/***/ }),

/***/ "./src/app/shared/chapchap-distributor-addnew/chapchap-distributor-addnew.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/chapchap-distributor-addnew/chapchap-distributor-addnew.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form >\n  <mat-card-title>\n    <mat-icon class=\"toolbar-icon\">\n      <span class=\"chap-red\">\n        person_add\n      </span>\n    </mat-icon>\n    <span class=\"chap-red\">\n      ADD DISTRIBUTOR\n    </span>\n    <span class=\"header-spacer\"></span>\n    \n    <button mat-button (click)=\"onClose()\" tabindex=\"-1\" class=\" float-right btn-dialog-close\" >\n      <mat-icon >\n        <span class=\"chap-red\">\n          close\n        </span>\n      </mat-icon>\n    </button>\n\n  </mat-card-title>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <mat-form-field>\n        <input matInput placeholder=\"First Name*\">\n        <mat-error>This field is mandatory.</mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Last Name*\">\n        <mat-error>This field is mandatory.</mat-error>\n      </mat-form-field>\n      <mat-radio-group>\n        <mat-radio-button value=\"M\" class=\"mr-4\"> Male</mat-radio-button>\n        <mat-radio-button value=\"F\"> Female</mat-radio-button>\n      </mat-radio-group>\n      <mat-form-field>\n        <input matInput placeholder=\"Email\">\n        <mat-error>Invalid email address.</mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Mobile*\">\n        <mat-hint> Include area code </mat-hint>\n        <mat-error>This field is mandatory.</mat-error>\n        <mat-error>Minimum 8 charactors needed.</mat-error>\n      </mat-form-field>\n    </div>\n    \n    <div class=\"col-md-6\">\n      <mat-form-field>\n        <input matInput placeholder=\"Enter password\" [type]=\"hide ? 'password' : 'text'\">\n        <mat-icon matSuffix class=\"chap-red\" (click)=\"hide = !hide\"> {{ hide ? 'visibility' : 'visibility_off' }} </mat-icon>\n      </mat-form-field>\n      \n      <mat-form-field>\n        <input matInput placeholder=\"Confirm password\" [type]=\"rehide ? 'password' : 'text'\">\n        <mat-icon matSuffix class=\"chap-red\" (click)=\"rehide = !rehide\"> {{ hide ? 'visibility' : 'visibility_off' }}\n        </mat-icon>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Location\">\n      </mat-form-field>\n      <button class=\"mr-4\" mat-raised-button (click)=\"onAdd()\"> <span class=\"chap-red\"> ADD </span> </button>\n      <button type=\"reset\" mat-button> <span class=\"color-green\"> RESET </span> </button>\n    </div>\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/shared/chapchap-distributor-addnew/chapchap-distributor-addnew.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/chapchap-distributor-addnew/chapchap-distributor-addnew.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-dialog-close {\n  width: 45px;\n  min-width: 0px !important;\n  height: 40px;\n  padding: 0px !important; }\n\n.header-spacer {\n  flex: 1 1 auto; }\n"

/***/ }),

/***/ "./src/app/shared/chapchap-distributor-addnew/chapchap-distributor-addnew.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/chapchap-distributor-addnew/chapchap-distributor-addnew.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ChapchapDistributorAddnewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapDistributorAddnewComponent", function() { return ChapchapDistributorAddnewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_chapchap_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/chapchap-notifications.service */ "./src/app/shared/chapchap-notifications.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChapchapDistributorAddnewComponent = /** @class */ (function () {
    function ChapchapDistributorAddnewComponent(notificationService, dialogRef) {
        this.notificationService = notificationService;
        this.dialogRef = dialogRef;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.hide = true;
        this.rehide = true;
    }
    ChapchapDistributorAddnewComponent.prototype.ngOnInit = function () {
    };
    ChapchapDistributorAddnewComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' : '';
    };
    ChapchapDistributorAddnewComponent.prototype.onAdd = function () {
        this.notificationService.success(':: Submitted successfully');
        this.onClose();
    };
    ChapchapDistributorAddnewComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    ChapchapDistributorAddnewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchap-distributor-addnew',
            template: __webpack_require__(/*! ./chapchap-distributor-addnew.component.html */ "./src/app/shared/chapchap-distributor-addnew/chapchap-distributor-addnew.component.html"),
            styles: [__webpack_require__(/*! ./chapchap-distributor-addnew.component.scss */ "./src/app/shared/chapchap-distributor-addnew/chapchap-distributor-addnew.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_chapchap_notifications_service__WEBPACK_IMPORTED_MODULE_2__["ChapchapNotificationsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], ChapchapDistributorAddnewComponent);
    return ChapchapDistributorAddnewComponent;
}());



/***/ }),

/***/ "./src/app/shared/chapchap-distributor-chat/chapchap-distributor-chat.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/chapchap-distributor-chat/chapchap-distributor-chat.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button \n  mat-raised-button \n  mat-mini-fab \n  matBadge=\"43\"\n  matBadgeColor=\"warn\"\n  matTooltip=\"Chat with distributors\" \n  matTooltipClass=\"tooltip-red\" \n  aria-label=\"Chat button\"\n  (click)=\"openBottomSheet()\">\n  <mat-icon> chat </mat-icon>\n</button>"

/***/ }),

/***/ "./src/app/shared/chapchap-distributor-chat/chapchap-distributor-chat.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/chapchap-distributor-chat/chapchap-distributor-chat.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/chapchap-distributor-chat/chapchap-distributor-chat.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/chapchap-distributor-chat/chapchap-distributor-chat.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ChapchapDistributorChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapDistributorChatComponent", function() { return ChapchapDistributorChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _chapchap_distributor_chatlist_chapchap_distributor_chatlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../chapchap-distributor-chatlist/chapchap-distributor-chatlist.component */ "./src/app/shared/chapchap-distributor-chatlist/chapchap-distributor-chatlist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChapchapDistributorChatComponent = /** @class */ (function () {
    function ChapchapDistributorChatComponent(bottomSheet) {
        this.bottomSheet = bottomSheet;
    }
    ChapchapDistributorChatComponent.prototype.ngOnInit = function () {
    };
    ChapchapDistributorChatComponent.prototype.openBottomSheet = function () {
        this.bottomSheet.open(_chapchap_distributor_chatlist_chapchap_distributor_chatlist_component__WEBPACK_IMPORTED_MODULE_2__["ChapchapDistributorChatlistComponent"]);
    };
    ChapchapDistributorChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchap-distributor-chat',
            template: __webpack_require__(/*! ./chapchap-distributor-chat.component.html */ "./src/app/shared/chapchap-distributor-chat/chapchap-distributor-chat.component.html"),
            styles: [__webpack_require__(/*! ./chapchap-distributor-chat.component.scss */ "./src/app/shared/chapchap-distributor-chat/chapchap-distributor-chat.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheet"]])
    ], ChapchapDistributorChatComponent);
    return ChapchapDistributorChatComponent;
}());



/***/ }),

/***/ "./src/app/shared/chapchap-distributor-chatlist/chapchap-distributor-chatlist.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/chapchap-distributor-chatlist/chapchap-distributor-chatlist.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"messaging\">\n  <button type=\"button\" mat-icon-button class=\"toolbar-icon md-32 float-right\" (click)=\"closeChat($event)\">\n    <mat-icon>cancel</mat-icon>\n  </button>\n  <div class=\"inbox_msg\">\n    <div class=\"inbox_people\">\n      <div class=\"headind_srch\">\n        <div class=\"recent_heading\">\n          <h4>Recent</h4>\n        </div>\n        <div class=\"srch_bar\">\n          <div class=\"stylish-input-group\">\n            <input type=\"text\" class=\"search-bar\" placeholder=\"Search\">\n          </div>\n        </div>\n      </div>\n      <div class=\"inbox_chat\">\n        <div class=\"chat_list active_chat\" *ngFor=\"let item of chat_list\">\n          <div class=\"chat_people\">\n            <div class=\"chat_img\">\n              <img src=\"{{ item.card_img }}\" class=\"img-round\" height=\"50\" width=\"50\">\n            </div>\n            <div class=\"chat_ib\">\n              <h5> {{ item.card_name }} <span class=\"chat_date\"> {{ item.card_date }} </span></h5>\n              <p>\n                {{ item.card_msg }}\n              </p>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"mesgs\">\n      \n      <div class=\"msg_history\">\n        <div class=\"incoming_msg\">\n          <div class=\"incoming_msg_img\"> <img src=\"https://ptetutorials.com/images/user-profile.png\" alt=\"sunil\"> </div>\n          <div class=\"received_msg\">\n            <div class=\"received_withd_msg\">\n              <p>\n                Digital marketing is a new approach to have all\n                solutions of new merchants outreach\n              </p>\n              <span class=\"time_date\"> 11:01 AM | June 9</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"outgoing_msg\">\n          <div class=\"sent_msg\">\n            <p>\n              Does this mean we have to hire a digital marketier?\n            </p>\n            <span class=\"time_date\"> 11:01 AM | June 9</span>\n          </div>\n        </div>\n        <div class=\"incoming_msg\">\n          <div class=\"incoming_msg_img\"> <img src=\"https://ptetutorials.com/images/user-profile.png\" alt=\"sunil\"> </div>\n          <div class=\"received_msg\">\n            <div class=\"received_withd_msg\">\n              <p>\n                Yes by all means otherwise you could liss out on your KPI targets.\n              </p>\n              <span class=\"time_date\"> 11:01 AM | Yesterday</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"outgoing_msg\">\n          <div class=\"sent_msg\">\n            <p>\n              Well said chief will contact our HR to deliver on that\n            </p>\n            <span class=\"time_date\"> 11:01 AM | Today</span>\n          </div>\n        </div>\n        <div class=\"incoming_msg\">\n          <div class=\"incoming_msg_img\"> <img src=\"https://ptetutorials.com/images/user-profile.png\" alt=\"sunil\"> </div>\n          <div class=\"received_msg\">\n            <div class=\"received_withd_msg\">\n              <p>We work directly with our retailers and suppliers,\n                and sell direct to you, which means quality, exclusive\n                products, at a price anyone can afford.\n                That's the message to allay to all of them.\n              </p>\n              <span class=\"time_date\"> 11:01 AM | Today</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"type_msg\">\n        <div class=\"input_msg_write\">\n          <input type=\"text\" class=\"write_msg\" placeholder=\"Type a message\" />\n          <button class=\"msg_send_btn\" type=\"button\">\n            <mat-icon> send </mat-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/shared/chapchap-distributor-chatlist/chapchap-distributor-chatlist.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/chapchap-distributor-chatlist/chapchap-distributor-chatlist.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-spacer {\n  flex: 1 1 auto; }\n\n.container {\n  max-width: 1170px;\n  margin: auto; }\n\nimg {\n  max-width: 100%; }\n\n.inbox_people {\n  background: #f8f8f8 none repeat scroll 0 0;\n  float: left;\n  overflow: hidden;\n  width: 40%;\n  border-right: 1px solid #c4c4c4; }\n\n.inbox_msg {\n  border: 1px solid #c4c4c4;\n  clear: both;\n  overflow: hidden; }\n\n.top_spac {\n  margin: 20px 0 0; }\n\n.recent_heading {\n  float: left;\n  width: 40%; }\n\n.srch_bar {\n  display: inline-block;\n  text-align: right;\n  width: 60%;\n  padding: 0px; }\n\n.headind_srch {\n  padding: 10px 29px 10px 20px;\n  overflow: hidden;\n  border-bottom: 1px solid #c4c4c4; }\n\n.recent_heading h4 {\n  color: #05728f;\n  font-size: 21px;\n  margin: auto; }\n\n.srch_bar input {\n  border: 1px solid #cdcdcd;\n  border-width: 0 0 1px 0;\n  width: 80%;\n  padding: 2px 0 4px 6px;\n  background: none; }\n\n.srch_bar .input-group-addon button {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  padding: 0;\n  color: #707070;\n  font-size: 18px; }\n\n.srch_bar .input-group-addon {\n  margin: 0 0 0 -27px; }\n\n.chat_ib h5 {\n  font-size: 15px;\n  color: #464646;\n  margin: 0 0 8px 0; }\n\n.chat_ib h5 span {\n  font-size: 13px;\n  float: right; }\n\n.chat_ib p {\n  font-size: 14px;\n  color: #989898;\n  margin: auto; }\n\n.chat_img {\n  float: left;\n  width: 11%; }\n\n.chat_ib {\n  float: left;\n  padding: 0 0 0 15px;\n  width: 88%; }\n\n.chat_people {\n  overflow: hidden;\n  clear: both; }\n\n.chat_list {\n  border-bottom: 1px solid #c4c4c4;\n  margin: 0;\n  padding: 18px 16px 10px; }\n\n.inbox_chat {\n  height: 550px;\n  overflow-y: scroll; }\n\n.active_chat {\n  background: #ebebeb; }\n\n.incoming_msg_img {\n  display: inline-block;\n  width: 6%; }\n\n.received_msg {\n  display: inline-block;\n  padding: 0 0 0 10px;\n  vertical-align: top;\n  width: 92%; }\n\n.received_withd_msg p {\n  background: #ebebeb none repeat scroll 0 0;\n  border-radius: 3px;\n  color: #646464;\n  font-size: 14px;\n  margin: 0;\n  padding: 5px 10px 5px 12px;\n  width: 100%; }\n\n.time_date {\n  color: #747474;\n  display: block;\n  font-size: 12px;\n  margin: 8px 0 0; }\n\n.received_withd_msg {\n  width: 57%; }\n\n.mesgs {\n  float: left;\n  padding: 30px 15px 0 25px;\n  width: 60%; }\n\n.sent_msg p {\n  background: #05728f none repeat scroll 0 0;\n  border-radius: 3px;\n  font-size: 14px;\n  margin: 0;\n  color: #fff;\n  padding: 5px 10px 5px 12px;\n  width: 100%; }\n\n.outgoing_msg {\n  overflow: hidden;\n  margin: 26px 0 26px; }\n\n.sent_msg {\n  float: right;\n  width: 46%; }\n\n.input_msg_write input {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  color: #4c4c4c;\n  font-size: 15px;\n  min-height: 48px;\n  width: 100%; }\n\n.type_msg {\n  border-top: 1px solid #c4c4c4;\n  position: relative; }\n\n.msg_send_btn {\n  background: #05728f none repeat scroll 0 0;\n  border: medium none;\n  border-radius: 50%;\n  color: #fff;\n  cursor: pointer;\n  font-size: 17px;\n  height: 33px;\n  position: absolute;\n  right: 0;\n  top: 11px;\n  width: 33px; }\n\n.messaging {\n  padding: 0 0 50px 0; }\n\n.msg_history {\n  height: 516px;\n  overflow-y: clip; }\n"

/***/ }),

/***/ "./src/app/shared/chapchap-distributor-chatlist/chapchap-distributor-chatlist.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/chapchap-distributor-chatlist/chapchap-distributor-chatlist.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ChapchapDistributorChatlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapDistributorChatlistComponent", function() { return ChapchapDistributorChatlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChapchapDistributorChatlistComponent = /** @class */ (function () {
    function ChapchapDistributorChatlistComponent(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
        this.chat_list = [
            {
                card_img: '../../assets/img/team3.jpg',
                card_name: 'Opio James',
                card_date: '30 mins ago',
                card_msg: 'Hello sir I am running out of Omo'
            }, {
                card_img: '../../assets/img/team1.jpg',
                card_name: 'Aine Thomas',
                card_date: '07:30 am',
                card_msg: 'Hello there not a good morning but we have realised 5 damaged cartons of Lux. And it was our last batch.'
            }, {
                card_img: '../../assets/img/team2.jpg',
                card_name: 'Anebakyo Quin',
                card_date: 'Jan 15',
                card_msg: 'Good evening we have received our consignment. Always a pleasure working with you.'
            }, {
                card_img: '../../assets/img/team4.jpg',
                card_name: 'Sekitto Andre',
                card_date: 'Jan 1',
                card_msg: 'Happy new year from Sekitto & sons distributors. What a journey we had our sales are blossoming'
            }, {
                card_img: '../../assets/img/team5.jpg',
                card_name: 'Ocen Peter',
                card_date: 'Dec 31 18',
                card_msg: 'Hello sir we have superseded our christmas targets! It is unbelievable how people are so into your products.'
            }, {
                card_img: '../../assets/img/team6.jpg',
                card_name: 'Ongwen Federer',
                card_date: 'Dec 24 18',
                card_msg: 'Hello I am wondering if you can gzt us Lipton tea, Knorr, Blueband and bru coffee ASAP'
            }
        ];
    }
    ChapchapDistributorChatlistComponent.prototype.closeChat = function (event) {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    };
    ChapchapDistributorChatlistComponent.prototype.openChat = function (event) {
        this.bottomSheetRef.afterOpened();
        event.preventDefault();
        this.bottomSheetRef.dismiss();
    };
    ChapchapDistributorChatlistComponent.prototype.ngOnInit = function () {
    };
    ChapchapDistributorChatlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchap-distributor-chatlist',
            template: __webpack_require__(/*! ./chapchap-distributor-chatlist.component.html */ "./src/app/shared/chapchap-distributor-chatlist/chapchap-distributor-chatlist.component.html"),
            styles: [__webpack_require__(/*! ./chapchap-distributor-chatlist.component.scss */ "./src/app/shared/chapchap-distributor-chatlist/chapchap-distributor-chatlist.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]])
    ], ChapchapDistributorChatlistComponent);
    return ChapchapDistributorChatlistComponent;
}());



/***/ }),

/***/ "./src/app/shared/chapchap-distributor-detail/chapchap-distributor-detail.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/chapchap-distributor-detail/chapchap-distributor-detail.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-dialog-content>\n  <li *ngFor=\"let item of \"> </li>\n    ID: 1\n  <br>\n    <span> NAME: JOHN KISWA </span>\n\n  <br>\n\n    LOCATION: KITGUM\n  \n  <br>\n  \n    START DATE: 1-6-2003\n  \n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/shared/chapchap-distributor-detail/chapchap-distributor-detail.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/chapchap-distributor-detail/chapchap-distributor-detail.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/chapchap-distributor-detail/chapchap-distributor-detail.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/chapchap-distributor-detail/chapchap-distributor-detail.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ChapchapDistributorDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapDistributorDetailComponent", function() { return ChapchapDistributorDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChapchapDistributorDetailComponent = /** @class */ (function () {
    function ChapchapDistributorDetailComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ChapchapDistributorDetailComponent.prototype.ngOnInit = function () {
    };
    ChapchapDistributorDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchap-distributor-detail',
            template: __webpack_require__(/*! ./chapchap-distributor-detail.component.html */ "./src/app/shared/chapchap-distributor-detail/chapchap-distributor-detail.component.html"),
            styles: [__webpack_require__(/*! ./chapchap-distributor-detail.component.scss */ "./src/app/shared/chapchap-distributor-detail/chapchap-distributor-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], ChapchapDistributorDetailComponent);
    return ChapchapDistributorDetailComponent;
}());



/***/ }),

/***/ "./src/app/shared/chapchap-messages/chapchap-messages.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/shared/chapchap-messages/chapchap-messages.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"messageService.messages.length\" >\n  <div *ngFor='let message of messageService.messages' class=\"alert alert-primary w-50 float-right\" role=\"alert\">\n    {{ message }}\n    <button mat-button (click)=\"messageService.clear()\" >\n      <mat-icon>close</mat-icon>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/chapchap-messages/chapchap-messages.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/shared/chapchap-messages/chapchap-messages.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/chapchap-messages/chapchap-messages.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/chapchap-messages/chapchap-messages.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChapchapMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapMessagesComponent", function() { return ChapchapMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alerts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../alerts.service */ "./src/app/shared/alerts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Message } from './../../model/message.model';

// component that will display messages to the user
var ChapchapMessagesComponent = /** @class */ (function () {
    function ChapchapMessagesComponent(messageService) {
        this.messageService = messageService;
    }
    ChapchapMessagesComponent.prototype.ngOnInit = function () {
    };
    ChapchapMessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchap-messages',
            template: __webpack_require__(/*! ./chapchap-messages.component.html */ "./src/app/shared/chapchap-messages/chapchap-messages.component.html"),
            styles: [__webpack_require__(/*! ./chapchap-messages.component.scss */ "./src/app/shared/chapchap-messages/chapchap-messages.component.scss")]
        }),
        __metadata("design:paramtypes", [_alerts_service__WEBPACK_IMPORTED_MODULE_1__["AlertsService"]])
    ], ChapchapMessagesComponent);
    return ChapchapMessagesComponent;
}());



/***/ }),

/***/ "./src/app/shared/chapchap-notifications.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/chapchap-notifications.service.ts ***!
  \**********************************************************/
/*! exports provided: ChapchapNotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapNotificationsService", function() { return ChapchapNotificationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChapchapNotificationsService = /** @class */ (function () {
    function ChapchapNotificationsService(snackBar) {
        this.snackBar = snackBar;
        this.config = {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
        };
    }
    ChapchapNotificationsService.prototype.success = function (msg) {
        this.config['panelClass'] = ['notification', 'success'];
        this.snackBar.open(msg, '', this.config);
    };
    ChapchapNotificationsService.prototype.warn = function (msg) {
        this.config['panelClass'] = ['notification', 'warn'];
        this.snackBar.open(msg, '', this.config);
    };
    ChapchapNotificationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ChapchapNotificationsService);
    return ChapchapNotificationsService;
}());



/***/ }),

/***/ "./src/app/stats/chapchap-productsales/chapchap-productsales.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/stats/chapchap-productsales/chapchap-productsales.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<highcharts-chart \n  [Highcharts]=Highcharts \n  [options]=\"chartOptions\" \n  style=\"width: 100%; height:400px; display: block;\">\n</highcharts-chart>"

/***/ }),

/***/ "./src/app/stats/chapchap-productsales/chapchap-productsales.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/stats/chapchap-productsales/chapchap-productsales.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stats/chapchap-productsales/chapchap-productsales.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/stats/chapchap-productsales/chapchap-productsales.component.ts ***!
  \********************************************************************************/
/*! exports provided: ChapchapProductsalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapProductsalesComponent", function() { return ChapchapProductsalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HC_exporting = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
var HC_sl = __webpack_require__(/*! highcharts/modules/series-label */ "./node_modules/highcharts/modules/series-label.js");
var HC_drill = __webpack_require__(/*! highcharts/modules/drilldown */ "./node_modules/highcharts/modules/drilldown.js");
var HC_exportdata = __webpack_require__(/*! highcharts/modules/export-data */ "./node_modules/highcharts/modules/export-data.js");
HC_exporting(highcharts__WEBPACK_IMPORTED_MODULE_1__);
HC_sl(highcharts__WEBPACK_IMPORTED_MODULE_1__);
HC_drill(highcharts__WEBPACK_IMPORTED_MODULE_1__);
HC_exportdata(highcharts__WEBPACK_IMPORTED_MODULE_1__);
var ChapchapProductsalesComponent = /** @class */ (function () {
    function ChapchapProductsalesComponent() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.chartOptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Product Sales by category',
                style: {
                    color: '#F73233'
                }
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Total '
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true
                    },
                    colors: [
                        '#4267b2',
                        '#3cba54',
                        '#F73233'
                    ]
                }
            },
            series: [{
                    name: 'Products',
                    colorByPoint: true,
                    data: [{
                            name: 'Homecare',
                            y: 6,
                            drilldown: 'homecare'
                        }, {
                            name: 'Personal',
                            y: 10,
                            drilldown: 'personal'
                        }, {
                            name: 'Food',
                            y: 6,
                            drilldown: 'food'
                        }]
                }],
            drilldown: {
                title: {
                    text: 'Product Sales for Homecare category'
                },
                series: [{
                        id: 'homecare',
                        name: 'Homecare',
                        data: [
                            {
                                name: 'Sunlight',
                                y: 45,
                                drilldown: 'sunlight'
                            }, {
                                name: 'Omo',
                                y: 45,
                                drilldown: 'omo'
                            }, {
                                name: 'vim',
                                y: 45,
                                drilldown: 'vim'
                            }, {
                                name: 'Clear',
                                y: 45,
                                drilldown: 'clear'
                            }, {
                                name: 'Comfort',
                                y: 45,
                                drilldown: 'comfort'
                            }, {
                                name: 'Domex',
                                y: 45,
                                drilldown: 'domex'
                            }, {
                                name: 'Rin',
                                y: 45,
                                drilldown: 'rin'
                            }
                        ]
                    }, {
                        id: 'sunlight',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62,
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'omo',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'vim',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'clear',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'comfort',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'domex',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'rin',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'personal',
                        data: [
                            {
                                name: 'Axe',
                                y: 74,
                                drilldown: 'axe'
                            }, {
                                name: 'Close Up',
                                y: 62,
                                drilldown: 'closeUp'
                            }, {
                                name: 'Dove',
                                y: 51,
                                drilldown: 'dove'
                            }, {
                                name: 'Fair & Lovely',
                                y: 48,
                                drilldown: 'fair'
                            }, {
                                name: 'Lifebouy',
                                y: 42,
                                drilldown: 'lifebouy'
                            }, {
                                name: 'Lux',
                                y: 40,
                                drilldown: 'lux'
                            }, {
                                name: 'Rexona',
                                y: 39,
                                drilldown: 'rexona'
                            }, {
                                name: 'Sure',
                                y: 35,
                                drilldown: 'sure'
                            }, {
                                name: 'Vaseline',
                                y: 31,
                                drilldown: 'vaseline'
                            }
                        ]
                    }, {
                        id: 'axe',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'closeUp',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'dove',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'fair',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'lifebouy',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'lux',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'rexona',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'sure',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'vaseline',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'food',
                        data: [
                            {
                                name: 'Lipton tea',
                                y: 65,
                                drilldown: 'lipton'
                            }, {
                                name: 'Knorr',
                                y: 57,
                                drilldown: 'knorr'
                            }, {
                                name: 'Kissan',
                                y: 43,
                                drilldown: 'kissan'
                            }, {
                                name: 'Blueband',
                                y: 38,
                                drilldown: 'blueband'
                            }, {
                                name: 'Bru coffee',
                                y: 24,
                                drilldown: 'brucoffee'
                            }, {
                                name: 'PiKwalitu Walls',
                                y: 16,
                                drilldown: 'pikwa'
                            }
                        ]
                    }, {
                        id: 'lipton',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'knorr',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'kissan',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'blueband',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'brucoffee',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'pikwa',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }
                ],
            }
        };
    }
    ChapchapProductsalesComponent.prototype.ngOnInit = function () {
    };
    ChapchapProductsalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchap-productsales',
            template: __webpack_require__(/*! ./chapchap-productsales.component.html */ "./src/app/stats/chapchap-productsales/chapchap-productsales.component.html"),
            styles: [__webpack_require__(/*! ./chapchap-productsales.component.scss */ "./src/app/stats/chapchap-productsales/chapchap-productsales.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChapchapProductsalesComponent);
    return ChapchapProductsalesComponent;
}());



/***/ }),

/***/ "./src/app/stats/chapchap-productsalesgrowth/chapchap-productsalesgrowth.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/stats/chapchap-productsalesgrowth/chapchap-productsalesgrowth.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<highcharts-chart \n  [Highcharts]=Salesgrowth\n  [options]=\"SalesOptions\" \n  style=\"width: 100%; height:400px; display: block;\">\n</highcharts-chart>"

/***/ }),

/***/ "./src/app/stats/chapchap-productsalesgrowth/chapchap-productsalesgrowth.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/stats/chapchap-productsalesgrowth/chapchap-productsalesgrowth.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stats/chapchap-productsalesgrowth/chapchap-productsalesgrowth.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/stats/chapchap-productsalesgrowth/chapchap-productsalesgrowth.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ChapchapProductsalesgrowthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapProductsalesgrowthComponent", function() { return ChapchapProductsalesgrowthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HC_exporting = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
var HC_sl = __webpack_require__(/*! highcharts/modules/series-label */ "./node_modules/highcharts/modules/series-label.js");
var HC_drill = __webpack_require__(/*! highcharts/modules/drilldown */ "./node_modules/highcharts/modules/drilldown.js");
var HC_exportdata = __webpack_require__(/*! highcharts/modules/export-data */ "./node_modules/highcharts/modules/export-data.js");
HC_exporting(highcharts__WEBPACK_IMPORTED_MODULE_1__);
HC_sl(highcharts__WEBPACK_IMPORTED_MODULE_1__);
HC_drill(highcharts__WEBPACK_IMPORTED_MODULE_1__);
HC_exportdata(highcharts__WEBPACK_IMPORTED_MODULE_1__);
var ChapchapProductsalesgrowthComponent = /** @class */ (function () {
    function ChapchapProductsalesgrowthComponent() {
        this.Salesgrowth = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.SalesOptions = {
            title: {
                text: 'Product Sales Growth , 2010-2016',
                style: {
                    color: '#F73233'
                }
            },
            subtitle: {
                text: 'Source: the Unilever Sales growth chart'
            },
            yAxis: {
                title: {
                    text: 'Sales growth over different products'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 2010
                }
            },
            series: [{
                    name: 'Omo',
                    data: [439, 525, 571, 696, 970, 1199, 1371, 1541]
                }, {
                    name: 'Blue Band',
                    data: [249, 240, 297, 298, 324, 302, 381, 404]
                }, {
                    name: 'Dove',
                    data: [117, 177, 160, 197, 201, 243, 321, 393]
                }, {
                    name: 'Vaseline',
                    data: [null, null, 79, 121, 151, 224, 344, 342]
                }, {
                    name: 'Other',
                    data: [129, 59, 81, 112, 89, 118, 182, 181]
                }],
            responsive: {
                rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
            }
        };
    }
    ChapchapProductsalesgrowthComponent.prototype.ngOnInit = function () {
    };
    ChapchapProductsalesgrowthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchap-productsalesgrowth',
            template: __webpack_require__(/*! ./chapchap-productsalesgrowth.component.html */ "./src/app/stats/chapchap-productsalesgrowth/chapchap-productsalesgrowth.component.html"),
            styles: [__webpack_require__(/*! ./chapchap-productsalesgrowth.component.scss */ "./src/app/stats/chapchap-productsalesgrowth/chapchap-productsalesgrowth.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChapchapProductsalesgrowthComponent);
    return ChapchapProductsalesgrowthComponent;
}());



/***/ }),

/***/ "./src/app/stats/chapchap-productsalespie/chapchap-productsalespie.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/stats/chapchap-productsalespie/chapchap-productsalespie.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Pie Chart data -->\n\n<highcharts-chart \n  [Highcharts]=Highcharts \n  [options]=\"chartOptions\" \n  style=\"width: 100%; height:400px; display: block;\">\n</highcharts-chart>"

/***/ }),

/***/ "./src/app/stats/chapchap-productsalespie/chapchap-productsalespie.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/stats/chapchap-productsalespie/chapchap-productsalespie.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stats/chapchap-productsalespie/chapchap-productsalespie.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/stats/chapchap-productsalespie/chapchap-productsalespie.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ChapchapProductsalespieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapProductsalespieComponent", function() { return ChapchapProductsalespieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HC_exporting = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
var HC_sl = __webpack_require__(/*! highcharts/modules/series-label */ "./node_modules/highcharts/modules/series-label.js");
var HC_drill = __webpack_require__(/*! highcharts/modules/drilldown */ "./node_modules/highcharts/modules/drilldown.js");
var HC_exportdata = __webpack_require__(/*! highcharts/modules/export-data */ "./node_modules/highcharts/modules/export-data.js");
HC_exporting(highcharts__WEBPACK_IMPORTED_MODULE_1__);
HC_sl(highcharts__WEBPACK_IMPORTED_MODULE_1__);
HC_drill(highcharts__WEBPACK_IMPORTED_MODULE_1__);
HC_exportdata(highcharts__WEBPACK_IMPORTED_MODULE_1__);
var ChapchapProductsalespieComponent = /** @class */ (function () {
    function ChapchapProductsalespieComponent() {
        this.defaultTitle = 'Product Sales by category in %';
        this.drilldownTitle = 'More about ';
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.chartOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
            },
            title: {
                text: 'Product Sales by category in %',
                style: {
                    color: '#F73233'
                }
            },
            xAxis: {
                type: 'category'
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: 'black'
                        }
                    }
                }
            },
            series: [{
                    name: 'Products',
                    colorByPoint: true,
                    data: [{
                            name: 'Homecare',
                            y: 6,
                            drilldown: 'homecare'
                        }, {
                            name: 'Personal',
                            y: 10,
                            drilldown: 'personal'
                        }, {
                            name: 'Food',
                            y: 6,
                            drilldown: 'food'
                        }]
                }],
            drilldown: {
                title: {
                    text: 'Product Sales for Homecare category'
                },
                series: [{
                        id: 'homecare',
                        name: 'Homecare',
                        data: [
                            {
                                name: 'Sunlight',
                                y: 45,
                                drilldown: 'sunlight'
                            }, {
                                name: 'Omo',
                                y: 45,
                                drilldown: 'omo'
                            }, {
                                name: 'vim',
                                y: 45,
                                drilldown: 'vim'
                            }, {
                                name: 'Clear',
                                y: 45,
                                drilldown: 'clear'
                            }, {
                                name: 'Comfort',
                                y: 45,
                                drilldown: 'comfort'
                            }, {
                                name: 'Domex',
                                y: 45,
                                drilldown: 'domex'
                            }, {
                                name: 'Rin',
                                y: 45,
                                drilldown: 'rin'
                            }
                        ]
                    }, {
                        id: 'sunlight',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62,
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'omo',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'vim',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'clear',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'comfort',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'domex',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'rin',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'personal',
                        data: [
                            {
                                name: 'Axe',
                                y: 74,
                                drilldown: 'axe'
                            }, {
                                name: 'Close Up',
                                y: 62,
                                drilldown: 'closeUp'
                            }, {
                                name: 'Dove',
                                y: 51,
                                drilldown: 'dove'
                            }, {
                                name: 'Fair & Lovely',
                                y: 48,
                                drilldown: 'fair'
                            }, {
                                name: 'Lifebouy',
                                y: 42,
                                drilldown: 'lifebouy'
                            }, {
                                name: 'Lux',
                                y: 40,
                                drilldown: 'lux'
                            }, {
                                name: 'Rexona',
                                y: 39,
                                drilldown: 'rexona'
                            }, {
                                name: 'Sure',
                                y: 35,
                                drilldown: 'sure'
                            }, {
                                name: 'Vaseline',
                                y: 31,
                                drilldown: 'vaseline'
                            }
                        ]
                    }, {
                        id: 'axe',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'closeUp',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'dove',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'fair',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'lifebouy',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'lux',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'rexona',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'sure',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'vaseline',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'food',
                        data: [
                            {
                                name: 'Lipton tea',
                                y: 65,
                                drilldown: 'lipton'
                            }, {
                                name: 'Knorr',
                                y: 57,
                                drilldown: 'knorr'
                            }, {
                                name: 'Kissan',
                                y: 43,
                                drilldown: 'kissan'
                            }, {
                                name: 'Blueband',
                                y: 38,
                                drilldown: 'blueband'
                            }, {
                                name: 'Bru coffee',
                                y: 24,
                                drilldown: 'brucoffee'
                            }, {
                                name: 'PiKwalitu Walls',
                                y: 16,
                                drilldown: 'pikwa'
                            }
                        ]
                    }, {
                        id: 'lipton',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'knorr',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'kissan',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'blueband',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'brucoffee',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }, {
                        id: 'pikwa',
                        data: [
                            {
                                name: 'North',
                                y: 74
                            }, {
                                name: 'East',
                                y: 62
                            }, {
                                name: 'Central',
                                y: 51
                            }, {
                                name: 'West',
                                y: 44
                            }
                        ]
                    }
                ],
            }
        };
    }
    ChapchapProductsalespieComponent.prototype.ngOnInit = function () {
    };
    ChapchapProductsalespieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchap-productsalespie',
            template: __webpack_require__(/*! ./chapchap-productsalespie.component.html */ "./src/app/stats/chapchap-productsalespie/chapchap-productsalespie.component.html"),
            styles: [__webpack_require__(/*! ./chapchap-productsalespie.component.scss */ "./src/app/stats/chapchap-productsalespie/chapchap-productsalespie.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChapchapProductsalespieComponent);
    return ChapchapProductsalespieComponent;
}());



/***/ }),

/***/ "./src/app/stats/chapchap-statistics/chapchap-statistics.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/stats/chapchap-statistics/chapchap-statistics.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-chap-nav>\n\n     <div class=\"grid-container\">\n        <nav aria-label=\"breadcrumb\" class=\"mt-2 mr-2\">\n            <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item active mat-h1\" aria-current=\"page\"> Statistics </li>\n            </ol>\n        </nav>\n        <!-- Product sales charts -->\n        <mat-card>\n            <app-chapchap-productsales></app-chapchap-productsales>\n        </mat-card>\n\n        <mat-card>\n            <!-- Sales growth charts -->\n            <app-chapchap-productsalesgrowth></app-chapchap-productsalesgrowth>\n        </mat-card>\n\n        <mat-card>\n            <!-- Pie growth charts -->\n            <app-chapchap-productsalespie></app-chapchap-productsalespie>\n        </mat-card>\n     </div>\n\n</app-chap-nav>"

/***/ }),

/***/ "./src/app/stats/chapchap-statistics/chapchap-statistics.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/stats/chapchap-statistics/chapchap-statistics.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 60px; }\n"

/***/ }),

/***/ "./src/app/stats/chapchap-statistics/chapchap-statistics.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/stats/chapchap-statistics/chapchap-statistics.component.ts ***!
  \****************************************************************************/
/*! exports provided: ChapchapStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapchapStatisticsComponent", function() { return ChapchapStatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChapchapStatisticsComponent = /** @class */ (function () {
    function ChapchapStatisticsComponent() {
    }
    ChapchapStatisticsComponent.prototype.ngOnInit = function () {
    };
    ChapchapStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapchap-statistics',
            template: __webpack_require__(/*! ./chapchap-statistics.component.html */ "./src/app/stats/chapchap-statistics/chapchap-statistics.component.html"),
            styles: [__webpack_require__(/*! ./chapchap-statistics.component.scss */ "./src/app/stats/chapchap-statistics/chapchap-statistics.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChapchapStatisticsComponent);
    return ChapchapStatisticsComponent;
}());



/***/ }),

/***/ "./src/assets/js/ug-all.js":
/*!*********************************!*\
  !*** ./src/assets/js/ug-all.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory;
  } else {
    factory(Highcharts);
  }
}(function (Highcharts) {
Highcharts.maps["countries/ug/ug-all"] = {"title":"Uganda","version":"1.1.2","type":"FeatureCollection","copyright":"Copyright (c) 2015 Highsoft AS, Based on data from Natural Earth","copyrightShort":"Natural Earth","copyrightUrl":"http://www.naturalearthdata.com","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:EPSG:32636"}},"hc-transform":{"default":{"crs":"+proj=utm +zone=36 +datum=WGS84 +units=m +no_defs","scale":0.00111259955557,"jsonres":15.5,"jsonmarginX":-999,"jsonmarginY":9851.0,"xoffset":116061.812814,"yoffset":466479.233991}},
"features":[{"type":"Feature","id":"UG.2595","properties":{"hc-group":"admin1","hc-middle-x":0.53,"hc-middle-y":0.75,"hc-key":"ug-2595","hc-a2":"KA","labelrank":"7","hasc":"UG.KN","alt-name":null,"woe-id":"20070420","subregion":null,"fips":"UG36","postal-code":null,"name":"Kalangala","country":"Uganda","type-en":"District","region":"Central","longitude":"32.2457","woe-name":"Kalangala","latitude":"-0.355954","woe-label":"Kalangala, UG, Uganda","type":"District"},"geometry":{"type":"MultiPolygon","coordinates":[[[[4497,1120],[4497,1107],[4431,1107],[4412,1169],[4497,1120]]],[[[4379,1346],[4413,1292],[4379,1289],[4316,1345],[4339,1367],[4272,1419],[4355,1395],[4379,1346]]],[[[3673,1341],[3684,1340],[3687,1340],[3684,1340],[3673,1341]]],[[[3562,1433],[3629,1456],[3637,1457],[3629,1456],[3562,1433]]],[[[3710,1338],[3715,1336],[3715,1336],[3710,1338]]],[[[3719,1327],[3728,1297],[3767,1226],[3727,1296],[3719,1327]]],[[[3549,1551],[3577,1541],[3588,1539],[3577,1541],[3549,1551]]],[[[3671,1342],[3664,1348],[3654,1367],[3655,1369],[3655,1369],[3654,1367],[3671,1342]]],[[[3655,1369],[3665,1433],[3665,1416],[3655,1369],[3655,1369]]],[[[4575,990],[4667,1028],[4671,1074],[4746,1094],[4733,1028],[4627,868],[4589,844],[4550,872],[4611,928],[4619,964],[4575,990]]],[[[4194,1224],[4210,1176],[4246,1185],[4259,1237],[4325,1132],[4246,1133],[4223,1069],[4246,911],[4200,872],[4167,922],[4063,910],[4075,832],[4036,844],[4022,780],[3957,805],[4025,908],[4022,964],[4081,990],[4119,1046],[4168,1018],[4179,1050],[4128,1094],[4141,1119],[4075,1174],[3980,1162],[3903,1192],[3918,1217],[3879,1272],[3799,1303],[3827,1358],[3868,1365],[4005,1359],[4036,1316],[3997,1212],[4063,1182],[4194,1224]]]]}},{"type":"Feature","id":"UG.7073","properties":{"hc-group":"admin1","hc-middle-x":0.78,"hc-middle-y":0.30,"hc-key":"ug-7073","hc-a2":"BU","labelrank":"9","hasc":"UG.BZ","alt-name":null,"woe-id":"-20070438","subregion":null,"fips":"UGE7","postal-code":null,"name":"Buikwe","country":"Uganda","type-en":"District","region":"Central","longitude":"33.0039","woe-name":"Mukono","latitude":"0.187461","woe-label":"Mukono, UG, Uganda","type":"District"},"geometry":{"type":"MultiPolygon","coordinates":[[[[5259,1843],[5244,1789],[5167,1707],[5142,1754],[5180,1773],[5187,1846],[5218,1877],[5259,1843]]],[[[5683,2925],[5708,2896],[5811,2844],[5925,2749],[5969,2693],[5975,2554],[6099,2489],[5917,2409],[5943,2308],[5888,2278],[5847,2215],[5860,2277],[5759,2308],[5773,2283],[5705,2243],[5824,2230],[5771,2123],[5638,2022],[5470,1955],[5433,1953],[5387,2066],[5429,2152],[5387,2170],[5358,2137],[5414,2200],[5466,2296],[5662,2493],[5677,2597],[5624,2671],[5593,2779],[5600,2871],[5683,2925]]],[[[5016,1627],[5074,1620],[5061,1682],[5153,1643],[5113,1734],[5173,1660],[5206,1617],[5225,1653],[5272,1643],[5173,1557],[5126,1551],[4997,1582],[5016,1627]]]]}},{"type":"Feature","id":"UG.7074","properties":{"hc-group":"admin1","hc-middle-x":0.51,"hc-middle-y":0.27,"hc-key":"ug-7074","hc-a2":"BU","labelrank":"9","hasc":"UG.BV","alt-name":null,"woe-id":"-20070438","subregion":null,"fips":"UGF2","postal-code":null,"name":"Buvuma","country":"Uganda","type-en":"District","region":"Central","longitude":"33.2585","woe-name":"Mukono","latitude":"0.096833","woe-label":"Mukono, UG, Uganda","type":"District"},"geometry":{"type":"MultiPolygon","coordinates":[[[[6169,1899],[6205,1890],[6114,1826],[6103,1901],[6179,1928],[6169,1899]]],[[[5969,2030],[5937,2046],[5961,2114],[5975,2092],[5969,2030]]],[[[6230,2157],[6271,2100],[6235,2033],[6218,2074],[6165,2009],[6158,2054],[6096,2121],[6060,2100],[6021,2165],[6114,2158],[6127,2185],[6016,2294],[6080,2374],[6195,2388],[6232,2374],[6186,2329],[6232,2308],[6236,2265],[6288,2291],[6297,2374],[6334,2374],[6390,2296],[6336,2218],[6284,2191],[6233,2208],[6230,2157]]]]}},{"type":"Feature","id":"UG.7075","properties":{"hc-group":"admin1","hc-middle-x":0.38,"hc-middle-y":0.35,"hc-key":"ug-7075","hc-a2":"NA","labelrank":"9","hasc":"UG.NY","alt-name":null,"woe-id":"-20070454","subregion":null,"fips":"UGG7","postal-code":null,"name":"Namayingo","country":"Uganda","type-en":"District","region":"Eastern","longitude":"33.8049","woe-name":null,"latitude":"0.246262","woe-label":null,"type":"District"},"geometry":{"type":"MultiPolygon","coordinates":[[[[7015,1559],[6995,1486],[6930,1540],[6877,1539],[6975,1608],[7020,1599],[7015,1559]]],[[[7181,2026],[7205,1981],[7241,1989],[7316,1956],[7218,1928],[7099,1955],[7091,1999],[7181,2026]]],[[[7412,2243],[7340,2173],[7337,2138],[7218,2204],[7192,2100],[7166,2226],[7138,2257],[7113,2165],[6982,2191],[7048,2308],[6956,2308],[6994,2375],[7072,2399],[6969,2438],[7089,2514],[7153,2541],[7213,2537],[7232,2619],[7269,2672],[7335,2710],[7383,2576],[7305,2463],[7314,2405],[7412,2243]]]]}},{"type":"Feature","id":"UG.2785","properties":{"hc-group":"admin1","hc-middle-x":0.59,"hc-middle-y":0.58,"hc-key":"ug-2785","hc-a2":"KA","labelrank":"9","hasc":"UG.KK.UU","alt-name":null,"woe-id":"-56190194","subregion":null,"fips":"UGA5","postal-code":null,"name":"Katakwi","country":"Uganda","type-en":"County","region":"Eastern","longitude":"34.0087","woe-name":null,"latitude":"1.93889","woe-label":null,"type":"County"},"geometry":{"type":"Polygon","coordinates":[[[7946,5533],[7947,4917],[7621,4937],[7435,4901],[7341,4930],[7265,4979],[7177,4987],[7167,5020],[7174,5063],[7246,5114],[7291,5183],[7288,5258],[7256,5324],[7279,5373],[7343,5422],[7342,5586],[7329,5646],[7351,5684],[7331,5760],[7362,5834],[7340,5961],[7307,6018],[7322,6111],[7359,6199],[7857,5891],[7929,5832],[7946,5739],[7946,5533]]]}},{"type":"Feature","id":"UG.2791","properties":{"hc-group":"admin1","hc-middle-x":0.54,"hc-middle-y":0.71,"hc-key":"ug-2791","hc-a2":"NA","labelrank":"9","hasc":"UG.NP","alt-name":null,"woe-id":"-24550738","subregion":null,"fips":"UG91","postal-code":null,"name":"Nakapiripirit","country":"Uganda","type-en":"District","region":"Northern","longitude":"34.6179","woe-name":"Nakapiripirit","latitude":"1.76261","woe-label":"Nakapiripirit, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[7947,4917],[7946,5533],[8133,5551],[8206,5579],[8225,5643],[8399,5753],[8694,5772],[8749,5854],[8758,6531],[8987,6544],[9108,6211],[9123,5940],[9154,5836],[9191,5617],[9090,5607],[9081,5443],[9081,5195],[9054,5012],[8980,4884],[8763,4745],[8673,4799],[8604,4799],[8505,4842],[8372,4772],[8265,4776],[8095,4757],[8041,4786],[7981,4773],[7990,4908],[7947,4917]]]}},{"type":"Feature","id":"UG.3385","properties":{"hc-group":"admin1","hc-middle-x":0.25,"hc-middle-y":0.55,"hc-key":"ug-3385","hc-a2":"KA","labelrank":"9","hasc":"UG.KE","alt-name":null,"woe-id":"24550735","subregion":null,"fips":"UG81","postal-code":null,"name":"Kamwenge","country":"Uganda","type-en":"District","region":"Western","longitude":"30.5053","woe-name":"Kamwenge","latitude":"0.212247","woe-label":"Kamwenge, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[1501,2161],[1184,2158],[1100,2118],[936,2049],[775,1998],[632,1752],[684,1576],[754,1509],[663,1477],[452,1563],[342,1578],[243,1620],[259,1655],[316,2058],[379,2309],[426,2276],[558,2241],[610,2514],[565,2614],[594,2674],[586,2733],[685,2839],[755,2784],[808,2656],[869,2628],[869,2564],[897,2424],[920,2374],[1075,2426],[1168,2485],[1243,2561],[1362,2607],[1465,2574],[1560,2597],[1629,2567],[1626,2492],[1596,2452],[1629,2348],[1610,2312],[1540,2298],[1517,2269],[1501,2161]]]}},{"type":"Feature","id":"UG.3388","properties":{"hc-group":"admin1","hc-middle-x":0.48,"hc-middle-y":0.51,"hc-key":"ug-3388","hc-a2":"MB","labelrank":"9","hasc":"UG.RR","alt-name":null,"woe-id":"20070434","subregion":null,"fips":"UGC3","postal-code":null,"name":"Mbarara","country":"Uganda","type-en":"District","region":"Western","longitude":"30.8704","woe-name":"Mbarara","latitude":"-0.242298","woe-label":"Mbarara, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[1100,2118],[1184,2158],[1501,2161],[1649,2167],[1785,2192],[1858,2044],[1867,1846],[1814,1747],[1932,1722],[1945,1563],[1907,1405],[1909,1280],[2068,867],[2042,799],[2010,711],[1928,562],[1859,506],[1779,486],[1609,492],[1525,481],[1487,550],[1420,613],[1333,652],[1360,770],[1418,857],[1206,1019],[1160,1068],[1168,1137],[1142,1178],[1088,1191],[1025,1258],[1057,1373],[1067,1427],[1150,1489],[987,1542],[1025,1669],[1092,1781],[1186,1871],[1273,2036],[1145,2036],[1100,2118]]]}},{"type":"Feature","id":"UG.2786","properties":{"hc-group":"admin1","hc-middle-x":0.54,"hc-middle-y":0.49,"hc-key":"ug-2786","hc-a2":"KO","labelrank":"9","hasc":"UG.KF.JE","alt-name":null,"woe-id":"20070429","subregion":null,"fips":"UGA6","postal-code":null,"name":"Kotido","country":"Uganda","type-en":"County","region":"Northern","longitude":"33.9681","woe-name":"Kotido","latitude":"2.9427","woe-label":null,"type":"County"},"geometry":{"type":"Polygon","coordinates":[[[6686,7898],[6676,8037],[6746,8040],[6870,8002],[6928,8005],[7030,8096],[7018,8150],[7046,8199],[7145,8127],[7243,8079],[7298,8103],[7353,8091],[7358,7990],[7608,7982],[7840,7902],[8070,7737],[8168,7684],[8279,7682],[8183,7519],[8065,7370],[8021,7207],[7972,7001],[7816,7053],[7732,7046],[7561,7061],[7469,6997],[7445,6795],[7247,6894],[7234,7206],[7237,7398],[6994,7515],[6973,7581],[6907,7628],[6922,7692],[6923,7865],[6844,7860],[6788,7888],[6686,7898]]]}},{"type":"Feature","id":"UG.7056","properties":{"hc-group":"admin1","hc-middle-x":0.58,"hc-middle-y":0.51,"hc-key":"ug-7056","hc-a2":"AG","labelrank":"9","hasc":"UG.AG","alt-name":null,"woe-id":"-24550736","subregion":null,"fips":"UGE3","postal-code":null,"name":"Agago","country":"Uganda","type-en":"District","region":"Northern","longitude":"33.3941","woe-name":"Pader","latitude":"2.89176","woe-label":"Pader, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[6676,8037],[6686,7898],[6720,7450],[6737,7284],[6766,7236],[6779,7112],[6681,7021],[6628,6894],[6646,6756],[6537,6751],[6450,6818],[6385,6771],[6300,6793],[6232,6741],[6153,6766],[6011,6771],[5967,6756],[5907,6793],[5869,6785],[5730,6973],[5780,7029],[6026,7040],[6088,7107],[6099,7235],[6060,7302],[5836,7324],[5825,7391],[5920,7481],[5920,7559],[6033,7883],[6145,7865],[6221,7891],[6312,7899],[6296,8025],[6420,8021],[6368,8096],[6524,8080],[6589,8035],[6676,8037]]]}},{"type":"Feature","id":"UG.7083","properties":{"hc-group":"admin1","hc-middle-x":0.41,"hc-middle-y":0.17,"hc-key":"ug-7083","hc-a2":"BU","labelrank":"9","hasc":"UG.BB","alt-name":null,"woe-id":"-24550737","subregion":null,"fips":"UGE9","postal-code":null,"name":"Bulambuli","country":"Uganda","type-en":"County","region":"Eastern","longitude":"34.2883","woe-name":"Sironko","latitude":"1.29497","woe-label":null,"type":"County"},"geometry":{"type":"Polygon","coordinates":[[[7981,4773],[8041,4786],[8095,4757],[8265,4776],[8349,4721],[8409,4642],[8372,4563],[8222,4484],[8143,4383],[8134,4326],[8171,4285],[8368,4207],[8497,4136],[8547,4088],[8547,4023],[8317,4061],[8267,4110],[8123,4149],[7952,4174],[8007,4270],[8055,4475],[7981,4600],[7981,4773]]]}},{"type":"Feature","id":"UG.7084","properties":{"hc-group":"admin1","hc-middle-x":0.50,"hc-middle-y":0.30,"hc-key":"ug-7084","hc-a2":"KW","labelrank":"9","hasc":"UG.QW","alt-name":null,"woe-id":"-20070423","subregion":null,"fips":"UGF9","postal-code":null,"name":"Kween","country":"Uganda","type-en":"District","region":"Eastern","longitude":"34.599","woe-name":"Kapchorwa","latitude":"1.45896","woe-label":"Kapchorwa, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[8763,4745],[8848,4694],[8965,4513],[8936,4417],[8875,4339],[8746,4295],[8635,4187],[8593,4095],[8589,4238],[8633,4348],[8628,4425],[8561,4469],[8439,4502],[8372,4563],[8409,4642],[8349,4721],[8265,4776],[8372,4772],[8505,4842],[8604,4799],[8673,4799],[8763,4745]]]}},{"type":"Feature","id":"UG.7058","properties":{"hc-group":"admin1","hc-middle-x":0.71,"hc-middle-y":0.46,"hc-key":"ug-7058","hc-a2":"AM","labelrank":"9","hasc":"UG.AZ","alt-name":null,"woe-id":"-24550738","subregion":null,"fips":"UGE5","postal-code":null,"name":"Amudat","country":"Uganda","type-en":"District","region":"Northern","longitude":"34.883","woe-name":"Nakapiripirit","latitude":"1.67258","woe-label":"Nakapiripirit, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[8965,4513],[8848,4694],[8763,4745],[8980,4884],[9054,5012],[9081,5195],[9081,5443],[9090,5607],[9191,5617],[9154,5836],[9237,5910],[9309,6023],[9396,5815],[9378,5617],[9399,5545],[9461,5484],[9464,5442],[9420,5374],[9418,5003],[9346,4833],[9313,4793],[9234,4767],[9190,4701],[9150,4547],[9036,4454],[9039,4423],[9038,4424],[8965,4513]]]}},{"type":"Feature","id":"UG.1678","properties":{"hc-group":"admin1","hc-middle-x":0.28,"hc-middle-y":0.70,"hc-key":"ug-1678","hc-a2":"KA","labelrank":"7","hasc":"UG.KD","alt-name":null,"woe-id":"24550743","subregion":null,"fips":"UG80","postal-code":null,"name":"Kaberamaido","country":"Uganda","type-en":"District","region":"Eastern","longitude":"33.2","woe-name":"Kaberamaido","latitude":"1.66885","woe-label":"Kaberamaido, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[5553,4615],[5555,4785],[5513,4943],[5582,4979],[5602,5076],[5674,5047],[5803,5079],[5870,5301],[6083,5436],[6164,5541],[6181,5694],[6261,5693],[6334,5656],[6359,5581],[6421,5538],[6423,5461],[6473,5404],[6498,5322],[6464,5261],[6462,5188],[6302,5079],[6223,5045],[6111,5045],[6095,4886],[6034,4803],[6020,4595],[6021,4416],[5878,4434],[5754,4536],[5617,4601],[5553,4615]]]}},{"type":"Feature","id":"UG.1682","properties":{"hc-group":"admin1","hc-middle-x":0.68,"hc-middle-y":0.50,"hc-key":"ug-1682","hc-a2":"AM","labelrank":"9","hasc":"UG.LI.KO","alt-name":null,"woe-id":"56190195","subregion":null,"fips":"UGB4","postal-code":null,"name":"Amolatar","country":"Uganda","type-en":"County","region":"Northern","longitude":"32.6461","woe-name":null,"latitude":"1.57677","woe-label":null,"type":"County"},"geometry":{"type":"Polygon","coordinates":[[[5602,5076],[5582,4979],[5513,4943],[5555,4785],[5553,4615],[5260,4618],[5024,4609],[4857,4595],[4770,4705],[4675,4706],[4574,4794],[4440,4862],[4313,4902],[4285,4949],[4372,4962],[4845,4955],[4911,4993],[5187,5240],[5408,5253],[5602,5076]]]}},{"type":"Feature","id":"UG.1683","properties":{"hc-group":"admin1","hc-middle-x":0.46,"hc-middle-y":0.53,"hc-key":"ug-1683","hc-a2":"KA","labelrank":"9","hasc":"UG.RO.BL","alt-name":null,"woe-id":"56190214","subregion":null,"fips":"UGC2","postal-code":null,"name":"Kaliro","country":"Uganda","type-en":"County","region":"Eastern","longitude":"33.4858","woe-name":null,"latitude":"1.05681","woe-label":null,"type":"County"},"geometry":{"type":"Polygon","coordinates":[[[6836,3880],[6728,3700],[6643,3486],[6568,3448],[6442,3468],[6387,3492],[6375,3553],[6407,3684],[6311,3842],[6272,3864],[6323,3905],[6323,3959],[6450,4160],[6471,4261],[6579,4167],[6628,4099],[6676,4088],[6766,4003],[6836,3880]]]}},{"type":"Feature","id":"UG.1685","properties":{"hc-group":"admin1","hc-middle-x":0.40,"hc-middle-y":0.55,"hc-key":"ug-1685","hc-a2":"NA","labelrank":"9","hasc":"UG.BK.BS","alt-name":null,"woe-id":"-56190214","subregion":null,"fips":"UGD2","postal-code":null,"name":"Namutumba","country":"Uganda","type-en":"County","region":"Eastern","longitude":"33.6846","woe-name":"Namutumba","latitude":"0.877569","woe-label":null,"type":"County"},"geometry":{"type":"Polygon","coordinates":[[[6643,3486],[6728,3700],[6836,3880],[6957,3783],[6956,3691],[7048,3591],[7093,3545],[7109,3484],[7112,3347],[7155,3222],[7200,3186],[7229,3121],[7110,3100],[7050,3184],[7014,3137],[6957,3145],[6832,3204],[6817,3279],[6688,3326],[6662,3360],[6643,3486]]]}},{"type":"Feature","id":"UG.7051","properties":{"hc-group":"admin1","hc-middle-x":0.41,"hc-middle-y":0.61,"hc-key":"ug-7051","hc-a2":"KI","labelrank":"9","hasc":"UG.TG","alt-name":null,"woe-id":"-20070428","subregion":null,"fips":"UG84","postal-code":null,"name":"Kitgum","country":"Uganda","type-en":"District","region":"Northern","longitude":"33.3078","woe-name":"Kitgum","latitude":"3.36108","woe-label":"Kitgum, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[6127,8962],[6479,8944],[6562,8954],[6633,8996],[6704,8774],[6829,8599],[6914,8397],[6992,8306],[7046,8199],[7018,8150],[7030,8096],[6928,8005],[6870,8002],[6746,8040],[6676,8037],[6589,8035],[6524,8080],[6368,8096],[6420,8021],[6296,8025],[6312,7899],[6221,7891],[6145,7865],[6033,7883],[5920,7559],[5867,7648],[5746,7777],[5601,7855],[5491,7867],[5484,7732],[5312,7837],[5206,7868],[5197,8055],[5158,8133],[5158,8222],[5181,8272],[5365,8283],[5483,8333],[5505,8417],[5830,8417],[5881,8523],[5970,8545],[6054,8450],[6054,8350],[6161,8344],[6166,8595],[6144,8701],[6099,8762],[6088,8824],[6127,8962]]]}},{"type":"Feature","id":"UG.2762","properties":{"hc-group":"admin1","hc-middle-x":0.47,"hc-middle-y":0.45,"hc-key":"ug-2762","hc-a2":"LA","labelrank":"9","hasc":"UG.LM","alt-name":null,"woe-id":"-20070428","subregion":null,"fips":"UGG3","postal-code":null,"name":"Lamwo","country":"Uganda","type-en":"District","region":"Northern","longitude":"32.7269","woe-name":"Kitgum","latitude":"3.56903","woe-label":"Kitgum, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[5206,7868],[5115,7849],[5009,7786],[4693,7784],[4682,7826],[4446,8032],[4391,8072],[4320,8123],[4221,8238],[4198,8300],[4122,8376],[4082,8481],[4044,8531],[4044,8680],[4067,8706],[4419,8919],[4503,8938],[5156,8991],[5316,9039],[5467,9115],[5583,9201],[5655,9197],[5897,9000],[5996,8968],[6127,8962],[6088,8824],[6099,8762],[6144,8701],[6166,8595],[6161,8344],[6054,8350],[6054,8450],[5970,8545],[5881,8523],[5830,8417],[5505,8417],[5483,8333],[5365,8283],[5181,8272],[5158,8222],[5158,8133],[5197,8055],[5206,7868]]]}},{"type":"Feature","id":"UG.2767","properties":{"hc-group":"admin1","hc-middle-x":0.53,"hc-middle-y":0.50,"hc-key":"ug-2767","hc-a2":"PA","labelrank":"9","hasc":"UG.PD","alt-name":null,"woe-id":"-24550736","subregion":null,"fips":"UG92","postal-code":null,"name":"Pader","country":"Uganda","type-en":"District","region":"Northern","longitude":"32.8933","woe-name":"Pader","latitude":"2.87543","woe-label":"Pader, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[4693,7784],[5009,7786],[5115,7849],[5206,7868],[5312,7837],[5484,7732],[5491,7867],[5601,7855],[5746,7777],[5867,7648],[5920,7559],[5920,7481],[5825,7391],[5836,7324],[6060,7302],[6099,7235],[6088,7107],[6026,7040],[5780,7029],[5730,6973],[5869,6785],[5706,6703],[5650,6635],[5589,6618],[5523,6649],[5497,6744],[5281,6834],[5251,6766],[5191,6722],[4977,6770],[5034,6859],[5011,6934],[5109,7014],[5048,7061],[5006,7153],[4930,7224],[4737,7583],[4614,7746],[4693,7784]]]}},{"type":"Feature","id":"UG.2777","properties":{"hc-group":"admin1","hc-middle-x":0.35,"hc-middle-y":0.49,"hc-key":"ug-2777","hc-a2":"SI","labelrank":"9","hasc":"UG.SI.BD","alt-name":null,"woe-id":"-24550737","subregion":null,"fips":"UG94","postal-code":null,"name":"Sironko","country":"Uganda","type-en":"County","region":"Eastern","longitude":"34.3234","woe-name":"Sironko","latitude":"1.15945","woe-label":null,"type":"County"},"geometry":{"type":"Polygon","coordinates":[[[8226,3878],[8101,3917],[8045,3912],[7987,3939],[7935,4015],[7842,4024],[7909,4081],[7952,4174],[8123,4149],[8267,4110],[8317,4061],[8547,4023],[8515,3909],[8444,3900],[8287,3914],[8226,3878]]]}},{"type":"Feature","id":"UG.2778","properties":{"hc-group":"admin1","hc-middle-x":0.48,"hc-middle-y":0.52,"hc-key":"ug-2778","hc-a2":"MB","labelrank":"9","hasc":"UG.ME.BN","alt-name":null,"woe-id":"20070433","subregion":null,"fips":"UGA9","postal-code":null,"name":"Mbale","country":"Uganda","type-en":"County","region":"Eastern","longitude":"34.2131","woe-name":"Mbale","latitude":"1.03446","woe-label":null,"type":"County"},"geometry":{"type":"Polygon","coordinates":[[[7842,4024],[7935,4015],[7987,3939],[8045,3912],[8101,3917],[8226,3878],[8148,3855],[8047,3711],[8041,3636],[7972,3604],[7933,3523],[7914,3440],[7855,3385],[7797,3478],[7704,3527],[7735,3601],[7764,3755],[7674,3778],[7758,3844],[7790,3931],[7787,3978],[7764,4052],[7801,4032],[7842,4024]]]}},{"type":"Feature","id":"UG.2780","properties":{"hc-group":"admin1","hc-middle-x":0.36,"hc-middle-y":0.52,"hc-key":"ug-2780","hc-a2":"BU","labelrank":"9","hasc":"UG.BG","alt-name":null,"woe-id":"99","subregion":null,"fips":"UG66","postal-code":null,"name":"Bugiri","country":"Uganda","type-en":"District","region":"Eastern","longitude":"33.7627","woe-name":null,"latitude":"0.536737","woe-label":null,"type":"District"},"geometry":{"type":"Polygon","coordinates":[[[6969,2438],[6954,2436],[6937,2427],[6953,2509],[6851,2532],[6768,2609],[6790,2649],[6790,2765],[6807,2840],[6892,2950],[6900,3103],[6848,3154],[6832,3204],[6957,3145],[7014,3137],[7050,3184],[7110,3100],[7229,3121],[7256,3119],[7282,3111],[7341,2967],[7459,2882],[7407,2843],[7339,2752],[7335,2710],[7269,2672],[7232,2619],[7213,2537],[7153,2541],[7089,2514],[6969,2438]]]}},{"type":"Feature","id":"UG.2781","properties":{"hc-group":"admin1","hc-middle-x":0.48,"hc-middle-y":0.33,"hc-key":"ug-2781","hc-a2":"BU","labelrank":"9","hasc":"UG.BU","alt-name":null,"woe-id":"20070454","subregion":null,"fips":"UG67","postal-code":null,"name":"Busia","country":"Uganda","type-en":"District","region":"Eastern","longitude":"34.0041","woe-name":"Busia","latitude":"0.412014","woe-label":"Busia, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[7335,2710],[7339,2752],[7407,2843],[7459,2882],[7532,2877],[7598,2906],[7794,2892],[7747,2704],[7686,2611],[7710,2507],[7688,2443],[7619,2390],[7533,2275],[7506,2313],[7412,2243],[7314,2405],[7305,2463],[7383,2576],[7335,2710]]]}},{"type":"Feature","id":"UG.2782","properties":{"hc-group":"admin1","hc-middle-x":0.68,"hc-middle-y":0.31,"hc-key":"ug-2782","hc-a2":"BU","labelrank":"9","hasc":"UG.BJ.BN","alt-name":null,"woe-id":"56190199","subregion":null,"fips":"UGB7","postal-code":null,"name":"Butaleja","country":"Uganda","type-en":"County","region":"Eastern","longitude":"33.9295","woe-name":"Butaleja","latitude":"0.881707","woe-label":null,"type":"County"},"geometry":{"type":"Polygon","coordinates":[[[7282,3111],[7256,3119],[7229,3121],[7200,3186],[7155,3222],[7112,3347],[7109,3484],[7093,3545],[7048,3591],[7139,3615],[7241,3596],[7350,3574],[7454,3614],[7559,3703],[7674,3778],[7764,3755],[7735,3601],[7704,3527],[7665,3524],[7572,3470],[7501,3465],[7439,3424],[7394,3364],[7282,3111]]]}},{"type":"Feature","id":"UG.2783","properties":{"hc-group":"admin1","hc-middle-x":0.53,"hc-middle-y":0.81,"hc-key":"ug-2783","hc-a2":"MA","labelrank":"9","hasc":"UG.MG","alt-name":null,"woe-id":"24550732","subregion":null,"fips":"UG86","postal-code":null,"name":"Mayuge","country":"Uganda","type-en":"District","region":"Eastern","longitude":"33.5556","woe-name":"Mayuge","latitude":"0.277049","woe-label":"Mayuge, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[6790,2649],[6768,2609],[6851,2532],[6953,2509],[6937,2427],[6904,2399],[6854,2423],[6811,2399],[6824,2276],[6807,2239],[6735,2202],[6709,2157],[6652,2191],[6613,2152],[6640,2230],[6587,2179],[6567,2257],[6561,2165],[6440,2271],[6482,2296],[6390,2374],[6503,2368],[6572,2322],[6597,2379],[6513,2441],[6590,2468],[6625,2562],[6708,2666],[6790,2649]]]}},{"type":"Feature","id":"UG.2779","properties":{"hc-group":"admin1","hc-middle-x":0.43,"hc-middle-y":0.58,"hc-key":"ug-2779","hc-a2":"MA","labelrank":"9","hasc":"UG.MF","alt-name":"Bubuulo|Manafa","woe-id":"20070433","subregion":null,"fips":"UGC5","postal-code":null,"name":"Manafwa","country":"Uganda","type-en":"District","region":"Eastern","longitude":"34.312","woe-name":"Manafwa","latitude":"0.886597","woe-label":"Mbale, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[8110,3230],[7982,3285],[7855,3385],[7914,3440],[7933,3523],[7972,3604],[8041,3636],[8047,3711],[8173,3713],[8211,3728],[8387,3728],[8430,3713],[8418,3632],[8369,3510],[8313,3439],[8286,3362],[8130,3271],[8110,3230]]]}},{"type":"Feature","id":"UG.2784","properties":{"hc-group":"admin1","hc-middle-x":0.46,"hc-middle-y":0.58,"hc-key":"ug-2784","hc-a2":"TO","labelrank":"9","hasc":"UG.TR","alt-name":null,"woe-id":"20070455","subregion":null,"fips":"UG76","postal-code":null,"name":"Tororo","country":"Uganda","type-en":"District","region":"Eastern","longitude":"34.0805","woe-name":"Tororo","latitude":"0.737709","woe-label":"Tororo, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[7855,3385],[7982,3285],[8110,3230],[8071,3105],[8025,3055],[7885,2996],[7828,2957],[7794,2892],[7598,2906],[7532,2877],[7459,2882],[7341,2967],[7282,3111],[7394,3364],[7439,3424],[7501,3465],[7572,3470],[7665,3524],[7704,3527],[7797,3478],[7855,3385]]]}},{"type":"Feature","id":"UG.3382","properties":{"hc-group":"admin1","hc-middle-x":0.46,"hc-middle-y":0.29,"hc-key":"ug-3382","hc-a2":"MA","labelrank":"7","hasc":"UG.MA","alt-name":null,"woe-id":"-20070451","subregion":null,"fips":"UG71","postal-code":null,"name":"Masaka","country":"Uganda","type-en":"District","region":"Central","longitude":"31.8532","woe-name":"Masaka","latitude":"-0.43198","woe-label":"Masaka, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[3671,1342],[3673,1341],[3684,1340],[3687,1340],[3701,1341],[3710,1338],[3715,1336],[3719,1327],[3727,1296],[3767,1226],[3699,1207],[3629,1086],[3536,976],[3409,908],[3372,810],[3313,728],[3290,631],[3314,577],[3217,423],[3082,639],[3106,715],[3108,814],[3051,897],[2977,910],[2993,975],[2960,1041],[2971,1084],[3119,1165],[3119,1258],[3168,1307],[3496,1301],[3654,1367],[3664,1348],[3671,1342]]]}},{"type":"Feature","id":"UG.3384","properties":{"hc-group":"admin1","hc-middle-x":0.49,"hc-middle-y":0.50,"hc-key":"ug-3384","hc-a2":"KA","labelrank":"7","hasc":"UG.KS","alt-name":null,"woe-id":"20070424","subregion":null,"fips":"UG40","postal-code":null,"name":"Kasese","country":"Uganda","type-en":"District","region":"Western","longitude":"29.9844","woe-name":"Kasese","latitude":"0.138279","woe-label":"Kasese, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[-339,1487],[-326,1539],[-436,1501],[-453,1504],[-493,1506],[-503,1557],[-559,1566],[-580,1626],[-652,1674],[-700,1668],[-736,1627],[-686,1792],[-711,1912],[-691,1997],[-596,2135],[-546,2109],[-521,2136],[-459,2450],[-227,2463],[-23,2508],[127,2463],[180,2373],[278,2380],[379,2309],[316,2058],[259,1655],[118,1662],[-129,1474],[-246,1473],[-339,1487]]]}},{"type":"Feature","id":"UG.3389","properties":{"hc-group":"admin1","hc-middle-x":0.36,"hc-middle-y":0.53,"hc-key":"ug-3389","hc-a2":"NT","labelrank":"7","hasc":"UG.NT","alt-name":null,"woe-id":"20070440","subregion":null,"fips":"UG59","postal-code":null,"name":"Ntungamo","country":"Uganda","type-en":"District","region":"Western","longitude":"30.3139","woe-name":"Ntungamo","latitude":"-0.976405","woe-label":"Ntungamo, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[749,-223],[638,-236],[541,-218],[496,-255],[473,-363],[423,-393],[314,-409],[266,-455],[205,-471],[208,-416],[170,-395],[34,-370],[-5,-268],[-43,-229],[-43,-120],[10,-53],[13,29],[-64,87],[-27,209],[-25,356],[74,361],[165,439],[223,423],[265,376],[387,366],[368,279],[434,257],[562,246],[657,285],[739,235],[879,231],[996,269],[994,166],[933,71],[839,-18],[793,-146],[749,-223]]]}},{"type":"Feature","id":"UG.3383","properties":{"hc-group":"admin1","hc-middle-x":0.38,"hc-middle-y":0.46,"hc-key":"ug-3383","hc-a2":"BU","labelrank":"9","hasc":"UG.BS","alt-name":null,"woe-id":"-20070414","subregion":null,"fips":"UG29","postal-code":null,"name":"Bushenyi","country":"Uganda","type-en":"District","region":"Western","longitude":"30.1245","woe-name":"Bushenyi","latitude":"-0.471119","woe-label":"Bushenyi, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[-248,842],[-247,961],[-302,1040],[-242,1055],[-91,1137],[-31,1122],[37,1040],[128,1010],[271,972],[407,897],[489,868],[490,740],[467,628],[180,598],[105,620],[67,733],[22,777],[-99,762],[-166,785],[-248,842]]]}},{"type":"Feature","id":"UG.3390","properties":{"hc-group":"admin1","hc-middle-x":0.66,"hc-middle-y":0.66,"hc-key":"ug-3390","hc-a2":"RU","labelrank":"9","hasc":"UG.RK","alt-name":null,"woe-id":"20070443","subregion":null,"fips":"UG93","postal-code":null,"name":"Rukungiri","country":"Uganda","type-en":"District","region":"Western","longitude":"29.9095","woe-name":"Rukungiri","latitude":"-0.710038","woe-label":"Rukungiri, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[-302,1040],[-247,961],[-248,842],[-279,717],[-334,691],[-304,620],[-230,583],[-175,520],[-139,438],[-25,356],[-27,209],[-64,87],[13,29],[10,-53],[-43,-120],[-43,-229],[-5,-268],[-268,-198],[-328,-187],[-463,43],[-432,117],[-476,202],[-445,358],[-556,527],[-568,635],[-661,642],[-697,693],[-705,757],[-694,981],[-736,976],[-624,1005],[-481,1103],[-433,1100],[-302,1040]]]}},{"type":"Feature","id":"UG.3386","properties":{"hc-group":"admin1","hc-middle-x":0.64,"hc-middle-y":0.33,"hc-key":"ug-3386","hc-a2":"IB","labelrank":"9","hasc":"UG.IB.IA","alt-name":null,"woe-id":"56190204","subregion":null,"fips":"UGB8","postal-code":null,"name":"Ibanda","country":"Uganda","type-en":"County","region":"Western","longitude":"30.4693","woe-name":null,"latitude":"-0.07507700000000001","woe-label":null,"type":"County"},"geometry":{"type":"Polygon","coordinates":[[[1057,1373],[941,1358],[830,1318],[794,1332],[732,1309],[681,1253],[646,1295],[484,1403],[405,1439],[385,1513],[342,1578],[452,1563],[663,1477],[754,1509],[684,1576],[632,1752],[775,1998],[936,2049],[1100,2118],[1145,2036],[1273,2036],[1186,1871],[1092,1781],[1025,1669],[987,1542],[1150,1489],[1067,1427],[1057,1373]]]}},{"type":"Feature","id":"UG.3391","properties":{"hc-group":"admin1","hc-middle-x":0.54,"hc-middle-y":0.60,"hc-key":"ug-3391","hc-a2":"MB","labelrank":"9","hasc":"UG.RR.KS","alt-name":null,"woe-id":"20070434","subregion":null,"fips":"UGB1","postal-code":null,"name":"Mbarara","country":"Uganda","type-en":"County","region":"Western","longitude":"30.5341","woe-name":"Mbarara","latitude":"-0.534736","woe-label":null,"type":"County"},"geometry":{"type":"Polygon","coordinates":[[[830,1318],[941,1358],[1057,1373],[1025,1258],[1088,1191],[1142,1178],[1168,1137],[1160,1068],[1206,1019],[1418,857],[1360,770],[1333,652],[1263,653],[1185,629],[1107,639],[1084,502],[1093,254],[996,269],[879,231],[739,235],[657,285],[562,246],[434,257],[368,279],[387,366],[513,444],[680,604],[709,676],[764,877],[766,956],[760,1020],[817,1074],[810,1204],[830,1318]]]}},{"type":"Feature","id":"UG.3392","properties":{"hc-group":"admin1","hc-middle-x":0.36,"hc-middle-y":0.41,"hc-key":"ug-3392","hc-a2":"KA","labelrank":"7","hasc":"UG.KA","alt-name":null,"woe-id":"20070418","subregion":null,"fips":"UG34","postal-code":null,"name":"Kabale","country":"Uganda","type-en":"District","region":"Western","longitude":"30.0088","woe-name":"Kabale","latitude":"-1.23122","woe-label":"Kabale, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[-328,-187],[-268,-198],[-5,-268],[34,-370],[170,-395],[208,-416],[205,-471],[266,-455],[314,-409],[423,-393],[357,-516],[272,-597],[197,-623],[168,-658],[147,-761],[-19,-846],[-61,-913],[-212,-990],[-332,-999],[-383,-928],[-397,-809],[-472,-721],[-578,-491],[-527,-452],[-586,-407],[-660,-309],[-608,-247],[-575,-150],[-471,-157],[-387,-225],[-328,-187]]]}},{"type":"Feature","id":"UG.3394","properties":{"hc-group":"admin1","hc-middle-x":0.56,"hc-middle-y":0.67,"hc-key":"ug-3394","hc-a2":"KA","labelrank":"9","hasc":"UG.UU","alt-name":null,"woe-id":"24550733","subregion":null,"fips":"UG82","postal-code":null,"name":"Kanungu","country":"Uganda","type-en":"District","region":"Western","longitude":"29.7256","woe-name":"Kanungu","latitude":"-0.8352540000000001","woe-label":"Kanungu, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[-328,-187],[-387,-225],[-471,-157],[-575,-150],[-608,-247],[-697,-209],[-744,-210],[-915,-143],[-998,-85],[-982,-50],[-990,51],[-912,103],[-885,157],[-880,272],[-901,386],[-876,576],[-847,619],[-862,683],[-808,700],[-810,843],[-827,889],[-736,976],[-694,981],[-705,757],[-697,693],[-661,642],[-568,635],[-556,527],[-445,358],[-476,202],[-432,117],[-463,43],[-328,-187]]]}},{"type":"Feature","id":"UG.2750","properties":{"hc-group":"admin1","hc-middle-x":0.48,"hc-middle-y":0.54,"hc-key":"ug-2750","hc-a2":"NE","labelrank":"7","hasc":"UG.NE","alt-name":null,"woe-id":"-20070439","subregion":null,"fips":"UG58","postal-code":null,"name":"Nebbi","country":"Uganda","type-en":"District","region":"Northern","longitude":"31.2582","woe-name":"Nebbi","latitude":"2.44381","woe-label":"Nebbi, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[1725,6394],[1741,6434],[1822,6445],[1834,6514],[1892,6550],[1920,6622],[1880,6744],[2008,6765],[2084,6809],[2271,6833],[2360,6913],[2367,6981],[2420,7058],[2541,7118],[2626,7055],[2646,6920],[2592,6883],[2600,6797],[2674,6692],[2704,6610],[2737,6582],[2793,6591],[2791,6535],[2727,6502],[2697,6399],[2671,6306],[2629,6271],[2492,6211],[2410,6121],[2351,5984],[2303,5945],[2151,6043],[2127,6198],[2034,6164],[1892,6174],[1855,6206],[1866,6253],[1725,6394]]]}},{"type":"Feature","id":"UG.7048","properties":{"hc-group":"admin1","hc-middle-x":0.59,"hc-middle-y":0.44,"hc-key":"ug-7048","hc-a2":"ZO","labelrank":"7","hasc":"UG.ZO","alt-name":null,"woe-id":"20070439","subregion":null,"fips":"UGH7","postal-code":null,"name":"Zombo","country":"Uganda","type-en":"District","region":"Northern","longitude":"30.9019","woe-name":"Nebbi","latitude":"2.54111","woe-label":"Nebbi, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[1880,6744],[1920,6622],[1892,6550],[1834,6514],[1822,6445],[1741,6434],[1725,6394],[1654,6395],[1596,6281],[1541,6255],[1473,6301],[1422,6370],[1394,6461],[1259,6463],[1226,6504],[1283,6613],[1287,6773],[1348,6911],[1470,6937],[1535,6980],[1723,7027],[1766,6880],[1766,6794],[1880,6744]]]}},{"type":"Feature","id":"UG.7080","properties":{"hc-group":"admin1","hc-middle-x":0.58,"hc-middle-y":0.55,"hc-key":"ug-7080","hc-a2":"NG","labelrank":"7","hasc":"UG.NR","alt-name":null,"woe-id":"-20070430","subregion":null,"fips":"UGG9","postal-code":null,"name":"Ngora","country":"Uganda","type-en":"District","region":"Eastern","longitude":"33.7704","woe-name":"Kumi","latitude":"1.51075","woe-label":"Kumi, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[7177,4987],[7265,4979],[7341,4930],[7273,4905],[7234,4838],[7250,4656],[7239,4535],[7167,4507],[7123,4452],[7136,4310],[7079,4300],[7024,4362],[6695,4342],[6753,4431],[6902,4500],[6994,4841],[7030,4944],[7070,4975],[7130,4964],[7177,4987]]]}},{"type":"Feature","id":"UG.7081","properties":{"hc-group":"admin1","hc-middle-x":0.60,"hc-middle-y":0.47,"hc-key":"ug-7081","hc-a2":"BU","labelrank":"7","hasc":"UG.BE","alt-name":null,"woe-id":"-20070430","subregion":null,"fips":"UGC3","postal-code":null,"name":"Bukedea","country":"Uganda","type-en":"District","region":"Eastern","longitude":"34.1286","woe-name":"Kumi","latitude":"1.34244","woe-label":"Kumi, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[7842,4024],[7801,4032],[7764,4052],[7597,4110],[7430,4144],[7400,4182],[7545,4276],[7539,4463],[7634,4535],[7622,4656],[7706,4706],[7981,4773],[7981,4600],[8055,4475],[8007,4270],[7952,4174],[7909,4081],[7842,4024]]]}},{"type":"Feature","id":"UG.1684","properties":{"hc-group":"admin1","hc-middle-x":0.53,"hc-middle-y":0.36,"hc-key":"ug-1684","hc-a2":"BU","labelrank":"9","hasc":"UG.BD","alt-name":null,"woe-id":"56190197","subregion":null,"fips":"UGC1","postal-code":null,"name":"Budaka","country":"Uganda","type-en":"County","region":"Eastern","longitude":"33.9867","woe-name":null,"latitude":"1.09635","woe-label":null,"type":"County"},"geometry":{"type":"Polygon","coordinates":[[[7790,3931],[7758,3844],[7674,3778],[7559,3703],[7454,3614],[7350,3574],[7241,3596],[7251,3768],[7284,3812],[7378,3884],[7323,3945],[7356,4033],[7506,4038],[7634,4000],[7790,3931]]]}},{"type":"Feature","id":"UG.7082","properties":{"hc-group":"admin1","hc-middle-x":0.58,"hc-middle-y":0.59,"hc-key":"ug-7082","hc-a2":"KI","labelrank":"9","hasc":"UG.QB","alt-name":null,"woe-id":"-20070441","subregion":null,"fips":"UGF6","postal-code":null,"name":"Kibuku","country":"Uganda","type-en":"County","region":"Eastern","longitude":"33.7704","woe-name":null,"latitude":"1.03603","woe-label":null,"type":"County"},"geometry":{"type":"Polygon","coordinates":[[[7241,3596],[7139,3615],[7048,3591],[6956,3691],[6957,3783],[6836,3880],[6984,3878],[7117,3928],[7356,4033],[7323,3945],[7378,3884],[7284,3812],[7251,3768],[7241,3596]]]}},{"type":"Feature","id":"UG.1688","properties":{"hc-group":"admin1","hc-middle-x":0.43,"hc-middle-y":0.50,"hc-key":"ug-1688","hc-a2":"PA","labelrank":"9","hasc":"UG.PL","alt-name":null,"woe-id":"-20070441","subregion":null,"fips":"UGB3","postal-code":null,"name":"Pallisa","country":"Uganda","type-en":"District","region":"Eastern","longitude":"33.688","woe-name":"Pallisa","latitude":"1.18799","woe-label":"Pallisa, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[6399,4352],[6444,4359],[6463,4321],[6577,4321],[6695,4342],[7024,4362],[7079,4300],[7136,4310],[7189,4305],[7260,4233],[7364,4210],[7400,4182],[7430,4144],[7597,4110],[7764,4052],[7787,3978],[7790,3931],[7634,4000],[7506,4038],[7356,4033],[7117,3928],[6984,3878],[6836,3880],[6766,4003],[6676,4088],[6628,4099],[6579,4167],[6471,4261],[6418,4283],[6399,4352]]]}},{"type":"Feature","id":"UG.7079","properties":{"hc-group":"admin1","hc-middle-x":0.46,"hc-middle-y":0.55,"hc-key":"ug-7079","hc-a2":"SE","labelrank":"9","hasc":"UG.SX","alt-name":null,"woe-id":"-20070447","subregion":null,"fips":"UGH5","postal-code":null,"name":"Serere","country":"Uganda","type-en":"District","region":"Eastern","longitude":"33.4424","woe-name":"Soroti","latitude":"1.50212","woe-label":"Soroti, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[6695,4342],[6577,4321],[6463,4321],[6444,4359],[6399,4352],[6348,4419],[6261,4415],[6174,4390],[6021,4416],[6020,4595],[6034,4803],[6095,4886],[6111,5045],[6223,5045],[6302,5079],[6330,5034],[6459,5001],[6515,4884],[6599,4828],[6733,4795],[6857,4806],[6994,4841],[6902,4500],[6753,4431],[6695,4342]]]}},{"type":"Feature","id":"UG.7068","properties":{"hc-group":"admin1","hc-middle-x":0.55,"hc-middle-y":0.64,"hc-key":"ug-7068","hc-a2":"KA","labelrank":"7","hasc":"UG.QA","alt-name":null,"woe-id":"-20070451","subregion":null,"fips":"UGF5","postal-code":null,"name":"Kalungu","country":"Uganda","type-en":"District","region":"Central","longitude":"31.8386","woe-name":"Masaka","latitude":"-0.15779","woe-label":"Masaka, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[3029,1896],[3122,1950],[3236,1933],[3307,1902],[3344,1886],[3426,1792],[3473,1740],[3579,1565],[3549,1551],[3549,1551],[3577,1541],[3588,1539],[3579,1510],[3562,1433],[3629,1456],[3637,1457],[3666,1445],[3665,1433],[3665,1416],[3655,1369],[3655,1369],[3655,1369],[3655,1369],[3654,1367],[3496,1301],[3168,1307],[3233,1415],[3195,1491],[3179,1578],[3075,1828],[3029,1896]]]}},{"type":"Feature","id":"UG.7070","properties":{"hc-group":"admin1","hc-middle-x":0.40,"hc-middle-y":0.54,"hc-key":"ug-7070","hc-a2":"GO","labelrank":"7","hasc":"UG.GM","alt-name":null,"woe-id":"-20070436","subregion":null,"fips":"UGF4","postal-code":null,"name":"Gomba","country":"Uganda","type-en":"District","region":"Central","longitude":"31.6617","woe-name":"Mpigi","latitude":"0.196093","woe-label":"Mpigi, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[3307,1902],[3236,1933],[3122,1950],[3029,1896],[2975,1889],[2920,1901],[2778,1996],[2588,2095],[2513,2182],[2426,2189],[2430,2289],[2742,2376],[2887,2450],[2971,2446],[3173,2381],[3267,2298],[3360,2346],[3410,2331],[3455,2260],[3533,2228],[3641,2242],[3696,2274],[3974,2294],[3943,2251],[3834,2224],[3709,2153],[3638,2061],[3403,1958],[3307,1902]]]}},{"type":"Feature","id":"UG.7049","properties":{"hc-group":"admin1","hc-middle-x":0.71,"hc-middle-y":0.48,"hc-key":"ug-7049","hc-a2":"AM","labelrank":"9","hasc":"UG.AY","alt-name":null,"woe-id":"-20070415","subregion":null,"fips":"UGB9","postal-code":null,"name":"Amuru","country":"Uganda","type-en":"District","region":"Northern","longitude":"32.0347","woe-name":"Gulu","latitude":"2.9511","woe-label":"Gulu, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[3811,8592],[3885,8525],[4005,8501],[4044,8531],[4082,8481],[4122,8376],[4198,8300],[4221,8238],[4320,8123],[4391,8072],[4317,8006],[4246,7908],[4125,7805],[4089,7747],[4048,7627],[4044,7515],[4077,7435],[4120,7119],[4091,7010],[3968,7050],[3901,7098],[3744,7105],[3676,7145],[3221,7139],[3167,7092],[3139,7017],[2915,7017],[2834,6977],[2684,6822],[2600,6797],[2592,6883],[2646,6920],[2626,7055],[2541,7118],[2500,7186],[2493,7266],[2511,7343],[2560,7442],[2639,7421],[2725,7330],[2817,7276],[2879,7294],[2987,7445],[3189,7477],[3573,7595],[3585,7671],[3656,7786],[3671,7863],[3742,7953],[3748,8069],[3786,8138],[3765,8283],[3801,8319],[3811,8592]]]}},{"type":"Feature","id":"UG.2787","properties":{"hc-group":"admin1","hc-middle-x":0.66,"hc-middle-y":0.38,"hc-key":"ug-2787","hc-a2":"AM","labelrank":"9","hasc":"UG.AM","alt-name":null,"woe-id":"20070446","subregion":null,"fips":"UGB5","postal-code":null,"name":"Amuria","country":"Uganda","type-en":"District","region":"Eastern","longitude":"33.6359","woe-name":"Amuria","latitude":"2.141","woe-label":"Katakwi, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[6669,6297],[6792,6252],[6845,6306],[6913,6309],[7010,6406],[7058,6386],[7359,6199],[7322,6111],[7307,6018],[7340,5961],[7362,5834],[7331,5760],[7351,5684],[7329,5646],[7342,5586],[7343,5422],[7279,5373],[7256,5324],[7288,5258],[7291,5183],[7246,5114],[7174,5063],[7137,5108],[7121,5188],[6964,5347],[6887,5397],[6867,5463],[6724,5523],[6640,5643],[6566,5660],[6520,5626],[6473,5404],[6423,5461],[6421,5538],[6359,5581],[6334,5656],[6331,5794],[6408,5857],[6459,5820],[6525,5863],[6512,5903],[6535,5977],[6473,6069],[6551,6070],[6674,6171],[6669,6297]]]}},{"type":"Feature","id":"UG.7055","properties":{"hc-group":"admin1","hc-middle-x":0.67,"hc-middle-y":0.50,"hc-key":"ug-7055","hc-a2":"OT","labelrank":"9","hasc":"UG.OT","alt-name":null,"woe-id":"-20070431","subregion":null,"fips":"UGH3","postal-code":null,"name":"Otuke","country":"Uganda","type-en":"District","region":"Northern","longitude":"33.3294","woe-name":"Lira","latitude":"2.47637","woe-label":"Lira, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[6845,6306],[6792,6252],[6669,6297],[6610,6299],[6559,6266],[6374,6266],[6251,6321],[6105,6327],[6015,6349],[5976,6388],[5948,6461],[5864,6494],[5791,6494],[5746,6461],[5657,6461],[5556,6483],[5617,6522],[5650,6635],[5706,6703],[5869,6785],[5907,6793],[5967,6756],[6011,6771],[6153,6766],[6232,6741],[6300,6793],[6385,6771],[6450,6818],[6537,6751],[6646,6756],[6772,6587],[6871,6489],[6881,6394],[6845,6306]]]}},{"type":"Feature","id":"UG.2769","properties":{"hc-group":"admin1","hc-middle-x":0.43,"hc-middle-y":0.47,"hc-key":"ug-2769","hc-a2":"OY","labelrank":"9","hasc":"UG.OY.OA","alt-name":null,"woe-id":"56190213","subregion":null,"fips":"UGD6","postal-code":null,"name":"Oyam","country":"Uganda","type-en":"County","region":"Northern","longitude":"32.5298","woe-name":null,"latitude":"2.37882","woe-label":null,"type":"County"},"geometry":{"type":"Polygon","coordinates":[[[4369,5757],[4319,5859],[4300,5992],[4265,6058],[4203,6109],[4168,6261],[4158,6419],[4169,6497],[4241,6513],[4400,6514],[4549,6531],[4637,6778],[4802,6804],[4977,6770],[5191,6722],[5283,6602],[5260,6524],[5193,6471],[5109,6498],[5029,6502],[4896,6333],[4820,6312],[4861,6087],[4816,6053],[4759,5963],[4725,5894],[4607,5715],[4515,5697],[4369,5757]]]}},{"type":"Feature","id":"UG.7052","properties":{"hc-group":"admin1","hc-middle-x":0.51,"hc-middle-y":0.44,"hc-key":"ug-7052","hc-a2":"KI","labelrank":"7","hasc":"UG.QD","alt-name":null,"woe-id":"20070432","subregion":null,"fips":"UGF7","postal-code":null,"name":"Kiryandongo","country":"Uganda","type-en":"District","region":"Western","longitude":"32.0563","woe-name":"Masindi","latitude":"2.02863","woe-label":"Masindi, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[4203,6109],[4265,6058],[4300,5992],[4319,5859],[4369,5757],[4379,5679],[4345,5557],[4405,5534],[4369,5493],[4359,5367],[4240,5320],[4223,5256],[4151,5226],[4016,5196],[3904,5077],[3899,4982],[3833,5020],[3751,5011],[3751,4938],[3686,4929],[3649,4984],[3520,5030],[3520,5103],[3447,5258],[3466,5551],[3392,5661],[3263,5689],[3226,5734],[3217,5954],[3236,6188],[3298,6257],[3363,6291],[3472,6319],[3551,6305],[3659,6243],[3735,6175],[3814,6162],[3941,6110],[4005,6061],[4049,6059],[4115,6110],[4203,6109]]]}},{"type":"Feature","id":"UG.2774","properties":{"hc-group":"admin1","hc-middle-x":0.64,"hc-middle-y":0.48,"hc-key":"ug-2774","hc-a2":"KI","labelrank":"7","hasc":"UG.KI","alt-name":"Kibaale","woe-id":"20070425","subregion":"Kibaale","fips":"UG41","postal-code":null,"name":"Kibale","country":"Uganda","type-en":"District","region":"Western","longitude":"31.0242","woe-name":"Kibale","latitude":"0.903428","woe-label":"Kibale, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[889,3741],[932,3799],[973,3768],[1004,3796],[1161,3818],[1291,3870],[1342,3926],[1410,3951],[1538,3915],[1721,3981],[1811,3992],[1885,4032],[1971,4021],[2014,4081],[2119,4080],[2187,4132],[2342,4121],[2456,4047],[2566,4010],[2645,3895],[2785,3765],[2761,3686],[2699,3666],[2604,3573],[2625,3449],[2599,3366],[2556,3316],[2536,3213],[2483,3139],[2395,3174],[2311,3156],[2195,2993],[2032,3041],[1946,3082],[1663,3137],[1511,3336],[1436,3400],[1346,3419],[1260,3460],[1078,3505],[911,3580],[876,3688],[889,3741],[889,3741]]]}},{"type":"Feature","id":"UG.7059","properties":{"hc-group":"admin1","hc-middle-x":0.49,"hc-middle-y":0.40,"hc-key":"ug-7059","hc-a2":"NT","labelrank":"9","hasc":"UG.NO","alt-name":null,"woe-id":"-20070413","subregion":null,"fips":"UGH1","postal-code":null,"name":"Ntoroko","country":"Uganda","type-en":"District","region":"Western","longitude":"30.3756","woe-name":"Bundibugyo","latitude":"1.02038","woe-label":"Bundibugyo, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[889,3741],[876,3688],[769,3608],[693,3511],[550,3369],[460,3444],[414,3302],[190,3170],[252,3276],[265,3368],[347,3434],[259,3514],[216,3628],[288,3747],[277,3862],[323,3974],[414,4047],[486,4012],[565,4100],[631,4097],[720,4120],[783,4170],[839,4113],[798,4094],[801,3983],[843,3895],[808,3800],[836,3780],[893,3825],[889,3741],[889,3741]]]}},{"type":"Feature","id":"UG.7060","properties":{"hc-group":"admin1","hc-middle-x":0.44,"hc-middle-y":0.57,"hc-key":"ug-7060","hc-a2":"KY","labelrank":"9","hasc":"UG.QG","alt-name":null,"woe-id":"24550734","subregion":null,"fips":"UGG2","postal-code":null,"name":"Kyegegwa","country":"Uganda","type-en":"District","region":"Western","longitude":"31.023","woe-name":"Kyenjojo","latitude":"0.463663","woe-label":"Kyenjojo, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[1785,2192],[1649,2167],[1501,2161],[1517,2269],[1540,2298],[1610,2312],[1629,2348],[1596,2452],[1626,2492],[1629,2567],[1560,2597],[1564,2688],[1630,2692],[1630,2865],[1692,2898],[1692,3013],[1597,3062],[1574,3101],[1663,3137],[1946,3082],[2032,3041],[2195,2993],[2270,2887],[2252,2806],[2091,2768],[2048,2732],[1994,2603],[1996,2530],[2026,2464],[1889,2305],[1834,2261],[1800,2201],[1785,2192]]]}},{"type":"Feature","id":"UG.7057","properties":{"hc-group":"admin1","hc-middle-x":0.57,"hc-middle-y":0.45,"hc-key":"ug-7057","hc-a2":"NA","labelrank":"7","hasc":"UG.NQ","alt-name":null,"woe-id":"-20070435","subregion":null,"fips":"UGG8","postal-code":null,"name":"Napak","country":"Uganda","type-en":"District","region":"Northern","longitude":"34.3004","woe-name":"Moroto","latitude":"2.42782","woe-label":"Moroto, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[6845,6306],[6881,6394],[6871,6489],[6986,6509],[7102,6574],[7350,6559],[7551,6577],[7573,6615],[7529,6651],[7445,6795],[7469,6997],[7561,7061],[7732,7046],[7816,7053],[7972,7001],[8021,7207],[8131,7162],[8269,7144],[8380,7098],[8619,6888],[8776,6843],[8776,6724],[8886,6687],[8960,6614],[8987,6544],[8758,6531],[8749,5854],[8694,5772],[8399,5753],[8225,5643],[8206,5579],[8133,5551],[7946,5533],[7946,5739],[7929,5832],[7857,5891],[7359,6199],[7058,6386],[7010,6406],[6913,6309],[6845,6306]]]}},{"type":"Feature","id":"UG.2790","properties":{"hc-group":"admin1","hc-middle-x":0.43,"hc-middle-y":0.27,"hc-key":"ug-2790","hc-a2":"MO","labelrank":"7","hasc":"UG.MT","alt-name":null,"woe-id":"-20070435","subregion":null,"fips":"UG88","postal-code":null,"name":"Moroto","country":"Uganda","type-en":"District","region":"Northern","longitude":"34.712","woe-name":"Moroto","latitude":"2.67","woe-label":"Moroto, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[9309,6023],[9237,5910],[9154,5836],[9123,5940],[9108,6211],[8987,6544],[8960,6614],[8886,6687],[8776,6724],[8776,6843],[8619,6888],[8380,7098],[8269,7144],[8131,7162],[8021,7207],[8065,7370],[8183,7519],[8279,7682],[8354,7672],[8469,7693],[8512,7677],[8584,7713],[8640,7424],[8767,7260],[8859,7297],[8939,7247],[8999,7094],[9028,6928],[9109,6761],[9154,6742],[9199,6774],[9218,6748],[9241,6617],[9311,6531],[9277,6454],[9204,6405],[9187,6358],[9200,6283],[9309,6023]]]}},{"type":"Feature","id":"UG.2776","properties":{"hc-group":"admin1","hc-middle-x":0.91,"hc-middle-y":0.46,"hc-key":"ug-2776","hc-a2":"BU","labelrank":"9","hasc":"UG.BW.KO","alt-name":null,"woe-id":"-20070423","subregion":null,"fips":"UGB6","postal-code":null,"name":"Bukwa","country":"Uganda","type-en":"County","region":"Eastern","longitude":"34.6781","woe-name":null,"latitude":"1.26283","woe-label":null,"type":"County"},"geometry":{"type":"Polygon","coordinates":[[[8965,4513],[9038,4424],[9039,4423],[9096,4233],[9072,4156],[9011,4128],[8853,4112],[8748,4025],[8655,4004],[8616,3891],[8589,3999],[8593,4095],[8635,4187],[8746,4295],[8875,4339],[8936,4417],[8965,4513]]]}},{"type":"Feature","id":"UG.7067","properties":{"hc-group":"admin1","hc-middle-x":0.51,"hc-middle-y":0.50,"hc-key":"ug-7067","hc-a2":"BU","labelrank":"7","hasc":"UG.BM","alt-name":null,"woe-id":"-20070451","subregion":null,"fips":"UGE8","postal-code":null,"name":"Bukomansimbi","country":"Uganda","type-en":"District","region":"Central","longitude":"31.6487","woe-name":"Masaka","latitude":"-0.114634","woe-label":"Masaka, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[3168,1307],[2949,1307],[2840,1841],[2920,1901],[2975,1889],[3029,1896],[3075,1828],[3179,1578],[3195,1491],[3233,1415],[3168,1307]]]}},{"type":"Feature","id":"UG.7065","properties":{"hc-group":"admin1","hc-middle-x":0.39,"hc-middle-y":0.50,"hc-key":"ug-7065","hc-a2":"LW","labelrank":"7","hasc":"UG.LE","alt-name":null,"woe-id":"-20070451","subregion":null,"fips":"UGG5","postal-code":null,"name":"Lwengo","country":"Uganda","type-en":"District","region":"Central","longitude":"31.433","woe-name":"Masaka","latitude":"-0.421045","woe-label":"Masaka, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[2949,1307],[3168,1307],[3119,1258],[3119,1165],[2971,1084],[2960,1041],[2993,975],[2977,910],[2933,862],[2867,829],[2795,825],[2753,785],[2736,688],[2665,655],[2447,737],[2321,823],[2239,921],[2212,1002],[2266,1176],[2284,1273],[2318,1309],[2425,1247],[2668,1206],[2775,1208],[2944,1241],[2949,1307]]]}},{"type":"Feature","id":"UG.7066","properties":{"hc-group":"admin1","hc-middle-x":0.48,"hc-middle-y":0.40,"hc-key":"ug-7066","hc-a2":"LY","labelrank":"7","hasc":"UG.LY","alt-name":null,"woe-id":"-20070451","subregion":null,"fips":"UGD5","postal-code":null,"name":"Lyantonde","country":"Uganda","type-en":"District","region":"Central","longitude":"31.1783","woe-name":"Masaka","latitude":"-0.269997","woe-label":"Masaka, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[2318,1309],[2284,1273],[2266,1176],[2212,1002],[2239,921],[2223,807],[2141,791],[2042,799],[2068,867],[1909,1280],[1907,1405],[1945,1563],[1932,1722],[2001,1754],[2149,1712],[2155,1678],[2257,1630],[2282,1696],[2377,1615],[2373,1454],[2318,1309]]]}},{"type":"Feature","id":"UG.7069","properties":{"hc-group":"admin1","hc-middle-x":0.71,"hc-middle-y":0.28,"hc-key":"ug-7069","hc-a2":"BU","labelrank":"7","hasc":"UG.BT","alt-name":null,"woe-id":"-20070436","subregion":null,"fips":"UGF1","postal-code":null,"name":"Butambala","country":"Uganda","type-en":"District","region":"Central","longitude":"32.0026","woe-name":"Mpigi","latitude":"0.135674","woe-label":"Mpigi, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[3426,1792],[3344,1886],[3307,1902],[3403,1958],[3638,2061],[3709,2153],[3834,2224],[3943,2251],[3974,2294],[4146,2289],[4211,2316],[4217,2240],[4124,2159],[3949,2050],[3851,2066],[3752,2028],[3681,1952],[3561,1860],[3426,1792]]]}},{"type":"Feature","id":"UG.7061","properties":{"hc-group":"admin1","hc-middle-x":0.46,"hc-middle-y":0.53,"hc-key":"ug-7061","hc-a2":"RU","labelrank":"9","hasc":"UG.RZ","alt-name":null,"woe-id":"-20070414","subregion":null,"fips":"UGH4","postal-code":null,"name":"Rubirizi","country":"Uganda","type-en":"District","region":"Western","longitude":"29.9095","woe-name":"Bushenyi","latitude":"-0.269997","woe-label":"Bushenyi, UG, Uganda","type":"District"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-436,1501],[-452,1494],[-493,1506],[-453,1504],[-436,1501]]],[[[-302,1040],[-433,1100],[-481,1103],[-425,1178],[-370,1319],[-339,1487],[-246,1473],[-129,1474],[118,1662],[259,1655],[243,1620],[342,1578],[385,1513],[405,1439],[484,1403],[406,1339],[278,1309],[143,1219],[128,1010],[37,1040],[-31,1122],[-91,1137],[-242,1055],[-302,1040]]]]}},{"type":"Feature","id":"UG.7063","properties":{"hc-group":"admin1","hc-middle-x":0.55,"hc-middle-y":0.47,"hc-key":"ug-7063","hc-a2":"SH","labelrank":"9","hasc":"UG.SH","alt-name":null,"woe-id":"-20070414","subregion":null,"fips":"UGH6","postal-code":null,"name":"Sheema","country":"Uganda","type-en":"District","region":"Western","longitude":"30.3454","woe-name":"Bushenyi","latitude":"-0.636828","woe-label":"Bushenyi, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[387,366],[265,376],[223,423],[241,493],[180,598],[467,628],[490,740],[489,868],[512,935],[766,956],[764,877],[709,676],[680,604],[513,444],[387,366]]]}},{"type":"Feature","id":"UG.7062","properties":{"hc-group":"admin1","hc-middle-x":0.50,"hc-middle-y":0.50,"hc-key":"ug-7062","hc-a2":"MI","labelrank":"9","hasc":"UG.MM","alt-name":null,"woe-id":"-20070414","subregion":null,"fips":"UGG6","postal-code":null,"name":"Mitooma","country":"Uganda","type-en":"District","region":"Western","longitude":"30.0476","woe-name":"Bushenyi","latitude":"-0.636828","woe-label":"Bushenyi, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[180,598],[241,493],[223,423],[165,439],[74,361],[-25,356],[-139,438],[-175,520],[-230,583],[-304,620],[-334,691],[-279,717],[-248,842],[-166,785],[-99,762],[22,777],[67,733],[105,620],[180,598]]]}},{"type":"Feature","id":"UG.7064","properties":{"hc-group":"admin1","hc-middle-x":0.50,"hc-middle-y":0.49,"hc-key":"ug-7064","hc-a2":"BU","labelrank":"9","hasc":"UG.BH","alt-name":null,"woe-id":"-20070414","subregion":null,"fips":"UGE6","postal-code":null,"name":"Buhweju","country":"Uganda","type-en":"District","region":"Western","longitude":"30.3282","woe-name":"Bushenyi","latitude":"-0.351995","woe-label":"Bushenyi, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[766,956],[512,935],[489,868],[407,897],[271,972],[128,1010],[143,1219],[278,1309],[406,1339],[484,1403],[646,1295],[681,1253],[732,1309],[794,1332],[830,1318],[810,1204],[817,1074],[760,1020],[766,956]]]}},{"type":"Feature","id":"UG.7086","properties":{"hc-group":"admin1","hc-middle-x":0.72,"hc-middle-y":0.50,"hc-key":"ug-7086","hc-a2":"BU","labelrank":"9","hasc":"UG.BA","alt-name":null,"woe-id":"-20070433","subregion":null,"fips":"UGC2","postal-code":null,"name":"Bududa","country":"Uganda","type-en":"District","region":"Eastern","longitude":"34.3979","woe-name":"Manafwa","latitude":"1.03321","woe-label":"Mbale, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[8515,3909],[8441,3798],[8430,3713],[8387,3728],[8211,3728],[8173,3713],[8047,3711],[8148,3855],[8226,3878],[8287,3914],[8444,3900],[8515,3909]]]}},{"type":"Feature","id":"UG.2744","properties":{"hc-group":"admin1","hc-middle-x":0.41,"hc-middle-y":0.30,"hc-key":"ug-2744","hc-a2":"JI","labelrank":"9","hasc":"UG.JI","alt-name":null,"woe-id":"20070417","subregion":null,"fips":"UG33","postal-code":null,"name":"Jinja","country":"Uganda","type-en":"District","region":"Eastern","longitude":"33.3074","woe-name":"Jinja","latitude":"0.492867","woe-label":"Jinja, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[5811,2844],[5785,2877],[5719,3030],[5716,3071],[5766,3049],[5808,3076],[5867,3065],[5878,3105],[5971,3112],[6047,3087],[6146,3100],[6384,2940],[6407,2872],[6524,2846],[6580,2808],[6614,2850],[6663,2805],[6668,2724],[6708,2666],[6625,2562],[6590,2468],[6513,2441],[6470,2486],[6312,2452],[6325,2518],[6232,2477],[6217,2534],[6325,2583],[6293,2611],[6369,2730],[6325,2754],[6286,2676],[6234,2640],[6180,2644],[6165,2727],[6086,2686],[6075,2621],[5982,2622],[5992,2580],[6141,2543],[6099,2489],[5975,2554],[5969,2693],[5925,2749],[5811,2844]]]}},{"type":"Feature","id":"UG.1679","properties":{"hc-group":"admin1","hc-middle-x":0.53,"hc-middle-y":0.69,"hc-key":"ug-1679","hc-a2":"KA","labelrank":"7","hasc":"UG.KY","alt-name":null,"woe-id":"24550742","subregion":null,"fips":"UG83","postal-code":null,"name":"Kayunga","country":"Uganda","type-en":"District","region":"Central","longitude":"32.8933","woe-name":"Kayunga","latitude":"0.984795","woe-label":"Kayunga, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[5716,3071],[5719,3030],[5785,2877],[5811,2844],[5708,2896],[5683,2925],[5587,3037],[5528,3084],[5426,3127],[5351,3185],[5281,3298],[5224,3418],[5193,3641],[5201,3867],[5226,4061],[5186,4364],[5140,4406],[5029,4452],[5024,4609],[5260,4618],[5298,4478],[5337,4395],[5417,4306],[5472,4214],[5490,4153],[5548,4059],[5547,3944],[5500,3870],[5535,3617],[5558,3544],[5649,3402],[5711,3247],[5716,3071]]]}},{"type":"Feature","id":"UG.1680","properties":{"hc-group":"admin1","hc-middle-x":0.46,"hc-middle-y":0.36,"hc-key":"ug-1680","hc-a2":"IG","labelrank":"7","hasc":"UG.IN","alt-name":null,"woe-id":"-20070449","subregion":null,"fips":"UGA2","postal-code":null,"name":"Iganga","country":"Uganda","type-en":"District","region":"Eastern","longitude":"33.5689","woe-name":"Iganga","latitude":"0.699847","woe-label":"Iganga, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[6708,2666],[6668,2724],[6663,2805],[6614,2850],[6607,3078],[6496,3139],[6429,3194],[6462,3360],[6442,3468],[6568,3448],[6643,3486],[6662,3360],[6688,3326],[6817,3279],[6832,3204],[6848,3154],[6900,3103],[6892,2950],[6807,2840],[6790,2765],[6790,2649],[6708,2666]]]}},{"type":"Feature","id":"UG.7054","properties":{"hc-group":"admin1","hc-middle-x":0.55,"hc-middle-y":0.52,"hc-key":"ug-7054","hc-a2":"AL","labelrank":"9","hasc":"UG.AL","alt-name":null,"woe-id":"-20070431","subregion":null,"fips":"UGE4","postal-code":null,"name":"Alebtong","country":"Uganda","type-en":"District","region":"Northern","longitude":"33.2107","woe-name":"Lira","latitude":"2.27138","woe-label":"Lira, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[6334,5656],[6261,5693],[6181,5694],[6125,5774],[6030,5793],[5955,5831],[5883,5825],[5849,5769],[5787,5745],[5774,6043],[5735,6110],[5589,6204],[5561,6271],[5494,6294],[5410,6294],[5421,6338],[5505,6372],[5556,6427],[5556,6483],[5657,6461],[5746,6461],[5791,6494],[5864,6494],[5948,6461],[5976,6388],[6015,6349],[6105,6327],[6251,6321],[6374,6266],[6559,6266],[6610,6299],[6669,6297],[6674,6171],[6551,6070],[6473,6069],[6535,5977],[6512,5903],[6525,5863],[6459,5820],[6408,5857],[6331,5794],[6334,5656]]]}},{"type":"Feature","id":"UG.1686","properties":{"hc-group":"admin1","hc-middle-x":0.48,"hc-middle-y":0.59,"hc-key":"ug-1686","hc-a2":"SO","labelrank":"9","hasc":"UG.SR","alt-name":null,"woe-id":"-20070447","subregion":null,"fips":"UG95","postal-code":null,"name":"Soroti","country":"Uganda","type-en":"District","region":"Eastern","longitude":"33.5911","woe-name":"Soroti","latitude":"1.73376","woe-label":"Soroti, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[6302,5079],[6462,5188],[6464,5261],[6498,5322],[6473,5404],[6520,5626],[6566,5660],[6640,5643],[6724,5523],[6867,5463],[6887,5397],[6964,5347],[7121,5188],[7137,5108],[7174,5063],[7167,5020],[7177,4987],[7130,4964],[7070,4975],[7030,4944],[6994,4841],[6857,4806],[6733,4795],[6599,4828],[6515,4884],[6459,5001],[6330,5034],[6302,5079]]]}},{"type":"Feature","id":"UG.7078","properties":{"hc-group":"admin1","hc-middle-x":0.59,"hc-middle-y":0.46,"hc-key":"ug-7078","hc-a2":"BU","labelrank":"7","hasc":"UG.BY","alt-name":null,"woe-id":"-20070422","subregion":null,"fips":"UGF3","postal-code":null,"name":"Buyende","country":"Uganda","type-en":"District","region":"Eastern","longitude":"33.1662","woe-name":"Kamuli","latitude":"1.24749","woe-label":"Kamuli, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[5260,4618],[5553,4615],[5617,4601],[5754,4536],[5878,4434],[6021,4416],[6174,4390],[6261,4415],[6348,4419],[6399,4352],[6418,4283],[6471,4261],[6450,4160],[6323,3959],[6323,3905],[6272,3864],[6238,3821],[6251,3769],[6199,3674],[6192,3605],[6118,3641],[5973,3768],[5879,3817],[5840,3977],[5696,4044],[5548,4059],[5490,4153],[5472,4214],[5417,4306],[5337,4395],[5298,4478],[5260,4618]]]}},{"type":"Feature","id":"UG.1677","properties":{"hc-group":"admin1","hc-middle-x":0.32,"hc-middle-y":0.48,"hc-key":"ug-1677","hc-a2":"KU","labelrank":"7","hasc":"UG.KU","alt-name":null,"woe-id":"-20070430","subregion":null,"fips":"UG46","postal-code":null,"name":"Kumi","country":"Uganda","type-en":"District","region":"Eastern","longitude":"33.9137","woe-name":"Kumi","latitude":"1.44461","woe-label":"Kumi, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[7947,4917],[7990,4908],[7981,4773],[7706,4706],[7622,4656],[7634,4535],[7539,4463],[7545,4276],[7400,4182],[7364,4210],[7260,4233],[7189,4305],[7136,4310],[7123,4452],[7167,4507],[7239,4535],[7250,4656],[7234,4838],[7273,4905],[7341,4930],[7435,4901],[7621,4937],[7947,4917]]]}},{"type":"Feature","id":"UG.1690","properties":{"hc-group":"admin1","hc-middle-x":0.39,"hc-middle-y":0.75,"hc-key":"ug-1690","hc-a2":"MP","labelrank":"7","hasc":"UG.MI","alt-name":null,"woe-id":"-20070436","subregion":null,"fips":"UG89","postal-code":null,"name":"Mpigi","country":"Uganda","type-en":"District","region":"Central","longitude":"32.0899","woe-name":"Mpigi","latitude":"-0.008257000000000001","woe-label":"Mpigi, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[3579,1565],[3473,1740],[3426,1792],[3561,1860],[3681,1952],[3752,2028],[3851,2066],[3949,2050],[4124,2159],[4217,2240],[4211,2316],[4218,2533],[4208,2635],[4411,2635],[4547,2493],[4516,2311],[4464,2203],[4390,2156],[4350,2075],[4237,2011],[4218,1958],[4139,1901],[4132,1789],[4075,1832],[4102,1760],[4088,1697],[4029,1668],[3957,1686],[3850,1737],[3753,1678],[3821,1662],[3837,1617],[3693,1643],[3579,1565]]]}},{"type":"Feature","id":"UG.2745","properties":{"hc-group":"admin1","hc-middle-x":0.70,"hc-middle-y":0.47,"hc-key":"ug-2745","hc-a2":"AD","labelrank":"7","hasc":"UG.AD","alt-name":null,"woe-id":"20070445","subregion":null,"fips":"UG65","postal-code":null,"name":"Adjumani","country":"Uganda","type-en":"District","region":"Northern","longitude":"31.7282","woe-name":"Adjumani","latitude":"3.21788","woe-label":"Adjumani, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[3749,8644],[3786,8631],[3811,8592],[3801,8319],[3765,8283],[3786,8138],[3748,8069],[3742,7953],[3671,7863],[3656,7786],[3585,7671],[3573,7595],[3189,7477],[2987,7445],[2879,7294],[2817,7276],[2725,7330],[2639,7421],[2560,7442],[2585,7515],[2701,7647],[2771,7753],[2795,7803],[2846,7912],[2883,8059],[2934,8164],[3028,8265],[3063,8392],[3119,8454],[3225,8475],[3290,8528],[3353,8547],[3488,8474],[3531,8478],[3595,8532],[3627,8600],[3749,8644]]]}},{"type":"Feature","id":"UG.2752","properties":{"hc-group":"admin1","hc-middle-x":0.41,"hc-middle-y":0.42,"hc-key":"ug-2752","hc-a2":"YU","labelrank":"9","hasc":"UG.YU","alt-name":null,"woe-id":"24550739","subregion":null,"fips":"UG97","postal-code":null,"name":"Yumbe","country":"Uganda","type-en":"District","region":"Northern","longitude":"31.2996","woe-name":"Yumbe","latitude":"3.52312","woe-label":null,"type":"District"},"geometry":{"type":"Polygon","coordinates":[[[2795,7803],[2771,7753],[2602,7776],[2593,7863],[2553,7945],[2456,7966],[2397,8042],[2300,8070],[2184,8166],[2079,8192],[2025,8125],[1933,8085],[1893,8125],[1884,8338],[1862,8544],[1890,8795],[1923,8924],[2063,9025],[2113,9039],[2282,9028],[2357,9004],[2760,8785],[2795,8778],[2873,8842],[2968,8856],[2915,8732],[2679,8400],[2664,8199],[2672,7945],[2795,7803]]]}},{"type":"Feature","id":"UG.2754","properties":{"hc-group":"admin1","hc-middle-x":0.78,"hc-middle-y":0.48,"hc-key":"ug-2754","hc-a2":"KA","labelrank":"9","hasc":"UG.KM","alt-name":null,"woe-id":"20070421","subregion":null,"fips":"UG37","postal-code":null,"name":"Kampala","country":"Uganda","type-en":"District","region":"Central","longitude":"32.6048","woe-name":"Kampala","latitude":"0.360019","woe-label":"Kampala, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[4976,2355],[4942,2361],[4938,2355],[4869,2356],[4753,2328],[4708,2385],[4776,2495],[4777,2603],[4731,2650],[4757,2728],[4815,2693],[4878,2717],[4890,2751],[4969,2767],[4992,2725],[4976,2619],[5020,2444],[4978,2355],[4976,2355]]]}},{"type":"Feature","id":"UG.1687","properties":{"hc-group":"admin1","hc-middle-x":0.51,"hc-middle-y":0.51,"hc-key":"ug-1687","hc-a2":"MU","labelrank":"9","hasc":"UG.MN","alt-name":null,"woe-id":"-20070438","subregion":null,"fips":"UG90","postal-code":null,"name":"Mukono","country":"Uganda","type-en":"District","region":"Central","longitude":"32.8051","woe-name":"Mukono","latitude":"0.304604","woe-label":"Mukono, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[4976,2353],[4978,2355],[5020,2444],[4976,2619],[4992,2725],[4969,2767],[4990,2815],[4989,2867],[5149,2926],[5187,3054],[5217,3240],[5224,3418],[5281,3298],[5351,3185],[5426,3127],[5528,3084],[5587,3037],[5683,2925],[5600,2871],[5593,2779],[5624,2671],[5677,2597],[5662,2493],[5466,2296],[5414,2200],[5358,2137],[5352,2087],[5259,2114],[5232,2009],[5154,2047],[5012,1976],[4972,1994],[4956,2061],[5054,2074],[5126,2138],[5075,2204],[5028,2125],[4965,2156],[5009,2230],[4963,2230],[4946,2279],[4976,2353]]]}},{"type":"Feature","id":"UG.2757","properties":{"hc-group":"admin1","hc-middle-x":0.64,"hc-middle-y":0.59,"hc-key":"ug-2757","hc-a2":"WA","labelrank":"9","hasc":"UG.WA","alt-name":null,"woe-id":"24550740","subregion":null,"fips":"UG37","postal-code":null,"name":"Wakiso","country":"Uganda","type-en":"District","region":"Central","longitude":"32.4268","woe-name":"Wakiso","latitude":"0.197333","woe-label":"Wakiso, UG, Uganda","type":"District"},"geometry":{"type":"MultiPolygon","coordinates":[[[[4978,2355],[4976,2353],[4976,2355],[4978,2355]]],[[[4989,2867],[4990,2815],[4969,2767],[4890,2751],[4878,2717],[4815,2693],[4757,2728],[4731,2650],[4777,2603],[4776,2495],[4708,2385],[4753,2328],[4869,2356],[4938,2355],[4885,2210],[4784,2168],[4800,2114],[4851,2074],[4800,2061],[4832,2012],[4760,2033],[4747,2001],[4797,1922],[4773,1890],[4739,1949],[4681,1904],[4664,1960],[4571,1864],[4508,1912],[4582,1988],[4562,2033],[4511,1964],[4404,1969],[4423,1909],[4411,1799],[4430,1760],[4379,1760],[4379,1825],[4325,1858],[4194,1904],[4180,1890],[4263,1810],[4220,1751],[4132,1789],[4139,1901],[4218,1958],[4237,2011],[4350,2075],[4390,2156],[4464,2203],[4516,2311],[4547,2493],[4411,2635],[4208,2635],[4124,2766],[4130,2901],[4284,2834],[4337,2847],[4395,2880],[4576,2860],[4671,2860],[4743,2842],[4816,2896],[4902,2867],[4989,2867]]]]}},{"type":"Feature","id":"UG.1689","properties":{"hc-group":"admin1","hc-middle-x":0.52,"hc-middle-y":0.34,"hc-key":"ug-1689","hc-a2":"SE","labelrank":"9","hasc":"UG.SE","alt-name":"Ssembabule","woe-id":"20070450","subregion":null,"fips":"UG74","postal-code":null,"name":"Sembabule","country":"Uganda","type-en":"District","region":"Central","longitude":"31.3783","woe-name":"Sembabule","latitude":"0.02467","woe-label":"Sembabule, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[1785,2192],[1800,2201],[1940,2210],[2013,2247],[2086,2241],[2202,2131],[2281,2129],[2339,2185],[2426,2189],[2513,2182],[2588,2095],[2778,1996],[2920,1901],[2840,1841],[2949,1307],[2944,1241],[2775,1208],[2668,1206],[2425,1247],[2318,1309],[2373,1454],[2377,1615],[2282,1696],[2257,1630],[2155,1678],[2149,1712],[2001,1754],[1932,1722],[1814,1747],[1867,1846],[1858,2044],[1785,2192]]]}},{"type":"Feature","id":"UG.2760","properties":{"hc-group":"admin1","hc-middle-x":0.62,"hc-middle-y":0.52,"hc-key":"ug-2760","hc-a2":"MI","labelrank":"9","hasc":"UG.TY.BS","alt-name":null,"woe-id":"56190215","subregion":null,"fips":"UGC6","postal-code":null,"name":"Mityana","country":"Uganda","type-en":"County","region":"Central","longitude":"32.0449","woe-name":null,"latitude":"0.42844","woe-label":null,"type":"County"},"geometry":{"type":"Polygon","coordinates":[[[4130,2901],[4124,2766],[4208,2635],[4218,2533],[4211,2316],[4146,2289],[3974,2294],[3696,2274],[3641,2242],[3533,2228],[3455,2260],[3410,2331],[3360,2346],[3605,2370],[3639,2450],[3617,2539],[3644,2618],[3555,2805],[3584,2876],[3534,2892],[3516,2943],[3542,2993],[3614,3043],[3763,3016],[3841,3018],[3971,3108],[4056,3145],[4091,3065],[4130,2901]]]}},{"type":"Feature","id":"UG.2761","properties":{"hc-group":"admin1","hc-middle-x":0.55,"hc-middle-y":0.44,"hc-key":"ug-2761","hc-a2":"NA","labelrank":"9","hasc":"UG.NK","alt-name":null,"woe-id":"20070453","subregion":"Luweero","fips":"UGC7","postal-code":null,"name":"Nakaseke","country":"Uganda","type-en":"District","region":"Central","longitude":"32.1561","woe-name":"Nakaseke","latitude":"1.10855","woe-label":"Luwero, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[4130,2901],[4091,3065],[4056,3145],[4129,3255],[4124,3347],[4023,3436],[3909,3457],[3786,3540],[3704,3678],[3702,3753],[3613,3911],[3575,4135],[3504,4257],[3363,4394],[3481,4515],[3626,4620],[3860,4500],[4178,4183],[4371,4094],[4464,4003],[4482,3885],[4472,3727],[4494,3607],[4592,3457],[4594,3222],[4643,3137],[4576,3052],[4447,3045],[4382,2990],[4346,2922],[4337,2847],[4284,2834],[4130,2901]]]}},{"type":"Feature","id":"UG.2766","properties":{"hc-group":"admin1","hc-middle-x":0.52,"hc-middle-y":0.37,"hc-key":"ug-2766","hc-a2":"DO","labelrank":"9","hasc":"UG.DO.DK","alt-name":null,"woe-id":"56190203","subregion":null,"fips":"UGD3","postal-code":null,"name":"Dokolo","country":"Uganda","type-en":"County","region":"Northern","longitude":"33.0778","woe-name":null,"latitude":"1.88125","woe-label":null,"type":"County"},"geometry":{"type":"Polygon","coordinates":[[[5407,5761],[5556,5742],[5686,5667],[5744,5683],[5787,5745],[5849,5769],[5883,5825],[5955,5831],[6030,5793],[6125,5774],[6181,5694],[6164,5541],[6083,5436],[5870,5301],[5803,5079],[5674,5047],[5602,5076],[5670,5271],[5513,5366],[5520,5481],[5369,5523],[5362,5590],[5407,5761]]]}},{"type":"Feature","id":"UG.2765","properties":{"hc-group":"admin1","hc-middle-x":0.50,"hc-middle-y":0.70,"hc-key":"ug-2765","hc-a2":"LI","labelrank":"9","hasc":"UG.LA","alt-name":null,"woe-id":"-20070431","subregion":null,"fips":"UGA7","postal-code":null,"name":"Lira","country":"Uganda","type-en":"District","region":"Northern","longitude":"32.9139","woe-name":"Lira","latitude":"2.23366","woe-label":"Lira, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[5787,5745],[5744,5683],[5686,5667],[5556,5742],[5407,5761],[5326,5774],[5263,5822],[5279,6016],[5292,6051],[5208,6210],[5163,6271],[5231,6416],[5260,6524],[5283,6602],[5191,6722],[5251,6766],[5281,6834],[5497,6744],[5523,6649],[5589,6618],[5650,6635],[5617,6522],[5556,6483],[5556,6427],[5505,6372],[5421,6338],[5410,6294],[5494,6294],[5561,6271],[5589,6204],[5735,6110],[5774,6043],[5787,5745]]]}},{"type":"Feature","id":"UG.2764","properties":{"hc-group":"admin1","hc-middle-x":0.47,"hc-middle-y":0.55,"hc-key":"ug-2764","hc-a2":"GU","labelrank":"9","hasc":"UG.GL.AW","alt-name":null,"woe-id":"20070415","subregion":null,"fips":"UGA1","postal-code":null,"name":"Gulu","country":"Uganda","type-en":"County","region":"Northern","longitude":"32.463","woe-name":"Gulu","latitude":"2.87081","woe-label":null,"type":"County"},"geometry":{"type":"Polygon","coordinates":[[[4391,8072],[4446,8032],[4682,7826],[4693,7784],[4614,7746],[4737,7583],[4930,7224],[5006,7153],[5048,7061],[5109,7014],[5011,6934],[5034,6859],[4977,6770],[4802,6804],[4637,6778],[4549,6531],[4400,6514],[4364,6549],[4252,6600],[4222,6650],[4218,6749],[4097,6757],[4043,6789],[4016,6847],[4030,6900],[4091,7010],[4120,7119],[4077,7435],[4044,7515],[4048,7627],[4089,7747],[4125,7805],[4246,7908],[4317,8006],[4391,8072]]]}},{"type":"Feature","id":"UG.2749","properties":{"hc-group":"admin1","hc-middle-x":0.59,"hc-middle-y":0.43,"hc-key":"ug-2749","hc-a2":"NW","labelrank":"9","hasc":"UG.NW","alt-name":null,"woe-id":"-20070415","subregion":null,"fips":"UGH2","postal-code":null,"name":"Nwoya","country":"Uganda","type-en":"District","region":"Northern","longitude":"31.8584","woe-name":null,"latitude":"2.57094","woe-label":null,"type":"District"},"geometry":{"type":"Polygon","coordinates":[[[3236,6188],[3055,6128],[2965,6149],[2834,6150],[2740,6105],[2647,6081],[2551,6011],[2490,5989],[2473,6104],[2513,6163],[2616,6233],[2684,6261],[2697,6399],[2727,6502],[2791,6535],[2793,6591],[2737,6582],[2704,6610],[2674,6692],[2600,6797],[2684,6822],[2834,6977],[2915,7017],[3139,7017],[3167,7092],[3221,7139],[3676,7145],[3744,7105],[3901,7098],[3968,7050],[4091,7010],[4030,6900],[4016,6847],[4043,6789],[4097,6757],[4218,6749],[4222,6650],[4252,6600],[4364,6549],[4400,6514],[4241,6513],[4169,6497],[4158,6419],[4168,6261],[4203,6109],[4115,6110],[4049,6059],[4005,6061],[3941,6110],[3814,6162],[3735,6175],[3659,6243],[3551,6305],[3472,6319],[3363,6291],[3298,6257],[3236,6188]]]}},{"type":"Feature","id":"UG.2768","properties":{"hc-group":"admin1","hc-middle-x":0.48,"hc-middle-y":0.69,"hc-key":"ug-2768","hc-a2":"MA","labelrank":"7","hasc":"UG.MC","alt-name":null,"woe-id":"-20070432","subregion":null,"fips":"UG50","postal-code":null,"name":"Masindi","country":"Uganda","type-en":"District","region":"Western","longitude":"31.735","woe-name":"Masindi","latitude":"1.66477","woe-label":"Masindi, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[2834,6150],[2965,6149],[3055,6128],[3236,6188],[3217,5954],[3226,5734],[3263,5689],[3392,5661],[3466,5551],[3447,5258],[3520,5103],[3520,5030],[3649,4984],[3686,4929],[3751,4938],[3751,5011],[3833,5020],[3899,4982],[3904,4948],[3781,4763],[3694,4720],[3626,4620],[3481,4515],[3363,4394],[3287,4376],[3245,4330],[3071,4364],[2771,4402],[2718,4423],[2641,4491],[2609,4854],[2595,4893],[2508,4872],[2483,4943],[2504,5046],[2479,5121],[2710,5094],[2839,5158],[2894,5241],[2895,5369],[2950,5414],[3005,5423],[3024,5469],[2996,5524],[2941,5570],[2821,5744],[2821,5890],[2840,6018],[2834,6150]]]}},{"type":"Feature","id":"UG.2763","properties":{"hc-group":"admin1","hc-middle-x":0.55,"hc-middle-y":0.48,"hc-key":"ug-2763","hc-a2":"AP","labelrank":"9","hasc":"UG.AC","alt-name":null,"woe-id":"-20070411","subregion":null,"fips":"UG98","postal-code":null,"name":"Apac","country":"Uganda","type-en":"District","region":"Northern","longitude":"32.5241","woe-name":"Apac","latitude":"1.89554","woe-label":"Apac, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[3904,4948],[3899,4982],[3904,5077],[4016,5196],[4151,5226],[4223,5256],[4240,5320],[4359,5367],[4369,5493],[4405,5534],[4345,5557],[4379,5679],[4369,5757],[4515,5697],[4607,5715],[4725,5894],[4759,5963],[4995,5959],[5068,5887],[5141,5881],[5180,5848],[5263,5822],[5326,5774],[5407,5761],[5362,5590],[5369,5523],[5520,5481],[5513,5366],[5670,5271],[5602,5076],[5408,5253],[5187,5240],[4911,4993],[4845,4955],[4372,4962],[4285,4949],[4111,5002],[4045,5004],[3904,4948]]]}},{"type":"Feature","id":"UG.2748","properties":{"hc-group":"admin1","hc-middle-x":0.51,"hc-middle-y":0.69,"hc-key":"ug-2748","hc-a2":"BU","labelrank":"9","hasc":"UG.BL","alt-name":null,"woe-id":"-20070432","subregion":null,"fips":"UGD1","postal-code":null,"name":"Buliisa","country":"Uganda","type-en":"County","region":"Western","longitude":"31.4315","woe-name":null,"latitude":"1.95839","woe-label":null,"type":"County"},"geometry":{"type":"Polygon","coordinates":[[[2479,5121],[2477,5220],[2410,5279],[2475,5285],[2543,5359],[2565,5457],[2560,5531],[2526,5615],[2563,5667],[2561,5731],[2512,5850],[2543,5882],[2490,5989],[2551,6011],[2647,6081],[2740,6105],[2834,6150],[2840,6018],[2821,5890],[2821,5744],[2941,5570],[2996,5524],[3024,5469],[3005,5423],[2950,5414],[2895,5369],[2894,5241],[2839,5158],[2710,5094],[2479,5121]]]}},{"type":"Feature","id":"UG.2771","properties":{"hc-group":"admin1","hc-middle-x":0.62,"hc-middle-y":0.54,"hc-key":"ug-2771","hc-a2":"HO","labelrank":"9","hasc":"UG.HO","alt-name":null,"woe-id":"20070416","subregion":null,"fips":"UG31","postal-code":null,"name":"Hoima","country":"Uganda","type-en":"District","region":"Western","longitude":"31.0319","woe-name":"Hoima","latitude":"1.47115","woe-label":"Hoima, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[2410,5279],[2477,5220],[2479,5121],[2504,5046],[2483,4943],[2508,4872],[2595,4893],[2609,4854],[2641,4491],[2718,4423],[2771,4402],[2625,4258],[2342,4121],[2187,4132],[2119,4080],[2014,4081],[1971,4021],[1885,4032],[1811,3992],[1721,3981],[1538,3915],[1410,3951],[1342,3926],[1291,3870],[1161,3818],[1004,3796],[1024,3825],[1236,4048],[1268,4171],[1590,4540],[1682,4701],[1855,4774],[1880,4832],[1998,4817],[2138,4885],[2248,4988],[2326,5040],[2379,5119],[2410,5279]]]}},{"type":"Feature","id":"UG.2772","properties":{"hc-group":"admin1","hc-middle-x":0.58,"hc-middle-y":0.57,"hc-key":"ug-2772","hc-a2":"KA","labelrank":"9","hasc":"UG.BR","alt-name":null,"woe-id":"-20070419","subregion":null,"fips":"UG79","postal-code":null,"name":"Kabarole","country":"Uganda","type-en":"District","region":"Western","longitude":"30.2731","woe-name":"Kabarole","latitude":"0.596926","woe-label":"Kabarole, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[-459,2450],[-423,2526],[-322,2643],[-240,2581],[-141,2634],[-92,2720],[-7,2795],[78,2967],[118,3010],[190,3170],[414,3302],[460,3444],[550,3369],[693,3511],[769,3608],[876,3688],[911,3580],[827,3489],[796,3434],[814,3409],[752,3289],[710,3260],[687,3095],[626,3028],[628,2980],[739,2890],[685,2839],[586,2733],[594,2674],[565,2614],[610,2514],[558,2241],[426,2276],[379,2309],[278,2380],[180,2373],[127,2463],[-23,2508],[-227,2463],[-459,2450]]]}},{"type":"Feature","id":"UG.2775","properties":{"hc-group":"admin1","hc-middle-x":0.57,"hc-middle-y":0.35,"hc-key":"ug-2775","hc-a2":"KA","labelrank":"9","hasc":"UG.KP","alt-name":null,"woe-id":"-20070423","subregion":null,"fips":"UGA4","postal-code":null,"name":"Kapchorwa","country":"Uganda","type-en":"District","region":"Eastern","longitude":"34.4652","woe-name":"Kapchorwa","latitude":"1.35008","woe-label":"Kapchorwa, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[8616,3891],[8578,3884],[8515,3909],[8547,4023],[8547,4088],[8497,4136],[8368,4207],[8171,4285],[8134,4326],[8143,4383],[8222,4484],[8372,4563],[8439,4502],[8561,4469],[8628,4425],[8633,4348],[8589,4238],[8593,4095],[8589,3999],[8616,3891]]]}},{"type":"Feature","id":"UG.2788","properties":{"hc-group":"admin1","hc-middle-x":0.43,"hc-middle-y":0.50,"hc-key":"ug-2788","hc-a2":"KA","labelrank":"9","hasc":"UG.AB","alt-name":null,"woe-id":"20070429","subregion":null,"fips":"UGC1","postal-code":null,"name":"Kaabong","country":"Uganda","type-en":"District","region":"Northern","longitude":"34.0364","woe-name":"Kaabong","latitude":"3.70606","woe-label":"Kotido, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[8279,7682],[8168,7684],[8070,7737],[7840,7902],[7608,7982],[7358,7990],[7353,8091],[7298,8103],[7243,8079],[7145,8127],[7046,8199],[6992,8306],[6914,8397],[6829,8599],[6704,8774],[6633,8996],[6642,9001],[7492,9851],[7591,9791],[7615,9747],[7615,9662],[7669,9600],[7654,9447],[7742,9355],[7746,9324],[7699,9199],[7744,9183],[7850,9216],[7929,9194],[7914,9142],[7822,9095],[7880,9044],[7853,8996],[7998,9020],[8094,8867],[8131,8912],[8217,8913],[8279,8847],[8380,8800],[8392,8760],[8388,8606],[8370,8530],[8334,8474],[8279,8453],[8301,8353],[8274,8267],[8326,8184],[8351,8108],[8370,7874],[8431,7805],[8521,7779],[8584,7713],[8512,7677],[8469,7693],[8354,7672],[8279,7682]]]}},{"type":"Feature","id":"UG.2789","properties":{"hc-group":"admin1","hc-middle-x":0.35,"hc-middle-y":0.64,"hc-key":"ug-2789","hc-a2":"AB","labelrank":"9","hasc":"UG.AI.LB","alt-name":null,"woe-id":"-20070429","subregion":null,"fips":"UGC8","postal-code":null,"name":"Abim","country":"Uganda","type-en":"County","region":"Northern","longitude":"33.7723","woe-name":null,"latitude":"2.70787","woe-label":null,"type":"County"},"geometry":{"type":"Polygon","coordinates":[[[6686,7898],[6788,7888],[6844,7860],[6923,7865],[6922,7692],[6907,7628],[6973,7581],[6994,7515],[7237,7398],[7234,7206],[7247,6894],[7445,6795],[7529,6651],[7573,6615],[7551,6577],[7350,6559],[7102,6574],[6986,6509],[6871,6489],[6772,6587],[6646,6756],[6628,6894],[6681,7021],[6779,7112],[6766,7236],[6737,7284],[6720,7450],[6686,7898]]]}},{"type":"Feature","id":"UG.3381","properties":{"hc-group":"admin1","hc-middle-x":0.57,"hc-middle-y":0.60,"hc-key":"ug-3381","hc-a2":"RA","labelrank":"9","hasc":"UG.RA","alt-name":null,"woe-id":"-20070442","subregion":null,"fips":"UG61","postal-code":null,"name":"Rakai","country":"Uganda","type-en":"District","region":"Central","longitude":"31.5253","woe-name":"Rakai","latitude":"-0.753019","woe-label":"Rakai, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[3217,423],[3162,363],[3126,282],[3129,206],[3244,193],[3260,159],[3255,52],[3286,-105],[2322,-105],[2266,-46],[2244,51],[2135,160],[2169,203],[2141,288],[2131,391],[2018,507],[1928,562],[2010,711],[2042,799],[2141,791],[2223,807],[2239,921],[2321,823],[2447,737],[2665,655],[2736,688],[2753,785],[2795,825],[2867,829],[2933,862],[2977,910],[3051,897],[3108,814],[3106,715],[3082,639],[3217,423]]]}},{"type":"Feature","id":"UG.3387","properties":{"hc-group":"admin1","hc-middle-x":0.48,"hc-middle-y":0.54,"hc-key":"ug-3387","hc-a2":"IS","labelrank":"9","hasc":"UG.NG.BK","alt-name":null,"woe-id":"56190210","subregion":null,"fips":"UGB9","postal-code":null,"name":"Isingiro","country":"Uganda","type-en":"County","region":"Western","longitude":"30.8706","woe-name":null,"latitude":"-0.848191","woe-label":null,"type":"County"},"geometry":{"type":"Polygon","coordinates":[[[2322,-105],[1454,-106],[1356,-74],[1183,-149],[1090,-241],[1002,-222],[846,-241],[811,-216],[749,-223],[793,-146],[839,-18],[933,71],[994,166],[996,269],[1093,254],[1084,502],[1107,639],[1185,629],[1263,653],[1333,652],[1420,613],[1487,550],[1525,481],[1609,492],[1779,486],[1859,506],[1928,562],[2018,507],[2131,391],[2141,288],[2169,203],[2135,160],[2244,51],[2266,-46],[2322,-105]]]}},{"type":"Feature","id":"UG.3393","properties":{"hc-group":"admin1","hc-middle-x":0.50,"hc-middle-y":0.61,"hc-key":"ug-3393","hc-a2":"KI","labelrank":"9","hasc":"UG.KR","alt-name":null,"woe-id":"20070427","subregion":null,"fips":"UG43","postal-code":null,"name":"Kisoro","country":"Uganda","type-en":"District","region":"Western","longitude":"29.6865","woe-name":"Kisoro","latitude":"-1.21098","woe-label":"Kisoro, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[-472,-721],[-524,-734],[-568,-802],[-645,-768],[-692,-776],[-793,-836],[-947,-845],[-929,-696],[-959,-636],[-940,-551],[-987,-450],[-964,-286],[-999,-142],[-998,-85],[-915,-143],[-744,-210],[-697,-209],[-608,-247],[-660,-309],[-586,-407],[-527,-452],[-578,-491],[-472,-721]]]}},{"type":"Feature","id":"UG.7076","properties":{"hc-group":"admin1","hc-middle-x":0.38,"hc-middle-y":0.55,"hc-key":"ug-7076","hc-a2":"LU","labelrank":"7","hasc":"UG.LK","alt-name":null,"woe-id":"-20070449","subregion":null,"fips":"UGG4","postal-code":null,"name":"Luuka","country":"Uganda","type-en":"District","region":"Eastern","longitude":"33.3432","woe-name":"Iganga","latitude":"0.738246","woe-label":"Iganga, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[6442,3468],[6462,3360],[6429,3194],[6496,3139],[6607,3078],[6614,2850],[6580,2808],[6524,2846],[6407,2872],[6384,2940],[6146,3100],[6047,3087],[6042,3143],[6078,3262],[6129,3295],[6181,3415],[6170,3443],[6192,3605],[6199,3674],[6251,3769],[6238,3821],[6272,3864],[6311,3842],[6407,3684],[6375,3553],[6387,3492],[6442,3468]]]}},{"type":"Feature","id":"UG.1681","properties":{"hc-group":"admin1","hc-middle-x":0.55,"hc-middle-y":0.57,"hc-key":"ug-1681","hc-a2":"KA","labelrank":"7","hasc":"UG.KX","alt-name":null,"woe-id":"-20070422","subregion":null,"fips":"UGA3","postal-code":null,"name":"Kamuli","country":"Uganda","type-en":"District","region":"Eastern","longitude":"33.1226","woe-name":"Kamuli","latitude":"0.8889590000000001","woe-label":"Kamuli, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[5716,3071],[5711,3247],[5649,3402],[5558,3544],[5535,3617],[5500,3870],[5547,3944],[5548,4059],[5696,4044],[5840,3977],[5879,3817],[5973,3768],[6118,3641],[6192,3605],[6170,3443],[6181,3415],[6129,3295],[6078,3262],[6042,3143],[6047,3087],[5971,3112],[5878,3105],[5867,3065],[5808,3076],[5766,3049],[5716,3071]]]}},{"type":"Feature","id":"UG.2746","properties":{"hc-group":"admin1","hc-middle-x":0.45,"hc-middle-y":0.46,"hc-key":"ug-2746","hc-a2":"AR","labelrank":"9","hasc":"UG.AW.AU","alt-name":"Arua","woe-id":"20070412","subregion":null,"fips":"UG99","postal-code":null,"name":"Arua","country":"Uganda","type-en":"County","region":"Northern","longitude":"31.1339","woe-name":"Arua Municipality","latitude":"2.7887","woe-label":"Arua, UG, Uganda","type":"County"},"geometry":{"type":"Polygon","coordinates":[[[1880,6744],[1766,6794],[1766,6880],[1723,7027],[1535,6980],[1470,6937],[1348,6911],[1415,7094],[1459,7121],[1507,7249],[1510,7325],[1445,7478],[1300,7599],[1305,7676],[1335,7765],[1628,7752],[1695,7826],[1776,7880],[1830,7938],[1843,8036],[1893,8125],[1933,8085],[2025,8125],[2079,8192],[2184,8166],[2300,8070],[2397,8042],[2456,7966],[2553,7945],[2593,7863],[2602,7776],[2771,7753],[2701,7647],[2585,7515],[2560,7442],[2511,7343],[2493,7266],[2500,7186],[2541,7118],[2420,7058],[2367,6981],[2360,6913],[2271,6833],[2084,6809],[2008,6765],[1880,6744]]]}},{"type":"Feature","id":"UG.2747","properties":{"hc-group":"admin1","hc-middle-x":0.49,"hc-middle-y":0.49,"hc-key":"ug-2747","hc-a2":"KO","labelrank":"9","hasc":"UG.OK.KB","alt-name":null,"woe-id":"56190212","subregion":null,"fips":"UGC4","postal-code":null,"name":"Koboko","country":"Uganda","type-en":"County","region":"Northern","longitude":"30.9725","woe-name":null,"latitude":"3.51005","woe-label":null,"type":"County"},"geometry":{"type":"Polygon","coordinates":[[[1608,8265],[1630,8320],[1604,8404],[1617,8475],[1592,8521],[1483,8464],[1533,8576],[1660,8759],[1685,8824],[1784,8851],[1869,8910],[1923,8924],[1890,8795],[1862,8544],[1884,8338],[1893,8125],[1814,8177],[1766,8139],[1706,8168],[1608,8265]]]}},{"type":"Feature","id":"UG.2751","properties":{"hc-group":"admin1","hc-middle-x":0.36,"hc-middle-y":0.38,"hc-key":"ug-2751","hc-a2":"MO","labelrank":"9","hasc":"UG.MY","alt-name":null,"woe-id":"20070444","subregion":null,"fips":"UG72","postal-code":null,"name":"Moyo","country":"Uganda","type-en":"District","region":"Northern","longitude":"31.7226","woe-name":"Moyo","latitude":"3.62202","woe-label":"Moyo, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[2968,8856],[3072,8871],[3125,8902],[3288,9082],[3383,9021],[3519,8869],[3547,8823],[3560,8699],[3599,8653],[3749,8644],[3627,8600],[3595,8532],[3531,8478],[3488,8474],[3353,8547],[3290,8528],[3225,8475],[3119,8454],[3063,8392],[3028,8265],[2934,8164],[2883,8059],[2846,7912],[2795,7803],[2672,7945],[2664,8199],[2679,8400],[2915,8732],[2968,8856]]]}},{"type":"Feature","id":"UG.2758","properties":{"hc-group":"admin1","hc-middle-x":0.62,"hc-middle-y":0.60,"hc-key":"ug-2758","hc-a2":"LU","labelrank":"9","hasc":"UG.LW.BM","alt-name":null,"woe-id":"20070453","subregion":null,"fips":"UGA8","postal-code":null,"name":"Luweero","country":"Uganda","type-en":"County","region":"Central","longitude":"32.5615","woe-name":"Luwero","latitude":"0.796763","woe-label":null,"type":"County"},"geometry":{"type":"Polygon","coordinates":[[[5224,3418],[5217,3240],[5187,3054],[5149,2926],[4989,2867],[4902,2867],[4816,2896],[4743,2842],[4671,2860],[4576,2860],[4395,2880],[4337,2847],[4346,2922],[4382,2990],[4447,3045],[4576,3052],[4643,3137],[4594,3222],[4592,3457],[4494,3607],[4472,3727],[4482,3885],[4603,3745],[4777,3667],[4901,3652],[4893,3749],[4931,3971],[4998,3988],[5051,3936],[5097,3856],[5201,3867],[5193,3641],[5224,3418]]]}},{"type":"Feature","id":"UG.2759","properties":{"hc-group":"admin1","hc-middle-x":0.63,"hc-middle-y":0.46,"hc-key":"ug-2759","hc-a2":"MU","labelrank":"9","hasc":"UG.MD","alt-name":null,"woe-id":"20070437","subregion":null,"fips":"UGB2","postal-code":null,"name":"Mubende","country":"Uganda","type-en":"District","region":"Central","longitude":"31.4889","woe-name":"Mubende","latitude":"0.58882","woe-label":"Mubende, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[1800,2201],[1834,2261],[1889,2305],[2026,2464],[1996,2530],[1994,2603],[2048,2732],[2091,2768],[2252,2806],[2270,2887],[2195,2993],[2311,3156],[2395,3174],[2483,3139],[2536,3213],[2556,3316],[2599,3366],[2625,3449],[2903,3418],[3011,3458],[3079,3458],[3207,3368],[3312,3367],[3388,3338],[3545,3118],[3614,3043],[3542,2993],[3516,2943],[3534,2892],[3584,2876],[3555,2805],[3644,2618],[3617,2539],[3639,2450],[3605,2370],[3360,2346],[3267,2298],[3173,2381],[2971,2446],[2887,2450],[2742,2376],[2430,2289],[2426,2189],[2339,2185],[2281,2129],[2202,2131],[2086,2241],[2013,2247],[1940,2210],[1800,2201]]]}},{"type":"Feature","id":"UG.2756","properties":{"hc-group":"admin1","hc-middle-x":0.55,"hc-middle-y":0.42,"hc-key":"ug-2756","hc-a2":"NA","labelrank":"7","hasc":"UG.NA","alt-name":null,"woe-id":"20070452","subregion":null,"fips":"UG73","postal-code":null,"name":"Nakasongola","country":"Uganda","type-en":"District","region":"Central","longitude":"32.3765","woe-name":"Nakasongola","latitude":"1.36245","woe-label":"Nakasongola, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[4482,3885],[4464,4003],[4371,4094],[4178,4183],[3860,4500],[3626,4620],[3694,4720],[3781,4763],[3904,4948],[4045,5004],[4111,5002],[4285,4949],[4313,4902],[4440,4862],[4574,4794],[4675,4706],[4770,4705],[4857,4595],[5024,4609],[5029,4452],[5140,4406],[5186,4364],[5226,4061],[5201,3867],[5097,3856],[5051,3936],[4998,3988],[4931,3971],[4893,3749],[4901,3652],[4777,3667],[4603,3745],[4482,3885]]]}},{"type":"Feature","id":"UG.2770","properties":{"hc-group":"admin1","hc-middle-x":0.42,"hc-middle-y":0.38,"hc-key":"ug-2770","hc-a2":"BU","labelrank":"9","hasc":"UG.BN","alt-name":null,"woe-id":"20070413","subregion":null,"fips":"UG28","postal-code":null,"name":"Bundibugyo","country":"Uganda","type-en":"District","region":"Western","longitude":"30.0508","woe-name":"Bundibugyo","latitude":"0.738092","woe-label":"Bundibugyo, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[-322,2643],[-252,2758],[-256,2832],[-292,2986],[-267,3187],[-275,3305],[-238,3380],[-144,3448],[-63,3484],[142,3530],[216,3628],[259,3514],[347,3434],[265,3368],[252,3276],[190,3170],[118,3010],[78,2967],[-7,2795],[-92,2720],[-141,2634],[-240,2581],[-322,2643]]]}},{"type":"Feature","id":"UG.7072","properties":{"hc-group":"admin1","hc-middle-x":0.53,"hc-middle-y":0.50,"hc-key":"ug-7072","hc-a2":"KY","labelrank":"7","hasc":"UG.QZ","alt-name":null,"woe-id":"-20070426","subregion":null,"fips":"UGG1","postal-code":null,"name":"Kyankwanzi","country":"Uganda","type-en":"District","region":"Central","longitude":"31.6487","woe-name":"Kiboga","latitude":"1.14122","woe-label":"Kiboga, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[2625,3449],[2604,3573],[2699,3666],[2761,3686],[2785,3765],[2645,3895],[2566,4010],[2456,4047],[2342,4121],[2625,4258],[2771,4402],[3071,4364],[3245,4330],[3287,4376],[3363,4394],[3504,4257],[3575,4135],[3613,3911],[3463,3876],[3403,3817],[3380,3727],[3237,3630],[3162,3562],[3079,3458],[3011,3458],[2903,3418],[2625,3449]]]}},{"type":"Feature","id":"UG.7053","properties":{"hc-group":"admin1","hc-middle-x":0.54,"hc-middle-y":0.59,"hc-key":"ug-7053","hc-a2":"KO","labelrank":"9","hasc":"UG.QL","alt-name":null,"woe-id":"20070411","subregion":null,"fips":"UGF8","postal-code":null,"name":"Kole","country":"Uganda","type-en":"District","region":"Northern","longitude":"32.6929","woe-name":"Apac","latitude":"2.28756","woe-label":"Apac, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[5263,5822],[5180,5848],[5141,5881],[5068,5887],[4995,5959],[4759,5963],[4816,6053],[4861,6087],[4820,6312],[4896,6333],[5029,6502],[5109,6498],[5193,6471],[5260,6524],[5231,6416],[5163,6271],[5208,6210],[5292,6051],[5279,6016],[5263,5822]]]}},{"type":"Feature","id":"UG.2753","properties":{"hc-group":"admin1","hc-middle-x":0.57,"hc-middle-y":0.42,"hc-key":"ug-2753","hc-a2":"MA","labelrank":"9","hasc":"UG.MH","alt-name":null,"woe-id":"20070412","subregion":null,"fips":"UGD5","postal-code":null,"name":"Maracha","country":"Uganda","type-en":"District","region":"Northern","longitude":"30.9101","woe-name":"Maracha","latitude":"3.2292","woe-label":"Arua, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[1893,8125],[1843,8036],[1830,7938],[1776,7880],[1695,7826],[1628,7752],[1335,7765],[1414,7998],[1449,8066],[1488,8080],[1538,8184],[1608,8265],[1706,8168],[1766,8139],[1814,8177],[1893,8125]]]}},{"type":"Feature","id":"UG.2755","properties":{"hc-group":"admin1","hc-middle-x":0.54,"hc-middle-y":0.58,"hc-key":"ug-2755","hc-a2":"KI","labelrank":"7","hasc":"UG.KG","alt-name":null,"woe-id":"-20070426","subregion":null,"fips":"UG42","postal-code":null,"name":"Kiboga","country":"Uganda","type-en":"District","region":"Central","longitude":"31.9587","woe-name":"Kiboga","latitude":"0.8412460000000001","woe-label":"Kiboga, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[3614,3043],[3545,3118],[3388,3338],[3312,3367],[3207,3368],[3079,3458],[3162,3562],[3237,3630],[3380,3727],[3403,3817],[3463,3876],[3613,3911],[3702,3753],[3704,3678],[3786,3540],[3909,3457],[4023,3436],[4124,3347],[4129,3255],[4056,3145],[3971,3108],[3841,3018],[3763,3016],[3614,3043]]]}},{"type":"Feature","id":"UG.2773","properties":{"hc-group":"admin1","hc-middle-x":0.52,"hc-middle-y":0.51,"hc-key":"ug-2773","hc-a2":"KY","labelrank":"9","hasc":"UG.KJ","alt-name":null,"woe-id":"-24550734","subregion":null,"fips":"UG85","postal-code":null,"name":"Kyenjojo","country":"Uganda","type-en":"District","region":"Western","longitude":"30.6742","woe-name":"Kyenjojo","latitude":"0.599223","woe-label":"Kyenjojo, UG, Uganda","type":"District"},"geometry":{"type":"Polygon","coordinates":[[[685,2839],[739,2890],[628,2980],[626,3028],[687,3095],[710,3260],[752,3289],[814,3409],[796,3434],[827,3489],[911,3580],[1078,3505],[1260,3460],[1346,3419],[1436,3400],[1511,3336],[1663,3137],[1574,3101],[1597,3062],[1692,3013],[1692,2898],[1630,2865],[1630,2692],[1564,2688],[1560,2597],[1465,2574],[1362,2607],[1243,2561],[1168,2485],[1075,2426],[920,2374],[897,2424],[869,2564],[869,2628],[808,2656],[755,2784],[685,2839]]]}}]};

}));


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ellyyiga/mine/projects/gamechangers/chapSlim/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map