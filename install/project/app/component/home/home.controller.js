"use strict";

/**
* @ngdoc controller
* @name home.controller:Home
*
* @description
* Triggers the `todoListComponent` which renders a list in the view
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
