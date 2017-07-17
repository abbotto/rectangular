"use strict";

/**
* Service - `date$`
* - A service working with the time and date
* - Requires `moment`
*
* @module Extension->Date-Service
*/

export default function momentVendorService($window) {
	return $window.moment;
};
