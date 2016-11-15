angular
	.module("route.excuse", [])
	.config(($routeProvider) => {
		$routeProvider
			.when("/excuse", {
				"templateUrl": "excuse/excuse.tpl",
				"controllerAs": "self"
			})
		;
	})
;
