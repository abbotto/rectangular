// --------------------------------
// Services
// --------------------------------
(() => {
	"use strict";
	
	angular
	.module("app.service", [
		"locale.service",
		"promise.service",
		"ui.service",
		"upload.service"
	]);
})();
