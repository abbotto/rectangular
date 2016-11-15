angular.module("directive.logo", [])
.directive("logo", () => {
	return {
		"restrict": "E",
		"templateUrl": "logo/logo.tpl"
	};
});
