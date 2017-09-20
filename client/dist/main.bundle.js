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

module.exports = "<h1 md-dialog-title>Add Media Source</h1>\r\n<md-dialog-content>\r\n\t<form>\r\n\t\t<md-form-field class=\"\">\r\n\t    \t<input mdInput type=\"url\" name=\"source\" placeholder=\"Source\" [(ngModel)]=\"media_url\">\r\n\t\t</md-form-field>\r\n\t</form>\r\n</md-dialog-content>\r\n<div id=\"progress_container\" *ngIf=\"progress\">\r\n\t<div *ngIf=\"progress.task == 'Downloading....'\">\r\n\t\t<md-progress-bar color=\"primary\" mode=\"determinate\" [value]=\"progress.ratio * 100\"></md-progress-bar>\r\n\t\t<span class=\"\">{{progress.task}}</span>\r\n\t\t<span>{{progress.recieved | bytesToHuman}} / {{progress.total | bytesToHuman}} ({{progress.rate | bytesToHuman}}/s)</span>\r\n\t\t<span>{{progress.eta}} s</span>\r\n\t</div>\r\n\t<div *ngIf=\"progress.task == 'Generating thumbnails....'\">\r\n\t\t<md-progress-bar color=\"primary\" mode=\"determinate\" [value]=\"progress.ratio * 100\"></md-progress-bar>\r\n\t\t<span class=\"\">{{progress.task}}</span>\r\n\t\t<span>{{progress.recieved}} / {{progress.total}}</span>\r\n\t</div>\r\n\t<div *ngIf=\"progress.task == 'Done!'\">\r\n\t\t<h3><md-icon class=\"md-36\" aria-label=\"Done\" color=\"primary\" >cloud_done</md-icon>Finished!</h3>\r\n\t</div>\r\n</div>\r\n<md-dialog-actions>\r\n\t<button md-raised-button color=\"primary\" (click)=\"add_media()\">Add Media</button>\r\n\t<button md-raised-button color=\"primary\" (click)=\"cancel()\">Cancel</button>\r\n</md-dialog-actions>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_media_inventory_service__ = __webpack_require__("../../../../../src/app/services/media-inventory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddMediaComponent = (function () {
    function AddMediaComponent(dialogRef, mediaItemService) {
        this.dialogRef = dialogRef;
        this.mediaItemService = mediaItemService;
    }
    AddMediaComponent.prototype.ngOnInit = function () {
        console.log(this);
        this.media_url = "";
    };
    AddMediaComponent.prototype.check_complete = function () {
        if (this.progress.complete) {
            this.progressSub.unsubscribe();
            this.dialogRef.close();
        }
    };
    AddMediaComponent.prototype.add_media = function () {
        var _this = this;
        //'d3Eelj9Pkvw'
        console.log(this.media_url);
        console.log(this);
        this.progressSub = this.mediaItemService.requestAdd(this.media_url).subscribe(function (data) {
            _this.progress = data;
            _this.check_complete();
            console.log(data); // see console you get output every 5 sec
        });
    };
    AddMediaComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    return AddMediaComponent;
}());
AddMediaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-add-media',
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_media_inventory_service__["a" /* MediaInventoryService */]],
        template: __webpack_require__("../../../../../src/app/add-media/add-media.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-media/add-media.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_media_inventory_service__["a" /* MediaInventoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_media_inventory_service__["a" /* MediaInventoryService */]) === "function" && _b || Object])
], AddMediaComponent);

var _a, _b;
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





