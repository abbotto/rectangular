"use strict";

(() => {
	// --------------------------------
	// TodoList Component (ReactJS)
	// --------------------------------
	const TodoListComponent = function TodoListComponent(
		component$,
		vm,
		data$
	) {
		vm.TodoList = {};
		vm.TodoList.alias = "vm";
		vm.TodoList.templateUrl = "home/TodoList.jsx";
		
		// Immutable todo list
		vm.TodoList.todo = data$.fromJS([
			"get groceries",
			"mow the lawn",
			"walk the dog"
		]);
		
		// Updated by TodoList parent (HomeComponentController)
		vm.newTodoListItem = "";
		
		// Called by TodoList parent (HomeComponentController)
		vm.updateTodoList = () => {
			if (vm.newTodoListItem.length) {
				const newList = vm.TodoList.todo.push(vm.newTodoListItem);
				vm.TodoList.todo = newList;
			}
			
			// Re-render the TodoList component
			component$.render("TodoList", vm.TodoList);
		};
		
		vm.updateTodoList();
	};
	
	// --------------------------------
	// Home Controller (AngularJS)
	// --------------------------------
	const HomeComponentController = function HomeComponentController(
		$rootScope,
		$scope,
		$timeout,
		component$,
		data$
	) {
		const vm = this;
		vm.projectName = "Rectangular";
		
		// Initialize TodoList component
		TodoListComponent(component$, vm, data$);
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
			"component.service",
			"data.service"
		])
		.component("home", HomeComponent)
	;
})();
