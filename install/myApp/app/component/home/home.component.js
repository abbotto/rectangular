"use strict";

import componentDirective from "~/app/extension/component/component.directive.js";
import dataService from "~/app/extension/data/data.service.js";
import homeController from "~/app/component/home/home.controller.js";
import template from "~/app/component/home/home.component.html";

// --------------------------------
// Home Component (AngularJS)
// --------------------------------
const HomeComponent = {};
HomeComponent.controllerAs = "vm";
HomeComponent.template = template.default;
HomeComponent.controller = homeController;

export default angular
	.module("home.component", [
		componentDirective.name,
		dataService.name
	])
	.component("home", HomeComponent)
;