var AppComponent = (function () {
    function AppComponent(overlayContainer, dialog) {
        this.overlayContainer = overlayContainer;
        this.dialog = dialog;
        this.title = 'HoloDeck';
    }
    AppComponent.prototype.ngOnInit = function () {
        // subscribe to some source of theme change events, then...
        // this.themeClass = newThemeClass;
        // this.overlayContainer.themeClass = newThemeClass;
    };
    AppComponent.prototype.showAddMediaDialog = function () {
        console.log('opening add dialog!');
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__add_media_add_media_component__["a" /* AddMediaComponent */], {});
    };
    AppComponent.prototype.showVideoSettingsDialog = function () {
        console.log('opening video settings!');
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__video_settings_video_settings_component__["a" /* VideoSettingsComponent */], {
            // height: '400px',
            width: '300px',
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* OverlayContainer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* OverlayContainer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */]) === "function" && _b || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_cycler_img_cycler_component__ = __webpack_require__("../../../../../src/app/img-cycler/img-cycler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__media_items_media_items_component__ = __webpack_require__("../../../../../src/app/media-items/media-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__media_controller_media_controller_component__ = __webpack_require__("../../../../../src/app/media-controller/media-controller.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__seconds_to_hms_pipe__ = __webpack_require__("../../../../../src/app/seconds-to-hms.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bytes_to_human_pipe__ = __webpack_require__("../../../../../src/app/bytes-to-human.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_useful_swiper__ = __webpack_require__("../../../../angular2-useful-swiper/lib/swiper.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_useful_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_useful_swiper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__add_media_add_media_component__ = __webpack_require__("../../../../../src/app/add-media/add-media.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__video_settings_video_settings_component__ = __webpack_require__("../../../../../src/app/video-settings/video-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng_click_outside__ = __webpack_require__("../../../../ng-click-outside/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng_click_outside__);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__media_items_media_items_component__["a" /* MediaItemsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__media_controller_media_controller_component__["a" /* MediaControllerComponent */],
            __WEBPACK_IMPORTED_MODULE_13__add_media_add_media_component__["a" /* AddMediaComponent */],
            __WEBPACK_IMPORTED_MODULE_14__video_settings_video_settings_component__["a" /* VideoSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__seconds_to_hms_pipe__["a" /* SecondsToHmsPipe */],
            __WEBPACK_IMPORTED_MODULE_11__bytes_to_human_pipe__["a" /* BytesToHumanPipe */],
            __WEBPACK_IMPORTED_MODULE_4__img_cycler_img_cycler_component__["a" /* ImgCyclerComponent */],
            __WEBPACK_IMPORTED_MODULE_15_ng2_img_cropper__["b" /* ImageCropperComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_12_angular2_useful_swiper__["SwiperModule"],
            __WEBPACK_IMPORTED_MODULE_16_ng_click_outside__["ClickOutsideModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_13__add_media_add_media_component__["a" /* AddMediaComponent */],
            __WEBPACK_IMPORTED_MODULE_14__video_settings_video_settings_component__["a" /* VideoSettingsComponent */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bytes-to-human.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BytesToHumanPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BytesToHumanPipe = (function () {
    function BytesToHumanPipe() {
        this.units = [
            'bytes',
            'KB',
            'MB',
            'GB',
            'TB',
            'PB'
        ];
    }
    BytesToHumanPipe.prototype.transform = function (bytes, precision) {
        if (precision === void 0) { precision = 2; }
        if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes))
            return '?';
        var unit = 0;
        while (bytes >= 1024) {
            bytes /= 1024;
            unit++;
        }
        return bytes.toFixed(+precision) + ' ' + this.units[unit];
    };
    return BytesToHumanPipe;
}());
BytesToHumanPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'bytesToHuman'
    })
], BytesToHumanPipe);

//# sourceMappingURL=bytes-to-human.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    title: "Hello World",
    Endpoints: {
        ControlStatus: "ws://" + window.location.hostname + ":" + window.location.port + "/status",
        Main: "http://" + window.location.hostname + ":" + window.location.port + "/"
    }
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "../../../../../src/app/img-cycler/img-cycler.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"thumbs_container\" >\r\n\t<img #img *ngFor=\"let i of images\" src=\"{{i}}\" />\r\n</div>"

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

var ImgCyclerComponent = (function () {
    function ImgCyclerComponent() {
        this.current_idx = 0;
        this.timer_handle = null;
        this.rate = 500;
    }
    ImgCyclerComponent.prototype.ngOnInit = function () {
    };
    ImgCyclerComponent.prototype.ngAfterViewInit = function () {
        this.updateVisibility();
        this.start();
    };
    ImgCyclerComponent.prototype.hideItem = function (item) {
        item.nativeElement.style.setProperty('display', 'none');
    };
    ImgCyclerComponent.prototype.showItem = function (item) {
        item.nativeElement.style.setProperty('display', 'block');
    };
    ImgCyclerComponent.prototype.updateVisibility = function () {
        var _this = this;
        this.imageElements.forEach(function (itm, idx) {
            if (_this.current_idx === idx) {
                _this.showItem(itm);
            }
            else {
                _this.hideItem(itm);
            }
        });
    };
    ImgCyclerComponent.prototype.start = function () {
        var _this = this;
        this.timer_handle = setTimeout(function () { _this.next(); }, this.rate);
    };
    ImgCyclerComponent.prototype.stop = function () {
        clearTimeout(this.timer_handle);
    };
    ImgCyclerComponent.prototype.next = function () {
        var _this = this;
        this.current_idx++;
        if (this.current_idx >= this.imageElements.length) {
            this.current_idx = 0;
        }
        this.updateVisibility();
        this.timer_handle = setTimeout(function () { _this.next(); }, this.rate);
    };
    return ImgCyclerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('images'),
    __metadata("design:type", Array)
], ImgCyclerComponent.prototype, "images", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('rate'),
    __metadata("design:type", Number)
], ImgCyclerComponent.prototype, "rate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('img'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _a || Object)
], ImgCyclerComponent.prototype, "imageElements", void 0);
ImgCyclerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'img-cycler',
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


