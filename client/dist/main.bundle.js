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

/***/ "../../../../../src/app/add-media/add-media.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>Add Media Source</h1>\r\n<md-dialog-content>\r\n\t<form>\r\n\t\t<md-form-field class=\"\">\r\n\t    \t<input mdInput placeholder=\"Name\" value=\"\">\r\n\t\t</md-form-field>\r\n\t\t<md-form-field class=\"\">\r\n\t    \t<input mdInput type=\"url\" placeholder=\"Source\" value=\"\">\r\n\t\t</md-form-field>\r\n\t\t<md-form-field class=\"\">\r\n\t    \t<textarea mdInput placeholder=\"Description\" value=\"\"></textarea>\r\n\t\t</md-form-field>\r\n\t</form>\r\n</md-dialog-content>\r\n<md-dialog-actions>\r\n\t<button md-raised-button color=\"primary\" [md-dialog-close]=\"true\">Add Media</button>\r\n\t<button md-raised-button color=\"primary\" [md-dialog-close]=\"false\">Cancel</button>\r\n</md-dialog-actions>\r\n"

/***/ }),

/***/ "../../../../../src/app/add-media/add-media.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-media/add-media.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMediaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let AddMediaComponent = class AddMediaComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
AddMediaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-media',
        template: __webpack_require__("../../../../../src/app/add-media/add-media.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-media/add-media.component.scss")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialogRef */]) === "function" && _a || Object, Object])
], AddMediaComponent);

