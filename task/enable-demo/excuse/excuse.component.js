(() => {
	"use strict";
	
	// Module definition
	const excuse = angular.module("excuse.component", [
		"excuse.service",
		"ui.toast.service"
	]);
	
	// Options
	const options = {};
	
	// Template
	options.templateUrl = "excuse/excuse.component.html";
	
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
	excuse.component("excuse", options);
})();
