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
	"service.material.toast"
])
	.directive("excuse", function DirectiveExcuse(Toast, Excuse) {
		return {
			"restrict": "E",
			"replace": true,
			"scope": {},
			"templateUrl": "excuse/directive/excuse.html",
			"link": function DirectiveExcuseLink(scope, element, attrs, controller) {
				const popToast = msg => {
					Toast.show(
						Toast.simple()
							.textContent(msg)
							.position("bottom left")
							.hideDelay(7000)
					);
				};
				popToast(Excuse.get());
				scope.tryAgain = msg => {
					popToast(Excuse.get());
				};
			}
		};
	})
;
