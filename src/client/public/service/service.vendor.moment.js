angular
	.module("service.vendor.moment", ["angularMoment"])
		.factory("moment", function ServiceMoment(moment) {
			return moment;
		}
	)
;
