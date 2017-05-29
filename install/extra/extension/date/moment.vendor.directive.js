"use strict";

export default function momentVendorDirective($injector) {
	return angular.copy($injector.get("angularMoment"))[0];
};
