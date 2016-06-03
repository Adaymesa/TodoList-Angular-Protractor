describe('Todos tracker', function() {
	it('has several ToDos', function() {
		browser.get('/');
		var todos = $$('#todos p');
		expect(todos.first().getText()).toEqual('ToDo1: completed');
		expect(todos.last().getText()).toEqual('ToDo2: not completed');
	});
	it('can add a ToDo', function() {
		browser.get('/');
  $('#new-todo-name').sendKeys("NewToDo");
  $('#add-todo').click();
	var todo = $$('#todos p').last().getText();
  expect(todo).toEqual('NewToDo: not completed');
});
	it('Can remove a ToDo', function(){
		browser.get('/');
		var todos = $$('#todos p');
		$('#remove-todo').click();
		expect(todos.count()).toEqual(1);
	});
});