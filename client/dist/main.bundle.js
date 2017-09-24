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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<md-toolbar color=\"primary\">\n    <span>{{title}}</span>\n    <span class=\"spacer\"></span>\n    <button md-icon-button [mdMenuTriggerFor]=\"rootMenu\">\n\t\t<md-icon>more_vert</md-icon>\n    </button>\n    <md-menu #rootMenu=\"mdMenu\">\n\t\t<button md-menu-item (click)=\"showAddMediaDialog();\">\n\t\t\t<md-icon>add_to_queue</md-icon>\n\t\t\t<span>Add Media</span>\n\t\t</button>\n\t\t<button md-menu-item (click)=\"showVideoSettingsDialog();\">\n\t\t\t<md-icon>settings</md-icon>\n\t\t\t<span>Video Settings</span>\n\t\t</button>\n\t\t<button md-menu-item (click)=\"showWifiSettingsDialog();\">\n\t\t\t<md-icon>network_wifi</md-icon>\n\t\t\t<span>WiFi Settings</span>\n\t\t</button>\n\t\t<button md-menu-item [mdMenuTriggerFor]=\"powerMenu\">\n\t\t\t<md-icon>settings_power</md-icon>\n    \t\t<span>Power Options</span>\n\t\t</button>\n    </md-menu>\n    \n    <md-menu #powerMenu=\"mdMenu\">\n    \t<button md-menu-item (click)=\"updateApplication();\">\n    \t\t<md-icon>system_update</md-icon>\n    \t\t<span>Update</span>\n    \t</button>\n    \t<button md-menu-item (click)=\"restartServices();\">\n    \t\t<md-icon>autorenew</md-icon>\n    \t\t<span>Refresh</span>\n    \t</button>\n    \t<button md-menu-item (click)=\"restartSystem();\">\n    \t\t<md-icon>refresh</md-icon>\n    \t\t<span>Restart</span>\n    \t</button>\n    \t<button md-menu-item (click)=\"shutdownSystem();\">\n    \t\t<md-icon>power_settings_new</md-icon>\n    \t\t<span>Shutdown</span>\n    \t</button>\n    </md-menu>\n</md-toolbar>\n\n<app-media-controller></app-media-controller>\n<app-media-items></app-media-items>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  /* margin:20px; */ }\n\n.spacer {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto; }\n\n.mat-menu-content {\n  font-size: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_system_control_service__ = __webpack_require__("../../../../../src/app/services/system-control.service.ts");
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
    function AppComponent(dialog, sysCtrlService) {
        this.dialog = dialog;
        this.sysCtrlService = sysCtrlService;
        this.title = 'HoloDeck';
    }
    AppComponent.prototype.ngOnInit = function () {
        // subscribe to some source of theme change events, then...
        // this.themeClass = newThemeClass;
        // this.overlayContainer.themeClass = newThemeClass;
    };
    AppComponent.prototype.reloadApp = function () {
        window.location.replace('/'); // reload the app
    };
    AppComponent.prototype.showAddMediaDialog = function () {
        this.dialog.showAddMediaDialog();
    };
    AppComponent.prototype.showVideoSettingsDialog = function () {
        this.dialog.showVideoSettingsDialog();
    };
    AppComponent.prototype.showWifiSettingsDialog = function () {
        this.dialog.showWifiSettingsDialog();
    };
    /*private watchHeartBeatThenReload(rsp): void {
      if (rsp) {
        this.reloadApp();
      }
    }
    private watchHeartBeatError(err): void {
      this.sysCtrlService.requestSystemUpdate().subscribe(res => this.watchHeartBeatThenReload(res), err => this.watchHeartBeatError(err))
    }*/
    AppComponent.prototype.updateApplication = function () {
        var _this = this;
        var title = 'Update System?';
        var message = 'Are you sure that you want to update the system?';
        var icon = '';
        var confirm_button = 'Update';
        var cancel_button = 'Cancel';
        this.dialog.confirm(title, message, icon, confirm_button, cancel_button).subscribe(function (data) {
            if (data) {
                var prog_1;
                prog_1 = _this.dialog.progress('Updating System....', '', '');
                //this.sysCtrlService.requestSystemUpdate().subscribe(res => this.watchHeartBeatThenReload(res), err => this.watchHeartBeatError(err))
                _this.sysCtrlService.requestSystemUpdate().subscribe(function (rsp) {
                    if (rsp) {
                        prog_1.close();
                        _this.reloadApp();
                    }
                }, function (err) {
                    // do nothing
                });
            }
        });
    };
    AppComponent.prototype.restartServices = function () {
        var _this = this;
        var title = 'Restart Services?';
        var message = 'Are you sure that you want to restart all services?';
        var icon = '';
        var confirm_button = 'Restart';
        var cancel_button = 'Cancel';
        this.dialog.confirm(title, message, icon, confirm_button, cancel_button).subscribe(function (data) {
            if (data) {
                var prog_2;
                prog_2 = _this.dialog.progress('Restarting Services....', '', '');
                _this.sysCtrlService.requestRestartServices().subscribe(function (rsp) {
                    if (rsp) {
                        prog_2.close();
                        _this.reloadApp();
                    }
                }, function (err) {
                    // do nothing
                });
            }
        });
    };
    AppComponent.prototype.restartSystem = function () {
        var _this = this;
        var title = 'Restart System?';
        var message = 'Are you sure that you want to restart the system?';
        var icon = '';
        var confirm_button = 'Restart';
        var cancel_button = 'Cancel';
        this.dialog.confirm(title, message, icon, confirm_button, cancel_button).subscribe(function (data) {
            if (data) {
                var prog_3;
                prog_3 = _this.dialog.progress('Restarting System....', '', '');
                _this.sysCtrlService.requestRestartSystem().subscribe(function (rsp) {
                    if (rsp) {
                        prog_3.close();
                        _this.reloadApp();
                    }
                }, function (err) {
                    // do nothing
                });
            }
        });
    };
    AppComponent.prototype.shutdownSystem = function () {
        var _this = this;
        var title = 'Shutdown System?';
        var message = 'Are you sure that you want to shutdown the system?';
        var icon = '';
        var confirm_button = 'Shutdown';
        var cancel_button = 'Cancel';
        this.dialog.confirm(title, message, icon, confirm_button, cancel_button).subscribe(function (data) {
            if (data) {
                var prog_4;
                prog_4 = _this.dialog.progress('Shutting System Down....', '', '');
                _this.sysCtrlService.requestShutdownSystem().subscribe(function (rsp) {
                    if (rsp) {
                        prog_4.close();
                        _this.reloadApp();
                    }
                }, function (err) {
                    // do nothing
                });
            }
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dialogs_service__["a" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dialogs_service__["a" /* DialogsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_system_control_service__["a" /* SystemControlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_system_control_service__["a" /* SystemControlService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_useful_swiper__ = __webpack_require__("../../../../angular2-useful-swiper/lib/swiper.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_useful_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_useful_swiper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_click_outside__ = __webpack_require__("../../../../ng-click-outside/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__img_cycler_img_cycler_component__ = __webpack_require__("../../../../../src/app/img-cycler/img-cycler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__media_items_media_items_component__ = __webpack_require__("../../../../../src/app/media-items/media-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__media_controller_media_controller_component__ = __webpack_require__("../../../../../src/app/media-controller/media-controller.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_seconds_to_hms_pipe__ = __webpack_require__("../../../../../src/app/pipes/seconds-to-hms.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_bytes_to_human_pipe__ = __webpack_require__("../../../../../src/app/pipes/bytes-to-human.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dialogs_add_media_add_media_component__ = __webpack_require__("../../../../../src/app/dialogs/add-media/add-media.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dialogs_confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/dialogs/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dialogs_manage_wifi_manage_wifi_component__ = __webpack_require__("../../../../../src/app/dialogs/manage-wifi/manage-wifi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dialogs_video_settings_video_settings_component__ = __webpack_require__("../../../../../src/app/dialogs/video-settings/video-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_media_control_service__ = __webpack_require__("../../../../../src/app/services/media-control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_media_inventory_service__ = __webpack_require__("../../../../../src/app/services/media-inventory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_wifi_management_service__ = __webpack_require__("../../../../../src/app/services/wifi-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_system_control_service__ = __webpack_require__("../../../../../src/app/services/system-control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__dialogs_progress_dialog_progress_dialog_component__ = __webpack_require__("../../../../../src/app/dialogs/progress-dialog/progress-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//core angular stuff





//third-party stuff


// import { ImageCropperComponent } from 'ng2-img-cropper';

//my stuff

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__media_items_media_items_component__["a" /* MediaItemsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__media_controller_media_controller_component__["a" /* MediaControllerComponent */],
            __WEBPACK_IMPORTED_MODULE_14__dialogs_add_media_add_media_component__["a" /* AddMediaComponent */],
            __WEBPACK_IMPORTED_MODULE_17__dialogs_video_settings_video_settings_component__["a" /* VideoSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pipes_seconds_to_hms_pipe__["a" /* SecondsToHmsPipe */],
            __WEBPACK_IMPORTED_MODULE_13__pipes_bytes_to_human_pipe__["a" /* BytesToHumanPipe */],
            __WEBPACK_IMPORTED_MODULE_9__img_cycler_img_cycler_component__["a" /* ImgCyclerComponent */],
            __WEBPACK_IMPORTED_MODULE_15__dialogs_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_16__dialogs_manage_wifi_manage_wifi_component__["a" /* ManageWifiComponent */],
            __WEBPACK_IMPORTED_MODULE_24__dialogs_progress_dialog_progress_dialog_component__["a" /* ProgressDialogComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_useful_swiper__["SwiperModule"],
            // ImageCropperComponent,
            __WEBPACK_IMPORTED_MODULE_7_ng_click_outside__["ClickOutsideModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_14__dialogs_add_media_add_media_component__["a" /* AddMediaComponent */],
            __WEBPACK_IMPORTED_MODULE_17__dialogs_video_settings_video_settings_component__["a" /* VideoSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__dialogs_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_16__dialogs_manage_wifi_manage_wifi_component__["a" /* ManageWifiComponent */],
            __WEBPACK_IMPORTED_MODULE_24__dialogs_progress_dialog_progress_dialog_component__["a" /* ProgressDialogComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_20__services_media_inventory_service__["a" /* MediaInventoryService */], __WEBPACK_IMPORTED_MODULE_21__services_websocket_service__["a" /* WebSocketService */], __WEBPACK_IMPORTED_MODULE_19__services_media_control_service__["a" /* MediaControlService */], __WEBPACK_IMPORTED_MODULE_18__services_dialogs_service__["a" /* DialogsService */], __WEBPACK_IMPORTED_MODULE_22__services_wifi_management_service__["a" /* WifiManagementService */], __WEBPACK_IMPORTED_MODULE_23__services_system_control_service__["a" /* SystemControlService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    title: 'Hello World',
    Endpoints: {
        ControlStatus: 'ws://' + window.location.hostname + ':' + window.location.port + '/status',
        Main: 'http://' + window.location.hostname + ':' + window.location.port + '/'
    }
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "../../../../../src/app/dialogs/add-media/add-media.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>Add Media Source</h1>\r\n<md-dialog-content>\r\n\t<form>\r\n\t\t<md-form-field class=\"\">\r\n\t    \t<input mdInput type=\"url\" name=\"source\" placeholder=\"Source\" [(ngModel)]=\"media_url\" [disabled]=\"is_submitted\">\r\n\t\t</md-form-field>\r\n\t</form>\r\n\r\n\t<div id=\"progress_container\" *ngIf=\"progress\"><!--  -->\r\n\t\t<div class=\"download\" *ngIf=\"progress.task == 'download'\"><!-- -->\r\n\t\t\t<span class=\"task\">Downloading....</span>\r\n\t\t\t<md-progress-bar color=\"primary\" mode=\"determinate\" [value]=\"progress.ratio * 100\"></md-progress-bar>\r\n\t\t\t<span class=\"rate\">{{progress.recieved | bytesToHuman}} / {{progress.total | bytesToHuman}} ({{progress.rate | bytesToHuman}}/s)</span>\r\n\t\t\t<span class=\"eta\">{{ progress.eta | secondsToHms }} remaining</span>\r\n\t\t</div>\r\n\t\t<div class=\"thumbnail\" *ngIf=\"progress.task == 'thumbnail'\"> <!--  -->\r\n\t\t\t<span class=\"task\">{{progress.task}}</span>\r\n\t\t\t<md-progress-bar color=\"primary\" mode=\"determinate\" [value]=\"progress.ratio * 100\"></md-progress-bar>\r\n\t\t\t<span class=\"rate\">{{progress.recieved}} / {{progress.total}}</span>\r\n\t\t</div>\r\n\t\t<div class=\"complete\" *ngIf=\"progress.task == 'success'\"><!--  -->\r\n\t\t\t<md-icon class=\"md-36\" aria-label=\"Done\" color=\"primary\" >cloud_done</md-icon>\r\n\t\t\t<span>Finished!</span>\r\n\t\t</div>\r\n\t\t<div class=\"complete\" *ngIf=\"progress.task == 'failure'\">\r\n\t\t\t<md-icon class=\"md-36\" aria-label=\"Error!\" color=\"warn\">error</md-icon>\r\n\t\t\t<span>Error!</span>\r\n\t\t\t<p>{{progress.help}}</p>\r\n\t\t</div>\r\n\t</div>\r\n</md-dialog-content>\r\n<md-dialog-actions>\r\n\t<button md-raised-button color=\"primary\" [disabled]=\"is_submitted\" (click)=\"add_media()\">Add Media</button>\r\n\t<button md-raised-button color=\"primary\" (click)=\"cancel()\">Cancel</button>\r\n</md-dialog-actions>\r\n"

/***/ }),

/***/ "../../../../../src/app/dialogs/add-media/add-media.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#progress_container span.task {\n  font-weight: bold; }\n\n#progress_container span.rate,\n#progress_container span.eta {\n  float: right;\n  clear: right;\n  display: block;\n  font-size: 12px; }\n\n#progress_container .complete span {\n  font-size: 1.2em;\n  font-weight: bold;\n  vertical-align: middle;\n  line-height: 36px;\n  padding-left: 10px; }\n\n#progress_container .complete md-icon {\n  float: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialogs/add-media/add-media.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMediaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_media_inventory_service__ = __webpack_require__("../../../../../src/app/services/media-inventory.service.ts");
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
        this.is_submitted = false;
        this.media_url = '';
        this.progress = {
            complete: false,
            task: 'Downloading...',
            help: 'Some help message........',
            total: 10,
            recieved: 5,
            ratio: 0.5,
            rate: 1,
            eta: 500
        };
    };
    AddMediaComponent.prototype.check_complete = function () {
        if (this.progress.complete) {
            this.progressSub.unsubscribe();
            console.log('Notifying service to requery!');
            this.mediaItemService.suggestInventoryQuery.emit(null);
            this.dialogRef.close();
        }
    };
    AddMediaComponent.prototype.add_media = function () {
        var _this = this;
        this.is_submitted = true;
        // 'd3Eelj9Pkvw'
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-media',
        providers: [],
        template: __webpack_require__("../../../../../src/app/dialogs/add-media/add-media.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dialogs/add-media/add-media.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_media_inventory_service__["a" /* MediaInventoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_media_inventory_service__["a" /* MediaInventoryService */]) === "function" && _b || Object])
], AddMediaComponent);

var _a, _b;
//# sourceMappingURL=add-media.component.js.map

/***/ }),

