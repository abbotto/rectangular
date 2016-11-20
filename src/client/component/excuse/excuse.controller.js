(() => {
	const ExcuseController = function ExcuseController($log) {
		$log.debug("ExcuseController has loaded.");
	};

	angular.module("excuse.controller", [
		"excuse.directive"
	])
	.controller("Excuse", ExcuseController);
})();