var _a;
//# sourceMappingURL=add-media.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<md-toolbar color=\"primary\">\r\n    <span>{{title}}</span>\r\n    <span class=\"spacer\"></span>\r\n    <button md-icon-button [mdMenuTriggerFor]=\"menu\">\r\n      <md-icon>more_vert</md-icon>\r\n    </button>\r\n    <md-menu #menu=\"mdMenu\">\r\n      <button md-menu-item (click)=\"showAddMediaDialog();\">\r\n        <md-icon>add_to_queue</md-icon>\r\n        <span>Add Media</span>\r\n      </button>\r\n      <button md-menu-item (click)=\"showVideoSettingsDialog();\">\r\n        <md-icon>settings</md-icon>\r\n        <span>Video Settings</span>\r\n      </button>\r\n    </md-menu>\r\n</md-toolbar>\r\n\r\n<app-media-controller></app-media-controller>\r\n<app-media-items></app-media-items>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  /* margin:20px; */ }\n\n.spacer {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_media_add_media_component__ = __webpack_require__("../../../../../src/app/add-media/add-media.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video_settings_video_settings_component__ = __webpack_require__("../../../../../src/app/video-settings/video-settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let AppComponent = class AppComponent {
    constructor(overlayContainer, dialog) {
        this.overlayContainer = overlayContainer;
        this.dialog = dialog;
        this.title = 'HoloDeck';
    }
    ngOnInit() {
        // subscribe to some source of theme change events, then...
        // this.themeClass = newThemeClass;
        // this.overlayContainer.themeClass = newThemeClass;
    }
    showAddMediaDialog() {
        console.log('opening add dialog!');
        let dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__add_media_add_media_component__["a" /* AddMediaComponent */], {});
    }
    showVideoSettingsDialog() {
        console.log('opening video settings!');
        let dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__video_settings_video_settings_component__["a" /* VideoSettingsComponent */], {
            // height: '400px',
            width: '300px',
        });
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* OverlayContainer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* OverlayContainer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _b || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_cycler_img_cycler_component__ = __webpack_require__("../../../../../src/app/img-cycler/img-cycler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__media_items_media_items_component__ = __webpack_require__("../../../../../src/app/media-items/media-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__media_controller_media_controller_component__ = __webpack_require__("../../../../../src/app/media-controller/media-controller.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__seconds_to_hms_pipe__ = __webpack_require__("../../../../../src/app/seconds-to-hms.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_useful_swiper__ = __webpack_require__("../../../../angular2-useful-swiper/lib/swiper.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_useful_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_useful_swiper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_media_add_media_component__ = __webpack_require__("../../../../../src/app/add-media/add-media.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__media_controller_volume_control_component__ = __webpack_require__("../../../../../src/app/media-controller/volume-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__video_settings_video_settings_component__ = __webpack_require__("../../../../../src/app/video-settings/video-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__media_items_media_items_component__["a" /* MediaItemsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__media_controller_media_controller_component__["a" /* MediaControllerComponent */],
            __WEBPACK_IMPORTED_MODULE_11__add_media_add_media_component__["a" /* AddMediaComponent */],
            __WEBPACK_IMPORTED_MODULE_13__video_settings_video_settings_component__["a" /* VideoSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__media_controller_volume_control_component__["a" /* VolumeControlComponent */],
            __WEBPACK_IMPORTED_MODULE_9__seconds_to_hms_pipe__["a" /* SecondsToHmsPipe */],
            __WEBPACK_IMPORTED_MODULE_3__img_cycler_img_cycler_component__["a" /* ImgCyclerComponent */],
            __WEBPACK_IMPORTED_MODULE_14_ng2_img_cropper__["b" /* ImageCropperComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_10_angular2_useful_swiper__["SwiperModule"],
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__add_media_add_media_component__["a" /* AddMediaComponent */],
            __WEBPACK_IMPORTED_MODULE_13__video_settings_video_settings_component__["a" /* VideoSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__media_controller_volume_control_component__["a" /* VolumeControlComponent */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    title: "Hello World",
    Endpoints: {
        ControlStatus: "ws://localhost:5000/status",
        Main: "http://localhost:5000/"
    }
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "../../../../../src/app/img-cycler/img-cycler.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"thumbs_container\" >\n\t<img #img *ngFor=\"let i of images\" src=\"http://localhost:5000/{{i}}\" />\n</div>"

/***/ }),

/***/ "../../../../../src/app/img-cycler/img-cycler.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgCyclerComponent; });
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

let ImgCyclerComponent = class ImgCyclerComponent {
    constructor() {
        this.current_idx = 0;
        this.timer_handle = null;
    }
    ngOnInit() {
        // console.log(this);
        this.rate = 500;
    }
    ngAfterViewInit() {
        // console.log(this);
        // console.log(this.imageElements);
        this.updateVisibility();
        this.start();
    }
    hideItem(item) {
        // console.log('hiding item', item);
        item.nativeElement.style.setProperty('display', 'none');
    }
    showItem(item) {
        // console.log('showing item', item);
        item.nativeElement.style.setProperty('display', 'block');
    }
    updateVisibility() {
        this.imageElements.forEach((itm, idx) => {
            if (this.current_idx === idx) {
                this.showItem(itm);
            }
            else {
                this.hideItem(itm);
            }
        });
    }
    start() {
        this.timer_handle = setTimeout(() => { this.next(); }, this.rate);
    }
    stop() {
        clearTimeout(this.timer_handle);
    }
    next() {
        this.current_idx++;
        if (this.current_idx >= this.imageElements.length) {
            this.current_idx = 0;
        }
        this.updateVisibility();
        this.timer_handle = setTimeout(() => { this.next(); }, this.rate);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ImgCyclerComponent.prototype, "images", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ImgCyclerComponent.prototype, "rate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('img'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _a || Object)
], ImgCyclerComponent.prototype, "imageElements", void 0);
ImgCyclerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-img-cycler',
        template: __webpack_require__("../../../../../src/app/img-cycler/img-cycler.component.html"),
        styles: [
            ':host img{ width: 100%; }'
        ]
    }),
    __metadata("design:paramtypes", [])
], ImgCyclerComponent);

var _a;
//# sourceMappingURL=img-cycler.component.js.map

