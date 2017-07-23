"use strict";

/**
* CONTROLLER - `home`
* - Triggers the `todoListComponent` which renders a list in the `HomeComponent`
*
* @module Component->Home-Controller
* @param {Object} data$ The `data.service` module
*/

export default function HomeComponentController(
	data$
) {
	const vm = this;
	vm.projectName = "Rectangular";
	
	// Immutable todo list
	vm.todo = data$.fromJS([
		"get groceries",
		"mow the lawn",
		"be a ninja"
	]);
	
	// Updated by TodoList parent (HomeComponentController)
	vm.newTodoListItem = "";
	
	// Called by TodoList parent (HomeComponentController)
	vm.updateTodoList = () => {
		if (vm.newTodoListItem.length) {
			vm.todo = vm.todo.push(vm.newTodoListItem);
		}
	};
	
	vm.updateTodoList();
};
