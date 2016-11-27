(() => {
	"use strict";
	
	// Module definition
	angular.module("excuse.component", [
		"excuse.service",
		"ui.toast.service"
	]);
	
	// Settings for view directive
	const options = {};
	options.templateUrl = "excuse/excuse.view.tpl";
	
	// Controller and ViewModel
	options.controllerAs = "vm";
	options.controller = function ExcuseController(excuse$, toast$) {
		const vm = this;
		vm.tryAgain = () => {
			const msg = excuse$();
			const config = toast$.simple();
			config.textContent(msg);
			config.position("top right");
			config.hideDelay(5000);
			toast$.show(config);
		};
		vm.tryAgain();
	};
	
	// Register the component
	angular.module("excuse.component").component("excuse", options);
})();
