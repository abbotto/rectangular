/**
* COMPONENT
* - Uses the `component$` service to update the `<component />` directive
*
* @module Component->Todo-List
* @params {Object} component$ The component service object
* @params {Object} view-model The data model for the component template
* @params {Object} data$ The data service object
*
* @example
* import todoListComponent from "~/app/component/todo-list/todo-list.component.js";
* ...
* todoListComponent(component$, vm, data$);
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
