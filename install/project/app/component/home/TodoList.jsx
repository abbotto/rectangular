<div id="TodoList">
	<strong id="todo-title">
		Todo List:
	</strong>

	<ul>
		{Array.apply(null, vm.todo).map(function(task) {
			return (
				<li>
					{ task }
				</li>
			);
		}, this)}
	</ul>
</div>;
