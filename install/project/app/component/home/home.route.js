"use strict";

/**
* ROUTE - `home`
* - Navigate to the `HomeComponent`
* - URL: `/`
*
* @module Component->Home-Route
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
