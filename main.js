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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chap_dashboard_chap_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chap-dashboard/chap-dashboard.component */ "./src/app/chap-dashboard/chap-dashboard.component.ts");
/* harmony import */ var _chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chap-nav/chap-nav.component */ "./src/app/chap-nav/chap-nav.component.ts");
/* harmony import */ var _chap_login_chap_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chap-login/chap-login.component */ "./src/app/chap-login/chap-login.component.ts");
/* harmony import */ var _chap_order_chap_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chap-order/chap-order.component */ "./src/app/chap-order/chap-order.component.ts");
/* harmony import */ var _chap_monitor_chap_monitor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chap-monitor/chap-monitor.component */ "./src/app/chap-monitor/chap-monitor.component.ts");
/* harmony import */ var _chap_help_chap_help_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chap-help/chap-help.component */ "./src/app/chap-help/chap-help.component.ts");
/* harmony import */ var _chap_settings_chap_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chap-settings/chap-settings.component */ "./src/app/chap-settings/chap-settings.component.ts");
/* harmony import */ var _chap_admin_chap_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chap-admin/chap-admin.component */ "./src/app/chap-admin/chap-admin.component.ts");
/* harmony import */ var _chap_inventory_chap_inventory_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chap-inventory/chap-inventory.component */ "./src/app/chap-inventory/chap-inventory.component.ts");
/* harmony import */ var _chap_products_chap_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chap-products/chap-products.component */ "./src/app/chap-products/chap-products.component.ts");
/* harmony import */ var _chap_statistics_chap_statistics_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chap-statistics/chap-statistics.component */ "./src/app/chap-statistics/chap-statistics.component.ts");
/* harmony import */ var _chap_checkout_chap_checkout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chap-checkout/chap-checkout.component */ "./src/app/chap-checkout/chap-checkout.component.ts");
/* harmony import */ var _chap_cart_detail_chap_cart_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chap-cart-detail/chap-cart-detail.component */ "./src/app/chap-cart-detail/chap-cart-detail.component.ts");
/* harmony import */ var _chap_edit_product_chap_edit_product_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chap-edit-product/chap-edit-product.component */ "./src/app/chap-edit-product/chap-edit-product.component.ts");















