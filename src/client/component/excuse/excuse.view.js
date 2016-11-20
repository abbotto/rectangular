(() => {
	"use strict";
	
	// --------------------------------
	// View model for view directive
	// --------------------------------
	let view = {};
	view.templateUrl = "excuse/excuse.view.tpl";
	
	// --------------------------------
	// Controller for view model
	// --------------------------------
	view.controller = function ExcuseController($log) {
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
			service.toast$.show(
				service.toast$.simple()
				.textContent(msg)
				.position("top right")
				.hideDelay(5000)
			);
		};
		showToast();
		scope.tryAgain = () => {
			showToast();
		};
	};

	// --------------------------------
	// View directive module
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

