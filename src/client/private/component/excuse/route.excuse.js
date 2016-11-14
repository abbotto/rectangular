angular
	.module("route.excuse", [])
	.config(($routeProvider) => {
		$routeProvider
			.when("/excuse", {
				"templateUrl": "excuse/excuse.html",
				"controller": "excuse as self"
			})
		;
	})
;
