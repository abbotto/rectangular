/**
 * @ngdoc directive
 * @name directive.excuse:excuse
 * @element div
 * @function
 *
 * @description
 * Yet another BOFH-style server
 *
 * **Note:** http://bofh.bjash.com
 *
 * @example
 * <excuse></excuse>
 */
angular.module("directive.excuse", [
	"service.excuse",
	"service.ui.toast"
])
	.directive("excuse", function DirectiveExcuse(Toast, Excuse) {
		return {
			"restrict": "E",
			"replace": true,
			"scope": {},
			"templateUrl": "excuse/directive.excuse.tpl",
			"link": function DirectiveExcuseLink(scope, element, attrs, controller) {
				const popToast = () => {
					Toast.show(
						Toast.simple()
							.textContent(Excuse())
							.position("bottom left")
							.hideDelay(7000)
					);
				};
				popToast();
				scope.tryAgain = () => {
					popToast();
				};
			}
		};
	})
;