var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _chap_login_chap_login_component__WEBPACK_IMPORTED_MODULE_3__["ChapLoginComponent"]
    },
    {
        path: 'nav',
        component: _chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_2__["ChapNavComponent"]
    },
    {
        path: 'dashboard',
        component: _chap_dashboard_chap_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["ChapDashboardComponent"]
    },
    {
        path: 'stats',
        component: _chap_statistics_chap_statistics_component__WEBPACK_IMPORTED_MODULE_11__["ChapStatisticsComponent"]
    },
    {
        path: 'products',
        component: _chap_products_chap_products_component__WEBPACK_IMPORTED_MODULE_10__["ChapProductsComponent"]
    },
    {
        path: 'inventory',
        component: _chap_inventory_chap_inventory_component__WEBPACK_IMPORTED_MODULE_9__["ChapInventoryComponent"]
    },
    {
        path: 'order',
        component: _chap_order_chap_order_component__WEBPACK_IMPORTED_MODULE_4__["ChapOrderComponent"]
    },
    {
        path: 'admin',
        component: _chap_admin_chap_admin_component__WEBPACK_IMPORTED_MODULE_8__["ChapAdminComponent"]
    },
    {
        path: 'settings',
        component: _chap_settings_chap_settings_component__WEBPACK_IMPORTED_MODULE_7__["ChapSettingsComponent"]
    },
    {
        path: 'help',
        component: _chap_help_chap_help_component__WEBPACK_IMPORTED_MODULE_6__["ChapHelpComponent"]
    },
    {
        path: 'monitor',
        component: _chap_monitor_chap_monitor_component__WEBPACK_IMPORTED_MODULE_5__["ChapMonitorComponent"]
    },
    {
        path: 'cartdetail',
        component: _chap_cart_detail_chap_cart_detail_component__WEBPACK_IMPORTED_MODULE_13__["ChapCartDetailComponent"]
    },
    {
        path: 'checkout',
        component: _chap_checkout_chap_checkout_component__WEBPACK_IMPORTED_MODULE_12__["ChapCheckoutComponent"]
    },
    {
        path: 'editproduct',
        component: _chap_edit_product_chap_edit_product_component__WEBPACK_IMPORTED_MODULE_14__["ChapEditProductComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_progress_spinner_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@angular/material/progress-spinner/typings/index.ngfactory */ "./node_modules/@angular/material/progress-spinner/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "loader"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Loading...... "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "mat-spinner", [["class", "mat-spinner mat-progress-spinner"], ["mode", "indeterminate"], ["role", "progressbar"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"]], null, null, _node_modules_angular_material_progress_spinner_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatSpinner_0"], _node_modules_angular_material_progress_spinner_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatSpinner"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatSpinner"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "loader"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 7, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.loading; _ck(_v, 0, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._noopAnimations; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).diameter; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).diameter; _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.loading; _ck(_v, 5, 0, currVal_4); }); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



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
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/material/dialog/typings/index.ngfactory */ "./node_modules/@angular/material/dialog/typings/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@angular/material/datepicker/typings/index.ngfactory */ "./node_modules/@angular/material/datepicker/typings/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _chap_login_chap_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chap-login/chap-login.component.ngfactory */ "./src/app/chap-login/chap-login.component.ngfactory.js");
/* harmony import */ var _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chap-nav/chap-nav.component.ngfactory */ "./src/app/chap-nav/chap-nav.component.ngfactory.js");
/* harmony import */ var _chap_dashboard_chap_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chap-dashboard/chap-dashboard.component.ngfactory */ "./src/app/chap-dashboard/chap-dashboard.component.ngfactory.js");
/* harmony import */ var _chap_statistics_chap_statistics_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chap-statistics/chap-statistics.component.ngfactory */ "./src/app/chap-statistics/chap-statistics.component.ngfactory.js");
/* harmony import */ var _chap_products_chap_products_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chap-products/chap-products.component.ngfactory */ "./src/app/chap-products/chap-products.component.ngfactory.js");
/* harmony import */ var _chap_inventory_chap_inventory_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chap-inventory/chap-inventory.component.ngfactory */ "./src/app/chap-inventory/chap-inventory.component.ngfactory.js");
/* harmony import */ var _chap_order_chap_order_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chap-order/chap-order.component.ngfactory */ "./src/app/chap-order/chap-order.component.ngfactory.js");
/* harmony import */ var _chap_admin_chap_admin_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chap-admin/chap-admin.component.ngfactory */ "./src/app/chap-admin/chap-admin.component.ngfactory.js");
/* harmony import */ var _chap_settings_chap_settings_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chap-settings/chap-settings.component.ngfactory */ "./src/app/chap-settings/chap-settings.component.ngfactory.js");
/* harmony import */ var _chap_help_chap_help_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chap-help/chap-help.component.ngfactory */ "./src/app/chap-help/chap-help.component.ngfactory.js");
/* harmony import */ var _chap_monitor_chap_monitor_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./chap-monitor/chap-monitor.component.ngfactory */ "./src/app/chap-monitor/chap-monitor.component.ngfactory.js");
/* harmony import */ var _chap_cart_detail_chap_cart_detail_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./chap-cart-detail/chap-cart-detail.component.ngfactory */ "./src/app/chap-cart-detail/chap-cart-detail.component.ngfactory.js");
/* harmony import */ var _chap_checkout_chap_checkout_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./chap-checkout/chap-checkout.component.ngfactory */ "./src/app/chap-checkout/chap-checkout.component.ngfactory.js");
/* harmony import */ var _chap_edit_product_chap_edit_product_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./chap-edit-product/chap-edit-product.component.ngfactory */ "./src/app/chap-edit-product/chap-edit-product.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm5/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_static_datasource__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./model/static.datasource */ "./src/app/model/static.datasource.ts");
/* harmony import */ var _model_product_repository__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./model/product.repository */ "./src/app/model/product.repository.ts");
/* harmony import */ var _model_cart_model__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./model/cart.model */ "./src/app/model/cart.model.ts");
/* harmony import */ var _model_order_model__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./model/order.model */ "./src/app/model/order.model.ts");
/* harmony import */ var _model_order_repository__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./model/order.repository */ "./src/app/model/order.repository.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm5/highcharts-angular.js");
/* harmony import */ var _chap_login_chap_login_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./chap-login/chap-login.component */ "./src/app/chap-login/chap-login.component.ts");
/* harmony import */ var _chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./chap-nav/chap-nav.component */ "./src/app/chap-nav/chap-nav.component.ts");
/* harmony import */ var _chap_dashboard_chap_dashboard_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./chap-dashboard/chap-dashboard.component */ "./src/app/chap-dashboard/chap-dashboard.component.ts");
/* harmony import */ var _chap_statistics_chap_statistics_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./chap-statistics/chap-statistics.component */ "./src/app/chap-statistics/chap-statistics.component.ts");
/* harmony import */ var _chap_products_chap_products_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./chap-products/chap-products.component */ "./src/app/chap-products/chap-products.component.ts");
/* harmony import */ var _chap_inventory_chap_inventory_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./chap-inventory/chap-inventory.component */ "./src/app/chap-inventory/chap-inventory.component.ts");
/* harmony import */ var _chap_order_chap_order_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./chap-order/chap-order.component */ "./src/app/chap-order/chap-order.component.ts");
/* harmony import */ var _chap_admin_chap_admin_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./chap-admin/chap-admin.component */ "./src/app/chap-admin/chap-admin.component.ts");
/* harmony import */ var _chap_settings_chap_settings_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./chap-settings/chap-settings.component */ "./src/app/chap-settings/chap-settings.component.ts");
/* harmony import */ var _chap_help_chap_help_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./chap-help/chap-help.component */ "./src/app/chap-help/chap-help.component.ts");
/* harmony import */ var _chap_monitor_chap_monitor_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./chap-monitor/chap-monitor.component */ "./src/app/chap-monitor/chap-monitor.component.ts");
/* harmony import */ var _chap_cart_detail_chap_cart_detail_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./chap-cart-detail/chap-cart-detail.component */ "./src/app/chap-cart-detail/chap-cart-detail.component.ts");
/* harmony import */ var _chap_checkout_chap_checkout_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./chap-checkout/chap-checkout.component */ "./src/app/chap-checkout/chap-checkout.component.ts");
/* harmony import */ var _chap_edit_product_chap_edit_product_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./chap-edit-product/chap-edit-product.component */ "./src/app/chap-edit-product/chap-edit-product.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _model_model_module__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./model/model.module */ "./src/app/model/model.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 















































































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatCalendarHeaderNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ɵEmptyOutletComponentNgFactory"], _chap_login_chap_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["ChapLoginComponentNgFactory"], _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ChapNavComponentNgFactory"], _chap_dashboard_chap_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ChapDashboardComponentNgFactory"], _chap_statistics_chap_statistics_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ChapStatisticsComponentNgFactory"], _chap_products_chap_products_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["ChapProductsComponentNgFactory"], _chap_inventory_chap_inventory_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["ChapInventoryComponentNgFactory"], _chap_order_chap_order_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["ChapOrderComponentNgFactory"], _chap_admin_chap_admin_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["ChapAdminComponentNgFactory"], _chap_settings_chap_settings_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["ChapSettingsComponentNgFactory"], _chap_help_chap_help_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["ChapHelpComponentNgFactory"], _chap_monitor_chap_monitor_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["ChapMonitorComponentNgFactory"], _chap_cart_detail_chap_cart_detail_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["ChapCartDetailComponentNgFactory"], _chap_checkout_chap_checkout_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["ChapCheckoutComponentNgFactory"], _chap_edit_product_chap_edit_product_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["ChapEditProductComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_k"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_i"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_23__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_23__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_platform_browser_animations_animations_c"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_23__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_platform_browser_animations_animations_a"], [_angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_23__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_23__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_platform_browser_animations_animations_d"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_23__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_25__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_forms_forms_i"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_forms_forms_i"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_27__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_27__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_29__["Directionality"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["ɵd23"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_21__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_34__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_35__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_35__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_35__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_35__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_35__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_35__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_35__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_35__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_35__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_35__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_35__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_35__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_router_router_n"], _angular_router__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_35__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_35__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_35__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_35__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _model_static_datasource__WEBPACK_IMPORTED_MODULE_36__["StaticDataSource"], _model_static_datasource__WEBPACK_IMPORTED_MODULE_36__["StaticDataSource"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _model_product_repository__WEBPACK_IMPORTED_MODULE_37__["ProductRepository"], _model_product_repository__WEBPACK_IMPORTED_MODULE_37__["ProductRepository"], [_model_static_datasource__WEBPACK_IMPORTED_MODULE_36__["StaticDataSource"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _model_cart_model__WEBPACK_IMPORTED_MODULE_38__["Cart"], _model_cart_model__WEBPACK_IMPORTED_MODULE_38__["Cart"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _model_order_model__WEBPACK_IMPORTED_MODULE_39__["Order"], _model_order_model__WEBPACK_IMPORTED_MODULE_39__["Order"], [_model_cart_model__WEBPACK_IMPORTED_MODULE_38__["Cart"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _model_order_repository__WEBPACK_IMPORTED_MODULE_40__["OrderRepository"], _model_order_repository__WEBPACK_IMPORTED_MODULE_40__["OrderRepository"], [_model_static_datasource__WEBPACK_IMPORTED_MODULE_36__["StaticDataSource"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_21__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_router_router_i"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_forms_forms_bb"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_forms_forms_bb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_41__["LayoutModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_41__["LayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_29__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_29__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MATERIAL_SANITY_CHECKS"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_34__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_34__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_42__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_42__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_43__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_43__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_44__["ScrollDispatchModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_44__["ScrollDispatchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_45__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_45__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_46__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_46__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_27__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_27__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_47__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_47__["A11yModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_badge__WEBPACK_IMPORTED_MODULE_48__["MatBadgeModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_48__["MatBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_49__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_49__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_50__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_50__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_51__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_51__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_52__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_52__["MatGridListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_53__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_53__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_54__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_54__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_56__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_56__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_57__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_57__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatNativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_radio__WEBPACK_IMPORTED_MODULE_58__["MatRadioModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_58__["MatRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_59__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_59__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_60__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_60__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _material__WEBPACK_IMPORTED_MODULE_61__["MaterialModule"], _material__WEBPACK_IMPORTED_MODULE_61__["MaterialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, highcharts_angular__WEBPACK_IMPORTED_MODULE_62__["HighchartsChartModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_62__["HighchartsChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_35__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_35__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_35__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_35__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_35__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_35__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_21__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_21__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_21__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_35__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_21__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_21__["LocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_35__["ROUTES"], function () { return [[{ path: "", redirectTo: "/login", pathMatch: "full" }, { path: "login", component: _chap_login_chap_login_component__WEBPACK_IMPORTED_MODULE_63__["ChapLoginComponent"] }, { path: "nav", component: _chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_64__["ChapNavComponent"] }, { path: "dashboard", component: _chap_dashboard_chap_dashboard_component__WEBPACK_IMPORTED_MODULE_65__["ChapDashboardComponent"] }, { path: "stats", component: _chap_statistics_chap_statistics_component__WEBPACK_IMPORTED_MODULE_66__["ChapStatisticsComponent"] }, { path: "products", component: _chap_products_chap_products_component__WEBPACK_IMPORTED_MODULE_67__["ChapProductsComponent"] }, { path: "inventory", component: _chap_inventory_chap_inventory_component__WEBPACK_IMPORTED_MODULE_68__["ChapInventoryComponent"] }, { path: "order", component: _chap_order_chap_order_component__WEBPACK_IMPORTED_MODULE_69__["ChapOrderComponent"] }, { path: "admin", component: _chap_admin_chap_admin_component__WEBPACK_IMPORTED_MODULE_70__["ChapAdminComponent"] }, { path: "settings", component: _chap_settings_chap_settings_component__WEBPACK_IMPORTED_MODULE_71__["ChapSettingsComponent"] }, { path: "help", component: _chap_help_chap_help_component__WEBPACK_IMPORTED_MODULE_72__["ChapHelpComponent"] }, { path: "monitor", component: _chap_monitor_chap_monitor_component__WEBPACK_IMPORTED_MODULE_73__["ChapMonitorComponent"] }, { path: "cartdetail", component: _chap_cart_detail_chap_cart_detail_component__WEBPACK_IMPORTED_MODULE_74__["ChapCartDetailComponent"] }, { path: "checkout", component: _chap_checkout_chap_checkout_component__WEBPACK_IMPORTED_MODULE_75__["ChapCheckoutComponent"] }, { path: "editproduct", component: _chap_edit_product_chap_edit_product_component__WEBPACK_IMPORTED_MODULE_76__["ChapEditProductComponent"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_35__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_35__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_35__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_35__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_35__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_35__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_35__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_35__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_35__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_35__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_77__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_77__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _model_model_module__WEBPACK_IMPORTED_MODULE_78__["ModelModule"], _model_model_module__WEBPACK_IMPORTED_MODULE_78__["ModelModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MAT_DATE_FORMATS"], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MAT_NATIVE_DATE_FORMATS"], [])]); });



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
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");

var AppModule = /** @class */ (function () {
    function AppModule(overlayContainer) {
        overlayContainer.getContainerElement().classList.add('chapchap-light-theme');
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chap-add-member/chap-add-member.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/chap-add-member/chap-add-member.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_ChapAddMemberComponent, View_ChapAddMemberComponent_0, View_ChapAddMemberComponent_Host_0, ChapAddMemberComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChapAddMemberComponent", function() { return RenderType_ChapAddMemberComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapAddMemberComponent_0", function() { return View_ChapAddMemberComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapAddMemberComponent_Host_0", function() { return View_ChapAddMemberComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapAddMemberComponentNgFactory", function() { return ChapAddMemberComponentNgFactory; });
/* harmony import */ var _chap_add_member_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chap-add-member.component.scss.shim.ngstyle */ "./src/app/chap-add-member/chap-add-member.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@angular/material/form-field/typings/index.ngfactory */ "./node_modules/@angular/material/form-field/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _node_modules_angular_material_radio_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../node_modules/@angular/material/radio/typings/index.ngfactory */ "./node_modules/@angular/material/radio/typings/index.ngfactory.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chap_add_member_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./chap-add-member.component */ "./src/app/chap-add-member/chap-add-member.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






















var styles_ChapAddMemberComponent = [_chap_add_member_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChapAddMemberComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChapAddMemberComponent, data: {} });

function View_ChapAddMemberComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[11, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.getErrorMessage(); _ck(_v, 2, 0, currVal_1); }); }
function View_ChapAddMemberComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 99, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_bg"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 11, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 7389184, null, 7, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 1, { _control: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { _labelChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 1, 2, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["placeholder", "Name"], ["required", ""]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "blur"], [null, "focus"], [null, "input"]], function (_v, en, $event) { var ad = true; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._focusChanged(false) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._focusChanged(true) !== false);
        ad = (pd_1 && ad);
    } if (("input" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._onInput() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_10__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"], required: [1, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 13, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 7389184, null, 7, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 8, { _control: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 9, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 10, { _labelChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, 1, 2, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["placeholder", "Enter email"], ["required", ""]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "blur"], [null, "focus"], [null, "input"]], function (_v, en, $event) { var ad = true; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._focusChanged(false) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._focusChanged(true) !== false);
        ad = (pd_1 && ad);
    } if (("input" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._onInput() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_10__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"], required: [1, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[8, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 5, 1, null, View_ChapAddMemberComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 18, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 7389184, null, 7, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 15, { _control: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 16, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 17, { _labelChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, 1, 2, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["placeholder", "Phone number"], ["required", ""]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "blur"], [null, "focus"], [null, "input"]], function (_v, en, $event) { var ad = true; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._focusChanged(false) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._focusChanged(true) !== false);
        ad = (pd_1 && ad);
    } if (("input" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._onInput() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_10__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"], required: [1, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[15, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, 4, 3, "mat-icon", [["class", "mat-icon"], ["matSuffix", ""], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconRegistry"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, [[21, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatSuffix"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["phone"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, 6, 2, "mat-hint", [["class", "mat-hint"]], [[2, "mat-right", null], [1, "id", 0], [1, "align", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, [[19, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatHint"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Include area code "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 15, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 7389184, null, 7, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 22, { _control: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 23, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 24, { _labelChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 25, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 26, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 27, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 28, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, 1, 2, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["placeholder", "Enter password"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "blur"], [null, "focus"], [null, "input"]], function (_v, en, $event) { var ad = true; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._focusChanged(false) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._focusChanged(true) !== false);
        ad = (pd_1 && ad);
    } if (("input" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._onInput() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_10__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"], type: [1, "type"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[22, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, 4, 3, "mat-icon", [["class", "mat-icon"], ["matSuffix", ""], ["role", "img"]], [[2, "mat-icon-inline", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.hide = !_co.hide) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconRegistry"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 16384, [[28, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatSuffix"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](65, 0, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 15, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 7389184, null, 7, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 29, { _control: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 30, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 31, { _labelChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 32, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 33, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 34, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 35, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, 1, 2, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["placeholder", "Retype password"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "blur"], [null, "focus"], [null, "input"]], function (_v, en, $event) { var ad = true; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76)._focusChanged(false) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76)._focusChanged(true) !== false);
        ad = (pd_1 && ad);
    } if (("input" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76)._onInput() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_10__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"], type: [1, "type"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[29, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, 4, 3, "mat-icon", [["class", "mat-icon"], ["matSuffix", ""], ["role", "img"]], [[2, "mat-icon-inline", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.hide = !_co.hide) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconRegistry"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 16384, [[35, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatSuffix"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](81, 0, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 9, "mat-radio-group", [["class", "mat-radio-group"], ["role", "radiogroup"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioGroup"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 1064960, null, 1, _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioGroup"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 36, { _radios: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 2, "mat-radio-button", [["class", "mat-radio-button"], ["value", "M"]], [[2, "mat-radio-checked", null], [2, "mat-radio-disabled", null], [2, "_mat-animation-noopable", null], [1, "id", 0]], [[null, "focus"]], function (_v, en, $event) { var ad = true; if (("focus" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88)._inputElement.nativeElement.focus() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_radio_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatRadioButton_0"], _node_modules_angular_material_radio_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatRadioButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](88, 4440064, [[36, 4]], 0, _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioButton"], [[2, _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioGroup"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__["FocusMonitor"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__["UniqueSelectionDispatcher"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Male"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 2, "mat-radio-button", [["class", "mat-radio-button"], ["value", "F"]], [[2, "mat-radio-checked", null], [2, "mat-radio-disabled", null], [2, "_mat-animation-noopable", null], [1, "id", 0]], [[null, "focus"]], function (_v, en, $event) { var ad = true; if (("focus" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91)._inputElement.nativeElement.focus() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_radio_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatRadioButton_0"], _node_modules_angular_material_radio_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatRadioButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 4440064, [[36, 4]], 0, _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioButton"], [[2, _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioGroup"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__["FocusMonitor"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__["UniqueSelectionDispatcher"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Female"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 5, "button", [["mat-raised-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 96).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](95, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](96, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](97, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](98, 0, null, 0, 1, "span", [["class", "chap-red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" ADD "]))], function (_ck, _v) { var _co = _v.component; var currVal_37 = "Name"; var currVal_38 = ""; _ck(_v, 15, 0, currVal_37, currVal_38); var currVal_69 = "Enter email"; var currVal_70 = ""; _ck(_v, 27, 0, currVal_69, currVal_70); var currVal_71 = _co.email.invalid; _ck(_v, 30, 0, currVal_71); var currVal_102 = "Phone number"; var currVal_103 = ""; _ck(_v, 41, 0, currVal_102, currVal_103); _ck(_v, 44, 0); var currVal_138 = "Enter password"; var currVal_139 = (_co.hide ? "password" : "text"); _ck(_v, 60, 0, currVal_138, currVal_139); _ck(_v, 63, 0); var currVal_172 = "Retype password"; var currVal_173 = (_co.hide ? "password" : "text"); _ck(_v, 76, 0, currVal_172, currVal_173); _ck(_v, 79, 0); var currVal_180 = "M"; _ck(_v, 88, 0, currVal_180); var currVal_185 = "F"; _ck(_v, 91, 0, currVal_185); var currVal_188 = _ck(_v, 97, 0, "/admin"); _ck(_v, 96, 0, currVal_188); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).appearance == "standard"); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).appearance == "fill"); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).appearance == "outline"); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).appearance == "legacy"); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._control.errorState; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._canLabelFloat; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldLabelFloat(); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._hideControlPlaceholder(); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._control.disabled; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._control.autofilled; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._control.focused; var currVal_18 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).color == "accent"); var currVal_19 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).color == "warn"); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldForward("untouched"); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldForward("touched"); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldForward("pristine"); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldForward("dirty"); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldForward("valid"); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldForward("invalid"); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldForward("pending"); var currVal_27 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._animationsEnabled; _ck(_v, 5, 1, [currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27]); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._isServer; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).id; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).placeholder; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).disabled; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).required; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).readonly; var currVal_34 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._ariaDescribedby || null); var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).errorState; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).required.toString(); _ck(_v, 14, 0, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36); var currVal_39 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).appearance == "standard"); var currVal_40 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).appearance == "fill"); var currVal_41 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).appearance == "outline"); var currVal_42 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).appearance == "legacy"); var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._control.errorState; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._canLabelFloat; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._shouldLabelFloat(); var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._hideControlPlaceholder(); var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._control.disabled; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._control.autofilled; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._control.focused; var currVal_50 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).color == "accent"); var currVal_51 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).color == "warn"); var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._shouldForward("untouched"); var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._shouldForward("touched"); var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._shouldForward("pristine"); var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._shouldForward("dirty"); var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._shouldForward("valid"); var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._shouldForward("invalid"); var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._shouldForward("pending"); var currVal_59 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._animationsEnabled; _ck(_v, 17, 1, [currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59]); var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._isServer; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).id; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).placeholder; var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).disabled; var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).required; var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).readonly; var currVal_66 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._ariaDescribedby || null); var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).errorState; var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).required.toString(); _ck(_v, 26, 0, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68); var currVal_72 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).appearance == "standard"); var currVal_73 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).appearance == "fill"); var currVal_74 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).appearance == "outline"); var currVal_75 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).appearance == "legacy"); var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._control.errorState; var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._canLabelFloat; var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._shouldLabelFloat(); var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._hideControlPlaceholder(); var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._control.disabled; var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._control.autofilled; var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._control.focused; var currVal_83 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).color == "accent"); var currVal_84 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).color == "warn"); var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._shouldForward("untouched"); var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._shouldForward("touched"); var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._shouldForward("pristine"); var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._shouldForward("dirty"); var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._shouldForward("valid"); var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._shouldForward("invalid"); var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._shouldForward("pending"); var currVal_92 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._animationsEnabled; _ck(_v, 31, 1, [currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89, currVal_90, currVal_91, currVal_92]); var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._isServer; var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).id; var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).placeholder; var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).disabled; var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).required; var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).readonly; var currVal_99 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._ariaDescribedby || null); var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).errorState; var currVal_101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).required.toString(); _ck(_v, 40, 0, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97, currVal_98, currVal_99, currVal_100, currVal_101); var currVal_104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).inline; _ck(_v, 43, 0, currVal_104); var currVal_105 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).align == "end"); var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).id; var currVal_107 = null; _ck(_v, 47, 0, currVal_105, currVal_106, currVal_107); var currVal_108 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).appearance == "standard"); var currVal_109 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).appearance == "fill"); var currVal_110 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).appearance == "outline"); var currVal_111 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).appearance == "legacy"); var currVal_112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._control.errorState; var currVal_113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._canLabelFloat; var currVal_114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._shouldLabelFloat(); var currVal_115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._hideControlPlaceholder(); var currVal_116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._control.disabled; var currVal_117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._control.autofilled; var currVal_118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._control.focused; var currVal_119 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).color == "accent"); var currVal_120 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).color == "warn"); var currVal_121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._shouldForward("untouched"); var currVal_122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._shouldForward("touched"); var currVal_123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._shouldForward("pristine"); var currVal_124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._shouldForward("dirty"); var currVal_125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._shouldForward("valid"); var currVal_126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._shouldForward("invalid"); var currVal_127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._shouldForward("pending"); var currVal_128 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._animationsEnabled; _ck(_v, 50, 1, [currVal_108, currVal_109, currVal_110, currVal_111, currVal_112, currVal_113, currVal_114, currVal_115, currVal_116, currVal_117, currVal_118, currVal_119, currVal_120, currVal_121, currVal_122, currVal_123, currVal_124, currVal_125, currVal_126, currVal_127, currVal_128]); var currVal_129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._isServer; var currVal_130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).id; var currVal_131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).placeholder; var currVal_132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).disabled; var currVal_133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).required; var currVal_134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).readonly; var currVal_135 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._ariaDescribedby || null); var currVal_136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).errorState; var currVal_137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).required.toString(); _ck(_v, 59, 0, currVal_129, currVal_130, currVal_131, currVal_132, currVal_133, currVal_134, currVal_135, currVal_136, currVal_137); var currVal_140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).inline; _ck(_v, 62, 0, currVal_140); var currVal_141 = (_co.hide ? "visibility" : "visibility_off"); _ck(_v, 65, 0, currVal_141); var currVal_142 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).appearance == "standard"); var currVal_143 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).appearance == "fill"); var currVal_144 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).appearance == "outline"); var currVal_145 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).appearance == "legacy"); var currVal_146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._control.errorState; var currVal_147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._canLabelFloat; var currVal_148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._shouldLabelFloat(); var currVal_149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._hideControlPlaceholder(); var currVal_150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._control.disabled; var currVal_151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._control.autofilled; var currVal_152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._control.focused; var currVal_153 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).color == "accent"); var currVal_154 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).color == "warn"); var currVal_155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._shouldForward("untouched"); var currVal_156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._shouldForward("touched"); var currVal_157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._shouldForward("pristine"); var currVal_158 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._shouldForward("dirty"); var currVal_159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._shouldForward("valid"); var currVal_160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._shouldForward("invalid"); var currVal_161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._shouldForward("pending"); var currVal_162 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._animationsEnabled; _ck(_v, 66, 1, [currVal_142, currVal_143, currVal_144, currVal_145, currVal_146, currVal_147, currVal_148, currVal_149, currVal_150, currVal_151, currVal_152, currVal_153, currVal_154, currVal_155, currVal_156, currVal_157, currVal_158, currVal_159, currVal_160, currVal_161, currVal_162]); var currVal_163 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76)._isServer; var currVal_164 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).id; var currVal_165 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).placeholder; var currVal_166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).disabled; var currVal_167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).required; var currVal_168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).readonly; var currVal_169 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76)._ariaDescribedby || null); var currVal_170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).errorState; var currVal_171 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).required.toString(); _ck(_v, 75, 0, currVal_163, currVal_164, currVal_165, currVal_166, currVal_167, currVal_168, currVal_169, currVal_170, currVal_171); var currVal_174 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).inline; _ck(_v, 78, 0, currVal_174); var currVal_175 = (_co.hide ? "visibility" : "visibility_off"); _ck(_v, 81, 0, currVal_175); var currVal_176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).checked; var currVal_177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).disabled; var currVal_178 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88)._animationMode === "NoopAnimations"); var currVal_179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).id; _ck(_v, 87, 0, currVal_176, currVal_177, currVal_178, currVal_179); var currVal_181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).checked; var currVal_182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).disabled; var currVal_183 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91)._animationMode === "NoopAnimations"); var currVal_184 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).id; _ck(_v, 90, 0, currVal_181, currVal_182, currVal_183, currVal_184); var currVal_186 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 95).disabled || null); var currVal_187 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 95)._animationMode === "NoopAnimations"); _ck(_v, 94, 0, currVal_186, currVal_187); }); }
function View_ChapAddMemberComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-add-member", [], null, null, null, View_ChapAddMemberComponent_0, RenderType_ChapAddMemberComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chap_add_member_component__WEBPACK_IMPORTED_MODULE_21__["ChapAddMemberComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChapAddMemberComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-chap-add-member", _chap_add_member_component__WEBPACK_IMPORTED_MODULE_21__["ChapAddMemberComponent"], View_ChapAddMemberComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/chap-add-member/chap-add-member.component.scss.shim.ngstyle.js":
/*!********************************************************************************!*\
  !*** ./src/app/chap-add-member/chap-add-member.component.scss.shim.ngstyle.js ***!
  \********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/chap-add-member/chap-add-member.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/chap-add-member/chap-add-member.component.ts ***!
  \**************************************************************/
/*! exports provided: ChapAddMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapAddMemberComponent", function() { return ChapAddMemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


var ChapAddMemberComponent = /** @class */ (function () {
    function ChapAddMemberComponent() {
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.hide = true;
    }
    ChapAddMemberComponent.prototype.ngOnInit = function () {
    };
    ChapAddMemberComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' : '';
    };
    return ChapAddMemberComponent;
}());



/***/ }),

/***/ "./src/app/chap-admin/chap-admin.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/chap-admin/chap-admin.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_ChapAdminComponent, View_ChapAdminComponent_0, View_ChapAdminComponent_Host_0, ChapAdminComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChapAdminComponent", function() { return RenderType_ChapAdminComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapAdminComponent_0", function() { return View_ChapAdminComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapAdminComponent_Host_0", function() { return View_ChapAdminComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapAdminComponentNgFactory", function() { return ChapAdminComponentNgFactory; });
/* harmony import */ var _chap_admin_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chap-admin.component.scss.shim.ngstyle */ "./src/app/chap-admin/chap-admin.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/material/card/typings/index.ngfactory */ "./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../chap-nav/chap-nav.component.ngfactory */ "./src/app/chap-nav/chap-nav.component.ngfactory.js");
/* harmony import */ var _chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../chap-nav/chap-nav.component */ "./src/app/chap-nav/chap-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _chap_add_member_chap_add_member_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../chap-add-member/chap-add-member.component.ngfactory */ "./src/app/chap-add-member/chap-add-member.component.ngfactory.js");
/* harmony import */ var _chap_add_member_chap_add_member_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../chap-add-member/chap-add-member.component */ "./src/app/chap-add-member/chap-add-member.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chap_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./chap-admin.component */ "./src/app/chap-admin/chap-admin.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


















var styles_ChapAdminComponent = [_chap_admin_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChapAdminComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChapAdminComponent, data: {} });

function View_ChapAdminComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 41, "mat-card", [["class", "mb-2 person-card-content mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 12, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "img", [["class", "img-round"], ["height", ""], ["width", ""]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 9, "mat-card-title-group", [["class", "mat-card-title-group"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCardTitleGroup_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCardTitleGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitleGroup"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 2, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 4, "mat-card-subtitle", [["class", "mat-card-subtitle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 1, 26, "mat-card-footer", [["class", "mat-card-footer"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardFooter"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 4, "button", [["class", "toolbar-icon"], ["mat-icon-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["mail_outline"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 4, "button", [["class", "toolbar-icon"], ["mat-icon-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["star_rate"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 4, "button", [["class", "toolbar-icon"], ["mat-icon-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["language"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 4, "button", [["class", "toolbar-icon"], ["mat-icon-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["android"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 4, "button", [["class", "toolbar-icon"], ["mat-icon-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["phone"]))], function (_ck, _v) { _ck(_v, 20, 0); _ck(_v, 25, 0); _ck(_v, 30, 0); _ck(_v, 35, 0); _ck(_v, 40, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.card_img, ""); _ck(_v, 4, 0, currVal_0); var currVal_1 = _v.context.$implicit.card_name; _ck(_v, 9, 0, currVal_1); var currVal_2 = _v.context.$implicit.card_location; _ck(_v, 12, 0, currVal_2); var currVal_3 = _v.context.$implicit.card_phone; _ck(_v, 14, 0, currVal_3); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).disabled || null); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._animationMode === "NoopAnimations"); _ck(_v, 17, 0, currVal_4, currVal_5); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).inline; _ck(_v, 19, 0, currVal_6); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).disabled || null); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._animationMode === "NoopAnimations"); _ck(_v, 22, 0, currVal_7, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).inline; _ck(_v, 24, 0, currVal_9); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).disabled || null); var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._animationMode === "NoopAnimations"); _ck(_v, 27, 0, currVal_10, currVal_11); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).inline; _ck(_v, 29, 0, currVal_12); var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).disabled || null); var currVal_14 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._animationMode === "NoopAnimations"); _ck(_v, 32, 0, currVal_13, currVal_14); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).inline; _ck(_v, 34, 0, currVal_15); var currVal_16 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).disabled || null); var currVal_17 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._animationMode === "NoopAnimations"); _ck(_v, 37, 0, currVal_16, currVal_17); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).inline; _ck(_v, 39, 0, currVal_18); }); }
function View_ChapAdminComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 41, "mat-card", [["class", "mb-2 text-center mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 12, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "img", [["class", "img-round"], ["height", ""], ["width", ""]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 9, "mat-card-title-group", [["class", "mat-card-title-group"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCardTitleGroup_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCardTitleGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitleGroup"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 2, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 4, "mat-card-subtitle", [["class", "mat-card-subtitle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 1, 26, "mat-card-footer", [["class", "mat-card-footer"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardFooter"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 4, "button", [["class", "toolbar-icon"], ["mat-icon-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["mail_outline"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 4, "button", [["class", "toolbar-icon"], ["mat-icon-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["star_rate"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 4, "button", [["class", "toolbar-icon"], ["mat-icon-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["language"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 4, "button", [["class", "toolbar-icon"], ["mat-icon-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["android"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 4, "button", [["class", "toolbar-icon"], ["mat-icon-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["phone"]))], function (_ck, _v) { _ck(_v, 20, 0); _ck(_v, 25, 0); _ck(_v, 30, 0); _ck(_v, 35, 0); _ck(_v, 40, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.card_img, ""); _ck(_v, 4, 0, currVal_0); var currVal_1 = _v.context.$implicit.card_name; _ck(_v, 9, 0, currVal_1); var currVal_2 = _v.context.$implicit.card_location; _ck(_v, 12, 0, currVal_2); var currVal_3 = _v.context.$implicit.card_phone; _ck(_v, 14, 0, currVal_3); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).disabled || null); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._animationMode === "NoopAnimations"); _ck(_v, 17, 0, currVal_4, currVal_5); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).inline; _ck(_v, 19, 0, currVal_6); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).disabled || null); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._animationMode === "NoopAnimations"); _ck(_v, 22, 0, currVal_7, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).inline; _ck(_v, 24, 0, currVal_9); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).disabled || null); var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._animationMode === "NoopAnimations"); _ck(_v, 27, 0, currVal_10, currVal_11); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).inline; _ck(_v, 29, 0, currVal_12); var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).disabled || null); var currVal_14 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._animationMode === "NoopAnimations"); _ck(_v, 32, 0, currVal_13, currVal_14); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).inline; _ck(_v, 34, 0, currVal_15); var currVal_16 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).disabled || null); var currVal_17 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._animationMode === "NoopAnimations"); _ck(_v, 37, 0, currVal_16, currVal_17); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).inline; _ck(_v, 39, 0, currVal_18); }); }
function View_ChapAdminComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-nav", [], null, null, null, _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_ChapNavComponent_0"], _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_ChapNavComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_12__["ChapNavComponent"], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__["BreakpointObserver"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 73, "mat-card", [["class", "grid-container mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 3, "nav", [["aria-label", "breadcrumb"], ["class", "mt-2 mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "ol", [["class", "breadcrumb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "li", [["aria-current", "page"], ["class", "breadcrumb-item active mat-h1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Admin "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 67, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 54, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 46, "mat-card", [["class", "mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 1, "img", [["class", "mat-card-image"], ["mat-card-image", ""], ["src", "../../assets/img/user.png"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 9, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCardHeader_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 2, 7, "mat-card-title-group", [["class", "mat-card-title-group"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCardTitleGroup_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCardTitleGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitleGroup"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 2, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" John Doe "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 0, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" General Manager "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, 0, 5, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Company: Uniliver (U) Ltd "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Kampala,Uganda "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, 1, 26, "mat-card-footer", [["class", "mat-card-footer"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardFooter"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 4, "button", [["class", "toolbar-icon"], ["mat-icon-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["mail_outline"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 4, "button", [["class", "toolbar-icon"], ["mat-icon-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["star_rate"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 4, "button", [["class", "toolbar-icon"], ["mat-icon-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["language"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 4, "button", [["class", "toolbar-icon"], ["mat-icon-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["android"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 4, "button", [["class", "toolbar-icon"], ["mat-icon-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["phone"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 6, "mat-card", [["class", " ml-2 mb-2 mt-2 mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, 0, 2, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" ADD MEMBER "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, 0, 1, "app-chap-add-member", [], null, null, null, _chap_add_member_chap_add_member_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_ChapAddMemberComponent_0"], _chap_add_member_chap_add_member_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_ChapAddMemberComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 114688, null, 0, _chap_add_member_chap_add_member_component__WEBPACK_IMPORTED_MODULE_15__["ChapAddMemberComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 11, "div", [["class", "col-md-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 10, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 4, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 1, "h3", [["class", "chap-red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" List of Distributors "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChapAdminComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 4, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 1, "h3", [["class", "chap-red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Employees on system "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChapAdminComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 35, 0); _ck(_v, 40, 0); _ck(_v, 45, 0); _ck(_v, 50, 0); _ck(_v, 55, 0); _ck(_v, 63, 0); var currVal_15 = _co.distributors; _ck(_v, 70, 0, currVal_15); var currVal_16 = _co.employees; _ck(_v, 75, 0, currVal_16); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._animationMode === "NoopAnimations"); _ck(_v, 32, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).inline; _ck(_v, 34, 0, currVal_2); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).disabled || null); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._animationMode === "NoopAnimations"); _ck(_v, 37, 0, currVal_3, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).inline; _ck(_v, 39, 0, currVal_5); var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).disabled || null); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43)._animationMode === "NoopAnimations"); _ck(_v, 42, 0, currVal_6, currVal_7); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).inline; _ck(_v, 44, 0, currVal_8); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).disabled || null); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48)._animationMode === "NoopAnimations"); _ck(_v, 47, 0, currVal_9, currVal_10); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).inline; _ck(_v, 49, 0, currVal_11); var currVal_12 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).disabled || null); var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53)._animationMode === "NoopAnimations"); _ck(_v, 52, 0, currVal_12, currVal_13); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).inline; _ck(_v, 54, 0, currVal_14); }); }
function View_ChapAdminComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-admin", [], null, null, null, View_ChapAdminComponent_0, RenderType_ChapAdminComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chap_admin_component__WEBPACK_IMPORTED_MODULE_17__["ChapAdminComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChapAdminComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-chap-admin", _chap_admin_component__WEBPACK_IMPORTED_MODULE_17__["ChapAdminComponent"], View_ChapAdminComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/chap-admin/chap-admin.component.scss.shim.ngstyle.js":
/*!**********************************************************************!*\
  !*** ./src/app/chap-admin/chap-admin.component.scss.shim.ngstyle.js ***!
  \**********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".grid-container[_ngcontent-%COMP%] {\n  margin-left: 200px; }\n\n.toolbar-icon[_ngcontent-%COMP%] {\n  padding: 0 28px; }\n\n.add-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column; }\n\n.add-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%; }\n\n.person-card-content[_ngcontent-%COMP%] {\n  text-align: center; }"];



/***/ }),

/***/ "./src/app/chap-admin/chap-admin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/chap-admin/chap-admin.component.ts ***!
  \****************************************************/
/*! exports provided: ChapAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapAdminComponent", function() { return ChapAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ChapAdminComponent = /** @class */ (function () {
    function ChapAdminComponent() {
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
    ChapAdminComponent.prototype.ngOnInit = function () {
    };
    return ChapAdminComponent;
}());



/***/ }),

/***/ "./src/app/chap-cart-detail/chap-cart-detail.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/chap-cart-detail/chap-cart-detail.component.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: RenderType_ChapCartDetailComponent, View_ChapCartDetailComponent_0, View_ChapCartDetailComponent_Host_0, ChapCartDetailComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChapCartDetailComponent", function() { return RenderType_ChapCartDetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapCartDetailComponent_0", function() { return View_ChapCartDetailComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapCartDetailComponent_Host_0", function() { return View_ChapCartDetailComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapCartDetailComponentNgFactory", function() { return ChapCartDetailComponentNgFactory; });
/* harmony import */ var _chap_cart_detail_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chap-cart-detail.component.scss.shim.ngstyle */ "./src/app/chap-cart-detail/chap-cart-detail.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chap_cart_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chap-cart-detail.component */ "./src/app/chap-cart-detail/chap-cart-detail.component.ts");
/* harmony import */ var _model_cart_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/cart.model */ "./src/app/model/cart.model.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_ChapCartDetailComponent = [_chap_cart_detail_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChapCartDetailComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChapCartDetailComponent, data: {} });

function View_ChapCartDetailComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [["class", "text-center"], ["colspan", "4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Your cart is empty "]))], null, null); }
function View_ChapCartDetailComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "input", [["class", "form-control-sm"], ["style", "width:5em"], ["type", "number"]], [[8, "value", 0]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.cart.updateQuantity(_v.context.$implicit.product, $event.target.value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "td", [["class", "text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](7, 4), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "td", [["class", "text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](10, 4), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "td", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "button", [["class", "btn btn-sm btn-danger"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.cart.removeLine(_v.context.$implicit.product.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Remove "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.quantity; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.product.name; _ck(_v, 4, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.product.price, "UGX", true, "2.2-2")); _ck(_v, 6, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 9, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.lineTotal, "UGX", true, "2.2-2")); _ck(_v, 9, 0, currVal_3); }); }
function View_ChapCartDetailComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 45, "div", [["class", "grid-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "nav", [["aria-label", "breadcrumb"], ["class", "mt-2 mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "ol", [["class", "breadcrumb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "li", [["aria-current", "page"], ["class", "breadcrumb-item active mat-h1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Cart Detail "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 40, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "div", [["class", "col bg-dark text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "a", [["class", "navbar-brand"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["SPORTS STORE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 26, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 25, "div", [["class", "col mt-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "h2", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Your Cart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 22, "table", [["class", "table table-bordered table-striped p-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 9, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Quantity"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Product"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "th", [["class", "text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Price"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "th", [["class", "text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Subtotal"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChapCartDetailComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChapCartDetailComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 6, "tfoot", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 5, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 1, "td", [["class", "text-right"], ["colspan", "3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Total:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 2, "td", [["class", "text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](36, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](37, 4), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 7, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 6, "div", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 2, "button", [["class", "btn btn-primary m-1"], ["routerLink", "/order"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Continue Order "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 2, "button", [["class", "btn btn-secondary m-1"], ["routerLink", "/checkout"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Checkout "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.cart.lines.length == 0); _ck(_v, 28, 0, currVal_0); var currVal_1 = _co.cart.lines; _ck(_v, 30, 0, currVal_1); var currVal_3 = "/order"; _ck(_v, 42, 0, currVal_3); var currVal_5 = "/checkout"; _ck(_v, 45, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 36, 0, _ck(_v, 37, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.cart.cartPrice, "UGX", "symbol", "2.2-2")); _ck(_v, 36, 0, currVal_2); var currVal_4 = (_co.cart.lines.length == 0); _ck(_v, 44, 0, currVal_4); }); }
function View_ChapCartDetailComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-cart-detail", [], null, null, null, View_ChapCartDetailComponent_0, RenderType_ChapCartDetailComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chap_cart_detail_component__WEBPACK_IMPORTED_MODULE_4__["ChapCartDetailComponent"], [_model_cart_model__WEBPACK_IMPORTED_MODULE_5__["Cart"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChapCartDetailComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-chap-cart-detail", _chap_cart_detail_component__WEBPACK_IMPORTED_MODULE_4__["ChapCartDetailComponent"], View_ChapCartDetailComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/chap-cart-detail/chap-cart-detail.component.scss.shim.ngstyle.js":
/*!**********************************************************************************!*\
  !*** ./src/app/chap-cart-detail/chap-cart-detail.component.scss.shim.ngstyle.js ***!
  \**********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/chap-cart-detail/chap-cart-detail.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/chap-cart-detail/chap-cart-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: ChapCartDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapCartDetailComponent", function() { return ChapCartDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_cart_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/cart.model */ "./src/app/model/cart.model.ts");


var ChapCartDetailComponent = /** @class */ (function () {
    function ChapCartDetailComponent(cart) {
        this.cart = cart;
    }
    ChapCartDetailComponent.prototype.ngOnInit = function () {
    };
    return ChapCartDetailComponent;
}());



/***/ }),

/***/ "./src/app/chap-checkout/chap-checkout.component.ngfactory.js":
/*!********************************************************************!*\
  !*** ./src/app/chap-checkout/chap-checkout.component.ngfactory.js ***!
  \********************************************************************/
/*! exports provided: RenderType_ChapCheckoutComponent, View_ChapCheckoutComponent_0, View_ChapCheckoutComponent_Host_0, ChapCheckoutComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChapCheckoutComponent", function() { return RenderType_ChapCheckoutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapCheckoutComponent_0", function() { return View_ChapCheckoutComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapCheckoutComponent_Host_0", function() { return View_ChapCheckoutComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapCheckoutComponentNgFactory", function() { return ChapCheckoutComponentNgFactory; });
/* harmony import */ var _chap_checkout_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chap-checkout.component.scss.shim.ngstyle */ "./src/app/chap-checkout/chap-checkout.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chap_checkout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chap-checkout.component */ "./src/app/chap-checkout/chap-checkout.component.ts");
/* harmony import */ var _model_order_repository__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/order.repository */ "./src/app/model/order.repository.ts");
/* harmony import */ var _model_order_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/order.model */ "./src/app/model/order.model.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_ChapCheckoutComponent = [_chap_checkout_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChapCheckoutComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChapCheckoutComponent, data: {} });

function View_ChapCheckoutComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [["class", "m-2 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Thanks!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Thanks for placing your order."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["We'll ship your goods as soon as possible."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "button", [["class", "btn btn-primary"], ["routerLink", "/order"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Return to Store"]))], function (_ck, _v) { var currVal_0 = "/order"; _ck(_v, 8, 0, currVal_0); }, null); }
function View_ChapCheckoutComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Please enter your name "]))], null, null); }
function View_ChapCheckoutComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Please enter your address "]))], null, null); }
function View_ChapCheckoutComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Please enter your city "]))], null, null); }
function View_ChapCheckoutComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Please enter your state "]))], null, null); }
function View_ChapCheckoutComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Please enter your zip/postal code "]))], null, null); }
function View_ChapCheckoutComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Please enter your country "]))], null, null); }
function View_ChapCheckoutComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 88, "form", [["class", "m-2"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.submitOrder(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_bg"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4210688, [["form", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 7, "input", [["class", "form-control"], ["name", "name"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.order.name = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, [["name", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChapCheckoutComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Address"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 7, "input", [["class", "form-control"], ["name", "address"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.order.address = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 671744, [["address", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChapCheckoutComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["City"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 7, "input", [["class", "form-control"], ["name", "city"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.order.city = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 671744, [["city", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChapCheckoutComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["State"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 7, "input", [["class", "form-control"], ["name", "state"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.order.state = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 671744, [["state", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChapCheckoutComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Zip/Postal Code"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 7, "input", [["class", "form-control"], ["name", "zip"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.order.zip = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 671744, [["zip", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChapCheckoutComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Country"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 7, "input", [["class", "form-control"], ["name", "country"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.order.country = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 671744, [["country", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChapCheckoutComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](82, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 5, "div", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 2, "button", [["class", "btn btn-secondary m-1"], ["routerLink", "/order"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Back"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 1, "button", [["class", "btn btn-primary m-1"], ["type", "submit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Complete Order"]))], function (_ck, _v) { var _co = _v.component; var currVal_15 = ""; _ck(_v, 10, 0, currVal_15); var currVal_16 = "name"; var currVal_17 = _co.order.name; _ck(_v, 13, 0, currVal_16, currVal_17); var currVal_18 = (_co.submitted && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).invalid); _ck(_v, 17, 0, currVal_18); var currVal_27 = ""; _ck(_v, 23, 0, currVal_27); var currVal_28 = "address"; var currVal_29 = _co.order.address; _ck(_v, 26, 0, currVal_28, currVal_29); var currVal_30 = (_co.submitted && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).invalid); _ck(_v, 30, 0, currVal_30); var currVal_39 = ""; _ck(_v, 36, 0, currVal_39); var currVal_40 = "city"; var currVal_41 = _co.order.city; _ck(_v, 39, 0, currVal_40, currVal_41); var currVal_42 = (_co.submitted && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).invalid); _ck(_v, 43, 0, currVal_42); var currVal_51 = ""; _ck(_v, 49, 0, currVal_51); var currVal_52 = "state"; var currVal_53 = _co.order.state; _ck(_v, 52, 0, currVal_52, currVal_53); var currVal_54 = (_co.submitted && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).invalid); _ck(_v, 56, 0, currVal_54); var currVal_63 = ""; _ck(_v, 62, 0, currVal_63); var currVal_64 = "zip"; var currVal_65 = _co.order.zip; _ck(_v, 65, 0, currVal_64, currVal_65); var currVal_66 = (_co.submitted && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 65).invalid); _ck(_v, 69, 0, currVal_66); var currVal_75 = ""; _ck(_v, 75, 0, currVal_75); var currVal_76 = "country"; var currVal_77 = _co.order.country; _ck(_v, 78, 0, currVal_76, currVal_77); var currVal_78 = (_co.submitted && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).invalid); _ck(_v, 82, 0, currVal_78); var currVal_79 = "/order"; _ck(_v, 85, 0, currVal_79); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).required ? "" : null); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassUntouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassTouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPristine; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassDirty; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassValid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassInvalid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 8, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_19 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).required ? "" : null); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassUntouched; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassTouched; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassPristine; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassDirty; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassValid; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassInvalid; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassPending; _ck(_v, 21, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26); var currVal_31 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).required ? "" : null); var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassUntouched; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassTouched; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassPristine; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassDirty; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassValid; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassInvalid; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassPending; _ck(_v, 34, 0, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38); var currVal_43 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).required ? "" : null); var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassUntouched; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassTouched; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassPristine; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassDirty; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassValid; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassInvalid; var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassPending; _ck(_v, 47, 0, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50); var currVal_55 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).required ? "" : null); var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).ngClassUntouched; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).ngClassTouched; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).ngClassPristine; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).ngClassDirty; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).ngClassValid; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).ngClassInvalid; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).ngClassPending; _ck(_v, 60, 0, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62); var currVal_67 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).required ? "" : null); var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).ngClassUntouched; var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).ngClassTouched; var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).ngClassPristine; var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).ngClassDirty; var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).ngClassValid; var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).ngClassInvalid; var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).ngClassPending; _ck(_v, 73, 0, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74); }); }
function View_ChapCheckoutComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "div", [["class", "grid-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "nav", [["aria-label", "breadcrumb"], ["class", "mt-2 mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "ol", [["class", "breadcrumb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "li", [["aria-current", "page"], ["class", "breadcrumb-item active mat-h1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Checkout "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "div", [["class", "col bg-dark text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "a", [["class", "navbar-brand"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["SPORTS STORE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChapCheckoutComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChapCheckoutComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.orderSent; _ck(_v, 11, 0, currVal_0); var currVal_1 = !_co.orderSent; _ck(_v, 13, 0, currVal_1); }, null); }
function View_ChapCheckoutComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-checkout", [], null, null, null, View_ChapCheckoutComponent_0, RenderType_ChapCheckoutComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chap_checkout_component__WEBPACK_IMPORTED_MODULE_5__["ChapCheckoutComponent"], [_model_order_repository__WEBPACK_IMPORTED_MODULE_6__["OrderRepository"], _model_order_model__WEBPACK_IMPORTED_MODULE_7__["Order"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChapCheckoutComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-chap-checkout", _chap_checkout_component__WEBPACK_IMPORTED_MODULE_5__["ChapCheckoutComponent"], View_ChapCheckoutComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/chap-checkout/chap-checkout.component.scss.shim.ngstyle.js":
/*!****************************************************************************!*\
  !*** ./src/app/chap-checkout/chap-checkout.component.scss.shim.ngstyle.js ***!
  \****************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["input.ng-dirty.ng-invalid[_ngcontent-%COMP%] {\n  border: 2px solid #F73233; }\n\ninput.ng-dirty.ng-valid[_ngcontent-%COMP%] {\n  border: 2px solid #21CE99; }"];



/***/ }),

/***/ "./src/app/chap-checkout/chap-checkout.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/chap-checkout/chap-checkout.component.ts ***!
  \**********************************************************/
/*! exports provided: ChapCheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapCheckoutComponent", function() { return ChapCheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_order_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/order.repository */ "./src/app/model/order.repository.ts");
/* harmony import */ var _model_order_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/order.model */ "./src/app/model/order.model.ts");



var ChapCheckoutComponent = /** @class */ (function () {
    function ChapCheckoutComponent(repository, order) {
        this.repository = repository;
        this.order = order;
        this.orderSent = false;
        this.submitted = false;
    }
    ChapCheckoutComponent.prototype.ngOnInit = function () {
    };
    ChapCheckoutComponent.prototype.submitOrder = function (form) {
        var _this = this;
        this.submitted = true;
        this.submitted = true;
        if (form.valid) {
            this.repository.saveOrder(this.order).subscribe(function (order) {
                _this.order.clear();
                _this.orderSent = true;
                _this.submitted = false;
            });
        }
    };
    return ChapCheckoutComponent;
}());



/***/ }),

/***/ "./src/app/chap-contact/chap-contact.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/chap-contact/chap-contact.component.ngfactory.js ***!
  \******************************************************************/
/*! exports provided: RenderType_ChapContactComponent, View_ChapContactComponent_0, View_ChapContactComponent_Host_0, ChapContactComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChapContactComponent", function() { return RenderType_ChapContactComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapContactComponent_0", function() { return View_ChapContactComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapContactComponent_Host_0", function() { return View_ChapContactComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapContactComponentNgFactory", function() { return ChapContactComponentNgFactory; });
/* harmony import */ var _chap_contact_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chap-contact.component.scss.shim.ngstyle */ "./src/app/chap-contact/chap-contact.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/material/card/typings/index.ngfactory */ "./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chap_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chap-contact.component */ "./src/app/chap-contact/chap-contact.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_ChapContactComponent = [_chap_contact_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChapContactComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChapContactComponent, data: {} });

function View_ChapContactComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "mat-card", [["class", " my-2 mx-2 py-4 px-4 mat-card"], ["style", "width: 36rem;"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 8, "div", [["class", "row card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "col-md-2 text-center pl-4 pt-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "mat-icon", [["class", "mat-icon mat-list-icon"], ["mat-list-icon", ""], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListIconCssMatStyler"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, 0, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "div", [["class", "col-md-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "h5", [["class", "mt-0 chap-red font-weight-bold card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "]))], function (_ck, _v) { _ck(_v, 5, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).inline; _ck(_v, 4, 0, currVal_0); var currVal_1 = _v.context.$implicit.icon; _ck(_v, 7, 0, currVal_1); var currVal_2 = _v.context.$implicit.title; _ck(_v, 10, 0, currVal_2); }); }
function View_ChapContactComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChapContactComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ChapAddress; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ChapContactComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-contact", [], null, null, null, View_ChapContactComponent_0, RenderType_ChapContactComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chap_contact_component__WEBPACK_IMPORTED_MODULE_8__["ChapContactComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChapContactComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-chap-contact", _chap_contact_component__WEBPACK_IMPORTED_MODULE_8__["ChapContactComponent"], View_ChapContactComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/chap-contact/chap-contact.component.scss.shim.ngstyle.js":
/*!**************************************************************************!*\
  !*** ./src/app/chap-contact/chap-contact.component.scss.shim.ngstyle.js ***!
  \**************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/chap-contact/chap-contact.component.ts":
/*!********************************************************!*\
  !*** ./src/app/chap-contact/chap-contact.component.ts ***!
  \********************************************************/
/*! exports provided: ChapContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapContactComponent", function() { return ChapContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ChapContactComponent = /** @class */ (function () {
    function ChapContactComponent() {
        this.ChapAddress = [
            {
                title: 'Plot 1234, Block 185, Namugongo',
                icon: 'place'
            },
            {
                title: '+256 392 002 221',
                icon: 'stay_current_portrait'
            },
            {
                title: '+256 706 741 388',
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
    ChapContactComponent.prototype.ngOnInit = function () {
    };
    return ChapContactComponent;
}());



/***/ }),

/***/ "./src/app/chap-dashboard/chap-dashboard.component.ngfactory.js":
/*!**********************************************************************!*\
  !*** ./src/app/chap-dashboard/chap-dashboard.component.ngfactory.js ***!
  \**********************************************************************/
/*! exports provided: RenderType_ChapDashboardComponent, View_ChapDashboardComponent_0, View_ChapDashboardComponent_Host_0, ChapDashboardComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChapDashboardComponent", function() { return RenderType_ChapDashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapDashboardComponent_0", function() { return View_ChapDashboardComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapDashboardComponent_Host_0", function() { return View_ChapDashboardComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapDashboardComponentNgFactory", function() { return ChapDashboardComponentNgFactory; });
/* harmony import */ var _chap_dashboard_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chap-dashboard.component.scss.shim.ngstyle */ "./src/app/chap-dashboard/chap-dashboard.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/material/grid-list/typings/index.ngfactory */ "./node_modules/@angular/material/grid-list/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@angular/material/card/typings/index.ngfactory */ "./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../node_modules/@angular/material/menu/typings/index.ngfactory */ "./node_modules/@angular/material/menu/typings/index.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../chap-nav/chap-nav.component.ngfactory */ "./src/app/chap-nav/chap-nav.component.ngfactory.js");
/* harmony import */ var _chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../chap-nav/chap-nav.component */ "./src/app/chap-nav/chap-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _chap_productsales_chap_productsales_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../chap-productsales/chap-productsales.component.ngfactory */ "./src/app/chap-productsales/chap-productsales.component.ngfactory.js");
/* harmony import */ var _chap_productsales_chap_productsales_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../chap-productsales/chap-productsales.component */ "./src/app/chap-productsales/chap-productsales.component.ts");
/* harmony import */ var _chap_salesgrowth_chap_salesgrowth_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../chap-salesgrowth/chap-salesgrowth.component.ngfactory */ "./src/app/chap-salesgrowth/chap-salesgrowth.component.ngfactory.js");
/* harmony import */ var _chap_salesgrowth_chap_salesgrowth_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../chap-salesgrowth/chap-salesgrowth.component */ "./src/app/chap-salesgrowth/chap-salesgrowth.component.ts");
/* harmony import */ var _chap_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./chap-dashboard.component */ "./src/app/chap-dashboard/chap-dashboard.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


























var styles_ChapDashboardComponent = [_chap_dashboard_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChapDashboardComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChapDashboardComponent, data: {} });

function View_ChapDashboardComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 50, "mat-grid-tile", [["class", "mat-grid-tile"]], null, null, null, _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatGridTile_0"], _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatGridTile"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, [[1, 4]], 0, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { rowspan: [0, "rowspan"], colspan: [1, "colspan"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 48, "mat-card", [["class", "dashboard-card mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 32, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatCardHeader_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 1, 30, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, 0, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "span", [["class", "font-weight-bold pt-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 16777216, null, null, 6, "button", [["aria-haspopup", "true"], ["aria-label", "Toggle menu"], ["class", "more-button"], ["mat-icon-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-expanded", 0]], [[null, "mousedown"], [null, "keydown"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._handleMousedown($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._handleClick($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 1196032, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuTrigger"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MAT_MENU_SCROLL_STRATEGY"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenu"]], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["Directionality"]], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusMonitor"]], { menu: [0, "menu"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 3, "span", [["class", "font-weight-normal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["more_vert"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 16, "mat-menu", [["xPosition", "before"]], null, null, null, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatMenu_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 1294336, [["menu", 4]], 2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MAT_MENU_DEFAULT_OPTIONS"]], { xPosition: [0, "xPosition"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { items: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { lazyContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["ɵf23"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenu"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 0, 5, "button", [["class", "mat-menu-item"], ["mat-menu-item", ""], ["role", "menuitem"]], [[2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 180224, [[2, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["ɵf23"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["launch"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Expand "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, 0, 5, "button", [["class", "mat-menu-item"], ["mat-menu-item", ""], ["role", "menuitem"]], [[2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 180224, [[2, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["ɵf23"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["delete_outline"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Remove "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, 0, 7, "mat-card-content", [["class", "dashboard-card-content mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 5, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 1, "span", [["class", "display-4 font-weight-bold chap-red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](41, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 1, "small", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](44, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, 1, 5, "mat-card-footer", [["class", "text-center mat-card-footer"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardFooter"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], [8, null]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](49, 0, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](50, null, [" ", " "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.rows; var currVal_1 = _v.context.$implicit.cols; _ck(_v, 1, 0, currVal_0, currVal_1); _ck(_v, 9, 0); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21); _ck(_v, 15, 0, currVal_8); _ck(_v, 18, 0); var currVal_10 = "before"; _ck(_v, 21, 0, currVal_10); _ck(_v, 28, 0); _ck(_v, 34, 0); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.trend_color, ""); _ck(_v, 48, 0, currVal_26); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).inline; _ck(_v, 8, 0, currVal_2); var currVal_3 = _v.context.$implicit.card_icon; _ck(_v, 10, 0, currVal_3); var currVal_4 = _v.context.$implicit.title; _ck(_v, 12, 0, currVal_4); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).disabled || null); var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._animationMode === "NoopAnimations"); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).menuOpen || null); _ck(_v, 13, 0, currVal_5, currVal_6, currVal_7); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).inline; _ck(_v, 17, 0, currVal_9); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._highlighted; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._triggersSubmenu; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._getTabIndex(); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).disabled.toString(); var currVal_15 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).disabled || null); _ck(_v, 25, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).inline; _ck(_v, 27, 0, currVal_16); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._highlighted; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._triggersSubmenu; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._getTabIndex(); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).disabled.toString(); var currVal_21 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).disabled || null); _ck(_v, 31, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).inline; _ck(_v, 33, 0, currVal_22); var currVal_23 = _v.context.$implicit.cvalue; _ck(_v, 41, 0, currVal_23); var currVal_24 = _v.context.$implicit.cunit; _ck(_v, 44, 0, currVal_24); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).inline; _ck(_v, 47, 0, currVal_25); var currVal_27 = _v.context.$implicit.trend_icon; _ck(_v, 49, 0, currVal_27); var currVal_28 = _v.context.$implicit.trend; _ck(_v, 50, 0, currVal_28); }); }
function View_ChapDashboardComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-nav", [], null, null, null, _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_ChapNavComponent_0"], _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_ChapNavComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_19__["ChapNavComponent"], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__["BreakpointObserver"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 20, "mat-card", [["class", "grid-container mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 3, "nav", [["aria-label", "breadcrumb"], ["class", "mt-2 mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "ol", [["class", "breadcrumb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "li", [["aria-current", "page"], ["class", "breadcrumb-item active mat-h1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Dashboard"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 5, "mat-grid-list", [["class", "mat-grid-list"], ["cols", "2"], ["rowHeight", "240px"]], null, null, null, _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatGridList_0"], _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatGridList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 2211840, null, 1, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["Directionality"]]], { cols: [0, "cols"], rowHeight: [1, "rowHeight"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _tiles: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_ChapDashboardComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_17__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 3, "mat-card", [["class", "mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 1, "app-chap-productsales", [], null, null, null, _chap_productsales_chap_productsales_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_ChapProductsalesComponent_0"], _chap_productsales_chap_productsales_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_ChapProductsalesComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 114688, null, 0, _chap_productsales_chap_productsales_component__WEBPACK_IMPORTED_MODULE_22__["ChapProductsalesComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 0, 3, "mat-card", [["class", "mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 0, 1, "app-chap-salesgrowth", [], null, null, null, _chap_salesgrowth_chap_salesgrowth_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["View_ChapSalesgrowthComponent_0"], _chap_salesgrowth_chap_salesgrowth_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["RenderType_ChapSalesgrowthComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 114688, null, 0, _chap_salesgrowth_chap_salesgrowth_component__WEBPACK_IMPORTED_MODULE_24__["ChapSalesgrowthComponent"], [], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "2"; var currVal_1 = "240px"; _ck(_v, 9, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).transform(_co.cards)); _ck(_v, 12, 0, currVal_2); _ck(_v, 17, 0); _ck(_v, 22, 0); }, null); }
function View_ChapDashboardComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-dashboard", [], null, null, null, View_ChapDashboardComponent_0, RenderType_ChapDashboardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _chap_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["ChapDashboardComponent"], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__["BreakpointObserver"]], null, null)], null, null); }
var ChapDashboardComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-chap-dashboard", _chap_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["ChapDashboardComponent"], View_ChapDashboardComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/chap-dashboard/chap-dashboard.component.scss.shim.ngstyle.js":
/*!******************************************************************************!*\
  !*** ./src/app/chap-dashboard/chap-dashboard.component.scss.shim.ngstyle.js ***!
  \******************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".grid-container[_ngcontent-%COMP%] {\n  margin-left: 200px; }\n\n.dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px; }\n\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\n.dashboard-card-content[_ngcontent-%COMP%] {\n  text-align: center; }"];



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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");


var ChapDashboardComponent = /** @class */ (function () {
    function ChapDashboardComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                return [
                    {
                        title: 'Total Revenue', cols: 1, rows: 1, card_icon: 'business_center', cvalue: '335BN', cunit: 'UGX',
                        trend_icon: 'trending_up', trend: '80.0%', trend_color: 'primary'
                    },
                    {
                        title: 'Total Merchants', cols: 1, rows: 1, card_icon: 'group', cvalue: '2K', cunit: 'PEOPLE',
                        trend_icon: 'trending_down', trend: '13.4%', trend_color: 'warn'
                    },
                    {
                        title: 'Total Sales', cols: 1, rows: 1, card_icon: 'attach_money', cvalue: '586BN', cunit: 'UGX',
                        trend_icon: 'trending_down', trend: '26.4%', trend_color: 'warn'
                    },
                    {
                        title: 'AOV (Average Order Value)', cols: 1, rows: 1, card_icon: 'local_atm', cvalue: '15MN', cunit: 'UGX',
                        trend_icon: 'trending_up', trend: '86.5%', trend_color: 'accent'
                    }
                ];
            }
            return [
                {
                    title: 'Total Revenue', cols: 1, rows: 1, card_icon: 'monetization_on', cvalue: '335BN', cunit: 'UGX',
                    trend_icon: 'trending_up', trend: '80.5%', trend_color: 'primary'
                },
                {
                    title: 'Total Merchants', cols: 1, rows: 1, card_icon: 'group', cvalue: '2K', cunit: 'PEOPLE',
                    trend_icon: 'trending_down', trend: '13.4%', trend_color: 'warn'
                },
                {
                    title: 'Total Sales', cols: 1, rows: 1, card_icon: 'attach_money', cvalue: '586BN', cunit: 'UGX',
                    trend_icon: 'trending_down', trend: '26.4%', trend_color: 'warn'
                },
                {
                    title: 'Average Order Value', cols: 1, rows: 1, card_icon: 'local_atm', cvalue: '15MN', cunit: 'UGX',
                    trend_icon: 'trending_up', trend: '86.5%', trend_color: 'accent'
                }
            ];
        }));
    }
    return ChapDashboardComponent;
}());



/***/ }),

/***/ "./src/app/chap-edit-product/chap-edit-product.component.ngfactory.js":
/*!****************************************************************************!*\
  !*** ./src/app/chap-edit-product/chap-edit-product.component.ngfactory.js ***!
  \****************************************************************************/
/*! exports provided: RenderType_ChapEditProductComponent, View_ChapEditProductComponent_0, View_ChapEditProductComponent_Host_0, ChapEditProductComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChapEditProductComponent", function() { return RenderType_ChapEditProductComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapEditProductComponent_0", function() { return View_ChapEditProductComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapEditProductComponent_Host_0", function() { return View_ChapEditProductComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapEditProductComponentNgFactory", function() { return ChapEditProductComponentNgFactory; });
/* harmony import */ var _chap_edit_product_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chap-edit-product.component.scss.shim.ngstyle */ "./src/app/chap-edit-product/chap-edit-product.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chap_edit_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chap-edit-product.component */ "./src/app/chap-edit-product/chap-edit-product.component.ts");
/* harmony import */ var _model_product_repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/product.repository */ "./src/app/model/product.repository.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_ChapEditProductComponent = [_chap_edit_product_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChapEditProductComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChapEditProductComponent, data: {} });

function View_ChapEditProductComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "bg-primary p-2 text-white"]], [[2, "bg-warning", null], [2, "text-dark", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", " Product"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 46, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.save(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_bg"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4210688, [["form", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 5, "input", [["class", "form-control"], ["name", "name"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.product.name = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Category"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 5, "input", [["class", "form-control"], ["name", "category"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.product.category = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 9, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Description"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 6, "textarea", [["class", "form-control"], ["name", "description"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.product.description = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["  \n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Price"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 5, "input", [["class", "form-control"], ["name", "price"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.product.price = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "submit"]], [[2, "btn-warning", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](46, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 2, "button", [["class", "btn btn-secondary"], ["routerLink", "/admin/main/products"], ["type", "reset"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Cancel "]))], function (_ck, _v) { var _co = _v.component; var currVal_17 = "name"; var currVal_18 = _co.product.name; _ck(_v, 14, 0, currVal_17, currVal_18); var currVal_26 = "category"; var currVal_27 = _co.product.category; _ck(_v, 23, 0, currVal_26, currVal_27); var currVal_35 = "description"; var currVal_36 = _co.product.description; _ck(_v, 32, 0, currVal_35, currVal_36); var currVal_44 = "price"; var currVal_45 = _co.product.price; _ck(_v, 42, 0, currVal_44, currVal_45); var currVal_48 = "/admin/main/products"; _ck(_v, 48, 0, currVal_48); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.editing; var currVal_1 = _co.editing; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = (_co.editing ? "Edit" : "Create"); _ck(_v, 2, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPending; _ck(_v, 3, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassUntouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassTouched; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPristine; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassDirty; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassValid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassInvalid; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPending; _ck(_v, 11, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassUntouched; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassTouched; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassPristine; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassDirty; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassValid; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassInvalid; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassPending; _ck(_v, 20, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassUntouched; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassTouched; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassPristine; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassDirty; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassValid; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassInvalid; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassPending; _ck(_v, 29, 0, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34); var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassUntouched; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassTouched; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassPristine; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassDirty; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassValid; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassInvalid; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassPending; _ck(_v, 39, 0, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43); var currVal_46 = _co.editing; _ck(_v, 45, 0, currVal_46); var currVal_47 = (_co.editing ? "Save" : "Create"); _ck(_v, 46, 0, currVal_47); }); }
function View_ChapEditProductComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-edit-product", [], null, null, null, View_ChapEditProductComponent_0, RenderType_ChapEditProductComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chap_edit_product_component__WEBPACK_IMPORTED_MODULE_4__["ChapEditProductComponent"], [_model_product_repository__WEBPACK_IMPORTED_MODULE_5__["ProductRepository"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChapEditProductComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-chap-edit-product", _chap_edit_product_component__WEBPACK_IMPORTED_MODULE_4__["ChapEditProductComponent"], View_ChapEditProductComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/chap-edit-product/chap-edit-product.component.scss.shim.ngstyle.js":
/*!************************************************************************************!*\
  !*** ./src/app/chap-edit-product/chap-edit-product.component.scss.shim.ngstyle.js ***!
  \************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/chap-edit-product/chap-edit-product.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/chap-edit-product/chap-edit-product.component.ts ***!
  \******************************************************************/
/*! exports provided: ChapEditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapEditProductComponent", function() { return ChapEditProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_product_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/product.model */ "./src/app/model/product.model.ts");
/* harmony import */ var _model_product_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/product.repository */ "./src/app/model/product.repository.ts");




var ChapEditProductComponent = /** @class */ (function () {
    function ChapEditProductComponent(repository, router, activeRoute) {
        this.repository = repository;
        this.router = router;
        this.editing = false;
        this.product = new _model_product_model__WEBPACK_IMPORTED_MODULE_2__["Product"]();
        this.editing = activeRoute.snapshot.params['mode'] === 'edit';
        if (this.editing) {
            Object.assign(this.product, repository.getProduct(activeRoute.snapshot.params['id']));
        }
    }
    /*
    save(form: NgForm) {
      this.repository.saveProduct(this.product);
      this.router.navigateByUrl('/products');
    }
    */
    ChapEditProductComponent.prototype.save = function (form) {
    };
    ChapEditProductComponent.prototype.ngOnInit = function () {
    };
    return ChapEditProductComponent;
}());



/***/ }),

/***/ "./src/app/chap-help/chap-help.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/chap-help/chap-help.component.ngfactory.js ***!
  \************************************************************/
/*! exports provided: RenderType_ChapHelpComponent, View_ChapHelpComponent_0, View_ChapHelpComponent_Host_0, ChapHelpComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChapHelpComponent", function() { return RenderType_ChapHelpComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapHelpComponent_0", function() { return View_ChapHelpComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapHelpComponent_Host_0", function() { return View_ChapHelpComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapHelpComponentNgFactory", function() { return ChapHelpComponentNgFactory; });
/* harmony import */ var _chap_help_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chap-help.component.scss.shim.ngstyle */ "./src/app/chap-help/chap-help.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chap-nav/chap-nav.component.ngfactory */ "./src/app/chap-nav/chap-nav.component.ngfactory.js");
/* harmony import */ var _chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chap-nav/chap-nav.component */ "./src/app/chap-nav/chap-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/@angular/material/card/typings/index.ngfactory */ "./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../node_modules/@angular/material/tabs/typings/index.ngfactory */ "./node_modules/@angular/material/tabs/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _chap_contact_chap_contact_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../chap-contact/chap-contact.component.ngfactory */ "./src/app/chap-contact/chap-contact.component.ngfactory.js");
/* harmony import */ var _chap_contact_chap_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../chap-contact/chap-contact.component */ "./src/app/chap-contact/chap-contact.component.ts");
/* harmony import */ var _chap_help_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chap-help.component */ "./src/app/chap-help/chap-help.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_ChapHelpComponent = [_chap_help_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChapHelpComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChapHelpComponent, data: {} });

function View_ChapHelpComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-icon", [["class", "mr-2 mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["help_outline"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["class", "toolbar-icon"], ["color", "primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" HELP "]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).inline; _ck(_v, 0, 0, currVal_0); }); }
function View_ChapHelpComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-icon", [["class", "toolbar-icon mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["chat_bubble_outline"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["class", "toolbar-icon"], ["color", "primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" CONTACT US "]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).inline; _ck(_v, 0, 0, currVal_0); }); }
function View_ChapHelpComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-nav", [], null, null, null, _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ChapNavComponent_0"], _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ChapNavComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_5__["ChapNavComponent"], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["BreakpointObserver"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 26, "mat-card", [["class", "grid-container mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 3, "nav", [["aria-label", "breadcrumb"], ["class", "mt-2 mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "ol", [["class", "breadcrumb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "li", [["aria-current", "page"], ["class", "breadcrumb-item active mat-h1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Help "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 20, "mat-tab-group", [["class", "mat-tab-group"], ["mat-stretch-tabs", "always"]], [[2, "mat-tab-group-dynamic-height", null], [2, "mat-tab-group-inverted-header", null]], null, null, _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatTabGroup_0"], _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatTabGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 3325952, null, 1, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabGroup"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _tabs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 16777216, null, null, 9, "mat-tab", [], null, null, null, _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatTab_0"], _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 770048, [[1, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { templateLabel: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { _explicitContent: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ChapHelpComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, [[2, 4]], 0, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 0, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Customer care Chat content goes here"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 0, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["..."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 16777216, null, null, 7, "mat-tab", [], null, null, null, _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatTab_0"], _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 770048, [[1, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, { templateLabel: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 5, { _explicitContent: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ChapHelpComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, [[4, 4]], 0, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 0, 1, "app-chap-contact", [], null, null, null, _chap_contact_chap_contact_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_ChapContactComponent_0"], _chap_contact_chap_contact_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_ChapContactComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 114688, null, 0, _chap_contact_chap_contact_component__WEBPACK_IMPORTED_MODULE_12__["ChapContactComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 12, 0); _ck(_v, 22, 0); _ck(_v, 28, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).dynamicHeight; var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).headerPosition === "below"); _ck(_v, 8, 0, currVal_0, currVal_1); }); }
function View_ChapHelpComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-help", [], null, null, null, View_ChapHelpComponent_0, RenderType_ChapHelpComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chap_help_component__WEBPACK_IMPORTED_MODULE_13__["ChapHelpComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChapHelpComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-chap-help", _chap_help_component__WEBPACK_IMPORTED_MODULE_13__["ChapHelpComponent"], View_ChapHelpComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/chap-help/chap-help.component.scss.shim.ngstyle.js":
/*!********************************************************************!*\
  !*** ./src/app/chap-help/chap-help.component.scss.shim.ngstyle.js ***!
  \********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".grid-container[_ngcontent-%COMP%] {\n  margin-left: 200px; }\n\n.toolbar-icon[_ngcontent-%COMP%] {\n  padding: 0 35px; }"];



/***/ }),

/***/ "./src/app/chap-help/chap-help.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chap-help/chap-help.component.ts ***!
  \**************************************************/
/*! exports provided: ChapHelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapHelpComponent", function() { return ChapHelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ChapHelpComponent = /** @class */ (function () {
    function ChapHelpComponent() {
    }
    ChapHelpComponent.prototype.ngOnInit = function () {
    };
    return ChapHelpComponent;
}());



/***/ }),

/***/ "./src/app/chap-inventory/chap-inventory.component.ngfactory.js":
/*!**********************************************************************!*\
  !*** ./src/app/chap-inventory/chap-inventory.component.ngfactory.js ***!
  \**********************************************************************/
/*! exports provided: RenderType_ChapInventoryComponent, View_ChapInventoryComponent_0, View_ChapInventoryComponent_Host_0, ChapInventoryComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChapInventoryComponent", function() { return RenderType_ChapInventoryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapInventoryComponent_0", function() { return View_ChapInventoryComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapInventoryComponent_Host_0", function() { return View_ChapInventoryComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapInventoryComponentNgFactory", function() { return ChapInventoryComponentNgFactory; });
/* harmony import */ var _chap_inventory_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chap-inventory.component.scss.shim.ngstyle */ "./src/app/chap-inventory/chap-inventory.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/material/card/typings/index.ngfactory */ "./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chap-nav/chap-nav.component.ngfactory */ "./src/app/chap-nav/chap-nav.component.ngfactory.js");
/* harmony import */ var _chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chap-nav/chap-nav.component */ "./src/app/chap-nav/chap-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _chap_inventory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chap-inventory.component */ "./src/app/chap-inventory/chap-inventory.component.ts");
/* harmony import */ var _model_product_repository__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/product.repository */ "./src/app/model/product.repository.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_ChapInventoryComponent = [_chap_inventory_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChapInventoryComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChapInventoryComponent, data: {} });

function View_ChapInventoryComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-outline-danger btn-block"]], [[2, "active", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.changeCategory(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.$implicit == _co.selectedCategory); _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 1, 0, currVal_1); }); }
function View_ChapInventoryComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "mat-card", [["class", " m-1 p-1  mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 4, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "span", [["class", "badge badge-pill badge-danger float-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 4), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 7, "div", [["class", "card-text  p-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 6, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "col-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "div", [["class", "col-3 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Stock : "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "span", [["class", "badge badge-pill badge-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, [" ", " Units "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.price, "UGX", "symbol", "2.2-2")); _ck(_v, 5, 0, currVal_1); var currVal_2 = _v.context.$implicit.description; _ck(_v, 10, 0, currVal_2); var currVal_3 = _v.context.$implicit.units; _ck(_v, 14, 0, currVal_3); }); }
function View_ChapInventoryComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-chap-nav", [], null, null, null, _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ChapNavComponent_0"], _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ChapNavComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_6__["ChapNavComponent"], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["BreakpointObserver"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 21, "mat-card", [["class", "grid-container mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 3, "nav", [["aria-label", "breadcrumb"], ["class", "mt-2 mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "ol", [["class", "breadcrumb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "li", [["aria-current", "page"], ["class", "breadcrumb-item active mat-h1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Inventory "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 15, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "div", [["class", "col bg-dark text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "a", [["class", "navbar-brand"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["YOUR STORE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 10, "div", [["class", "row "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 5, "div", [["class", "col-3 p-2 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, [" Total: ", " Categories "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "button", [["class", "btn btn-block btn-outline-danger"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.changeCategory() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" All "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChapInventoryComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 3, "div", [["class", "col-9 p-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, [" Total: ", " Products "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChapInventoryComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.categories; _ck(_v, 20, 0, currVal_1); var currVal_3 = _co.products; _ck(_v, 24, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.categories.length; _ck(_v, 16, 0, currVal_0); var currVal_2 = _co.products.length; _ck(_v, 22, 0, currVal_2); }); }
function View_ChapInventoryComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-inventory", [], null, null, null, View_ChapInventoryComponent_0, RenderType_ChapInventoryComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chap_inventory_component__WEBPACK_IMPORTED_MODULE_8__["ChapInventoryComponent"], [_model_product_repository__WEBPACK_IMPORTED_MODULE_9__["ProductRepository"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChapInventoryComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-chap-inventory", _chap_inventory_component__WEBPACK_IMPORTED_MODULE_8__["ChapInventoryComponent"], View_ChapInventoryComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/chap-inventory/chap-inventory.component.scss.shim.ngstyle.js":
/*!******************************************************************************!*\
  !*** ./src/app/chap-inventory/chap-inventory.component.scss.shim.ngstyle.js ***!
  \******************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".grid-container[_ngcontent-%COMP%] {\n  margin-left: 200px; }"];



/***/ }),

/***/ "./src/app/chap-inventory/chap-inventory.component.ts":
/*!************************************************************!*\
  !*** ./src/app/chap-inventory/chap-inventory.component.ts ***!
  \************************************************************/
/*! exports provided: ChapInventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapInventoryComponent", function() { return ChapInventoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_product_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/product.repository */ "./src/app/model/product.repository.ts");


var ChapInventoryComponent = /** @class */ (function () {
    function ChapInventoryComponent(repository) {
        this.repository = repository;
        this.selectedCategory = null;
    }
    Object.defineProperty(ChapInventoryComponent.prototype, "products", {
        get: function () {
            return this.repository.getProducts(this.selectedCategory);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChapInventoryComponent.prototype, "categories", {
        get: function () {
            return this.repository.getCategories();
        },
        enumerable: true,
        configurable: true
    });
    ChapInventoryComponent.prototype.changeCategory = function (newCategory) {
        this.selectedCategory = newCategory;
    };
    ChapInventoryComponent.prototype.ngOnInit = function () {
    };
    return ChapInventoryComponent;
}());



/***/ }),

/***/ "./src/app/chap-login/chap-login.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/chap-login/chap-login.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_ChapLoginComponent, View_ChapLoginComponent_0, View_ChapLoginComponent_Host_0, ChapLoginComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChapLoginComponent", function() { return RenderType_ChapLoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapLoginComponent_0", function() { return View_ChapLoginComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapLoginComponent_Host_0", function() { return View_ChapLoginComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapLoginComponentNgFactory", function() { return ChapLoginComponentNgFactory; });
/* harmony import */ var _chap_login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chap-login.component.scss.shim.ngstyle */ "./src/app/chap-login/chap-login.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/material/form-field/typings/index.ngfactory */ "./node_modules/@angular/material/form-field/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _node_modules_angular_material_checkbox_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../node_modules/@angular/material/checkbox/typings/index.ngfactory */ "./node_modules/@angular/material/checkbox/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _chap_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./chap-login.component */ "./src/app/chap-login/chap-login.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





















var styles_ChapLoginComponent = [_chap_login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChapLoginComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChapLoginComponent, data: {} });

function View_ChapLoginComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 56, "div", [["class", "login-box text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 55, "form", [["class", "form-signin pt-4"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_bg"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "img", [["alt", ""], ["class", "mb-4"], ["height", "80"], ["src", "../../assets/img/chapchaplogo.png"], ["width", "80"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h1", [["class", "h3 mb-3 font-weight-normal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Please sign in"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 18, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 7389184, null, 7, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 1, { _control: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { _labelChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 1, 2, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["placeholder", "Phone number"], ["required", ""]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "blur"], [null, "focus"], [null, "input"]], function (_v, en, $event) { var ad = true; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._focusChanged(false) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._focusChanged(true) !== false);
        ad = (pd_1 && ad);
    } if (("input" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._onInput() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_10__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"], required: [1, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 4, 3, "mat-icon", [["class", "mat-icon"], ["matSuffix", ""], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconRegistry"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, [[7, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["phone"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 6, 2, "mat-hint", [["class", "mat-hint"]], [[2, "mat-right", null], [1, "id", 0], [1, "align", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, [[5, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatHint"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Include area code "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 15, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 7389184, null, 7, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 8, { _control: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 9, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 10, { _labelChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, 1, 2, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["placeholder", "Enter password"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "blur"], [null, "focus"], [null, "input"]], function (_v, en, $event) { var ad = true; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._focusChanged(false) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._focusChanged(true) !== false);
        ad = (pd_1 && ad);
    } if (("input" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._onInput() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_10__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"], type: [1, "type"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[8, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, 4, 3, "mat-icon", [["class", "mat-icon"], ["matSuffix", ""], ["role", "img"]], [[2, "mat-icon-inline", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.hide = !_co.hide) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconRegistry"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 16384, [[14, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](43, 0, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 4, "section", [["class", " mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 3, "mat-checkbox", [["class", "mat-checkbox"]], [[8, "id", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_checkbox_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatCheckbox_0"], _node_modules_angular_material_checkbox_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatCheckbox"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckbox"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 4374528, null, 0, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [8, null], [2, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MAT_CHECKBOX_CLICK_ACTION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Remember me "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 5, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](51, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 2, "button", [["class", "btn btn-lg btn-primary btn-block"], ["mat-raised-button", ""], ["type", "submit"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Sign in"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 1, "p", [["class", "mt-5 mb-3 text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A9 2019 "]))], function (_ck, _v) { var _co = _v.component; var currVal_37 = "Phone number"; var currVal_38 = ""; _ck(_v, 19, 0, currVal_37, currVal_38); _ck(_v, 22, 0); var currVal_73 = "Enter password"; var currVal_74 = (_co.hide ? "password" : "text"); _ck(_v, 38, 0, currVal_73, currVal_74); _ck(_v, 41, 0); var currVal_85 = _ck(_v, 51, 0, "/dashboard"); _ck(_v, 50, 0, currVal_85); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).appearance == "standard"); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).appearance == "fill"); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).appearance == "outline"); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).appearance == "legacy"); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._control.errorState; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._canLabelFloat; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._shouldLabelFloat(); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._hideControlPlaceholder(); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._control.disabled; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._control.autofilled; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._control.focused; var currVal_18 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).color == "accent"); var currVal_19 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).color == "warn"); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._shouldForward("untouched"); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._shouldForward("touched"); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._shouldForward("pristine"); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._shouldForward("dirty"); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._shouldForward("valid"); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._shouldForward("invalid"); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._shouldForward("pending"); var currVal_27 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._animationsEnabled; _ck(_v, 9, 1, [currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27]); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._isServer; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).id; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).placeholder; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).disabled; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).required; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).readonly; var currVal_34 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._ariaDescribedby || null); var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).errorState; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).required.toString(); _ck(_v, 18, 0, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36); var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).inline; _ck(_v, 21, 0, currVal_39); var currVal_40 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).align == "end"); var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).id; var currVal_42 = null; _ck(_v, 25, 0, currVal_40, currVal_41, currVal_42); var currVal_43 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).appearance == "standard"); var currVal_44 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).appearance == "fill"); var currVal_45 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).appearance == "outline"); var currVal_46 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).appearance == "legacy"); var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._control.errorState; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._canLabelFloat; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._shouldLabelFloat(); var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._hideControlPlaceholder(); var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._control.disabled; var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._control.autofilled; var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._control.focused; var currVal_54 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).color == "accent"); var currVal_55 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).color == "warn"); var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._shouldForward("untouched"); var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._shouldForward("touched"); var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._shouldForward("pristine"); var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._shouldForward("dirty"); var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._shouldForward("valid"); var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._shouldForward("invalid"); var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._shouldForward("pending"); var currVal_63 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._animationsEnabled; _ck(_v, 28, 1, [currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63]); var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._isServer; var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).id; var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).placeholder; var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).disabled; var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).required; var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).readonly; var currVal_70 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._ariaDescribedby || null); var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).errorState; var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).required.toString(); _ck(_v, 37, 0, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72); var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).inline; _ck(_v, 40, 0, currVal_75); var currVal_76 = (_co.hide ? "visibility" : "visibility_off"); _ck(_v, 43, 0, currVal_76); var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).id; var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).indeterminate; var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).checked; var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).disabled; var currVal_81 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).labelPosition == "before"); var currVal_82 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._animationMode === "NoopAnimations"); _ck(_v, 45, 0, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82); var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).target; var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).href; _ck(_v, 49, 0, currVal_83, currVal_84); var currVal_86 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).disabled || null); var currVal_87 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53)._animationMode === "NoopAnimations"); _ck(_v, 52, 0, currVal_86, currVal_87); }); }
function View_ChapLoginComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-login", [], null, null, null, View_ChapLoginComponent_0, RenderType_ChapLoginComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chap_login_component__WEBPACK_IMPORTED_MODULE_20__["ChapLoginComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChapLoginComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-chap-login", _chap_login_component__WEBPACK_IMPORTED_MODULE_20__["ChapLoginComponent"], View_ChapLoginComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/chap-login/chap-login.component.scss.shim.ngstyle.js":
/*!**********************************************************************!*\
  !*** ./src/app/chap-login/chap-login.component.scss.shim.ngstyle.js ***!
  \**********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".login-box[_ngcontent-%COMP%] {\n  height: 600px;\n  background-color: #f5f5f5; }\n\n.form-signin[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto; }\n\n.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  font-weight: 400; }\n\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px; }\n\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  z-index: 2; }"];



/***/ }),

/***/ "./src/app/chap-login/chap-login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/chap-login/chap-login.component.ts ***!
  \****************************************************/
/*! exports provided: ChapLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapLoginComponent", function() { return ChapLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ChapLoginComponent = /** @class */ (function () {
    function ChapLoginComponent() {
        this.hide = true;
    }
    ChapLoginComponent.prototype.ngOnInit = function () {
    };
    return ChapLoginComponent;
}());



/***/ }),

/***/ "./src/app/chap-monitor/chap-monitor.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/chap-monitor/chap-monitor.component.ngfactory.js ***!
  \******************************************************************/
/*! exports provided: RenderType_ChapMonitorComponent, View_ChapMonitorComponent_0, View_ChapMonitorComponent_Host_0, ChapMonitorComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChapMonitorComponent", function() { return RenderType_ChapMonitorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapMonitorComponent_0", function() { return View_ChapMonitorComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapMonitorComponent_Host_0", function() { return View_ChapMonitorComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapMonitorComponentNgFactory", function() { return ChapMonitorComponentNgFactory; });
/* harmony import */ var _chap_monitor_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chap-monitor.component.scss.shim.ngstyle */ "./src/app/chap-monitor/chap-monitor.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/material/card/typings/index.ngfactory */ "./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../node_modules/@angular/material/form-field/typings/index.ngfactory */ "./node_modules/@angular/material/form-field/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../node_modules/@angular/material/datepicker/typings/index.ngfactory */ "./node_modules/@angular/material/datepicker/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chapug_map_chapug_map_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../chapug-map/chapug-map.component.ngfactory */ "./src/app/chapug-map/chapug-map.component.ngfactory.js");
/* harmony import */ var _chapug_map_chapug_map_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../chapug-map/chapug-map.component */ "./src/app/chapug-map/chapug-map.component.ts");
/* harmony import */ var _chap_monitor_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./chap-monitor.component */ "./src/app/chap-monitor/chap-monitor.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



























var styles_ChapMonitorComponent = [_chap_monitor_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChapMonitorComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChapMonitorComponent, data: {} });

function View_ChapMonitorComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn back-red btn-lg mr-1 mb-1 text-white"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [["class", "display-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }); }
function View_ChapMonitorComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 73, "mat-card", [["class", "monitor-panel my-2 mx-2 mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 13, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "div", [["class", "col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "button", [["mat-raised-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](7, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 1, "span", [["class", "chap-red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Dashboard "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 5, "div", [["class", "col-md-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 4, "div", [["class", "media"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "img", [["alt", "chapchap logo"], ["class", "align-self-center mr-3"], ["height", "120"], ["src", "../../assets/img/chapchaplogo.png"], ["width", "120"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "div", [["class", "media-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "h4", [["class", "mt-0 chap-red display-4 font-weight-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" ChapChap Monitoring Panel "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 57, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 51, "div", [["class", "col-md-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 50, "mat-card", [["class", "dashboard-card mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 6, "mat-card-title", [["class", "text-center mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 2, "mat-icon", [["class", "mat-icon"], ["color", "warn"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" zoom_out_map "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "span", [["class", "font-weight-bold pt-1 h1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Number of Transactions "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 0, 30, "mat-card-content", [["class", "text-center mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 24, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 7389184, null, 7, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 1, { _control: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { _labelChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, [[3, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" From: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, 1, 6, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""]], [[1, "aria-haspopup", 0], [1, "aria-owns", 0], [1, "min", 0], [1, "max", 0], [8, "disabled", 0], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "input"], [null, "change"], [null, "blur"], [null, "keydown"], [null, "focus"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44)._onInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("change" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44)._onChange() !== false);
        ad = (pd_1 && ad);
    } if (("blur" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44)._onBlur() !== false);
        ad = (pd_2 && ad);
    } if (("keydown" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44)._onKeydown($event) !== false);
        ad = (pd_3 && ad);
    } if (("blur" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46)._focusChanged(false) !== false);
        ad = (pd_4 && ad);
    } if (("focus" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46)._focusChanged(true) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46)._onInput() !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerInput"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerInput"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 147456, null, 0, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["DateAdapter"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MAT_DATE_FORMATS"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"]]], { matDatepicker: [0, "matDatepicker"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MAT_INPUT_VALUE_ACCESSOR"], null, [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerInput"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["ErrorStateMatcher"], [6, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MAT_INPUT_VALUE_ACCESSOR"]], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_19__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, 4, 3, "mat-datepicker-toggle", [["class", "mat-datepicker-toggle"], ["matSuffix", ""]], [[1, "tabindex", 0], [2, "mat-datepicker-toggle-active", null], [2, "mat-accent", null], [2, "mat-warn", null]], null, null, _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_MatDatepickerToggle_0"], _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_MatDatepickerToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, [[7, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 1753088, null, 1, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerToggle"], [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [8, null]], { datepicker: [0, "datepicker"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 8, { _customIcon: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 16777216, null, 1, 1, "mat-datepicker", [], null, null, null, _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_MatDatepicker_0"], _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_MatDatepicker"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 180224, [["transDatepicker", 4]], 0, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepicker"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_22__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MAT_DATEPICKER_SCROLL_STRATEGY"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["DateAdapter"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["Directionality"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_23__["DOCUMENT"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChapMonitorComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, 1, 10, "mat-card-footer", [["class", "text-center mb-2 mat-card-footer"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardFooter"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 2, "mat-icon", [["class", "mat-icon"], ["color", "warn"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" wifi_tethering "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Online Distributors "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 2, "button", [["class", "btn btn-primary btn-lg my-1 text-white"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 1, "span", [["class", "display-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](68, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 4, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 3, "mat-card", [["class", "mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, 0, 1, "app-chapug-map", [], null, null, null, _chapug_map_chapug_map_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_ChapugMapComponent_0"], _chapug_map_chapug_map_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_ChapugMapComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 114688, null, 0, _chapug_map_chapug_map_component__WEBPACK_IMPORTED_MODULE_25__["ChapugMapComponent"], [], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 7, 0, "/dashboard"); _ck(_v, 6, 0, currVal_2); var currVal_4 = "warn"; _ck(_v, 23, 0, currVal_4); var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53); _ck(_v, 44, 0, currVal_40); _ck(_v, 46, 0); var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53); _ck(_v, 50, 0, currVal_45); var currVal_46 = _co.ChapTrans; _ck(_v, 57, 0, currVal_46); var currVal_48 = "warn"; _ck(_v, 61, 0, currVal_48); _ck(_v, 73, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._animationMode === "NoopAnimations"); _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).inline; _ck(_v, 22, 0, currVal_3); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).appearance == "standard"); var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).appearance == "fill"); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).appearance == "outline"); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).appearance == "legacy"); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._control.errorState; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._canLabelFloat; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._shouldLabelFloat(); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._hideControlPlaceholder(); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._control.disabled; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._control.autofilled; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._control.focused; var currVal_16 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).color == "accent"); var currVal_17 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).color == "warn"); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._shouldForward("untouched"); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._shouldForward("touched"); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._shouldForward("pristine"); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._shouldForward("dirty"); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._shouldForward("valid"); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._shouldForward("invalid"); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._shouldForward("pending"); var currVal_25 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._animationsEnabled; _ck(_v, 29, 1, [currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25]); var currVal_26 = true; var currVal_27 = ((((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44)._datepicker == null) ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44)._datepicker.opened) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44)._datepicker.id) || null); var currVal_28 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).min ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44)._dateAdapter.toIso8601(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).min) : null); var currVal_29 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).max ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44)._dateAdapter.toIso8601(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).max) : null); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).disabled; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46)._isServer; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).id; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).placeholder; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).disabled; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).required; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).readonly; var currVal_37 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46)._ariaDescribedby || null); var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).errorState; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).required.toString(); _ck(_v, 41, 1, [currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39]); var currVal_41 = null; var currVal_42 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).datepicker && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).datepicker.opened); var currVal_43 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).datepicker && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).datepicker.color === "accent")); var currVal_44 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).datepicker && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).datepicker.color === "warn")); _ck(_v, 48, 0, currVal_41, currVal_42, currVal_43, currVal_44); var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).inline; _ck(_v, 60, 0, currVal_47); var currVal_49 = _co.ChapOnline; _ck(_v, 68, 0, currVal_49); }); }
function View_ChapMonitorComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-monitor", [], null, null, null, View_ChapMonitorComponent_0, RenderType_ChapMonitorComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chap_monitor_component__WEBPACK_IMPORTED_MODULE_26__["ChapMonitorComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChapMonitorComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-chap-monitor", _chap_monitor_component__WEBPACK_IMPORTED_MODULE_26__["ChapMonitorComponent"], View_ChapMonitorComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/chap-monitor/chap-monitor.component.scss.shim.ngstyle.js":
/*!**************************************************************************!*\
  !*** ./src/app/chap-monitor/chap-monitor.component.scss.shim.ngstyle.js ***!
  \**************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".grid-container[_ngcontent-%COMP%] {\n  margin-left: 210px; }\n\n.monitor-panel[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw; }"];



/***/ }),

/***/ "./src/app/chap-monitor/chap-monitor.component.ts":
/*!********************************************************!*\
  !*** ./src/app/chap-monitor/chap-monitor.component.ts ***!
  \********************************************************/
/*! exports provided: ChapMonitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapMonitorComponent", function() { return ChapMonitorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var N = 100000;
var arr = N.toString().split('').map(Number);
console.log(arr);
var ChapMonitorComponent = /** @class */ (function () {
    function ChapMonitorComponent() {
        this.ChapTrans = arr;
        this.ChapOnline = 1044;
    }
    ChapMonitorComponent.prototype.ngOnInit = function () {
    };
    return ChapMonitorComponent;
}());



/***/ }),

/***/ "./src/app/chap-nav/chap-nav.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/chap-nav/chap-nav.component.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RenderType_ChapNavComponent, View_ChapNavComponent_0, View_ChapNavComponent_Host_0, ChapNavComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChapNavComponent", function() { return RenderType_ChapNavComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapNavComponent_0", function() { return View_ChapNavComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapNavComponent_Host_0", function() { return View_ChapNavComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapNavComponentNgFactory", function() { return ChapNavComponentNgFactory; });
/* harmony import */ var _chap_nav_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chap-nav.component.scss.shim.ngstyle */ "./src/app/chap-nav/chap-nav.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../node_modules/@angular/material/list/typings/index.ngfactory */ "./node_modules/@angular/material/list/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../node_modules/@angular/material/menu/typings/index.ngfactory */ "./node_modules/@angular/material/menu/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../node_modules/@angular/material/sidenav/typings/index.ngfactory */ "./node_modules/@angular/material/sidenav/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../node_modules/@angular/material/toolbar/typings/index.ngfactory */ "./node_modules/@angular/material/toolbar/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _chap_nav_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./chap-nav.component */ "./src/app/chap-nav/chap-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

























var styles_ChapNavComponent = [_chap_nav_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChapNavComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChapNavComponent, data: {} });

function View_ChapNavComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["aria-label", "Toggle sidenav"], ["mat-icon-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 6).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 2, "mat-icon", [["aria-label", "Side nav toggle icon"], ["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["menu"]))], function (_ck, _v) { _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).inline; _ck(_v, 2, 0, currVal_2); }); }
function View_ChapNavComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "mat-list-item", [["class", "mat-list-item"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], [[null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("focus" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleFocus() !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleBlur() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1097728, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 58, { _lines: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 59, { _avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 60, { _icon: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 2, 12, "button", [["class", "mat-menu-item"], ["mat-menu-item", ""], ["role", "menuitem"]], [[2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 180224, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["ɵf23"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 3, "mat-icon", [["class", "mat-icon mat-list-icon"], ["mat-list-icon", ""], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, [[60, 4]], 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListIconCssMatStyler"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["person"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 2, "h4", [["class", "mat-line"], ["mat-line", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatLine"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 3, "p", [["class", "mat-line"], ["mat-line", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatLine"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](17, 1)], function (_ck, _v) { _ck(_v, 8, 0); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._icon); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._icon); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._highlighted; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._triggersSubmenu; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._getTabIndex(); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).disabled.toString(); var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).disabled || null); _ck(_v, 5, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).inline; _ck(_v, 7, 0, currVal_7); var currVal_8 = _v.context.$implicit.name; _ck(_v, 13, 0, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 16, 0, _ck(_v, 17, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.updated)); _ck(_v, 16, 0, currVal_9); }); }
function View_ChapNavComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 317, "mat-sidenav-container", [["class", "sidenav-container mat-drawer-container mat-sidenav-container"]], [[2, "mat-drawer-container-explicit-backdrop", null]], null, null, _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatSidenavContainer_0"], _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatSidenavContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1490944, null, 2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavContainer"], [[2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["Directionality"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MAT_DRAWER_DEFAULT_AUTOSIZE"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _drawers: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { _content: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 145, "mat-sidenav", [["class", "sidenav mat-drawer mat-sidenav"], ["fixedInViewport", "true"], ["tabIndex", "-1"]], [[1, "role", 0], [40, "@transform", 0], [1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null], [2, "mat-sidenav-fixed", null], [4, "top", "px"], [4, "bottom", "px"]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) { var ad = true; if (("component:@transform.start" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._onAnimationStart($event) !== false);
        ad = (pd_0 && ad);
    } if (("component:@transform.done" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._onAnimationEnd($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatSidenav_0"], _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatSidenav"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 3325952, [[1, 4], ["drawer", 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenav"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusTrapFactory"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]]], { mode: [0, "mode"], opened: [1, "opened"], fixedInViewport: [2, "fixedInViewport"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 3, "mat-toolbar", [["class", "mat-toolbar"], ["color", "primary"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]], { color: [0, "color"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { _toolbarRows: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 136, "mat-nav-list", [["class", "mat-nav-list"], ["role", "navigation"]], null, null, null, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatNavList_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatNavList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 49152, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 14, "a", [["class", "mat-list-item"], ["mat-list-item", ""], ["routerLinkActive", "active"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null], [1, "target", 0], [8, "href", 4]], [[null, "focus"], [null, "blur"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("focus" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._handleFocus() !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._handleBlur() !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 1097728, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { _lines: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 5, { _avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 6, { _icon: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, [[8, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](22, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, 2, 4, "span", [["class", "chap-red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["home"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Dashboard "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, 0, 14, "a", [["class", "mat-list-item"], ["mat-list-item", ""], ["routerLinkActive", "active"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null], [1, "target", 0], [8, "href", 4]], [[null, "focus"], [null, "blur"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("focus" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._handleFocus() !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._handleBlur() !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 1097728, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { _lines: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 10, { _avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 11, { _icon: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 671744, [[13, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](37, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, 2, 4, "span", [["class", "chap-red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["insert_chart_outlined"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Statistics "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, 0, 14, "a", [["class", "mat-list-item"], ["mat-list-item", ""], ["routerLinkActive", "active"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null], [1, "target", 0], [8, "href", 4]], [[null, "focus"], [null, "blur"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("focus" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._handleFocus() !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._handleBlur() !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 1097728, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, { _lines: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 15, { _avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 16, { _icon: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 671744, [[18, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](52, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, 2, 4, "span", [["class", "chap-red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["add_shopping_cart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Products "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, 0, 14, "a", [["class", "mat-list-item"], ["mat-list-item", ""], ["routerLinkActive", "active"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null], [1, "target", 0], [8, "href", 4]], [[null, "focus"], [null, "blur"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("focus" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62)._handleFocus() !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62)._handleBlur() !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 1097728, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, { _lines: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 20, { _avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 21, { _icon: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 671744, [[23, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](67, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, 2, 4, "span", [["class", "chap-red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["shopping_basket"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Inventory "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, 0, 14, "a", [["class", "mat-list-item"], ["mat-list-item", ""], ["routerLinkActive", "active"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null], [1, "target", 0], [8, "href", 4]], [[null, "focus"], [null, "blur"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("focus" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77)._handleFocus() !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77)._handleBlur() !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](77, 1097728, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, { _lines: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 25, { _avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 26, { _icon: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](81, 671744, [[28, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](82, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](83, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 27, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 28, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, 2, 4, "span", [["class", "chap-red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](88, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["description"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Order "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, 0, 14, "a", [["class", "mat-list-item"], ["mat-list-item", ""], ["routerLinkActive", "active"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null], [1, "target", 0], [8, "href", 4]], [[null, "focus"], [null, "blur"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("focus" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 92)._handleFocus() !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 92)._handleBlur() !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 96).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](92, 1097728, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 29, { _lines: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 30, { _avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 31, { _icon: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](96, 671744, [[33, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](97, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](98, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 32, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 33, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, 2, 4, "span", [["class", "chap-red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 0, null, null, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](103, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["account_circle"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Admin "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, 0, 14, "a", [["class", "mat-list-item"], ["mat-list-item", ""], ["routerLinkActive", "active"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null], [1, "target", 0], [8, "href", 4]], [[null, "focus"], [null, "blur"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("focus" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107)._handleFocus() !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107)._handleBlur() !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](107, 1097728, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 34, { _lines: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 35, { _avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 36, { _icon: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](111, 671744, [[38, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](112, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](113, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 37, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 38, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, 2, 4, "span", [["class", "chap-red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](117, 0, null, null, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](118, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["settings"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Settings "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](121, 0, null, 0, 14, "a", [["class", "mat-list-item"], ["mat-list-item", ""], ["routerLinkActive", "active"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null], [1, "target", 0], [8, "href", 4]], [[null, "focus"], [null, "blur"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("focus" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 122)._handleFocus() !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 122)._handleBlur() !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](122, 1097728, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 39, { _lines: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 40, { _avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 41, { _icon: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](126, 671744, [[43, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](127, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](128, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 42, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 43, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](131, 0, null, 2, 4, "span", [["class", "chap-red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](132, 0, null, null, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](133, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["help_outline"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Help "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](136, 0, null, 0, 14, "a", [["class", "mat-list-item"], ["mat-list-item", ""], ["routerLinkActive", "active"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null], [1, "target", 0], [8, "href", 4]], [[null, "focus"], [null, "blur"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("focus" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137)._handleFocus() !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137)._handleBlur() !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 141).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](137, 1097728, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 44, { _lines: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 45, { _avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 46, { _icon: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](141, 671744, [[48, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](142, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](143, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 47, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 48, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](146, 0, null, 2, 4, "span", [["class", "chap-red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](147, 0, null, null, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](148, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["visibility"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Monitoring Panel "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](151, 0, null, 1, 44, "mat-sidenav-content", [["class", "mat-drawer-content mat-sidenav-content"]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatSidenavContent_0"], _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatSidenavContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](152, 1097728, [[2, 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavContainer"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](153, 0, null, 0, 42, "mat-toolbar", [["class", "mat-toolbar"], ["color", "primary"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](154, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]], { color: [0, "color"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 49, { _toolbarRows: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_ChapNavComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](157, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](159, 0, null, 0, 1, "img", [["alt", "logo"], ["class", "mat-list-avatar"], ["height", "50px"], ["matListAvatar", ""], ["src", "../../assets/img/uniliver_logo.png"], ["width", "50px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](160, 16384, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListAvatarCssMatStyler"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](161, 0, null, 0, 1, "span", [["class", "toolbar-icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Uniliver "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](163, 0, null, 0, 0, "span", [["class", "toolbar-spacer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](164, 16777216, null, 0, 6, "button", [["aria-haspopup", "true"], ["class", "toolbar-icon"], ["mat-icon-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-expanded", 0]], [[null, "mousedown"], [null, "keydown"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166)._handleMousedown($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166)._handleClick($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](165, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](166, 1196032, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MAT_MENU_SCROLL_STRATEGY"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenu"]], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["Directionality"]], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]], { menu: [0, "menu"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](167, 0, null, 0, 3, "mat-icon", [["class", "mat-icon mat-badge"], ["matBadge", "15"], ["matBadgeColor", "warn"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-badge-overlap", null], [2, "mat-badge-above", null], [2, "mat-badge-below", null], [2, "mat-badge-before", null], [2, "mat-badge-after", null], [2, "mat-badge-small", null], [2, "mat-badge-medium", null], [2, "mat-badge-large", null], [2, "mat-badge-hidden", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](168, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](169, 147456, null, 0, _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__["MatBadge"], [[2, _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["AriaDescriber"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"], content: [1, "content"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["account_balance_wallet"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](171, 16777216, null, 0, 6, "button", [["aria-haspopup", "true"], ["class", "toolbar-icon"], ["mat-icon-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-expanded", 0]], [[null, "mousedown"], [null, "keydown"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 173)._handleMousedown($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 173)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 173)._handleClick($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](172, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](173, 1196032, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MAT_MENU_SCROLL_STRATEGY"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenu"]], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["Directionality"]], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]], { menu: [0, "menu"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](174, 0, null, 0, 3, "mat-icon", [["class", "mat-icon mat-badge"], ["matBadge", "25"], ["matBadgeColor", "warn"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-badge-overlap", null], [2, "mat-badge-above", null], [2, "mat-badge-below", null], [2, "mat-badge-before", null], [2, "mat-badge-after", null], [2, "mat-badge-small", null], [2, "mat-badge-medium", null], [2, "mat-badge-large", null], [2, "mat-badge-hidden", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](175, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](176, 147456, null, 0, _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__["MatBadge"], [[2, _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["AriaDescriber"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"], content: [1, "content"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["mail_outline"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](178, 16777216, null, 0, 6, "button", [["aria-haspopup", "true"], ["class", "toolbar-icon"], ["mat-icon-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-expanded", 0]], [[null, "mousedown"], [null, "keydown"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 180)._handleMousedown($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 180)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 180)._handleClick($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](179, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](180, 1196032, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MAT_MENU_SCROLL_STRATEGY"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenu"]], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["Directionality"]], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]], { menu: [0, "menu"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](181, 0, null, 0, 3, "mat-icon", [["class", "mat-icon mat-badge"], ["matBadge", "43"], ["matBadgeColor", "warn"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-badge-overlap", null], [2, "mat-badge-above", null], [2, "mat-badge-below", null], [2, "mat-badge-before", null], [2, "mat-badge-after", null], [2, "mat-badge-small", null], [2, "mat-badge-medium", null], [2, "mat-badge-large", null], [2, "mat-badge-hidden", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](182, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](183, 147456, null, 0, _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__["MatBadge"], [[2, _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["AriaDescriber"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"], content: [1, "content"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["chat_bubble_outline"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](185, 16777216, null, 0, 6, "button", [["aria-haspopup", "true"], ["class", "toolbar-icon"], ["mat-icon-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-expanded", 0]], [[null, "mousedown"], [null, "keydown"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 187)._handleMousedown($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 187)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 187)._handleClick($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](186, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](187, 1196032, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MAT_MENU_SCROLL_STRATEGY"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenu"]], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["Directionality"]], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]], { menu: [0, "menu"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](188, 0, null, 0, 3, "mat-icon", [["class", "mat-icon mat-badge"], ["matBadge", "65"], ["matBadgeColor", "warn"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-badge-overlap", null], [2, "mat-badge-above", null], [2, "mat-badge-below", null], [2, "mat-badge-before", null], [2, "mat-badge-after", null], [2, "mat-badge-small", null], [2, "mat-badge-medium", null], [2, "mat-badge-large", null], [2, "mat-badge-hidden", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](189, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](190, 147456, null, 0, _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__["MatBadge"], [[2, _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["AriaDescriber"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"], content: [1, "content"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["notifications_none"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](192, 16777216, null, 0, 3, "button", [["aria-haspopup", "true"], ["class", "toolbar-icon"], ["mat-icon-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-expanded", 0]], [[null, "mousedown"], [null, "keydown"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 194)._handleMousedown($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 194)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 194)._handleClick($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](193, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](194, 1196032, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MAT_MENU_SCROLL_STRATEGY"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenu"]], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["Directionality"]], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]], { menu: [0, "menu"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](195, 0, null, 0, 0, "img", [["alt", "logo"], ["class", "img-round"], ["height", "40px"], ["src", "../../assets/img/team1.jpg"], ["width", "40px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](196, 0, null, 2, 25, "mat-menu", [], null, null, null, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatMenu_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](197, 1294336, [["ordermenu", 4]], 2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MAT_MENU_DEFAULT_OPTIONS"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 50, { items: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 51, { lazyContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["ɵf23"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenu"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](201, 0, null, 0, 6, "button", [["class", "mat-menu-item"], ["mat-menu-item", ""], ["role", "menuitem"]], [[2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 202)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 202)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](202, 180224, [[50, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["ɵf23"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](203, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](204, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["dialpad"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](206, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Redial"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](208, 0, null, 0, 6, "button", [["class", "mat-menu-item"], ["disabled", ""], ["mat-menu-item", ""], ["role", "menuitem"]], [[2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](209, 180224, [[50, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["ɵf23"]]], { disabled: [0, "disabled"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](210, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](211, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["voicemail"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](213, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Check voicemail"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](215, 0, null, 0, 6, "button", [["class", "mat-menu-item"], ["mat-menu-item", ""], ["role", "menuitem"]], [[2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 216)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 216)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](216, 180224, [[50, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["ɵf23"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](217, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](218, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["notifications_off"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](220, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Disable alerts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](222, 0, null, 2, 25, "mat-menu", [], null, null, null, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatMenu_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](223, 1294336, [["msgmenu", 4]], 2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MAT_MENU_DEFAULT_OPTIONS"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 52, { items: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 53, { lazyContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["ɵf23"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenu"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](227, 0, null, 0, 6, "button", [["class", "mat-menu-item"], ["mat-menu-item", ""], ["role", "menuitem"]], [[2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 228)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 228)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](228, 180224, [[52, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["ɵf23"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](229, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](230, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["sync"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](232, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Recent"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](234, 0, null, 0, 6, "button", [["class", "mat-menu-item"], ["mat-menu-item", ""], ["role", "menuitem"]], [[2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 235)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 235)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](235, 180224, [[52, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["ɵf23"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](236, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](237, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["fiber_new"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](239, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["New messages"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](241, 0, null, 0, 6, "button", [["class", "mat-menu-item"], ["mat-menu-item", ""], ["role", "menuitem"]], [[2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 242)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 242)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](242, 180224, [[52, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["ɵf23"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](243, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](244, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["group_add"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](246, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["New group"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](248, 0, null, 2, 25, "mat-menu", [], null, null, null, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatMenu_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](249, 1294336, [["chatsmenu", 4]], 2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MAT_MENU_DEFAULT_OPTIONS"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 54, { items: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 55, { lazyContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["ɵf23"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenu"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](253, 0, null, 0, 6, "button", [["class", "mat-menu-item"], ["mat-menu-item", ""], ["role", "menuitem"]], [[2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 254)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 254)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](254, 180224, [[54, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["ɵf23"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](255, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](256, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["sync"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](258, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Recent"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](260, 0, null, 0, 6, "button", [["class", "mat-menu-item"], ["mat-menu-item", ""], ["role", "menuitem"]], [[2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 261)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 261)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](261, 180224, [[54, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["ɵf23"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](262, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](263, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["fiber_new"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](265, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["New messages"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](267, 0, null, 0, 6, "button", [["class", "mat-menu-item"], ["mat-menu-item", ""], ["role", "menuitem"]], [[2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 268)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 268)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](268, 180224, [[54, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["ɵf23"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](269, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](270, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["person_add"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](272, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["New chat"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](274, 0, null, 2, 11, "mat-menu", [], null, null, null, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatMenu_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["ɵf23"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](276, 1294336, [["alertsmenu", 4]], 2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MAT_MENU_DEFAULT_OPTIONS"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 56, { items: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 57, { lazyContent: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](279, 0, null, 0, 6, "mat-list", [["class", "mat-list"]], null, null, null, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatList_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](280, 49152, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](281, 0, null, 0, 2, "h3", [["class", "mat-subheader"], ["mat-subheader", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](282, 16384, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListSubheaderCssMatStyler"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Notifications"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ChapNavComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](285, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](286, 0, null, 2, 32, "mat-menu", [], null, null, null, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatMenu_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](287, 1294336, [["accountmenu", 4]], 2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MAT_MENU_DEFAULT_OPTIONS"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 61, { items: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 62, { lazyContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["ɵf23"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenu"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](291, 0, null, 0, 6, "button", [["class", "mat-menu-item"], ["mat-menu-item", ""], ["role", "menuitem"]], [[2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 292)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 292)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](292, 180224, [[61, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["ɵf23"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](293, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](294, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["radio_button_checked"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](296, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Status: Online"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](298, 0, null, 0, 6, "button", [["class", "mat-menu-item"], ["mat-menu-item", ""], ["role", "menuitem"]], [[2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 299)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 299)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](299, 180224, [[61, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["ɵf23"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](300, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](301, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["settings"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](303, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Account setting "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](305, 0, null, 0, 6, "button", [["class", "mat-menu-item"], ["mat-menu-item", ""], ["role", "menuitem"]], [[2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 306)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 306)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](306, 180224, [[61, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["ɵf23"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](307, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](308, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["feedback"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](310, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Feedback "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](312, 0, null, 0, 6, "button", [["class", "mat-menu-item"], ["mat-menu-item", ""], ["role", "menuitem"]], [[2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 313)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 313)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](313, 180224, [[61, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["ɵf23"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](314, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](315, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["power_settings_new"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](317, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Logout "]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 2, 0); var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).transform(_co.isHandset$)) ? "over" : "side"); var currVal_12 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).transform(_co.isHandset$)); var currVal_13 = "true"; _ck(_v, 6, 0, currVal_11, currVal_12, currVal_13); var currVal_16 = "primary"; _ck(_v, 11, 0, currVal_16); var currVal_21 = _ck(_v, 22, 0, "/dashboard"); _ck(_v, 21, 0, currVal_21); var currVal_22 = "active"; _ck(_v, 23, 0, currVal_22); _ck(_v, 28, 0); var currVal_28 = _ck(_v, 37, 0, "/stats"); _ck(_v, 36, 0, currVal_28); var currVal_29 = "active"; _ck(_v, 38, 0, currVal_29); _ck(_v, 43, 0); var currVal_35 = _ck(_v, 52, 0, "/products"); _ck(_v, 51, 0, currVal_35); var currVal_36 = "active"; _ck(_v, 53, 0, currVal_36); _ck(_v, 58, 0); var currVal_42 = _ck(_v, 67, 0, "/inventory"); _ck(_v, 66, 0, currVal_42); var currVal_43 = "active"; _ck(_v, 68, 0, currVal_43); _ck(_v, 73, 0); var currVal_49 = _ck(_v, 82, 0, "/order"); _ck(_v, 81, 0, currVal_49); var currVal_50 = "active"; _ck(_v, 83, 0, currVal_50); _ck(_v, 88, 0); var currVal_56 = _ck(_v, 97, 0, "/admin"); _ck(_v, 96, 0, currVal_56); var currVal_57 = "active"; _ck(_v, 98, 0, currVal_57); _ck(_v, 103, 0); var currVal_63 = _ck(_v, 112, 0, "/settings"); _ck(_v, 111, 0, currVal_63); var currVal_64 = "active"; _ck(_v, 113, 0, currVal_64); _ck(_v, 118, 0); var currVal_70 = _ck(_v, 127, 0, "/help"); _ck(_v, 126, 0, currVal_70); var currVal_71 = "active"; _ck(_v, 128, 0, currVal_71); _ck(_v, 133, 0); var currVal_77 = _ck(_v, 142, 0, "/monitor"); _ck(_v, 141, 0, currVal_77); var currVal_78 = "active"; _ck(_v, 143, 0, currVal_78); _ck(_v, 148, 0); var currVal_84 = "primary"; _ck(_v, 154, 0, currVal_84); var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 157, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 158).transform(_co.isHandset$)); _ck(_v, 157, 0, currVal_85); var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197); _ck(_v, 166, 0, currVal_89); _ck(_v, 168, 0); var currVal_100 = "warn"; var currVal_101 = "15"; _ck(_v, 169, 0, currVal_100, currVal_101); var currVal_105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 223); _ck(_v, 173, 0, currVal_105); _ck(_v, 175, 0); var currVal_116 = "warn"; var currVal_117 = "25"; _ck(_v, 176, 0, currVal_116, currVal_117); var currVal_121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 249); _ck(_v, 180, 0, currVal_121); _ck(_v, 182, 0); var currVal_132 = "warn"; var currVal_133 = "43"; _ck(_v, 183, 0, currVal_132, currVal_133); var currVal_137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 276); _ck(_v, 187, 0, currVal_137); _ck(_v, 189, 0); var currVal_148 = "warn"; var currVal_149 = "65"; _ck(_v, 190, 0, currVal_148, currVal_149); var currVal_153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 287); _ck(_v, 194, 0, currVal_153); _ck(_v, 197, 0); _ck(_v, 204, 0); var currVal_165 = ""; _ck(_v, 209, 0, currVal_165); _ck(_v, 211, 0); _ck(_v, 218, 0); _ck(_v, 223, 0); _ck(_v, 230, 0); _ck(_v, 237, 0); _ck(_v, 244, 0); _ck(_v, 249, 0); _ck(_v, 256, 0); _ck(_v, 263, 0); _ck(_v, 270, 0); _ck(_v, 276, 0); var currVal_209 = _co.folders; _ck(_v, 285, 0, currVal_209); _ck(_v, 287, 0); _ck(_v, 294, 0); _ck(_v, 301, 0); _ck(_v, 308, 0); _ck(_v, 315, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._backdropOverride; _ck(_v, 1, 0, currVal_0); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).transform(_co.isHandset$)) ? "dialog" : "navigation"); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._animationState; var currVal_3 = null; var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).position === "end"); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).mode === "over"); var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).mode === "push"); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).mode === "side"); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).fixedInViewport; var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).fixedTopGap : null); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).fixedBottomGap : null); _ck(_v, 5, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_14 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._toolbarRows.length > 0); var currVal_15 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._toolbarRows.length === 0); _ck(_v, 10, 0, currVal_14, currVal_15); var currVal_17 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._icon); var currVal_18 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._icon); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).target; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).href; _ck(_v, 16, 0, currVal_17, currVal_18, currVal_19, currVal_20); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).inline; _ck(_v, 27, 0, currVal_23); var currVal_24 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._icon); var currVal_25 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._icon); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).target; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).href; _ck(_v, 31, 0, currVal_24, currVal_25, currVal_26, currVal_27); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).inline; _ck(_v, 42, 0, currVal_30); var currVal_31 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._icon); var currVal_32 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._icon); var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).target; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).href; _ck(_v, 46, 0, currVal_31, currVal_32, currVal_33, currVal_34); var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).inline; _ck(_v, 57, 0, currVal_37); var currVal_38 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62)._icon); var currVal_39 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62)._icon); var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).target; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).href; _ck(_v, 61, 0, currVal_38, currVal_39, currVal_40, currVal_41); var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).inline; _ck(_v, 72, 0, currVal_44); var currVal_45 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77)._icon); var currVal_46 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77)._icon); var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).target; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).href; _ck(_v, 76, 0, currVal_45, currVal_46, currVal_47, currVal_48); var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).inline; _ck(_v, 87, 0, currVal_51); var currVal_52 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 92)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 92)._icon); var currVal_53 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 92)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 92)._icon); var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 96).target; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 96).href; _ck(_v, 91, 0, currVal_52, currVal_53, currVal_54, currVal_55); var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 103).inline; _ck(_v, 102, 0, currVal_58); var currVal_59 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107)._icon); var currVal_60 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107)._icon); var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).target; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).href; _ck(_v, 106, 0, currVal_59, currVal_60, currVal_61, currVal_62); var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).inline; _ck(_v, 117, 0, currVal_65); var currVal_66 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 122)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 122)._icon); var currVal_67 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 122)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 122)._icon); var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).target; var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).href; _ck(_v, 121, 0, currVal_66, currVal_67, currVal_68, currVal_69); var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 133).inline; _ck(_v, 132, 0, currVal_72); var currVal_73 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137)._icon); var currVal_74 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137)._icon); var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 141).target; var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 141).href; _ck(_v, 136, 0, currVal_73, currVal_74, currVal_75, currVal_76); var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 148).inline; _ck(_v, 147, 0, currVal_79); var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 152)._container._contentMargins.left; var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 152)._container._contentMargins.right; _ck(_v, 151, 0, currVal_80, currVal_81); var currVal_82 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 154)._toolbarRows.length > 0); var currVal_83 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 154)._toolbarRows.length === 0); _ck(_v, 153, 0, currVal_82, currVal_83); var currVal_86 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 165).disabled || null); var currVal_87 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 165)._animationMode === "NoopAnimations"); var currVal_88 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166).menuOpen || null); _ck(_v, 164, 0, currVal_86, currVal_87, currVal_88); var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 168).inline; var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).overlap; var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).isAbove(); var currVal_93 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).isAbove(); var currVal_94 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).isAfter(); var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).isAfter(); var currVal_96 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).size === "small"); var currVal_97 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).size === "medium"); var currVal_98 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).size === "large"); var currVal_99 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).hidden || !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169)._hasContent); _ck(_v, 167, 0, currVal_90, currVal_91, currVal_92, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97, currVal_98, currVal_99); var currVal_102 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 172).disabled || null); var currVal_103 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 172)._animationMode === "NoopAnimations"); var currVal_104 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 173).menuOpen || null); _ck(_v, 171, 0, currVal_102, currVal_103, currVal_104); var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 175).inline; var currVal_107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).overlap; var currVal_108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).isAbove(); var currVal_109 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).isAbove(); var currVal_110 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).isAfter(); var currVal_111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).isAfter(); var currVal_112 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).size === "small"); var currVal_113 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).size === "medium"); var currVal_114 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).size === "large"); var currVal_115 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).hidden || !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176)._hasContent); _ck(_v, 174, 0, currVal_106, currVal_107, currVal_108, currVal_109, currVal_110, currVal_111, currVal_112, currVal_113, currVal_114, currVal_115); var currVal_118 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 179).disabled || null); var currVal_119 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 179)._animationMode === "NoopAnimations"); var currVal_120 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 180).menuOpen || null); _ck(_v, 178, 0, currVal_118, currVal_119, currVal_120); var currVal_122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 182).inline; var currVal_123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).overlap; var currVal_124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).isAbove(); var currVal_125 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).isAbove(); var currVal_126 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).isAfter(); var currVal_127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).isAfter(); var currVal_128 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).size === "small"); var currVal_129 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).size === "medium"); var currVal_130 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).size === "large"); var currVal_131 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).hidden || !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183)._hasContent); _ck(_v, 181, 0, currVal_122, currVal_123, currVal_124, currVal_125, currVal_126, currVal_127, currVal_128, currVal_129, currVal_130, currVal_131); var currVal_134 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 186).disabled || null); var currVal_135 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 186)._animationMode === "NoopAnimations"); var currVal_136 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 187).menuOpen || null); _ck(_v, 185, 0, currVal_134, currVal_135, currVal_136); var currVal_138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 189).inline; var currVal_139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 190).overlap; var currVal_140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 190).isAbove(); var currVal_141 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 190).isAbove(); var currVal_142 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 190).isAfter(); var currVal_143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 190).isAfter(); var currVal_144 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 190).size === "small"); var currVal_145 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 190).size === "medium"); var currVal_146 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 190).size === "large"); var currVal_147 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 190).hidden || !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 190)._hasContent); _ck(_v, 188, 0, currVal_138, currVal_139, currVal_140, currVal_141, currVal_142, currVal_143, currVal_144, currVal_145, currVal_146, currVal_147); var currVal_150 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 193).disabled || null); var currVal_151 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 193)._animationMode === "NoopAnimations"); var currVal_152 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 194).menuOpen || null); _ck(_v, 192, 0, currVal_150, currVal_151, currVal_152); var currVal_154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 202)._highlighted; var currVal_155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 202)._triggersSubmenu; var currVal_156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 202)._getTabIndex(); var currVal_157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 202).disabled.toString(); var currVal_158 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 202).disabled || null); _ck(_v, 201, 0, currVal_154, currVal_155, currVal_156, currVal_157, currVal_158); var currVal_159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 204).inline; _ck(_v, 203, 0, currVal_159); var currVal_160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209)._highlighted; var currVal_161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209)._triggersSubmenu; var currVal_162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209)._getTabIndex(); var currVal_163 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).disabled.toString(); var currVal_164 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).disabled || null); _ck(_v, 208, 0, currVal_160, currVal_161, currVal_162, currVal_163, currVal_164); var currVal_166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 211).inline; _ck(_v, 210, 0, currVal_166); var currVal_167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 216)._highlighted; var currVal_168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 216)._triggersSubmenu; var currVal_169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 216)._getTabIndex(); var currVal_170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 216).disabled.toString(); var currVal_171 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 216).disabled || null); _ck(_v, 215, 0, currVal_167, currVal_168, currVal_169, currVal_170, currVal_171); var currVal_172 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 218).inline; _ck(_v, 217, 0, currVal_172); var currVal_173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 228)._highlighted; var currVal_174 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 228)._triggersSubmenu; var currVal_175 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 228)._getTabIndex(); var currVal_176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 228).disabled.toString(); var currVal_177 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 228).disabled || null); _ck(_v, 227, 0, currVal_173, currVal_174, currVal_175, currVal_176, currVal_177); var currVal_178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 230).inline; _ck(_v, 229, 0, currVal_178); var currVal_179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 235)._highlighted; var currVal_180 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 235)._triggersSubmenu; var currVal_181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 235)._getTabIndex(); var currVal_182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 235).disabled.toString(); var currVal_183 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 235).disabled || null); _ck(_v, 234, 0, currVal_179, currVal_180, currVal_181, currVal_182, currVal_183); var currVal_184 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 237).inline; _ck(_v, 236, 0, currVal_184); var currVal_185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 242)._highlighted; var currVal_186 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 242)._triggersSubmenu; var currVal_187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 242)._getTabIndex(); var currVal_188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 242).disabled.toString(); var currVal_189 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 242).disabled || null); _ck(_v, 241, 0, currVal_185, currVal_186, currVal_187, currVal_188, currVal_189); var currVal_190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 244).inline; _ck(_v, 243, 0, currVal_190); var currVal_191 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 254)._highlighted; var currVal_192 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 254)._triggersSubmenu; var currVal_193 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 254)._getTabIndex(); var currVal_194 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 254).disabled.toString(); var currVal_195 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 254).disabled || null); _ck(_v, 253, 0, currVal_191, currVal_192, currVal_193, currVal_194, currVal_195); var currVal_196 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 256).inline; _ck(_v, 255, 0, currVal_196); var currVal_197 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 261)._highlighted; var currVal_198 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 261)._triggersSubmenu; var currVal_199 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 261)._getTabIndex(); var currVal_200 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 261).disabled.toString(); var currVal_201 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 261).disabled || null); _ck(_v, 260, 0, currVal_197, currVal_198, currVal_199, currVal_200, currVal_201); var currVal_202 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263).inline; _ck(_v, 262, 0, currVal_202); var currVal_203 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 268)._highlighted; var currVal_204 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 268)._triggersSubmenu; var currVal_205 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 268)._getTabIndex(); var currVal_206 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 268).disabled.toString(); var currVal_207 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 268).disabled || null); _ck(_v, 267, 0, currVal_203, currVal_204, currVal_205, currVal_206, currVal_207); var currVal_208 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 270).inline; _ck(_v, 269, 0, currVal_208); var currVal_210 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 292)._highlighted; var currVal_211 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 292)._triggersSubmenu; var currVal_212 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 292)._getTabIndex(); var currVal_213 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 292).disabled.toString(); var currVal_214 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 292).disabled || null); _ck(_v, 291, 0, currVal_210, currVal_211, currVal_212, currVal_213, currVal_214); var currVal_215 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 294).inline; _ck(_v, 293, 0, currVal_215); var currVal_216 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 299)._highlighted; var currVal_217 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 299)._triggersSubmenu; var currVal_218 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 299)._getTabIndex(); var currVal_219 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 299).disabled.toString(); var currVal_220 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 299).disabled || null); _ck(_v, 298, 0, currVal_216, currVal_217, currVal_218, currVal_219, currVal_220); var currVal_221 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 301).inline; _ck(_v, 300, 0, currVal_221); var currVal_222 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 306)._highlighted; var currVal_223 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 306)._triggersSubmenu; var currVal_224 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 306)._getTabIndex(); var currVal_225 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 306).disabled.toString(); var currVal_226 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 306).disabled || null); _ck(_v, 305, 0, currVal_222, currVal_223, currVal_224, currVal_225, currVal_226); var currVal_227 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 308).inline; _ck(_v, 307, 0, currVal_227); var currVal_228 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 313)._highlighted; var currVal_229 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 313)._triggersSubmenu; var currVal_230 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 313)._getTabIndex(); var currVal_231 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 313).disabled.toString(); var currVal_232 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 313).disabled || null); _ck(_v, 312, 0, currVal_228, currVal_229, currVal_230, currVal_231, currVal_232); var currVal_233 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 315).inline; _ck(_v, 314, 0, currVal_233); }); }
