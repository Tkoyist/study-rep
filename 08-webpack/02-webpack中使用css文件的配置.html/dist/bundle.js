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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flag", function() { return flag; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__1_aaa_js__ = __webpack_require__(1);
// 当模块数据过多，导入复杂的时候，可以使用
 
// 这种方法将导入的所有数据放入一个对象当中，我们需要的时候直接去对象中取出，提高了导入代码效率也避免了导入数据和内部数据的变量冲突
var flag = false

console.log(__WEBPACK_IMPORTED_MODULE_0__1_aaa_js__["a" /* num1 */]);
console.log(__WEBPACK_IMPORTED_MODULE_0__1_aaa_js__["a" /* num1 */]);
// 当模块的数据发生改变之后，我们需要将模块重新打包以更新 bundle.js 文件
// 因为我们在html文件中本质使用的是 boundle.js 文件，只是这个文件是由我们通过webpack打包而来
// 也就是说webpack将我们需要的模块整合成为了一个单独的js文件，供我们直接使用，我们无需再关注模块间的引用，直接使用打包后的模块打包文件即可
// 且webpack可解析多种模块引用方式
console.log("被打包数据已更新");



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export flag */
/* unused harmony export fun1 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return num1; });
/* unused harmony export fun2 */
// <!-- 
//     在aaa中定义变量和方法，并尝试导出
//  -->
var flag = true

var fun1 = function(){
   if(flag){
       console.log("flag为true");
   }
   else{
       console.log("flag为false");
   }
}

// 模块化导出数据

// 方法1


// 方法2，定义数据的时候使用improt关键字修饰，表明该数据需要导出
var num1 = 1000
function fun2() {
   console.log("fun2函数运行");
}

// export defult
// 我们希望导出一个模块，但这个模块不由定义者命名，而让使用者命名，就可以使用这个方法导出，我们在导入模块的时候，自定义一个原模块没有名字即可直接使用
// 同一个模块中只允许存在一个defult


/***/ })
/******/ ]);