var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdProgressBarModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdProgressBarModule */]
        ]
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/media-controller/media-controller.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<div id=\"media_state\">\r\n\t<md-progress-spinner mode=\"determinate\" value=\"{{currentState.position / currentState.duration * 100}}\"></md-progress-spinner>\r\n\t<!-- <h3>Now Playing:</h3>-->\r\n\t<div id=\"media_info\">\r\n\t\t<span class=\"title\">{{currentState.media.name}}</span>\r\n\t\t<span class=\"time\">{{currentState.position | secondsToHms}} / {{currentState.duration | secondsToHms}}</span>\r\n\t</div>\r\n</div>\r\n<div id=\"control_buttons\">\r\n\r\n\t\r\n\t<button md-icon-button>\r\n\t    <md-icon class=\"md-36 md-light\" aria-label=\"Toggle Mute\" (click)=\"requestAction('seek',[-10])\">fast_rewind</md-icon>\r\n\t</button>\r\n\t<button md-icon-button>\r\n\t    <md-icon class=\"md-36 md-light\" aria-label=\"Play/Pause\" (click)=\"requestAction('play_pause',[])\">{{currentState.is_playing == 0 ? 'play_arrow' : 'pause'}}</md-icon>\r\n\t</button>\r\n\t<button md-icon-button>\r\n\t    <md-icon class=\"md-36 md-light\" aria-label=\"Toggle Mute\" (click)=\"requestAction('seek',[10])\">fast_forward</md-icon>\r\n\t</button>\r\n</div>\t\r\n\t\r\n<div id=\"volume_controls\">\r\n\t<button md-icon-button id=\"volume_overlay_trigger\">\r\n\t\t<md-icon class=\"md-36 md-light\" aria-label=\"Toggle Mute\" (click)=\"vover_open = !vover_open\">{{currentState.volume == 0 ? 'volume_mute' : 'volume_off'}}</md-icon>\r\n\t</button>\r\n\t\r\n\t<div *ngIf=\"vover_open\" id=\"volume_overlay\" (clickOutside)=\"vover_open = false\" [delayClickOutsideInit]=\"true\">\r\n\t\t<md-slider thumbLabel=\"true\" vertical=\"true\" value=\"{{currentState.volume}}\" (change)=\"volume_slider_changed($event)\" ></md-slider>\r\n\t\t<button md-icon-button>\r\n\t\t\t<md-icon class=\"md-36 md-light\" aria-label=\"Toggle Mute\" (click)=\"requestAction('toggle_mute',[])\">{{currentState.volume == 0 ? 'volume_mute' : 'volume_off'}}</md-icon>\r\n\t\t</button>\r\n\t</div>\r\n</div>\r\n\t\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/media-controller/media-controller.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  position: relative;\n  display: block;\n  height: 120px;\n  width: 100%;\n  background: #3f3f3f;\n  /*z-index:999; \r\n \tborder-bottom: 5px solid rgba(0, 0, 0, 0.8);  \r\n \t-webkit-background-clip: padding-box; \r\n \tbackground-clip: padding-box;*/ }\n\n#volume_controls {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 48px; }\n\n#volume_controls button {\n  display: block;\n  clear: both;\n  margin-top: 10px;\n  margin-right: 0; }\n\n#volume_overlay {\n  position: relative;\n  z-index: 999;\n  background: #999999; }\n\nmd-progress-spinner {\n  width: 100px;\n  height: 100px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 10px;\n  margin-right: 20px;\n  float: left; }\n\n#media_state #media_info {\n  float: left;\n  margin-top: 20px; }\n\n#media_state span {\n  display: block; }\n\n#media_state span.title {\n  font-size: 24px;\n  color: #efefef; }\n\n#media_state span.time {\n  font-style: italic;\n  color: #afafaf; }\n\n#control_buttons {\n  position: absolute;\n  top: 70px;\n  left: 120px;\n  clear: both; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/media-controller/media-controller.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaControllerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_media_control_service__ = __webpack_require__("../../../../../src/app/services/media-control.service.ts");
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



