"use strict";

import homeComponent from "app/component/home/home.component.js";

export default angular
	.module("home.route", [
		homeComponent.name
	])
	.config(($stateProvider) => {
		$stateProvider
			.state("home", {
				url: "/",
				template: "<home></home>"
			})
		;
	})
;