/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MaterialModule = class MaterialModule {
};
MaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdProgressSpinnerModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdProgressSpinnerModule */],
        ]
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/media-controller/media-control.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaControlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__("../../../../../src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let MediaControlService = class MediaControlService {
    constructor(wsService, http) {
        this.wsService = wsService;
        this.http = http;
        // this.State = new BehaviorSubject<PlayerState>(this.getEmptyState());
        this.State = this.wsService
            .connect(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* config */].Endpoints.ControlStatus)
            .map((response) => {
            console.log(response);
            let data = JSON.parse(response.data);
            // console.log(data);
            return data;
        });
    }
    requestAction(action, data) {
        this.http.post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* config */].Endpoints.Main + 'action/' + action, data)
            .toPromise()
            .catch(this.handleError);
    }
    handleError(error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    getEmptyState() {
        return {
            able: {
                control: false,
                go_next: false,
                go_previous: false,
                pause: false,
                play: false,
                quit: false,
                seek: false,
                set_fullscreen: false,
                maximum_rate: '',
                minimum_rate: '',
            },
            media: {
                id: NaN,
                name: '',
                description: '',
                source: '',
                thumbs: []
            },
            is_playing: false,
            playback_status: 'Stopped',
            position: 0,
            duration: 1,
            rate: 1,
            fullscreen: true,
            volume: 0
        };
    }
};
MediaControlService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__["a" /* WebSocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], MediaControlService);

var _a, _b;
//# sourceMappingURL=media-control.service.js.map

/***/ }),

/***/ "../../../../../src/app/media-controller/media-controller.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<div id=\"media_state\">\r\n\t<md-progress-spinner mode=\"determinate\" value=\"{{currentState.position / currentState.duration * 100}}\"></md-progress-spinner>\r\n\t<!-- <h3>Now Playing:</h3>-->\r\n\t<div id=\"media_info\">\r\n\t\t<span class=\"title\">{{currentState.media.name}}</span>\r\n\t\t<span class=\"time\">{{currentState.position | secondsToHms}} / {{currentState.duration | secondsToHms}}</span>\r\n\t</div>\r\n</div>\r\n<div id=\"control_buttons\">\r\n\r\n\t\r\n\t<button md-icon-button>\r\n\t    <md-icon class=\"md-36 md-light\" aria-label=\"Toggle Mute\" (click)=\"requestAction('seek',[-10])\">fast_rewind</md-icon>\r\n\t</button>\r\n\t<button md-icon-button>\r\n\t    <md-icon class=\"md-36 md-light\" aria-label=\"Play/Pause\" (click)=\"requestAction('play_pause',[])\">{{currentState.is_playing == 0 ? 'play_arrow' : 'pause'}}</md-icon>\r\n\t</button>\r\n\t<button md-icon-button>\r\n\t    <md-icon class=\"md-36 md-light\" aria-label=\"Toggle Mute\" (click)=\"requestAction('seek',[10])\">fast_forward</md-icon>\r\n\t</button>\r\n</div>\t\r\n\t\r\n<div id=\"volume_controls\">\r\n\t<button md-icon-button>\r\n\t\t<md-icon class=\"md-36 md-light\" aria-label=\"Toggle Mute\" (click)=\"requestAction('toggle_mute',[])\">{{currentState.volume == 0 ? 'volume_mute' : 'volume_off'}}</md-icon>\r\n\t</button>\r\n\t\r\n\t<volume-control></volume-control>\r\n\t\r\n\t<!-- <md-slider thumbLabel=\"true\" vertical=\"true\" value=\"{{currentState.volume}}\" (change)=\"volume_slider_changed($event)\" ></md-slider>\r\n\t\r\n\t<div id=\"volume_overlay\">\r\n\t\t<md-slider thumbLabel=\"true\" vertical=\"true\" value=\"{{currentState.volume}}\" (change)=\"volume_slider_changed($event)\" ></md-slider>\r\n\t\t<button md-icon-button>\r\n\t\t\t<md-icon class=\"md-36 md-light\" aria-label=\"Toggle Mute\" (click)=\"requestAction('toggle_mute',[])\">{{currentState.volume == 0 ? 'volume_mute' : 'volume_off'}}</md-icon>\r\n\t\t</button>\r\n\t</div>-->\r\n</div>\r\n\t\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/media-controller/media-controller.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  position: relative;\n  display: block;\n  height: 120px;\n  width: 100%;\n  background: #3f3f3f;\n  /*z-index:999; \r\n \tborder-bottom: 5px solid rgba(0, 0, 0, 0.8);  \r\n \t-webkit-background-clip: padding-box; \r\n \tbackground-clip: padding-box;*/ }\n\n#volume_controls {\n  position: absolute;\n  top: 0;\n  right: 0; }\n\n#volume_controls button {\n  display: block;\n  clear: both;\n  margin-top: 10px;\n  margin-right: 0; }\n\nmd-progress-spinner {\n  width: 100px;\n  height: 100px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 10px;\n  margin-right: 20px;\n  float: left; }\n\n#media_state #media_info {\n  float: left;\n  margin-top: 20px; }\n\n#media_state span {\n  display: block; }\n\n#media_state span.title {\n  font-size: 24px;\n  color: #efefef; }\n\n#media_state span.time {\n  font-style: italic;\n  color: #afafaf; }\n\n#control_buttons {\n  position: absolute;\n  top: 70px;\n  left: 120px;\n  clear: both; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/media-controller/media-controller.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaControllerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__media_control_service__ = __webpack_require__("../../../../../src/app/media-controller/media-control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__volume_control_component__ = __webpack_require__("../../../../../src/app/media-controller/volume-control.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let MediaControllerComponent = class MediaControllerComponent {
    constructor(mediaControlService, overlayContainer, dialog) {
        this.mediaControlService = mediaControlService;
        this.overlayContainer = overlayContainer;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.currentState = this.mediaControlService.getEmptyState();
        this.mediaControlService.State.subscribe(s => {
            if (s == null) {
                this.currentState = this.mediaControlService.getEmptyState();
            }
            else {
                this.currentState = s;
            }
        });
    }
    open_volume_controls() {
        console.log('got open_volume_controls');
        let dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__volume_control_component__["a" /* VolumeControlComponent */], {});
    }
    volume_slider_changed(event) {
        console.log(event);
        this.requestAction('set_volume', [event.value]);
    }
    requestAction(action, args) {
        this.mediaControlService.requestAction(action, args);
    }
};
MediaControllerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-media-controller',
        template: __webpack_require__("../../../../../src/app/media-controller/media-controller.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__media_control_service__["a" /* MediaControlService */], __WEBPACK_IMPORTED_MODULE_0__services_websocket_service__["a" /* WebSocketService */]],
        styles: [__webpack_require__("../../../../../src/app/media-controller/media-controller.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__media_control_service__["a" /* MediaControlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__media_control_service__["a" /* MediaControlService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* OverlayContainer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* OverlayContainer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdDialog */]) === "function" && _c || Object])
], MediaControllerComponent);

var _a, _b, _c;
//# sourceMappingURL=media-controller.component.js.map

/***/ }),

