module.exports = { contents: "\"use strict\";Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=TodoListComponent;// --------------------------------\n// Todo-List Component (ReactJS)\n// --------------------------------\nfunction TodoListComponent(component$,model,data$){model.TodoList={};model.TodoList.alias=\"vm\";model.TodoList.templateUrl=\"app/component/todo-list/todo-list.component.jsx\";// Immutable todo list\nmodel.TodoList.todo=data$.fromJS([\"get groceries\",\"mow the lawn\",\"be a ninja\"]);// Updated by TodoList parent (HomeComponentController)\nmodel.newTodoListItem=\"\";// Called by TodoList parent (HomeComponentController)\nmodel.updateTodoList=function(){if(model.newTodoListItem.length){model.TodoList.todo=model.TodoList.todo.push(model.newTodoListItem);}// Render the TodoList component\ncomponent$.render(\"TodoList\",model.TodoList);};model.updateTodoList();};",
dependencies: [],
sourceMap: {},
headerContent: undefined,
mtime: 1497983766000,
devLibsRequired : undefined
};