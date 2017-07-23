"use strict";

import componentService from "~/app/extension/component/component.service.js";
import reactVendorDirective from "~/app/extension/component/react.vendor.directive.js";

export default angular
	.module("component.directive", [
		componentService.name
	])
	.directive("component", reactVendorDirective)
;