var MediaControllerComponent = (function () {
    function MediaControllerComponent(mediaControlService) {
        this.mediaControlService = mediaControlService;
        this.vover_open = false;
    }
    MediaControllerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentState = this.mediaControlService.getEmptyState();
        this.mediaControlService.State.subscribe(function (s) {
            if (s == null) {
                _this.currentState = _this.mediaControlService.getEmptyState();
            }
            else {
                _this.currentState = s;
            }
        });
    };
    MediaControllerComponent.prototype.open_volume_controls = function () {
        this.vover_open = true;
    };
    MediaControllerComponent.prototype.toggle_volume_controls = function () {
        this.vover_open = !this.vover_open;
    };
    MediaControllerComponent.prototype.close_volume_controls = function () {
        this.vover_open = false;
    };
    MediaControllerComponent.prototype.volume_slider_changed = function (event) {
        console.log(event);
        this.requestAction('set_volume', [event.value]);
    };
    MediaControllerComponent.prototype.requestAction = function (action, args) {
        this.mediaControlService.requestAction(action, args);
    };
    return MediaControllerComponent;
}());
MediaControllerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-media-controller',
        template: __webpack_require__("../../../../../src/app/media-controller/media-controller.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_media_control_service__["a" /* MediaControlService */], __WEBPACK_IMPORTED_MODULE_0__services_websocket_service__["a" /* WebSocketService */]],
        styles: [__webpack_require__("../../../../../src/app/media-controller/media-controller.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_media_control_service__["a" /* MediaControlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_media_control_service__["a" /* MediaControlService */]) === "function" && _a || Object])
], MediaControllerComponent);

var _a;
//# sourceMappingURL=media-controller.component.js.map

/***/ }),

