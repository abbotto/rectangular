"use strict";

/**
* COMPONENT - `home`
* - The root component of the app
*
* @module Component->Home
*
* @example
* <home></home>
*/

import dataService from "~/app/extension/data/data.service.js";
import homeController from "~/app/component/home/home.controller.js";
import homeTemplate from '~/app/component/home/home.template.html';

// --------------------------------
// Home Component (AngularJS)
// --------------------------------
const HomeComponent = {};
HomeComponent.controllerAs = "vm";
HomeComponent.templateUrl = homeTemplate.default;
HomeComponent.controller = homeController;

export default angular
	.module("home.component", [
		dataService.name
	])
	.component("home", HomeComponent)
;
