describe('ToDoController', function() {
	beforeEach(module('toDoApp'));

	var ctrl;

	beforeEach(inject(function($controller) {
		ctrl = $controller('ToDoController');
	}));

	it('initialises with several todos', function() {
		var todos = [
		{text: "ToDo1", completed: true},
		{text: "ToDo2", completed: false}
		];

		expect(ctrl.todos).toEqual(todos);
	});

	it('adds a new todo', function() {
		ctrl.addToDo('NewTodo');

		var todo = {text: "NewTodo", completed: false};
		expect(ctrl.todos.pop()).toEqual(todo);
	});

	it('removes the last todo', function(){
		var initialCount = ctrl.todos.length;

		ctrl.removeToDo();

		expect(ctrl.todos.lenght).toEqual(initialCount - 1);
	});
});