/***/ "../../../../../src/app/media-items/media-items.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"itemscontiner\">\r\n\t<swiper [config]=\"swiperConfig\">\r\n        <div class=\"swiper-wrapper\">\r\n        \t<div class=\"swiper-slide\" *ngFor=\"let media of mediaItems\">\r\n\t\t\t\t<md-card>\r\n\t\t\t\t\t<md-card-header>\r\n\t\t\t\t\t\t<md-card-title>{{media.name}}</md-card-title>\r\n\t\t\t\t\t\t<md-card-subtitle>{{media.description}}</md-card-subtitle>\r\n\t\t\t\t\t</md-card-header>\r\n\t\t\t\t\t<md-card-content>\r\n\t\t\t\t\t\t<img-cycler rate=\"500\" [images]=\"media.thumbs\"></img-cycler>\r\n\t\t\t\t\t</md-card-content>\r\n\t\t\t\t\t<md-card-actions>\r\n\t\t\t\t\t\t<button md-raised-button color=\"primary\" (click)=\"requestPlay($event, media)\">Play</button>\r\n\t\t\t\t\t</md-card-actions>\r\n\t\t\t\t</md-card>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</swiper>\r\n</div>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_media_inventory_service__ = __webpack_require__("../../../../../src/app/services/media-inventory.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MediaItemsComponent = (function () {
    function MediaItemsComponent(mediaItemService) {
        this.mediaItemService = mediaItemService;
        this.swiperConfig = {
            direction: 'horizontal',
            speed: 300,
            effect: 'slide',
            spaceBetween: 30,
            centeredSlides: true
        };
    }
    MediaItemsComponent.prototype.fetchMedia = function () {
        var _this = this;
        this.mediaItemService.getMediaItems().then(function (media) { return _this.mediaItems = media; });
    };
    MediaItemsComponent.prototype.requestPlay = function (event, media) {
        this.mediaItemService.requestPlay(media);
    };
    MediaItemsComponent.prototype.ngOnInit = function () {
        this.fetchMedia();
    };
    MediaItemsComponent.prototype.ngAfterViewInit = function () {
        // console.log(this);
    };
    return MediaItemsComponent;
}());
MediaItemsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-media-items',
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_media_inventory_service__["a" /* MediaInventoryService */]],
        template: __webpack_require__("../../../../../src/app/media-items/media-items.component.html"),
        styles: [__webpack_require__("../../../../../src/app/media-items/media-items.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_media_inventory_service__["a" /* MediaInventoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_media_inventory_service__["a" /* MediaInventoryService */]) === "function" && _a || Object])
], MediaItemsComponent);

var _a;
//# sourceMappingURL=media-items.component.js.map

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

var SecondsToHmsPipe = (function () {
    function SecondsToHmsPipe() {
    }
    SecondsToHmsPipe.prototype.transform = function (value, args) {
        var hours = Math.floor(value / 3600);
        value = value - (hours * 3600);
        var minutes = Math.floor(value / 60);
        var seconds = value - minutes * 60;
        var result = '';
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
    };
    SecondsToHmsPipe.prototype.pad = function (value, length) {
        var s = String(value);
        while (s.length < (length || 2)) {
            s = '0' + s;
        }
        return s;
    };
    return SecondsToHmsPipe;
}());
SecondsToHmsPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'secondsToHms'
    })
], SecondsToHmsPipe);

//# sourceMappingURL=seconds-to-hms.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/media-control.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaControlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__("../../../../../src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MediaControlService = (function () {
    function MediaControlService(wsService, http) {
        this.wsService = wsService;
        this.http = http;
        // this.State = new BehaviorSubject<PlayerState>(this.getEmptyState());
        this.State = this.wsService
            .connect(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* config */].Endpoints.ControlStatus)
            .map(function (response) {
            console.log(response);
            var data = JSON.parse(response.data);
            // console.log(data);
            return data;
        });
    }
    MediaControlService.prototype.requestAction = function (action, data) {
        this.http.post(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* config */].Endpoints.Main + 'action/' + action, data)
            .toPromise()
            .catch(this.handleError);
    };
    MediaControlService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    MediaControlService.prototype.getEmptyState = function () {
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
    };
    return MediaControlService;
}());
MediaControlService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__websocket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__websocket_service__["a" /* WebSocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], MediaControlService);

var _a, _b;
//# sourceMappingURL=media-control.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/media-inventory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Media */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaInventoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__("../../../../../src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Media = (function () {
    function Media(id, name, description, thumbs, source) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.thumbs = thumbs;
        this.source = source;
    }
    return Media;
}());

var MediaInventoryService = (function () {
    function MediaInventoryService(http) {
        this.http = http;
    }
    MediaInventoryService.prototype.getMediaItems = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* config */].Endpoints.Main + 'getmediaitems' /*, { headers: headers }*/)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    MediaInventoryService.prototype.requestPlay = function (media) {
        this.http.get(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* config */].Endpoints.Main + 'playitem/' + media.id)
            .toPromise()
            .catch(this.handleError);
    };
    MediaInventoryService.prototype.requestAdd = function (url) {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* config */].Endpoints.Main + 'addmedia/' + url).subscribe(console.log);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].interval(500)
            .switchMap(function () { return _this.http.get(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* config */].Endpoints.Main + 'addmediaprogress/' + url); })
            .map(function (response) { return response; });
    };
    MediaInventoryService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return MediaInventoryService;
}());
MediaInventoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], MediaInventoryService);

