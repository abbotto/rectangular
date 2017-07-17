"use strict";

/**
* CONTROLLER - `home`
* - Triggers the `todoListComponent` which renders a list in the `HomeComponent`
*
* @module Component->Home-Controller
* @param {Object} component$ The `component.service` module
* @param {Object} data$ The `data.service` module
*/

import todoListComponent from "~/app/component/todo-list/todo-list.component.js";

export default function HomeComponentController(
	component$,
	data$
) {
	const vm = this;
	vm.projectName = "Rectangular";
	
	// Initialize TodoList component
	todoListComponent(component$, vm, data$);
};
