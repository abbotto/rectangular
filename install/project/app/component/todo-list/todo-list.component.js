// --------------------------------
// Todo-List Component (ReactJS)
// --------------------------------
module.exports = function TodoListComponent(
	component$,
	model,
	data$
) {
	model.TodoList = {};
	model.TodoList.alias = "model";
	model.TodoList.templateUrl = "todo-list/todo-list.jsx";
	
	// Immutable todo list
	model.TodoList.todo = data$.fromJS([
		"get groceries",
		"mow the lawn",
		"be a ninja"
	]);
	
	// Updated by TodoList parent (HomeComponentController)
	model.newTodoListItem = "";
	
	// Called by TodoList parent (HomeComponentController)
	model.updateTodoList = () => {
		if (model.newTodoListItem.length) {
			model.TodoList.todo = model.TodoList.todo.push(model.newTodoListItem);
		}
		
		// Render the TodoList component
		component$.render("TodoList", model.TodoList);
	};
	
	model.updateTodoList();
};
