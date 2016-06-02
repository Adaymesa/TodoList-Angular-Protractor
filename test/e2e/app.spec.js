describe('Todos tracker', function() {
  it('has a toDo', function() {
    browser.get('/');
    var todo = $('#todo');
    expect(todo.getText()).toEqual('ToDo1');
  });
});