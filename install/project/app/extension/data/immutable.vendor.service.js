"use strict";

/**
* @ngdoc service
* @name data.service:data$
*
* @description
* A service for working with immutable data
*/

import Immutable from "immutable";

export default function immutableVendorService() {
	return Immutable;
};
