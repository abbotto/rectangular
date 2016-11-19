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
	.directive("excuse", function excuseDirective(Toast$, Excuse$) {
		return {
			"restrict": "E",
			"replace": true,
			"scope": {},
			"templateUrl": "excuse/directive.excuse.tpl",
			"link": function excuseDirectiveLink(scope, element, attrs, controller) {
				const popToast = () => {
					const msg = Excuse$();
					Toast$.show(
						Toast$.simple()
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
	})
;
