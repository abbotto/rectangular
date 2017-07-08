"use strict";

import momentVendorDirective from "~/app/extension/date/moment.vendor.directive.js";

export default angular
	.module("date.directive", [])
	.directive("date", momentVendorDirective)
;