function View_ChapNavComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-nav", [], null, null, null, View_ChapNavComponent_0, RenderType_ChapNavComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _chap_nav_component__WEBPACK_IMPORTED_MODULE_23__["ChapNavComponent"], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_24__["BreakpointObserver"]], null, null)], null, null); }
var ChapNavComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-chap-nav", _chap_nav_component__WEBPACK_IMPORTED_MODULE_23__["ChapNavComponent"], View_ChapNavComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/chap-nav/chap-nav.component.scss.shim.ngstyle.js":
/*!******************************************************************!*\
  !*** ./src/app/chap-nav/chap-nav.component.scss.shim.ngstyle.js ***!
  \******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%; }\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  overflow-x: hidden; }\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0; }\n\n.toolbar-icon[_ngcontent-%COMP%] {\n  padding: 0 28px; }\n\n.toolbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto; }\n\n.badgecolor[_ngcontent-%COMP%] {\n  color: #FFC06A; }\n\n.mat-nav-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: turquoise; }"];



/***/ }),

/***/ "./src/app/chap-nav/chap-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/chap-nav/chap-nav.component.ts ***!
  \************************************************/
/*! exports provided: ChapNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapNavComponent", function() { return ChapNavComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var ChapNavComponent = /** @class */ (function () {
    function ChapNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) { return result.matches; }));
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Work',
                updated: new Date('1/28/16'),
            }
        ];
    }
    return ChapNavComponent;
}());



