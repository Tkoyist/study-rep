/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_vue_app_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_vue_app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_vue_app_vue__);


new Vue({
    el:"#app",
    template:"<app/>",
    // 文件解析这个代码的时候，会去解析里面的标签 
    components:{
        app: __WEBPACK_IMPORTED_MODULE_0__src_vue_app_vue__["default"]
    }
}
)

// 我们在本地安装webpack才会产生 ndoe_modules 文件夹

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: \n\nVue packages version mismatch:\n\n- vue@2.6.14\n- vue-template-compiler@2.5.21\n\nThis may cause things to work incorrectly. Make sure to use the same version for both.\nIf you are using vue-loader@>=10.0, simply update vue-template-compiler.\nIf you are using vue-loader@<10.0 or vueify, re-installing vue-loader/vueify should bump vue-template-compiler to the latest.\n\n    at Object.<anonymous> (D:\\Web\\web code\\code\\07-vue.js\\10-18-05webpack\\05-vue最终方案\\node_modules\\vue-template-compiler\\index.js:8:9)\n    at Module._compile (internal/modules/cjs/loader.js:1085:14)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)\n    at Module.load (internal/modules/cjs/loader.js:950:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:790:12)\n    at Module.require (internal/modules/cjs/loader.js:974:19)\n    at require (internal/modules/cjs/helpers.js:93:18)\n    at Object.<anonymous> (D:\\Web\\web code\\code\\07-vue.js\\10-18-05webpack\\05-vue最终方案\\node_modules\\vue-loader\\lib\\parser.js:1:18)\n    at Module._compile (internal/modules/cjs/loader.js:1085:14)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)\n    at Module.load (internal/modules/cjs/loader.js:950:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:790:12)\n    at Module.require (internal/modules/cjs/loader.js:974:19)\n    at require (internal/modules/cjs/helpers.js:93:18)\n    at Object.<anonymous> (D:\\Web\\web code\\code\\07-vue.js\\10-18-05webpack\\05-vue最终方案\\node_modules\\vue-loader\\lib\\loader.js:3:15)\n    at Module._compile (internal/modules/cjs/loader.js:1085:14)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)\n    at Module.load (internal/modules/cjs/loader.js:950:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:790:12)\n    at Module.require (internal/modules/cjs/loader.js:974:19)\n    at require (internal/modules/cjs/helpers.js:93:18)\n    at Object.<anonymous> (D:\\Web\\web code\\code\\07-vue.js\\10-18-05webpack\\05-vue最终方案\\node_modules\\vue-loader\\index.js:1:18)\n    at Module._compile (internal/modules/cjs/loader.js:1085:14)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)\n    at Module.load (internal/modules/cjs/loader.js:950:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:790:12)\n    at Module.require (internal/modules/cjs/loader.js:974:19)\n    at require (internal/modules/cjs/helpers.js:93:18)\n    at loadLoader (D:\\Web\\web code\\code\\07-vue.js\\10-18-05webpack\\05-vue最终方案\\node_modules\\loader-runner\\lib\\loadLoader.js:18:17)\n    at iteratePitchingLoaders (D:\\Web\\web code\\code\\07-vue.js\\10-18-05webpack\\05-vue最终方案\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)");

/***/ })
/******/ ]);