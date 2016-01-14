webpackJsonp([1],{

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = angular.module('app.home', []).controller('HomeController', __webpack_require__(51)).directive('home', __webpack_require__(52));
	module.exports = exports['default'];

/***/ },

/***/ 51:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = HomeController;
	HomeController.$inject = [];

	function HomeController() {
	  this.name = 'Home: home';
	}

	module.exports = exports['default'];

/***/ },

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = home;
	home.$inject = [];

	function home() {
	  return {
	    controller: 'HomeController',
	    controllerAs: 'controller',
	    template: __webpack_require__(53)
	  };
	}

	module.exports = exports['default'];

/***/ },

/***/ 53:
/***/ function(module, exports) {

	module.exports = "<div>{{ controller.name }}</div>\n\n<div>\n  HelloDirective:\n</div>\n\n<div ng-controller=\"HelloController as hello\">\n  HelloController as hello: {{ hello.test }}\n</div>\n";

/***/ }

});