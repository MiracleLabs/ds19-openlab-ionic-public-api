webpackJsonp([0],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherPageModule", function() { return WeatherPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weather__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WeatherPageModule = /** @class */ (function () {
    function WeatherPageModule() {
    }
    WeatherPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__weather__["a" /* WeatherPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__weather__["a" /* WeatherPage */]),
            ],
        })
    ], WeatherPageModule);
    return WeatherPageModule;
}());

//# sourceMappingURL=weather.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_weather_weather__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WeatherPage = /** @class */ (function () {
    function WeatherPage(navCtrl, weatherProvider, storage) {
        this.navCtrl = navCtrl;
        this.weatherProvider = weatherProvider;
        this.storage = storage;
    }
    WeatherPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('location').then(function (val) {
            if (val != null) {
                _this.location = JSON.parse(val);
            }
            else {
                _this.location = {
                    city: 'visakhapatnam',
                    state: 'Andhra pradesh'
                };
            }
            _this.weatherProvider.getWeather(_this.location.city, _this.location.state).subscribe(function (weather) {
                // console.log(JSON.stringify(weather));
                _this.weather = weather.current_observation;
                console.log(JSON.stringify(weather));
            });
        });
    };
    WeatherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-weather',template:/*ion-inline-start:"D:\Ionic 3 Gallery\Ds_18_firebase_Ionic_lab\weatherapp\src\pages\weather\weather.html"*/'<!-- <ion-header>\n\n  <ion-navbar  color="primary">\n    <ion-title >\n      Weather App \n    </ion-title>\n  </ion-navbar>\n\n</ion-header>       -->\n\n<ion-content padding class="background">\n  <!--Display only if the data is loaded -->\n  <ion-grid *ngIf="weather">\n    <ion-row>\n      <ion-col width-50 offset-25>\n        <!-- Displaying weather location -->\n        <h5 class="textColor" text-center>{{weather.display_location.full}}</h5>\n\n        <!--Displaying weather icon -->\n        <div class="icon" text-center>\n          <img src="{{weather.icon_url}}">\n        </div>\n\n        <div text-center>\n          <h1 class="textColor">{{weather.temperature_string}}</h1>\n        </div>\n        <!-- Displaying weather description -->\n        <h5 class="textColor" text-center>Clear</h5>\n\n        <!-- Displaying temperature in Farenhite-->\n        <h6 class="textColor" text-center>Last updated</h6>\n        <div class="textColor" text-center>\n          <h5>{{weather.observation_time_rfc822}}</h5>\n        </div>\n      </ion-col>\n\n    </ion-row>\n    <br>\n    <div text-center>\n      <ion-row>\n        <ion-col>\n          <strong class="textColor">Pressure</strong>\n        </ion-col>\n        <ion-col>\n          <strong class="textColor"> {{weather.pressure_in}}</strong>\n        </ion-col>\n\n      </ion-row>\n      <br>\n      <ion-row>\n        <ion-col>\n          <strong class="textColor">Humidity</strong>\n        </ion-col>\n        <ion-col>\n          <strong class="textColor"> {{weather.relative_humidity}}</strong>\n        </ion-col>\n\n      </ion-row>\n      <br>\n      <ion-row>\n        <ion-col>\n          <strong class="textColor">Wind Speed(KPH)</strong>\n        </ion-col>\n        <ion-col>\n          <strong class="textColor"> {{weather.wind_kph}}</strong>\n        </ion-col>\n\n      </ion-row>\n      <br>\n      <ion-row>\n        <ion-col>\n          <strong class="textColor">Visibility</strong>\n        </ion-col>\n        <ion-col>\n          <strong class="textColor"> {{weather.visibility_mi}}</strong>\n        </ion-col>\n\n      </ion-row>\n\n\n    </div>\n\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="dark">\n    <ion-title text-center> Built by\n      <strong>Miracle’s</strong>\n      <strong style="color:#00bfff;"> Innovation Labs</strong>\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>  '/*ion-inline-end:"D:\Ionic 3 Gallery\Ds_18_firebase_Ionic_lab\weatherapp\src\pages\weather\weather.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_weather_weather__["a" /* WeatherProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], WeatherPage);
    return WeatherPage;
}());

//# sourceMappingURL=weather.js.map

/***/ })

});
//# sourceMappingURL=0.js.map