/***/ "../../../../../src/app/dialogs/confirm-dialog/confirm-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>{{ title }}</h1>\r\n<md-dialog-content>\r\n\t<p>{{ message }}</p>\r\n</md-dialog-content>\r\n<md-dialog-actions>\r\n\t<button type=\"button\" color=\"primary\" md-raised-button (click)=\"dialogRef.close(true)\">{{confirm_button}}</button>\r\n\t<button type=\"button\" md-button (click)=\"dialogRef.close()\">{{cancel_button}}</button>\r\n</md-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/dialogs/confirm-dialog/confirm-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialogs/confirm-dialog/confirm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDialogComponent = (function () {
    function ConfirmDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return ConfirmDialogComponent;
}());
ConfirmDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'confirm-dialog',
        template: __webpack_require__("../../../../../src/app/dialogs/confirm-dialog/confirm-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dialogs/confirm-dialog/confirm-dialog.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["e" /* MdDialogRef */]) === "function" && _a || Object])
], ConfirmDialogComponent);

var _a;
//# sourceMappingURL=confirm-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/dialogs/manage-wifi/manage-wifi.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>Manage WiFi</h1>\n<md-dialog-content>\n\t<form *ngIf=\"state == 'config'\" class=\"config\">\n\t\t<h2>Connect to {{selectedSource.ssid}}</h2>\n\t\t<md-form-field class=\"\">\n\t    \t<input mdInput type=\"url\" name=\"source\" placeholder=\"Passphrase\" [(ngModel)]=\"media_url\" [disabled]=\"is_submitted\">\n\t\t</md-form-field>\n\t</form>\n\t\n\t<div *ngIf=\"state == 'connecting'\" class=\"connecting\">\n\t\t<h3>Connecting to {{selectedSource.ssid}}</h3>\n\t\t<md-progress-bar mode=\"indeterminate\"></md-progress-bar>\n\t</div>\n\t\n\t<div *ngIf=\"state == 'error'\" class=\"error\">\n\t\t<md-icon class=\"md-36\" aria-label=\"Error!\" color=\"warn\">error</md-icon>\n\t\t<span>Error Connecting to {{selectedSource.ssid}}</span>\n\t\t<p>{{error_data}}</p>\n\t</div>\n\t\n\t<div *ngIf=\"state == 'success'\" class=\"success\">\n\t\t<md-icon class=\"md-36\" aria-label=\"Success!\" color=\"primary\">done</md-icon>\n\t\t<span>Success!</span>\n\t\t<p>Successfully connected to {{selectedSource.ssid}}</p>\n\t</div>\n\n\t<md-list *ngIf=\"state == 'list'\">\n\t\t<div *ngIf=\"networks == null\">\n\t\t\t<h3>Loading...</h3>\n\t\t\t<md-progress-bar mode=\"indeterminate\"></md-progress-bar>\n\t\t</div>\n\t\t<md-list-item *ngFor=\"let cell of networks\" (click)=\"start_connect($event, cell);\">\n\t\t\t<md-icon mdListIcon>{{ cell.encrypted ? 'wifi_lock' : 'network_wifi' }}</md-icon>\n\t\t\t<h3 mdLine> {{cell.ssid}} <span class=\"saved\" *ngIf=\"cell.saved\">(saved)</span></h3>\n\t\t\t<p mdLine>\n\t\t\t\t\n\t\t\t\t<span class=\"encryption\">{{ cell.encrypted ? 'protected with ' + cell.encryption_type : 'unprotected'}}</span>\n\t\t\t</p>\n\t\t</md-list-item>\n\t</md-list>\n\n\n\t<!-- <md-table #table [dataSource]=\"networks\" >\n\t\t<ng-container mdColumnDef=\"ssid\">\n\t      <md-header-cell *mdHeaderCellDef>SSID</md-header-cell>\n\t      <md-cell *mdCellDef=\"let row\"> {{row.ssid}}</md-cell>\n\t    </ng-container>\n\t    <ng-container mdColumnDef=\"saved\">\n\t      <md-header-cell *mdHeaderCellDef>Saved</md-header-cell>\n\t      <md-cell *mdCellDef=\"let row\"> {{ row.saved ? 'yes' : 'no' }}</md-cell>\n\t    </ng-container>\n\t    \n\t    <md-header-row *mdHeaderRowDef=\"displayedColumns\"></md-header-row>\n    \t<md-row *mdRowDef=\"let row; columns: displayedColumns;\" (click)=\"start_connect($event, row);\"></md-row>\n\t</md-table>-->\n</md-dialog-content>\n<md-dialog-actions *ngIf=\"state == 'config'\">\n\t<button md-raised-button color=\"primary\" (click)=\"connect()\">Connect</button>\n\t<button md-raised-button color=\"primary\" (click)=\"cancel()\">Cancel</button>\n</md-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/dialogs/manage-wifi/manage-wifi.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-dialog-content {\n  /* padding:0; */ }\n\nmd-list-item .saved {\n  color: #999; }\n\nmd-list-item .encryption {\n  color: #999; }\n\n.success span,\n.error span {\n  font-size: 1.2em;\n  font-weight: bold;\n  vertical-align: middle;\n  line-height: 36px;\n  padding-left: 10px; }\n\n.success md-icon,\n.error md-icon {\n  float: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialogs/manage-wifi/manage-wifi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageWifiComponent; });
/* unused harmony export WifiDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("../../../cdk/@angular/cdk/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_wifi_management_service__ = __webpack_require__("../../../../../src/app/services/wifi-management.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageWifiComponent = (function () {
    function ManageWifiComponent(dialogRef, wifiService) {
        this.dialogRef = dialogRef;
        this.wifiService = wifiService;
        this.displayedColumns = ['ssid', 'saved'];
        //this.networks = new WifiDataSource(wifiService);
        this.state = 'list';
        this.passphrase = '';
    }
    ManageWifiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wifiService.listConnections().toPromise().then(function (networks) { return _this.networks = networks; });
    };
    ManageWifiComponent.prototype.start_connect = function (event, wsource) {
        this.selectedSource = wsource;
        if (this.selectedSource.saved || !this.selectedSource.encrypted) {
            this.connect();
        }
        else {
            this.state = 'config';
        }
        console.log(event, wsource);
    };
    ManageWifiComponent.prototype.connect = function () {
        var _this = this;
        this.state = 'connecting';
        var obsv;
        obsv = this.wifiService.connect(this.selectedSource.ssid, this.passphrase);
        obsv.subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.dialogRef.close();
                _this.state = 'success';
                setTimeout(function () { _this.dialogRef.close(); }, 5000);
            }
            else {
                _this.error_data = data.message;
                _this.state = 'error';
            }
        });
    };
    ManageWifiComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    return ManageWifiComponent;
}());
ManageWifiComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'manage-wifi',
        providers: [],
        template: __webpack_require__("../../../../../src/app/dialogs/manage-wifi/manage-wifi.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dialogs/manage-wifi/manage-wifi.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_wifi_management_service__["a" /* WifiManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_wifi_management_service__["a" /* WifiManagementService */]) === "function" && _b || Object])
], ManageWifiComponent);