/***/ }),

/***/ "./src/app/chap-order/chap-order.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/chap-order/chap-order.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_ChapOrderComponent, View_ChapOrderComponent_0, View_ChapOrderComponent_Host_0, ChapOrderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChapOrderComponent", function() { return RenderType_ChapOrderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapOrderComponent_0", function() { return View_ChapOrderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapOrderComponent_Host_0", function() { return View_ChapOrderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapOrderComponentNgFactory", function() { return ChapOrderComponentNgFactory; });
/* harmony import */ var _chap_order_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chap-order.component.scss.shim.ngstyle */ "./src/app/chap-order/chap-order.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/material/card/typings/index.ngfactory */ "./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chap-nav/chap-nav.component.ngfactory */ "./src/app/chap-nav/chap-nav.component.ngfactory.js");
/* harmony import */ var _chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chap-nav/chap-nav.component */ "./src/app/chap-nav/chap-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _chap_order_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chap-order.component */ "./src/app/chap-order/chap-order.component.ts");
/* harmony import */ var _model_product_repository__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../model/product.repository */ "./src/app/model/product.repository.ts");
/* harmony import */ var _model_cart_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../model/cart.model */ "./src/app/model/cart.model.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_ChapOrderComponent = [_chap_order_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChapOrderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChapOrderComponent, data: {} });

