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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "font-family: 'Open Sans', sans-serif;\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-songs-list></app-songs-list>\r\n\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'imprint';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _songs_list_songs_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./songs-list/songs-list.component */ "./src/app/songs-list/songs-list.component.ts");
/* harmony import */ var _song_song_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./song/song.component */ "./src/app/song/song.component.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _songs_list_songs_list_component__WEBPACK_IMPORTED_MODULE_7__["SongsListComponent"],
                _song_song_component__WEBPACK_IMPORTED_MODULE_8__["SongComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptorService"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.firstClick = function () {
        return console.log('Clicked!');
    };
    DataService.prototype.getSongs = function () {
        return this.http.get('https://fullstack-test-server.herokuapp.com/api/songs');
    };
    DataService.prototype.getFavorites = function () {
        return this.http.get('http://localhost:5000/api/items');
    };
    DataService.prototype.addToFavorites = function (value) {
        return this.http.post('http://localhost:5000/api/items', value);
    };
    DataService.prototype.removeFromFavorites = function (id) {
        return this.http.delete("http://localhost:5000/api/items/" + id);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/song/song.component.css":
/*!*****************************************!*\
  !*** ./src/app/song/song.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Tr :hover{\r\n    background-color: rgb(255, 222, 161);\r\n    transition: 400ms;\r\n}\r\n.Container{\r\n    display: flex;\r\n    justify-content: center;\r\n    transition: 300ms;\r\n}\r\n.Container td{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n.Container td img{\r\n    width: 100px;\r\n    height: auto;\r\n}\r\n.Container td[id='title']{\r\n    width:150px;\r\n    display: flex;\r\n    justify-content: end;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    font-size: 0.8em;\r\n    padding-left: 10px;\r\n}\r\n.Container td[id='title'] div[id='Subtitle']{   \r\n    color: rgb(190, 190, 190);\r\n    font-size: 0.75em;\r\n}\r\n.Container td div[id='shazamIcon'] a{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 0.6em;\r\n    font-weight: 700;\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n.Container td div[id='shazamIcon'] img{\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n.Container td[id='Favorites']{\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: 0.75em;\r\n    width: 200px;\r\n}\r\n.Container td div[id='favoritesImg'] img{\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n.Container td div[id='notAddedToFavorites'] {\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n    color:rgb(255, 196, 0);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29uZy9zb25nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9zb25nL3NvbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5UciA6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjIsIDE2MSk7XHJcbiAgICB0cmFuc2l0aW9uOiA0MDBtcztcclxufVxyXG4uQ29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XHJcbn1cclxuLkNvbnRhaW5lciB0ZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi5Db250YWluZXIgdGQgaW1ne1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5Db250YWluZXIgdGRbaWQ9J3RpdGxlJ117XHJcbiAgICB3aWR0aDoxNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLkNvbnRhaW5lciB0ZFtpZD0ndGl0bGUnXSBkaXZbaWQ9J1N1YnRpdGxlJ117ICAgXHJcbiAgICBjb2xvcjogcmdiKDE5MCwgMTkwLCAxOTApO1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbn1cclxuLkNvbnRhaW5lciB0ZCBkaXZbaWQ9J3NoYXphbUljb24nXSBhe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5Db250YWluZXIgdGQgZGl2W2lkPSdzaGF6YW1JY29uJ10gaW1ne1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuLkNvbnRhaW5lciB0ZFtpZD0nRmF2b3JpdGVzJ117XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbi5Db250YWluZXIgdGQgZGl2W2lkPSdmYXZvcml0ZXNJbWcnXSBpbWd7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG4uQ29udGFpbmVyIHRkIGRpdltpZD0nbm90QWRkZWRUb0Zhdm9yaXRlcyddIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6cmdiKDI1NSwgMTk2LCAwKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/song/song.component.html":
/*!******************************************!*\
  !*** ./src/app/song/song.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tr class='Tr'>\r\n  <div [style.background-color]='divStyle' class='Container' >\r\n      <td>{{index}}</td>\r\n      <td><img src={{img}}/></td>\r\n      <td id='title'>\r\n        <div><strong>{{title}}</strong></div>\r\n        <div id='Subtitle'>{{subtitle}}</div>\r\n      </td>\r\n      <td >\r\n        <div id='shazamIcon'>\r\n          <a href={{url}} target='_blank'>\r\n            <img src='http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c538.png'/>\r\n            <div>SHAZAM</div>\r\n          </a>\r\n        </div>\r\n        </td>\r\n      <td id='Favorites'>\r\n        <div id='favoritesImg' (click)=\"divClick()\"><img src={{star}}></div>\r\n        <div>{{buttonNote}}</div>\r\n      </td>\r\n  </div>\r\n</tr>"

/***/ }),