var WifiDataSource = (function (_super) {
    __extends(WifiDataSource, _super);
    function WifiDataSource(wifiService) {
        var _this = _super.call(this) || this;
        _this.wifiService = wifiService;
        return _this;
    }
    WifiDataSource.prototype.connect = function () {
        return this.wifiService.listConnections();
    };
    WifiDataSource.prototype.disconnect = function () { };
    return WifiDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));

var _a, _b;
//# sourceMappingURL=manage-wifi.component.js.map

/***/ }),

/***/ "../../../../../src/app/dialogs/progress-dialog/progress-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>{{ title }}</h1>\r\n<md-dialog-content>\r\n\t<md-progress-bar mode=\"indeterminate\"></md-progress-bar>\r\n\t<p>{{ message }}</p>\r\n</md-dialog-content>"

/***/ }),

/***/ "../../../../../src/app/dialogs/progress-dialog/progress-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialogs/progress-dialog/progress-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgressDialogComponent = (function () {
    function ProgressDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return ProgressDialogComponent;
}());
ProgressDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'progress-dialog',
        template: __webpack_require__("../../../../../src/app/dialogs/progress-dialog/progress-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dialogs/progress-dialog/progress-dialog.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["e" /* MdDialogRef */]) === "function" && _a || Object])
], ProgressDialogComponent);