/***/ "../../../../../src/app/media-controller/volume-control.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"volume_overlay\">\r\n\t<md-slider thumbLabel=\"true\" vertical=\"true\" value=\"{{pstate.volume}}\" (change)=\"volume_slider_changed($event)\" ></md-slider>\r\n\t<button md-icon-button>\r\n\t\t<md-icon class=\"md-36 md-light\" aria-label=\"Toggle Mute\" (click)=\"requestAction('toggle_mute',[])\">{{pstate.volume == 0 ? 'volume_mute' : 'volume_off'}}</md-icon>\r\n\t</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/media-controller/volume-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VolumeControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__media_controller_media_control_service__ = __webpack_require__("../../../../../src/app/media-controller/media-control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let VolumeControlComponent = class VolumeControlComponent {
    constructor(mediaControlService) {
        this.mediaControlService = mediaControlService;
    }
    ngOnInit() {
        this.pstate = this.mediaControlService.getEmptyState();
        this.mediaControlService.State.subscribe(s => {
            if (s == null) {
                this.pstate = this.mediaControlService.getEmptyState();
            }
            else {
                this.pstate = s;
            }
        });
    }
};
VolumeControlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'volume-control',
        template: __webpack_require__("../../../../../src/app/media-controller/volume-control.component.html"),
        //styleUrls: ['./video-settings.component.css'],
        providers: [__WEBPACK_IMPORTED_MODULE_0__media_controller_media_control_service__["a" /* MediaControlService */], __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__["a" /* WebSocketService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__media_controller_media_control_service__["a" /* MediaControlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__media_controller_media_control_service__["a" /* MediaControlService */]) === "function" && _a || Object])
], VolumeControlComponent);

var _a;
//# sourceMappingURL=volume-control.component.js.map

