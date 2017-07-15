/**
* @ngdoc component
* @name todoList.component:todoList
*
* @description
* A ReactJS component used to render a list in a view
*/

// --------------------------------
// Todo-List Component (ReactJS)
// --------------------------------
export default function TodoListComponent(
	component$,
	model,
	data$
) {
	model.TodoList = {};
	model.TodoList.alias = "vm";
	model.TodoList.templateUrl = "app/component/todo-list/todo-list.jsx";
	
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
