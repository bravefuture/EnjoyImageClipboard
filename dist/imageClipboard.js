(function webpackUniversalModuleDefinition(root, factory) { 
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Enjoy", [], factory);
	else if(typeof exports === 'object')
		exports["Enjoy"] = factory();
	else
		root["Enjoy"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * [图片粘贴板]
	 * @update: 2016.07.26
	 * @author: yongcheng0660@163.com
	 * @github: https://github.com/bravefuture
	 * html结构：
	<div id="imgBox"></div>
	 * 	
	 * 实例化
	var imageClipboard = new Enjoy.ImageClipboard('#imgBox', {
		maxWidth: 500,
		maxHeight: 400,
		marginRight: 10
	});
	 * 获取图片数据(数组)
	imageClipboard.getImgData
	 */
	var ImageClipboard = function () {
		// 构造函数
		function ImageClipboard(selector) {
			var args = arguments.length <= 1 || arguments[1] === undefined ? { maxWidth: '100%', maxHeight: '100%', marginRight: 5 } : arguments[1];

			_classCallCheck(this, ImageClipboard);

			this.el = document.querySelector(selector);
			this.data = [];
			this.args = args;
			this.paste();
		}
		// 拷贝


		_createClass(ImageClipboard, [{
			key: 'paste',
			value: function paste() {
				var _this = this;

				window.addEventListener('paste', function (e) {
					if (e.clipboardData && e.clipboardData.items) {
						var items = e.clipboardData.items;
						items = Array.from(items).filter(function (i) {
							return i.type.indexOf('image') > -1;
						});
						items.forEach(function (i) {
							var blob = i.getAsFile();
							var rd = new FileReader();
							rd.onloadend = function () {
								_this.data.push(rd.result);
								_this.buildImg(rd.result);
							};
							rd.readAsDataURL(blob);
						});
					}
				});
			}
			// 生成图片

		}, {
			key: 'buildImg',
			value: function buildImg(src) {
				var img = document.createElement('img');
				img.src = src;
				img.style.maxWidth = this.args.maxWidth + 'px';
				img.style.maxHeight = this.args.maxHeight + 'px';
				img.style.marginRight = this.args.marginRight + 'px';
				this.el.appendChild(img);
			}
			// 返回图片数据

		}, {
			key: 'getImgData',
			get: function get() {
				return this.data;
			}
		}]);

		return ImageClipboard;
	}();

	exports.default = { ImageClipboard: ImageClipboard };
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;