var _a;
//# sourceMappingURL=progress-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/dialogs/video-settings/video-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>Video Settings</h1>\r\n<md-dialog-content>\r\n\t<md-list>\r\n\t\t<md-list-item>\r\n\t\t\t <md-icon md-list-icon class=\"md-48\">aspect_ratio</md-icon>\r\n\t\t\t <!-- <h3 md-line>Aspect Mode</h3>-->\r\n\t\t\t <md-select placeholder=\"Aspect Mode\" (change)=\"settingsValueChanged('set_aspect_mode', $event);\" value=\"\">\r\n\t\t\t\t<md-option value=\"letterbox\">Letter Box</md-option>\r\n\t\t\t  \t<md-option value=\"fill\">Fill</md-option>\r\n\t\t\t  \t<md-option value=\"stretch\">Stretch</md-option>\r\n\t\t\t</md-select>\r\n\t\t</md-list-item>\r\n\t\t<md-list-item>\r\n\t\t\t <md-icon md-list-icon class=\"md-48\">opacity</md-icon>\r\n\t\t\t <!-- <h3 md-line>Opacity</h3>-->\r\n\t\t\t <md-slider color=\"primary\" min=\"0\" max=\"255\" thumbLabel=\"true\" value=\"\" (change)=\"settingsValueChanged('set_alpha', $event);\"></md-slider>\r\n\t\t</md-list-item>\r\n\t\t<md-list-item>\r\n\t\t\t<!-- <img src=\"{{pstate.media.thumbs[0]}}\" />\r\n\t\t\t<img-cropper [image]=\"pstate.media.thumbs[0]\" ></img-cropper>\r\n\t\t\t<img [src]=\"cropperData.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">-->\r\n\t\t</md-list-item>\r\n\t</md-list>\r\n</md-dialog-content>\r\n"

