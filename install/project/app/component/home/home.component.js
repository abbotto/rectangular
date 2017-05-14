"use strict";

(() => {
	// Options
	const options = {};

	// Component directive
	options.templateUrl = "home/home.component.html";

	// "View Model" variable
	options.controllerAs = "vm";

	options.controller = function HomeController(
		$rootScope,
		$scope,
		$timeout,
		component$
	) {
		const vm = this;
		vm.projectName = "Rectangular";

		// --------------------------------
		// TodoList Component (w/ ReactJS)
		// --------------------------------
		
		// For TodoList parent
		vm.newTodoListItem = "";
		
		// Update the todo list
		vm.updateTodoList = () => {
			vm.newTodoListItem.length && vm.TodoList.todo.push(vm.newTodoListItem);
			
			// Re-render the TodoList component
			component$.render("TodoList", vm.TodoList);
		};
		
		// The TodoList model
		vm.TodoList = {};
		vm.TodoList.templateUrl = "home/TodoList.jsx";
		
		vm.TodoList.todo = [
			"get groceries",
			"mow the lawn",
			"walk the dog"
		];

		// Initialize TodoList
		vm.updateTodoList();
	};

	// Register the component
	angular
		.module("home.component", [
			"component.directive",
			"component.service"
		])
		.component("home", options)
	;
})();
