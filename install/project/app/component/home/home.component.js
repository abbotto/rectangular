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
			"be a ninja"
		]);
		
		// Updated by TodoList parent (HomeComponentController)
		vm.newTodoListItem = "";
		
		// Called by TodoList parent (HomeComponentController)
		vm.updateTodoList = () => {
			if (vm.newTodoListItem.length) {
				vm.TodoList.todo = vm.TodoList.todo.push(vm.newTodoListItem);
			}
			
			// Render the TodoList component
			component$.render("TodoList", vm.TodoList);
		};
		
		vm.updateTodoList();
	};
	
	// --------------------------------
	// Home Component Controller (AngularJS)
	// --------------------------------
	const HomeComponentController = function HomeComponentController(
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
			"data.service"
		])
		.component("home", HomeComponent)
	;
})();
