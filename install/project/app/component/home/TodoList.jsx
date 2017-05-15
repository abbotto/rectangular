<div id="TodoList">
	<strong id="todo-title">
		Todo List:
	</strong>

	<ul>
		{vm.todo.map(
			(value, key) => <li>{value}</li>
		)}
	</ul>
</div>;