function View_ChapOrderComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " item(s) ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 4)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.cart.itemCount; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.cart.cartPrice, "UGX", "symbol", "2.2-2")); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_ChapOrderComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-outline-danger btn-block"]], [[2, "active", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.changeCategory(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.$implicit == _co.selectedCategory); _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 1, 0, currVal_1); }); }
function View_ChapOrderComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "mat-card", [["class", " m-1 p-1 border-danger mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 4, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "span", [["class", "badge badge-pill badge-danger float-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 4), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 10, "div", [["class", "card-text p-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 9, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "col-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "div", [["class", "col-3 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Stock : "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "span", [["class", "badge badge-pill badge-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, [" ", " Units "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "div", [["class", "col "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "button", [["class", "btn btn-success btn-sm float-right"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addProductToCart(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Add To Cart "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.price, "UGX", "symbol", "2.2-2")); _ck(_v, 5, 0, currVal_1); var currVal_2 = _v.context.$implicit.description; _ck(_v, 10, 0, currVal_2); var currVal_3 = _v.context.$implicit.units; _ck(_v, 14, 0, currVal_3); }); }
function View_ChapOrderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-chap-nav", [], null, null, null, _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ChapNavComponent_0"], _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ChapNavComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_6__["ChapNavComponent"], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["BreakpointObserver"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 31, "mat-card", [["class", "grid-container mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 3, "nav", [["aria-label", "breadcrumb"], ["class", "mt-2 mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "ol", [["class", "breadcrumb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "li", [["aria-current", "page"], ["class", "breadcrumb-item active mat-h1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Order "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 25, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 13, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 12, "div", [["class", "col bg-dark text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "a", [["class", "navbar-brand"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" YOUR STORE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 9, "div", [["class", "float-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 3, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Your cart: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChapOrderComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 4, "button", [["class", "btn btn-sm bg-dark text-white"], ["routerLink", "/cartdetail"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["shopping_cart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 10, "div", [["class", "row "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 5, "div", [["class", "col-3 p-2 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](26, null, [" Total: ", " Categories "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "button", [["class", "btn btn-block btn-outline-danger"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.changeCategory() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Home "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChapOrderComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 3, "div", [["class", "col-9 p-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](32, null, [" Total: ", " Products "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChapOrderComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.cart.itemCount >= 0); _ck(_v, 18, 0, currVal_0); var currVal_2 = "/cartdetail"; _ck(_v, 20, 0, currVal_2); _ck(_v, 22, 0); var currVal_5 = _co.categories; _ck(_v, 30, 0, currVal_5); var currVal_7 = _co.products; _ck(_v, 34, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.cart.itemCount === 0); _ck(_v, 19, 0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).inline; _ck(_v, 21, 0, currVal_3); var currVal_4 = _co.categories.length; _ck(_v, 26, 0, currVal_4); var currVal_6 = _co.products.length; _ck(_v, 32, 0, currVal_6); }); }
function View_ChapOrderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-order", [], null, null, null, View_ChapOrderComponent_0, RenderType_ChapOrderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chap_order_component__WEBPACK_IMPORTED_MODULE_11__["ChapOrderComponent"], [_model_product_repository__WEBPACK_IMPORTED_MODULE_12__["ProductRepository"], _model_cart_model__WEBPACK_IMPORTED_MODULE_13__["Cart"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChapOrderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-chap-order", _chap_order_component__WEBPACK_IMPORTED_MODULE_11__["ChapOrderComponent"], View_ChapOrderComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/chap-order/chap-order.component.scss.shim.ngstyle.js":
/*!**********************************************************************!*\
  !*** ./src/app/chap-order/chap-order.component.scss.shim.ngstyle.js ***!
  \**********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".grid-container[_ngcontent-%COMP%] {\n  margin-left: 200px; }"];



/***/ }),

/***/ "./src/app/chap-order/chap-order.component.ts":
/*!****************************************************!*\
  !*** ./src/app/chap-order/chap-order.component.ts ***!
  \****************************************************/
/*! exports provided: ChapOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapOrderComponent", function() { return ChapOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_product_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/product.repository */ "./src/app/model/product.repository.ts");
/* harmony import */ var _model_cart_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/cart.model */ "./src/app/model/cart.model.ts");




var ChapOrderComponent = /** @class */ (function () {
    function ChapOrderComponent(repository, cart, router) {
        this.repository = repository;
        this.cart = cart;
        this.router = router;
        this.selectedCategory = null;
    }
    Object.defineProperty(ChapOrderComponent.prototype, "products", {
        get: function () {
            return this.repository.getProducts(this.selectedCategory);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChapOrderComponent.prototype, "categories", {
        get: function () {
            return this.repository.getCategories();
        },
        enumerable: true,
        configurable: true
    });
    ChapOrderComponent.prototype.changeCategory = function (newCategory) {
        this.selectedCategory = newCategory;
    };
    ChapOrderComponent.prototype.addProductToCart = function (product) {
        this.cart.addLine(product);
        this.router.navigateByUrl('/cartdetail');
    };
    ChapOrderComponent.prototype.ngOnInit = function () {
    };
    return ChapOrderComponent;
}());



/***/ }),

/***/ "./src/app/chap-pie/chap-pie.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/chap-pie/chap-pie.component.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RenderType_ChapPieComponent, View_ChapPieComponent_0, View_ChapPieComponent_Host_0, ChapPieComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChapPieComponent", function() { return RenderType_ChapPieComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapPieComponent_0", function() { return View_ChapPieComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapPieComponent_Host_0", function() { return View_ChapPieComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapPieComponentNgFactory", function() { return ChapPieComponentNgFactory; });
/* harmony import */ var _chap_pie_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chap-pie.component.scss.shim.ngstyle */ "./src/app/chap-pie/chap-pie.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_highcharts_angular_highcharts_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/highcharts-angular/highcharts-angular.ngfactory */ "./node_modules/highcharts-angular/highcharts-angular.ngfactory.js");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm5/highcharts-angular.js");
/* harmony import */ var _chap_pie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chap-pie.component */ "./src/app/chap-pie/chap-pie.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_ChapPieComponent = [_chap_pie_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChapPieComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChapPieComponent, data: {} });

function View_ChapPieComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "highcharts-chart", [["style", "width: 100%; height:400px; display: block;"]], null, null, null, _node_modules_highcharts_angular_highcharts_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HighchartsChartComponent_0"], _node_modules_highcharts_angular_highcharts_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HighchartsChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, highcharts_angular__WEBPACK_IMPORTED_MODULE_3__["HighchartsChartComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { Highcharts: [0, "Highcharts"], options: [1, "options"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.Highcharts; var currVal_1 = _co.chartOptions; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ChapPieComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-pie", [], null, null, null, View_ChapPieComponent_0, RenderType_ChapPieComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chap_pie_component__WEBPACK_IMPORTED_MODULE_4__["ChapPieComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChapPieComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-chap-pie", _chap_pie_component__WEBPACK_IMPORTED_MODULE_4__["ChapPieComponent"], View_ChapPieComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/chap-pie/chap-pie.component.scss.shim.ngstyle.js":
/*!******************************************************************!*\
  !*** ./src/app/chap-pie/chap-pie.component.scss.shim.ngstyle.js ***!
  \******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/chap-pie/chap-pie.component.ts":
/*!************************************************!*\
  !*** ./src/app/chap-pie/chap-pie.component.ts ***!
  \************************************************/
/*! exports provided: ChapPieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapPieComponent", function() { return ChapPieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);


var HC_exporting = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
var HC_sl = __webpack_require__(/*! highcharts/modules/series-label */ "./node_modules/highcharts/modules/series-label.js");
var HC_drill = __webpack_require__(/*! highcharts/modules/drilldown */ "./node_modules/highcharts/modules/drilldown.js");
var HC_exportdata = __webpack_require__(/*! highcharts/modules/export-data */ "./node_modules/highcharts/modules/export-data.js");
HC_exporting(highcharts__WEBPACK_IMPORTED_MODULE_1__);
HC_sl(highcharts__WEBPACK_IMPORTED_MODULE_1__);
HC_drill(highcharts__WEBPACK_IMPORTED_MODULE_1__);
HC_exportdata(highcharts__WEBPACK_IMPORTED_MODULE_1__);
var ChapPieComponent = /** @class */ (function () {
    function ChapPieComponent() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.chartOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Product Sales by category'
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
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'sunNorth',
                        data: [
                            ['North East', 30],
                            ['North Central', 25],
                            ['West Nile', 19],
                        ]
                    }, {
                        id: 'sunEast',
                        data: [
                            ['East', 30],
                            ['Central', 25],
                            ['West', 19],
                        ]
                    }, {
                        id: 'sunWest',
                        data: [
                            ['South', 30],
                            ['North', 25],
                            ['Central', 19],
                        ]
                    }, {
                        id: 'sunCentral',
                        data: [
                            ['North', 30],
                            ['Central', 25],
                            ['South', 19],
                        ]
                    }, {
                        id: 'omo',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'sunNorth',
                        data: [
                            ['North East', 30],
                            ['North Central', 25],
                            ['West Nile', 19],
                        ]
                    }, {
                        id: 'sunEast',
                        data: [
                            ['East', 30],
                            ['Central', 25],
                            ['West', 19],
                        ]
                    }, {
                        id: 'sunWest',
                        data: [
                            ['South', 30],
                            ['North', 25],
                            ['Central', 19],
                        ]
                    }, {
                        id: 'sunCentral',
                        data: [
                            ['North', 30],
                            ['Central', 25],
                            ['South', 19],
                        ]
                    }, {
                        id: 'vim',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'clear',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'comfort',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'domex',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'rin',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
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
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'closeUp',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'dove',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'fair',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'lifebouy',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'lux',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'rexona',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'sure',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'vaseline',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
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
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'knorr',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'kissan',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'blueband',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'brucoffee',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'pikwa',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }
                ],
            }
        };
    }
    ChapPieComponent.prototype.ngOnInit = function () {
    };
    return ChapPieComponent;
}());



/***/ }),

/***/ "./src/app/chap-products/chap-products.component.ngfactory.js":
/*!********************************************************************!*\
  !*** ./src/app/chap-products/chap-products.component.ngfactory.js ***!
  \********************************************************************/
/*! exports provided: RenderType_ChapProductsComponent, View_ChapProductsComponent_0, View_ChapProductsComponent_Host_0, ChapProductsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChapProductsComponent", function() { return RenderType_ChapProductsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapProductsComponent_0", function() { return View_ChapProductsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapProductsComponent_Host_0", function() { return View_ChapProductsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapProductsComponentNgFactory", function() { return ChapProductsComponentNgFactory; });
/* harmony import */ var _chap_products_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chap-products.component.scss.shim.ngstyle */ "./src/app/chap-products/chap-products.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/material/list/typings/index.ngfactory */ "./node_modules/@angular/material/list/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@angular/material/card/typings/index.ngfactory */ "./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../chap-nav/chap-nav.component.ngfactory */ "./src/app/chap-nav/chap-nav.component.ngfactory.js");
/* harmony import */ var _chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../chap-nav/chap-nav.component */ "./src/app/chap-nav/chap-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _prod_dashboard_prod_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../prod-dashboard/prod-dashboard.component.ngfactory */ "./src/app/prod-dashboard/prod-dashboard.component.ngfactory.js");
/* harmony import */ var _prod_dashboard_prod_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../prod-dashboard/prod-dashboard.component */ "./src/app/prod-dashboard/prod-dashboard.component.ts");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _chap_products_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./chap-products.component */ "./src/app/chap-products/chap-products.component.ts");
/* harmony import */ var _model_product_repository__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../model/product.repository */ "./src/app/model/product.repository.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 