/***/ }),

/***/ "../../../../../src/app/dialogs/video-settings/video-settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-list-item {\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid #aaa; }\n\nmd-dialog-content {\n  padding: 0px; }\n\n.mat-list-item md-icon {\n  margin-right: 10px; }\n\nmd-select, md-slider {\n  width: 180px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialogs/video-settings/video-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_media_control_service__ = __webpack_require__("../../../../../src/app/services/media-control.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';
var VideoSettingsComponent = (function () {
    function VideoSettingsComponent(mediaControlService) {
        this.mediaControlService = mediaControlService;
        /*his.cropperSettings = new CropperSettings();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.width = 100;
        this.cropperSettings.height = 100;
        this.cropperSettings.croppedWidth = 100;
        this.cropperSettings.croppedHeight = 100;
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.canvasHeight = 300;
    
        this.cropperData = {};*/
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-video-settings',
        template: __webpack_require__("../../../../../src/app/dialogs/video-settings/video-settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dialogs/video-settings/video-settings.component.scss")],
        providers: [],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_media_control_service__["a" /* MediaControlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_media_control_service__["a" /* MediaControlService */]) === "function" && _a || Object])
], VideoSettingsComponent);

var _a;
//# sourceMappingURL=video-settings.component.js.map

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
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdTableModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdTableModule */]
        ]
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/media-controller/media-controller.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<div id=\"media_state\">\n\t<md-progress-spinner mode=\"determinate\" value=\"{{currentState.position / currentState.duration * 100}}\"></md-progress-spinner>\n\t<!-- <h3>Now Playing:</h3>-->\n\t<div id=\"media_info\">\n\t\t<span class=\"title\">{{currentState.media.name}}</span>\n\t\t<span class=\"time\">{{currentState.position | secondsToHms}} / {{currentState.duration | secondsToHms}}</span>\n\n\t\t<div id=\"control_buttons\">\n\t\t\t<button md-icon-button>\n\t\t\t    <md-icon class=\"md-36 md-light\" aria-label=\"Toggle Mute\" (click)=\"requestAction('seek',[-10])\">fast_rewind</md-icon>\n\t\t\t</button>\n\t\t\t<button md-icon-button>\n\t\t\t    <md-icon class=\"md-36 md-light\" aria-label=\"Play/Pause\" (click)=\"requestAction('play_pause',[])\">{{currentState.is_playing ? 'play_arrow' : 'pause'}}</md-icon>\n\t\t\t</button>\n\t\t\t<button md-icon-button>\n\t\t\t    <md-icon class=\"md-36 md-light\" aria-label=\"Toggle Mute\" (click)=\"requestAction('seek',[10])\">fast_forward</md-icon>\n\t\t\t</button>\n\t\t\t\n\t\t\t<div id=\"volume_controls\">\n\t\t\t\t<button md-icon-button id=\"volume_overlay_trigger\">\n\t\t\t\t\t<md-icon class=\"md-36 md-light\" aria-label=\"Toggle Mute\" (click)=\"vover_open = !vover_open\">{{currentState.volume == 0 ? 'volume_mute' : 'volume_off'}}</md-icon>\n\t\t\t\t</button>\n\t\t\t\t\n\t\t\t\t<div *ngIf=\"vover_open\" id=\"volume_overlay\" (clickOutside)=\"vover_open = false\" [delayClickOutsideInit]=\"true\">\n\t\t\t\t\t<md-slider thumbLabel=\"true\" vertical=\"true\" value=\"{{currentState.volume}}\" color=\"primary\" (change)=\"volume_slider_changed($event)\" ></md-slider>\n\t\t\t\t\t<button md-icon-button>\n\t\t\t\t\t\t<md-icon class=\"md-36 md-light\" aria-label=\"Toggle Mute\" (click)=\"requestAction('toggle_mute',[])\">{{currentState.volume == 0 ? 'volume_mute' : 'volume_off'}}</md-icon>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n</div>\n\t\n\n\t\n\n"

