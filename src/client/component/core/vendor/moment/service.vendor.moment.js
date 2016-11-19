/* eslint-plugin-disable angular */
angular
	.module("service.vendor.moment", ["angularMoment"])
		.factory("moment$", function momentService(moment) {
			return moment;
		}
	)
;
