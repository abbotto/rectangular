"use strict";

/**
* @ngdoc route
* @name home.route:home
*
* @description
* Used to navigate to the `Home` component
*/

import homeComponent from "~/app/component/home/home.component.js";

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