var _a;
//# sourceMappingURL=media-inventory.service.js.map

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



var WebSocketService = (function () {
    function WebSocketService() {
    }
    WebSocketService.prototype.connect = function (url) {
        if (!this.subject) {
            this.subject = this.create(url);
        }
        return this.subject;
    };
    WebSocketService.prototype.create = function (url) {
        var ws = new WebSocket(url);
        var observable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (obs) {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        var observer = {
            next: function (data) {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            }
        };
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"].create(observer, observable);
    };
    return WebSocketService;
}()); // end class WebSocketService
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

module.exports = "<h1 md-dialog-title>Video Settings</h1>\r\n<md-dialog-content>\r\n\t<md-list>\r\n\t\t<md-list-item>\r\n\t\t\t <md-icon md-list-icon>aspect_ratio</md-icon>\r\n\t\t\t <!-- <h3 md-line>Aspect Mode</h3>-->\r\n\t\t\t <md-select placeholder=\"Aspect Mode\" (change)=\"settingsValueChanged('set_aspect_mode', $event);\" value=\"\">\r\n\t\t\t\t<md-option value=\"letterbox\">Letter Box</md-option>\r\n\t\t\t  \t<md-option value=\"fill\">Fill</md-option>\r\n\t\t\t  \t<md-option value=\"stretch\">Stretch</md-option>\r\n\t\t\t</md-select>\r\n\t\t</md-list-item>\r\n\t\t<md-list-item>\r\n\t\t\t <md-icon md-list-icon>opacity</md-icon>\r\n\t\t\t <!-- <h3 md-line>Opacity</h3>-->\r\n\t\t\t <md-slider min=\"0\" max=\"255\" thumbLabel=\"true\" value=\"\" (change)=\"settingsValueChanged('set_alpha', $event);\"></md-slider>\r\n\t\t</md-list-item>\r\n\t\t<md-list-item>\r\n\t\t\t<img src=\"{{pstate.media.thumbs[0]}}\" />\r\n\t\t\t<!-- <img-cropper image=\"\" ></img-cropper>\r\n\t\t\t<img [src]=\"data.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">-->\r\n\t\t</md-list-item>\r\n\t</md-list>\r\n</md-dialog-content>\r\n"

/***/ }),

/***/ "../../../../../src/app/video-settings/video-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_media_control_service__ = __webpack_require__("../../../../../src/app/services/media-control.service.ts");
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




var VideoSettingsComponent = (function () {
    function VideoSettingsComponent(mediaControlService) {
        this.mediaControlService = mediaControlService;
        this.cropperSettings = new __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__["a" /* CropperSettings */]();
        this.cropperSettings.width = 100;
        this.cropperSettings.height = 100;
        this.cropperSettings.croppedWidth = 100;
        this.cropperSettings.croppedHeight = 100;
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.canvasHeight = 300;
    }
    VideoSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pstate = this.mediaControlService.getEmptyState();
        this.mediaControlService.State.subscribe(function (s) {
            if (s == null) {
                _this.pstate = _this.mediaControlService.getEmptyState();
            }
            else {
                _this.pstate = s;
            }
        });
    };
    VideoSettingsComponent.prototype.settingsValueChanged = function (action, event) {
        console.log(action, event);
        this.mediaControlService.requestAction(action, [event.value]);
    };
    return VideoSettingsComponent;
}());
VideoSettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-video-settings',
        template: __webpack_require__("../../../../../src/app/video-settings/video-settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/video-settings/video-settings.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_media_control_service__["a" /* MediaControlService */], __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__["a" /* WebSocketService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_media_control_service__["a" /* MediaControlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_media_control_service__["a" /* MediaControlService */]) === "function" && _a || Object])
], VideoSettingsComponent);

var _a;
//# sourceMappingURL=video-settings.component.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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