var styles_ChapProductsComponent = [_chap_products_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChapProductsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChapProductsComponent, data: {} });

function View_ChapProductsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](9, 4), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, [" ", " Units"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 6, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 3, "button", [["class", "btn btn-sm btn-warning"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](15, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Edit "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "button", [["class", "btn btn-sm btn-danger ml-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Delete "]))], function (_ck, _v) { var currVal_5 = _ck(_v, 15, 0, "/admin/main/products/edit", _v.context.$implicit.id); _ck(_v, 14, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.id; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.name; _ck(_v, 4, 0, currVal_1); var currVal_2 = _v.context.$implicit.category; _ck(_v, 6, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _ck(_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.price, "UGX", "symbol", "2.2-2")); _ck(_v, 8, 0, currVal_3); var currVal_4 = _v.context.$implicit.units; _ck(_v, 11, 0, currVal_4); }); }
function View_ChapProductsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "mat-list-item", [["class", "mat-list-item"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], [[null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("focus" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleFocus() !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleBlur() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1097728, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatNavList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _lines: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { _avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { _icon: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 2, 12, "mat-card", [["class", "mb-1 mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 3, "mat-icon", [["class", "mat-icon mat-list-icon"], ["mat-list-icon", ""], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], { color: [0, "color"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, [[3, 4]], 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListIconCssMatStyler"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, 0, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 0, "span", [["class", "details-spacer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 2, "span", [["class", "quick-details mat-line"], ["mat-line", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatLine"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 2, "span", [["class", "quick-details mat-line"], ["mat-line", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatLine"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, [" ", " "]))], function (_ck, _v) { var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.card_color, ""); _ck(_v, 8, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._icon); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._icon); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).inline; _ck(_v, 7, 0, currVal_2); var currVal_4 = _v.context.$implicit.card_icon; _ck(_v, 10, 0, currVal_4); var currVal_5 = _v.context.$implicit.name; _ck(_v, 14, 0, currVal_5); var currVal_6 = _v.context.$implicit.status; _ck(_v, 17, 0, currVal_6); }); }
function View_ChapProductsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-chap-nav", [], null, null, null, _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_ChapNavComponent_0"], _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_ChapNavComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_12__["ChapNavComponent"], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__["BreakpointObserver"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 44, "mat-card", [["class", "grid-container mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 3, "nav", [["aria-label", "breadcrumb"], ["class", "mt-2 mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "ol", [["class", "breadcrumb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "li", [["aria-current", "page"], ["class", "breadcrumb-item active mat-h1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Products "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 1, "app-prod-dashboard", [], null, null, null, _prod_dashboard_prod_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_ProdDashboardComponent_0"], _prod_dashboard_prod_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_ProdDashboardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, null, 0, _prod_dashboard_prod_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["ProdDashboardComponent"], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__["BreakpointObserver"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 36, "div", [["class", "row mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 26, "div", [["class", "col-md-7"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 19, "table", [["class", "table table-sm table-striped"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 15, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "th", [["class", "chap-red display2 font-weight-bold"], ["colspan", "4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Products "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 11, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ID"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Category"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Price"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Stock:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChapProductsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 5, "button", [["mat-mini-fab", ""], ["routerLink", "/editproduct"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["add"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 8, "div", [["class", "col-md-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 7, "mat-card", [["class", "mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, 0, 3, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "span", [["class", "font-weight-bold chap-red pl-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Quick Details"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ChapProductsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getProducts(); _ck(_v, 32, 0, currVal_0); var currVal_3 = "/editproduct"; _ck(_v, 35, 0, currVal_3); _ck(_v, 37, 0); var currVal_5 = _co.details; _ck(_v, 47, 0, currVal_5); }, function (_ck, _v) { var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).disabled || null); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._animationMode === "NoopAnimations"); _ck(_v, 33, 0, currVal_1, currVal_2); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).inline; _ck(_v, 36, 0, currVal_4); }); }
function View_ChapProductsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-products", [], null, null, null, View_ChapProductsComponent_0, RenderType_ChapProductsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chap_products_component__WEBPACK_IMPORTED_MODULE_21__["ChapProductsComponent"], [_model_product_repository__WEBPACK_IMPORTED_MODULE_22__["ProductRepository"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChapProductsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-chap-products", _chap_products_component__WEBPACK_IMPORTED_MODULE_21__["ChapProductsComponent"], View_ChapProductsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/chap-products/chap-products.component.scss.shim.ngstyle.js":
/*!****************************************************************************!*\
  !*** ./src/app/chap-products/chap-products.component.scss.shim.ngstyle.js ***!
  \****************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".grid-container[_ngcontent-%COMP%] {\n  margin-left: 200px; }\n\n.quick-details[_ngcontent-%COMP%] {\n  padding: 0 28px; }\n\n.details-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto; }"];



/***/ }),

/***/ "./src/app/chap-products/chap-products.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/chap-products/chap-products.component.ts ***!
  \**********************************************************/
/*! exports provided: ChapProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapProductsComponent", function() { return ChapProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_product_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/product.repository */ "./src/app/model/product.repository.ts");


var ChapProductsComponent = /** @class */ (function () {
    function ChapProductsComponent(repository) {
        this.repository = repository;
        this.details = [
            {
                name: 'Last 24 Hours',
                status: '290 new retailers',
                card_icon: 'person_add',
                card_color: 'primary'
            },
            {
                name: 'Awaiting Process',
                status: '234 orders',
                card_icon: 'sync',
                card_color: 'primary'
            },
            {
                name: 'On hold',
                status: '120 orders',
                card_icon: 'timer',
                card_color: 'accent'
            },
            {
                name: 'Low in Stock',
                status: '490 orders',
                card_icon: 'error',
                card_color: 'primary'
            },
            {
                name: 'Out of Stock',
                status: '42 items',
                card_icon: 'cancel',
                card_color: 'warn'
            }
        ];
    }
    ChapProductsComponent.prototype.getProducts = function () {
        return this.repository.getProducts();
    };
    /*
    deleteProduct(id: number) {
      this.repository.deleteProduct(id);
    }
    */
    ChapProductsComponent.prototype.ngOnInit = function () {
    };
    return ChapProductsComponent;
}());



/***/ }),

/***/ "./src/app/chap-productsales/chap-productsales.component.ngfactory.js":
/*!****************************************************************************!*\
  !*** ./src/app/chap-productsales/chap-productsales.component.ngfactory.js ***!
  \****************************************************************************/
/*! exports provided: RenderType_ChapProductsalesComponent, View_ChapProductsalesComponent_0, View_ChapProductsalesComponent_Host_0, ChapProductsalesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChapProductsalesComponent", function() { return RenderType_ChapProductsalesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapProductsalesComponent_0", function() { return View_ChapProductsalesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapProductsalesComponent_Host_0", function() { return View_ChapProductsalesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapProductsalesComponentNgFactory", function() { return ChapProductsalesComponentNgFactory; });
/* harmony import */ var _chap_productsales_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chap-productsales.component.scss.shim.ngstyle */ "./src/app/chap-productsales/chap-productsales.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_highcharts_angular_highcharts_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/highcharts-angular/highcharts-angular.ngfactory */ "./node_modules/highcharts-angular/highcharts-angular.ngfactory.js");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm5/highcharts-angular.js");
/* harmony import */ var _chap_productsales_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chap-productsales.component */ "./src/app/chap-productsales/chap-productsales.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_ChapProductsalesComponent = [_chap_productsales_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChapProductsalesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChapProductsalesComponent, data: {} });

function View_ChapProductsalesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "highcharts-chart", [["style", "width: 100%; height:400px; display: block;"]], null, null, null, _node_modules_highcharts_angular_highcharts_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HighchartsChartComponent_0"], _node_modules_highcharts_angular_highcharts_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HighchartsChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, highcharts_angular__WEBPACK_IMPORTED_MODULE_3__["HighchartsChartComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { Highcharts: [0, "Highcharts"], options: [1, "options"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.Highcharts; var currVal_1 = _co.chartOptions; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ChapProductsalesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-productsales", [], null, null, null, View_ChapProductsalesComponent_0, RenderType_ChapProductsalesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chap_productsales_component__WEBPACK_IMPORTED_MODULE_4__["ChapProductsalesComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChapProductsalesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-chap-productsales", _chap_productsales_component__WEBPACK_IMPORTED_MODULE_4__["ChapProductsalesComponent"], View_ChapProductsalesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/chap-productsales/chap-productsales.component.scss.shim.ngstyle.js":
/*!************************************************************************************!*\
  !*** ./src/app/chap-productsales/chap-productsales.component.scss.shim.ngstyle.js ***!
  \************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/chap-productsales/chap-productsales.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/chap-productsales/chap-productsales.component.ts ***!
  \******************************************************************/
/*! exports provided: ChapProductsalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapProductsalesComponent", function() { return ChapProductsalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);


var HC_exporting = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
var HC_sl = __webpack_require__(/*! highcharts/modules/series-label */ "./node_modules/highcharts/modules/series-label.js");
var HC_drill = __webpack_require__(/*! highcharts/modules/drilldown */ "./node_modules/highcharts/modules/drilldown.js");
var HC_exportdata = __webpack_require__(/*! highcharts/modules/export-data */ "./node_modules/highcharts/modules/export-data.js");
HC_exporting(highcharts__WEBPACK_IMPORTED_MODULE_1__);
HC_sl(highcharts__WEBPACK_IMPORTED_MODULE_1__);
HC_drill(highcharts__WEBPACK_IMPORTED_MODULE_1__);
HC_exportdata(highcharts__WEBPACK_IMPORTED_MODULE_1__);
var ChapProductsalesComponent = /** @class */ (function () {
    function ChapProductsalesComponent() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.chartOptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Product Sales by category'
            },
            xAxis: {
                type: 'category'
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true
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
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'sunNorth',
                        data: [
                            ['North East', 30],
                            ['North Central', 25],
                            ['West Nile', 19],
                        ]
                    }, {
                        id: 'sunEast',
                        data: [
                            ['East', 30],
                            ['Central', 25],
                            ['West', 19],
                        ]
                    }, {
                        id: 'sunWest',
                        data: [
                            ['South', 30],
                            ['North', 25],
                            ['Central', 19],
                        ]
                    }, {
                        id: 'sunCentral',
                        data: [
                            ['North', 30],
                            ['Central', 25],
                            ['South', 19],
                        ]
                    }, {
                        id: 'omo',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'vim',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'clear',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'comfort',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'domex',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'rin',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
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
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'closeUp',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'dove',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'fair',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'lifebouy',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'lux',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'rexona',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'sure',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'vaseline',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
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
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'knorr',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'kissan',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'blueband',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'brucoffee',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }, {
                        id: 'pikwa',
                        data: [
                            {
                                name: 'North',
                                y: 74,
                                drilldown: 'sunNorth'
                            }, {
                                name: 'East',
                                y: 62,
                                drilldown: 'sunEast'
                            }, {
                                name: 'Central',
                                y: 51,
                                drilldown: 'sunCentral'
                            }, {
                                name: 'West',
                                y: 44,
                                drilldown: 'sunWest'
                            }
                        ]
                    }
                ],
            }
        };
    }
    ChapProductsalesComponent.prototype.ngOnInit = function () {
    };
    return ChapProductsalesComponent;
}());



/***/ }),

/***/ "./src/app/chap-salesgrowth/chap-salesgrowth.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/chap-salesgrowth/chap-salesgrowth.component.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: RenderType_ChapSalesgrowthComponent, View_ChapSalesgrowthComponent_0, View_ChapSalesgrowthComponent_Host_0, ChapSalesgrowthComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChapSalesgrowthComponent", function() { return RenderType_ChapSalesgrowthComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapSalesgrowthComponent_0", function() { return View_ChapSalesgrowthComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapSalesgrowthComponent_Host_0", function() { return View_ChapSalesgrowthComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapSalesgrowthComponentNgFactory", function() { return ChapSalesgrowthComponentNgFactory; });
/* harmony import */ var _chap_salesgrowth_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chap-salesgrowth.component.scss.shim.ngstyle */ "./src/app/chap-salesgrowth/chap-salesgrowth.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_highcharts_angular_highcharts_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/highcharts-angular/highcharts-angular.ngfactory */ "./node_modules/highcharts-angular/highcharts-angular.ngfactory.js");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm5/highcharts-angular.js");
/* harmony import */ var _chap_salesgrowth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chap-salesgrowth.component */ "./src/app/chap-salesgrowth/chap-salesgrowth.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_ChapSalesgrowthComponent = [_chap_salesgrowth_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChapSalesgrowthComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChapSalesgrowthComponent, data: {} });

function View_ChapSalesgrowthComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "highcharts-chart", [["style", "width: 100%; height:400px; display: block;"]], null, null, null, _node_modules_highcharts_angular_highcharts_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HighchartsChartComponent_0"], _node_modules_highcharts_angular_highcharts_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HighchartsChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, highcharts_angular__WEBPACK_IMPORTED_MODULE_3__["HighchartsChartComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { Highcharts: [0, "Highcharts"], options: [1, "options"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.Distributor; var currVal_1 = _co.distOptions; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ChapSalesgrowthComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-salesgrowth", [], null, null, null, View_ChapSalesgrowthComponent_0, RenderType_ChapSalesgrowthComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chap_salesgrowth_component__WEBPACK_IMPORTED_MODULE_4__["ChapSalesgrowthComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChapSalesgrowthComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-chap-salesgrowth", _chap_salesgrowth_component__WEBPACK_IMPORTED_MODULE_4__["ChapSalesgrowthComponent"], View_ChapSalesgrowthComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/chap-salesgrowth/chap-salesgrowth.component.scss.shim.ngstyle.js":
/*!**********************************************************************************!*\
  !*** ./src/app/chap-salesgrowth/chap-salesgrowth.component.scss.shim.ngstyle.js ***!
  \**********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/chap-salesgrowth/chap-salesgrowth.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/chap-salesgrowth/chap-salesgrowth.component.ts ***!
  \****************************************************************/
/*! exports provided: ChapSalesgrowthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapSalesgrowthComponent", function() { return ChapSalesgrowthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);


var HC_exporting = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
var HC_sl = __webpack_require__(/*! highcharts/modules/series-label */ "./node_modules/highcharts/modules/series-label.js");
var HC_drill = __webpack_require__(/*! highcharts/modules/drilldown */ "./node_modules/highcharts/modules/drilldown.js");
var HC_exportdata = __webpack_require__(/*! highcharts/modules/export-data */ "./node_modules/highcharts/modules/export-data.js");
HC_exporting(highcharts__WEBPACK_IMPORTED_MODULE_1__);
HC_sl(highcharts__WEBPACK_IMPORTED_MODULE_1__);
HC_drill(highcharts__WEBPACK_IMPORTED_MODULE_1__);
HC_exportdata(highcharts__WEBPACK_IMPORTED_MODULE_1__);
var ChapSalesgrowthComponent = /** @class */ (function () {
    function ChapSalesgrowthComponent() {
        this.Distributor = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.distOptions = {
            title: {
                text: 'Product Sales Growth by regions, 2010-2016',
                style: {
                    color: '#F73233'
                }
            },
            subtitle: {
                text: 'Source: the Unilever Distributors chart'
            },
            yAxis: {
                title: {
                    text: 'Distributors over different products'
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
    ChapSalesgrowthComponent.prototype.ngOnInit = function () {
    };
    return ChapSalesgrowthComponent;
}());



/***/ }),

/***/ "./src/app/chap-settings/chap-settings.component.ngfactory.js":
/*!********************************************************************!*\
  !*** ./src/app/chap-settings/chap-settings.component.ngfactory.js ***!
  \********************************************************************/
/*! exports provided: RenderType_ChapSettingsComponent, View_ChapSettingsComponent_0, View_ChapSettingsComponent_Host_0, ChapSettingsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChapSettingsComponent", function() { return RenderType_ChapSettingsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapSettingsComponent_0", function() { return View_ChapSettingsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapSettingsComponent_Host_0", function() { return View_ChapSettingsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapSettingsComponentNgFactory", function() { return ChapSettingsComponentNgFactory; });
/* harmony import */ var _chap_settings_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chap-settings.component.scss.shim.ngstyle */ "./src/app/chap-settings/chap-settings.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/material/card/typings/index.ngfactory */ "./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../chap-nav/chap-nav.component.ngfactory */ "./src/app/chap-nav/chap-nav.component.ngfactory.js");
/* harmony import */ var _chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../chap-nav/chap-nav.component */ "./src/app/chap-nav/chap-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chap_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./chap-settings.component */ "./src/app/chap-settings/chap-settings.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var styles_ChapSettingsComponent = [_chap_settings_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChapSettingsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChapSettingsComponent, data: {} });

function View_ChapSettingsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "mat-card", [["class", " card my-2 mx-5 py-4 px-4 mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 10, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "col-md-2 text-center pl-4 pt-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "mat-icon", [["class", "mat-icon mat-list-icon"], ["mat-list-icon", ""], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListIconCssMatStyler"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, 0, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "div", [["class", "col-md-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "h5", [["class", "mt-0 chap-red font-weight-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, [" ", " "]))], function (_ck, _v) { _ck(_v, 5, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).inline; _ck(_v, 4, 0, currVal_0); var currVal_1 = _v.context.$implicit.icon; _ck(_v, 7, 0, currVal_1); var currVal_2 = _v.context.$implicit.title; _ck(_v, 10, 0, currVal_2); var currVal_3 = _v.context.$implicit.sub; _ck(_v, 12, 0, currVal_3); }); }
function View_ChapSettingsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "mat-card", [["class", " card my-2 mx-2 py-4 px-4 mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 10, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "col-md-2 text-center pl-4 pt-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "mat-icon", [["class", "mat-icon mat-list-icon"], ["mat-list-icon", ""], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListIconCssMatStyler"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, 0, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "div", [["class", "col-md-6 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "h5", [["class", "mt-0 chap-red font-weight-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "p", [["class", "card-text color-green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, [" ", " "]))], function (_ck, _v) { _ck(_v, 5, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).inline; _ck(_v, 4, 0, currVal_0); var currVal_1 = _v.context.$implicit.icon; _ck(_v, 7, 0, currVal_1); var currVal_2 = _v.context.$implicit.title; _ck(_v, 10, 0, currVal_2); var currVal_3 = _v.context.$implicit.sub; _ck(_v, 12, 0, currVal_3); }); }
function View_ChapSettingsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-nav", [], null, null, null, _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ChapNavComponent_0"], _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ChapNavComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_8__["ChapNavComponent"], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 27, "mat-card", [["class", "mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 25, "mat-card", [["class", "grid-container mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 3, "nav", [["aria-label", "breadcrumb"], ["class", "mt-2 mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "ol", [["class", "breadcrumb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "li", [["aria-current", "page"], ["class", "breadcrumb-item active mat-h1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Settings "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 19, "mat-card", [["class", "card ml-4 mb-2 mat-card"], ["style", "width: 60rem;"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 6, "div", [["class", "media card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "img", [["alt", "chapchap logo"], ["class", "align-self-center mr-3"], ["height", "120"], ["src", "../../assets/img/chapchaplogo.png"], ["width", "120"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 4, "div", [["class", "media-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "h4", [["class", "mt-0 chap-red display-4 font-weight-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" ChapChap Manufacturer "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Enhance Your Business "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 0, 3, "button", [["mat-raised-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.changeTheme() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 0, 1, "span", [["class", "chap-red "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Change theme "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, 0, 6, "div", [["class", "row card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 2, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChapSettingsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 2, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChapSettingsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.first; _ck(_v, 26, 0, currVal_2); var currVal_3 = _co.second; _ck(_v, 29, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20)._animationMode === "NoopAnimations"); _ck(_v, 19, 0, currVal_0, currVal_1); }); }
function View_ChapSettingsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-settings", [], null, null, null, View_ChapSettingsComponent_0, RenderType_ChapSettingsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chap_settings_component__WEBPACK_IMPORTED_MODULE_16__["ChapSettingsComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChapSettingsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-chap-settings", _chap_settings_component__WEBPACK_IMPORTED_MODULE_16__["ChapSettingsComponent"], View_ChapSettingsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/chap-settings/chap-settings.component.scss.shim.ngstyle.js":
/*!****************************************************************************!*\
  !*** ./src/app/chap-settings/chap-settings.component.scss.shim.ngstyle.js ***!
  \****************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".grid-container[_ngcontent-%COMP%] {\n  margin-left: 210px; }"];



/***/ }),

/***/ "./src/app/chap-settings/chap-settings.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/chap-settings/chap-settings.component.ts ***!
  \**********************************************************/
/*! exports provided: ChapSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapSettingsComponent", function() { return ChapSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ChapSettingsComponent = /** @class */ (function () {
    function ChapSettingsComponent() {
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
                sub: '256752000000',
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
                title: 'Data Usage',
                sub: 'Internet',
                icon: 'donut_large'
            },
            {
                title: 'Enable Pin',
                sub: 'Not set',
                icon: 'lock_open'
            },
            {
                title: 'Update',
                sub: 'Version 1.0.0',
                icon: 'stay_current_portrait'
            }
        ];
    }
    ChapSettingsComponent.prototype.changeTheme = function () {
        if (document.body.classList.contains('chapchap-light-theme')) {
            document.body.classList.remove('chapchap-light-theme');
            document.body.classList.add('chapchap-dark-theme');
        }
        else {
            document.body.classList.remove('chapchap-dark-theme');
            document.body.classList.add('chapchap-light-theme');
        }
    };
    ChapSettingsComponent.prototype.ngOnInit = function () {
    };
    return ChapSettingsComponent;
}());



/***/ }),

/***/ "./src/app/chap-statistics/chap-statistics.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/chap-statistics/chap-statistics.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_ChapStatisticsComponent, View_ChapStatisticsComponent_0, View_ChapStatisticsComponent_Host_0, ChapStatisticsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChapStatisticsComponent", function() { return RenderType_ChapStatisticsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapStatisticsComponent_0", function() { return View_ChapStatisticsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapStatisticsComponent_Host_0", function() { return View_ChapStatisticsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapStatisticsComponentNgFactory", function() { return ChapStatisticsComponentNgFactory; });
/* harmony import */ var _chap_statistics_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chap-statistics.component.scss.shim.ngstyle */ "./src/app/chap-statistics/chap-statistics.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chap-nav/chap-nav.component.ngfactory */ "./src/app/chap-nav/chap-nav.component.ngfactory.js");
/* harmony import */ var _chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chap-nav/chap-nav.component */ "./src/app/chap-nav/chap-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@angular/material/card/typings/index.ngfactory */ "./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _chap_productsales_chap_productsales_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../chap-productsales/chap-productsales.component.ngfactory */ "./src/app/chap-productsales/chap-productsales.component.ngfactory.js");
/* harmony import */ var _chap_productsales_chap_productsales_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../chap-productsales/chap-productsales.component */ "./src/app/chap-productsales/chap-productsales.component.ts");
/* harmony import */ var _chap_salesgrowth_chap_salesgrowth_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../chap-salesgrowth/chap-salesgrowth.component.ngfactory */ "./src/app/chap-salesgrowth/chap-salesgrowth.component.ngfactory.js");
/* harmony import */ var _chap_salesgrowth_chap_salesgrowth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../chap-salesgrowth/chap-salesgrowth.component */ "./src/app/chap-salesgrowth/chap-salesgrowth.component.ts");
/* harmony import */ var _chap_pie_chap_pie_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../chap-pie/chap-pie.component.ngfactory */ "./src/app/chap-pie/chap-pie.component.ngfactory.js");
/* harmony import */ var _chap_pie_chap_pie_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../chap-pie/chap-pie.component */ "./src/app/chap-pie/chap-pie.component.ts");
/* harmony import */ var _chap_statistics_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chap-statistics.component */ "./src/app/chap-statistics/chap-statistics.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_ChapStatisticsComponent = [_chap_statistics_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChapStatisticsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChapStatisticsComponent, data: {} });

function View_ChapStatisticsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-nav", [], null, null, null, _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ChapNavComponent_0"], _chap_nav_chap_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ChapNavComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _chap_nav_chap_nav_component__WEBPACK_IMPORTED_MODULE_3__["ChapNavComponent"], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 19, "mat-card", [["class", "grid-container mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 3, "nav", [["aria-label", "breadcrumb"], ["class", "mt-2 mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "ol", [["class", "breadcrumb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "li", [["aria-current", "page"], ["class", "breadcrumb-item active mat-h1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Statistics "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 3, "mat-card", [["class", "mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 1, "app-chap-productsales", [], null, null, null, _chap_productsales_chap_productsales_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ChapProductsalesComponent_0"], _chap_productsales_chap_productsales_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ChapProductsalesComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 114688, null, 0, _chap_productsales_chap_productsales_component__WEBPACK_IMPORTED_MODULE_8__["ChapProductsalesComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 0, 3, "mat-card", [["class", "mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 1, "app-chap-salesgrowth", [], null, null, null, _chap_salesgrowth_chap_salesgrowth_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ChapSalesgrowthComponent_0"], _chap_salesgrowth_chap_salesgrowth_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ChapSalesgrowthComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 114688, null, 0, _chap_salesgrowth_chap_salesgrowth_component__WEBPACK_IMPORTED_MODULE_10__["ChapSalesgrowthComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 3, "mat-card", [["class", "mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 1, "app-chap-pie", [], null, null, null, _chap_pie_chap_pie_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_ChapPieComponent_0"], _chap_pie_chap_pie_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_ChapPieComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 114688, null, 0, _chap_pie_chap_pie_component__WEBPACK_IMPORTED_MODULE_12__["ChapPieComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 11, 0); _ck(_v, 16, 0); _ck(_v, 21, 0); }, null); }
function View_ChapStatisticsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chap-statistics", [], null, null, null, View_ChapStatisticsComponent_0, RenderType_ChapStatisticsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chap_statistics_component__WEBPACK_IMPORTED_MODULE_13__["ChapStatisticsComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChapStatisticsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-chap-statistics", _chap_statistics_component__WEBPACK_IMPORTED_MODULE_13__["ChapStatisticsComponent"], View_ChapStatisticsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/chap-statistics/chap-statistics.component.scss.shim.ngstyle.js":
/*!********************************************************************************!*\
  !*** ./src/app/chap-statistics/chap-statistics.component.scss.shim.ngstyle.js ***!
  \********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".grid-container[_ngcontent-%COMP%] {\n  margin-left: 200px; }"];



/***/ }),

/***/ "./src/app/chap-statistics/chap-statistics.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/chap-statistics/chap-statistics.component.ts ***!
  \**************************************************************/
/*! exports provided: ChapStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapStatisticsComponent", function() { return ChapStatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ChapStatisticsComponent = /** @class */ (function () {
    function ChapStatisticsComponent() {
    }
    ChapStatisticsComponent.prototype.ngOnInit = function () {
    };
    return ChapStatisticsComponent;
}());



/***/ }),

/***/ "./src/app/chapug-map/chapug-map.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/chapug-map/chapug-map.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_ChapugMapComponent, View_ChapugMapComponent_0, View_ChapugMapComponent_Host_0, ChapugMapComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChapugMapComponent", function() { return RenderType_ChapugMapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapugMapComponent_0", function() { return View_ChapugMapComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChapugMapComponent_Host_0", function() { return View_ChapugMapComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapugMapComponentNgFactory", function() { return ChapugMapComponentNgFactory; });
/* harmony import */ var _chapug_map_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chapug-map.component.scss.shim.ngstyle */ "./src/app/chapug-map/chapug-map.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_highcharts_angular_highcharts_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/highcharts-angular/highcharts-angular.ngfactory */ "./node_modules/highcharts-angular/highcharts-angular.ngfactory.js");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm5/highcharts-angular.js");
/* harmony import */ var _chapug_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chapug-map.component */ "./src/app/chapug-map/chapug-map.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_ChapugMapComponent = [_chapug_map_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChapugMapComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChapugMapComponent, data: {} });

function View_ChapugMapComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "highcharts-chart", [["style", "width: 100%; height: 400px; display: block;"]], null, null, null, _node_modules_highcharts_angular_highcharts_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HighchartsChartComponent_0"], _node_modules_highcharts_angular_highcharts_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HighchartsChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, highcharts_angular__WEBPACK_IMPORTED_MODULE_3__["HighchartsChartComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { Highcharts: [0, "Highcharts"], constructorType: [1, "constructorType"], options: [2, "options"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.Highcharts; var currVal_1 = "mapChart"; var currVal_2 = _co.chartOptions; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_ChapugMapComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chapug-map", [], null, null, null, View_ChapugMapComponent_0, RenderType_ChapugMapComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chapug_map_component__WEBPACK_IMPORTED_MODULE_4__["ChapugMapComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChapugMapComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-chapug-map", _chapug_map_component__WEBPACK_IMPORTED_MODULE_4__["ChapugMapComponent"], View_ChapugMapComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/chapug-map/chapug-map.component.scss.shim.ngstyle.js":
/*!**********************************************************************!*\
  !*** ./src/app/chapug-map/chapug-map.component.scss.shim.ngstyle.js ***!
  \**********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/chapug-map/chapug-map.component.ts":
/*!****************************************************!*\
  !*** ./src/app/chapug-map/chapug-map.component.ts ***!
  \****************************************************/
/*! exports provided: ChapugMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapugMapComponent", function() { return ChapugMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/highmaps */ "./node_modules/highcharts/highmaps.js");
/* harmony import */ var highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1__);


__webpack_require__(/*! ../../assets/js/ug-all */ "./src/assets/js/ug-all.js")(highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1__);
var HC_exporting = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
var HC_exportdata = __webpack_require__(/*! highcharts/modules/export-data */ "./node_modules/highcharts/modules/export-data.js");
HC_exporting(highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1__);
HC_exportdata(highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1__);
var ChapugMapComponent = /** @class */ (function () {
    function ChapugMapComponent() {
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
            ['ug-2747', 101],
            ['ug-2751', 102],
            ['ug-2758', 103],
            ['ug-2759', 104],
            ['ug-2756', 105],
            ['ug-2770', 106],
            ['ug-7072', 107],
            ['ug-7053', 108],
            ['ug-2753', 109],
            ['ug-2755', 110],
            ['ug-2773', 111]
        ];
        this.Highcharts = highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1__;
        this.chartConstructor = 'mapChart';
        this.chartOptions = {
            chart: {
                map: 'countries/ug/ug-all'
            },
            title: {
                text: 'Real time Sales of Retailers',
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
                    name: 'Stock of retailers',
                    states: {
                        hover: {
                            color: '#0000FF'
                        }
                    }
                }]
        };
    }
    ChapugMapComponent.prototype.ngOnInit = function () {
    };
    return ChapugMapComponent;
}());



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/model/cart.model.ts":
/*!*************************************!*\
  !*** ./src/app/model/cart.model.ts ***!
  \*************************************/
/*! exports provided: Cart, CartLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartLine", function() { return CartLine; });
var Cart = /** @class */ (function () {
    function Cart() {
        this.lines = [];
    }
    Cart.prototype.addLine = function (product, quantity) {
        if (quantity === void 0) { quantity = 1; }
        var line = this.lines.find(function (line) { return line.product.id === product.id; });
        if (line !== undefined) {
            line.quantity += quantity;
        }
        else {
            this.lines.push(new CartLine(product, quantity));
        }
        this.recalculate();
    };
    Cart.prototype.updateQuantity = function (product, quantity) {
        var line = this.lines.find(function (line) { return line.product.id === product.id; });
        if (line !== undefined) {
            line.quantity = Number(quantity);
        }
        this.recalculate();
    };
    Cart.prototype.removeLine = function (id) {
        var index = this.lines.findIndex(function (line) { return line.product.id === id; });
        this.lines.splice(index, 1);
        this.recalculate();
    };
    Cart.prototype.clear = function () {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    };
    Cart.prototype.recalculate = function () {
        var _this = this;
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(function (l) {
            _this.itemCount += l.quantity;
            _this.cartPrice += (l.quantity * l.product.price);
        });
    };
    return Cart;
}());

var CartLine = /** @class */ (function () {
    function CartLine(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    Object.defineProperty(CartLine.prototype, "lineTotal", {
        get: function () {
            return this.quantity * this.product.price;
        },
        enumerable: true,
        configurable: true
    });
    return CartLine;
}());



/***/ }),

/***/ "./src/app/model/model.module.ts":
/*!***************************************!*\
  !*** ./src/app/model/model.module.ts ***!
  \***************************************/
/*! exports provided: ModelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelModule", function() { return ModelModule; });
var ModelModule = /** @class */ (function () {
    function ModelModule() {
    }
    return ModelModule;
}());



/***/ }),

/***/ "./src/app/model/order.model.ts":
/*!**************************************!*\
  !*** ./src/app/model/order.model.ts ***!
  \**************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var _cart_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.model */ "./src/app/model/cart.model.ts");

var Order = /** @class */ (function () {
    function Order(cart) {
        this.cart = cart;
    }
    Order.prototype.clear = function () {
        this.id = null;
        this.name = this.address = this.city = null;
        this.state = this.zip = this.country = null;
        this.shipped = false;
        this.cart.clear();
    };
    return Order;
}());



/***/ }),

/***/ "./src/app/model/order.repository.ts":
/*!*******************************************!*\
  !*** ./src/app/model/order.repository.ts ***!
  \*******************************************/
/*! exports provided: OrderRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRepository", function() { return OrderRepository; });
/* harmony import */ var _static_datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static.datasource */ "./src/app/model/static.datasource.ts");

var OrderRepository = /** @class */ (function () {
    function OrderRepository(dataSource) {
        this.dataSource = dataSource;
        this.orders = [];
    }
    OrderRepository.prototype.getOrders = function () {
        return this.orders;
    };
    OrderRepository.prototype.saveOrder = function (order) {
        return this.dataSource.saveOrder(order);
    };
    return OrderRepository;
}());



/***/ }),

/***/ "./src/app/model/product.model.ts":
/*!****************************************!*\
  !*** ./src/app/model/product.model.ts ***!
  \****************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(id, name, category, description, price, units) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
        this.units = units;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/model/product.repository.ts":
/*!*********************************************!*\
  !*** ./src/app/model/product.repository.ts ***!
  \*********************************************/
/*! exports provided: ProductRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRepository", function() { return ProductRepository; });
/* harmony import */ var _static_datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static.datasource */ "./src/app/model/static.datasource.ts");

var ProductRepository = /** @class */ (function () {
    function ProductRepository(dataSource) {
        var _this = this;
        this.dataSource = dataSource;
        this.products = [];
        this.categories = [];
        dataSource.getProducts().subscribe(function (data) {
            _this.products = data;
            _this.categories = data.map(function (p) { return p.category; })
                .filter(function (c, index, array) { return array.indexOf(c) === index; }).sort();
        });
    }
    ProductRepository.prototype.getProducts = function (category) {
        if (category === void 0) { category = null; }
        return this.products
            .filter(function (p) { return category == null || category === p.category; });
    };
    ProductRepository.prototype.getProduct = function (id) {
        return this.products.find(function (p) { return p.id === id; });
    };
    ProductRepository.prototype.getCategories = function () {
        return this.categories;
    };
    return ProductRepository;
}());



/***/ }),

/***/ "./src/app/model/static.datasource.ts":
/*!********************************************!*\
  !*** ./src/app/model/static.datasource.ts ***!
  \********************************************/
/*! exports provided: StaticDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticDataSource", function() { return StaticDataSource; });
/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.model */ "./src/app/model/product.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


var StaticDataSource = /** @class */ (function () {
    function StaticDataSource() {
        this.products = [
            new _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"](1, 'Product 1', 'Category 1', 'Product 1 (Category 1)', 100, 6000),
            new _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"](2, 'Product 2', 'Category 1', 'Product 2 (Category 1)', 100, 5000),
            new _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"](3, 'Product 3', 'Category 1', 'Product 3 (Category 1)', 100, 500),
            new _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"](4, 'Product 4', 'Category 1', 'Product 4 (Category 1)', 100, 43),
            new _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"](5, 'Product 5', 'Category 1', 'Product 5 (Category 1)', 100, 86),
            new _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"](6, 'Product 6', 'Category 2', 'Product 6 (Category 2)', 100, 300),
            new _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"](7, 'Product 7', 'Category 2', 'Product 7 (Category 2)', 100, 99),
            new _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"](8, 'Product 8', 'Category 2', 'Product 8 (Category 2)', 100, 672),
            new _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"](9, 'Product 9', 'Category 2', 'Product 9 (Category 2)', 100, 981),
            new _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"](10, 'Product 10', 'Category 2', 'Product 10 (Category 2)', 100, 353),
            new _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"](11, 'Product 11', 'Category 3', 'Product 11 (Category 3)', 100, 764),
            new _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"](12, 'Product 12', 'Category 3', 'Product 12 (Category 3)', 100, 200),
            new _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"](13, 'Product 13', 'Category 3', 'Product 13 (Category 3)', 100, 123),
            new _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"](14, 'Product 14', 'Category 3', 'Product 14 (Category 3)', 100, 4900),
            new _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"](15, 'Product 15', 'Category 3', 'Product 15 (Category 3)', 100, 500),
        ];
    }
    StaticDataSource.prototype.getProducts = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])([this.products]);
    };
    StaticDataSource.prototype.saveOrder = function (order) {
        console.log(JSON.stringify(order));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])([order]);
    };
    return StaticDataSource;
}());



