"use strict";

(() => {
	// --------------------------------
	// TodoList Component (ReactJS)
	// --------------------------------
	
	const TodoList = (component$) => {
		// Updated by TodoList parent
		this.newTodoListItem = "";
		
		// Called by TodoList parent
		this.updateTodoList = () => {
			this.newTodoListItem.length && this.TodoList.todo.push(this.newTodoListItem);
			
			// Re-render the TodoList component
			component$.render("TodoList", this.TodoList);
		};
		
		this.TodoList = {};
		this.TodoList.templateUrl = "home/TodoList.jsx";
		
		this.TodoList.todo = [
			"get groceries",
			"mow the lawn",
			"walk the dog"
		];

		this.updateTodoList();
	}
	
	// --------------------------------
	// Home Component (AngularJS)
	// --------------------------------
	const options = {};
	options.controllerAs = "vm";
	options.templateUrl = "home/home.component.html";
	
	options.controller = function HomeController(
		$rootScope,
		$scope,
		$timeout,
		component$
	) {
		const vm = this;
		vm.projectName = "Rectangular";
		
		// Initialize Todo component
		(TodoList.bind(vm))(component$);
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