/***/ }),

/***/ "../../../../../src/app/media-controller/media-controller.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  position: relative;\n  display: block;\n  height: 110px;\n  width: 100%;\n  background: #3f3f3f; }\n\n#media_state {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%; }\n\n#media_state md-progress-spinner {\n  width: 80px;\n  height: 80px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 10px;\n  margin-right: 20px;\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none; }\n\n#media_state #media_info {\n  max-width: 65%;\n  margin-top: 10px; }\n\n#media_state span {\n  display: block; }\n\n#media_state span.title {\n  font-size: 18px;\n  color: #efefef;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis; }\n\n#media_state span.time {\n  font-size: 12px;\n  font-style: italic;\n  color: #afafaf; }\n\n#control_buttons {\n  margin-top: 20px;\n  /*position:absolute;\r\n\ttop:70px;\r\n\tleft:120px;\r\n\tclear:both;*/ }\n\n#volume_controls {\n  /*position:absolute; \r\n\ttop:0; \r\n\tright:0;*/\n  width: 48px;\n  display: inline-block; }\n\n#volume_controls button {\n  /*display:block; \r\n\tclear:both; \r\n\tmargin-top:10px; \r\n\tmargin-right:0;*/ }\n\n#volume_overlay {\n  position: relative;\n  z-index: 999;\n  background: #999999;\n  width: 48px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/media-controller/media-controller.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaControllerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_media_control_service__ = __webpack_require__("../../../../../src/app/services/media-control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-media-controller',
        template: __webpack_require__("../../../../../src/app/media-controller/media-controller.component.html"),
        providers: [],
        styles: [__webpack_require__("../../../../../src/app/media-controller/media-controller.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_media_control_service__["a" /* MediaControlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_media_control_service__["a" /* MediaControlService */]) === "function" && _a || Object])
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
exports.push([module.i, "md-card {\n  margin: 20px;\n  margin-bottom: 0; }\n\nmd-card-title {\n  font-weight: bold; }\n\nmd-card-subtitle {\n  display: none; }\n\napp-img-cycler {\n  width: 100%;\n  display: block; }\n\n@media screen and (max-device-width: 1000px) and (orientation: landscape) {\n  md-card-content {\n    display: none; } }\n", ""]);

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
        var _this = this;
        this.mediaItemService.suggestInventoryQuery.subscribe(function () {
            console.log('I heard that you want a media requery');
            _this.fetchMedia();
        });
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
        providers: [],
        template: __webpack_require__("../../../../../src/app/media-items/media-items.component.html"),
        styles: [__webpack_require__("../../../../../src/app/media-items/media-items.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_media_inventory_service__["a" /* MediaInventoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_media_inventory_service__["a" /* MediaInventoryService */]) === "function" && _a || Object])
], MediaItemsComponent);

var _a;
//# sourceMappingURL=media-items.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/bytes-to-human.pipe.ts":
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

/***/ "../../../../../src/app/pipes/seconds-to-hms.pipe.ts":
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

/***/ "../../../../../src/app/services/dialogs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialogs_confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/dialogs/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialogs_add_media_add_media_component__ = __webpack_require__("../../../../../src/app/dialogs/add-media/add-media.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialogs_manage_wifi_manage_wifi_component__ = __webpack_require__("../../../../../src/app/dialogs/manage-wifi/manage-wifi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogs_video_settings_video_settings_component__ = __webpack_require__("../../../../../src/app/dialogs/video-settings/video-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialogs_progress_dialog_progress_dialog_component__ = __webpack_require__("../../../../../src/app/dialogs/progress-dialog/progress-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DialogsService = (function () {
    function DialogsService(dialog) {
        this.dialog = dialog;
    }
    DialogsService.prototype.confirm = function (title, message, icon, confirm_button, cancel_button) {
        if (confirm_button === void 0) { confirm_button = 'OK'; }
        if (cancel_button === void 0) { cancel_button = 'Cancel'; }
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__dialogs_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */]);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.icon = icon;
        dialogRef.componentInstance.confirm_button = confirm_button;
        dialogRef.componentInstance.cancel_button = cancel_button;
        return dialogRef.afterClosed();
    };
    DialogsService.prototype.progress = function (title, message, icon) {
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__dialogs_progress_dialog_progress_dialog_component__["a" /* ProgressDialogComponent */]);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.icon = icon;
        return dialogRef;
    };
    DialogsService.prototype.showAddMediaDialog = function () {
        console.log('opening add dialog!');
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__dialogs_add_media_add_media_component__["a" /* AddMediaComponent */], {});
        return dialogRef.afterClosed();
    };
    DialogsService.prototype.showVideoSettingsDialog = function () {
        console.log('opening video settings!');
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__dialogs_video_settings_video_settings_component__["a" /* VideoSettingsComponent */], {
            // height: '400px',
            width: '300px',
        });
        return dialogRef.afterClosed();
    };
    DialogsService.prototype.showWifiSettingsDialog = function () {
        console.log('opening video settings!');
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__dialogs_manage_wifi_manage_wifi_component__["a" /* ManageWifiComponent */], {});
        return dialogRef.afterClosed();
    };
    return DialogsService;
}());
DialogsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdDialog */]) === "function" && _a || Object])
], DialogsService);

