(() => {
	"use strict";
	
	// --------------------------------
	// Model for view directive
	// --------------------------------
	let view = {};
	view.templateUrl = "excuse/excuse.view.tpl";
	
	// --------------------------------
	// Controller and ViewModel
	// --------------------------------
	view.controller = function ExcuseController($log) {
		const vm = this;
		$log.debug("ExcuseView has loaded.");
	};

	// --------------------------------
	// Services for view.link
	// Injected and populated in the view directive
	// --------------------------------
	const service = {
		"excuse$": false,
		"toast$": false
	};

	// --------------------------------
	// Callback for view model
	// --------------------------------
	view.link = function excuseViewLink(scope) {
		const showToast = () => {
			const msg = service.excuse$();
			const config = service.toast$.simple();
			config.textContent(msg);
			config.position("top right");
			config.hideDelay(5000);
			service.toast$.show(config);
		};
		showToast();
		scope.tryAgain = () => {
			showToast();
		};
	};

	// --------------------------------
	// View module
	// --------------------------------
	angular.module("excuse.view", [
		"excuse.service",
		"mixin.service",
		"ui.toast.service"
	])
	.directive("excuse", function excuseView(mixin$, excuse$, toast$) {
		// Set defaults for view.link
		view = mixin$("view.mixin.json", [view]);
		
		// Provide services for view.link
		service.excuse$ = excuse$;
		service.toast$ = toast$;
		
		return view;
	});
})();

