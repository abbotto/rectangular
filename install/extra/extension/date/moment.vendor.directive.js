"use strict";

/**
* Directive - `date`
* - A directive working with the time and date
* - Requires `angular-moment`
*
* @module Extension->Date-Directive
*/

export default function momentVendorDirective($injector) {
	return angular.copy($injector.get("angularMoment"))[0];
};
