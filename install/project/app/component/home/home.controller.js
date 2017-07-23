"use strict";

/**
* CONTROLLER - `home`
* - Triggers the `todo-list` data in the `HomeComponent`
*
* @module Component->Home-Controller
* @param {Object} data$ The `data.service` module
*/

export default function HomeComponentController(
	data$
) {
	const vm = this;
	vm.projectName = "Rectangular";
	vm.newTodoListItem = "";
	
	// Immutable data
	vm.data = data$.List([
		"get groceries",
		"mow the lawn",
		"be a ninja"
	]);
	
	vm.updateTodoList = () => {
		if (vm.newTodoListItem.length) {
			vm.data = vm.data.push(vm.newTodoListItem);
			vm.list = vm.data.toJS();
		}
	};
	
	vm.list = vm.data.toJS();
	vm.updateTodoList();
};
