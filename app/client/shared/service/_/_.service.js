"use strict";

(() => {
	const _Service = function _Service(lodash$) {
		return lodash$;
	};

	angular.module("_.service", ["lodash.extension"]).factory("_$", _Service);
})();
