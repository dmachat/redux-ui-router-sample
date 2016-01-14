webpackJsonp([2],{

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = angular.module('app.about', []).controller('AboutController', __webpack_require__(55)).directive('about', __webpack_require__(56));
	module.exports = exports['default'];

/***/ },

/***/ 55:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = AboutController;
	AboutController.$inject = [];

	function AboutController() {
	  this.name = 'About: page';
	}

	module.exports = exports['default'];

/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = about;
	about.$inject = [];

	function about() {
	  return {
	    controller: 'AboutController',
	    controllerAs: 'controller',
	    template: __webpack_require__(57)
	  };
	}

	module.exports = exports['default'];

/***/ },

/***/ 57:
/***/ function(module, exports) {

	module.exports = "<div>{{ controller.name }}</div>\n";

/***/ }

});