angular
	.module("service.vendor.moment", ["angularMoment"])
		.factory("Moment", function ServiceMoment(moment) {
			return moment;
		}
	)
;