/***/ }),

/***/ "./src/app/prod-dashboard/prod-dashboard.component.ngfactory.js":
/*!**********************************************************************!*\
  !*** ./src/app/prod-dashboard/prod-dashboard.component.ngfactory.js ***!
  \**********************************************************************/
/*! exports provided: RenderType_ProdDashboardComponent, View_ProdDashboardComponent_0, View_ProdDashboardComponent_Host_0, ProdDashboardComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ProdDashboardComponent", function() { return RenderType_ProdDashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProdDashboardComponent_0", function() { return View_ProdDashboardComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProdDashboardComponent_Host_0", function() { return View_ProdDashboardComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdDashboardComponentNgFactory", function() { return ProdDashboardComponentNgFactory; });
/* harmony import */ var _prod_dashboard_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prod-dashboard.component.scss.shim.ngstyle */ "./src/app/prod-dashboard/prod-dashboard.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/material/grid-list/typings/index.ngfactory */ "./node_modules/@angular/material/grid-list/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@angular/material/card/typings/index.ngfactory */ "./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../node_modules/@angular/material/menu/typings/index.ngfactory */ "./node_modules/@angular/material/menu/typings/index.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _prod_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./prod-dashboard.component */ "./src/app/prod-dashboard/prod-dashboard.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




















