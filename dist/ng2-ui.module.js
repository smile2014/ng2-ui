"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var platform_browser_1 = require('@angular/platform-browser');
var index_1 = require('./ng2-overlay/index');
var index_2 = require("./ng2-auto-complete/index");
var index_3 = require("./ng2-datetime-picker/index");
var index_4 = require("./ng2-collapsable/index");
var index_5 = require("./ng2-infinite-list/index");
var index_6 = require("./ng2-map/index");
var index_7 = require("./ng2-menu/index");
var index_8 = require("./ng2-parallax-scroll/index");
var index_9 = require("./ng2-popup/index");
var index_10 = require("./ng2-sticky/index");
var index_11 = require("./ng2-tab/index");
var index_12 = require("./ng2-tooltip-overlay/index");
var index_13 = require("./ng2-overlay/index");
var index_14 = require("./ng2-scrollable/index");
var Ng2UIModule = (function () {
    function Ng2UIModule() {
    }
    Ng2UIModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            exports: [
                index_2.Ng2AutoCompleteModule,
                index_3.Ng2DatetimePickerModule,
                index_4.Ng2CollapsableModule,
                index_5.Ng2InfiniteListModule,
                index_6.Ng2MapModule,
                index_7.Ng2MenuModule,
                index_8.Ng2ParallaxScrollModule,
                index_9.Ng2PopupModule,
                index_10.Ng2StickyModule,
                index_11.Ng2TabModule,
                index_14.Ng2ScrollableModule,
                index_12.Ng2TooltipOverlayModule,
                index_13.Ng2OverlayModule
            ],
            providers: [index_1.OverlayManager]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2UIModule);
    return Ng2UIModule;
}());
exports.Ng2UIModule = Ng2UIModule;
//# sourceMappingURL=ng2-ui.module.js.map