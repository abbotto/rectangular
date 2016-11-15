angular
	.module("route.home", [])
	.config($routeProvider => {
		$routeProvider
			.when("/", {
				"templateUrl": "home/home.tpl"
			})
		;
	})
;