var styles_ProdDashboardComponent = [_prod_dashboard_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ProdDashboardComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ProdDashboardComponent, data: {} });

function View_ProdDashboardComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 37, "mat-grid-tile", [["class", "mat-grid-tile"]], null, null, null, _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatGridTile_0"], _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatGridTile"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, [[1, 4]], 0, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { rowspan: [0, "rowspan"], colspan: [1, "colspan"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 35, "mat-card", [["class", "dashboard-card mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 33, "mat-card-content", [["class", "dashboard-card-content mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "mat-icon", [["class", "md-48 mr-4 mat-icon"], ["color", "warn"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], [8, null]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, 0, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "span", [["class", "display-5 font-weight-bold chap-red pt-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "small", [["class", "text-muted font-weight-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 16777216, null, null, 6, "button", [["aria-haspopup", "true"], ["aria-label", "Toggle menu"], ["class", "more-button"], ["mat-icon-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-expanded", 0]], [[null, "mousedown"], [null, "keydown"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._handleMousedown($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._handleClick($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 1196032, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuTrigger"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MAT_MENU_SCROLL_STRATEGY"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenu"]], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["Directionality"]], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusMonitor"]], { menu: [0, "menu"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 0, 3, "span", [["class", "font-weight-normal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["more_horiz"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 16, "mat-menu", [["xPosition", "before"]], null, null, null, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatMenu_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 1294336, [["menu", 4]], 2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MAT_MENU_DEFAULT_OPTIONS"]], { xPosition: [0, "xPosition"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { items: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { lazyContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["ɵf23"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenu"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, 0, 5, "button", [["class", "mat-menu-item"], ["mat-menu-item", ""], ["role", "menuitem"]], [[2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 180224, [[2, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["ɵf23"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["launch"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Expand "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, 0, 5, "button", [["class", "mat-menu-item"], ["mat-menu-item", ""], ["role", "menuitem"]], [[2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 180224, [[2, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["ɵf23"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], [[2, "mat-icon-inline", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 638976, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["delete_outline"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Remove "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.rows; var currVal_1 = _v.context.$implicit.cols; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = "warn"; _ck(_v, 7, 0, currVal_3); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22); _ck(_v, 16, 0, currVal_10); _ck(_v, 19, 0); var currVal_12 = "before"; _ck(_v, 22, 0, currVal_12); _ck(_v, 29, 0); _ck(_v, 35, 0); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).inline; _ck(_v, 6, 0, currVal_2); var currVal_4 = _v.context.$implicit.card_icon; _ck(_v, 8, 0, currVal_4); var currVal_5 = _v.context.$implicit.cvalue; _ck(_v, 10, 0, currVal_5); var currVal_6 = _v.context.$implicit.title; _ck(_v, 13, 0, currVal_6); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).disabled || null); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._animationMode === "NoopAnimations"); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).menuOpen || null); _ck(_v, 14, 0, currVal_7, currVal_8, currVal_9); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).inline; _ck(_v, 18, 0, currVal_11); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._highlighted; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._triggersSubmenu; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._getTabIndex(); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).disabled.toString(); var currVal_17 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).disabled || null); _ck(_v, 26, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).inline; _ck(_v, 28, 0, currVal_18); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._highlighted; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._triggersSubmenu; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._getTabIndex(); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).disabled.toString(); var currVal_23 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).disabled || null); _ck(_v, 32, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).inline; _ck(_v, 34, 0, currVal_24); }); }
function View_ProdDashboardComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "mat-grid-list", [["class", "mat-grid-list"], ["cols", "3"], ["rowHeight", "180px"]], null, null, null, _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatGridList_0"], _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatGridList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 2211840, null, 1, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["Directionality"]]], { cols: [0, "cols"], rowHeight: [1, "rowHeight"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _tiles: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_ProdDashboardComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_17__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = "3"; var currVal_1 = "180px"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).transform(_co.cards)); _ck(_v, 4, 0, currVal_2); }, null); }
function View_ProdDashboardComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-prod-dashboard", [], null, null, null, View_ProdDashboardComponent_0, RenderType_ProdDashboardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _prod_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["ProdDashboardComponent"], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["BreakpointObserver"]], null, null)], null, null); }
var ProdDashboardComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-prod-dashboard", _prod_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["ProdDashboardComponent"], View_ProdDashboardComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/prod-dashboard/prod-dashboard.component.scss.shim.ngstyle.js":
/*!******************************************************************************!*\
  !*** ./src/app/prod-dashboard/prod-dashboard.component.scss.shim.ngstyle.js ***!
  \******************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".grid-container[_ngcontent-%COMP%] {\n  margin: 20px; }\n\n.dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px; }\n\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 45px;\n  right: 10px; }\n\n.dashboard-card-content[_ngcontent-%COMP%] {\n  text-align: center; }"];



/***/ }),

/***/ "./src/app/prod-dashboard/prod-dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/prod-dashboard/prod-dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: ProdDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdDashboardComponent", function() { return ProdDashboardComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");


var ProdDashboardComponent = /** @class */ (function () {
    function ProdDashboardComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                return [
                    {
                        title: 'Total Revenue', cols: 1, rows: 1, card_icon: 'monetization_on', cvalue: 'UGX335BN'
                    },
                    {
                        title: 'Total Orders', cols: 1, rows: 1, card_icon: 'group', cvalue: '2K '
                    },
                    {
                        title: 'Growth', cols: 1, rows: 1, card_icon: 'trending_up', cvalue: '+2.0%'
                    }
                ];
            }
            return [
                {
                    title: 'Total Revenue', cols: 1, rows: 1, card_icon: 'business_center', cvalue: 'UGX335BN'
                },
                {
                    title: 'Total Orders', cols: 1, rows: 1, card_icon: 'description', cvalue: '2000 '
                },
                {
                    title: 'Growth', cols: 1, rows: 1, card_icon: 'trending_up', cvalue: '+2.0%'
                }
            ];
        }));
    }
    return ProdDashboardComponent;
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_3__["AppModuleNgFactory"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ellyyiga/mine/projects/gamechangers/chapchapmanufacturer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map