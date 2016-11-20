angular
	.module("home.route", [])
	.config($routeProvider => {
		$routeProvider
			.when("/", {
				"templateUrl": "home/home.tpl"
			})
		;
	})
;
