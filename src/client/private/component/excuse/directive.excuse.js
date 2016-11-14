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
 * <excuse time="self.time"></excuse>
 */
angular.module("directive.excuse", [
	"service.material.toast",
	"service.model"
])
	.directive("excuse", function DirectiveExcuse(Toast, Model) {
		return {
			"restrict": "E",
			"replace": true,
			"scope": {},
			"templateUrl": "excuse/directive/excuse.html",
			"link": function DirectiveExcuseLink(scope, element, attrs, controller) {
				const model = Model["excuse/excuse.json"];
				let excuse = model[Math.floor(Math.random()*model.length)];
				const popToast = msg => {
					Toast.show(
						Toast.simple()
							.textContent(msg)
							.position("bottom left")
							.hideDelay(7000)
					);
				};
				popToast(excuse);
				scope.tryAgain = msg => {
					excuse = model[Math.floor(Math.random()*model.length)];
					popToast(excuse);
				};
			}
		};
	})
;
