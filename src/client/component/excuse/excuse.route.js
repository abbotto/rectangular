angular
	.module("excuse.route", [])
	.config(($routeProvider) => {
		$routeProvider
			.when("/excuse", {
				"templateUrl": "excuse/excuse.tpl",
				"controllerAs": "vm"
			})
		;
	})
;
