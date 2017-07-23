# <a name='ReactComponents'></a>React Components
React components can be rendered within AngularJS components with the `Component` extension.

#### Example
A simple React component may resemble the following:

	// --------------------------------
	// ReactJS Component
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
	// AngularJS Component
	// --------------------------------
	...