var _a;
//# sourceMappingURL=dialogs.service.js.map

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
            // console.log(response);
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
        this.suggestInventoryQuery = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.suggestInventoryQuery.subscribe(function () { return console.log('service saw requery request'); });
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
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]) === "function" && _a || Object)
], MediaInventoryService.prototype, "suggestInventoryQuery", void 0);
MediaInventoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], MediaInventoryService);

var _a, _b;
//# sourceMappingURL=media-inventory.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/system-control.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemControlService; });
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





var SystemControlService = (function () {
    function SystemControlService(http) {
        this.http = http;
        this.suggestInventoryQuery = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.suggestInventoryQuery.subscribe(function () { return console.log('service saw requery request'); });
    }
    SystemControlService.prototype.requestSystemUpdate = function () {
        this.http.post(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* config */].Endpoints.Main + 'system/update', {}).subscribe(console.log);
        return this.requestSystemHeartbeat();
    };
    SystemControlService.prototype.requestRestartServices = function () {
        this.http.post(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* config */].Endpoints.Main + 'system/restart_services', {}).subscribe(console.log);
        return this.requestSystemHeartbeat();
    };
    SystemControlService.prototype.requestRestartSystem = function () {
        this.http.post(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* config */].Endpoints.Main + 'system/restart_system', {}).subscribe(console.log);
        return this.requestSystemHeartbeat();
    };
    SystemControlService.prototype.requestShutdownSystem = function () {
        this.http.post(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* config */].Endpoints.Main + 'system/shutdown_system', {}).subscribe(console.log);
        return this.requestSystemHeartbeat();
    };
    SystemControlService.prototype.requestSystemHeartbeat = function (interval) {
        var _this = this;
        if (interval === void 0) { interval = 5000; }
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].interval(interval)
            .switchMap(function () { return _this.http.get(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* config */].Endpoints.Main + '/system/heartbeat'); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].empty(); })
            .map(function (response) { return response; });
    };
    SystemControlService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return SystemControlService;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]) === "function" && _a || Object)
], SystemControlService.prototype, "suggestInventoryQuery", void 0);
SystemControlService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], SystemControlService);

var _a, _b;
//# sourceMappingURL=system-control.service.js.map

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

/***/ "../../../../../src/app/services/wifi-management.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WifiManagementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__("../../../../../src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WifiManagementService = (function () {
    function WifiManagementService(http) {
        this.http = http;
        this.suggestRequery = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.suggestRequery.subscribe(function () { return console.log('service saw requery request'); });
    }
    WifiManagementService.prototype.listConnections = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* config */].Endpoints.Main + 'wifi/list')
            .map(function (result) { return result; })
            .catch(this.handleError);
    };
    WifiManagementService.prototype.connect = function (ssid, passphrase) {
        if (passphrase === void 0) { passphrase = null; }
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* config */].Endpoints.Main + 'wifi/connect', { 'ssid': ssid, 'pswd': passphrase })
            .map(function (result) { return result; })
            .catch(this.handleError);
    };
    WifiManagementService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return WifiManagementService;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]) === "function" && _a || Object)
], WifiManagementService.prototype, "suggestRequery", void 0);
WifiManagementService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], WifiManagementService);

var _a, _b;
//# sourceMappingURL=wifi-management.service.js.map

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