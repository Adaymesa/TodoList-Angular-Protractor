describe('Todos tracker', function() {
	var mock = require('protractor-http-mock');

	beforeEach(function(){
		mock([{
			request: {
				path: 'http://quiet-beach-24792.herokuapp.com/todos.json',
				method: 'GET'
			},
			response: {
				data: [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}]
			}
		}]);
	});

	it('has several ToDos', function() {
		browser.get('/');
		var todos = $$('#todos p');
		expect(todos.first().getText()).toMatch('ToDo1: completed');
		expect(todos.last().getText()).toMatch('ToDo2: not completed');
	});
	it('can add a ToDo', function() {
		browser.get('/');
		$('#new-todo-name').sendKeys("NewToDo");
		$('#add-todo').click();
		var todo = $$('#todos p').last().getText();
		expect(todo).toMatch('NewToDo: not completed');
	});
	it('Can remove a ToDo', function(){
		browser.get('/');
		var todos = $$('#todos p');
		$('#remove-todo').click();
		expect(todos.count()).toEqual(1);
	});
	it('can mark a ToDo as complete', function(){
		browser.get('/');
		var todo = $$('#todos p').last();
		todo.element(by.css('.complete')).click();

		expect(todo.getText()).toMatch("ToDo2: completed");
	});
	afterEach(function(){
  mock.teardown();
});
});