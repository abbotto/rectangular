"use strict";

const momentVendorDirective = function momentVendorDirective($injector) {
	return angular.copy($injector.get("angularMoment"))[0];
};

export default angular
	.module("moment.vendor.directive", [])
	.directive("date", momentVendorDirective)
	.name
;
