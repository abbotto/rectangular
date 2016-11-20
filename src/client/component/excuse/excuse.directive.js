(() => {
	const excuseDirective = function excuseDirective(toast$, excuse$) {
		return {
			"restrict": "E",
			"replace": true,
			"scope": {},
			"templateUrl": "excuse/excuse.directive.tpl",
			"link": function excuseDirectiveLink(scope, element, attrs, controller) {
				const popToast = () => {
					const msg = excuse$();
					toast$.show(
						toast$.simple()
						.textContent(msg)
						.position("top right")
						.hideDelay(7000)
					);
				};
				popToast();
				scope.tryAgain = () => {
					popToast();
				};
			}
		};
	};

	angular.module("excuse.directive", [
		"excuse.service",
		"ui.toast.service"
	])
	.directive("excuse", excuseDirective);
})();