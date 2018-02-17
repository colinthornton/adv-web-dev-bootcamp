$(document).ready(function() {
  $.getJSON('/api/todos')
  .then(function(data) {
    addTodos(data);
  });

  $('#todoInput').keypress(function(event) {
    if (event.which == 13) {
      createTodo();
    }
  });

  $('.list').on('click', 'li', function(event) {
    toggleCompleted($(this));
  });

  $('.list').on('click', 'span', function(event) {
    event.stopPropagation();
    removeTodo($(this).parent());
  });
});

function addTodos(todos) {
  todos.forEach(function(todo) {
    addTodo(todo);
  });
}

function addTodo(todo) {
  var newTodo = $('<li>' + todo.name + ' <span>X</span></li>');
  newTodo.data('id', todo._id);
  newTodo.data('completed', todo.completed);
  newTodo.addClass('task');
  if (todo.completed) {
    newTodo.addClass('done');
  }
  $('.list').append(newTodo);
}

function createTodo() {
  var userInput = $('#todoInput').val();
  $.post('/api/todos', { name: userInput })
  .then(function(newTodo) {
    $('#todoInput').val('');
    addTodo(newTodo);
  })
  .catch(function(err) {
    console.log(err);
  });
}

function toggleCompleted(todo) {
  var isDone = !todo.data('completed');
  var clickedId = todo.data('id');
  var updateUrl = '/api/todos/' + clickedId;
  var updateData = { completed: isDone };
  $.ajax({
    method: 'PUT',
    url: updateUrl,
    data: updateData,
  })
  .then(function(updatedTodo) {
    todo.toggleClass('done');
    todo.data('completed', isDone);
  });
}

function removeTodo(todo) {
  var clickedId = todo.data('id');
  var deleteUrl = '/api/todos/' + clickedId;
  $.ajax({
    method: 'DELETE',
    url: deleteUrl,
  })
  .then(function(data) {
    todo.remove();
  })
  .catch(function(err) {
    console.log(err)
  });
}
