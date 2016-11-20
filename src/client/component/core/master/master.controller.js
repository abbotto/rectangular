(() => {
	const MasterController = function MasterController($log) {
		$log.debug("App has loaded.");
	};

	angular.module("master.controller", []).controller("Master", MasterController);
})();