/***/ }),

/***/ "../../../../../src/app/media-items/media-items.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"itemscontiner\">\r\n\t<swiper [config]=\"swiperConfig\">\r\n        <div class=\"swiper-wrapper\">\r\n        \t<div class=\"swiper-slide\" *ngFor=\"let media of mediaItems\">\r\n\t\t\t\t<md-card>\r\n\t\t\t\t\t<md-card-header>\r\n\t\t\t\t\t\t<md-card-title>{{media.name}}</md-card-title>\r\n\t\t\t\t\t\t<md-card-subtitle>{{media.description}}</md-card-subtitle>\r\n\t\t\t\t\t</md-card-header>\r\n\t\t\t\t\t<md-card-content>\r\n\t\t\t\t\t\t<app-img-cycler rate=\"500\" [images]=\"media.thumbs\"></app-img-cycler>\r\n\t\t\t\t\t</md-card-content>\r\n\t\t\t\t\t<md-card-actions>\r\n\t\t\t\t\t\t<button md-raised-button color=\"primary\" (click)=\"requestPlay($event, media)\">Play</button>\r\n\t\t\t\t\t</md-card-actions>\r\n\t\t\t\t</md-card>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</swiper>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/media-items/media-items.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card {\n  margin: 20px; }\n\napp-img-cycler {\n  width: 100%;\n  display: block; }\n\n@media screen and (max-device-width: 1000px) and (orientation: landscape) {\n  md-card-content {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/media-items/media-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mediaInventory_service__ = __webpack_require__("../../../../../src/app/media-items/mediaInventory.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let MediaItemsComponent = class MediaItemsComponent {
    constructor(mediaItemService) {
        this.mediaItemService = mediaItemService;
        this.swiperConfig = {
            direction: 'horizontal',
            speed: 300,
            effect: 'slide',
            spaceBetween: 30,
            centeredSlides: true
        };
    }
    fetchMedia() {
        this.mediaItemService.getMediaItems().then(media => this.mediaItems = media);
    }
    requestPlay(event, media) {
        this.mediaItemService.requestPlay(media);
    }
    ngOnInit() {
        this.fetchMedia();
    }
    ngAfterViewInit() {
        // console.log(this);
    }
};
MediaItemsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-media-items',
        providers: [__WEBPACK_IMPORTED_MODULE_1__mediaInventory_service__["a" /* MediaInventoryService */]],
        template: __webpack_require__("../../../../../src/app/media-items/media-items.component.html"),
        styles: [__webpack_require__("../../../../../src/app/media-items/media-items.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mediaInventory_service__["a" /* MediaInventoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mediaInventory_service__["a" /* MediaInventoryService */]) === "function" && _a || Object])
], MediaItemsComponent);

var _a;
//# sourceMappingURL=media-items.component.js.map

/***/ }),

/***/ "../../../../../src/app/media-items/mediaInventory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaInventoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("../../../../../src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




class Media {
    constructor(id, name, description, thumbs, source) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.thumbs = thumbs;
        this.source = source;
    }
}
/* unused harmony export Media */

let MediaInventoryService = class MediaInventoryService {
    constructor(http) {
        this.http = http;
    }
    getMediaItems() {
        // const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* config */].Endpoints.Main + 'getmediaitems' /*, { headers: headers }*/)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    requestPlay(media) {
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* config */].Endpoints.Main + 'playitem/' + media.id)
            .toPromise()
            .catch(this.handleError);
    }
    handleError(error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
};
MediaInventoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], MediaInventoryService);

var _a;
//# sourceMappingURL=mediaInventory.service.js.map

/***/ }),

/***/ "../../../../../src/app/seconds-to-hms.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondsToHmsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let SecondsToHmsPipe = class SecondsToHmsPipe {
    transform(value, args) {
        let hours = Math.floor(value / 3600);
        value = value - (hours * 3600);
        let minutes = Math.floor(value / 60);
        let seconds = value - minutes * 60;
        let result = '';
        if (hours > 0) {
            result += hours + ':';
        }
        // if (hours > 0 || minutes > 0) {
        if (hours > 0) {
            result += this.pad(minutes, 2) + ':';
        }
        else {
            result += minutes + ':';
        }
        // }
        result += this.pad(seconds, 2);
        return result;
    }
    pad(value, length) {
        let s = String(value);
        while (s.length < (length || 2)) {
            s = '0' + s;
        }
        return s;
    }
};
SecondsToHmsPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'secondsToHms'
    })
], SecondsToHmsPipe);

