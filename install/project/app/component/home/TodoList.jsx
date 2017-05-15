<div id="TodoList">
	<ul>
		{vm.todo.map(
			(value, key) => <li>{value}</li>
		)}
	</ul>
</div>;
