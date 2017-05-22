const TodoListComponent = require("../todo-list/todo-list.component");

module.exports = function HomeComponentController(
	component$,
	data$
) {
	const vm = this;
	vm.projectName = "Rectangular";
	
	// Initialize TodoList component
	TodoListComponent(component$, vm, data$);
};
