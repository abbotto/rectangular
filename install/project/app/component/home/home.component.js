"use strict";

(() => {
	// --------------------------------
	// TodoList Component (ReactJS)
	// --------------------------------
	const TodoListComponent = function TodoListComponent(
		component$,
		vm
	) {
		// Updated by TodoList parent (HomeComponent)
		vm.newTodoListItem = "";
		
		// Called by TodoList parent
		vm.updateTodoList = () => {
			vm.newTodoListItem.length
				&& vm.TodoList.todo.push(vm.newTodoListItem)
			;
			
			// Re-render the TodoList component
			component$.render("TodoList", vm.TodoList);
		};
		
		vm.TodoList = {};
		vm.TodoList.alias = "vm";
		vm.TodoList.templateUrl = "home/TodoList.jsx";
		
		vm.TodoList.todo = [
			"get groceries",
			"mow the lawn",
			"walk the dog"
		];
		
		vm.updateTodoList();
	};
	
	// --------------------------------
	// Home Controller (AngularJS)
	// --------------------------------
	const HomeComponentController = function HomeComponentController(
		$rootScope,
		$scope,
		$timeout,
		component$
	) {
		const vm = this;
		vm.projectName = "Rectangular";
		
		// Initialize TodoList component
		TodoListComponent(component$, vm);
	};
	
	const HomeComponent = {};
	HomeComponent.controllerAs = "vm";
	HomeComponent.templateUrl = "home/home.component.html";
	HomeComponent.controller = HomeComponentController;
	
	// --------------------------------
	// Home Component (AngularJS)
	// --------------------------------
	angular
		.module("home.component", [
			"component.directive",
			"component.service"
		])
		.component("home", HomeComponent)
	;
})();
