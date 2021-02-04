function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Header -->\n<app-header (featureSelected)=\"onNavigate($event)\"></app-header>\n\n<div role=\"main\">\n  <!-- Web Publishing -->\n  <div class=\"row\">\n    <div class=\"col-lg-10\">\n      <app-publishing  *ngIf=\"loadedFeature === 'publishing'\"></app-publishing>\n    </div>\n  </div>\n\n  <!-- Front-End develop -->\n  <div class=\"row\">\n    <div class=\"col-lg-10\">\n      <app-frontend  *ngIf=\"loadedFeature === 'frontEnd'\"></app-frontend>\n    </div>\n  </div>\n\n  <!-- board -->\n  <div class=\"row\">\n    <div class=\"col-lg-10\">\n      <app-board  *ngIf=\"loadedFeature === 'board'\"></app-board>\n    </div>\n  </div>\n</div>\n\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/board/board.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board/board.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBoardBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"board-warp\">\n\n    <h2 class=\"title\">Test-Board</h2>\n    <hr>\n    \n<div class=\"mb-3\">\n    <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Name</span>\n        </div>\n        <input type=\"text\" id=\"input-name\" class=\"form-control\"> \n    </div>\n    <div class=\"input-group\">        \n        <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">E-mail</span>\n        </div>\n        <input type=\"text\" id=\"input-name\" class=\"form-control\" >\n    </div>\n    <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Content</span>\n        </div>\n        <textarea type=\"text\" class=\"form-control\" id=\"input-cont\" aria-label=\"With textarea\"></textarea>\n    </div>\n    <div>\n        <button class=\"btn btn-light\">submit</button>\n        <button class=\"btn btn-light\">delete</button>\n    </div>\n </div>\n\n <div class=\"output\">\n\n </div>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/frontend/frontend.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/frontend/frontend.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFrontendFrontendComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"title\">Front-End Toy Project</h2>\n\n<div class=\"card-container\" >\n  <div class=\"card\">\n    <a target=\"_blank\" rel=\"noopener\" href=\"https://todo-project-nj.firebaseapp.com/\">\n      <i class=\"material-icons md-48\">post_add</i>\n      <h4>Todo List</h4>\n      <span>\n        Angular 8, Angular CLI, firebase\n      </span>\n    </a>\n  </div>\n\n  <div class=\"card\" >\n    <a target=\"_blank\" rel=\"noopener\" href=\"https://nj90.github.io/web_game_with_js/\">\n      <i class=\"material-icons md-48\">videogame_asset</i>\n      <h4>javascript Web Game</h4>\n      <span>\n        HTML, CSS, Javascript, Bootstrap, github\n      </span>\n    </a>\n  </div>\n\n</div>\n\n\n<!-- create resource link >>  github -->\n<!-- github readme 정리해놓기 -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<nav class=\"nav\">\n    <div class=\"info card\" style=\"margin:0\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Namoo Jang</h4>\n          <h6 class=\"card-subtitle mb-2 text-muted\">Front-End Developer</h6>\n          <p class=\"card-text\">HTML, CSS <br/>Angular, Javascript, jQuery <br/> Bootstrap, github, firebase</p>\n          <hr>\n          <a href=\"https://github.com/NJ90\" class=\"card-link btn btn-outline-dark\" target=\"_blank\">github</a>\n          <a href=\"https://medium.com/@nameejang\" class=\"card-link btn btn-outline-dark\" target=\"_blank\">medium</a>\n        </div>\n    </div>    \n    <ul class=\"nav-link-wrap\">\n      <li class=\"nav-link\"><a href=\"#\" (click)=\"selected('publishing')\">Web Publishing</a></li>\n      <li class=\"nav-link\"><a href=\"#\"  (click)=\"selected('frontEnd')\">FrontEnd</a></li>\n      <!-- <li class=\"nav-link\"><a href=\"#\" (click)=\"selected('board')\">Board</a></li> -->\n    </ul>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/publishing/publishing.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publishing/publishing.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublishingPublishingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"title\">Web Publishing Portfolio</h2>\n<div class=\"card-container\">\n  <div class=\"card\">\n    <a target=\"_blank\" rel=\"noopener\" href=\"https://mrcamel.co.kr/search\">\n      <div class=\"txt\">\n        <h4>Mr.camel 어플리케이션 작업</h4>\n        <dl>\n          <dt>작업내용:</dt>\n          <dd> 중고명품거래 기능 PC겸용 어플리케이션 퍼블리싱 작업</dd>\n          <dt>Technical Skills: </dt>\n          <dd> Bootstrap, Jquery</dd>\n          <br>\n          <dt> 작업기간: </dt>\n          <dd> 2020.05.05 ~ 2020.07.01</dd>\n          <br>\n          <dt> 기여도: </dt>\n          <dd> 60% (수량 : 11p)</dd>\n          <br>\n          <dt> Viewport: </dt>\n          <dd> 반응형 (PC, Tablet, Mobile)</dd>\n        </dl>\n        <br />\n        <div class=\"icon\">\n          <i class=\"material-icons md-28\">laptop_mac</i>\n          <i class=\"material-icons md-24\">tablet_mac</i>\n          <i class=\"material-icons md-24\">phone_iphone</i>\n        </div>\n        <br />\n        <button class=\"btn btn-light\">상용페이지(링크이동)</button>\n      </div>\n      <div style=\"width: 107.33px; height: 107.33px;\"></div>\n    </a>\n  </div>\n\n  <div class=\"card\">\n    <a target=\"_blank\" rel=\"noopener\" href=\"http://www.hallym.net/Index2.asp\">\n      <div class=\"txt\">\n        <h4>한림병원 메인페이지 작업</h4>\n        <dl>\n          <dt>작업내용:</dt>\n          <dd>병원 메인페이지 퍼블리싱 작업</dd>\n          <dt>Technical Skills: </dt>\n          <dd> HTML, CSS, Jquery</dd>\n          <br>\n          <dt> 작업기간: </dt>\n          <dd> 2020.12.16 ~ 2020.12.21</dd>\n          <br>\n          <dt> 기여도: </dt>\n          <dd> 100% (수량 : 1p)</dd>\n          <br>\n          <dt> Viewport: </dt>\n          <dd> PC</dd>\n        </dl>\n        <br />\n        <div class=\"icon\">\n          <i class=\"material-icons md-28\">laptop_mac</i>\n        </div>\n        <br />\n        <button class=\"btn btn-light\">상용페이지(링크이동)</button>\n      </div>\n      <div style=\"width: 107.33px; height: 107.33px;\"></div>\n    </a>\n  </div>\n\n  <div class=\"card\">\n    <a target=\"_blank\" rel=\"noopener\" href=\"http://www.seungjineng.co.kr/main/\">\n      <div class=\"txt\">\n        <h4>SEUNG JIN Engineering</h4>\n        <dl>\n          <dt>작업내용:</dt>\n          <dd> 기업 홈페이지 퍼블리싱 작업</dd>\n          <dt>Technical Skills: </dt>\n          <dd> HTML, CSS, Jquery</dd>\n          <br>\n          <dt> 기여도: </dt>\n          <dd> 메인 100% / 서브 70% </dd>\n          <br>\n          <dt> Viewport: </dt>\n          <dd> 반응형 (PC, Tablet, Mobile)</dd>\n        </dl>\n        <br />\n        <div class=\"icon\">\n          <i class=\"material-icons md-28\">laptop_mac</i>\n          <i class=\"material-icons md-24\">tablet_mac</i>\n          <i class=\"material-icons md-24\">phone_iphone</i>\n        </div>\n        <br />\n        <button class=\"btn btn-light\">상용페이지(링크이동)</button>\n      </div>\n      <img src=\"./assets/seungjin.png\" alt=\"\" width=\"100%\" height=\"100%\">\n    </a>\n  </div>\n\n  <div class=\"card\">\n    <a target=\"_blank\" rel=\"noopener\" href=\"http://atscenter.com/new/\">\n      <div class=\"txt\">\n        <h4>ATS Center</h4>\n        <dl>\n          <dt>Technical Skills: </dt>\n          <dd> HTML, CSS, Jquery</dd>\n          <br>\n          <dt> 기여도: </dt>\n          <dd> 100%</dd>\n          <br>\n          <dt> Viewport: </dt>\n          <dd> PC </dd>\n        </dl>\n        <br />\n        <div class=\"icon\">\n          <i class=\"material-icons md-28\">laptop_mac</i>\n        </div>\n        <br />\n        <button class=\"btn btn-light\">상용페이지(링크이동)</button>\n      </div>\n      <img src=\"./assets/atscenter.png\" alt=\"\" width=\"100%\" height=\"100%\">\n    </a>\n  </div>\n\n  <div class=\"card\">\n    <a target=\"_blank\" rel=\"noopener\" href=\"http://nameejang.dothome.co.kr/ResponsiveWeb/index.html\">\n      <div class=\"txt\">\n        <h4>IKEA</h4>\n        <dl>\n          <dt>Technical Skills: </dt>\n          <dd> HTML, CSS, Jquery</dd>\n          <br>\n          <dt> 기여도: </dt>\n          <dd> 100%</dd>\n          <br>\n          <dt> Viewport: </dt>\n          <dd> 반응형 (PC, Tablet, Mobile)</dd>\n        </dl>\n        <br />\n        <div class=\"icon\">\n          <i class=\"material-icons md-28\">laptop_mac</i>\n          <i class=\"material-icons md-24\">tablet_mac</i>\n          <i class=\"material-icons md-24\">phone_iphone</i>\n        </div>\n        <br />\n        <button class=\"btn btn-light\">데모페이지(링크이동)</button>\n      </div>\n      <img src=\"./assets/ikea_main.png\" alt=\"\" width=\"100%\" height=\"100%\">\n    </a>\n  </div>\n\n  <div class=\"card\">\n    <a target=\"_blank\" rel=\"noopener\" href=\"http://nameejang.dothome.co.kr/MOBILE/index.html\">\n      <div class=\"txt\">\n        <h4>Patagonia</h4>\n        <dl>\n          <dt>Technical Skills: </dt>\n          <dd> HTML, CSS, Jquery</dd>\n          <br>\n          <dt> 기여도: </dt>\n          <dd> 100%</dd>\n          <br>\n          <dt> Viewport: </dt>\n          <dd> Mobile</dd>\n        </dl>\n        <br />\n        <div class=\"icon\">\n          <i class=\"material-icons md-24\">phone_iphone</i>\n        </div>\n        <br />\n        <button class=\"btn btn-light\">데모페이지(링크이동)</button>\n      </div>\n      <img src=\"./assets/patagonia_mobile_main.png\" alt=\"\" width=\"100%\" height=\"100%\">\n    </a>\n  </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a,\na:visited,\na:hover {\n  color: #24292E;\n  text-decoration: none;\n  text-align: center;\n}\n\na:hover,\na:visited {\nfont-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBOztBQUVBLGdCQUFnQjtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSxcbmE6dmlzaXRlZCxcbmE6aG92ZXIge1xuICBjb2xvcjogIzI0MjkyRTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmE6aG92ZXIsXG5hOnZpc2l0ZWQge1xuZm9udC13ZWlnaHQ6IDkwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'portfolioNJ';
        this.loadedFeature = 'publishing';
      }

      _createClass(AppComponent, [{
        key: "onNavigate",
        value: function onNavigate(feature) {
          this.loadedFeature = feature;
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _publishing_publishing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./publishing/publishing.component */
    "./src/app/publishing/publishing.component.ts");
    /* harmony import */


    var _frontend_frontend_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./frontend/frontend.component */
    "./src/app/frontend/frontend.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _board_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./board/board.component */
    "./src/app/board/board.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _publishing_publishing_component__WEBPACK_IMPORTED_MODULE_4__["PublishingComponent"], _frontend_frontend_component__WEBPACK_IMPORTED_MODULE_5__["FrontendComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _board_board_component__WEBPACK_IMPORTED_MODULE_7__["BoardComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/board/board.component.css":
  /*!*******************************************!*\
    !*** ./src/app/board/board.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppBoardBoardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/board/board.component.ts":
  /*!******************************************!*\
    !*** ./src/app/board/board.component.ts ***!
    \******************************************/

  /*! exports provided: BoardComponent */

  /***/
  function srcAppBoardBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardComponent", function () {
      return BoardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BoardComponent = /*#__PURE__*/function () {
      function BoardComponent() {
        _classCallCheck(this, BoardComponent);
      }

      _createClass(BoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BoardComponent;
    }();

    BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/board/board.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./board.component.css */
      "./src/app/board/board.component.css"))["default"]]
    })], BoardComponent);
    /***/
  },

  /***/
  "./src/app/frontend/frontend.component.css":
  /*!*************************************************!*\
    !*** ./src/app/frontend/frontend.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFrontendFrontendComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zyb250ZW5kL2Zyb250ZW5kLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/frontend/frontend.component.ts":
  /*!************************************************!*\
    !*** ./src/app/frontend/frontend.component.ts ***!
    \************************************************/

  /*! exports provided: FrontendComponent */

  /***/
  function srcAppFrontendFrontendComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FrontendComponent", function () {
      return FrontendComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FrontendComponent = /*#__PURE__*/function () {
      function FrontendComponent() {
        _classCallCheck(this, FrontendComponent);
      }

      _createClass(FrontendComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FrontendComponent;
    }();

    FrontendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-frontend',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./frontend.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/frontend/frontend.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./frontend.component.css */
      "./src/app/frontend/frontend.component.css"))["default"]]
    })], FrontendComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nav{\n    float: left;\n    display:flex;\n    flex-direction: column;\n    background-color: #24292E;\n    padding-bottom:100%;\n    width: 18rem;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n.nav-link-wrap{margin-top:5%;}\n.nav-link{line-height: 36px;}\na,\na:visited,\na:hover {color: #fff; text-decoration: none; text-align: left;}\na:hover,\na:visited {font-weight: 900;}\n.info{width:100%; text-align: center; margin-bottom: 10px;}\n.info a{color:#999; font-weight: 700;}\n.info a:hover{color:#fff;}\nhr{margin-top: 1rem; margin-bottom: 1rem;}\n.material-icons{display: inline-block; color:#fff;}\n/* Responsive Styles */\n@media screen and (max-width: 767px) {\n      .nav-link-wrap{width:100%; margin-top:0;}\n      .nav{flex-direction: row; width: 100%; padding-bottom: 0;}\n      .nav-link{float: left; width:calc(100%/3 - 10px); margin:0 5px; line-height: 40px; text-align: center;}\n      .nav-link a{line-height: 16px;}\n      .material-icons{display: none;}\n    }\n@media screen and (max-width: 575px) {\n\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQztBQUNBLGVBQWUsYUFBYSxDQUFDO0FBQzdCLFVBQVUsaUJBQWlCLENBQUM7QUFFNUI7O1NBRVMsV0FBVyxFQUFFLHFCQUFxQixFQUFFLGdCQUFnQixDQUFDO0FBRTlEO1dBQ1csZ0JBQWdCLENBQUM7QUFFNUIsTUFBTSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLENBQUM7QUFDMUQsUUFBUSxVQUFVLEVBQUUsZ0JBQWdCLENBQUM7QUFDckMsY0FBYyxVQUFVLENBQUM7QUFFekIsR0FBRyxnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQztBQUN6QyxnQkFBZ0IscUJBQXFCLEVBQUUsVUFBVSxDQUFDO0FBRTlDLHNCQUFzQjtBQUN0QjtNQUNFLGVBQWUsVUFBVSxFQUFFLFlBQVksQ0FBQztNQUN4QyxLQUFLLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQztNQUN6RCxVQUFVLFdBQVcsRUFBRSx5QkFBeUIsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7TUFDdEcsWUFBWSxpQkFBaUIsQ0FBQztNQUM5QixnQkFBZ0IsYUFBYSxDQUFDO0lBQ2hDO0FBRUE7O0lBRUEiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZ7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjkyRTtcbiAgICBwYWRkaW5nLWJvdHRvbToxMDAlO1xuICAgIHdpZHRoOiAxOHJlbTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbn1cbi5uYXYtbGluay13cmFwe21hcmdpbi10b3A6NSU7fVxuLm5hdi1saW5re2xpbmUtaGVpZ2h0OiAzNnB4O31cblxuYSxcbmE6dmlzaXRlZCxcbmE6aG92ZXIge2NvbG9yOiAjZmZmOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IHRleHQtYWxpZ246IGxlZnQ7fVxuXG5hOmhvdmVyLFxuYTp2aXNpdGVkIHtmb250LXdlaWdodDogOTAwO31cblxuLmluZm97d2lkdGg6MTAwJTsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tYm90dG9tOiAxMHB4O31cbi5pbmZvIGF7Y29sb3I6Izk5OTsgZm9udC13ZWlnaHQ6IDcwMDt9XG4uaW5mbyBhOmhvdmVye2NvbG9yOiNmZmY7fVxuXG5ocnttYXJnaW4tdG9wOiAxcmVtOyBtYXJnaW4tYm90dG9tOiAxcmVtO31cbi5tYXRlcmlhbC1pY29uc3tkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGNvbG9yOiNmZmY7fVxuXG4gICAgLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgLm5hdi1saW5rLXdyYXB7d2lkdGg6MTAwJTsgbWFyZ2luLXRvcDowO31cbiAgICAgIC5uYXZ7ZmxleC1kaXJlY3Rpb246IHJvdzsgd2lkdGg6IDEwMCU7IHBhZGRpbmctYm90dG9tOiAwO31cbiAgICAgIC5uYXYtbGlua3tmbG9hdDogbGVmdDsgd2lkdGg6Y2FsYygxMDAlLzMgLSAxMHB4KTsgbWFyZ2luOjAgNXB4OyBsaW5lLWhlaWdodDogNDBweDsgdGV4dC1hbGlnbjogY2VudGVyO31cbiAgICAgIC5uYXYtbGluayBhe2xpbmUtaGVpZ2h0OiAxNnB4O31cbiAgICAgIC5tYXRlcmlhbC1pY29uc3tkaXNwbGF5OiBub25lO31cbiAgICB9XG4gIFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG5cbiAgICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.featureSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.collapsed = true;
      }

      _createClass(HeaderComponent, [{
        key: "selected",
        value: function selected(feature) {
          this.featureSelected.emit(feature);
        }
      }]);

      return HeaderComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], HeaderComponent.prototype, "featureSelected", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/publishing/publishing.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/publishing/publishing.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublishingPublishingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* .card h4{display: block; width: 100%;} */\n.card dl, .card dt, .card dd{ display:inline-block;}\n.card{display: inline-block; width: calc(100% / 3 - 16px); height: 400px; vertical-align: middle;vertical-align: -webkit-baseline-middle;}\n.card img{ display: block; width:30%; height:auto; float: right;}\n.btn{border:1px solid #666; font-size: 14px; font-weight: 600; color:#666; display: inline-block; position: absolute; bottom: 20px; left: 20px;}\n.btn:hover,\n.card:hover .btn{color:#fff; background-color: #666;}\n.icon{margin:10px 0; display: flex; align-items: end;}\n.icon .material-icons{margin:0 5px;}\n.card dt{position: relative;padding-left: 10px;font-weight: 600; margin-top: 5px;}\n.card dt::before{content: ''; width: 4px; height: 4px; background:#666; border-radius: 50%; position: absolute; top: 7px; left: 0;}\n.card dt.blank::before{display: none;}\n.card dt:first-child{margin-top: 0;}\n.card dd{padding-left: 10px;}\n/* Responsive Styles */\n@media screen and (max-width: 767px) {\n\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n      width: calc(100% - 16px);\n    }\n\n\n  }\n@media screen and (max-width: 575px) {\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n      width: calc(100% - 16px);\n    }\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGlzaGluZy9wdWJsaXNoaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBQzNDLDhCQUE4QixvQkFBb0IsQ0FBQztBQUVuRCxNQUFNLHFCQUFxQixFQUFFLDRCQUE0QixFQUFFLGFBQWEsRUFBRSxzQkFBc0IsQ0FBQyx1Q0FBdUMsQ0FBQztBQUN6SSxXQUFXLGNBQWMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQztBQUNoRSxLQUFLLHFCQUFxQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUscUJBQXFCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQztBQUUvSTtpQkFDaUIsVUFBVSxFQUFFLHNCQUFzQixDQUFDO0FBRXBELE1BQU0sYUFBYSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQztBQUNyRCxzQkFBc0IsWUFBWSxDQUFDO0FBRW5DLFNBQVMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDO0FBQ2pGLGlCQUFpQixXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQztBQUNsSSx1QkFBdUIsYUFBYSxDQUFDO0FBQ3JDLHFCQUFxQixhQUFhLENBQUM7QUFDbkMsU0FBUyxrQkFBa0IsQ0FBQztBQUUxQixzQkFBc0I7QUFDdEI7O0lBRUU7O01BRUUsd0JBQXdCO0lBQzFCOzs7RUFHRjtBQUVBO0lBQ0U7O01BRUUsd0JBQXdCO0lBQzFCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9wdWJsaXNoaW5nL3B1Ymxpc2hpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5jYXJkIGg0e2Rpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTt9ICovXG4uY2FyZCBkbCwgLmNhcmQgZHQsIC5jYXJkIGRkeyBkaXNwbGF5OmlubGluZS1ibG9jazt9XG5cbi5jYXJke2Rpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IGNhbGMoMTAwJSAvIDMgLSAxNnB4KTsgaGVpZ2h0OiA0MDBweDsgdmVydGljYWwtYWxpZ246IG1pZGRsZTt2ZXJ0aWNhbC1hbGlnbjogLXdlYmtpdC1iYXNlbGluZS1taWRkbGU7fVxuLmNhcmQgaW1neyBkaXNwbGF5OiBibG9jazsgd2lkdGg6MzAlOyBoZWlnaHQ6YXV0bzsgZmxvYXQ6IHJpZ2h0O31cbi5idG57Ym9yZGVyOjFweCBzb2xpZCAjNjY2OyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiM2NjY7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDIwcHg7IGxlZnQ6IDIwcHg7fVxuXG4uYnRuOmhvdmVyLFxuLmNhcmQ6aG92ZXIgLmJ0bntjb2xvcjojZmZmOyBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O31cblxuLmljb257bWFyZ2luOjEwcHggMDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGVuZDt9XG4uaWNvbiAubWF0ZXJpYWwtaWNvbnN7bWFyZ2luOjAgNXB4O31cblxuLmNhcmQgZHR7cG9zaXRpb246IHJlbGF0aXZlO3BhZGRpbmctbGVmdDogMTBweDtmb250LXdlaWdodDogNjAwOyBtYXJnaW4tdG9wOiA1cHg7fVxuLmNhcmQgZHQ6OmJlZm9yZXtjb250ZW50OiAnJzsgd2lkdGg6IDRweDsgaGVpZ2h0OiA0cHg7IGJhY2tncm91bmQ6IzY2NjsgYm9yZGVyLXJhZGl1czogNTAlOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogN3B4OyBsZWZ0OiAwO31cbi5jYXJkIGR0LmJsYW5rOjpiZWZvcmV7ZGlzcGxheTogbm9uZTt9XG4uY2FyZCBkdDpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOiAwO31cbi5jYXJkIGRke3BhZGRpbmctbGVmdDogMTBweDt9XG5cbiAgLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblxuICAgIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluaykgLFxuICAgIC50ZXJtaW5hbCB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gICAgfVxuXG5cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgLmNhcmQtY29udGFpbmVyID4gKjpub3QoLmNpcmNsZS1saW5rKSAsXG4gICAgLnRlcm1pbmFsIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICB9XG4gIH1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/publishing/publishing.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/publishing/publishing.component.ts ***!
    \****************************************************/

  /*! exports provided: PublishingComponent */

  /***/
  function srcAppPublishingPublishingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublishingComponent", function () {
      return PublishingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PublishingComponent = /*#__PURE__*/function () {
      function PublishingComponent() {
        _classCallCheck(this, PublishingComponent);
      }

      _createClass(PublishingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PublishingComponent;
    }();

    PublishingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-publishing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./publishing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/publishing/publishing.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./publishing.component.css */
      "./src/app/publishing/publishing.component.css"))["default"]]
    })], PublishingComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/nameejang/Documents/GitHub/portfolioNJ/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map