/***/ "./src/app/song/song.component.ts":
/*!****************************************!*\
  !*** ./src/app/song/song.component.ts ***!
  \****************************************/
/*! exports provided: SongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongComponent", function() { return SongComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var SongComponent = /** @class */ (function () {
    function SongComponent(data) {
        this.data = data;
        this.shazamIcon = 'http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c538.png';
    }
    SongComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.title.toUpperCase();
        var favorites;
        this.data.getFavorites().subscribe(function (data) {
            favorites = Object.values(data);
            _this.favoritesCheck(favorites);
        });
    };
    SongComponent.prototype.favoritesCheck = function (arr) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, arr.map(function (item) {
                            if (item.name === _this.title) {
                                _this.isFavorite = true;
                            }
                        })];
                    case 1:
                        _a.sent();
                        if (this.isFavorite) {
                            this.divClick = this.removeFromFavorites;
                            this.buttonNote = 'Remove from favorites';
                            this.divStyle = 'rgb(255, 222, 161)';
                            this.star = "../../assets/images/added.png";
                        }
                        else {
                            this.divClick = this.addToFavorites;
                            this.buttonNote = 'add to favorites';
                            this.star = "../../assets/images/notAdded.png";
                            this.divStyle = '';
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    SongComponent.prototype.addToFavorites = function () {
        var _this = this;
        var value = { "name": this.title };
        this.data.addToFavorites(value).subscribe(function () {
            _this.ngOnInit();
        });
    };
    SongComponent.prototype.removeFromFavorites = function () {
        var _this = this;
        var favorites;
        var id;
        this.data.getFavorites().subscribe(function (data) {
            favorites = Object.values(data);
            favorites.map(function (item) {
                if (item.name === _this.title) {
                    id = item._id;
                    _this.data.removeFromFavorites(id).subscribe(function (data) {
                        _this.isFavorite = false;
                        _this.ngOnInit();
                    });
                }
                else {
                    return null;
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SongComponent.prototype, "song", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SongComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SongComponent.prototype, "subtitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SongComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SongComponent.prototype, "img", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SongComponent.prototype, "url", void 0);
    SongComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-song',
            template: __webpack_require__(/*! ./song.component.html */ "./src/app/song/song.component.html"),
            styles: [__webpack_require__(/*! ./song.component.css */ "./src/app/song/song.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], SongComponent);
    return SongComponent;
}());



/***/ }),

/***/ "./src/app/songs-list/songs-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/songs-list/songs-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ListContainer{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n.Input{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.lds-facebook {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 64px;\r\n    height: 64px;\r\n  }\r\n.lds-facebook div {\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 6px;\r\n    width: 13px;\r\n    background: rgb(144, 217, 253);\r\n    -webkit-animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\r\n            animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\r\n  }\r\n.lds-facebook div:nth-child(1) {\r\n    left: 6px;\r\n    -webkit-animation-delay: -0.24s;\r\n            animation-delay: -0.24s;\r\n  }\r\n.lds-facebook div:nth-child(2) {\r\n    left: 26px;\r\n    -webkit-animation-delay: -0.12s;\r\n            animation-delay: -0.12s;\r\n  }\r\n.lds-facebook div:nth-child(3) {\r\n    left: 45px;\r\n    -webkit-animation-delay: 0;\r\n            animation-delay: 0;\r\n  }\r\n@-webkit-keyframes lds-facebook {\r\n    0% {\r\n      top: 6px;\r\n      height: 51px;\r\n    }\r\n    50%, 100% {\r\n      top: 19px;\r\n      height: 26px;\r\n    }\r\n  }\r\n@keyframes lds-facebook {\r\n    0% {\r\n      top: 6px;\r\n      height: 51px;\r\n    }\r\n    50%, 100% {\r\n      top: 19px;\r\n      height: 26px;\r\n    }\r\n  }\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29uZ3MtbGlzdC9zb25ncy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDQTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsMEVBQWtFO1lBQWxFLGtFQUFrRTtFQUNwRTtBQUNBO0lBQ0UsU0FBUztJQUNULCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7QUFDQTtJQUNFLFVBQVU7SUFDViwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsMEJBQWtCO1lBQWxCLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0U7TUFDRSxRQUFRO01BQ1IsWUFBWTtJQUNkO0lBQ0E7TUFDRSxTQUFTO01BQ1QsWUFBWTtJQUNkO0VBQ0Y7QUFUQTtJQUNFO01BQ0UsUUFBUTtNQUNSLFlBQVk7SUFDZDtJQUNBO01BQ0UsU0FBUztNQUNULFlBQVk7SUFDZDtFQUNGIiwiZmlsZSI6InNyYy9hcHAvc29uZ3MtbGlzdC9zb25ncy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuTGlzdENvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5JbnB1dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubGRzLWZhY2Vib29rIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gIH1cclxuICAubGRzLWZhY2Vib29rIGRpdiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA2cHg7XHJcbiAgICB3aWR0aDogMTNweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxNDQsIDIxNywgMjUzKTtcclxuICAgIGFuaW1hdGlvbjogbGRzLWZhY2Vib29rIDEuMnMgY3ViaWMtYmV6aWVyKDAsIDAuNSwgMC41LCAxKSBpbmZpbml0ZTtcclxuICB9XHJcbiAgLmxkcy1mYWNlYm9vayBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgIGxlZnQ6IDZweDtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjRzO1xyXG4gIH1cclxuICAubGRzLWZhY2Vib29rIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgbGVmdDogMjZweDtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTJzO1xyXG4gIH1cclxuICAubGRzLWZhY2Vib29rIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgbGVmdDogNDVweDtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMDtcclxuICB9XHJcbiAgQGtleWZyYW1lcyBsZHMtZmFjZWJvb2sge1xyXG4gICAgMCUge1xyXG4gICAgICB0b3A6IDZweDtcclxuICAgICAgaGVpZ2h0OiA1MXB4O1xyXG4gICAgfVxyXG4gICAgNTAlLCAxMDAlIHtcclxuICAgICAgdG9wOiAxOXB4O1xyXG4gICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/songs-list/songs-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/songs-list/songs-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='ListContainer'>\r\n  <div>\r\n      <h1>{{appTitle}}</h1>\r\n  <div class='Input'>\r\n      <input \r\n      type='text'\r\n      placeholder=\"Song Search\"\r\n      name='search'\r\n      [(ngModel)]='searchText'\r\n      (ngModelChange)='searchChanged()'\r\n      />\r\n  </div>\r\n  </div>\r\n  <div [style.display]='loader' class=\"lds-facebook\"><div></div><div></div><div></div></div>\r\n  <div>\r\n      <table *ngIf='songs'>\r\n        <div *ngFor='let song of filteredSongs; let i = index'>\r\n              <app-song \r\n              [index]=\"i+1\"\r\n              [song]='song'\r\n              [title]=\"song.heading.title\"\r\n              [subtitle]=\"song.heading.subtitle\"  \r\n              [img]=\"song.images.default\"    \r\n              [url]=\"song.url\"\r\n              [id]=\"song.key\"\r\n              ></app-song>\r\n        </div>\r\n      </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/songs-list/songs-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/songs-list/songs-list.component.ts ***!
  \****************************************************/
/*! exports provided: SongsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsListComponent", function() { return SongsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var SongsListComponent = /** @class */ (function () {
    function SongsListComponent(data) {
        this.data = data;
        this.appTitle = 'Top 200 Song List';
    }
    SongsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getFavorites().subscribe(function (data) {
            _this.favorites = data;
        });
        this.data.getSongs().subscribe(function (data) {
            _this.songs = data.chart;
            _this.filteredSongs = data.chart;
            if (_this.songs) {
                _this.loader = 'none';
            }
        });
    };
    SongsListComponent.prototype.searchChanged = function () {
        var _this = this;
        if (!this.searchText) {
            this.filteredSongs = this.songs;
        }
        else {
            this.filteredSongs = this.songs.filter(function (item) { return item.heading.title.toLocaleLowerCase().indexOf(_this.searchText.toLocaleLowerCase()) > -1; });
        }
    };
    SongsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-songs-list',
            template: __webpack_require__(/*! ./songs-list.component.html */ "./src/app/songs-list/songs-list.component.html"),
            styles: [__webpack_require__(/*! ./songs-list.component.css */ "./src/app/songs-list/songs-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], SongsListComponent);
    return SongsListComponent;
}());



/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService() {
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var tokenizedReq = req.clone({
            setHeaders: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF2aXZAY3ljdXJpdHkuY29tIiwibmFtZSI6ImF2aXYiLCJpYXQiOjE1NTQ4ODIyOTl9._cLVE40a47NXHENdLCd8L4AGaORzJs8vkIMFIt4WyWU'
            }
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Users\Iris\Desktop\programing\Angular 7\projects\angular\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map