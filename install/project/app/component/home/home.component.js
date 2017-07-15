"use strict";

import componentDirective from "~/app/extension/component/component.directive.js";
import dataService from "~/app/extension/data/data.service.js";
import homeController from "~/app/component/home/home.controller.js";

// --------------------------------
// Home Component (AngularJS)
// --------------------------------
const HomeComponent = {};
HomeComponent.controllerAs = "vm";
HomeComponent.templateUrl = "app/component/home/home.html";
HomeComponent.controller = homeController;

export default angular
	.module("home.component", [
		componentDirective.name,
		dataService.name
	])
	.component("home", HomeComponent)
;