//# sourceMappingURL=seconds-to-hms.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/websocket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let WebSocketService = class WebSocketService {
    connect(url) {
        if (!this.subject) {
            this.subject = this.create(url);
        }
        return this.subject;
    }
    create(url) {
        let ws = new WebSocket(url);
        let observable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create((obs) => {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        let observer = {
            next: (data) => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            }
        };
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"].create(observer, observable);
    }
}; // end class WebSocketService
WebSocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], WebSocketService);

//# sourceMappingURL=websocket.service.js.map

/***/ }),

/***/ "../../../../../src/app/video-settings/video-settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.mat-list .mat-list-item{\r\n\tmargin-bottom:20px;\r\n}\r\n\r\nmd-select, md-slider {\r\n\twidth: 180px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-settings/video-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>Video Settings</h1>\n<md-dialog-content>\n\t<md-list>\n\t\t<md-list-item>\n\t\t\t <md-icon md-list-icon>aspect_ratio</md-icon>\n\t\t\t <!-- <h3 md-line>Aspect Mode</h3>-->\n\t\t\t <md-select placeholder=\"Aspect Mode\" (change)=\"settingsValueChanged('set_aspect_mode', $event);\" value=\"\">\n\t\t\t\t<md-option value=\"letterbox\">Letter Box</md-option>\n\t\t\t  \t<md-option value=\"fill\">Fill</md-option>\n\t\t\t  \t<md-option value=\"stretch\">Stretch</md-option>\n\t\t\t</md-select>\n\t\t</md-list-item>\n\t\t<md-list-item>\n\t\t\t <md-icon md-list-icon>opacity</md-icon>\n\t\t\t <!-- <h3 md-line>Opacity</h3>-->\n\t\t\t <md-slider min=\"0\" max=\"255\" thumbLabel=\"true\" value=\"\" (change)=\"settingsValueChanged('set_alpha', $event);\"></md-slider>\n\t\t</md-list-item>\n\t\t<md-list-item>\n\t\t\t<img src=\"{{pstate.media.thumbs[0]}}\" />\n\t\t\t<!-- <img-cropper image=\"\" ></img-cropper>\n\t\t\t<img [src]=\"data.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">-->\n\t\t</md-list-item>\n\t</md-list>\n</md-dialog-content>\n"

/***/ }),

/***/ "../../../../../src/app/video-settings/video-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__media_controller_media_control_service__ = __webpack_require__("../../../../../src/app/media-controller/media-control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let VideoSettingsComponent = class VideoSettingsComponent {
    constructor(mediaControlService) {
        this.mediaControlService = mediaControlService;
        this.cropperSettings = new __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__["a" /* CropperSettings */]();
        this.cropperSettings.width = 100;
        this.cropperSettings.height = 100;
        this.cropperSettings.croppedWidth = 100;
        this.cropperSettings.croppedHeight = 100;
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.canvasHeight = 300;
    }
    ngOnInit() {
        this.pstate = this.mediaControlService.getEmptyState();
        this.mediaControlService.State.subscribe(s => {
            if (s == null) {
                this.pstate = this.mediaControlService.getEmptyState();
            }
            else {
                this.pstate = s;
            }
        });
    }
    settingsValueChanged(action, event) {
        console.log(action, event);
        this.mediaControlService.requestAction(action, [event.value]);
    }
};
VideoSettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-video-settings',
        template: __webpack_require__("../../../../../src/app/video-settings/video-settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/video-settings/video-settings.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__media_controller_media_control_service__["a" /* MediaControlService */], __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__["a" /* WebSocketService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__media_controller_media_control_service__["a" /* MediaControlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__media_controller_media_control_service__["a" /* MediaControlService */]) === "function" && _a || Object])
], VideoSettingsComponent);

var _a;
//# sourceMappingURL=video-settings.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(err => console.log(err));
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map